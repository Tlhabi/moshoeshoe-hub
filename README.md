# Moshoeshoe II Learning Hub

An Expo and React Native learning app with a bilingual Sesotho and English curriculum for primary learners in Lesotho. Lesson content is bundled in the app; learner profiles and progress are stored on the device.

## Current status

This is an in-progress prototype, not a completed or validated school pilot.

The current app includes:

- 184 curriculum lessons in `content/content.json`
- Sesotho and English lesson text and navigation
- Quizzes, revision, read-aloud where supported by the device, and accessibility settings
- Local learner profiles, progress, and a Me screen
- Teacher drill-down measurements based on recorded learner answer events; empty data is shown as “No data yet”

The wider Leseli feature port is incomplete. In particular, the conversational Thuso helper, maths solver, games, interactive widgets, checks, feedback collection, and full teacher/M&E tools are not implemented. An installed APK has not yet been verified in airplane mode, and no user-test results are published here.

## Development

Requirements: Node.js and npm compatible with the versions required by Expo in `package.json`.

```powershell
npm install
npm run check
npx expo start
```

`npm run check` validates the curriculum data and runs the TypeScript compiler. `npm run build:apk` starts the configured EAS Android build and requires the appropriate EAS setup.

## Privacy and publication

The app is designed to keep lesson content and learner progress on-device; this repository does not include cloud AI or analytics services. Verify the installed build's offline behavior before deployment.

Identifiable community photos, generated presentation files, project reports containing learner-level information, local configuration, and generated build output are intentionally excluded from this public repository. Do not add learner information, photographs, consent forms, or pilot results without appropriate authorization and review.

## Documentation

- [User guide](USER_GUIDE.md) — current features and known limitations in Sesotho and English
- [Changelog](CHANGELOG.md)

## License

MIT. See [LICENSE](LICENSE).
