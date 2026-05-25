const fs = require('fs');
const vm = require('vm');

console.log("Starting MindSpark Quest smoke test...\n");

class FakeClassList {
    constructor(element) {
        this.element = element;
        this.classes = new Set();
    }

    add(...names) {
        names.forEach(name => this.classes.add(name));
        this.element.className = Array.from(this.classes).join(' ');
    }

    remove(...names) {
        names.forEach(name => this.classes.delete(name));
        this.element.className = Array.from(this.classes).join(' ');
    }

    contains(name) {
        return this.classes.has(name);
    }
}

class FakeElement {
    constructor(tagName = 'div', documentRef = null) {
        this.tagName = tagName.toUpperCase();
        this.documentRef = documentRef;
        this.children = [];
        this.style = {};
        this.dataset = {};
        this.attributes = {};
        this.listeners = {};
        this._className = '';
        this.classList = new FakeClassList(this);
        this.className = '';
        this.textContent = '';
        this.value = '';
        this.disabled = false;
        this._innerHTML = '';
    }

    set className(value) {
        this._className = String(value);
        if (this.classList) {
            this.classList.classes = new Set(this._className.split(/\s+/).filter(Boolean));
        }
    }

    get className() {
        return this._className;
    }

    set innerHTML(value) {
        this._innerHTML = value;
        this.children = [];
        this.textContent = stripTags(value);
        if (this.documentRef) {
            this.documentRef.parseInnerHTML(value, this);
        }
    }

    get innerHTML() {
        return this._innerHTML;
    }

    appendChild(child) {
        child.parentElement = this;
        this.children.push(child);
        if (this.documentRef) this.documentRef.registerElement(child);
        return child;
    }

    addEventListener(type, callback) {
        this.listeners[type] = this.listeners[type] || [];
        this.listeners[type].push(callback);
    }

    click() {
        const event = {
            currentTarget: this,
            target: this,
            stopPropagation() {},
            preventDefault() {},
            code: 'Enter'
        };
        (this.listeners.click || []).forEach(callback => callback(event));
    }

    dispatch(type, event = {}) {
        const fullEvent = {
            currentTarget: this,
            target: this,
            stopPropagation() {},
            preventDefault() {},
            ...event
        };
        (this.listeners[type] || []).forEach(callback => callback(fullEvent));
    }

    setAttribute(name, value) {
        this.attributes[name] = String(value);
        if (name === 'id') {
            this.id = String(value);
            this.documentRef?.elementsById.set(this.id, this);
        }
        if (name === 'class') {
            this.className = String(value);
            this.classList.classes = new Set(this.className.split(/\s+/).filter(Boolean));
        }
        if (name.startsWith('data-')) {
            this.dataset[toCamel(name.slice(5))] = String(value);
        }
    }

    closest(selector) {
        if (matchesSelector(this, selector)) return this;
        return this.parentElement?.closest(selector) || null;
    }
}

class FakeDocument {
    constructor() {
        this.elementsById = new Map();
        this.allElements = [];
        this.domContentLoaded = null;
    }

    addEventListener(type, callback) {
        if (type === 'DOMContentLoaded') this.domContentLoaded = callback;
    }

    createElement(tagName) {
        const element = new FakeElement(tagName, this);
        this.registerElement(element);
        return element;
    }

    getElementById(id) {
        if (!this.elementsById.has(id)) {
            const element = this.createElement('div');
            element.setAttribute('id', id);
        }
        return this.elementsById.get(id);
    }

    querySelectorAll(selector) {
        return this.allElements.filter(element => matchesSelector(element, selector));
    }

    registerElement(element) {
        if (!this.allElements.includes(element)) this.allElements.push(element);
        if (element.id) this.elementsById.set(element.id, element);
    }

