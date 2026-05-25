# Architecture Diagrams 📐

## System Architecture Visualization

### 1. High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER'S WEB BROWSER                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              PRESENTATION LAYER                        │   │
│  │  ┌──────────────────────────────────────────────────┐  │   │
│  │  │  HTML5 DOM (index.html)                         │  │   │
│  │  │  • Screen shells (Welcome, Island, Quest, etc) │  │   │
│  │  └──────────────────────────────────────────────────┘  │   │
│  │           ↑              ↓                             │   │
│  │  ┌──────────────────────────────────────────────────┐  │   │
│  │  │  CSS3 Styling (style.css)                       │  │   │
│  │  │  • Animations, gradients, layouts              │  │   │
│  │  │  • Responsive design (mobile, tablet, desktop) │  │   │
│  │  └──────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            APPLICATION LOGIC LAYER                     │   │
│  │  ┌──────────────────────────────────────────────────┐  │   │
│  │  │  app.js (JavaScript Engine)                     │  │   │
│  │  │                                                 │  │   │
│  │  │  Core Modules:                                  │  │   │
│  │  │  • State Manager (gameState object)            │  │   │
│  │  │  • Daily Rotation Scheduler                    │  │   │
│  │  │  • Quest Engine (story logic)                  │  │   │
│  │  │  • SVG Character Renderer                      │  │   │
│  │  │  • Event Handlers (user interactions)          │  │   │
│  │  │  • Persistence Manager (Local Storage)         │  │   │
│  │  └──────────────────────────────────────────────────┘  │   │
│  │                   ↕ Bidirectional                      │   │
│  │           DOM Updates ↔ State Changes                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │          DATA PERSISTENCE LAYER                       │   │
│  │  ┌──────────────────────────────────────────────────┐  │   │
│  │  │  Browser Local Storage API                      │  │   │
│  │  │  • Key: 'mindspark_quest_state'                │  │   │
│  │  │  • Value: JSON stringified gameState           │  │   │
│  │  │  • Storage Limit: ~5-10 MB                     │  │   │
│  │  └──────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
         ❌ NO EXTERNAL SERVERS ❌ NO NETWORK REQUESTS
         ✅ COMPLETE OFFLINE FUNCTIONALITY ✅ PRIVACY FIRST
```

---

## 2. User Interaction Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER JOURNEY FLOWCHART                       │
└─────────────────────────────────────────────────────────────────┘

                        START
                          │
                          ↓
                    ┌─────────────┐
                    │ Open Browser │
                    │ Load HTML   │
                    └─────────────┘
                          │
                          ↓
                    ┌─────────────────────┐
                    │ CSS Loads & Applies │
                    │ app.js Executes     │
                    └─────────────────────┘
                          │
                          ↓
                ┌──────────────────────────┐
                │ Load From Local Storage  │
                │ (If user has visited)   │
                └──────────────────────────┘
                          │
                ┌─────────┴──────────┐
                │                    │
                ↓                    ↓
        [First Time]        [Returning User]
                │                    │
                ↓                    ↓
        ┌──────────────┐      ┌────────────┐
        │Welcome Screen│      │Island Map  │
        │• Name Input  │      │(Autologin) │
        │• Age Select  │      └────────────┘
        └──────────────┘
                │
                ↓
        ┌──────────────┐
        │  Island Map  │
        │   (16 chars) │
        └──────────────┘
                │
        ┌───────┴────────┬────────────────┐
        │                │                │
        ↓                ↓                ↓
    ┌────────┐   ┌────────────┐   ┌────────────┐
    │Quest 1 │   │Daily Quest │   │Parent Mode │
    │(Rocky) │   │(Featured)  │   │(Dashboard) │
    └────────┘   └────────────┘   └────────────┘
        │                │                │
        ↓                ↓                ↓
    ┌──────────────────────────────────────┐
    │       Story Screen                   │
    │  • Character (SVG)                   │
    │  • Narrative Text                    │
    │  • Choice Buttons (2-3 options)      │
    └──────────────────────────────────────┘
        │
        ↓ (Child makes choice)
    ┌──────────────────────────────────────┐
    │  Story Progression                   │
    │  • Next scene based on choice        │
    │  • Consequences revealed             │
    └──────────────────────────────────────┘
        │
        ↓
    ┌──────────────────────────────────────┐
    │  Reflection Prompt                   │
    │  "How does this apply to YOU?"       │
    │  Child reflects/answers              │
    └──────────────────────────────────────┘
        │
        ↓
    ┌──────────────────────────────────────┐
    │  Results/Rewards Screen              │
    │  ✓ Sticker Awarded                   │
    │  ✓ 25 Gems Earned                    │
    │  ✓ Garden Plant Grew                 │
    │  [Save to Local Storage]             │
    └──────────────────────────────────────┘
        │
        ↓
    ┌──────────────────────────────────────┐
    │  Return to Island Map                │
    │  (Back to exploration)               │
    └──────────────────────────────────────┘
        │
    ┌───┴──────────────────────────────────┐
    │                                      │
    ↓                                      ↓
┌────────────────┐            ┌──────────────────┐
│Continue Playing│            │ Refresh/Close    │
│(Another Quest) │            │                  │
└────────────────┘            └──────────────────┘
    │                                 │
    └─────────────────┬───────────────┘
                      ↓
                ┌────────────────┐
                │Load State From │
                │Local Storage   │
                │(Progress saved)│
                └────────────────┘
```

