# Development Guide 🛠️

For developers wanting to understand, modify, or contribute to MindSpark Quest.

---

## Project Overview

**MindSpark Quest** is a **single-page application (SPA)** built with vanilla JavaScript, HTML5, and CSS3. It requires no build process, no dependencies, and no backend server.

**Philosophy**: Simple, maintainable, educational code that demonstrates modern web development best practices without unnecessary complexity.

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend UI** | HTML5 + Semantic elements |
| **Styling** | CSS3 (Grid, Flexbox, Custom Properties) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Graphics** | SVG (Scalable Vector Graphics) |
| **State Management** | In-memory objects + Local Storage |
| **Build Process** | None (direct browser execution) |

---

## Project Structure

```
ValueLearning/
├── index.html              # Core DOM structure & layout shells
├── style.css               # Styling system & animations
├── app.js                  # Application logic & state
├── verify.js               # Automated verification tests
├── README.md               # User documentation
└── wiki/                   # This documentation
    ├── Home.md
    ├── Getting-Started.md
    ├── Architecture.md
    ├── Features.md
    └── Development.md
```

---

## Setting Up Development Environment

### Prerequisites
- Any text editor (VS Code, Sublime, Notepad++, etc.)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for verification only)

### Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/hiteshkaurav/ValueLearning.git
cd ValueLearning
```

2. **Open in editor**
```bash
code .  # For VS Code
# or open folder in your favorite editor
```

3. **Run the app**
```bash
# Simply open index.html in your browser
# or run a local server (optional)
python -m http.server 8000  # Then visit http://localhost:8000
```

4. **Verify code**
```bash
node --check app.js  # Syntax validation
node verify.js       # Automated tests
```

---

## Architecture Deep Dive

### Entry Point: index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata, fonts, styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Layout shells for each screen -->
    <div id="welcome-screen"><!-- Welcome UI --></div>
    <div id="island-screen"><!-- Island map --></div>
    <div id="quest-screen"><!-- Story quest --></div>
    
    <!-- App script loads last -->
    <script src="app.js"></script>
</body>
</html>
```

**Key Principles**:
- Semantic HTML5 structure
- Accessibility-first markup
- Layout shells pre-rendered in HTML
- No dynamic HTML injection (state controls visibility)

### State Management: app.js Core Structure

```javascript
// Global Application State
const gameState = {
    childProfile: { /* ... */ },
    questProgress: { /* ... */ },
    achievements: { /* ... */ },
    dailyRotation: { /* ... */ }
};

// Core Functions
function initializeApp() { /* ... */ }
function updateState(updates) { /* ... */ }
function renderScreen(screenName) { /* ... */ }
function saveToPersistence() { /* ... */ }
function loadFromPersistence() { /* ... */ }

// Event Handlers
document.addEventListener('DOMContentLoaded', initializeApp);
document.getElementById('button-id').addEventListener('click', handleClick);
```

**State Philosophy**:
- Single source of truth: `gameState` object
- Immutable updates: Create new objects rather than mutate
- Reactive rendering: UI always reflects current state
- Persistent storage: Auto-save to Local Storage

### Styling System: style.css Organization

```css
/* 1. CSS Variables (Design Tokens) */
:root {
    --color-primary: hsl(35, 100%, 60%);
    --color-accent: hsl(260, 70%, 50%);
    --font-size-base: 1rem;
    /* ... more tokens ... */
}

/* 2. Reset & Base Styles */
* { box-sizing: border-box; }
body { font-family: 'Dyslexia-Friendly', sans-serif; }

/* 3. Layout System */
.container { display: grid; }
.flex-row { display: flex; }

/* 4. Component Styles */
.button { /* ... */ }
.card { /* ... */ }

/* 5. Animation Keyframes */
@keyframes fadeIn { /* ... */ }

/* 6. Responsive Media Queries */
@media (max-width: 768px) { /* ... */ }
```

---

## Key Code Sections

### 1. Daily Rotation Algorithm

```javascript
function getDailyFeaturedHabit() {
    const habits = [
        'rocky', 'sage', 'luna', 'harmony', 
        'crystal', 'prism', 'flexi', 'giggles',
        // ... all 16 habits
    ];
    
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const habitIndex = dayOfYear % habits.length;
    
    return habits[habitIndex];
}
```

