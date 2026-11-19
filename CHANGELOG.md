# Changelog

All changes to the Moshoeshoe II Learning Hub project are documented here.
Format: `YYYY-MM-DD | what changed | reason`

## Entries
2026-11-17 | Verified eas.json preview profile configured for standalone APK build | pre-pilot review
2026-11-17 | Updated app.json name to "Moshoeshoe II Hub" and verified package name, version, and icon | pre-pilot review
2026-11-17 | Audited runtime codebase for network dependencies (verified zero remote fonts, images, or fetch calls) | pre-pilot review
2026-11-17 | Audited asset images dimensions and sizes for standalone APK packaging | pre-pilot review
2026-11-17 | Removed all identifiable photos of children from UI and bundle; replaced with neutral school crest panels and motto "Thuto ke Leseli la Sechaba" | pre-pilot review
2026-11-17 | Deleted assets/community photo directory from bundle | pre-pilot review
2026-11-17 | Added settingsTab and bilingual UI strings to UI.en and UI.st; marked unconfirmed Sesotho strings with TODO for teacher review | pre-pilot review
2026-11-17 | Created SESOTHO_TO_VERIFY.md documenting all Sesotho UI translations requiring teacher verification before pilot | pre-pilot review
2026-11-17 | Added first-launch full-screen bilingual language selector screen (Sesotho / English) persisted to AsyncStorage hub.langChosen | pre-pilot review
2026-11-17 | Replaced hardcoded English UI strings across quiz, revision, notes, and interactive widgets with bilingual u.keyName lookups | pre-pilot review
2026-11-17 | Enforced minimum font size of 14pt (via fs helper Math.max), 16pt body text, and minimum 48dp height on all interactive touch targets (header buttons, filter pills, option rows, hint buttons, bottom dock tabs) | pre-pilot review
2026-11-17 | Added visible text label to Settings tab in bottom dock navigation in both English and Sesotho | pre-pilot review
2026-11-17 | Added Speech.getAvailableVoicesAsync detection on app start for native Sesotho voices (st, st-ZA, st-LS, sot); hides read-aloud buttons on Sesotho text when no native voice is present | pre-pilot review
2026-11-17 | Added clear text-to-speech status display in Settings informing the user whether a Sesotho voice was detected | pre-pilot review
2026-11-17 | Renamed AI Study Companion to "Help Guide / Thuso" and removed the word "AI" across all UI text, cards, and headers; restricted to fixed pre-written curriculum guidance | pre-pilot review
2026-11-17 | Renamed quiz hint to "Hint / Keletso" across both English and Sesotho | pre-pilot review
2026-11-17 | Wrapped entire application in RootErrorBoundary component displaying a friendly bilingual restart screen | pre-pilot review
2026-11-17 | Protected all AsyncStorage reads with isolated try/catch blocks and safe fallback defaults to prevent crashes on corrupted storage | pre-pilot review
2026-11-17 | Added learner profile picker supporting up to 4 sibling profiles per device (nickname max 12 chars, grade 1-7, colored avatar; no personal data) | pre-pilot review
2026-11-17 | Added migration moving existing legacy non-profile progress into a default "Learner 1" profile | pre-pilot review
2026-11-17 | Namespaced all learner progress, bookmarks, streak, and recent lesson history under hub.p.<profileId>.* keys in AsyncStorage | pre-pilot review
2026-11-17 | Added profile switcher pill in top header and Settings section allowing one-tap switching between sibling profiles | pre-pilot review
2026-11-17 | Added inline confirmation requirement before deleting any learner profile to prevent accidental progress loss | pre-pilot review
2026-11-19 | Added a bilingual Me screen with per-grade subject progress, badge states, learner switching, avatar choices, gender, and required guardian-consent confirmation; checks, feedback, and PIN-protected teacher-area actions remain unavailable pending Phase 5 | Leseli Phase 1
2026-11-19 | Changed learner streaks to count days with a correctly answered activity rather than app launches | prevent overstated learning activity
2026-11-19 | Replaced synthetic teacher drill-down scores and support flags with profile-scoped answer events, real subject accuracy, and explicit no-data/error states | Leseli Phase 1 hard rule
2026-11-19 | Replaced identifiable community photos in the app with neutral illustrated cards; excluded local photos, generated deliverables, and unverified project reports from public source control | privacy and publication review
2026-11-19 | Added explicit EAS upload exclusions for local photos, reports, generated assets and Git metadata; linked the app config to its EAS project | preview APK deployment