---

## 3. State Management Structure

```
┌─────────────────────────────────────────────────────────────────┐
│              GAME STATE OBJECT HIERARCHY                        │
└─────────────────────────────────────────────────────────────────┘

gameState = {
    
    ┌─ childProfile ─────────────────────────────────────────┐
    │  • name: "Alice"                                       │
    │  • ageGroup: "5-7" | "8-10"                            │
    │  • joinDate: "2025-05-20"                              │
    └────────────────────────────────────────────────────────┘
    
    ┌─ questProgress ─────────────────────────────────────────┐
    │  • completedQuests: ["rocky", "sage"]                  │
    │  • currentQuest: null | "luna"                         │
    │  • questHistory: [                                      │
    │      {                                                  │
    │        habitId: "rocky",                               │
    │        date: "2025-05-20T14:30:00",                    │
    │        choices: [1, 2],                                │
    │        reflection: "I like trying hard..."             │
    │      },                                                │
    │      ...                                               │
    │    ]                                                   │
    └────────────────────────────────────────────────────────┘
    
    ┌─ achievements ──────────────────────────────────────────┐
    │  • stickers: [                                         │
    │      { habitId: "rocky", color: "gold", date: ... }, │
    │      { habitId: "sage", color: "silver", date: ... } │
    │    ]                                                   │
    │  • gems: 150                                           │
    │  • gardenPlants: {                                    │
    │      rocky: 1,                                         │
    │      sage: 1,                                          │
    │      luna: 0,                                          │
    │      ...                                               │
    │    }                                                   │
    └────────────────────────────────────────────────────────┘
    
    ┌─ dailyRotation ─────────────────────────────────────────┐
    │  • lastVisitDate: "2025-05-25"                         │
    │  • featuredHabitIndex: 2                               │
    │    (maps to habit at DAILY_ROTATION[2])                │
    └────────────────────────────────────────────────────────┘
    
    ┌─ parentMetrics ─────────────────────────────────────────┐
    │  • totalQuestsCompleted: 2                             │
    │  • habitsCovered: ["Perseverance", "Questioning"]      │
    │  • consistencyStreak: 2                                │
    │  • lastActivityDate: "2025-05-21"                      │
    │  • averageCompletionTime: 12  (minutes)                │
    └────────────────────────────────────────────────────────┘
}
```

---

## 4. Component Architecture

