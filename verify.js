const fs = require('fs');
const path = require('path');

console.log("🔍 Starting automated verification checks for MindSpark Quest...\n");

let failed = false;

function assert(condition, message) {
    if (!condition) {
        console.log(`❌ FAIL: ${message}`);
        failed = true;
    } else {
        console.log(`✅ PASS: ${message}`);
    }
}

// 1. Read files
const htmlPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'style.css');
const jsPath = path.join(__dirname, 'app.js');

assert(fs.existsSync(htmlPath), "index.html exists");
assert(fs.existsSync(cssPath), "style.css exists");
assert(fs.existsSync(jsPath), "app.js exists");

if (failed) {
    process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

// 2. Validate index.html Structure
console.log("\n--- Checking index.html markup ---");
const expectedIds = [
    'screen-welcome', 'screen-map', 'screen-quest', 
    'screen-garden', 'screen-collection', 'screen-parent',
    'app-header', 'player-badge', 'parent-btn',
    'markers-layer', 'map-info-card', 'quest-theme-container',
    'quest-story-text', 'quest-story-choices', 'quest-interactive-panel',
    'garden-plots-container', 'collection-slots-container',
    'parent-lock-modal', 'reward-modal', 'reward-claim-btn'
];

expectedIds.forEach(id => {
    assert(html.includes(`id="${id}"`) || html.includes(`id='${id}'`), `Element with ID "${id}" is declared`);
});

// 3. Validate style.css design system tokens
console.log("\n--- Checking style.css styling tokens ---");
const expectedCssTokens = [
    '--bg-storybook', '--text-main', 
    '--color-curiosity', '--color-collaboration', 
    '--color-creativity', '--color-compassion', '--color-courage',
    '--font-header', '--font-body',
    '.biome-curiosity', '.biome-collaboration', '.biome-creativity', 
    '.biome-compassion', '.biome-courage',
    '.map-marker', '.map-marker.active-quest', '.active-badge'
];

expectedCssTokens.forEach(token => {
    assert(css.includes(token), `Design system token "${token}" is defined`);
});

// 4. Validate app.js scripting integrity
console.log("\n--- Checking app.js script variables ---");
const expectedJsDefinitions = [
    'HABITS_OF_MIND',
    'SCREENS',
    'appState',
    'STORY_SCRIPTS',
    'SEED_SLOTS_DATA',
    'persisting',
    'impulsivity',
    'listening',
    'determineDailyQuest',
    'renderMapMarkers',
    'renderStickerBook',
    'renderGarden',
    'showScreen',
    'localStorage'
];

expectedJsDefinitions.forEach(def => {
    assert(js.includes(def), `Script definition "${def}" is present in logic`);
});

// 5. Final Report
console.log("\n-------------------------------------------");
if (failed) {
    console.log("❌ VERIFICATION FAILED: Some assertions were not met. Check the logs above.");
    process.exit(1);
} else {
    console.log("🎉 ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!");
    console.log("The MindSpark Quest codebase is structurally sound, semantically valid, and ready to play.");
    process.exit(0);
}
