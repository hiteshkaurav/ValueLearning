# MindSpark Quest Wiki 🌟

Welcome to the **MindSpark Quest** documentation hub. This wiki provides comprehensive information about the architecture, features, and development of our educational interactive storybook application.

## Quick Navigation

- **[Getting Started](./Getting-Started.md)** - How to install and run the application
- **[Architecture Overview](./Architecture.md)** - System design and technical structure
- **[Features Guide](./Features.md)** - Detailed feature documentation
- **[Development Guide](./Development.md)** - For developers contributing to the project

---

## What is MindSpark Quest? 🎯

**MindSpark Quest** is an interactive, storybook-style web application designed to teach children aged **5-10** the **16 Habits of Mind** through engaging narratives, playful reflections, and meaningful visual feedback.

### Core Philosophy

- 🧠 **Mindfulness-Focused**: Teaches critical thinking and emotional intelligence
- 🎨 **Playful & Cozy**: Warm illustrations, gentle tone, and no competitive stress
- 🌱 **Growth-Oriented**: Visual progress tracking through the Growth Garden
- 👨‍👩‍👧 **Family-Connected**: Parent Dashboard for tracking progress and starting conversations

---

## Key Features

### 🗺️ Interactive Island Map
16 biomes organized by school values (Curiosity, Collaboration, Creativity, Compassion, Courage), each featuring an animal character representing a specific Habit of Mind.

### 📖 Deep Story Quests
Three fully-developed interactive quests (Rocky the Goat, Sage the Owl, Luna the Elephant) with multi-step narratives, choices, and reflections.

### 📅 Daily Rotation System
Each day features a different "Daily Quest," encouraging consistent engagement and exploration of all habits.

### 🌱 Growth Garden
A living garden where plants grow as children complete activities, providing visual feedback and a sense of accomplishment.

### 🎫 Sticker Collection
Collect colorful stickers and "MindSpark Gems" that match school values as achievements are unlocked.

### 👨‍👩‍👦 Parent Dashboard
Monitor child progress, access conversation starters, and discover offline activity ideas aligned with each Habit of Mind.

---

## Project Stats

| Aspect | Details |
|--------|---------|
| **Language** | Vanilla JavaScript, HTML5, CSS3 |
| **Architecture** | Single-Page Application (SPA) |
| **State Management** | Client-side with Local Storage persistence |
| **Graphics** | SVG-based character rendering |
| **Browser Support** | All modern browsers (no build process required) |
| **Target Age Group** | 5-10 years old |

---

## Quick Start

```bash
# No installation required!
# Simply open index.html in your browser

# To verify the code integrity:
node --check app.js
node verify.js
```

For detailed setup instructions, see **[Getting Started](./Getting-Started.md)**.

---

## The 16 Habits of Mind

The application teaches habits organized by five school values:

### 🔍 Curiosity (Whispering Woods)
- Sprout, Atlas, Mirror, Scout, Nova, Spark

### 🤝 Collaboration (Harmony Hive)
- Harmony, Luna, Crystal

### 🎨 Creativity (Dreamers Peak)
- Prism, Flexi, Giggles

### 💚 Compassion (Gentle Valley)
- Sage, Luna, Flexi, Mirror, Scout

### 🦁 Courage (Brave Cliffs)
- Rocky, Brave, Archer, Sage, Sprout

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | CSS Grid, Flexbox, CSS Variables, Animations |
| **Graphics** | SVG (dynamic character generation) |
| **State** | JavaScript objects with Local Storage |
| **No Build Tools** | Plain vanilla stack (open and play) |

---

## Project Structure

```
ValueLearning/
├── index.html              # Core HTML structure and layout
├── style.css               # Styling system and animations
├── app.js                  # State engine and quest logic
├── verify.js               # Automated verification checks
├── README.md               # User-facing documentation
└── wiki/                   # This documentation
    ├── Home.md
    ├── Getting-Started.md
    ├── Architecture.md
    ├── Features.md
    └── Development.md
```

---

## Documentation Structure

### For Users
- **[Getting Started](./Getting-Started.md)** - How to play the game
- **[Features Guide](./Features.md)** - What each feature does

### For Developers
- **[Architecture Overview](./Architecture.md)** - How the system works
- **[Development Guide](./Development.md)** - How to contribute

---

## Communication & Support

- 📧 For questions about gameplay: Check the [Features Guide](./Features.md)
- 🔧 For technical issues: See [Development Guide](./Development.md)
- 🎨 For design/UX feedback: Check [Architecture Overview](./Architecture.md)

---

## License

This project is part of the ValueLearning initiative. See LICENSE file in the repository for details.

---

**Last Updated**: 2025-05-25 | Version: 1.0