    parseInnerHTML(html, parent) {
        const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>/g;
        let match;
        while ((match = tagRegex.exec(html)) !== null) {
            const tagName = match[1].toLowerCase();
            if (tagName.startsWith('/')) continue;
            const element = this.createElement(tagName);
            element.parentElement = parent;
            parent.children.push(element);

            const attrs = match[2] || '';
            const attrRegex = /([:\w-]+)(?:="([^"]*)")?/g;
            let attrMatch;
            while ((attrMatch = attrRegex.exec(attrs)) !== null) {
                element.setAttribute(attrMatch[1], attrMatch[2] || '');
            }
        }
    }
}

function stripTags(value) {
    return String(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function toCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function matchesSelector(element, selector) {
    if (!selector) return false;
    if (selector.startsWith('#')) return element.id === selector.slice(1);
    if (selector.startsWith('.')) return element.classList.contains(selector.slice(1));
    return element.tagName.toLowerCase() === selector.toLowerCase();
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
    console.log(`PASS: ${message}`);
}

function countDescendantsByClass(element, className) {
    if (!element) return 0;
    return element.children.reduce((count, child) => {
        const ownMatch = child.classList.contains(className) ? 1 : 0;
        return count + ownMatch + countDescendantsByClass(child, className);
    }, 0);
}

function setupDocument() {
    const document = new FakeDocument();
    const ids = [
        'player-name', 'start-adventure-btn', 'logo-trigger', 'parent-btn', 'nav-parent-btn',
        'lock-cancel-btn', 'lock-submit-btn', 'parent-exit-btn', 'map-card-action-btn',
        'island-map-container', 'map-info-card', 'map-card-avatar', 'map-card-name',
        'map-card-habit', 'map-card-value-tag', 'quest-back-map-btn', 'reward-claim-btn',
        'app-header', 'app-navigation', 'player-badge', 'markers-layer', 'quest-theme-container',
        'quest-page-tracker', 'quest-story-text', 'quest-story-choices', 'quest-interactive-panel',
        'reward-modal', 'reward-gem-glow', 'reward-gem-emoji', 'reward-character-sticker',
        'reward-text', 'reward-reflection-label', 'reward-reflection-input', 'garden-plots-container',
        'collection-slots-container', 'collection-gem-summary', 'parent-lock-modal',
        'lock-math-question', 'lock-math-input', 'parent-child-name', 'parent-child-age',
        'parent-total-completed', 'parent-streak-count', 'parent-gem-curiosity',
        'parent-gem-collaboration', 'parent-gem-creativity', 'parent-gem-compassion',
        'parent-gem-courage', 'parent-conversation-list', 'parent-activity-list',
        'screen-welcome', 'screen-map', 'screen-quest', 'screen-garden', 'screen-collection', 'screen-parent'
    ];
    ids.forEach(id => document.getElementById(id));

    ['5-7', '8-10'].forEach((age, index) => {
        const option = document.createElement('button');
        option.setAttribute('class', `age-option${index === 0 ? ' selected' : ''}`);
        option.dataset.age = age;
    });

    ['screen-map', 'screen-garden', 'screen-collection'].forEach(target => {
        const pill = document.createElement('button');
        pill.setAttribute('class', 'nav-pill');
        pill.dataset.target = target;
    });

    return document;
}

const storage = {};
const document = setupDocument();
const sandbox = {
    console,
    setTimeout,
    clearTimeout,
    alert(message) {
        sandbox.__alerts.push(message);
    },
    __alerts: [],
    localStorage: {
        getItem(key) {
            return Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null;
        },
        setItem(key, value) {
            storage[key] = String(value);
        }
    },
    document,
    window: {
        setTimeout,
        AudioContext: class {
            constructor() {
                this.currentTime = 0;
                this.destination = {};
            }
            createOscillator() {
                return {
                    type: 'sine',
                    frequency: { setValueAtTime() {} },
                    connect() {},
                    start() {},
                    stop() {}
                };
            }
            createGain() {
                return {
                    gain: {
                        setValueAtTime() {},
                        exponentialRampToValueAtTime() {}
                    },
                    connect() {}
                };
            }
            close() {}
        }
    }
};
sandbox.window.webkitAudioContext = sandbox.window.AudioContext;

const appSource = fs.readFileSync('app.js', 'utf8') + `
globalThis.__mindspark = {
    HABITS_OF_MIND,
    STORY_SCRIPTS,
    MINI_QUESTS,
    appState,
    handleOnboarding,
    showScreen,
    displayMapCard,
    startActiveQuest,
    renderQuestPage,
    loadMiniGame,
    triggerQuestReward,
    claimRewardSticker,
    renderGarden,
    renderStickerBook,
    syncParentDashboard,
    getQuestDefinition
};`;

vm.createContext(sandbox);
vm.runInContext(appSource, sandbox);

const app = sandbox.__mindspark;
document.domContentLoaded();

document.getElementById('player-name').value = 'Leo';
app.handleOnboarding();
assert(app.appState.player.name === 'Leo', 'onboarding saves player name');
assert(document.getElementById('screen-map').classList.contains('active'), 'onboarding opens the island map');

assert(app.HABITS_OF_MIND.length === 16, 'all 16 animal characters are configured');
app.HABITS_OF_MIND.forEach(habit => {
    const quest = app.getQuestDefinition(habit);
    assert(!!quest, `${habit.name} has a quest definition`);
    assert(quest.pages.some(page => page.choices?.some(choice => choice.action === 'completeQuest')), `${habit.name} has a reward completion page`);
});

app.appState.activeQuest = app.HABITS_OF_MIND.find(habit => habit.id === 'persisting');
app.loadMiniGame('stone_weaver', document.getElementById('quest-interactive-panel'));
document.querySelectorAll('.stone-slot')[0].click();
document.querySelectorAll('.stone-choice').find(choice => choice.dataset.stone === 'square').click();
document.querySelectorAll('.stone-slot')[1].click();
document.querySelectorAll('.stone-choice').find(choice => choice.dataset.stone === 'triangle').click();
document.querySelectorAll('.stone-slot')[2].click();
document.querySelectorAll('.stone-choice').find(choice => choice.dataset.stone === 'circle').click();
document.querySelectorAll('.stone-slot')[3].click();
assert(!document.getElementById('stone-continue-btn').classList.contains('hidden'), 'Rocky stone mini-game reaches continue state');

app.appState.activeQuest = app.HABITS_OF_MIND.find(habit => habit.id === 'flexibility');
app.loadMiniGame('habit_challenge', document.getElementById('quest-interactive-panel'));
document.querySelectorAll('.habit-card').find(card => card.dataset.choice === 'new-angle').click();
document.querySelectorAll('.habit-card').find(card => card.dataset.choice === 'swap-plan').click();
assert(!document.getElementById('habit-continue-btn').classList.contains('hidden'), 'generic animal mini-game reaches continue state');

app.appState.activeQuest = app.HABITS_OF_MIND.find(habit => habit.id === 'listening');
app.triggerQuestReward();
document.getElementById('reward-reflection-input').value = 'I listened carefully.';
app.claimRewardSticker();
assert(app.appState.player.completedQuests.listening === 1, 'reward claim records completed quest');
assert(app.appState.player.gemCounts.collaboration === 1, 'reward claim increments value gem');
assert(JSON.parse(storage.mindspark_quest_state).completedQuests.listening === 1, 'progress persists to local storage');

app.renderGarden();
assert(countDescendantsByClass(document.getElementById('garden-plots-container'), 'garden-plot') === 16, 'garden renders 16 plant plots');

app.renderStickerBook();
assert(countDescendantsByClass(document.getElementById('collection-slots-container'), 'sticker-slot') === 16, 'sticker book renders 16 slots');
assert(countDescendantsByClass(document.getElementById('collection-gem-summary'), 'gem-summary-item') === 5, 'gem summary renders five value totals');

app.syncParentDashboard();
assert(document.getElementById('parent-total-completed').textContent === '1 / 16', 'parent dashboard reflects practiced habit count');
assert(countDescendantsByClass(document.getElementById('parent-activity-list'), 'sheet-card') === 5, 'parent dashboard renders five activity cards');

console.log("\nMindSpark Quest smoke test passed.");
