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
