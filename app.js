// --- MindSpark Quest Application Engine ---

// 16 Characters and Habits definitions
const HABITS_OF_MIND = [
    { id: 'persisting', name: 'Rocky', emoji: '🐐', animal: 'Goat', habit: 'Persisting', value: 'courage', desc: 'Keep going even when things are tricky!', biome: 'Brave Cliffs' },
    { id: 'impulsivity', name: 'Sage', emoji: '🦉', animal: 'Owl', habit: 'Managing Impulsivity', value: 'compassion', desc: 'Stop, think, and breathe before acting.', biome: 'Gentle Valley' },
    { id: 'listening', name: 'Luna', emoji: '🐘', animal: 'Elephant', habit: 'Listening with Empathy', value: 'collaboration', desc: 'Listen with your ears, eyes, and heart.', biome: 'Harmony Hive' },
    { id: 'flexibility', name: 'Flexi', emoji: '🐙', animal: 'Octopus', habit: 'Thinking Flexibly', value: 'creativity', desc: 'Look at things in different ways.', biome: 'Dreamers Peak' },
    { id: 'metacognition', name: 'Mirror', emoji: '🦎', animal: 'Chameleon', habit: 'Metacognition', value: 'curiosity', desc: 'Think about how you think and learn!', biome: 'Whispering Woods' },
    { id: 'accuracy', name: 'Archer', emoji: '🦅', animal: 'Hawk', habit: 'Striving for Accuracy', value: 'courage', desc: 'Check your work and try to do your best.', biome: 'Brave Cliffs' },
    { id: 'questioning', name: 'Spark', emoji: '✨', animal: 'Firefly', habit: 'Questioning & Problems', value: 'curiosity', desc: 'Ask questions to discover new ideas.', biome: 'Whispering Woods' },
    { id: 'past_knowledge', name: 'Atlas', emoji: '🐢', animal: 'Tortoise', habit: 'Applying Past Knowledge', value: 'curiosity', desc: 'Use what you already know to solve puzzles.', biome: 'Whispering Woods' },
    { id: 'communication', name: 'Crystal', emoji: '🦜', animal: 'Parrot', habit: 'Communicating with Clarity', value: 'collaboration', desc: 'Speak and share your ideas clearly.', biome: 'Harmony Hive' },
    { id: 'senses', name: 'Scout', emoji: '🦊', animal: 'Fox', habit: 'Gathering Data through Senses', value: 'curiosity', desc: 'Use all your senses to explore the world.', biome: 'Whispering Woods' },
    { id: 'creating', name: 'Prism', emoji: '🦋', animal: 'Butterfly', habit: 'Creating & Innovating', value: 'creativity', desc: 'Build and invent new wonderful things!', biome: 'Dreamers Peak' },
    { id: 'wonderment', name: 'Nova', emoji: '⭐', animal: 'Starfish', habit: 'Responding with Awe', value: 'curiosity', desc: 'Find beauty and wonder in everything.', biome: 'Whispering Woods' },
    { id: 'risk_taking', name: 'Brave', emoji: '🦁', animal: 'Lion', habit: 'Taking Responsible Risks', value: 'courage', desc: 'Try new things even if they feel scary.', biome: 'Brave Cliffs' },
    { id: 'humour', name: 'Giggles', emoji: '🐬', animal: 'Dolphin', habit: 'Finding Humour', value: 'creativity', desc: 'Smile and see the funny side of mistakes.', biome: 'Dreamers Peak' },
    { id: 'interdependence', name: 'Harmony', emoji: '🐝', animal: 'Bee', habit: 'Thinking Interdependently', value: 'collaboration', desc: 'Work together as a happy team.', biome: 'Harmony Hive' },
    { id: 'open_learning', name: 'Sprout', emoji: '🌱', animal: 'Seedling', habit: 'Open to Continuous Learning', value: 'curiosity', desc: 'Always keep learning and growing.', biome: 'Whispering Woods' }
];

// Screen Navigation & Elements
const SCREENS = ['screen-welcome', 'screen-map', 'screen-quest', 'screen-garden', 'screen-collection', 'screen-parent'];

// Application State
let appState = {
    player: {
        name: '',
        age: '5-7',
        completedQuests: {}, // e.g., { 'persisting': 1, 'impulsivity': 2 }
        gemCounts: { curiosity: 0, collaboration: 0, creativity: 0, compassion: 0, courage: 0 },
        reflections: {},
        streak: 0,
        lastPlayedDate: ''
    },
    activeQuest: null,
    currentQuestPage: 0,
    lockMathAnswer: 0
};

