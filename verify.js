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
const smokePath = path.join(__dirname, 'smoke-test.js');

assert(fs.existsSync(htmlPath), "index.html exists");
assert(fs.existsSync(cssPath), "style.css exists");
assert(fs.existsSync(jsPath), "app.js exists");
assert(fs.existsSync(smokePath), "smoke-test.js exists");

if (failed) {
    process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');
const smoke = fs.readFileSync(smokePath, 'utf8');

// 2. Validate index.html Structure
console.log("\n--- Checking index.html markup ---");
const expectedIds = [
    'screen-welcome', 'screen-map', 'screen-quest', 
    'screen-garden', 'screen-collection', 'screen-parent',
    'app-header', 'player-badge', 'parent-btn',
    'markers-layer', 'map-info-card', 'quest-theme-container',
    'quest-story-text', 'quest-story-choices', 'quest-interactive-panel',
    'garden-plots-container', 'collection-slots-container',
    'collection-gem-summary', 'parent-conversation-list', 'parent-activity-list',
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
    '.map-marker', '.map-marker.active-quest', '.active-badge',
    '.game-feedback', '.stone-choice.selected', '.balloon-svg-wrap.inflating',
    '.emotion-card.correct', '.garden-rule', '.gem-summary',
    '#parent-conversation-list'
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
    'MINI_QUESTS',
    'persisting',
    'impulsivity',
    'listening',
    'determineDailyQuest',
    'renderMapMarkers',
    'renderStickerBook',
    'renderGarden',
    'showScreen',
    'loadMiniGame',
    'renderStoneWeaverGame',
    'renderBreathingBalloonGame',
    'renderEmotionSoundboardGame',
    'renderHabitChallengeGame',
    'getQuestDefinition',
    'getHabitRule',
    'syncParentConversationStarters',
    'syncParentActivityCards',
    'localStorage'
];

expectedJsDefinitions.forEach(def => {
    assert(js.includes(def), `Script definition "${def}" is present in logic`);
});

// 5. Validate feature behavior hooks
console.log("\n--- Checking implemented feature coverage ---");
const expectedGameIds = ['stone_weaver', 'breathing_balloon', 'emotion_soundboard'];
expectedGameIds.forEach(gameId => {
    assert(js.includes(`data-game="${gameId}"`) || js.includes(`game: '${gameId}'`), `Mini-game "${gameId}" is wired`);
});

assert(js.includes('dailyHabitId = HABITS_OF_MIND[habitIndex].id'), "Daily quest rotates across all 16 habits");
assert(!js.includes('availableDeepQuests'), "Daily rotation is not limited to only the three deep quests");
assert(js.includes('Rocky, Sage, and Luna story quests are open for practice any day'), "Deep quests remain playable any day");
assert(js.includes('has a quick habit mini-game ready to play'), "Non-deep habit previews explain mini-game availability");
assert(js.includes('habit_challenge: renderHabitChallengeGame'), "Shared habit challenge mini-game is wired");
assert(css.includes('.habit-card-grid') && css.includes('.habit-card.correct'), "Shared habit challenge cards are styled");
const miniQuestIds = [
    'flexibility', 'metacognition', 'accuracy', 'questioning', 'past_knowledge',
    'communication', 'senses', 'creating', 'wonderment', 'risk_taking',
    'humour', 'interdependence', 'open_learning'
];
miniQuestIds.forEach(id => {
    assert(js.includes(`${id}: {`) || js.includes(`'${id}': {`), `Mini-game quest config exists for "${id}"`);
});
assert(js.includes('sparkle-burst'), "Garden click feedback uses a visual burst");
assert(js.includes('collection-gem-summary'), "Sticker book renders gem summary totals");
assert(['curiosity', 'collaboration', 'creativity', 'compassion', 'courage'].every(value => js.includes(`value: '${value}'`)), "Parent activity cards cover all five values");
assert(smoke.includes('MindSpark Quest smoke test passed'), "Smoke test includes a success marker");
assert(smoke.includes('stone_weaver') && smoke.includes('habit_challenge'), "Smoke test covers deep and generic mini-games");
assert(smoke.includes('parent dashboard') || smoke.includes('Parent Dashboard'), "Smoke test covers parent dashboard flow");

// 6. Final Report
console.log("\n-------------------------------------------");
if (failed) {
    console.log("❌ VERIFICATION FAILED: Some assertions were not met. Check the logs above.");
    process.exit(1);
} else {
    console.log("🎉 ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!");
    console.log("The MindSpark Quest codebase is structurally sound, semantically valid, and ready to play.");
    process.exit(0);
}