```
┌──────────────────────────────────────────────────────────────┐
│               COMPONENT HIERARCHY                            │
└──────────────────────────────────────────────────────────────┘

                    APP (Root)
                       │
         ┌─────────────┼─────────────┐
         │             │             │
         ↓             ↓             ↓
    ┌─────────┐   ┌─────────┐   ┌─────────┐
    │ Welcome │   │ Island  │   │ Parent  │
    │ Screen  │   │  Map    │   │Dashboard│
    └─────────┘   └─────────┘   └─────────┘
         │             │             │
    NAME │      ┌──────┴──────┐     │
    INPUT│      │             │     │
    AGE  │      ↓             ↓     │
    SELECT└─→ STORY       RESULTS   │
         │      SCREEN     SCREEN    │
         │      │          │        │
         │      └─ QUEST ─┬┘        │
         │            │   │         │
         └────────────┴───┼─────────┘
                          │
                ┌─────────┴─────────┐
                ↓                   ↓
            ┌──────────┐     ┌─────────┐
            │Sticker   │     │Garden   │
            │Collection│     │Growth   │
            └──────────┘     └─────────┘
                │                 │
                └────────┬────────┘
                         │
                    [SAVE STATE
                   TO LOCAL STORAGE]
```

---

## 5. Daily Rotation Algorithm

```
┌──────────────────────────────────────────────────────────────┐
│          16-DAY DAILY QUEST ROTATION CYCLE                   │
└──────────────────────────────────────────────────────────────┘

DAILY_ROTATION = [
    "rocky",      // Index 0 - Day 1, Day 17, Day 33...
    "sage",       // Index 1 - Day 2, Day 18, Day 34...
    "luna",       // Index 2 - Day 3, Day 19, Day 35...
    "harmony",    // Index 3
    "crystal",    // Index 4
    "prism",      // Index 5
    "flexi",      // Index 6
    "giggles",    // Index 7
    "atlas",      // Index 8
    "mirror",     // Index 9
    "scout",      // Index 10
    "nova",       // Index 11
    "spark",      // Index 12
    "brave",      // Index 13
    "archer",     // Index 14
    "sprout"      // Index 15 - Day 16, Day 32, Day 48...
]

Algorithm:
┌──────────────────────────────────────┐
│ getDailyFeaturedHabit()              │
├──────────────────────────────────────┤
│ 1. Get today's date                  │
│    today = new Date()                │
│                                      │
│ 2. Calculate day-of-year (0-365)     │
│    dayOfYear = Math.floor(           │
│      (today - Jan 1) / 86400000       │
│    )                                 │
│                                      │
│ 3. Get habit index                   │
│    habitIndex = dayOfYear % 16       │
│    (Result: 0-15)                    │
│                                      │
│ 4. Look up habit                     │
│    return DAILY_ROTATION[habitIndex] │
│                                      │
│ Result: Consistent across all        │
│ devices, time-zones agnostic         │
└──────────────────────────────────────┘

Example Timeline:
┌────────┬──────────┬─────────────┐
│ Date   │ Day Num  │ Habit       │
├────────┼──────────┼─────────────┤
│ May 20 │ 140      │ Rocky       │ (140 % 16 = 12... wait, recount)
│ May 21 │ 141      │ Sage        │
│ May 22 │ 142      │ Luna        │
│ ...    │ ...      │ ...         │
│ Jun 04 │ 155      │ Sprout      │ (155 % 16 = 15)
│ Jun 05 │ 156      │ Rocky       │ (156 % 16 = 0) ← Cycle repeats
└────────┴──────────┴─────────────┘
```

---

## 6. Data Persistence Flow