// Story Quests Scripts Database
const STORY_SCRIPTS = {
    'persisting': {
        title: "Rocky's Climb to Sunset Peak",
        character: "Rocky the Goat 🐐",
        habit: "Persisting",
        value: "courage",
        pages: [
            {
                text: {
                    '5-7': "Rocky the Mountain Goat has a big dream! He wants to climb all the way to the top of Sunset Peak to see the sparkling shooting stars tonight. But looking up, the mountain seems so tall and cloudy! Rocky looks a bit worried.<br><br>Let's help Rocky take his very first step up the mountain path!",
                    '8-10': "Rocky has planned for weeks to summit the jagged cliffs of Sunset Peak to witness the rare meteor shower tonight. However, looking at the looming, fog-shrouded peak, he feels a wave of doubt. The altitude is high and the trail looks rough.<br><br>Can you help Rocky build up his determination and embark on the climb?"
                },
                choices: [
                    { text: "🌟 Let's start climbing together!", nextPage: 1 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EBF8FF" rx="20"/>
                        <path d="M 20,200 L 90,80 L 140,140 L 200,200 Z" fill="#718096" />
                        <path d="M 90,80 L 110,60 L 130,80 L 200,200 L 140,200 Z" fill="#A0AEC0" />
                        <circle cx="150" cy="50" r="15" fill="#F6E05E" />
                        <text x="50" y="160" font-size="36">🐐</text>
                        <text x="35" y="110" font-size="16">⛰️</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Oh no! A strong gust of mountain wind blows through the trees! *SWOOSH!* Rocky's climbing rope flies right out of his hand and disappears down the slope. Rocky feels sad and wants to sit down.<br><br>What should Rocky do next?",
                    '8-10': "As Rocky maneuvers a steep ledge, a sudden, powerful gale drafts through the gorge. The gust slips his climbing rope from his grip, sending it tumbling into the deep canyon below. Rocky is empty-handed, fatigued, and tempted to turn back.<br><br>What strategy should Rocky deploy?"
                },
                choices: [
                    { text: "😢 Oh dear... let's give up and go home.", nextPage: 2, badChoice: true },
                    { text: "🔍 Look around the trail for another way up!", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDF2F7" rx="20"/>
                        <path d="M 0,200 L 80,110 L 200,200 Z" fill="#718096" />
                        <!-- Wind lines -->
                        <path d="M 20,40 Q 80,20 180,40" fill="none" stroke="#CBD5E0" stroke-width="4" stroke-linecap="round"/>
                        <path d="M 40,70 Q 100,50 160,80" fill="none" stroke="#CBD5E0" stroke-width="3" stroke-linecap="round"/>
                        <text x="75" y="105" font-size="34">🐐</text>
                        <text x="120" y="120" font-size="20">💨</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Rocky sits down and sighs. But then he looks at you and remembers: 'True persistence doesn't mean giving up when things get tricky. It means trying again!'<br><br>Let's pat Rocky on the shoulder and stand back up!",
                    '8-10': "Rocky sits down, feeling defeated. But he realizes that turning back means missing the spectacular view. Persisting doesn't mean repeating the same mistake; it means pivoting and finding a creative alternative.<br><br>Let's help Rocky stand back up and scout the mountain walls!"
                },
                choices: [
                    { text: "💪 Get back up and search for a new path!", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDF2F7" rx="20"/>
                        <path d="M 0,200 L 80,120 L 200,200 Z" fill="#718096" />
                        <text x="80" y="130" font-size="34" transform="rotate(15, 90, 120)">🐐</text>
                        <text x="120" y="90" font-size="24">❓</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Look! Behind a large spruce tree, Rocky finds a beautiful, safe trail made of stepping stones. But some stones are missing across a slippery mud gap!<br><br>Let's play the **Stepping Stones** game to help Rocky make a path!",
                    '8-10': "Scouting the cliffs, Rocky discovers a sheltered path tucked behind a pine thicket. It is lined with solid granite blocks. However, a recent landslide has washed away a section, leaving a wide, muddy gap.<br><br>Let's solve the **Stone Path** challenge to build a stable crossing for Rocky!"
                },
                choices: [],
                game: 'stone_weaver',
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDF2F7" rx="20"/>
                        <rect x="0" y="140" width="200" height="60" fill="#7B341E" />
                        <text x="20" y="120" font-size="32">🐐</text>
                        <text x="140" y="120" font-size="32">⛰️</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Hooray! Thanks to your amazing persistence, Rocky crossed the slippery mud! He climbs the final ridge, stands proud, and watches the shooting stars light up the night sky! *Sparkle, sparkle!*<br><br>Rocky did it because he kept going!",
                    '8-10': "Incredible! Your strategic placement of the granite stones allowed Rocky to traverse the mudslide safely. Cresting the summit, he sits down to watch the spectacular meteor shower paint neon streaks across the dark sky.<br><br>Rocky succeeded because you helped him persist and think flexibly!"
                },
                choices: [
                    { text: "🏆 Claim your Courage Gem and Sticker!", action: 'completeQuest' }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#1A202C" rx="20"/>
                        <path d="M 0,200 L 100,100 L 200,200 Z" fill="#2D3748" />
                        <!-- Stars -->
                        <path d="M 30,30 L 33,40 L 43,43 L 33,46 L 30,56 L 27,46 L 17,43 L 27,40 Z" fill="#ECC94B" />
                        <path d="M 120,40 L 122,48 L 130,50 L 122,52 L 120,60 L 118,52 L 110,50 L 118,48 Z" fill="#F6E05E" />
                        <path d="M 160,20 Q 120,50 80,80" fill="none" stroke="#FAF089" stroke-width="2" stroke-dasharray="3 3"/>
                        <text x="85" y="115" font-size="40">🐐</text>
                        <text x="120" y="110" font-size="20">⭐</text>
                    </svg>
                `
            }
        ]
    },
    'impulsivity': {
        title: "Sage the Owl's Hot Blueberry Pie",
        character: "Sage the Owl 🦉",
        habit: "Managing Impulsivity",
        value: "compassion",
        pages: [
            {
                text: {
                    '5-7': "Sage the wise little Owl is in the cozy kitchen baking his famous, super-delicious Blueberry Pie! The sweet smell fills the room. *Mmmm!* Sage pulls the bubbling pie from the warm oven.<br><br>It looks so tasty! But it is burning hot!",
                    '8-10': "Sage the Owl is preparing his legendary honeyed Blueberry Pie in the hollow-oak kitchen. The aroma of sweet fruit and spices is incredibly mouthwatering. As Sage pulls the bubbling, golden-crusted pie from the oven, he feels a huge wave of excitement.<br><br>It smells divine, but it is dangerously hot!"
                },
                choices: [
                    { text: "🥧 Let's inspect the delicious pie!", nextPage: 1 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#FFF5F5" rx="20"/>
                        <rect x="30" y="130" width="140" height="40" fill="#E2E8F0" rx="10" stroke="#4A5568" stroke-width="3"/>
                        <circle cx="100" cy="120" r="35" fill="#ED8936" />
                        <text x="80" y="90" font-size="36">🦉</text>
                        <text x="90" y="125" font-size="18">🥧</text>
                        <path d="M 90,75 Q 95,65 90,55" fill="none" stroke="#E53E3E" stroke-width="2" />
                        <path d="M 110,75 Q 115,65 110,55" fill="none" stroke="#E53E3E" stroke-width="2" />
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Sage's stomach rumbles! He wants to eat the whole pie right this second! If he does, he will burn his beak! Sage's wings start shaking and he wants to dive in.<br><br>What should Sage do to manage this impulse?",
                    '8-10': "Sage's stomach grumbles loudly. His impulsive urge is screaming at him to grab a fork and eat it this instant. However, doing so will certainly burn his beak and ruin the pie. His heart is racing with impatience.<br><br>How should Sage calm himself down?"
                },
                choices: [
                    { text: "🍴 Take a giant bite immediately!", nextPage: 2, badChoice: true },
                    { text: "💨 Take three slow, calming breaths to wait.", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#FFF5F5" rx="20"/>
                        <text x="80" y="100" font-size="42">🦉</text>
                        <text x="60" y="110" font-size="28">🍴</text>
                        <text x="120" y="110" font-size="28">🔥</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Ouch! Sage took a quick tiny lick and burned his tongue! *Ow, ow!* Sage learns that rushing in without thinking hurts. 'Managing impulsivity means stopping and thinking first!'<br><br>Let's help Sage cool down by taking deep breaths together!",
                    '8-10': "Sage impulsively takes a tiny bite and instantly burns his tongue! He realizes rushing without pausing leads to painful results. Sage reflects: 'Managing impulsivity means thinking ahead and staying patient.'<br><br>Let's help Sage calm his senses and take deep, slow breaths!"
                },
                choices: [
                    { text: "💨 Calm down and do the breathing exercise!", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDF2F7" rx="20"/>
                        <text x="80" y="110" font-size="38" transform="rotate(-15, 100, 110)">🦉</text>
                        <text x="120" y="70" font-size="20">😢</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Let's help Sage pause. Press and hold the green button to take three slow, deep breaths with Sage and blow on the hot pie!",
                    '8-10': "Let's guide Sage to regain control over his impulses. Use the **Breathing Guide** to take three deep, intentional breaths with Sage, cooling both the hot pie and his impatience!"
                },
                choices: [],
                game: 'breathing_balloon',
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#E6FFFA" rx="20"/>
                        <circle cx="100" cy="100" r="40" fill="#319795" opacity="0.3" id="breathing-circle-anim" />
                        <text x="80" y="110" font-size="36">🦉</text>
                        <text x="100" y="125" font-size="18">💨</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Wonderful! The pie is now perfectly cool, and Sage feels calm and happy. He cuts a beautiful slice to share with you and his forest friends. *Yum!*<br><br>We did it by managing our impulses!",
                    '8-10': "Excellent work! The pie has cooled to a delicious, perfect temperature, and Sage's heart rate has returned to a peaceful rhythm. By delaying gratification, he enjoys a wonderful feast with his friends.<br><br>Patience and self-control made this experience twice as sweet!"
                },
                choices: [
                    { text: "🏆 Claim your Compassion Gem and Sticker!", action: 'completeQuest' }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#E6FFFA" rx="20"/>
                        <circle cx="100" cy="110" r="45" fill="#48BB78" opacity="0.2"/>
                        <text x="80" y="100" font-size="38">🦉</text>
                        <text x="110" y="115" font-size="24">🥧</text>
                        <text x="60" y="100" font-size="20">💖</text>
                    </svg>
                `
            }
        ]
    },
    'listening': {
        title: "Luna the Elephant and the Lost Button",
        character: "Luna the Elephant 🐘",
        habit: "Listening with Empathy",
        value: "collaboration",
        pages: [
            {
                text: {
                    '5-7': "Luna the Elephant is walking through the Harmony Hive woods when she hears a tiny, soft crying sound. *Sniffle, sniffle...* She looks in the bushes and finds Toby the little Robin bird weeping.<br><br>Let's help Luna lean down to see what's wrong!",
                    '8-10': "Luna the Elephant is enjoying a tranquil stroll through the Harmony Hive forest when a faint, distressed sound catches her attention. Peering behind a canopy of ferns, she discovers Toby the Robin crying. He seems deeply upset about something.<br><br>Let's help Luna investigate the situation."
                },
                choices: [
                    { text: "🐘 Lean down and check on Toby", nextPage: 1 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EBF8FF" rx="20"/>
                        <text x="40" y="140" font-size="42">🐘</text>
                        <text x="130" y="150" font-size="20">🐦</text>
                        <text x="140" y="125" font-size="16">💧</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Toby is talking very, very fast while crying. He says he lost his shiny green button! Luna has giant ears. She wants to understand how Toby feels.<br><br>What is the best way for Luna to listen?",
                    '8-10': "Toby is weeping and speaking in hyper-fast, scrambled sentences about losing a cherished green button. Luna wants to show genuine empathy and help him feel heard.<br><br>What listening strategy should Luna use?"
                },
                choices: [
                    { text: "📣 Interrupt and say: 'Don't worry, it is just a silly button!'", nextPage: 2, badChoice: true },
                    { text: "👂 Keep ears wide open, stay quiet, and listen to Toby's whole story.", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EBF8FF" rx="20"/>
                        <text x="40" y="130" font-size="42">🐘</text>
                        <text x="120" y="140" font-size="20">🐦</text>
                        <!-- Large ears indicator -->
                        <path d="M 30,70 C 10,70 10,120 30,120" fill="none" stroke="#3182CE" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Oh dear, Toby feels even sadder now and hides in his nest. Luna realizes that telling someone their feelings are 'silly' doesn't help. 'Listening with empathy means caring about how others feel!'<br><br>Let's apologize and listen carefully to Toby's voice!",
                    '8-10': "Toby retreats into his nest, feeling misunderstood and dismissed. Luna immediately regrets her words; minimizing someone's distress is the opposite of empathy. She realizes that to collaborate, she must understand their perspective.<br><br>Let's apologize, open our ears, and carefully listen to Toby's emotion!"
                },
                choices: [
                    { text: "👂 Say sorry and listen with full empathy!", nextPage: 3 }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDF2F7" rx="20"/>
                        <text x="40" y="140" font-size="38" transform="scale(-1, 1) translate(-100, 0)">🐘</text>
                        <text x="130" y="140" font-size="20">🐦</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Let's help Luna understand Toby's feelings. Listen to Toby's voice by clicking the sound icon, then click the matching face face card below!",
                    '8-10': "To support Toby, Luna must accurately identify his emotional state. Solve the **Emotion Soundboard** to decode Toby's feelings and help him feel fully understood!"
                },
                choices: [],
                game: 'emotion_soundboard',
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#F7FAFC" rx="20"/>
                        <text x="100" y="90" font-size="44" text-anchor="middle">👂</text>
                        <circle cx="100" cy="140" r="30" fill="#3182CE" opacity="0.1"/>
                        <text x="100" y="148" font-size="28" text-anchor="middle">🔊</text>
                    </svg>
                `
            },
            {
                text: {
                    '5-7': "Toby smiles through his tears! He feels so happy that Luna listened to him. Together, they search the grass and find the shiny green button! Toby gives Luna a big warm hug.<br><br>We solved the problem through empathetic listening!",
                    '8-10': "Toby's posture shifts in relief. Feeling understood, he calms down and helps Luna search the clover patches. Within minutes, they spot the glittering emerald button! Toby is overjoyed and thanks Luna for being such a wonderful, listening friend.<br><br>Empathy and active listening are key to solving problems together!"
                },
                choices: [
                    { text: "🏆 Claim your Collaboration Gem and Sticker!", action: 'completeQuest' }
                ],
                illustration: `
                    <svg viewBox="0 0 200 200" width="100%">
                        <rect width="200" height="200" fill="#EDFBF7" rx="20"/>
                        <circle cx="100" cy="110" r="50" fill="#319795" opacity="0.15"/>
                        <text x="50" y="130" font-size="42">🐘</text>
                        <text x="110" y="125" font-size="22">🐦</text>
                        <text x="95" y="145" font-size="20">🟢</text>
                        <text x="140" y="80" font-size="22">💖</text>
                    </svg>
                `
            }
        ]
    }
};

// Seed/Growth Garden initial slots state
const SEED_SLOTS_DATA = [
    { habitId: 'persisting', plantName: 'Sturdy Pine', levels: ['Seed', 'Sprout', 'Budding Tree', 'Golden Pine 🌲'] },
    { habitId: 'impulsivity', plantName: 'Calm Fern', levels: ['Seed', 'Sprout', 'Swaying Fern', 'Breezy Fern 🌿'] },
    { habitId: 'listening', plantName: 'Echo Orchid', levels: ['Seed', 'Sprout', 'Budding Orchid', 'Echo Orchid 🌸'] },
    { habitId: 'flexibility', plantName: 'Flexi Willow', levels: ['Seed', 'Sprout', 'Weeping Willow', 'Flexi Willow 🌳'] },
    { habitId: 'metacognition', plantName: 'Chameleon Rose', levels: ['Seed', 'Sprout', 'Colorbud', 'Mirror Rose 🌹'] },
    { habitId: 'accuracy', plantName: 'True Lily', levels: ['Seed', 'Sprout', 'Lily Stem', 'Perfect Lily ⚜️'] },
    { habitId: 'questioning', plantName: 'Lantern Bloom', levels: ['Seed', 'Sprout', 'Glowing Bud', 'Lantern Bloom 🪔'] },
    { habitId: 'past_knowledge', plantName: 'Ancient Oak', levels: ['Seed', 'Sprout', 'Oak Sapling', 'Wisdom Oak 🌳'] },
    { habitId: 'communication', plantName: 'Chime Flower', levels: ['Seed', 'Sprout', 'Budding Chime', 'Chime Flower 🔔'] },
    { habitId: 'senses', plantName: 'Scout Poppy', levels: ['Seed', 'Sprout', 'Scented Bud', 'Scout Poppy 🌺'] },
    { habitId: 'creating', plantName: 'Rainbow Tulip', levels: ['Seed', 'Sprout', 'Artistic Bud', 'Rainbow Tulip 🌷'] },
    { habitId: 'wonderment', plantName: 'Cosmo Cosmos', levels: ['Seed', 'Sprout', 'Star Bud', 'Cosmos Star 🌼'] },
    { habitId: 'risk_taking', plantName: 'Brave Clover', levels: ['Seed', 'Sprout', 'Three-Leaf', 'Lucky Four-Leaf 🍀'] },
    { habitId: 'humour', plantName: 'Tickle Orchid', levels: ['Seed', 'Sprout', 'Giggling Bud', 'Giggle Orchid 🌻'] },
    { habitId: 'interdependence', plantName: 'Hive Clover', levels: ['Seed', 'Sprout', 'Cluster Bud', 'Hive Clover ☘️'] },
    { habitId: 'open_learning', plantName: 'Sproutling', levels: ['Seed', 'Sprout', 'Green Leaves', 'Sproutling 🌱'] }
];

// --- Initialization & Local Storage Synergies ---
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    setupEventListeners();
    determineDailyQuest();
    renderMapMarkers();
    renderStickerBook();
    renderGarden();
});

// Setup Events listeners
function setupEventListeners() {
    // 1. Welcome Screen Elements
    document.querySelectorAll('.age-option').forEach(option => {
        option.addEventListener('click', (e) => {
            document.querySelectorAll('.age-option').forEach(o => o.classList.remove('selected'));
            const target = e.currentTarget;
            target.classList.add('selected');
            appState.player.age = target.dataset.age;
        });
    });

    document.getElementById('start-adventure-btn').addEventListener('click', handleOnboarding);
    document.getElementById('logo-trigger').addEventListener('click', () => showScreen('screen-map'));

    // 2. Navigation Pills
    document.querySelectorAll('.nav-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            const targetScreen = e.currentTarget.dataset.target;
            if (targetScreen) {
                showScreen(targetScreen);
            }
        });
    });

    // 3. Parent Corner Links & Locks
    document.getElementById('parent-btn').addEventListener('click', triggerParentLock);
    
    const navParent = document.getElementById('nav-parent-btn');
    if (navParent) navParent.addEventListener('click', triggerParentLock);

    document.getElementById('lock-cancel-btn').addEventListener('click', () => {
        document.getElementById('parent-lock-modal').classList.remove('active');
    });
    document.getElementById('lock-submit-btn').addEventListener('click', verifyParentLock);
    document.getElementById('parent-exit-btn').addEventListener('click', () => showScreen('screen-map'));

    // 4. Map screen interaction card
    document.getElementById('map-card-action-btn').addEventListener('click', startActiveQuest);
    
    // Hide map card click outside
    document.getElementById('island-map-container').addEventListener('click', (e) => {
        if (!e.target.closest('.map-marker') && !e.target.closest('#map-info-card')) {
            document.getElementById('map-info-card').classList.add('hidden');
        }
    });

    // 5. Quest story interactions
    document.getElementById('quest-back-map-btn').addEventListener('click', () => {
        showScreen('screen-map');
    });

    // 6. Reward & Reflection popup
    document.getElementById('reward-claim-btn').addEventListener('click', claimRewardSticker);
}

// Router/Screen Switcher
function showScreen(screenId) {
    SCREENS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
    
    const activeEl = document.getElementById(screenId);
    if (activeEl) activeEl.classList.add('active');

    // Update nav bar active state
    document.querySelectorAll('.nav-pill').forEach(pill => {
        if (pill.dataset.target === screenId) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    // Sync Parent dashboard when opening it
    if (screenId === 'screen-parent') {
        syncParentDashboard();
    }
}

// Onboarding execution
function handleOnboarding() {
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) {
        alert("Please enter your lovely name first!");
        return;
    }
    
    appState.player.name = nameInput;
    appState.player.streak = appState.player.streak || 1;
    saveProgress();
    
    // Update headers
    document.getElementById('app-header').style.display = 'flex';
    document.getElementById('app-navigation').style.display = 'flex';
    document.getElementById('player-badge').textContent = `🎒 Adventurer: ${appState.player.name}`;
    
    // Go to Map Screen
    showScreen('screen-map');
}

// --- Daily Rotation Algorithm ---
let dailyHabitId = 'persisting'; // Default daily quest

function determineDailyQuest() {
    const today = new Date();
    // Predictable cycle through all 16 habits
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 1)) / (86400000));
    const habitIndex = dayOfYear % 16;
    
    dailyHabitId = HABITS_OF_MIND[habitIndex].id;
}

// --- Render Map Markers & Coordinates ---
function renderMapMarkers() {
    const layer = document.getElementById('markers-layer');
    if (!layer) return;
    layer.innerHTML = '';

    const coords = {
        'persisting': { x: 78, y: 38 },     // Courage - Brave Cliffs
        'impulsivity': { x: 62, y: 70 },    // Compassion - Gentle Valley
        'listening': { x: 74, y: 18 },      // Collaboration - Harmony Hive
        'flexibility': { x: 30, y: 72 },    // Creativity - Dreamers Peak
        'metacognition': { x: 22, y: 32 },  // Curiosity - Whispering Woods
        'accuracy': { x: 88, y: 48 },       // Courage
        'questioning': { x: 38, y: 22 },    // Curiosity
        'past_knowledge': { x: 18, y: 16 }, // Curiosity
        'communication': { x: 66, y: 28 },  // Collaboration
        'senses': { x: 44, y: 36 },         // Curiosity
        'creating': { x: 48, y: 75 },       // Creativity
        'wonderment': { x: 28, y: 48 },     // Curiosity
        'risk_taking': { x: 86, y: 64 },    // Courage
        'humour': { x: 38, y: 62 },         // Creativity
        'interdependence': { x: 82, y: 12 },// Collaboration
        'open_learning': { x: 12, y: 48 }   // Curiosity
    };

    HABITS_OF_MIND.forEach(habit => {
        const marker = document.createElement('div');
        marker.className = 'map-marker';
        
        // Mark as completed if appropriate
        if (appState.player.completedQuests[habit.id]) {
            marker.classList.add('completed');
        }

        // Highlight if daily quest
        if (habit.id === dailyHabitId) {
            marker.classList.add('active-quest');
        }

        const pos = coords[habit.id] || { x: 50, y: 50 };
        marker.style.left = `${pos.x}%`;
        marker.style.top = `${pos.y}%`;

        marker.innerHTML = `
            <div class="marker-avatar">
                ${habit.emoji}
                ${habit.id === dailyHabitId ? '<span class="active-badge">QUEST</span>' : ''}
            </div>
        `;

        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            displayMapCard(habit);
        });

        layer.appendChild(marker);
    });
}

// Display Map Info Card
function displayMapCard(habit) {
    const card = document.getElementById('map-info-card');
    const avatar = document.getElementById('map-card-avatar');
    const name = document.getElementById('map-card-name');
    const habitTxt = document.getElementById('map-card-habit');
    const tag = document.getElementById('map-card-value-tag');
    const btn = document.getElementById('map-card-action-btn');

    avatar.textContent = habit.emoji;
    name.textContent = `${habit.name} the ${habit.animal}`;
    const isDeepQuest = ['persisting', 'impulsivity', 'listening'].includes(habit.id);
    const dailyCopy = habit.id === dailyHabitId ? '<br><span style="font-size:0.8rem; color:var(--color-courage-dark); font-weight:800;">Today\'s Daily Quest highlight!</span>' : '';
    const previewCopy = isDeepQuest
        ? 'Rocky, Sage, and Luna story quests are open for practice any day.'
        : `This is ${habit.name}'s ${habit.biome} preview. ${habit.name} teaches ${habit.habit}; a full story quest is coming soon.`;

    habitTxt.innerHTML = `<strong>Habit of Mind:</strong> ${habit.habit}<br><span style="font-size:0.8rem; color:var(--text-muted);">${habit.desc} ${previewCopy}</span>${dailyCopy}`;
    
    // Stylize tag based on value
    tag.textContent = `${getValueEmoji(habit.value)} ${capitalize(habit.value)}`;
    tag.style.backgroundColor = `var(--color-${habit.value}-soft)`;
    tag.style.color = `var(--color-${habit.value}-dark)`;

    appState.activeQuest = habit;

    if (isDeepQuest) {
        btn.textContent = "Start Story Quest";
        btn.style.display = 'block';
    } else {
        btn.textContent = "Preview Only";
        btn.style.display = 'none';
    }

    card.classList.remove('hidden');
}

function getValueEmoji(val) {
    const map = { curiosity: '🔍', collaboration: '🤝', creativity: '🎨', compassion: '💚', courage: '🦁' };
    return map[val] || '🌟';
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// Start active storybook
function startActiveQuest() {
    if (!appState.activeQuest) return;
    
    document.getElementById('map-info-card').classList.add('hidden');
    
    const layout = document.getElementById('quest-theme-container');
    layout.className = `quest-layout quest-theme-${appState.activeQuest.value}`;

    appState.currentQuestPage = 0;
    renderQuestPage();
    showScreen('screen-quest');
}

function renderQuestPage() {
    const quest = STORY_SCRIPTS[appState.activeQuest.id];
    if (!quest) return;

    const page = quest.pages[appState.currentQuestPage];
    if (!page) return;

    document.getElementById('quest-page-tracker').textContent = `Story of ${appState.activeQuest.name} · Page ${appState.currentQuestPage + 1} of ${quest.pages.length}`;

    const age = appState.player.age || '5-7';
    const textHtml = page.text[age] || page.text['5-7'];
    document.getElementById('quest-story-text').innerHTML = `<p>${textHtml}</p>`;

    const choicesBox = document.getElementById('quest-story-choices');
    choicesBox.innerHTML = '';

    if (page.choices && page.choices.length > 0) {
        page.choices.forEach(ch => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerHTML = `<span>👉</span> ${ch.text}`;
            btn.addEventListener('click', () => {
                if (ch.action === 'completeQuest') {
                    triggerQuestReward();
                } else {
                    appState.currentQuestPage = ch.nextPage;
                    renderQuestPage();
                }
            });
            choicesBox.appendChild(btn);
        });
    }

    const rightPane = document.getElementById('quest-interactive-panel');
    rightPane.innerHTML = '';

    if (page.game) {
        loadMiniGame(page.game, rightPane);
    } else {
        rightPane.innerHTML = `
            <div class="illustration-box" style="animation: float 4s ease-in-out infinite;">
                ${page.illustration}
            </div>
            <p style="font-family: var(--font-header); font-weight: 700; color: var(--text-muted); font-size: 1.05rem; text-align: center; margin-top: 10px;">
                ${appState.activeQuest.emoji} ${appState.activeQuest.name} the ${appState.activeQuest.animal}
            </p>
        `;
    }
}

function goToNextQuestPage() {
    const quest = STORY_SCRIPTS[appState.activeQuest.id];
    if (!quest) return;

    appState.currentQuestPage = Math.min(appState.currentQuestPage + 1, quest.pages.length - 1);
    renderQuestPage();
}

function loadMiniGame(gameType, container) {
    const gameLoaders = {
        stone_weaver: renderStoneWeaverGame,
        breathing_balloon: renderBreathingBalloonGame,
        emotion_soundboard: renderEmotionSoundboardGame
    };

    const loader = gameLoaders[gameType];
    if (!loader) {
        container.innerHTML = `
            <div class="game-container">
                <h3 class="game-title">Quest activity coming soon</h3>
                <button class="btn btn-primary" type="button" id="mini-game-continue-btn">Continue Story</button>
            </div>
        `;
        document.getElementById('mini-game-continue-btn').addEventListener('click', goToNextQuestPage);
        return;
    }

    loader(container);
}

function renderStoneWeaverGame(container) {
    const stones = ['circle', 'square', 'triangle'];
    const stoneIcons = {
        circle: '●',
        square: '■',
        triangle: '▲'
    };
    const solution = ['circle', 'square', 'triangle', 'circle'];
    const placed = new Array(solution.length).fill(null);
    let selectedStone = stones[0];

    container.innerHTML = `
        <div class="game-container" data-game="stone_weaver">
            <h3 class="game-title">Stone Path Weaver</h3>
            <p class="game-instruction">Choose a stone, then fill the path in this order: round, square, triangle, round.</p>
            <div class="stone-game-board" id="stone-game-board" aria-label="Stone path slots">
                ${solution.map((_, index) => `
                    <button class="stone-slot" type="button" data-index="${index}" aria-label="Empty stone slot ${index + 1}"></button>
                `).join('')}
            </div>
            <div class="stone-palette" aria-label="Stone choices">
                ${stones.map((stone, index) => `
                    <button class="stone-choice ${index === 0 ? 'selected' : ''}" type="button" data-stone="${stone}" aria-label="${stone} stone">${stoneIcons[stone]}</button>
                `).join('')}
            </div>
            <p class="game-feedback" id="stone-feedback">Tap a shape, then tap an empty step.</p>
            <button class="btn btn-primary mini-game-continue hidden" type="button" id="stone-continue-btn">Rocky can cross now!</button>
        </div>
    `;

    const feedback = document.getElementById('stone-feedback');
    const continueBtn = document.getElementById('stone-continue-btn');

    document.querySelectorAll('.stone-choice').forEach(choice => {
        choice.addEventListener('click', () => {
            selectedStone = choice.dataset.stone;
            document.querySelectorAll('.stone-choice').forEach(btn => btn.classList.remove('selected'));
            choice.classList.add('selected');
            feedback.textContent = `Selected ${selectedStone} stone.`;
        });
    });

    document.querySelectorAll('.stone-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const index = Number(slot.dataset.index);
            placed[index] = selectedStone;
            slot.textContent = stoneIcons[selectedStone];
            slot.classList.add('filled');
            slot.setAttribute('aria-label', `${selectedStone} stone slot ${index + 1}`);

            const isComplete = placed.every(Boolean);
            const isCorrect = placed.every((stone, stoneIndex) => stone === solution[stoneIndex]);

            if (!isComplete) {
                feedback.textContent = "Good experimenting. Keep building the path.";
            } else if (isCorrect) {
                feedback.textContent = "The stepping stones feel steady. Rocky found a new way forward!";
                continueBtn.classList.remove('hidden');
                playTone(659.25, 160);
            } else {
                feedback.textContent = "Those stones wobble. Rocky shrugs: let's try a different order.";
                placed.fill(null);
                document.querySelectorAll('.stone-slot').forEach(resetSlot => {
                    resetSlot.textContent = '';
                    resetSlot.classList.remove('filled');
                });
                playTone(220, 120);
            }
        });
    });

    continueBtn.addEventListener('click', goToNextQuestPage);
}

function renderBreathingBalloonGame(container) {
    let breathCount = 0;
    let breathStarted = false;

    container.innerHTML = `
        <div class="game-container" data-game="breathing_balloon">
            <h3 class="game-title">The Three Breaths Balloon</h3>
            <div class="balloon-area">
                <div class="balloon-svg-wrap" id="balloon-wrap" aria-hidden="true">
                    <svg viewBox="0 0 160 160" width="160" height="160">
                        <circle cx="80" cy="80" r="44" fill="var(--color-compassion-soft)" stroke="var(--color-compassion)" stroke-width="5" />
                        <path d="M80 125 L70 145 L90 145 Z" fill="var(--color-compassion)" />
                    </svg>
                </div>
                <button class="balloon-btn" type="button" id="breath-btn" aria-label="Hold or tap for a calm breath">Hold<br>Breathe</button>
                <div class="breath-counter" id="breath-counter">0 / 3 breaths</div>
                <p class="game-feedback" id="breath-feedback">Hold the button, then let go slowly. Tapping also counts.</p>
                <button class="btn btn-primary mini-game-continue hidden" type="button" id="breath-continue-btn">The pie is cool now!</button>
            </div>
        </div>
    `;

    const wrap = document.getElementById('balloon-wrap');
    const button = document.getElementById('breath-btn');
    const counter = document.getElementById('breath-counter');
    const feedback = document.getElementById('breath-feedback');
    const continueBtn = document.getElementById('breath-continue-btn');

    const finishBreath = () => {
        if (!breathStarted) return;
        breathStarted = false;
        wrap.classList.remove('inflating');
        breathCount = Math.min(breathCount + 1, 3);
        counter.textContent = `${breathCount} / 3 breaths`;
        feedback.textContent = breathCount < 3 ? "Nice pause. Take another slow breath with Sage." : "Sage feels calm, patient, and ready to wait.";
        playTone(392 + (breathCount * 40), 140);

        if (breathCount >= 3) {
            continueBtn.classList.remove('hidden');
            button.disabled = true;
        }
    };

    const startBreath = () => {
        if (breathCount >= 3 || breathStarted) return;
        breathStarted = true;
        wrap.classList.add('inflating');
        feedback.textContent = "Inhale slowly... now release when you are ready.";
    };

    button.addEventListener('pointerdown', startBreath);
    button.addEventListener('pointerup', finishBreath);
    button.addEventListener('pointerleave', finishBreath);
    button.addEventListener('click', () => {
        if (!breathStarted && breathCount < 3) {
            startBreath();
            window.setTimeout(finishBreath, 350);
        }
    });

    continueBtn.addEventListener('click', goToNextQuestPage);
}

function renderEmotionSoundboardGame(container) {
    const emotions = [
        { id: 'joy', emoji: '😊', name: 'Joy' },
        { id: 'sadness', emoji: '😢', name: 'Sadness' },
        { id: 'fear', emoji: '😟', name: 'Fear' },
        { id: 'excitement', emoji: '🤩', name: 'Excitement' }
    ];
    const correctEmotion = 'sadness';

    container.innerHTML = `
        <div class="game-container" data-game="emotion_soundboard">
            <h3 class="game-title">Emotion Soundboard</h3>
            <button class="sound-play-btn" type="button" id="emotion-sound-btn" aria-label="Play Toby's feeling sound">♪</button>
            <p class="game-instruction">Toby's voice is soft and wobbly. Which feeling matches it?</p>
            <div class="soundboard-grid">
                ${emotions.map(emotion => `
                    <button class="emotion-card" type="button" data-emotion="${emotion.id}">
                        <span class="emotion-emoji">${emotion.emoji}</span>
                        <span class="emotion-name">${emotion.name}</span>
                    </button>
                `).join('')}
            </div>
            <p class="game-feedback" id="emotion-feedback">Listen first, then choose the matching face.</p>
            <button class="btn btn-primary mini-game-continue hidden" type="button" id="emotion-continue-btn">Luna understands Toby!</button>
        </div>
    `;

    const feedback = document.getElementById('emotion-feedback');
    const continueBtn = document.getElementById('emotion-continue-btn');

    document.getElementById('emotion-sound-btn').addEventListener('click', () => {
        playTone(330, 180);
        window.setTimeout(() => playTone(294, 220), 170);
        feedback.textContent = "That sound is quiet, droopy, and a little teary.";
    });

    document.querySelectorAll('.emotion-card').forEach(card => {
        card.addEventListener('click', () => {
            if (card.dataset.emotion === correctEmotion) {
                card.classList.add('correct');
                feedback.textContent = "Yes. Toby sounds sad, and Luna can show she understands.";
                continueBtn.classList.remove('hidden');
                document.querySelectorAll('.emotion-card').forEach(btn => btn.disabled = true);
                playTone(523.25, 160);
            } else {
                card.classList.add('try-again');
                feedback.textContent = "Not quite. Listen for the soft, teary sound and try again.";
                playTone(246.94, 110);
            }
        });
    });

    continueBtn.addEventListener('click', goToNextQuestPage);
}

// Audio Tone Synthesis
function playTone(frequency, durationMs) {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + durationMs / 1000);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
            audioCtx.close();
        }, durationMs);
    } catch (e) {
        console.log("Audio not enabled yet", e);
    }
}

// Reward trigger
function triggerQuestReward() {
    const modal = document.getElementById('reward-modal');
    const glow = document.getElementById('reward-gem-glow');
    const gem = document.getElementById('reward-gem-emoji');
    const sticker = document.getElementById('reward-character-sticker');
    const text = document.getElementById('reward-text');
    const reflectionLabel = document.getElementById('reward-reflection-label');

    const h = appState.activeQuest;

    document.getElementById('reward-reflection-input').value = '';

    glow.style.backgroundColor = `var(--color-${h.value})`;
    gem.textContent = getGemEmoji(h.value);
    sticker.textContent = h.emoji;
    text.innerHTML = `You earned a shining <strong>${capitalize(h.value)} Gem</strong> and placed <strong>${h.name}'s Sticker</strong> into your Sticker Book!`;

    const reflectionQuestions = {
        'persisting': "What was something hard that you tried to do today? How did you keep going?",
        'impulsivity': "Next time you feel excited or angry, how can you practice pausing?",
        'listening': "Think of someone you love. How can you be a better listening friend to them?",
        'default': `How can you practice ${h.habit} tomorrow?`
    };
    reflectionLabel.textContent = reflectionQuestions[h.id] || reflectionQuestions['default'];

    playTone(523.25, 100);
    setTimeout(() => playTone(659.25, 100), 100);
    setTimeout(() => playTone(783.99, 300), 200);

    modal.classList.add('active');
}

function getGemEmoji(val) {
    const map = { curiosity: '🟡', collaboration: '🔵', creativity: '🟣', compassion: '🟢', courage: '🟠' };
    return map[val] || '✨';
}

function getHabitRule(habit) {
    const rules = {
        persisting: "Never give up; try another way.",
        impulsivity: "Pause, breathe, then choose.",
        listening: "Listen with ears, eyes, and heart.",
        flexibility: "Look at the problem from another side.",
        metacognition: "Notice what your brain is doing.",
        accuracy: "Check carefully and improve your work.",
        questioning: "Ask brave questions to learn more.",
        past_knowledge: "Use what you know to solve what is new.",
        communication: "Share ideas clearly and kindly.",
        senses: "Use your senses like learning tools.",
        creating: "Imagine, build, test, and try again.",
        wonderment: "Stay amazed by the world around you.",
        risk_taking: "Try new things with care.",
        humour: "Let a smile help you learn from mistakes.",
        interdependence: "Great thinking grows with teamwork.",
        open_learning: "Keep growing every day."
    };

    return rules[habit.id] || habit.desc;
}

function claimRewardSticker() {
    const reflectionText = document.getElementById('reward-reflection-input').value.trim();
    const h = appState.activeQuest;

    appState.player.completedQuests[h.id] = (appState.player.completedQuests[h.id] || 0) + 1;
    appState.player.gemCounts[h.value] = (appState.player.gemCounts[h.value] || 0) + 1;
    
    if (reflectionText) {
        appState.player.reflections[h.id] = reflectionText;
    }

    const todayStr = new Date().toDateString();
    if (appState.player.lastPlayedDate !== todayStr) {
        appState.player.streak = (appState.player.streak || 0) + 1;
        appState.player.lastPlayedDate = todayStr;
    }

    saveProgress();

    renderMapMarkers();
    renderStickerBook();
    renderGarden();

    document.getElementById('reward-modal').classList.remove('active');
    showScreen('screen-map');
}

// Render Garden
function renderGarden() {
    const container = document.getElementById('garden-plots-container');
    if (!container) return;
    container.innerHTML = '';

    SEED_SLOTS_DATA.forEach(plot => {
        const habit = HABITS_OF_MIND.find(h => h.id === plot.habitId);
        if (!habit) return;

        const count = appState.player.completedQuests[plot.habitId] || 0;
        let growthLevel = 'Locked';
        let badgeClass = 'badge-locked';
        let plantIcon = '🟤';

        if (count === 1) {
            growthLevel = 'Sprout 🌱';
            badgeClass = 'badge-sprout';
            plantIcon = '🌱';
        } else if (count === 2) {
            growthLevel = 'Growing 🌿';
            badgeClass = 'badge-growing';
            plantIcon = '🌿';
        } else if (count >= 3) {
            growthLevel = plot.levels[3];
            badgeClass = 'badge-bloomed';
            plantIcon = plot.levels[3].split(' ').pop();
        }

        const plotCard = document.createElement('div');
        plotCard.className = 'garden-plot';
        plotCard.innerHTML = `
            <span class="growth-badge ${badgeClass}">${growthLevel}</span>
            <div class="plant-avatar">
                <span style="font-size: 3.8rem; line-height: 1;">${plantIcon}</span>
            </div>
            <h4>${plot.plantName}</h4>
            <p>${habit.habit}</p>
            <span class="garden-rule" aria-live="polite">${getHabitRule(habit)}</span>
        `;

        plotCard.addEventListener('click', () => {
            plotCard.classList.remove('sparkle-burst');
            void plotCard.offsetWidth;
            plotCard.classList.add('sparkle-burst');
            const rule = plotCard.querySelector('.garden-rule');
            rule.textContent = count > 0
                ? `${habit.name}'s reminder: ${getHabitRule(habit)}`
                : `${habit.name}'s seed is waiting: ${getHabitRule(habit)}`;
        });

        container.appendChild(plotCard);
    });
}

// Render Collection / Sticker book
function renderStickerBook() {
    const container = document.getElementById('collection-slots-container');
    if (!container) return;
    container.innerHTML = '';

    const summary = document.getElementById('collection-gem-summary');
    if (summary) {
        const values = ['curiosity', 'collaboration', 'creativity', 'compassion', 'courage'];
        summary.innerHTML = values.map(value => `
            <div class="gem-summary-item gem-summary-${value}">
                <span class="gem-summary-emoji">${getGemEmoji(value)}</span>
                <span class="gem-summary-value">${appState.player.gemCounts[value] || 0}</span>
                <span class="gem-summary-label">${capitalize(value)}</span>
            </div>
        `).join('');
    }

    HABITS_OF_MIND.forEach(habit => {
        const isUnlocked = !!appState.player.completedQuests[habit.id];
        const slot = document.createElement('div');
        slot.className = `sticker-slot ${isUnlocked ? 'unlocked' : ''}`;
        
        slot.innerHTML = `
            <span class="slot-gem">${getGemEmoji(habit.value)}</span>
            <span class="slot-emoji">${isUnlocked ? habit.emoji : '❓'}</span>
            <span class="slot-name">${habit.name} the ${habit.animal}</span>
            ${isUnlocked ? `<span style="font-size: 0.7rem; color: var(--color-${habit.value}-dark); font-weight: 700; background-color: var(--color-${habit.value}-soft); padding: 2px 6px; border-radius: 8px; margin-top: 4px;">${habit.habit}</span>` : ''}
        `;

        slot.addEventListener('click', () => {
            if (isUnlocked) {
                const reflection = appState.player.reflections[habit.id] || "No reflection saved yet.";
                alert(`✨ ${habit.name} says: "${habit.desc}"\n\nYour reflection:\n"${reflection}"`);
            } else {
                alert(`This sticker is locked! Play the quest for ${habit.habit} on its active day to unlock ${habit.name}!`);
            }
        });

        container.appendChild(slot);
    });
}

// Parent dashboard math locks
function triggerParentLock() {
    const num1 = Math.floor(Math.random() * 8) + 4;
    const num2 = Math.floor(Math.random() * 8) + 3;
    appState.lockMathAnswer = num1 + num2;

    document.getElementById('lock-math-question').textContent = `${num1} + ${num2} = ?`;
    document.getElementById('lock-math-input').value = '';
    document.getElementById('parent-lock-modal').classList.add('active');
}

function verifyParentLock() {
    const inputVal = parseInt(document.getElementById('lock-math-input').value.trim());
    if (inputVal === appState.lockMathAnswer) {
        document.getElementById('parent-lock-modal').classList.remove('active');
        showScreen('screen-parent');
    } else {
        alert("Oops, that is not the right answer! Let's try again!");
        triggerParentLock();
    }
}

function getParentConversationPrompt(habit) {
    const prompts = {
        persisting: "What was something tricky you kept working on today, and what helped you keep going?",
        impulsivity: "When did you pause before acting today? What did your body feel like after the pause?",
        listening: "Who did you listen to carefully today, and how could you tell how they were feeling?",
        flexibility: "What problem could you solve in more than one way this week?",
        metacognition: "What did you notice about how your brain learns best?",
        accuracy: "Where could checking one more time make your work stronger?",
        questioning: "What is one question you asked today that helped you learn?",
        past_knowledge: "What old learning helped you solve something new?",
        communication: "How did you make your idea clear for someone else?",
        senses: "What did your senses notice today that your brain almost missed?",
        creating: "What would you invent or improve if you had one quiet hour?",
        wonderment: "What made you feel curious, amazed, or grateful today?",
        risk_taking: "What small brave thing could you try while staying safe?",
        humour: "When did laughing or smiling help a mistake feel easier?",
        interdependence: "Who helped your thinking today, and who did you help?",
        open_learning: "What is one thing you want to keep practicing tomorrow?"
    };

    return prompts[habit.id] || `How can you practice ${habit.habit} at home this week?`;
}

function syncParentConversationStarters() {
    const container = document.getElementById('parent-conversation-list');
    if (!container) return;

    const completed = HABITS_OF_MIND.filter(habit => appState.player.completedQuests[habit.id]);
    const habitsToShow = completed.length > 0
        ? completed.slice(-3).reverse()
        : HABITS_OF_MIND.filter(habit => ['persisting', 'impulsivity', 'listening'].includes(habit.id));

    container.innerHTML = habitsToShow.map(habit => `
        <div class="conversation-card">
            <h4>${habit.emoji} Reinforcing "${habit.habit}" (${capitalize(habit.value)})</h4>
            <p>"I saw ${appState.player.name || 'your child'} practiced with ${habit.name}. Ask: '${getParentConversationPrompt(habit)}'"</p>
        </div>
    `).join('');
}

function syncParentActivityCards() {
    const container = document.getElementById('parent-activity-list');
    if (!container) return;

    const activities = [
        { value: 'curiosity', title: 'Curiosity Sensory Walk', text: 'Take a 10-minute quiet walk. Find 3 things you can hear, 3 you can see, and 3 you can smell or feel.' },
        { value: 'collaboration', title: 'Collaboration Mirror Challenge', text: 'Face each other. One person leads slow motions while the other mirrors them, then switch leaders.' },
        { value: 'creativity', title: 'Creativity Scribble Studio', text: 'Draw a random scribble and turn it into an animal, tool, place, or new invention.' },
        { value: 'compassion', title: 'Compassion Pause Practice', text: 'Name one feeling from the day, take three slow breaths, and choose one kind response.' },
        { value: 'courage', title: 'Courage Tiny Step', text: 'Pick one hard-but-safe task and break it into the smallest first step you can try today.' }
    ];

    container.innerHTML = activities.map(activity => `
        <div class="sheet-card">
            <h4 style="color: var(--color-${activity.value}-dark);">${getValueEmoji(activity.value)} ${activity.title}</h4>
            <p>${activity.text}</p>
        </div>
    `).join('');
}

function syncParentDashboard() {
    document.getElementById('parent-child-name').textContent = appState.player.name || "Young Explorer";
    document.getElementById('parent-child-age').textContent = `Ages ${appState.player.age}`;
    
    const totalCompletedCount = Object.keys(appState.player.completedQuests).length;
    document.getElementById('parent-total-completed').textContent = `${totalCompletedCount} / 16`;
    document.getElementById('parent-streak-count').textContent = `${appState.player.streak} Day${appState.player.streak === 1 ? '' : 's'}`;

    document.getElementById('parent-gem-curiosity').textContent = appState.player.gemCounts.curiosity;
    document.getElementById('parent-gem-collaboration').textContent = appState.player.gemCounts.collaboration;
    document.getElementById('parent-gem-creativity').textContent = appState.player.gemCounts.creativity;
    document.getElementById('parent-gem-compassion').textContent = appState.player.gemCounts.compassion;
    document.getElementById('parent-gem-courage').textContent = appState.player.gemCounts.courage;

    syncParentConversationStarters();
    syncParentActivityCards();
}

// Data synchronization
function saveProgress() {
    localStorage.setItem('mindspark_quest_state', JSON.stringify(appState.player));
}

function loadProgress() {
    const saved = localStorage.getItem('mindspark_quest_state');
    if (saved) {
        try {
            appState.player = JSON.parse(saved);
            
            if (appState.player.name) {
                document.getElementById('app-header').style.display = 'flex';
                document.getElementById('app-navigation').style.display = 'flex';
                document.getElementById('player-badge').textContent = `🎒 Adventurer: ${appState.player.name}`;
                showScreen('screen-map');
            }
        } catch (e) {
            console.error("Error loading saved state", e);
        }
    }
}