**How it works**:
- Calculates day-of-year (0-365)
- Modulo 16 to get habit index (0-15)
- Same algorithm everywhere = consistent results
- Time-based, not random = predictable for testing

### 2. Quest State Progression

```javascript
function completeQuest(habitId, choicesMade) {
    const newQuest = {
        habitId,
        date: new Date().toISOString(),
        choices: choicesMade,
        completed: true
    };
    
    gameState.questProgress.completedQuests.push(habitId);
    gameState.questProgress.questHistory.push(newQuest);
    
    // Award achievements
    awardSticker(habitId);
    awardGems(25);
    growGardenPlant(habitId);
    
    // Persist immediately
    saveToPersistence();
}
```

### 3. SVG Character Rendering

```javascript
function generateCharacterSVG(habitId) {
    const character = CHARACTERS[habitId];
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    
    // Create character parts dynamically
    const head = createCircle(100, 60, character.headSize, character.color);
    const eyes = createEyes(character.eyeStyle);
    const body = createBody(character.bodyShape);
    
    svg.appendChild(head);
    svg.appendChild(eyes);
    svg.appendChild(body);
    
    return svg;
}
```

### 4. Local Storage Persistence

```javascript
function saveToPersistence() {
    const stateSnapshot = {
        version: 1,
        childProfile: gameState.childProfile,
        questProgress: gameState.questProgress,
        achievements: gameState.achievements,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('mindspark_quest_state', 
        JSON.stringify(stateSnapshot)
    );
}

function loadFromPersistence() {
    const saved = localStorage.getItem('mindspark_quest_state');
    if (saved) {
        const stateSnapshot = JSON.parse(saved);
        Object.assign(gameState, stateSnapshot);
    }
}
```

---

## Common Development Tasks

### Adding a New Quest

1. **Define Character in CHARACTERS object**
```javascript
CHARACTERS.nova = {
    name: "Nova the Star",
    habit: "Embracing Wonder",
    color: "#FFD700",
    story: {
        intro: "Nova discovers...",
        scene1: {
            text: "...",
            choices: [
                { text: "Option A", consequence: "path_a" },
                { text: "Option B", consequence: "path_b" }
            ]
        }
        // ... more scenes
    }
};
```

2. **Add to DAILY_ROTATION array**
```javascript
const DAILY_ROTATION = [
    // ... existing habits
    'nova',  // Add here
];
```

3. **Create quest narrative functions**
```javascript
function runNovaQuest() {
    showStoryScreen(CHARACTERS.nova);
    // Handle choices and consequences
}
```

4. **Test thoroughly**
```bash
# Manual test: Complete quest, verify sticker/gems awarded
# Check: Progress persists on page refresh
# Verify: SVG renders correctly
```

### Modifying Styling

1. **Update CSS Variables** for global changes
```css
:root {
    --color-primary: hsl(35, 100%, 65%);  /* Changed */
}
```

2. **Add component styles**
```css
.new-element {
    background: var(--color-primary);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
}
```

3. **Use media queries** for responsiveness
```css
@media (max-width: 768px) {
    .container { grid-template-columns: 1fr; }
}
```

### Adding New Features

1. **Plan state changes** - What data needs to change?
2. **Update gameState object** - Add new properties
3. **Create UI elements** in index.html
4. **Style new elements** in style.css
5. **Add event handlers** in app.js
6. **Test persistence** - Data should survive refresh
7. **Run verification** - `node verify.js`

---

## Testing & Verification

### Automated Checks

```bash
# Verify JavaScript syntax
node --check app.js

# Run test suite
node verify.js
```

### Manual Testing Checklist

```
[ ] Welcome flow - Name entry and age selection
[ ] Island navigation - All characters accessible
[ ] Story quest - Complete full quest
[ ] Choices work - Different paths for different choices
[ ] Reflection - Can answer reflection prompt
[ ] Rewards - Sticker, gems, and garden plant awarded
[ ] Persistence - Progress survives page refresh
[ ] Parent dashboard - Stats calculate correctly
[ ] Responsive - Works on mobile/tablet/desktop
[ ] Accessibility - Keyboard navigation works
[ ] Performance - No lag or freezes
```

### Browser DevTools Tips