```
┌──────────────────────────────────────────────────────────────┐
│         LOCAL STORAGE PERSISTENCE LIFECYCLE                  │
└──────────────────────────────────────────────────────────────┘

WRITE PATH (Auto-Save):
┌──────────────────────────────────────┐
│ User Action (Quest Completed)        │
└──────────────────┬───────────────────┘
                   ↓
        ┌────────────────────┐
        │ Update gameState   │
        └────────┬───────────┘
                 ↓
        ┌────────────────────┐
        │ saveToPersistence()│
        │ - Snapshot state   │
        │ - Add timestamp    │
        │ - JSON.stringify() │
        └────────┬───────────┘
                 ↓
        ┌────────────────────────────────┐
        │ localStorage.setItem(          │
        │   'mindspark_quest_state',     │
        │   jsonString                   │
        │ )                              │
        └────────┬───────────────────────┘
                 ↓
        ┌────────────────────┐
        │ Data Persisted ✓   │
        │ In Browser Storage │
        └────────────────────┘


READ PATH (On App Load):
┌──────────────────────────────────────┐
│ Browser Opens (app.js loads)         │
└──────────────────┬───────────────────┘
                   ↓
        ┌────────────────────┐
        │ loadFromPersistence│
        │ - Get localStorage │
        │   item             │
        └────────┬───────────┘
                 ↓
        ┌────────────────────────────────┐
        │ Check if data exists           │
        │ - Null? → First time user      │
        │ - Data? → Parse & load         │
        └────────┬───────────────────────┘
                 ↓
        ┌────────────────────┐
        │ JSON.parse()       │
        └────────┬───────────┘
                 ↓
        ┌────────────────────┐
        │ Merge into gameState
        │ (Object.assign)    │
        └────────┬───────────┘
                 ↓
        ┌────────────────────┐
        │ Render UI from     │
        │ loaded state       │
        └────────────────────┘


STORAGE LIMITS:
┌─────────────────────┬──────────────┐
│ Browser            │ Limit        │
├─────────────────────┼──────────────┤
│ Chrome/Firefox      │ ~5-10 MB     │
│ Safari              │ ~5 MB        │
│ Edge                │ ~5-10 MB     │
│ Current App Usage   │ ~50-100 KB   │
├─────────────────────┼──────────────┤
│ Available Buffer    │ 95% unused   │
└─────────────────────┴──────────────┘
```

---

## 7. Event Handling Flow

```
┌──────────────────────────────────────────────────────────────┐
│               USER EVENT HANDLING FLOW                       │
└──────────────────────────────────────────────────────────────┘

User Action (Click "Enter the Island")
    ↓
DOM Event Triggered
    ↓ (captured by event listener)
Event Handler Function
    ├─ Validate Input (name not empty?)
    ├─ Update gameState
    │  └─ gameState.childProfile = {...}
    ├─ Call renderScreen('island')
    │  └─ Update DOM visibility
    │     • Hide welcome-screen
    │     • Show island-screen
    ├─ Render island map
    │  └─ Generate SVG characters
    │     • createCharacterSVG()
    │     • attachEventListeners()
    ├─ saveToPersistence()
    │  └─ Write to localStorage
    └─ Animation completes

Ready for next interaction:
    User can now click on characters
    Each character click → Quest Handler
    → Story Screen Displayed
    → Same cycle repeats
```

---

## 8. File Dependencies

```
┌──────────────────────────────────────────────────────────────┐
│              FILE DEPENDENCY GRAPH                           │
└──────────────────────────────────────────────────────────────┘

                 index.html (Entry)
                      │
        ┌─────────────┴──────────────┐
        │                            │
        ↓                            ↓
    style.css                    app.js
    (Styling)                (All Logic)
        │                        │
        │                        ├─ CHARACTERS object
        │                        │  (16 characters)
        │                        │
        │                        ├─ DAILY_ROTATION array
        │                        │
        │                        ├─ gameState object
        │                        │
        │                        ├─ Core Functions
        │                        │  • initializeApp()
        │                        │  • renderScreen()
        │                        │  • saveToStorage()
        │                        │  • loadFromStorage()
        │                        │
        │                        ├─ Event Handlers
        │                        │
        │                        ├─ SVG Generators
        │                        │  • generateCharacterSVG()
        │                        │
        │                        └─ Quest Logic
        │                           • runRockyQuest()
        │                           • runSageQuest()
        │                           • etc.
        │
    Apply Styles & Animations
    Layout Elements
    Responsive Design

No External Dependencies:
✗ jQuery
✗ React/Vue
✗ Bootstrap
✗ API calls
✗ Backend server
```

---

**Last Updated**: 2025-05-25 | Diagram Version: 1.0
