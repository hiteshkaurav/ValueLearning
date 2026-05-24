# Implementation Plan — MindSpark Quest 🌟

Teaching the **16 Habits of Mind** to children aged 5-10 through an interactive, storybook-style web application.

---

## 📋 Finalized Design & Requirements (User Approved)

Following our discussion, we have aligned on these core product directions:
1. **Scope**: A comprehensive **MindSpark Island Map** with all 16 character zones, featuring **3 high-fidelity deep quests** (Rocky the Goat, Sage the Owl, Luna the Elephant) that provide a rich, multi-step interactive storybook experience.
2. **Characters**: Friendly **animal characters** representing each habit.
3. **Daily Mechanic**: A **daily rotation system** where a new character/habit is highlighted each day as the featured "Daily Quest", establishing a calm daily routine.
4. **Feel**: A cozy, **storybook-style, reflective feel** rather than a high-stress competitive game. Focuses on breathing, empathy, thoughtful choices, and personal reflection.
5. **No specific starting habit**: We will balance the curriculum evenly across the five main school values (Curiosity, Collaboration, Creativity, Compassion, Courage).

---

## 🛠️ Architecture & Files

We will build this as a **modern, high-fidelity single-page application (SPA)** inside the workspace using clean, modular vanilla web technologies:

```
ValueLearning/
├── index.html          # Core semantic structure, layout shells, and static screens
├── style.css           # Premium storybook styling system (Curated palettes, HSL tokens, CSS Grid/Flexbox layouts, warm gradients, glassmorphism, responsive styles)
├── app.js              # Application state, daily rotation scheduler, sound triggers, local storage state, dynamic SVG renderers
└── README.md           # Instructions on how to open and interact with the application
```

---

## 🗺️ Screen-by-Screen Breakdown

### 1. 🎬 Welcome / Gate Screen
* **Objective**: Onboard the child, capture their name, and tailor the experience.
* **UI**: Clean layout with a "Parent Access" button at the top-right. Dyslexia-friendly, large sans-serif typography.
* **Controls**:
  * Text input: "What is your name, adventurer?"
  * Visual selector: "Choose your Age Group" (Ages 5-7 with audio-visual emphasis, or Ages 8-10 with strategic text reflection).
  * "Enter the Island" entry button with interactive hover states.

### 2. 🗺️ MindSpark Island (Main Map Hub)
* **Objective**: The central navigable map of the 16 Habits.
* **UI**: A beautiful SVG-rendered cartoon island divided into 5 distinct biomes (representing the school values):
  * 🔍 **Whispering Woods (Curiosity)**: Sprout, Atlas, Mirror, Scout, Nova, Spark.
  * 🤝 **Harmony Hive (Collaboration)**: Harmony, Luna, Crystal.
  * 🎨 **Dreamers Peak (Creativity)**: Prism, Flexi, Giggles.
  * 💚 **Gentle Valley (Compassion)**: Sage, Luna, Flexi, Mirror, Scout.
  * 🦁 **Brave Cliffs (Courage)**: Rocky, Brave, Archer, Sage, Sprout.
* **Interactive Elements**:
  * Each biome has its own soft atmospheric background color/gradient.
  * 16 character markers (using beautiful custom SVGs) that bounce slightly on hover.
  * Clicking an inactive character shows a storybook preview card: *"This is Rocky's Cliff. Rocky teaches us about **Persisting**! Come back when it's Rocky's day!"*
  * **Daily Quest Highlight**: The active character of the day sparkles with a soft radial pulsing glow and shows a bouncing quest badge.

### 3. 📖 Storybook Quest Screen (3 Deep Interactive Quests)
The deep quests will offer interactive story paths tailored to the child's age group:

#### 🧗 Quest A: **Rocky the Mountain Goat** (Persisting - Courage)
* **The Hook**: Rocky wants to climb up the misty Sunset Peak to watch the stars, but path obstacles block his progress.
* **Interactive Story Choice 1**: A sudden strong wind blows away Rocky's rope. Does he give up, or look around for another path? (Teaches that persisting means finding *new* strategies).
* **Calm Mini-Game**: *Stone Path Weaver*. Help Rocky build a stepping-stone bridge across a small gap. The child drags and rotates shapes into place. If a block falls, Rocky shrugs playfully and says, "Let's try a different size stone!" rather than displaying a "Game Over" screen.
* **Reflection**: "What is something hard that you tried to do this week? How did you keep going?" (Kids can type or choose pre-set emotion stickers).

#### 🦉 Quest B: **Sage the Owl** (Managing Impulsivity - Compassion & Courage)
* **The Hook**: Sage is baking a legendary blueberry pie. The delicious aroma is irresistible, and Sage wants to eat it *right now* before it cools down, which would burn Sage's tongue!
* **Interactive Story Choice 1**: Sage's wings are shaking with excitement. How can Sage calm down?
  * *Option A*: Run around the kitchen screaming (impulsive choice).
  * *Option B*: Take three deep breaths and sing a calming baking song (thoughtful choice).
* **Calm Mini-Game**: *The Three Breaths Balloon*. A beautiful breathing guide where holding a button inflates a gentle balloon as Sage inhales, and releasing it deflates it as Sage exhales. Prompts the child to take deep breaths with Sage.
* **Reflection**: "Next time you feel super excited or angry, what can you do to pause?"

