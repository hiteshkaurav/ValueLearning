# MindSpark Quest 🌟

Teaching children aged 5-10 the **16 Habits of Mind** through interactive storybooks and playful reflections.

## Core Features
1. **Interactive Island Map**: 16 biomes for each animal character and Habit of Mind.
2. **Daily Rotation**: Automatically cycles the featured daily quest to build consistency.
3. **Cozy Storybook Vibe**: Gentle illustrations, choices, reflections, and breathing mechanics.
4. **Growth Garden**: Visual garden where plants representing habits grow as children complete activities.
5. **Sticker Book Collection**: Collect stickers and colorful "MindSpark Gems" matching school values.
6. **Parent Dashboard**: Progress trackers, conversation starters, and offline activity ideas.

## How to Play
Just double-click `index.html` in your browser to begin the adventure. No installation or dev server is required!

## Verification
Run the lightweight automated checks:

```bash
node --check app.js
node verify.js
```

Manual smoke test:
1. Enter a child name, choose an age group, and open the island map.
2. Complete Rocky, Sage, and Luna through their mini-games.
3. Confirm stickers, gems, garden growth, reflections, and Parent Corner stats update.
4. Refresh the page and confirm progress persists from local storage.

## Project Structure
- `index.html`: Core HTML structure and layout elements.
- `style.css`: Playful storybook styling, warm colors, animations, and transitions.
- `app.js`: State engine, SVG character generation, and core story quest scripts.
- `implementation_plan.md`: Approved architectural blueprints and outline.