**Open Developer Tools**:
- Windows: F12 or Ctrl+Shift+I
- Mac: Cmd+Option+I

**Useful Checks**:
- **Console Tab**: Watch for JavaScript errors
- **Application Tab**: View/modify Local Storage
- **Network Tab**: Verify no unexpected requests
- **Responsive Design**: Test different screen sizes

---

## Performance Optimization

### Current Performance Profile
- Initial Load: ~1-2 seconds
- SVG Render: ~50ms per character
- State Update: <10ms
- Local Storage Write: <5ms

### Best Practices

1. **Minimize DOM updates** - Batch UI changes
2. **Use CSS transforms** - For animations (GPU accelerated)
3. **Lazy load assets** - Load only when needed
4. **Compress SVGs** - Use svgo or similar
5. **Profile regularly** - Use DevTools Performance tab

### Memory Management

```javascript
// Good: Reuse elements
const container = document.getElementById('container');
container.innerHTML = ''; // Clear once
// Add new content

// Avoid: Repeatedly selecting same elements
for (let i = 0; i < 100; i++) {
    document.getElementById('item-' + i).style.display = 'block';
}
// Better: Select once
const items = document.querySelectorAll('[id^="item-"]');
items.forEach(item => item.style.display = 'block');
```

---

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Latest | Full support |
| Firefox | ✅ Latest | Full support |
| Safari | ✅ Latest | Full support |
| Edge | ✅ Latest | Full support |
| IE 11 | ❌ No | Uses modern ES6 features |

---

## Deployment

### Simple HTTP Server (Local Testing)
```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server package)
npx http-server

# Then visit: http://localhost:8000
```

### GitHub Pages Hosting
1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. App will be available at: https://yourusername.github.io/ValueLearning

### Custom Hosting
- No build step needed
- Simply upload all files to web server
- Ensure `.html`, `.css`, `.js` files are accessible
- Test offline functionality works

---

## Contributing Guidelines

### Code Style
- Use 4 spaces for indentation
- Use camelCase for variables and functions
- Use UPPER_SNAKE_CASE for constants
- Add comments for complex logic
- Keep functions focused and small

### Commit Messages
```
Format: "<type>: <description>"

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Styling changes
- refactor: Code refactoring
- test: Test additions/changes
- perf: Performance improvements

Example:
feat: Add Luna the Elephant quest character
```

### Pull Request Process
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit regularly
3. Push to your fork
4. Create Pull Request with clear description
5. Ensure verification tests pass: `node verify.js`
6. Request review
7. Merge after approval

---

## Debugging Tips

### Logging State
```javascript
console.log('Current game state:', gameState);
console.log('Completed quests:', gameState.questProgress.completedQuests);
```

### Inspecting Local Storage
```javascript
// In browser console:
localStorage.getItem('mindspark_quest_state')
JSON.parse(localStorage.getItem('mindspark_quest_state'))
```

### Monitoring Persistence
```javascript
// Override save function to track
const originalSave = saveToPersistence;
window.saveToPersistence = function() {
    console.log('Saving state:', gameState);
    originalSave();
};
```

### SVG Debugging
```javascript
// In browser console, inspect SVG elements:
document.querySelector('svg')  // Select SVG
document.querySelector('svg').innerHTML  // View SVG code
```

---

## Future Enhancements

### Planned Features
- [ ] Cloud synchronization (optional)
- [ ] Multiplayer collaboration
- [ ] AI tutor assistance
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Additional quest characters
- [ ] Customizable difficulty levels

### Technical Debt
- [ ] Add ESLint configuration
- [ ] Increase test coverage
- [ ] Optimize SVG rendering
- [ ] Add TypeScript types (optional)
- [ ] Implement proper error boundaries

---

## Getting Help

### Resources
- 📖 Read [Architecture Overview](./Architecture.md) for system design
- 🎮 Review [Features Guide](./Features.md) to understand UX
- 🚀 Check [Getting Started](./Getting-Started.md) for user flow

### Community
- Open GitHub Issues for bugs
- Create GitHub Discussions for questions
- Submit Pull Requests with improvements

---

## License

MindSpark Quest is part of the ValueLearning initiative. See LICENSE in repository for details.

---

**Last Updated**: 2025-05-25 | Dev Guide Version: 1.0

**Happy coding! 🚀**