#### 🐘 Quest C: **Luna the Elephant** (Listening with Empathy - Collaboration & Compassion)
* **The Hook**: Luna hears a quiet whimpering from the bushes. It's Toby the Robin, who lost his favorite shiny button and is crying. Luna wants to understand Toby's feelings.
* **Interactive Story Choice 1**: Toby is talking very fast and crying. What should Luna do first?
  * *Option A*: Interrupt Toby and say "It's just a button, don't worry!"
  * *Option B*: Keep ears wide open, lean down, and stay quiet to hear the whole story.
* **Calm Mini-Game**: *Emotion Soundboard*. Luna uses her large ears to hear Toby's soft hums. The child clicks on the expression mask that matches Toby's voice (Sadness, Excitement, Fear, Joy) to help Luna name Toby's feelings.
* **Reflection**: "Think of a friend. What makes them feel happy? What makes them feel sad?"

---

### 4. 🌱 The Growth Garden
* **Objective**: Visualize learning through a physical, organic space.
* **UI**: A serene clearing on the island with 16 seedling slots.
* **Mechanic**:
  * Completing a quest plants a glowing seed.
  * Every repeat play or completion grows the plant from seed ➡️ sprout ➡️ flower.
  * Hovering/clicking a flower triggers a small particle animation and shows the character's core rule: *"Rocky's flower reminds us: Never give up, try another way!"*

### 5. 🏆 Collection Screen (Sticker Book)
* **Objective**: Reward children and encourage reflection.
* **UI**: A cozy leather-bound storybook interface with 16 slots.
* **Mechanics**:
  * Unlocked characters appear as beautiful, vibrant stickers.
  * Collected "MindSpark Gems" appear at the top. The gems match the color theme of the 5 values:
    * Curiosity Gem (Sparkly Yellow 🟡)
    * Collaboration Gem (Ocean Blue 🔵)
    * Creativity Gem (Dreamy Purple 🟣)
    * Compassion Gem (Emerald Green 🟢)
    * Courage Gem (Warm Amber 🟠)

### 6. 👨‍👩‍👧 Parent Dashboard
* **Objective**: Connect the digital experience with offline family life.
* **Access**: Secured by a kid-friendly "Parent Lock" screen (e.g., "Ask a grown-up to solve: 7 + 8 = ?").
* **Features**:
  * **Daily Progress Tracker**: Shows completed habits and active streaks.
  * **Interactive Conversation Starters**:
    * *"I see Leo helped Rocky the Goat today! Ask Leo: 'What's something you worked hard on today, even if it was tricky?'"*
  * **Home Activity Sheets**: Recommended low-friction activities for each value (e.g., "Go on a sensory sound walk in the backyard for Curiosity").

---

## 🎨 Visual Design System

* **Color Palette**:
  * **Primary background**: Gentle off-white/cream storybook canvas (`#FAF6EE`).
  * **Text**: Deep dark slate charcoal (`#2D3748`) for maximum readability.
  * **Theme Colors (Values)**:
    * Curiosity: HSL Golden Sun (`hsl(45, 95%, 45%)`)
    * Collaboration: HSL Sky Blue (`hsl(200, 85%, 45%)`)
    * Creativity: HSL Lavender Dream (`hsl(270, 75%, 50%)`)
    * Compassion: HSL Safe Green (`hsl(145, 60%, 40%)`)
    * Courage: HSL Sunset Orange (`hsl(18, 90%, 48%)`)
* **Typography**:
  * Headings: Modern, playful serif or soft slab-serif (`'Outfit'`, `'Quicksand'`, or standard fallback system fonts) that looks premium yet approachable.
  * Body: Rounded sans-serif (`'Nunito'` or similar) for readability.
* **Animations**:
  * Bouncy entry transitions.
  * Smooth map parallax/zoom when entering biomes.
  * Soft pulsing radial lighting for active quests.

---

## 🧪 Verification Plan

### Automated/Code Integrity Checks
1. **Linter & Syntax**: Validate CSS and Javascript file formats.
2. **Responsiveness Checks**: Test rendering across mobile, tablet, and desktop views.
3. **Local Storage Persistence**: Verify that completing a quest saves data to `localStorage` and persists upon page refresh.

### Manual Verification Flow
1. Open page ➡️ Land on Welcome screen.
2. Enter name "Leo" and pick "Ages 5-7" ➡️ Verify dashboard adapts and island map loads.
3. Verify that the daily quest (Rocky or Sage or Luna) is highlighted with pulsing sparkles.
4. Click on Rocky's zone ➡️ Complete the quest using constructive choices.
5. Finish story ➡️ Earn the Courage Gem and Rocky's Sticker.
6. Open Growth Garden ➡️ Verify Rocky's seed is growing.
7. Open Sticker Book ➡️ Verify Rocky's sticker is placed.
8. Open Parent Dashboard, bypass the kid lock ➡️ Confirm that progress reflects "Leo has practiced 1 Courage habit: Persisting", and displays the customized parent prompts.
9. Refresh page ➡️ Ensure all states remain intact.

---

## 🚀 Plan of Action

* **Step 1**: Establish the design system in `style.css` containing HSL typography, storybook cards, layout definitions, biomes, and responsive components.
* **Step 2**: Create the main shell in `index.html` with containers for the Welcome Screen, Map Screen, Quest Screen, Garden, Collection, and Parent Dashboard.
* **Step 3**: Develop `app.js` to implement core state management, view routing, `localStorage` savings, dynamic SVG generation for characters, the daily rotation scheduler, and full script mechanics for the 3 deep storybooks.
* **Step 4**: Perform extensive styling passes to ensure absolute visual quality (warm margins, elegant rounded cards, magical background colors, interactive hovers).
* **Step 5**: Test all interactive paths and deliver the finished product with a descriptive guide.
