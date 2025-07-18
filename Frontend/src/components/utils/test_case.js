export const testCasesPrefill = [
    {
      "testCaseID": "TC-001",
      "section": "App Launch",
      "title": "Launch App & Grant Permissions",
      "steps": [
        "Launch app",
        "Grant GPS and BLE permissions when prompted"
      ],
      "expectedResult": "App proceeds to dashboard after both permissions are granted",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-002",
      "section": "Dashboard",
      "title": "Open Map from Dashboard",
      "steps": [
        "On dashboard, tap on “Map”"
      ],
      "expectedResult": "Map interface loads correctly with location indicator ready",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-003",
      "section": "Localization",
      "title": "Anchor Point Selection Prompt",
      "steps": [
        "Upon map load, app displays nearby anchor points/landmarks",
        "Select one manually"
      ],
      "expectedResult": "Selected point becomes the user's initial position; map shows accurate location dot",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-004",
      "section": "Localization",
      "title": "BLE + GPS Switching Logic",
      "steps": [
        "Start in GPS area (outdoor)",
        "Walk into indoor beacon zone"
      ],
      "expectedResult": "App transitions from GPS to BLE smoothly; no user confusion or jump in location",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-005",
      "section": "Search & Routing",
      "title": "Destination Search Function",
      "steps": [
        "Tap top search bar",
        "Type part of a destination name",
        "Select a suggestion"
      ],
      "expectedResult": "Destination marker appears correctly on map",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-006",
      "section": "Search & Routing",
      "title": "Render Path to Destination",
      "steps": [
        "Tap “Get Directions” after selecting destination"
      ],
      "expectedResult": "App draws path from selected anchor to destination\nTotal distance is displayed clearly",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-007",
      "section": "Preview Navigation",
      "title": "Play Preview Mode",
      "steps": [
        "Tap “Play Preview”",
        "Observe the animated marker following the path"
      ],
      "expectedResult": "Marker moves along path to guide visually; no jitter or misdirection",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-008",
      "section": "Navigation",
      "title": "Start Turn-by-Turn Navigation",
      "steps": [
        "Tap “Start Navigation”",
        "Hold phone upright (not in pocket)",
        "Begin walking"
      ],
      "expectedResult": "Turn-by-turn instructions update accurately based on orientation and progress",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-009",
      "section": "Orientation Handling",
      "title": "Magnetometer Tracking",
      "steps": [
        "Rotate phone or walk in reverse direction"
      ],
      "expectedResult": "App correctly adjusts the navigation arrow based on movement direction",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-010",
      "section": "Floor Handling",
      "title": "Indoor Floor Transitions (if multi-floor)",
      "steps": [
        "Navigate a route involving stairs/lift between floors"
      ],
      "expectedResult": "App automatically switches floor view and updates instructions",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-011",
      "section": "Misuse Handling",
      "title": "Device in Pocket Test",
      "steps": [
        "Start navigation",
        "Put phone in pocket"
      ],
      "expectedResult": "App prompts “Hold phone in correct direction” or stops navigation guidance",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-012",
      "section": "Pause Handling",
      "title": "Pause and Resume Navigation",
      "steps": [
        "Stop midway during navigation",
        "Resume walking after a pause"
      ],
      "expectedResult": "App pauses/re-routes appropriately; resumes smoothly",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-013",
      "section": "Error Handling",
      "title": "Beacon Signal Weak or GPS Dropped",
      "steps": [
        "Enter low-coverage area",
        "Observe app behavior"
      ],
      "expectedResult": "App alerts user or attempts to maintain last known location",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-014",
      "section": "Edge Case",
      "title": "Wrong Direction Walking",
      "steps": [
        "Start navigation",
        "Walk in wrong direction"
      ],
      "expectedResult": "App detects deviation and recalculates route or prompts user",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-015",
      "section": "Accessibility",
      "title": "Map UI and Color Clarity",
      "steps": [
        "Observe map and UI elements as color-deficient user"
      ],
      "expectedResult": "Path, arrow, and labels clearly visible to all users",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-016",
      "section": "Performance",
      "title": "Extended Session Test",
      "steps": [
        "Use app continuously for 20 minutes in mixed indoor/outdoor scenario"
      ],
      "expectedResult": "No app crash; performance remains smooth; battery drain acceptable",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-017",
      "section": "System Compatibility",
      "title": "Android + iOS Cross Device",
      "steps": [
        "Repeat localization and navigation flow on both platforms"
      ],
      "expectedResult": "App behaves identically on Android and iOS",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-018",
      "section": "Usability",
      "title": "Instruction Clarity",
      "steps": [
        "Observe turn-by-turn instructions during navigation"
      ],
      "expectedResult": "Language is simple, contextually clear (“Turn left at lift”, etc.)",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-019",
      "section": "Safety Message",
      "title": "Hold Orientation Prompt",
      "steps": [
        "Start navigation and tilt/rotate phone randomly"
      ],
      "expectedResult": "App shows warning or tips to guide user to hold phone properly",
      "status": "",
      "comments": ""
    },
    {
      "testCaseID": "TC-020",
      "section": "App Exit",
      "title": "Reopen after Background Mode",
      "steps": [
        "Minimize app",
        "Reopen after 30 seconds"
      ],
      "expectedResult": "App resumes at last known state; map and location intact",
      "status": "",
      "comments": ""
    }
  ]
  