import React, { useEffect, useState, useCallback, useMemo, Component, ErrorInfo } from 'react';
import {
  View, Text, Pressable, ScrollView, BackHandler,
  StatusBar, Switch, StyleSheet, Platform, TextInput, Dimensions, Share,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import data from './content/content.json';
import { DICTIONARY, PAST_PAPERS } from './scripts/dictionary_and_papers';

// ─── i18n ─────────────────────────────────────────────────────────────────────
const UI: any = {
  en: {
    welcomeTag: 'OFFICIAL · 100% OFFLINE REPOSITORY',
    welcomeTitle: 'Moshoeshoe II Primary School',
    welcomeSub: 'Digital Curriculum Learning Hub',
    welcomeMotto: 'Empowering every Mosotho child with quality education — anywhere, anytime, zero data costs.',
    slideCaption1: 'School assembly in uniform · Moshoeshoe II Primary',
    slideCaption2: 'Basotho learners celebrating digital interactive exercises',
    slideCaption3: 'Classroom curriculum walkthrough in Maseru',
    slideCaption4: 'School leadership, teachers & ICT4D partnership',
    slideCaption5: 'Motivated Grade 5 & 7 pupils mastering syllabus outcomes',
    getStarted: 'Enter the Learning Hub',
    skip: 'Skip to Lessons',
    home: 'Home',
    pick: 'Select Class Grade',
    grade: 'Grade',
    back: 'Back',
    revise: 'Revise Missed Questions',
    settings: 'Settings',
    none: 'No lessons match your query yet.',
    read: 'Read Aloud',
    stopRead: 'Stop Reading',
    hint: 'Hint',
    ok: 'Correct! Well done.',
    no: 'Not quite — try again.',
    next: 'Next',
    prev: 'Previous',
    lang: 'Language',
    size: 'Text Size',
    hc: 'High Contrast Mode',
    easy: 'Easy Mode (one sentence at a time)',
    teacher: 'Teacher Mode',
    privacy: 'All learner data and settings stay securely on this phone. Nothing is transmitted.',
    empty: 'All caught up! You have mastered every revision question.',
    draft: 'Draft — Sesotho text needs review',
    outcome: 'Learning Outcome',
    source: 'Source',
    ref: 'Syllabus Reference',
    tip: 'Teacher Tip',
    voiceNoticeTitle: 'Voice Speech Synthesis (Sesotho & English)',
    voiceNoticeSesothoInstalled: 'Sesotho text-to-speech voice detected. Read-aloud is available for Sesotho and English.',
    voiceNoticeSesothoMissing: 'No Sesotho voice detected on this phone. Sesotho read-aloud buttons are hidden to prevent incorrect pronunciation. English read-aloud remains active.',
    searchPlaceholder: 'Search topics, lessons, keywords…',
    progressTitle: 'My Learning Journey',
    completedLessons: 'Activities Mastered',
    starsEarned: 'Stars Earned',
    resetProgress: 'Reset Learner Progress',
    resetConfirm: 'Progress has been reset.',
    quickQuiz: 'Quick Practice Quiz',
    quickQuizDesc: 'Answer 5 random revision questions across all subjects.',
    congratsTitle: 'Congratulations!',
    congratsBody: 'You answered all questions correctly in this lesson! ⭐',
    filterAll: 'All',
    dictTitle: 'Bilingual Primary Dictionary',
    dictDesc: 'Look up key vocabulary and concepts in English & Sesotho.',
    papersTitle: 'National Past Exam Papers',
    papersDesc: 'Authentic primary examination practice with step explanations.',
    aiTitle: 'Help Guide / Thuso',
    aiDesc: 'Fixed reference guides, formulas & concepts without internet.',
    paperComplete: 'Exam Practice Completed!',
    statsLessons: 'Lessons',
    statsSubjects: 'Subjects',
    statsGrades: 'Grades',
    statsFree: 'Zero Data',
    toolsTitle: 'Study Tools',
    subjectsTitle: 'National Learning Areas',
    lessonsIn: 'Lessons in',
    taskWord: 'tasks',
    masteredWord: 'Mastered',
    startWord: 'Start',
    newSet: 'New 5 Questions',
    tryAgain: 'Try Another 5',
    returnHub: 'Return to Hub',
    quizProgress: 'Quiz Session Progress',
    answered: 'Answered',
    correct: 'Correct',
    perfect: 'Perfect Score! 5 / 5 ⭐',
    wellDone: 'Well Done!',
    scored: 'You scored',
    outOf: 'out of',
    missedSaved: 'Missed questions saved to your Revision Deck for practice.',
    uniformBadge: 'MOSHOESHOE II PRIMARY · MASERU',
    streakTitle: 'Daily Learning Streak',
    streakActive: 'Active Learner',
    levelTitle: 'Scholar Standing',
    resumeLesson: 'Continue Where You Left Off',
    achievementsTitle: 'Honors & Badges',
    gradesTab: 'Grades',
    practiceTab: 'Practice',
    libraryTab: 'Library',
    theme: 'Theme & Appearance',
    themeLight: 'Light Mode',
    themeDark: 'Dark Mode',
    themeToggleTip: 'Switch between Light and Dark mode',
    practiceHubTitle: 'Practice & Revision Hub',
    drillsTab: 'Grade Drills',
    allGrades: 'All Grades',
    gradeLabel: 'Grade',
    dismiss: 'Dismiss',
    clearMastered: 'Clear Mastered',
    listen: 'Listen',
    deckClearTitle: 'All Caught Up! 🎉',
    deckClearDesc: 'No missed questions in your revision deck. Great job maintaining mastery!',
    retakeQuiz: 'Take Another Quiz',
    startDrill: 'Start Grade Drills',
    masteredBadge: '✓ Mastered! Removed from Missed List',
    settingsTab: 'Settings',
    // ── First-launch language choice screen ──────────────────────────────────
    langPickerTitle: 'Choose Your Language',
    langPickerSubtitle: 'Khetha Puo ea Hao',
    langPickerHint: 'You can change this anytime in Settings.',
    langPickerEnBtn: 'English',
    langPickerStBtn: 'Sesotho',
    // ── Minimum-size labels (Phase 3 additions) ──────────────────────────────
    exerciseLabel: 'Exercise Question',      // was hardcoded
    syllabusNotesLabel: 'Syllabus Notes',   // was hardcoded
    filterByGradeLabel: 'Filter by Grade Level:',
    filterBySubjectLabel: 'Filter by Subject:',
    questionsAvailable: 'questions available',
    noMatchFilter: 'No questions match this filter combination.',
    noMatchFilterHint: 'Try "All Grades" or "All Subjects" to broaden your pool.',
    resetFilters: 'Reset Filters',
    questionSavedToDeck: 'Saved to your Revision Deck for practice.',
    hintButtonLabel: 'Hint / Keletso',      // Phase 4 rename already here for forward compat
    aiConceptualGuidance: 'Conceptual Guidance',
    // ── Correct answer strings (Phase 3) ────────────────────────────────────
    correctAnswer: 'Correct answer:',
    yourPick: 'Your answer:',
    masteredSession: 'Mastered this session!',
    needsReview: 'Needs Review',
    questionsInDeck: 'In Deck',
    masteredToday: 'Mastered Today',
    // ── Learner Profiles (Phase 5) ──────────────────────────────────────────
    profilesTitle: 'Learner Profiles',
    whoIsLearning: 'Who is learning today?',
    whoIsLearningSub: 'Select your profile or add a sibling (up to 4)',
    profilePrivacyNotice: 'Use a nickname only (max 12 letters) — never use your real name, surname, or phone number.',
    addLearnerBtn: '+ Add Learner',
    newProfileTitle: 'Create Learner Profile',
    nicknameLabel: 'Learner Nickname (max 12 letters):',
    nicknamePlaceholder: 'e.g. Star, Tau, Lerato',
    chooseGradeLevelLabel: 'Grade Level (1 – 7):',
    avatarLabel: 'Choose an Avatar:',
    saveProfileBtn: 'Save & Start Learning',
    cancelBtn: 'Cancel',
    deleteProfileConfirm: 'Delete this profile and all its learning progress? This cannot be undone.',
    confirmDeleteBtn: 'Delete Profile',
    activeLearnerTag: 'Current Learner',
    switchProfileHint: 'Tap to switch profile',
    maxProfilesNotice: 'Maximum 4 learner profiles reached on this phone.',
    backToLearning: '← Continue Learning',
    meTitle: 'My learning',
    meProgress: 'My progress',
    lessonsCompleted: 'Lessons with progress',
    badgesTitle: 'Badges',
    changeLearner: 'Change learner',
    genderLabel: 'Gender',
    girl: 'Girl',
    boy: 'Boy',
    preferNotToSay: 'Prefer not to say',
    guardianConsent: 'A parent or guardian agreed (signed consent form)',
    consentRequired: 'A parent or guardian must agree before adding this learner.',
    startingCheck: 'Starting check',
    finalCheck: 'Final check',
    tellUs: 'Tell us what you think',
    howToUse: 'How to use',
    teacherArea: 'Teacher area',
    noDataYet: 'No data yet',
    dataCouldNotLoad: 'Saved progress could not be loaded.',
    featureNotReady: 'This feature is not available yet.',
    profileSaveFailed: 'The learner profile could not be saved on this phone.',
  },
  st: {
    welcomeTag: 'POLOKELO EA SEMMUSO EA SEKOLO E SA HLOKENG DATA',
    welcomeTitle: 'Sekolo sa Mathomo sa Moshoeshoe II',
    welcomeSub: 'Polokelo ea Lithuto tsa Sekolo',
    welcomeMotto: 'Ho matlafatsa ngoana e mong le e mong oa Mosotho ka thuto ea boleng — kae kapa kae, ntle le data.',
    slideCaption1: 'Kopano ea sekolo ea hoseng ka liaparo tsa sekolo',
    slideCaption2: 'Baithuti ba Basotho ba ithuta ka thabo ntle le marang-rang',
    slideCaption3: 'Tšebetso ea lithuto ka phaposing Maseru',
    slideCaption4: 'Boetapele ba sekolo, matichere le ICT4D',
    slideCaption5: 'Baithuti ba Sehlopha sa 5 le sa 7 ba ikoetlisa',
    getStarted: 'Kena Polokelong ea Thuto',
    skip: 'Tlola ho ea Lithutong',
    home: 'Hae',
    pick: 'Khetha Sehlopha sa Hao',
    grade: 'Sehlopha',
    back: 'Khutlela',
    revise: 'Pheta Lipotso Tse Saeleng',
    settings: 'Litlhophiso',
    none: 'Ha ho lithuto tse fumanoeng.',
    read: 'Mamela',
    stopRead: 'Emisa',
    hint: 'Thuso',
    ok: 'Ho nepile! U entse hantle.',
    no: 'Ha ho nepe — leka hape.',
    next: 'Latelang',
    prev: 'E fetileng',
    lang: 'Puo',
    size: 'Boholo ba Mongolo',
    hc: 'Mebala e Hlakileng',
    easy: "Mokhoa o Bonolo (polelo e le 'ngoe ka nako)",
    teacher: 'Mokhoa oa Matichere',
    privacy: 'Tsohle li bolokoa fonong ena feela. Ha ho letho le romelloang.',
    empty: 'Ha ho letho la ho pheta. U nepile lipotso tsohle!',
    draft: 'Sesotho se hloka ho hlahlojoa',
    outcome: 'Sepheo sa Thuto',
    source: 'Mohloli',
    ref: 'Tšupiso ea Lenaneo',
    tip: 'Keletso ea Titjhere',
    voiceNoticeTitle: 'Ho Bala ka Lentsoe (Sesotho le Senyesemane)',
    voiceNoticeSesothoInstalled: 'Lentsoe la Sesotho le fumanoe. Ho bala ka lentsoe ho teng bakeng sa Sesotho le Senyesemane.', // TODO: verify Sesotho
    voiceNoticeSesothoMissing: 'Ha ho lentsoe la Sesotho le fumanoeng fonong ena. Likonopo tsa ho bala ka Sesotho li patiloe ho qoba ho bitsa mantsoe hampe. Ho bala ka Senyesemane ho ntse ho sebetsa.', // TODO: verify Sesotho
    searchPlaceholder: 'Batla thuto kapa lentsoe…',
    progressTitle: 'Tsoelopele ea Ka',
    completedLessons: 'Mesebetsi e Nepiloeng',
    starsEarned: 'Linaleli Tse Rorisoang',
    resetProgress: 'Hlakola Tsoelopele Eohle',
    resetConfirm: 'Tsoelopele e hlakotsoe.',
    quickQuiz: 'Tlhahlobo e Khutšoanyane',
    quickQuizDesc: 'Araba lipotso tse 5 tsa boikoetliso ho tsoa lithutong tsohle.',
    congratsTitle: 'Rea u thoholetsa!',
    congratsBody: 'U nepile mesebetsi eohle thutong ena! ⭐',
    filterAll: 'Tsohle',
    dictTitle: 'Bukana ea Mantsoe',
    dictDesc: 'Batla tlhaloso ea mantsoe a bohlokoa ka Sesotho le Senyesemane.',
    papersTitle: 'Lipampiri tsa Litlhahlobo tsa Khale',
    papersDesc: 'Ikoetlise ka lipotso tsa naha tsa litlhahlobo.',
    aiTitle: 'Thuso / Help Guide',
    aiDesc: 'Tataiso e hlophisitsoeng ea thuto, lifomula le mehopolo ntle le data.', // TODO: verify Sesotho
    paperComplete: 'U Qetile Boikoetliso ba Litlhahlobo!',
    statsLessons: 'Lithuto',
    statsSubjects: 'Likarolo',
    statsGrades: 'Lihlopha',
    statsFree: 'Ha ho Data',
    toolsTitle: 'Lisebelisoa tsa Thuto',
    subjectsTitle: 'Likarolo tsa Thuto ea Naha',
    lessonsIn: 'Lithuto ho',
    taskWord: 'mesebetsi',
    masteredWord: 'Nepiloe',
    startWord: 'Qala',
    newSet: 'Lipotso Tse Ncha Tse 5',
    tryAgain: 'Ikoetlise Hape ka Tse 5',
    returnHub: 'Khutlela Lapeng',
    quizProgress: 'Tsoelopele ea Tlhahlobo',
    answered: 'Li Arabiloe',
    correct: 'Tse Nepahetseng',
    perfect: 'Boiphihlelo bo Felletseng! 5/5 ⭐',
    wellDone: 'U entse hantle!',
    scored: 'U nepile',
    outOf: 'ho tse',
    missedSaved: 'Lipotso tse saeleng li boloketsoe ho Pheta Lipotso.',
    uniformBadge: 'SEKOLO SA MOSHOESHOE II · MASERU',
    streakTitle: 'Matsatsi a Tsoelang Pele',
    streakActive: 'Moithuti ea Mafolofolo',
    levelTitle: 'Boemo ba Moithuti',
    resumeLesson: 'Tsoela Pele Moo U Emeng Teng',
    achievementsTitle: 'Likhetho le Likhau',
    gradesTab: 'Lihlopha',
    practiceTab: 'Boikoetliso',
    libraryTab: 'Laeborari',
    theme: 'Ponahalo ea Mebala',
    themeLight: 'Mebala e Khanyang (Light)',
    themeDark: 'Mebala e Lefifi (Dark)',
    themeToggleTip: 'Fetola pakeng tsa mebala e khanyang le e lefifi',
    practiceHubTitle: 'Setsi sa Boikoetliso le Pheta',
    drillsTab: 'Lithupelo tsa Sehlopha',
    allGrades: 'Lihlopha Tsohle',
    gradeLabel: 'Sehlopha',
    dismiss: 'Tlosa',
    clearMastered: 'Hlakola Tse Qetilweng',
    listen: 'Mamela',
    deckClearTitle: 'Lipotso Tsohle li Qetiloe! 🎉',
    deckClearDesc: 'Ha ho lipotso tse saeleng hajoale. U entse hantle haholo!',
    retakeQuiz: 'Leka Lipotso Tse Ling',
    startDrill: 'Qala Lithupelo tsa Sehlopha',
    masteredBadge: '✓ E Qetiloe! E tlositsoe lenaneng',
    settingsTab: 'Litlhophiso',
    // ── First-launch language choice screen ──────────────────────────────────
    langPickerTitle: 'Khetha Puo ea Hao',                   // TODO: verify Sesotho
    langPickerSubtitle: 'Choose Your Language',
    langPickerHint: 'U ka fetola nako efe kapa efe ho Litlhophiso.',   // TODO: verify Sesotho
    langPickerEnBtn: 'Senyesemane (English)',
    langPickerStBtn: 'Sesotho',
    // ── Minimum-size labels (Phase 3 additions) ──────────────────────────────
    exerciseLabel: 'Potso ea Boikoetliso',                  // TODO: verify Sesotho
    syllabusNotesLabel: 'Lintlha tsa Lenaneo',              // TODO: verify Sesotho
    filterByGradeLabel: 'Kgetha ka Sehlopha:',              // TODO: verify Sesotho
    filterBySubjectLabel: 'Kgetha ka Karolo:',              // TODO: verify Sesotho
    questionsAvailable: 'lipotso li teng',                  // TODO: verify Sesotho
    noMatchFilter: 'Ha ho lipotso tse lumellanang le khetho ena.',      // TODO: verify Sesotho
    noMatchFilterHint: 'Leka "Lihlopha Tsohle" kapa "Tsohle" ka holimo.',// TODO: verify Sesotho
    resetFilters: 'Hlakola Likhetho',                       // TODO: verify Sesotho
    questionSavedToDeck: 'E boloketsoe ho Pheta Lipotso.',  // TODO: verify Sesotho
    hintButtonLabel: 'Keletso',                             // TODO: verify Sesotho
    aiConceptualGuidance: 'Tlhaloso ea Mohopolo',           // TODO: verify Sesotho
    // ── Correct answer strings (Phase 3) ────────────────────────────────────
    correctAnswer: 'Karabo e nepahetseng:',                 // TODO: verify Sesotho
    yourPick: 'Karabo ea hau:',                             // TODO: verify Sesotho
    masteredSession: 'E nepiloe sehlopheng sena!',          // TODO: verify Sesotho
    needsReview: 'E Hloka Pheta',                           // TODO: verify Sesotho
    questionsInDeck: 'Polokelong',                          // TODO: verify Sesotho
    masteredToday: 'Tse Nepiloe Kajeno',                    // TODO: verify Sesotho
    // ── Learner Profiles (Phase 5) ──────────────────────────────────────────
    profilesTitle: 'Liprofaele tsa Baithuti',                  // TODO: verify Sesotho
    whoIsLearning: 'Ke mang ea ithutang kajeno?',              // TODO: verify Sesotho
    whoIsLearningSub: 'Kgetha profil ea hau kapa u eketse ngoaneno (ho fihla ho ba 4)', // TODO: verify Sesotho
    profilePrivacyNotice: 'Sebelisa lebitso la sephiri feela (litlhaku tse 12) — u se ke ua sebelisa lebitso la nnete kapa fono.', // TODO: verify Sesotho
    addLearnerBtn: '+ Eketsa Moithuti',                        // TODO: verify Sesotho
    newProfileTitle: 'Bopa Profil ea Moithuti',                // TODO: verify Sesotho
    nicknameLabel: 'Lebitso la Sephiri (litlhaku tse 12 feela):', // TODO: verify Sesotho
    nicknamePlaceholder: 'mohlala: Naleli, Tau, Lerato',        // TODO: verify Sesotho
    chooseGradeLevelLabel: 'Sehlopha sa Thuto (1 – 7):',                  // TODO: verify Sesotho
    avatarLabel: 'Kgetha Setšoantšo:',                         // TODO: verify Sesotho
    saveProfileBtn: 'Boloka le ho Qala ho Ithuta',             // TODO: verify Sesotho
    cancelBtn: 'Hlakola',                                      // TODO: verify Sesotho
    deleteProfileConfirm: 'Hlakola profil ee le tsoelopele eohle ea eona? Ha ho khonehe ho e khutlisa.', // TODO: verify Sesotho
    confirmDeleteBtn: 'Tlosa Profil',                          // TODO: verify Sesotho
    activeLearnerTag: 'Moithuti oa Hajoale',                   // TODO: verify Sesotho
    switchProfileHint: 'Tlanya ho fetola moithuti',            // TODO: verify Sesotho
    maxProfilesNotice: 'U fihlile boholong ba baithuti ba 4 fonong ena.', // TODO: verify Sesotho
    backToLearning: '← Tsoela Pele ho Ithuta',                 // TODO: verify Sesotho
    meTitle: 'Thuto ea ka',
    meProgress: 'Tsoelopele ea ka',
    lessonsCompleted: 'Lithuto tse nang le tsoelopele',
    badgesTitle: 'Likhau',
    changeLearner: 'Fetola moithuti',
    genderLabel: 'Bong',
    girl: 'Ngoanana',
    boy: 'Moshanyana',
    preferNotToSay: 'Ha ke batle ho bolela',
    guardianConsent: 'Motsoali kapa mohlokomeli o lumetse (foromo e saennoeng)',
    consentRequired: 'Motsoali kapa mohlokomeli o lokela ho lumela pele moithuti enoa a eketsoa.',
    startingCheck: 'Tlhahlobo ea ho qala',
    finalCheck: 'Tlhahlobo ea ho qetela',
    tellUs: 'Re bolelle maikutlo a hao',
    howToUse: 'Mokhoa oa ho sebelisa',
    teacherArea: 'Sebaka sa matichere',
    noDataYet: 'Ha ho lintlha hajoale',
    dataCouldNotLoad: 'Tsoelopele e bolokiloeng ha ea khona ho buloa.',
    featureNotReady: 'Karolo ena ha e so fumanehe.',
    profileSaveFailed: 'Profil ea moithuti ha ea khona ho bolokoa fonong ena.',
  },
};

// ─── Activity Index ────────────────────────────────────────────────────────────
const ACT: Record<string, any> = {};
const ALL_ACTIVITIES: any[] = [];
(data as any).subjects.forEach((sb: any) =>
  sb.lessons.forEach((l: any) =>
    l.blocks.forEach((b: any, i: number) => {
      if (b.type === 'activity') {
        const item = { ...b, id: l.id + '#' + i, lessonId: l.id, grade: l.grade, subjectId: sb.id };
        ACT[l.id + '#' + i] = item;
        ALL_ACTIVITIES.push(item);
      }
    })
  )
);

const sentences = (x: string) => x.match(/[^.!?]+[.!?\\u201d]*\\s*/g) || [x];

// ─── Theme Palettes (Uniform Colors: Red, Light Blue, Grey) ───────────────────
const DARK = {
  themeName: 'dark',
  bg:          '#0B1120',      // Deep midnight uniform slate
  bgCard:      '#131D31',      // Refined dark slate card
  bgElevated:  '#1A2640',      // Elevated tailored slate
  bgInput:     '#0F172A',      // Dark slate input
  border:      '#26354D',      // Tailored seam grey
  borderMid:   '#3B4E6E',      // Mid-tone uniform grey
  borderLight: '#546A8F',
  red:         '#DC2626',      // Moshoeshoe II Uniform Red
  redLight:    '#F87171',
  redSoft:     'rgba(220, 38, 38, 0.16)',
  lightBlue:   '#38BDF8',      // Uniform Sky/Light Blue
  lightBlueMid:'#0EA5E9',
  lightBlueSoft:'rgba(56, 189, 248, 0.15)',
  grey:        '#94A3B8',      // Heather grey
  greyLight:   '#CBD5E1',
  greyDark:    '#334155',
  greyMuted:   '#64748B',
  textPrimary: '#F8FAFC',      // Crisp optical white
  textSec:     '#CBD5E1',      // Clean slate-200
  textMuted:   '#94A3B8',      // Slate-400
  green:       '#10B981',      // Emerald
  greenLight:  '#34D399',
  greenSoft:   'rgba(16, 185, 129, 0.16)',
  gold:        '#F59E0B',      // Imperial gold
  goldLight:   '#FCD34D',
  goldSoft:    'rgba(245, 158, 11, 0.15)',
  subMaths:    '#38BDF8',
  subSci:      '#10B981',
  subSoc:      '#F59E0B',
  subEng:      '#A78BFA',
  subSes:      '#06B6D4',
  subCre:      '#FB923C',
  subPss:      '#F472B6',
  header:      '#070B16',
  shadow:      'rgba(0, 0, 0, 0.55)',
};

const LIGHT = {
  themeName: 'light',
  bg:          '#FAF7ED',
  bgCard:      '#FFFFFF',      // Pure white card
  bgElevated:  '#FFFDF7',
  bgInput:     '#FFFFFF',      // Pure white input
  border:      '#E7E1D5',
  borderMid:   '#D3CCBF',
  borderLight: '#E7E1D5',
  red:         '#DC2626',      // Moshoeshoe II Uniform Red
  redLight:    '#B91C1C',
  redSoft:     '#FEE2E2',      // Vibrant soft red fill
  lightBlue:   '#315DA8',
  lightBlueMid:'#1E3A8A',
  lightBlueSoft:'#EAF0FF',
  grey:        '#475569',      // Heather grey text
  greyLight:   '#64748B',
  greyDark:    '#E2E8F0',
  greyMuted:   '#94A3B8',
  textPrimary: '#0F172A',      // Deep midnight obsidian
  textSec:     '#334155',      // High-contrast slate-700
  textMuted:   '#64748B',      // Slate-500
  green:       '#059669',      // Emerald green
  greenLight:  '#047857',
  greenSoft:   '#DCFCE7',
  gold:        '#D97706',      // Imperial amber
  goldLight:   '#B45309',
  goldSoft:    '#FEF3C7',
  subMaths:    '#0284C7',
  subSci:      '#059669',
  subSoc:      '#D97706',
  subEng:      '#7C3AED',
  subSes:      '#0891B2',
  subCre:      '#EA580C',
  subPss:      '#DB2777',
  header:      '#FFFFFF',
  shadow:      'rgba(15, 23, 42, 0.08)',
};

const HC: any = {
  themeName: 'hc',
  bg: '#000000', bgCard: '#111111', bgElevated: '#1a1a1a', bgInput: '#000000',
  border: '#FFE600', borderMid: '#FFE600', borderLight: '#FFE600',
  red: '#FF4444', redLight: '#FF8888', redSoft: '#330000',
  lightBlue: '#FFE600', lightBlueMid: '#FFE600', lightBlueSoft: '#1a1600',
  grey: '#DDDDDD', greyLight: '#FFFFFF', greyDark: '#333333', greyMuted: '#AAAAAA',
  textPrimary: '#FFFFFF', textSec: '#DDDDDD', textMuted: '#B0B0B0',
  green: '#00FF44', greenLight: '#00FF44', greenSoft: '#002200',
  gold: '#FFE600', goldLight: '#FFE600', goldSoft: '#1a1600',
  subMaths:'#38BDF8', subSci:'#00FF44', subSoc:'#FFE600', subEng:'#A78BFA',
  subSes:'#67E8F9', subCre:'#FCA5A5', subPss:'#F9A8D4',
  header: '#000000', shadow: 'transparent',
};

const C = DARK;

// ─── Neutral School Visuals & Values ──────────────────────────────────────────
// Ethics compliance: All identifiable photos of children removed for child privacy.
// Neutral school crest, Lesotho national colors, and motto "Thuto ke Leseli la Sechaba".
const SCHOOL_MOTTO = {
  st: 'Thuto ke Leseli la Sechaba',
  en: 'Education is the Light of the Nation',
};

function shadow(elev: number = 1) {
  return Platform.select({
    ios: { shadowColor: '#000', shadowOffset: { width: 0, height: elev * 3 }, shadowOpacity: 0.35 + elev * 0.05, shadowRadius: elev * 4 },
    android: { elevation: elev * 3 },
    default: {},
  }) ?? {};
}

function subColor(id: string, c: typeof C) {
  const map: Record<string, string> = {
    maths: c.subMaths, science: c.subSci, social: c.subSoc,
    english: c.subEng, sesotho: c.subSes, creativity: c.subCre, pss: c.subPss,
  };
  return map[id] || c.lightBlue;
}

// ─── Learner Profile Types & Avatars (Phase 5) ────────────────────────────────
type ProfileRole = 'student' | 'teacher';

interface LearnerProfile {
  id: string;
  nickname: string; // max 12 characters, no personal data
  grade: number;    // 1 to 7
  avatar: string;   // emoji
  color: string;    // badge color
  role: ProfileRole;
  gender?: 'girl' | 'boy' | 'prefer-not-to-say';
  guardianConsent?: boolean;
}

const AVATAR_ICONS = ['🐄', '🐑', '🐐', '🐎', '🐕', '🐈', '🦅', '🐓', '🦁', '🐘', '🦒', '🐢', '🐇', '🦋', '🐝', '🌻', '⚽', '⭐', '🌙', '🏔️'];
const AVATAR_COLORS = ['#F59E0B', '#0EA5E9', '#10B981', '#F97316', '#8B5CF6', '#EC4899'];
const AVATARS = AVATAR_ICONS.map((icon, index) => ({
  icon,
  color: AVATAR_COLORS[index % AVATAR_COLORS.length],
  label: icon,
}));

const COMMUNITY_CARDS = [
  {
    key: 'learning-together',
    icon: '📚',
    titleEn: 'Learning together',
    titleSt: 'Re ithuta hammoho',
    detailEn: 'A welcoming place to explore new ideas.',
    detailSt: 'Sebaka se amohelang bohle ho sibolla mehopolo e mecha.',
  },
  {
    key: 'practice-every-day',
    icon: '⭐',
    titleEn: 'Practice every day',
    titleSt: 'Itloaetse letsatsi le letsatsi',
    detailEn: 'Small steps help learning grow.',
    detailSt: 'Mehato e menyenyane e thusa thuto ho hola.',
  },
  {
    key: 'curiosity',
    icon: '🌱',
    titleEn: 'Stay curious',
    titleSt: 'Tsoela pele ho botsa',
    detailEn: 'Every question can start a discovery.',
    detailSt: 'Potso e nngwe le e nngwe e ka qala tšibollo.',
  },
];

// ─── Pilot Assessment Data Schema (Phase 6: Offline, No Personal Data) ───────
interface PilotLog {
  activeDates: string[]; // dates only, e.g. '2026-11-17', max 60
  lessonsOpened: { id: string; sub: string; date: string }[]; // max 100
  quizzes: { date: string; grade: number | 'all'; sub: string; count: number; score: number }[]; // max 50
  lessonFeedback: Record<string, 'understood' | 'not_understood'>; // lessonId -> feedback
}

interface LearningEvent {
  id: string;
  type: 'activity_answer';
  timestamp: number;
  activityId: string;
  lessonId: string;
  subjectId: string;
  grade: number;
  correct: boolean;
}

const DEFAULT_PILOT_LOG: PilotLog = {
  activeDates: [],
  lessonsOpened: [],
  quizzes: [],
  lessonFeedback: {},
};

// ─── Error Boundary ────────────────────────────────────────────────────────────
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  restartKey: number;
}

class RootErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, restartKey: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Isolated local error capture — no remote telemetry
  }

  handleRestart = () => {
    this.setState(prev => ({ hasError: false, error: undefined, restartKey: prev.restartKey + 1 }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, backgroundColor: '#0B1120', justifyContent: 'center', alignItems: 'center', padding: 28 }}>
          <StatusBar barStyle="light-content" />
          {/* National Tricolor Stripe */}
          <View style={{ flexDirection: 'row', height: 5, width: '100%', maxWidth: 360, borderRadius: 3, overflow: 'hidden', marginBottom: 24 }}>
            <View style={{ flex: 1, backgroundColor: '#002B7F' }} />
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
            <View style={{ flex: 1, backgroundColor: '#009A44' }} />
          </View>
          <Text style={{ fontSize: 44, marginBottom: 12 }}>🏫</Text>
          <Text style={{ fontSize: 24, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', marginBottom: 6 }}>
            Moshoeshoe II Hub
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '800', color: '#F87171', textAlign: 'center', marginBottom: 8 }}>
            Something went wrong · Ho bile le phoso
          </Text>
          <Text style={{ fontSize: 14, color: '#94A3B8', textAlign: 'center', lineHeight: 22, marginBottom: 28, maxWidth: 340 }}>
            Tlanya konopo e ka tlase ho qala hape.{'\n'}Tap the button below to restart the app.
          </Text>
          <Pressable
            onPress={this.handleRestart}
            style={({ pressed }) => ({
              backgroundColor: '#DC2626',
              paddingHorizontal: 28,
              minHeight: 52,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: 320,
              opacity: pressed ? 0.88 : 1,
            })}
          >
            <Text style={{ fontSize: 16, fontWeight: '900', color: '#FFFFFF' }}>
              🔄 Qala Hape · Restart App
            </Text>
          </Pressable>
        </View>
      );
    }
    return <React.Fragment key={this.state.restartKey}>{this.props.children}</React.Fragment>;
  }
}

// ─── Main App Component ───────────────────────────────────────────────────────
function MainApp() {
  const [settings, setSettings] = useState({ lang: 'both', scale: 1, hc: false, easy: false, teacher: false, theme: 'light' });
  const [prog, setProg] = useState<{ done: Record<string, number>; wrong: string[] }>({ done: {}, wrong: [] });
  const [nav, setNav] = useState<any[]>([{ p: 'welcome' }]);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [hints, setHints] = useState<Record<string, number[]>>({});
  const [step, setStep] = useState(0);
  const [stVoice, setStVoice] = useState(false);
  const [stVoiceId, setStVoiceId] = useState<string | undefined>(undefined);
  const [speaking, setSpeaking] = useState(false);
  const [ready, setReady] = useState(false);
  // langChosen: null = never chosen (show picker), true = choice saved
  const [langChosen, setLangChosen] = useState<boolean | null>(null);
  const [onboardingStep, setOnboardingStep] = useState<0 | 1 | 2>(0);
  const [supportChoice, setSupportChoice] = useState<'sight' | 'hearing' | 'large' | null>(null);
  const [dashboardGrade, setDashboardGrade] = useState<number>(5);
  const [dailyRiddleRevealed, setDailyRiddleRevealed] = useState(false);

  // ── Learner Profiles State (Phase 5) ──────────────────────────────────────
  const [profiles, setProfiles] = useState<LearnerProfile[]>([]);
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [isAddingProfile, setIsAddingProfile] = useState<boolean>(false);
  const [newNickname, setNewNickname] = useState<string>('');
  const [newGrade, setNewGrade] = useState<number>(5);
  const [newRole, setNewRole] = useState<ProfileRole>('student');
  const [newAvatar, setNewAvatar] = useState(AVATARS[0]);
  const [newGender, setNewGender] = useState<NonNullable<LearnerProfile['gender']>>('prefer-not-to-say');
  const [guardianConsent, setGuardianConsent] = useState(false);
  const [deletingProfileId, setDeletingProfileId] = useState<string | null>(null);

  const activeProfile = useMemo(() => {
    return profiles.find(p => p.id === activeProfileId) || null;
  }, [profiles, activeProfileId]);

  const [searchQuery, setSearchQuery] = useState('');
  const [dictQuery, setDictQuery] = useState('');
  const [aiAnswer, setAiAnswer] = useState<any>(null);
  const [paperPicks, setPaperPicks] = useState<Record<string, number>>({});
  const [quizFilter, setQuizFilter] = useState('all');
  const [quizGradeFilter, setQuizGradeFilter] = useState<number | 'all'>('all');
  const [quizLength, setQuizLength] = useState<number>(5);
  const [quizSeed, setQuizSeed] = useState(0);
  const [quizPicks, setQuizPicks] = useState<Record<string, number>>({});
  const [quizHints, setQuizHints] = useState<Record<string, number[]>>({});
  const [revisePicks, setRevisePicks] = useState<Record<string, number>>({});
  const [reviseSessionMastered, setReviseSessionMastered] = useState<Record<string, boolean>>({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [lastLesson, setLastLesson] = useState<{ id: string; sub: string; title: string; grade: number } | null>(null);
  const [librarySubTab, setLibrarySubTab] = useState<'dict' | 'papers' | 'ai'>('dict');
  const [practiceSubTab, setPracticeSubTab] = useState<'quiz' | 'revise' | 'drills'>('quiz');
  const [teacherStudentEvents, setTeacherStudentEvents] = useState<{
    profileId: string;
    events: LearningEvent[];
    status: 'loaded' | 'missing' | 'error';
  } | null>(null);

  const s = settings;
  const activeProfileRole = activeProfile?.role ?? 'student';
  const teacherView = activeProfileRole === 'teacher' || s.teacher;
  const studentGradeScope = activeProfile && activeProfile.role === 'student' ? activeProfile.grade : null;
  const u: any = s.lang === 'both'
    ? Object.keys(UI.en).reduce((labels: Record<string, string>, key) => {
      labels[key] = `${UI.st[key] || UI.en[key]} · ${UI.en[key]}`;
      return labels;
    }, {})
    : UI[s.lang] || UI.en;
  const c = s.hc ? HC : (s.theme === 'light' ? LIGHT : DARK);
  const isLight = s.theme === 'light' && !s.hc;
  const fs = (n: number) => Math.round(Math.max(14, n) * s.scale);
  const T = (o: any): string => {
    if (!o) return '';
    if (typeof o === 'string') return o;
    if (s.lang === 'both' && o.st && o.en) return `${o.st}\n${o.en}`;
    return o[s.lang] || o.en || '';
  };
  const L = (en: string, st: string): string => s.lang === 'both' ? `${st} · ${en}` : s.lang === 'st' ? st : en;
  const TSpeech = (o: any): string => {
    if (!o) return '';
    if (typeof o === 'string') return o;
    return s.lang === 'both' ? o.en || o.st || '' : o[s.lang] || o.en || '';
  };

  // ── Profile Switching Handler ──────────────────────────────────────────────
  const selectProfile = async (targetProfile: LearnerProfile) => {
    setNav([{ p: 'home' }]);
    setActiveProfileId(targetProfile.id);
    await AsyncStorage.setItem('hub.activeProfileId', targetProfile.id).catch(() => {});
    setSettings(prev => ({ ...prev, teacher: targetProfile.role === 'teacher' }));

    // Load progress for this profile
    try {
      const pStr = await AsyncStorage.getItem(`hub.p.${targetProfile.id}.prog`);
      if (pStr) {
        const parsed = JSON.parse(pStr);
        if (parsed && typeof parsed === 'object') {
          setProg({
            done: parsed.done && typeof parsed.done === 'object' ? parsed.done : {},
            wrong: Array.isArray(parsed.wrong) ? parsed.wrong : [],
          });
        } else {
          setProg({ done: {}, wrong: [] });
        }
      } else {
        setProg({ done: {}, wrong: [] });
      }
    } catch {
      setProg({ done: {}, wrong: [] });
    }

    // Load bookmarks
    try {
      const bmStr = await AsyncStorage.getItem(`hub.p.${targetProfile.id}.bm`);
      if (bmStr) {
        const parsed = JSON.parse(bmStr);
        if (Array.isArray(parsed)) setBookmarks(parsed);
        else setBookmarks([]);
      } else {
        setBookmarks([]);
      }
    } catch {
      setBookmarks([]);
    }

    // Load streak
    try {
      const stStr = await AsyncStorage.getItem(`hub.p.${targetProfile.id}.streak`);
      const lastLearnDate = await AsyncStorage.getItem(`hub.p.${targetProfile.id}.lastLearnDate`);
      const now = new Date();
      const todayKey = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = [yesterday.getFullYear(), String(yesterday.getMonth() + 1).padStart(2, '0'), String(yesterday.getDate())].join('-');
      setStreak(lastLearnDate === todayKey || lastLearnDate === yesterdayKey ? +(stStr || '0') : 0);
    } catch {
      setStreak(0);
    }

    // Load last lesson
    try {
      const llStr = await AsyncStorage.getItem(`hub.p.${targetProfile.id}.lastLesson`);
      if (llStr) {
        const parsed = JSON.parse(llStr);
        if (parsed && typeof parsed === 'object' && parsed.id && parsed.title) {
          setLastLesson(parsed);
        } else {
          setLastLesson(null);
        }
      } else {
        setLastLesson(null);
      }
    } catch {
      setLastLesson(null);
    }

    // Reset current in-memory interactive session picks & hints
    setPicks({});
    setHints({});
    setQuizPicks({});
    setQuizHints({});
    setRevisePicks({});
    setReviseSessionMastered({});
    setQuizGradeFilter(targetProfile.role === 'teacher' ? 'all' : targetProfile.grade);
    setShowProfileModal(false);
    setIsAddingProfile(false);
    setDeletingProfileId(null);
  };

  // ── Add Profile Handler ────────────────────────────────────────────────────
  const handleAddProfile = async () => {
    const cleanNick = newNickname.trim();
    if (!cleanNick) return;
    if (profiles.length >= 4) return;
    if (newRole === 'student' && !guardianConsent) {
      alert(u.consentRequired);
      return;
    }

    const newProfile: LearnerProfile = {
      id: `p_${Date.now()}`,
      nickname: cleanNick.slice(0, 12),
      grade: newRole === 'teacher' ? newGrade : newGrade,
      avatar: newAvatar.icon,
      color: newAvatar.color,
      role: newRole,
      gender: newRole === 'student' ? newGender : undefined,
      guardianConsent: newRole === 'student' ? guardianConsent : false,
    };

    const updated = [...profiles, newProfile];
    try {
      await AsyncStorage.setItem('hub.profiles', JSON.stringify(updated));
    } catch (error) {
      console.error('Unable to save the learner profile.', error);
      alert(u.profileSaveFailed);
      return;
    }
    setProfiles(updated);

    setNewNickname('');
    setNewGrade(5);
    setNewRole('student');
    setNewAvatar(AVATARS[0]);
    setNewGender('prefer-not-to-say');
    setGuardianConsent(false);
    setIsAddingProfile(false);

    await selectProfile(newProfile);
  };

  // ── Delete Profile Handler (With confirmation) ─────────────────────────────
  const confirmDeleteProfile = async (pid: string) => {
    const updated = profiles.filter(p => p.id !== pid);
    setProfiles(updated);
    await AsyncStorage.setItem('hub.profiles', JSON.stringify(updated)).catch(() => {});

    // Clean up namespaced storage
    await AsyncStorage.removeItem(`hub.p.${pid}.prog`).catch(() => {});
    await AsyncStorage.removeItem(`hub.p.${pid}.bm`).catch(() => {});
    await AsyncStorage.removeItem(`hub.p.${pid}.streak`).catch(() => {});
    await AsyncStorage.removeItem(`hub.p.${pid}.lastDate`).catch(() => {});
    await AsyncStorage.removeItem(`hub.p.${pid}.lastLearnDate`).catch(() => {});
    await AsyncStorage.removeItem(`hub.p.${pid}.lastLesson`).catch(() => {});

    setDeletingProfileId(null);

    if (activeProfileId === pid) {
      if (updated.length > 0) {
        await selectProfile(updated[0]);
      } else {
        setActiveProfileId(null);
        await AsyncStorage.removeItem('hub.activeProfileId').catch(() => {});
        setProg({ done: {}, wrong: [] });
        setBookmarks([]);
        setStreak(1);
        setLastLesson(null);
      }
    }
  };

  // ── Persist Storage with Corruption Protection & Migration ────────────────
  useEffect(() => {
    (async () => {
      const DEFAULT_SETTINGS = { lang: 'both', scale: 1, hc: false, easy: false, teacher: false, theme: 'light' };
      const DEFAULT_PROG = { done: {}, wrong: [] };

      // Load app settings
      try {
        const a = await AsyncStorage.getItem('hub.s');
        if (a) {
          const parsed = JSON.parse(a);
          if (parsed && typeof parsed === 'object') {
            const lookVersion = await AsyncStorage.getItem('hub.lookVersion');
            if (lookVersion !== 'leseli-unity-v1' && parsed.theme === 'dark') parsed.theme = 'light';
            await AsyncStorage.setItem('hub.lookVersion', 'leseli-unity-v1');
            setSettings({ ...DEFAULT_SETTINGS, ...parsed });
          } else {
            await AsyncStorage.setItem('hub.lookVersion', 'leseli-unity-v1');
          }
        }
      } catch {
        setSettings(DEFAULT_SETTINGS);
      }

      // Load language choice flag
      try {
        const lc = await AsyncStorage.getItem('hub.langChosen');
        setLangChosen(lc === 'true');
      } catch {
        setLangChosen(false);
      }

      // ── Profile Loading & Legacy Data Migration (Phase 5) ──────────────────
      let loadedProfiles: LearnerProfile[] = [];
      let targetActiveId: string | null = null;

      try {
        const storedProfiles = await AsyncStorage.getItem('hub.profiles');
        if (storedProfiles) {
          const parsed = JSON.parse(storedProfiles);
          if (Array.isArray(parsed) && parsed.length > 0) loadedProfiles = parsed;
        }
      } catch {}

      if (loadedProfiles.length > 0) {
        loadedProfiles = loadedProfiles.map((profile: any) => ({
          ...profile,
          role: profile.role === 'teacher' ? 'teacher' : 'student',
          gender: profile.gender === 'girl' || profile.gender === 'boy' ? profile.gender : 'prefer-not-to-say',
          guardianConsent: profile.guardianConsent === true,
        }));
      }

      if (loadedProfiles.length === 0) {
        // Check for old non-profile legacy data to migrate
        try {
          const oldProg = await AsyncStorage.getItem('hub.p');
          const oldStreak = await AsyncStorage.getItem('hub.streak');
          const oldDate = await AsyncStorage.getItem('hub.lastDate');
          const oldLastLesson = await AsyncStorage.getItem('hub.lastLesson');
          const oldBm = await AsyncStorage.getItem('hub.bm');

          if (oldProg || oldStreak || oldLastLesson || oldBm) {
            // Found legacy data — migrate to "Learner 1"
            const defaultProfile: LearnerProfile = {
              id: 'p_default',
              nickname: 'Learner 1',
              grade: 5,
              avatar: '🌟',
              color: '#38BDF8',
              role: 'student',
            };
            loadedProfiles = [defaultProfile];
            targetActiveId = 'p_default';

            if (oldProg) await AsyncStorage.setItem('hub.p.p_default.prog', oldProg).catch(() => {});
            if (oldStreak) await AsyncStorage.setItem('hub.p.p_default.streak', oldStreak).catch(() => {});
            if (oldDate) await AsyncStorage.setItem('hub.p.p_default.lastDate', oldDate).catch(() => {});
            if (oldLastLesson) await AsyncStorage.setItem('hub.p.p_default.lastLesson', oldLastLesson).catch(() => {});
            if (oldBm) await AsyncStorage.setItem('hub.p.p_default.bm', oldBm).catch(() => {});

            await AsyncStorage.setItem('hub.profiles', JSON.stringify(loadedProfiles)).catch(() => {});
            await AsyncStorage.setItem('hub.activeProfileId', 'p_default').catch(() => {});
          }
        } catch {}
      } else {
        try {
          const storedActiveId = await AsyncStorage.getItem('hub.activeProfileId');
          if (storedActiveId && loadedProfiles.some(p => p.id === storedActiveId)) {
            targetActiveId = storedActiveId;
          } else {
            targetActiveId = loadedProfiles[0].id;
          }
        } catch {
          targetActiveId = loadedProfiles[0].id;
        }
      }

      setProfiles(loadedProfiles);
      setActiveProfileId(targetActiveId);

      // Load progress for active profile
      if (targetActiveId) {
        try {
          const pStr = await AsyncStorage.getItem(`hub.p.${targetActiveId}.prog`);
          if (pStr) {
            const parsed = JSON.parse(pStr);
            if (parsed && typeof parsed === 'object') {
              setProg({
                done: parsed.done && typeof parsed.done === 'object' ? parsed.done : {},
                wrong: Array.isArray(parsed.wrong) ? parsed.wrong : [],
              });
            } else setProg(DEFAULT_PROG);
          } else setProg(DEFAULT_PROG);
        } catch {
          setProg(DEFAULT_PROG);
        }

        try {
          const bmStr = await AsyncStorage.getItem(`hub.p.${targetActiveId}.bm`);
          if (bmStr) {
            const parsed = JSON.parse(bmStr);
            if (Array.isArray(parsed)) setBookmarks(parsed);
            else setBookmarks([]);
          } else setBookmarks([]);
        } catch {
          setBookmarks([]);
        }

        try {
          const stStr = await AsyncStorage.getItem(`hub.p.${targetActiveId}.streak`);
          const lastLearnDate = await AsyncStorage.getItem(`hub.p.${targetActiveId}.lastLearnDate`);
          const now = new Date();
          const todayKey = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayKey = [yesterday.getFullYear(), String(yesterday.getMonth() + 1).padStart(2, '0'), String(yesterday.getDate())].join('-');
          setStreak(lastLearnDate === todayKey || lastLearnDate === yesterdayKey ? +(stStr || '0') : 0);
        } catch {}

        try {
          const llStr = await AsyncStorage.getItem(`hub.p.${targetActiveId}.lastLesson`);
          if (llStr) {
            const parsed = JSON.parse(llStr);
            if (parsed && typeof parsed === 'object' && parsed.id && parsed.title) {
              setLastLesson(parsed);
            }
          }
        } catch {}
      }

      setReady(true);
    })();

    // Check for native Sesotho TTS voice (st, st-ZA, st-LS, sot)
    Speech.getAvailableVoicesAsync().then(voices => {
      const m = voices.find(v => {
        const l = (v.language || '').toLowerCase().replace('_', '-');
        return l === 'st' || l.startsWith('st-') || l === 'sot' || l.includes('sesotho');
      });
      if (m) {
        setStVoice(true);
        setStVoiceId(m.identifier);
      } else {
        setStVoice(false);
        setStVoiceId(undefined);
      }
    }).catch(() => {
      setStVoice(false);
      setStVoiceId(undefined);
    });
  }, []);

  // Save settings when changed
  useEffect(() => { if (ready) AsyncStorage.setItem('hub.s', JSON.stringify(s)).catch(() => {}); }, [s, ready]);

  // Profiles and language persist across app restarts; never return to the
  // legacy welcome deck when an active learner already exists.
  useEffect(() => {
    if (ready && langChosen === true && activeProfileId) {
      setNav(current => (current.length === 1 && current[0].p === 'welcome'
        ? [{ p: 'home' }]
        : current));
    }
  }, [ready, langChosen, activeProfileId]);

  // Save active profile's progress under namespaced key
  useEffect(() => {
    if (ready && activeProfileId) {
      AsyncStorage.setItem(`hub.p.${activeProfileId}.prog`, JSON.stringify(prog)).catch(() => {});
    }
  }, [prog, ready, activeProfileId]);

  // Save active profile's bookmarks under namespaced key
  useEffect(() => {
    if (ready && activeProfileId) {
      AsyncStorage.setItem(`hub.p.${activeProfileId}.bm`, JSON.stringify(bookmarks)).catch(() => {});
    }
  }, [bookmarks, ready, activeProfileId]);

  // Namespaced streak tracking per profile
  useEffect(() => {
    if (!ready || !activeProfileId) return;
    (async () => {
      try {
            const lastLearnDate = await AsyncStorage.getItem(`hub.p.${activeProfileId}.lastLearnDate`);
            const savedStreak = +(await AsyncStorage.getItem(`hub.p.${activeProfileId}.streak`) || '0');
            const today = new Date();
            const todayKey = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayKey = [yesterday.getFullYear(), String(yesterday.getMonth() + 1).padStart(2, '0'), String(yesterday.getDate()).padStart(2, '0')].join('-');
            setStreak(lastLearnDate === todayKey || lastLearnDate === yesterdayKey ? savedStreak : 0);
      } catch {}
    })();
  }, [ready, activeProfileId]);

  const recordLearningDay = async () => {
        if (!activeProfileId) return;
        try {
          const now = new Date();
          const todayKey = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayKey = [yesterday.getFullYear(), String(yesterday.getMonth() + 1).padStart(2, '0'), String(yesterday.getDate()).padStart(2, '0')].join('-');
          const lastLearnDate = await AsyncStorage.getItem(`hub.p.${activeProfileId}.lastLearnDate`);
          const savedStreak = +(await AsyncStorage.getItem(`hub.p.${activeProfileId}.streak`) || '0');
          if (lastLearnDate === todayKey) return;
          const nextStreak = lastLearnDate === yesterdayKey ? savedStreak + 1 : 1;
          await AsyncStorage.setItem(`hub.p.${activeProfileId}.streak`, String(nextStreak));
          await AsyncStorage.setItem(`hub.p.${activeProfileId}.lastLearnDate`, todayKey);
          setStreak(nextStreak);
        } catch (error) {
          console.error('Unable to record the learner activity day.', error);
        }
  };


  const go = (x: any) => {
    Speech.stop(); setSpeaking(false); setStep(0);
    setNav(n => [...n, x]);
  };
  const back = useCallback(() => {
    Speech.stop(); setSpeaking(false);
    if (nav.length > 1) { setNav(n => n.slice(0, -1)); return true; }
    return false;
  }, [nav]);
  useEffect(() => { const h = BackHandler.addEventListener('hardwareBackPress', back); return () => h.remove(); }, [back]);

  // Standard Lesson pick
  const pick = (id: string, i: number, ans: number) => {
    setPicks(p => ({ ...p, [id]: i }));
    void recordAnswerEvent(id, i === ans);
    if (i === ans) void recordLearningDay();
    setProg(p => i === ans
      ? { done: { ...p.done, [id]: 1 }, wrong: p.wrong.filter(w => w !== id) }
      : { ...p, wrong: p.wrong.includes(id) ? p.wrong : [...p.wrong, id] }
    );
  };
  const recordAnswerEvent = async (activityId: string, correct: boolean) => {
    const activity = ACT[activityId];
    if (!activeProfileId || !activity) return;
    try {
      const key = `hub.p.${activeProfileId}.events`;
      const raw = await AsyncStorage.getItem(key);
      const existing = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(existing)) throw new Error('Stored learner events are not a list.');
      const event: LearningEvent = {
        id: `${Date.now()}_${activityId}`,
        type: 'activity_answer',
        timestamp: Date.now(),
        activityId,
        lessonId: activity.lessonId,
        subjectId: activity.subjectId,
        grade: activity.grade,
        correct,
      };
      await AsyncStorage.setItem(key, JSON.stringify([...existing, event].slice(-8000)));
    } catch (error) {
      console.error('Unable to save the learner answer event.', error);
    }
  };
  const hint = (a: any) => setHints(h => {
    const cur = h[a.id] || [];
    const n = a.options.findIndex((_: any, i: number) => i !== a.answer && !cur.includes(i));
    return n < 0 ? h : { ...h, [a.id]: [...cur, n] };
  });

  const totalStars = Object.keys(prog.done).length;
  const totalAvail = ALL_ACTIVITIES.length;
  const pct = Math.min(100, Math.round((totalStars / (totalAvail || 1)) * 100));
  const top = nav[nav.length - 1];

  useEffect(() => {
    let active = true;
    if (top?.p !== 'teacher-student' || !top.id) {
      setTeacherStudentEvents(null);
      return () => { active = false; };
    }

    setTeacherStudentEvents(null);
    AsyncStorage.getItem(`hub.p.${top.id}.events`).then(raw => {
      if (!active) return;
      if (!raw) {
        setTeacherStudentEvents({ profileId: top.id, events: [], status: 'missing' });
        return;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || !parsed.every(event =>
        event && event.type === 'activity_answer' && typeof event.timestamp === 'number' &&
        typeof event.activityId === 'string' && typeof event.lessonId === 'string' &&
        typeof event.subjectId === 'string' && typeof event.grade === 'number' &&
        typeof event.correct === 'boolean'
      )) {
        throw new Error('Stored learner events have an invalid shape.');
      }
      setTeacherStudentEvents({
        profileId: top.id,
        events: parsed,
        status: 'loaded',
      });
    }).catch(error => {
      console.error('Unable to load stored learner events for teacher view.', error);
      if (active) setTeacherStudentEvents({ profileId: top.id, events: [], status: 'error' });
    });

    return () => { active = false; };
  }, [top?.p, top?.id]);

  // Synchronize practice sub-tab when navigating directly to quiz or revise from deep links or home buttons
  useEffect(() => {
    if (top?.tab === 'revise' || top?.p === 'revise') {
      setPracticeSubTab('revise');
    } else if (top?.tab === 'quiz' || top?.p === 'quiz') {
      setPracticeSubTab('quiz');
    } else if (top?.tab === 'drills') {
      setPracticeSubTab('drills');
    }
  }, [top?.p, top?.tab]);

  const scholarLevel = useMemo(() => {
    if (totalStars >= 120) return { title: '👑 Moshoeshoe Scholar', level: 5, rank: 'Tier 5 · National Honors' };
    if (totalStars >= 70)  return { title: '🏆 Boetapele Scholar', level: 4, rank: 'Tier 4 · Top Achiever' };
    if (totalStars >= 30)  return { title: '🌟 Naleli Scholar',    level: 3, rank: 'Tier 3 · Star Pupil' };
    if (totalStars >= 10)  return { title: '📖 Moithuti Scholar',  level: 2, rank: 'Tier 2 · Active Reader' };
    return { title: '🌱 Motheo Scholar', level: 1, rank: 'Tier 1 · Novice Scholar' };
  }, [totalStars]);

  // Determine active dock tab
  const activeDockTab = useMemo(() => {
    const cur = top.p;
    if (cur === 'welcome' || cur === 'home') return 'home';
    if (cur === 'grade' || cur === 'subs' || cur === 'list' || cur === 'lesson') return 'grade';
    if (cur === 'quiz' || cur === 'revise' || cur === 'practice') return 'practice';
    if (cur === 'ai') return 'help';
    if (cur === 'dict' || cur === 'papers') return 'library';
    if (cur === 'set' || cur === 'me') return 'set';
    return 'home';
  }, [top.p]);

  // ── Quiz & Practice state (always computed at top level — React Hooks rules) ──────────
  const quizFilteredPool = useMemo(() => {
    const gradeScope = activeProfile && activeProfile.role === 'student' ? activeProfile.grade : quizGradeFilter;
    return ALL_ACTIVITIES.filter((a: any) => {
      const matchSub = quizFilter === 'all' || a.subjectId === quizFilter;
      const matchGrade = gradeScope === 'all' || a.grade === gradeScope;
      return matchSub && matchGrade;
    });
  }, [activeProfile, quizFilter, quizGradeFilter]);

  const quizItems = useMemo(() => {
    const pool = [...quizFilteredPool];
    if (pool.length === 0) return [];
    let m = pool.length, t: any, i: number;
    let rs = (quizSeed + 1) * 9301 + 49297;
    const nr = () => { rs = (rs * 9301 + 49297) % 233280; return rs / 233280; };
    while (m) { i = Math.floor(nr() * m--); t = pool[m]; pool[m] = pool[i]; pool[i] = t; }
    return pool.slice(0, Math.min(quizLength, pool.length));
  }, [quizFilteredPool, quizSeed, quizLength]);

  // Combine live wrong items with ones mastered during this session
  // so items do NOT vanish from the screen when answered correctly!
  const activeWrongIds = useMemo(() => {
    return Array.from(new Set([...prog.wrong, ...Object.keys(reviseSessionMastered)]));
  }, [prog.wrong, reviseSessionMastered]);

  const wrongList = useMemo(() => {
    return activeWrongIds.map((id: string) => ACT[id]).filter(Boolean);
  }, [activeWrongIds]);

  // ── Shared UI Widgets ──────────────────────────────────────────────────────
  const Chip = ({ label, color = '' }: { label: string; color?: string }) => (
    <View style={[st.chip, { backgroundColor: color ? color + '22' : c.bgElevated, borderColor: color ? color + '55' : c.border }]}>
      <Text style={{ fontSize: fs(10), fontWeight: '900', color: color || c.textSec, letterSpacing: 0.6 }}>{label}</Text>
    </View>
  );

  const SectionHead = ({ title, color }: { title: string; color?: string }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginBottom: 12, gap: 10 }}>
      <View style={{ width: 4, height: 20, borderRadius: 2, backgroundColor: color || c.red }} />
      <Text style={{ fontSize: fs(12), fontWeight: '900', color: c.textSec, letterSpacing: 1.2, textTransform: 'uppercase' }}>
        {title}
      </Text>
    </View>
  );

  // ── Lesson Activity Card ───────────────────────────────────────────────────
  const actWidget = (a: any) => {
    const pk = picks[a.id];
    const hid = hints[a.id] || [];
    const isAnswered = pk !== undefined;
    const isCorrect = pk === a.answer;
    const letters = ['A', 'B', 'C', 'D'];

    return (
      <View key={a.id} style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border, marginBottom: 14, ...shadow(1) }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <View style={[st.chip, { backgroundColor: c.lightBlueSoft, borderColor: c.lightBlueMid + '44' }]}>
            <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.lightBlue, letterSpacing: 0.8 }}>{u.exerciseLabel.toUpperCase()}</Text>
          </View>
          {prog.done[a.id] && <Text style={{ fontSize: fs(11), color: c.gold, fontWeight: '800' }}>⭐ Mastered</Text>}
        </View>

        <Text style={{ fontSize: fs(16), fontWeight: '800', color: c.textPrimary, lineHeight: fs(24), marginBottom: 14 }}>
          {T(a.q)}
        </Text>

        {a.options.map((o: any, i: number) => {
          if (hid.includes(i)) return null;
          const chosen = pk === i;
          const correct = i === a.answer;
          let rowBg = 'transparent';
          let rowBorder = c.border;
          let txtCol = c.textPrimary;
          let lBg = c.lightBlue;

          if (isAnswered) {
            if (chosen && correct) { rowBg = c.greenSoft; rowBorder = c.green; txtCol = c.greenLight; lBg = c.green; }
            else if (chosen && !correct) { rowBg = c.redSoft; rowBorder = c.red; txtCol = c.redLight; lBg = c.red; }
            else if (correct) { rowBg = c.greenSoft; rowBorder = c.green; txtCol = c.greenLight; lBg = c.green; }
            else { rowBg = 'transparent'; rowBorder = c.border; txtCol = c.textMuted; lBg = c.greyDark; }
          }

          return (
            <Pressable
              key={i}
              onPress={() => { if (!isAnswered) pick(a.id, i, a.answer); }}
              disabled={isAnswered}
              style={({ pressed }) => [st.optRow, { backgroundColor: rowBg, borderColor: rowBorder, opacity: pressed ? 0.8 : 1 }]}
            >
              <View style={[st.optLetter, { backgroundColor: lBg }]}>
                <Text style={{ color: '#fff', fontWeight: '900', fontSize: fs(12) }}>{letters[i] || String(i + 1)}</Text>
              </View>
              <Text style={{ flex: 1, fontSize: fs(14), color: txtCol, lineHeight: fs(21), fontWeight: chosen ? '800' : '500' }}>
                {T(o)}
              </Text>
              {chosen && isAnswered && (
                <Text style={{ fontSize: 16, color: isCorrect ? c.greenLight : c.redLight, fontWeight: '900' }}>
                  {isCorrect ? '✓' : '✗'}
                </Text>
              )}
            </Pressable>
          );
        })}

        {isAnswered && (
          <View style={[st.feedback, { backgroundColor: isCorrect ? c.greenSoft : c.redSoft, borderColor: isCorrect ? c.green : c.red }]}>
            <Text style={{ fontSize: fs(14), fontWeight: '800', color: isCorrect ? c.greenLight : c.redLight }}>
              {isCorrect ? '✓ ' + u.ok : '✗ ' + u.no}
            </Text>
            {!isCorrect && (
              <Text style={{ fontSize: fs(13), color: c.greenLight, marginTop: 4, fontWeight: '700' }}>
                ✓ {u.correctAnswer}: {T(a.options[a.answer])}
              </Text>
            )}
          </View>
        )}

        {s.easy && !isAnswered && (
          <Pressable onPress={() => hint(a)} style={st.hintBtn}>
            <Text style={{ fontSize: fs(13), color: c.gold, fontWeight: '800' }}>💡 {u.hint}</Text>
          </Pressable>
        )}
      </View>
    );
  };

  // ── Pages ──────────────────────────────────────────────────────────────────
  let body: any = null;

  // ── WELCOME SCREEN (Fully Scrollable on Web & Mobile, Clamped Height) ───────
  if (top.p === 'welcome') {
    body = (
      <View style={{ width: '100%' }}>
        {/* Neutral Welcome Hero Panel with School Crest and Motto */}
        <View style={[st.welcomeHeroCard, { backgroundColor: c.bgElevated, borderColor: c.border, borderTopWidth: 5, borderTopColor: c.red, padding: 22, ...shadow(2) }]}>
          {/* Top Badges Row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <View style={[st.uniformTagBadge, { backgroundColor: c.red }]}>
              <Text style={{ fontSize: fs(9), fontWeight: '900', color: '#FFFFFF', letterSpacing: 1.2 }}>
                🔴 UNIFORM EDITION · MOSHOESHOE II
              </Text>
            </View>
            <View style={[st.freePill, { backgroundColor: c.lightBlue }]}>
              <Text style={{ fontSize: fs(9), fontWeight: '900', color: '#0B1120' }}>
                ⚡ 0 MB DATA · 100% OFFLINE
              </Text>
            </View>
          </View>

          {/* National Tricolor Stripe */}
          <View style={{ flexDirection: 'row', height: 4, borderRadius: 2, overflow: 'hidden', marginBottom: 16, width: '100%' }}>
            <View style={{ flex: 1, backgroundColor: '#002B7F' }} />
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} />
            <View style={{ flex: 1, backgroundColor: '#009A44' }} />
          </View>

          {/* School Emblem & Title */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <View style={{ width: 54, height: 54, borderRadius: 16, backgroundColor: c.redSoft, borderWidth: 1.5, borderColor: c.red, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 28 }}>🏫</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(22), fontWeight: '900', color: c.textPrimary, letterSpacing: -0.4, lineHeight: fs(28) }}>
                {u.welcomeTitle}
              </Text>
              <Text style={{ fontSize: fs(12), color: c.lightBlue, fontWeight: '800', marginTop: 2 }}>
                {u.welcomeSub}
              </Text>
            </View>
          </View>

          {/* Official Motto Banner */}
          <View style={{ backgroundColor: c.bgCard, borderWidth: 1.5, borderColor: c.borderMid, borderRadius: 14, padding: 14, marginTop: 4 }}>
            <Text style={{ fontSize: fs(10), color: c.gold, fontWeight: '900', letterSpacing: 1, textTransform: 'uppercase' }}>
              🇱🇸 MOKHO KHATHO OA SEKOLO · SCHOOL MOTTO
            </Text>
            <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary, marginTop: 4, fontStyle: 'italic' }}>
              "{SCHOOL_MOTTO.st}"
            </Text>
            <Text style={{ fontSize: fs(12), color: c.greyLight, marginTop: 2 }}>
              {SCHOOL_MOTTO.en}
            </Text>
          </View>
        </View>

        {/* Action Panel */}
        <View style={[st.welcomeContentPanel, { backgroundColor: c.bgCard, borderColor: c.border, ...shadow(2) }]}>
          {/* Key School Metrics Bar */}
          <View style={[st.metricsRow, { borderColor: c.border }]}>
            {[
              { val: '184', lbl: u.statsLessons, col: c.lightBlue },
              { val: '7', lbl: u.statsSubjects, col: c.green },
              { val: '1–7', lbl: u.statsGrades, col: c.red },
              { val: 'M0', lbl: u.statsFree, col: c.gold },
            ].map((stat, i, arr) => (
              <View key={i} style={[st.metricCell, { borderRightWidth: i < arr.length - 1 ? 1 : 0, borderRightColor: c.border }]}>
                <Text style={{ fontSize: fs(20), fontWeight: '900', color: stat.col }}>{stat.val}</Text>
                <Text style={{ fontSize: fs(10), color: c.grey, fontWeight: '800', marginTop: 2 }}>{stat.lbl}</Text>
              </View>
            ))}
          </View>

          {/* Primary Big CTA: Enter Learning Hub */}
          <Pressable
            accessibilityRole="button"
            onPress={() => go({ p: 'home' })}
            style={({ pressed }) => [
              st.primaryCtaBtn,
              {
                backgroundColor: c.red,
                opacity: pressed ? 0.9 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
                ...shadow(3),
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={st.ctaIconCircle}>
                <Text style={{ fontSize: 24 }}>🚀</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(17), fontWeight: '900', color: '#FFFFFF', letterSpacing: -0.2 }}>
                  {u.getStarted}
                </Text>
                <Text style={{ fontSize: fs(11), color: '#FEE2E2', fontWeight: '700', marginTop: 2 }}>
                  Grades 1 – 7 · All 7 Subjects · 100% Offline
                </Text>
              </View>
              <View style={[st.ctaArrowBadge, { backgroundColor: '#FFFFFF' }]}>
                <Text style={{ fontSize: 18, color: c.red, fontWeight: '900' }}>→</Text>
              </View>
            </View>
          </Pressable>

          {/* Secondary Skip Link */}
          <Pressable onPress={() => go({ p: 'grade' })} style={{ alignItems: 'center', marginTop: 14, padding: 8 }}>
            <Text style={{ fontSize: fs(13), color: c.lightBlue, fontWeight: '800' }}>
              {u.skip} →
            </Text>
          </Pressable>
        </View>

        {/* Core Pillars / Values Section (Neutral, no child photos) */}
        <SectionHead title="Core School Pillars · Thuto ke Leseli" color={c.red} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingBottom: 6 }}>
          {[
            { icon: '📚', tag: 'Curriculum', title: '184 Core Lessons', desc: 'Grades 1–7 across all 7 primary subjects' },
            { icon: '⚡', tag: 'Offline Access', title: '0 MB Data Used', desc: 'Fully standalone on home Android devices' },
            { icon: '🇱🇸', tag: 'Dual Language', title: 'Sesotho & English', desc: 'Bilingual navigation & primary curriculum' },
            { icon: '🎯', tag: 'Active Practice', title: 'Self-Paced Quizzes', desc: 'Instant feedback with revision decks' },
          ].map((item, i) => (
            <View key={i} style={[st.photoCard, { backgroundColor: c.bgCard, borderColor: c.border, padding: 14, justifyContent: 'space-between', ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 26 }}>{item.icon}</Text>
                <View style={[st.chip, { backgroundColor: c.lightBlueSoft, borderColor: c.lightBlue }]}>
                  <Text style={{ fontSize: fs(9), fontWeight: '900', color: c.lightBlue }}>{item.tag}</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: fs(14), fontWeight: '900', color: c.textPrimary }}>{item.title}</Text>
                <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 4, lineHeight: fs(15) }}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  // ── HOME DASHBOARD · LESLI INSPIRED ────────────────────────────────────────
  else if (top.p === 'home') {
    const gradeScope = studentGradeScope ?? dashboardGrade ?? 5;
    const DASHBOARD_SUBJECTS = [
      { id: 'maths', icon: '➕', color: '#4F86F7' },
      { id: 'science', icon: '🔬', color: '#27A879' },
      { id: 'english', icon: 'A', color: '#9B6BE1' },
      { id: 'sesotho', icon: 'Aa', color: '#159EC1' },
      { id: 'social', icon: '🌍', color: '#E0A12A' },
      { id: 'creativity', icon: '🎨', color: '#E98B42' },
      { id: 'pss', icon: '♥', color: '#E06A91' },
    ];
    const selectedGradeLessons = (data as any).subjects.reduce((sum: number, sb: any) =>
      sum + sb.lessons.filter((lesson: any) => lesson.grade === gradeScope).length, 0);
    const selectedGradeDone = ALL_ACTIVITIES.filter(a => a.grade === gradeScope && prog.done[a.id]).length;
    const selectedGradeActivityCount = ALL_ACTIVITIES.filter(a => a.grade === gradeScope).length;
    const riddle = ACT['so3_2#2'];
    body = (
      <View style={{ width: '100%' }}>
        <View style={{ backgroundColor: '#315DA8', borderRadius: 20, padding: 18, marginBottom: 14, flexDirection: 'row', alignItems: 'center', ...shadow(1) }}>
          <View style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: '#FFF4C7', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
            <Text style={{ fontSize: 30 }}>🙂</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 21, fontWeight: '900' }}>{L(activeProfile?.nickname ? `Hello, ${activeProfile.nickname}!` : 'Hello!', activeProfile?.nickname ? `Lumela, ${activeProfile.nickname}!` : 'Lumela!')}</Text>
            <Text style={{ color: '#EAF1FF', fontSize: 12, marginTop: 3 }}>{L('Your lessons are ready, even offline.', 'Lithuto tsa hao li teng, leha ho se inthanete.')}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 16 }}>
          <View style={{ flex: 1, backgroundColor: c.bgCard, borderRadius: 14, borderWidth: 1, borderColor: c.border, padding: 12, alignItems: 'center' }}>
            <Text style={{ color: c.gold, fontSize: 18, fontWeight: '900' }}>⭐ {totalStars}</Text>
            <Text style={{ color: c.textMuted, fontSize: 11, marginTop: 2 }}>{L('Stars earned', 'Linaleli')}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: c.bgCard, borderRadius: 14, borderWidth: 1, borderColor: c.border, padding: 12, alignItems: 'center' }}>
            <Text style={{ color: '#E67342', fontSize: 18, fontWeight: '900' }}>🔥 {streak}</Text>
            <Text style={{ color: c.textMuted, fontSize: 11, marginTop: 2 }}>{L('Day streak', 'Matsatsi a latellanang')}</Text>
          </View>
        </View>

        <View style={{ backgroundColor: c.bgCard, borderRadius: 16, borderWidth: 1, borderColor: c.border, padding: 14, marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <Text style={{ color: c.textPrimary, fontSize: 14, fontWeight: '900' }}>{L(`Grade ${gradeScope} learning`, `Lithuto tsa Sehlopha ${gradeScope}`)}</Text>
            <Text style={{ color: c.lightBlue, fontSize: 12, fontWeight: '900' }}>{selectedGradeDone}/{selectedGradeActivityCount} {L('activities', 'mesebetsi')}</Text>
          </View>
          <View style={{ height: 7, backgroundColor: c.border, borderRadius: 4, overflow: 'hidden' }}>
            <View style={{ height: '100%', width: `${selectedGradeActivityCount ? Math.round((selectedGradeDone / selectedGradeActivityCount) * 100) : 0}%`, backgroundColor: c.lightBlue, borderRadius: 4 }} />
          </View>
        </View>

        {!studentGradeScope && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }} contentContainerStyle={{ gap: 8, paddingRight: 10 }}>
            {[1, 2, 3, 4, 5, 6, 7].map(g => (
              <Pressable key={g} onPress={() => setDashboardGrade(g)}
                style={({ pressed }) => ({ minWidth: 88, minHeight: 44, paddingHorizontal: 12, borderRadius: 13, borderWidth: 1.5, borderColor: gradeScope === g ? c.lightBlue : c.border, backgroundColor: gradeScope === g ? c.lightBlue : c.bgCard, alignItems: 'center', justifyContent: 'center', opacity: pressed ? 0.82 : 1 })}>
                <Text style={{ color: gradeScope === g ? '#FFFFFF' : c.textSec, fontWeight: '900' }}>{L(`Grade ${g}`, `Sehlopha ${g}`)}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}

        {lastLesson && (
          <Pressable onPress={() => go({ p: 'lesson', id: lastLesson.id, sub: lastLesson.sub })}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', backgroundColor: c.lightBlueSoft, borderColor: c.lightBlue, borderWidth: 1.5, borderRadius: 16, padding: 14, marginBottom: 16, opacity: pressed ? 0.85 : 1 })}>
            <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: c.lightBlue, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 19, fontWeight: '900' }}>▶</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: c.lightBlue, fontSize: 11, fontWeight: '900' }}>{L('Continue learning', 'Tsoela pele ho ithuta')}</Text>
              <Text numberOfLines={1} style={{ color: c.textPrimary, fontSize: 14, fontWeight: '900', marginTop: 3 }}>{lastLesson.title}</Text>
              <Text style={{ color: c.textMuted, fontSize: 11, marginTop: 2 }}>{L(`Grade ${lastLesson.grade}`, `Sehlopha ${lastLesson.grade}`)}</Text>
            </View>
            <Text style={{ color: c.lightBlue, fontSize: 20, fontWeight: '900' }}>›</Text>
          </Pressable>
        )}

        <Text style={{ fontSize: 20, fontWeight: '900', color: c.textPrimary, marginBottom: 10 }}>{L('Your subjects', 'Lithuto tsa hao')}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between' }}>
          {DASHBOARD_SUBJECTS.map(subject => {
            const sb = (data as any).subjects.find((item: any) => item.id === subject.id);
            const subjectLessons = sb ? sb.lessons.filter((lesson: any) => lesson.grade === gradeScope) : [];
            const lessonCount = subjectLessons.length;
            const subjectDone = subjectLessons.filter((lesson: any) => {
              const lessonActivities = ALL_ACTIVITIES.filter(a => a.lessonId === lesson.id);
              return lessonActivities.length > 0 && lessonActivities.every(a => prog.done[a.id]);
            }).length;
            const progress = lessonCount ? Math.round((subjectDone / lessonCount) * 100) : 0;
            const accurateName = sb ? T(sb.name) : subject.id;
            const cardWidth = Dimensions.get('window').width >= 760 ? '31.7%' : '48.4%';
            return (
              <Pressable key={subject.id} onPress={() => go({ p: 'list', g: gradeScope, sub: subject.id })}
                style={({ pressed }) => ({ width: cardWidth, minHeight: 138, borderRadius: 17, borderWidth: 1, borderColor: c.border, backgroundColor: c.bgCard, padding: 14, justifyContent: 'space-between', opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.98 : 1 }], ...shadow(1) })}>
                <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: subject.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: subject.color, fontSize: subject.icon.length > 1 ? 15 : 21, fontWeight: '900' }}>{subject.icon}</Text>
                </View>
                <View>
                  <Text numberOfLines={2} style={{ color: c.textPrimary, fontSize: 14, fontWeight: '900', lineHeight: 19 }}>{accurateName}</Text>
                  <Text style={{ color: c.textMuted, fontSize: 11, marginTop: 3 }}>{subjectDone}/{lessonCount} {L('lessons', 'lithuto')}</Text>
                  <View style={{ height: 4, backgroundColor: c.border, borderRadius: 3, overflow: 'hidden', marginTop: 8 }}>
                    <View style={{ height: '100%', width: `${progress}%`, backgroundColor: subject.color, borderRadius: 3 }} />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

        {riddle && (
          <View style={{ backgroundColor: c.bgCard, borderRadius: 17, borderWidth: 1, borderColor: c.border, padding: 16, marginTop: 16 }}>
            <Text style={{ color: c.textPrimary, fontSize: 16, fontWeight: '900', marginBottom: 8 }}>🤔 {L('Sesotho riddle', 'Selotho sa Sesotho')}</Text>
            <Text style={{ color: c.textSec, fontSize: 14, lineHeight: 21 }}>{T(riddle.q)}</Text>
            {dailyRiddleRevealed && <Text style={{ color: c.greenLight, fontSize: 14, fontWeight: '900', marginTop: 10 }}>✓ {T(riddle.options[riddle.answer])}</Text>}
            <Pressable onPress={() => setDailyRiddleRevealed(value => !value)} style={{ alignSelf: 'flex-start', marginTop: 10, paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.lightBlueSoft }}>
              <Text style={{ color: c.lightBlue, fontWeight: '900' }}>{dailyRiddleRevealed ? L('Hide answer', 'Pata karabo') : L('Show answer', 'Bontša karabo')}</Text>
            </Pressable>
          </View>
        )}

        <View style={{ backgroundColor: c.goldSoft, borderRadius: 17, borderWidth: 1, borderColor: c.gold + '66', padding: 16, marginTop: 10 }}>
          <Text style={{ color: c.gold, fontSize: 11, fontWeight: '900', textTransform: 'uppercase' }}>💬 {L('Sesotho proverb', 'Maele a Sesotho')}</Text>
          <Text style={{ color: c.textPrimary, fontSize: 17, fontWeight: '900', marginTop: 5 }}>Kopano ke matla.</Text>
          <Text style={{ color: c.textSec, fontSize: 13, marginTop: 3 }}>{L('Unity is strength.', 'Bonngoe ke matla.')}</Text>
        </View>

        <View style={{ marginTop: 18 }}>
          <Text style={{ color: c.textPrimary, fontSize: 19, fontWeight: '900' }}>{L('Our school community', 'Sechaba sa sekolo sa rona')}</Text>
          <Text style={{ color: c.textMuted, fontSize: 12, marginTop: 3, marginBottom: 10 }}>{L('A welcoming place to learn together.', 'Sebaka se amohelang bohle ho ithuta hammoho.')}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingRight: 18, paddingBottom: 8 }}>
            {COMMUNITY_CARDS.map(card => (
              <View
                key={card.key}
                accessible
                accessibilityRole="image"
                accessibilityLabel={L(card.titleEn + '. ' + card.detailEn, card.titleSt + '. ' + card.detailSt)}
                style={{ width: Dimensions.get('window').width >= 760 ? 380 : 330, height: Dimensions.get('window').width >= 760 ? 230 : 210, borderRadius: 18, overflow: 'hidden', backgroundColor: '#1E3A8A', borderWidth: 1, borderColor: c.border, ...shadow(2) }}
              >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1E3A8A' }}>
                  <Text style={{ fontSize: 62 }}>{card.icon}</Text>
                </View>
                <View style={{ position: 'absolute', top: 12, left: 12, backgroundColor: 'rgba(16,30,58,0.78)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
                  <Text style={{ color: '#FFFFFF', fontSize: 9, fontWeight: '900', letterSpacing: 0.7 }}>🇱🇸 MOSHOESHOE II</Text>
                </View>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(13,25,48,0.84)', paddingHorizontal: 14, paddingVertical: 11 }}>
                  <Text numberOfLines={1} style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '900' }}>{L(card.titleEn, card.titleSt)}</Text>
                  <Text numberOfLines={2} style={{ color: '#EAF1FF', fontSize: 11, lineHeight: 15, marginTop: 3 }}>{L(card.detailEn, card.detailSt)}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <Text style={{ fontSize: 18, fontWeight: '900', color: c.textPrimary, marginTop: 18, marginBottom: 10 }}>{L('Practice & resources', 'Boikoetliso le lisebelisoa')}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12, justifyContent: 'space-between' }}>
          {[
            { icon: '🎯', label: L('Math practice', 'Boikoetliso ba lipalo'), page: 'practice', tab: 'quiz', filter: 'maths' },
            { icon: '🔁', label: L('Review missed questions', 'Pheta lipotso tse fosahetseng'), page: 'practice', tab: 'revise' },
            { icon: '📝', label: L('Past exam papers', 'Lipampiri tsa litlhahlobo'), page: 'papers' },
            { icon: '📚', label: L('Dictionary & study guides', 'Bukana le litataiso tsa thuto'), page: 'dict' },
          ].map((tool: any) => (
            <Pressable key={tool.label} onPress={() => { if (tool.tab) setPracticeSubTab(tool.tab); if (tool.filter) setQuizFilter(tool.filter); go({ p: tool.page, tab: tool.tab }); }}
              style={({ pressed }) => ({ width: Dimensions.get('window').width >= 760 ? '48.8%' : '48.4%', minHeight: 82, borderRadius: 16, borderWidth: 1, borderColor: c.border, backgroundColor: c.bgCard, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, gap: 10, opacity: pressed ? 0.82 : 1, ...shadow(1) })}>
              <Text style={{ fontSize: 24 }}>{tool.icon}</Text>
              <Text style={{ flex: 1, color: c.textPrimary, fontSize: 13, fontWeight: '900' }}>{tool.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    );
  }

  // ── LEGACY HOME DASHBOARD (disabled) ──────────────────────────────────────
  else if (top.p === 'home_legacy') {
    const TOOLS = teacherView ? [
      { icon: '👥', label: 'Class Overview', sub: 'Track all learners by grade', color: c.lightBlue, page: 'teacher' },
      { icon: '📊', label: 'Grade Performance', sub: 'See strengths and gaps', color: c.green, page: 'teacher' },
      { icon: '🧑‍🏫', label: 'Students Needing Support', sub: 'Focus coaching on weak areas', color: c.red, page: 'teacher' },
      { icon: '📚', label: 'Teacher Resources', sub: 'Curriculum and teaching notes', color: c.gold, page: 'dict' },
    ] : [
      { icon: '📖', label: u.toolsTitle, sub: '184 Lessons · 7 Subjects', color: c.lightBlue, page: 'grade' },
      { icon: '🎯', label: u.quickQuiz, sub: '5 Random Questions', color: c.red, page: 'practice', tab: 'quiz' },
      { icon: '🔁', label: u.revise, sub: prog.wrong.length + ' questions to revise', color: '#8B5CF6', page: 'practice', tab: 'revise' },
      { icon: '📝', label: u.papersTitle, sub: 'G5 & G7 Exam Practice', color: c.green, page: 'papers' },
      { icon: '📖', label: u.dictTitle, sub: DICTIONARY.length + ' Words (EN/ST)', color: c.gold, page: 'dict' },
      { icon: '📘', label: u.aiTitle, sub: 'Pre-written Study Guides', color: c.lightBlue, page: 'ai' },
    ];

    const teacherOverviewCards = [
      { icon: '👨‍🏫', label: 'Classes', value: '7 grades', color: c.lightBlue },
      { icon: '📈', label: 'Progress', value: `${Math.max(0, pct)}%`, color: c.green },
      { icon: '⚠️', label: 'Support Needed', value: `${Math.max(0, prog.wrong.length)} items`, color: c.red },
      { icon: '✅', label: 'Teaching Ready', value: 'Offline mode', color: c.gold },
    ];

    body = (
      <>
        {/* Neutral Home Hero Card with School Panel & Motto */}
        <View style={[st.homeHeroCard, { backgroundColor: c.bgElevated, borderColor: c.border, borderTopWidth: 4, borderTopColor: c.red, padding: 20, height: 'auto', minHeight: 180, justifyContent: 'space-between', ...shadow(2) }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: c.green }} />
              <Text style={{ fontSize: fs(10), color: c.lightBlue, fontWeight: '900', letterSpacing: 0.8 }}>
                {teacherView ? 'TEACHER PORTAL · SCHOOL HUB' : '100% OFFLINE · REPOSITORY'}
              </Text>
            </View>

            <View style={[st.homeProgressPill, { position: 'relative', top: 0, right: 0, backgroundColor: c.bgCard, borderColor: c.red }]}>
              <Text style={{ fontSize: fs(18), fontWeight: '900', color: c.gold, textAlign: 'center' }}>{pct}%</Text>
              <Text style={{ fontSize: fs(9), color: c.greyLight, fontWeight: '800' }}>{teacherView ? 'School view' : 'Mastered'}</Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={{ fontSize: fs(22), fontWeight: '900', color: c.textPrimary, letterSpacing: -0.4, lineHeight: fs(28) }}>
              {teacherView ? 'Teacher Learning Dashboard' : 'Moshoeshoe II Primary School'}
            </Text>
            <Text style={{ fontSize: fs(12), color: c.greyLight, marginTop: 3 }}>
              {teacherView ? 'Monitor class performance and support learners effectively.' : 'Maseru · Kingdom of Lesotho · Uniform Edition'}
            </Text>
            <View style={{ marginTop: 10, paddingVertical: 6, paddingHorizontal: 12, backgroundColor: c.bgCard, borderRadius: 10, alignSelf: 'flex-start', borderWidth: 1, borderColor: c.borderMid }}>
              <Text style={{ fontSize: fs(11), color: c.gold, fontWeight: '800' }}>
                {teacherView ? 'Teacher support view · all grades available' : `Motto: "${SCHOOL_MOTTO.st}"`}
              </Text>
            </View>
          </View>
        </View>

        {teacherView ? (
          <View style={{ marginTop: 12, marginBottom: 12 }}>
            <SectionHead title="Teacher overview" color={c.lightBlue} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
              {teacherOverviewCards.map((card, idx) => (
                <View key={idx} style={[st.card, { flexBasis: '48%', backgroundColor: c.bgCard, borderColor: c.border, padding: 14, ...shadow(1) }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 38, height: 38, borderRadius: 12, backgroundColor: card.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 18 }}>{card.icon}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: fs(10), color: c.textMuted, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.7 }}>{card.label}</Text>
                      <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary, marginTop: 2 }}>{card.value}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', gap: 10, marginBottom: 12 }}>
            <View style={[st.card, { flex: 1, backgroundColor: c.bgCard, borderColor: c.border, padding: 14, ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: 24 }}>🔥</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: fs(11), color: c.redLight, fontWeight: '900', letterSpacing: 0.6, textTransform: 'uppercase' }}>
                    {streak} Day Streak
                  </Text>
                  <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.textPrimary }}>
                    {u.streakActive}
                  </Text>
                </View>
              </View>
            </View>

            <View style={[st.card, { flex: 1, backgroundColor: c.bgCard, borderColor: c.border, padding: 14, ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: 24 }}>⭐</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: fs(11), color: c.gold, fontWeight: '900', letterSpacing: 0.6, textTransform: 'uppercase' }}>
                    {scholarLevel.rank}
                  </Text>
                  <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.textPrimary }} numberOfLines={1}>
                    {scholarLevel.title}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {!teacherView && lastLesson && (
          <Pressable
            onPress={() => go({ p: 'lesson', id: lastLesson.id, sub: lastLesson.sub })}
            style={({ pressed }) => [
              st.card,
              {
                backgroundColor: c.lightBlueSoft,
                borderColor: c.lightBlue,
                borderWidth: 1.5,
                padding: 14,
                marginBottom: 12,
                opacity: pressed ? 0.88 : 1,
                transform: [{ scale: pressed ? 0.99 : 1 }],
                ...shadow(1),
              },
            ]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: c.lightBlue, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>▶</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 0.6, textTransform: 'uppercase' }}>
                  ⚡ {u.resumeLesson}
                </Text>
                <Text style={{ fontSize: fs(15), fontWeight: '900', color: c.textPrimary, marginTop: 2 }} numberOfLines={1}>
                  {lastLesson.title}
                </Text>
                <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 1 }}>
                  Grade {lastLesson.grade}
                </Text>
              </View>
              <Text style={{ fontSize: 20, color: c.lightBlue, fontWeight: '900' }}>→</Text>
            </View>
          </Pressable>
        )}

        {!teacherView && (
          <View style={[st.card, { borderColor: c.border, ...shadow(1) }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              <Text style={{ fontSize: fs(13), fontWeight: '800', color: c.textPrimary }}>
                ⭐ {u.progressTitle}
              </Text>
              <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.lightBlue }}>
                {totalStars} / {totalAvail} Activities
              </Text>
            </View>
            <View style={{ height: 8, backgroundColor: c.bgInput, borderRadius: 4, overflow: 'hidden' }}>
              <View style={{ width: `${pct}%`, height: '100%', backgroundColor: c.red, borderRadius: 4 }} />
            </View>
          </View>
        )}

        {!teacherView && (
          <Pressable
            onPress={() => go({ p: 'grade' })}
            style={({ pressed }) => [
              st.bigCurriculumBtn,
              {
                backgroundColor: isLight ? '#FFFFFF' : c.bgElevated,
                borderColor: c.lightBlue,
                opacity: pressed ? 0.88 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
                ...shadow(2),
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <View style={[st.chip, { backgroundColor: c.redSoft, borderColor: c.red, marginBottom: 6 }]}>
                <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.redLight }}>FULL SYLLABUS</Text>
              </View>
              <Text style={{ fontSize: fs(19), fontWeight: '900', color: isLight ? c.textPrimary : '#FFFFFF', letterSpacing: -0.3 }}>
                Open Grade Lessons (1 - 7)
              </Text>
              <Text style={{ fontSize: fs(12), color: c.greyLight, marginTop: 4 }}>
                184 Lessons across Maths, Science, Social Studies, Languages & Arts
              </Text>
            </View>
            <Text style={{ fontSize: 44 }}>📚</Text>
          </Pressable>
        )}

        <SectionHead title={teacherView ? 'Teacher tools' : u.toolsTitle} color={c.red} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {TOOLS.map((t, i) => (
            <Pressable
              key={i}
              onPress={() => {
                if ((t as any).tab) setPracticeSubTab((t as any).tab);
                go({ p: t.page, tab: (t as any).tab });
              }}
              style={({ pressed }) => [
                st.toolCardResponsive,
                {
                  backgroundColor: c.bgCard,
                  borderColor: t.color + (isLight ? '66' : '44'),
                  opacity: pressed ? 0.88 : 1,
                  transform: [{ scale: pressed ? 0.98 : 1 }],
                  ...shadow(1),
                },
              ]}
            >
              <View style={[st.toolIconCircle, { backgroundColor: t.color + (isLight ? '18' : '22') }]}>
                <Text style={{ fontSize: 24 }}>{t.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(14), fontWeight: '900', color: isLight ? c.textPrimary : t.color }}>
                  {t.label}
                </Text>
                <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 3 }}>
                  {t.sub}
                </Text>
              </View>
              <Text style={{ fontSize: 18, color: t.color, fontWeight: '900' }}>→</Text>
            </Pressable>
          ))}
        </View>

        {/* School Partnership Card */}
        <SectionHead title="About the School Partnership" color={c.red} />
        <View style={[st.card, { borderColor: c.border, ...shadow(1) }]}>
          <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
            <View style={{ width: 56, height: 56, borderRadius: 16, backgroundColor: c.redSoft, borderWidth: 1.5, borderColor: c.red, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 28 }}>🏫</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(15), fontWeight: '900', color: c.textPrimary }}>Moshoeshoe II Primary School</Text>
              <Text style={{ fontSize: fs(12), color: c.lightBlue, fontWeight: '800', marginTop: 2 }}>Maseru, Kingdom of Lesotho</Text>
              <Text style={{ fontSize: fs(11), color: c.grey, marginTop: 1 }}>ICT4D Project Partnership · DIIC3110</Text>
            </View>
          </View>
          <Text style={{ fontSize: fs(13), color: c.textSec, lineHeight: fs(21), marginTop: 12 }}>
            Due to textbook shortages where learners cannot take books home, this 100% offline mobile app gives pupils, parents, and teachers unlimited access to official curriculum notes on any phone with zero data. Motto: "{SCHOOL_MOTTO.st}" ({SCHOOL_MOTTO.en}).
          </Text>
        </View>
      </>
    );
  }

  // ── TEACHER DASHBOARD ─────────────────────────────────────────────────────
  else if (top.p === 'teacher') {
    const teacherStudents = profiles.filter(p => p.role === 'student');
    const gradeGroups = [1, 2, 3, 4, 5, 6, 7].map(grade => ({
      grade,
      students: teacherStudents.filter(p => p.grade === grade),
    }));

    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.lightBlue, borderTopWidth: 4, ...shadow(2) }]}>
          <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            TEACHER PORTAL
          </Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4, letterSpacing: -0.4 }}>
            Class Overview
          </Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
            Monitor progression, identify learners needing support, and guide teaching effectively.
          </Text>
        </View>

        <SectionHead title="School snapshot" color={c.lightBlue} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {[
            { icon: '👥', label: L('Learner profiles', 'Liprofaele tsa baithuti'), value: `${teacherStudents.length}`, color: c.lightBlue },
            { icon: '📚', label: L('Grades represented', 'Lihlopha tse emetsoeng'), value: `${new Set(teacherStudents.map(profile => profile.grade)).size} / 7`, color: c.green },
            { icon: '📝', label: L('Quiz results', 'Liphetho tsa lipotso'), value: u.noDataYet, color: c.red },
            { icon: '📊', label: L('Pilot measurements', 'Litekanyo tsa teko'), value: u.noDataYet, color: c.gold },
          ].map((card, idx) => (
            <View key={idx} style={[st.card, { flexBasis: '48%', backgroundColor: c.bgCard, borderColor: c.border, padding: 14, ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ width: 38, height: 38, borderRadius: 12, backgroundColor: card.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>{card.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: fs(10), color: c.textMuted, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.7 }}>{card.label}</Text>
                  <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary, marginTop: 2 }}>{card.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <SectionHead title="Learner roster by grade" color={c.red} />
        {gradeGroups.map(group => (
          <View key={group.grade} style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border, marginBottom: 12, ...shadow(1) }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text style={{ fontSize: fs(15), fontWeight: '900', color: c.textPrimary }}>
                Grade {group.grade}
              </Text>
              <View style={[st.chip, { backgroundColor: c.lightBlueSoft, borderColor: c.lightBlue }]}>
                <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.lightBlue }}>{group.students.length} learners</Text>
              </View>
            </View>

            {group.students.length === 0 ? (
              <Text style={{ fontSize: fs(13), color: c.grey, fontStyle: 'italic' }}>
                No student profiles registered for this grade yet.
              </Text>
            ) : (
              <View style={{ gap: 8 }}>
                {group.students.map(student => {
                  return (
                    <Pressable
                      key={student.id}
                      onPress={() => go({ p: 'teacher-student', id: student.id })}
                      style={({ pressed }) => ({
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: c.bgElevated,
                        borderColor: c.border,
                        borderWidth: 1,
                        borderRadius: 12,
                        padding: 10,
                        opacity: pressed ? 0.88 : 1,
                      })}
                    >
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 }}>
                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: student.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                          <Text style={{ fontSize: 20 }}>{student.avatar}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text style={{ fontSize: fs(14), fontWeight: '900', color: c.textPrimary }}>{student.nickname}</Text>
                          <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 2 }}>{L(`Grade ${student.grade}`, `Sehlopha sa ${student.grade}`)}</Text>
                        </View>
                      </View>
                      <View style={{ backgroundColor: c.redSoft, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 }}>
                        <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.redLight }}>View</Text>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        ))}
      </>
    );
  }

  // ── TEACHER STUDENT DRILL-DOWN ─────────────────────────────────────────────
  else if (top.p === 'teacher-student') {
    const selectedStudent = profiles.find(p => p.id === top.id && p.role === 'student') || profiles.find(p => p.role === 'student') || null;
    const storedEvents = teacherStudentEvents?.profileId === selectedStudent?.id ? teacherStudentEvents : null;
    const gradeEvents = storedEvents?.events.filter(event => event.grade === selectedStudent?.grade) || [];
    const hasMeasurements = storedEvents?.status === 'loaded' && gradeEvents.length > 0;
    const correctCount = gradeEvents.filter(event => event.correct).length;
    const incorrectCount = gradeEvents.filter(event => !event.correct).length;
    const completedLessons = new Set(gradeEvents.map(event => event.lessonId)).size;
    const supportAreas: { subject: string; mastered: number; total: number }[] = selectedStudent ? (data as any).subjects
      .filter((subject: any) => ['maths', 'english', 'science'].includes(subject.id))
      .map((subject: any) => {
        const subjectEvents = gradeEvents.filter(event => event.subjectId === subject.id);
        const mastered = subjectEvents.filter(event => event.correct).length;
        return { subject: T(subject.name), mastered, total: subjectEvents.length };
      }) : [];

    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.lightBlue, borderTopWidth: 4, ...shadow(2) }]}>
          <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            LEARNER SUPPORT
          </Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4, letterSpacing: -0.4 }}>
            {selectedStudent ? selectedStudent.nickname : 'Learner report'}
          </Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
            {L(
              `Grade ${selectedStudent ? selectedStudent.grade : '-'} progress saved on this device.`,
              `Sehlopha sa ${selectedStudent ? selectedStudent.grade : '-'}; tsoelopele e bolokiloeng fonong ena.`
            )}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {[
            { icon: '📈', label: L('Correct answers', 'Likarabo tse nepahetseng'), value: hasMeasurements ? `${correctCount} / ${gradeEvents.length}` : storedEvents?.status === 'error' ? u.dataCouldNotLoad : u.noDataYet, color: c.green },
            { icon: '📚', label: L('Lessons attempted', 'Lithuto tse lekiloeng'), value: hasMeasurements ? `${completedLessons}` : storedEvents?.status === 'error' ? u.dataCouldNotLoad : u.noDataYet, color: c.lightBlue },
            { icon: '🔁', label: L('Incorrect answers', 'Likarabo tse fosahetseng'), value: hasMeasurements ? `${incorrectCount}` : storedEvents?.status === 'error' ? u.dataCouldNotLoad : u.noDataYet, color: c.red },
            { icon: '🎓', label: L('Learner grade', 'Sehlopha sa moithuti'), value: selectedStudent ? `${selectedStudent.grade}` : u.noDataYet, color: c.gold },
          ].map((card, idx) => (
            <View key={idx} style={[st.card, { flexBasis: '48%', backgroundColor: c.bgCard, borderColor: c.border, padding: 14, ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ width: 38, height: 38, borderRadius: 12, backgroundColor: card.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 18 }}>{card.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: fs(10), color: c.textMuted, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.7 }}>{card.label}</Text>
                  <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary, marginTop: 2 }}>{card.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <SectionHead title={L('Subject answer accuracy', 'Ho nepahala ha likarabo lithutong')} color={c.red} />
        {supportAreas.map(item => (
          <View key={item.subject} style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border, marginBottom: 12, ...shadow(1) }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Text style={{ fontSize: fs(14), fontWeight: '900', color: c.textPrimary }}>{item.subject}</Text>
              <Text style={{ fontSize: fs(12), fontWeight: '900', color: item.mastered ? c.greenLight : c.textMuted }}>
                {hasMeasurements && item.total ? `${Math.round((item.mastered / item.total) * 100)}%` : storedEvents?.status === 'error' ? u.dataCouldNotLoad : u.noDataYet}
              </Text>
            </View>
            {hasMeasurements && item.total > 0 && (
              <View
                accessibilityRole="progressbar"
                accessibilityLabel={`${item.subject} ${L('correct answers', 'likarabo tse nepahetseng')}`}
                accessibilityValue={{ min: 0, max: item.total, now: item.mastered }}
                style={{ height: 8, backgroundColor: c.bgInput, borderRadius: 4, overflow: 'hidden' }}
              >
                <View style={{ width: `${item.total ? Math.round((item.mastered / item.total) * 100) : 0}%`, height: '100%', backgroundColor: c.green, borderRadius: 4 }} />
              </View>
            )}
          </View>
        ))}

      </>
    );
  }

  // ── GRADE SELECTION ────────────────────────────────────────────────────────
  else if (top.p === 'grade') {
    const GCOLS = [c.lightBlue, '#8B5CF6', c.gold, c.green, c.red, '#06B6D4', c.subCre];
    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgCard, borderColor: c.red, borderTopWidth: 4, ...shadow(2) }]}>
          <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            🇱🇸 MOSHOESHOE II LEARNING HUB
          </Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4, letterSpacing: -0.4 }}>
            {u.pick}
          </Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
            Grades 1 to 7 · Sesotho & English · 100% Offline
          </Text>
        </View>

        <SectionHead title={u.pick} color={c.red} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 6 }}>
          {(studentGradeScope ? [studentGradeScope] : [1, 2, 3, 4, 5, 6, 7]).map(n => {
            const gActs = ALL_ACTIVITIES.filter(a => a.grade === n);
            const gDone = gActs.filter(a => prog.done[a.id]).length;
            const gc = GCOLS[n - 1];
            const gpct = gActs.length > 0 ? Math.round((gDone / gActs.length) * 100) : 0;
            return (
              <Pressable
                key={n}
                onPress={() => go({ p: 'subs', g: n })}
                style={({ pressed }) => [
                  st.gradeCard,
                  { backgroundColor: c.bgCard, borderColor: gc + '44', opacity: pressed ? 0.82 : 1, transform: [{ scale: pressed ? 0.96 : 1 }], ...shadow(1) },
                ]}
              >
                <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: gc + '22', borderWidth: 2, borderColor: gc + '66', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Text style={{ fontSize: fs(24), fontWeight: '900', color: gc }}>{n}</Text>
                </View>
                <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.textPrimary }}>{u.grade} {n}</Text>
                <Text style={{ fontSize: fs(10), color: c.grey, marginTop: 2 }}>{gActs.length} {u.taskWord}</Text>
                <View style={{ width: '100%', height: 4, backgroundColor: c.border, borderRadius: 2, marginTop: 8, overflow: 'hidden' }}>
                  <View style={{ width: `${gpct}%`, height: '100%', backgroundColor: gc, borderRadius: 2 }} />
                </View>
                <Text style={{ fontSize: fs(9), color: gc, fontWeight: '800', marginTop: 4 }}>{gpct}% done</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Quick Revision Tools */}
        <SectionHead title={u.toolsTitle} color={c.lightBlue} />
        {[
          { icon: '🎯', label: u.quickQuiz, sub: '5 random questions across subjects', page: 'practice', tab: 'quiz', col: c.red },
          { icon: '🔁', label: u.revise, sub: prog.wrong.length + ' missed questions waiting', page: 'practice', tab: 'revise', col: '#8B5CF6' },
          { icon: '📝', label: u.papersTitle, sub: 'G5 & G7 Primary Exam Papers', page: 'papers', col: c.green },
        ].map((t, i) => (
          <Pressable
            key={i}
            onPress={() => {
              if ((t as any).tab) setPracticeSubTab((t as any).tab);
              go({ p: t.page, tab: (t as any).tab });
            }}
            style={({ pressed }) => [st.listToolBtn, { backgroundColor: c.bgCard, borderColor: t.col + '33', opacity: pressed ? 0.85 : 1 }]}
          >
            <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: t.col + '22', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 22 }}>{t.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(14), fontWeight: '900', color: t.col }}>{t.label}</Text>
              <Text style={{ fontSize: fs(12), color: c.grey, marginTop: 2 }}>{t.sub}</Text>
            </View>
            <Text style={{ fontSize: 18, color: t.col }}>›</Text>
          </Pressable>
        ))}
      </>
    );
  }

  // ── SUBJECTS ───────────────────────────────────────────────────────────────
  else if (top.p === 'subs') {
    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.border, ...shadow(1) }]}>
          <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
            {u.grade} {top.g}
          </Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4, letterSpacing: -0.4 }}>
            {u.subjectsTitle}
          </Text>
        </View>

        {(data as any).subjects.map((sb: any) => {
          const lCount = sb.lessons.filter((l: any) => l.grade === top.g).length;
          if (!lCount) return null;
          const sActs = ALL_ACTIVITIES.filter(a => a.grade === top.g && a.subjectId === sb.id);
          const sDone = sActs.filter(a => prog.done[a.id]).length;
          const sc = subColor(sb.id, c);
          const spct = sActs.length > 0 ? Math.round((sDone / sActs.length) * 100) : 0;

          return (
            <Pressable
              key={sb.id}
              onPress={() => go({ p: 'list', g: top.g, sub: sb.id })}
              style={({ pressed }) => [
                st.subjectCard,
                { backgroundColor: c.bgCard, borderColor: c.border, borderLeftColor: sc, opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.99 : 1 }], ...shadow(1) },
              ]}
            >
              <View style={{ width: 56, height: 56, borderRadius: 18, backgroundColor: sc + '18', borderWidth: 1.5, borderColor: sc + '44', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 28 }}>{sb.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary, flex: 1, letterSpacing: -0.2 }}>
                    {T(sb.name)}
                  </Text>
                  {sDone > 0 && (
                    <View style={{ backgroundColor: c.goldSoft, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 }}>
                      <Text style={{ fontSize: fs(10), color: c.gold, fontWeight: '900' }}>★ {sDone}</Text>
                    </View>
                  )}
                </View>
                <Text style={{ fontSize: fs(12), color: c.grey, marginTop: 3 }}>
                  {lCount} lessons · Grade {top.g}
                </Text>
                <View style={{ height: 5, backgroundColor: c.border, borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
                  <View style={{ width: `${spct}%`, height: '100%', backgroundColor: sc, borderRadius: 3 }} />
                </View>
              </View>
              <Text style={{ fontSize: 18, color: sc, fontWeight: '900' }}>›</Text>
            </Pressable>
          );
        })}
      </>
    );
  }

  // ── LESSON LIST ────────────────────────────────────────────────────────────
  else if (top.p === 'list') {
    const sb = (data as any).subjects.find((x: any) => x.id === top.sub);
    const sc = subColor(sb.id, c);
    const lsAll = sb.lessons.filter((l: any) => l.grade === top.g);
    const q = searchQuery.trim().toLowerCase();
    const ls = q ? lsAll.filter((l: any) => T(l.title).toLowerCase().includes(q) || T(l.topic).toLowerCase().includes(q)) : lsAll;
    const topics: string[] = Array.from(new Set(ls.map((l: any) => T(l.topic))));

    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: sc + '22', borderColor: sc + '33', borderWidth: 1, ...shadow(1) }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <Text style={{ fontSize: 26 }}>{sb.icon}</Text>
            <View style={[st.chip, { backgroundColor: sc + '22', borderColor: sc + '44' }]}>
              <Text style={{ fontSize: fs(10), fontWeight: '900', color: sc }}>{u.grade} {top.g}</Text>
            </View>
          </View>
          <Text style={{ fontSize: fs(21), fontWeight: '900', color: c.textPrimary, letterSpacing: -0.3 }}>{T(sb.name)}</Text>
          <Text style={{ fontSize: fs(12), color: c.textSec, marginTop: 4 }}>{ls.length} syllabus lessons</Text>
        </View>

        <View style={[st.searchBar, { backgroundColor: c.bgInput, borderColor: c.border }]}>
          <Text style={{ fontSize: 16, color: c.grey }}>🔍</Text>
          <TextInput
            style={{ flex: 1, fontSize: fs(14), color: c.textPrimary, paddingVertical: 4, marginLeft: 8 }}
            placeholder={u.searchPlaceholder}
            placeholderTextColor={c.grey}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <Pressable onPress={() => setSearchQuery('')}>
              <Text style={{ fontSize: fs(13), color: c.textSec, fontWeight: '700', paddingHorizontal: 6 }}>✕</Text>
            </Pressable>
          )}
        </View>

        {ls.length === 0 && (
          <View style={[st.emptyBox, { backgroundColor: c.bgCard, borderColor: c.border }]}><Text style={{ fontSize: fs(15), color: c.textSec }}>{u.none}</Text></View>
        )}

        {topics.map(tp => (
          <View key={tp}>
            <SectionHead title={tp} color={sc} />
            {ls.filter((l: any) => T(l.topic) === tp).map((l: any, li: number) => {
              const ids = l.blocks.map((b: any, i: number) => b.type === 'activity' ? l.id + '#' + i : null).filter(Boolean);
              const done = ids.length > 0 && ids.every((id: string) => prog.done[id]);

              return (
                <Pressable
                  key={l.id}
                  onPress={() => go({ p: 'lesson', id: l.id, sub: sb.id })}
                  style={({ pressed }) => [st.lessonRow, { backgroundColor: c.bgCard, borderColor: done ? sc + '55' : c.border, opacity: pressed ? 0.85 : 1 }]}
                >
                  <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: done ? sc + '22' : c.bgElevated, borderWidth: 1.5, borderColor: done ? sc : c.border, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: fs(11), fontWeight: '900', color: done ? sc : c.grey }}>{done ? '✓' : li + 1}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: fs(14), fontWeight: '800', color: c.textPrimary, letterSpacing: -0.1 }}>{T(l.title)}</Text>
                    {l.topic && <Text style={{ fontSize: fs(11), color: c.grey, marginTop: 2 }}>{T(l.topic)}</Text>}
                  </View>
                  {done ? (
                    <View style={{ backgroundColor: c.goldSoft, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 }}>
                      <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.gold }}>★ {u.masteredWord}</Text>
                    </View>
                  ) : (
                    <Text style={{ fontSize: 14, color: sc, fontWeight: '900' }}>›</Text>
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </>
    );
  }

  // ── LESSON DETAIL ──────────────────────────────────────────────────────────
  else if (top.p === 'lesson') {
    const sb = (data as any).subjects.find((x: any) => x.id === top.sub);
    const l = sb.lessons.find((x: any) => x.id === top.id);
    // Record last visited lesson for resume learning
    if (l && sb && (!lastLesson || lastLesson.id !== l.id)) {
      const lessonObj = { id: l.id, sub: sb.id, title: T(l.title), grade: l.grade };
      if (activeProfileId) {
        AsyncStorage.setItem(`hub.p.${activeProfileId}.lastLesson`, JSON.stringify(lessonObj)).catch(() => {});
      }
    }
    const sc = subColor(sb.id, c);
    const texts = l.blocks.filter((b: any) => b.type === 'text');
    const steps2: string[] = texts.flatMap((b: any) => sentences(T(b.text)));
    const last = !s.easy || step >= steps2.length - 1;
    const lActs = l.blocks.filter((b: any) => b.type === 'activity');
    const allDone = lActs.length > 0 && lActs.every((_: any, i: number) => prog.done[l.id + '#' + i]);
    const bmked = bookmarks.includes(l.id);

    const toggleSpeech = () => {
      if (speaking) { Speech.stop(); setSpeaking(false); }
      else {
        if (s.lang === 'st' && !stVoice) return;
        Speech.stop(); setSpeaking(true);
        Speech.speak(TSpeech(l.title) + '. ' + texts.map((b: any) => TSpeech(b.text)).join(' '), {
          language: s.lang === 'en' ? 'en-GB' : 'st-ZA',
          rate: s.lang === 'st' ? 0.80 : 0.85,
          voice: s.lang === 'st' && stVoiceId ? stVoiceId : undefined,
          onDone: () => setSpeaking(false),
          onStopped: () => setSpeaking(false),
          onError: () => setSpeaking(false),
        });
      }
    };

    body = (
      <>
        <View style={[st.lessonHeader, { backgroundColor: c.bgCard, borderColor: c.border, borderLeftColor: sc, borderLeftWidth: 5, ...shadow(1) }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={[st.chip, { backgroundColor: sc + '22', borderColor: sc + '44' }]}>
                <Text style={{ fontSize: fs(10), fontWeight: '900', color: sc }}>{sb.icon} {T(sb.name)}</Text>
              </View>
              <View style={st.chip}>
                <Text style={{ fontSize: fs(10), fontWeight: '800', color: c.textSec }}>{u.grade} {l.grade}</Text>
              </View>
            </View>
            <Pressable
              onPress={() => setBookmarks(prev => prev.includes(l.id) ? prev.filter(x => x !== l.id) : [...prev, l.id])}
              style={[st.chip, { backgroundColor: bmked ? c.goldSoft : c.bgElevated, borderColor: bmked ? c.gold : c.border }]}
            >
              <Text style={{ fontSize: fs(11), fontWeight: '800', color: bmked ? c.gold : c.textSec }}>
                {bmked ? '★ Saved' : '☆ Save'}
              </Text>
            </Pressable>
          </View>
          <Text style={{ fontSize: fs(21), fontWeight: '900', color: c.textPrimary, lineHeight: fs(28), letterSpacing: -0.4, marginBottom: 6 }}>
            {T(l.title)}
          </Text>
          {l.topic && <Text style={{ fontSize: fs(13), color: sc, fontWeight: '800' }}>📚 {T(l.topic)}</Text>}
          {l.outcome && (
            <View style={{ backgroundColor: c.bgInput, borderRadius: 10, padding: 12, marginTop: 10, borderLeftWidth: 3, borderLeftColor: sc }}>
              <Text style={{ fontSize: fs(10), fontWeight: '900', color: c.grey, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
                🎯 {u.outcome}
              </Text>
              <Text style={{ fontSize: fs(13), color: c.textSec, lineHeight: fs(19) }}>{T(l.outcome)}</Text>
            </View>
          )}
        </View>

        {teacherView && (
          <View style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border, ...shadow(1) }]}>
            {!l.reviewed && <View style={st.warningTag}><Text style={{ fontSize: fs(12), color: '#FCD34D', fontWeight: '700' }}>⚠️ {u.draft}</Text></View>}
            {l.syllabusRef && <Text style={{ fontSize: fs(13), color: c.textSec, marginBottom: 4 }}>{u.ref}: {T(l.syllabusRef)}</Text>}
            <Text style={{ fontSize: fs(13), color: c.textSec }}>{u.source}: {T(l.source)}</Text>
          </View>
        )}

        {!(s.lang === 'st' && !stVoice) && (
          <Pressable
            onPress={toggleSpeech}
            style={[st.readBtn, { backgroundColor: speaking ? sc : c.bgElevated, borderColor: speaking ? sc : c.border }]}
          >
            <Text style={{ fontSize: fs(14), fontWeight: '800', color: speaking ? '#fff' : sc }}>
              {speaking ? '⏹  ' + u.stopRead : '🔊  ' + u.read}
            </Text>
          </Pressable>
        )}

        {s.easy ? (
          <View style={[st.card, { ...shadow(1) }]}>
            <Text style={{ fontSize: fs(17), color: c.textSec, lineHeight: fs(28), marginBottom: 14 }}>{steps2[step]}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              {step > 0 && (
                <Pressable onPress={() => setStep(step - 1)} style={st.navBtn}><Text style={{ color: c.lightBlue, fontWeight: '800' }}>← {u.prev}</Text></Pressable>
              )}
              {step < steps2.length - 1 && (
                <Pressable onPress={() => setStep(step + 1)} style={[st.navBtn, { backgroundColor: c.red }]}><Text style={{ color: '#fff', fontWeight: '800' }}>{u.next} →</Text></Pressable>
              )}
            </View>
            <Text style={{ textAlign: 'center', color: c.grey, fontSize: fs(12), marginTop: 8 }}>{step + 1} / {steps2.length}</Text>
          </View>
        ) : (
          <View style={[st.textCard, { backgroundColor: c.bgCard, borderColor: c.border, ...shadow(1) }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: c.border }}>
              <Text style={{ fontSize: 14, color: c.grey }}>📖</Text>
              <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.grey, textTransform: 'uppercase', letterSpacing: 1 }}>{u.syllabusNotesLabel}</Text>
            </View>
            {texts.map((b: any, i: number) => (
              <Text key={i} style={{ fontSize: fs(16), color: c.textSec, lineHeight: fs(25), marginBottom: i < texts.length - 1 ? 16 : 0 }}>
                {T(b.text)}
              </Text>
            ))}
          </View>
        )}

        {last && l.blocks.map((b: any, i: number) =>
          b.type === 'activity' ? actWidget(ACT[l.id + '#' + i])
          : b.type === 'tip' && s.teacher ? (
            <View key={'t' + i} style={[st.card, { ...shadow(1) }]}>
              <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.gold, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>💡 {u.tip}</Text>
              <Text style={{ fontSize: fs(14), color: c.textSec, lineHeight: fs(21) }}>{T(b.text)}</Text>
            </View>
          ) : null
        )}

        {allDone && (
          <View style={{ backgroundColor: c.greenSoft, borderColor: c.green, borderWidth: 1.5, borderRadius: 16, padding: 18, marginTop: 8, alignItems: 'center' }}>
            <Text style={{ fontSize: 26, marginBottom: 6 }}>🎉 ⭐ 🇱🇸</Text>
            <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.greenLight, textAlign: 'center' }}>{u.congratsTitle}</Text>
            <Text style={{ fontSize: fs(13), color: c.greenLight, textAlign: 'center', marginTop: 4 }}>{u.congratsBody}</Text>
          </View>
        )}
      </>
    );
  }

  // ── UNIFIED PRACTICE & REVISION HUB (10/10 Interactive Learning) ────────────
  else if (top.p === 'practice' || top.p === 'quiz' || top.p === 'revise') {
    const activeTab: 'quiz' | 'revise' | 'drills' = practiceSubTab;

    // quizItems, quizFilteredPool, wrongList are computed at top level (React Hooks compliant)
    const answeredCount = quizItems.filter((q: any) => quizPicks[q.id] !== undefined).length;
    const correctCount  = quizItems.filter((q: any) => quizPicks[q.id] === q.answer).length;
    const missedCount   = quizItems.filter((q: any) => quizPicks[q.id] !== undefined && quizPicks[q.id] !== q.answer).length;
    const isComplete    = answeredCount === quizItems.length && quizItems.length > 0;
    const scorePercent  = quizItems.length > 0 ? Math.round((correctCount / quizItems.length) * 100) : 0;
    const stars         = correctCount >= 5 ? 5 : correctCount >= 4 ? 4 : correctCount >= 3 ? 3 : correctCount >= 2 ? 2 : correctCount >= 1 ? 1 : 0;

    const resetQuiz = () => {
      setQuizPicks({});
      setQuizHints({});
      setQuizSeed((p: number) => p + 1);
    };

    const letters = ['A', 'B', 'C', 'D'];
    const GRADES = [1, 2, 3, 4, 5, 6, 7];

    const GRADE_META: Record<number, { title: string; sub: string; count: number; color: string }> = {
      1: { title: 'Grade 1 · Foundation', sub: 'Counting, Phonics, Shapes & Lesotho Stories', count: 24, color: '#38BDF8' },
      2: { title: 'Grade 2 · Early Reader', sub: 'Addition, Sesotho Vocabulary & Five Senses', count: 26, color: '#10B981' },
      3: { title: 'Grade 3 · Elementary', sub: 'Multiplication, Plant Life & Local Community', count: 24, color: '#F59E0B' },
      4: { title: 'Grade 4 · Intermediate', sub: 'Fractions, Weather Patterns & Lesotho Geography', count: 26, color: '#EC4899' },
      5: { title: 'Grade 5 · Standard 5', sub: 'Decimals, Energy Sources & Human Body Systems', count: 28, color: '#8B5CF6' },
      6: { title: 'Grade 6 · Senior Primary', sub: 'Percentages, Ecosystems & Lesotho Heritage', count: 26, color: '#06B6D4' },
      7: { title: 'Grade 7 · PSLE Final Prep', sub: 'National Exam Mastery, Advanced Math & Civics', count: 30, color: '#DC2626' },
    };

    // ── 3-Tab Segmented Switcher ─────────────────────────────────────────────
    const TabSwitcher = () => (
      <View style={{ flexDirection: 'row', backgroundColor: c.bgElevated, borderRadius: 14, padding: 4, marginBottom: 18, borderWidth: 1.5, borderColor: c.border }}>
        {([
          { key: 'quiz',   icon: '🎯', label: 'Quick Quiz' },
          { key: 'revise', icon: '🔁', label: `Missed (${prog.wrong.length})` },
          { key: 'drills', icon: '⚡', label: 'Grade Drills' },
        ] as const).map(tab => {
          const isActive = activeTab === tab.key;
          let activeBg = c.red;
          if (tab.key === 'revise') activeBg = '#7C3AED';
          if (tab.key === 'drills') activeBg = c.lightBlueMid;
          return (
            <Pressable
              key={tab.key}
              onPress={() => setPracticeSubTab(tab.key)}
              style={{
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 6,
                borderRadius: 11,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 6,
                backgroundColor: isActive ? activeBg : 'transparent',
              }}
            >
              <Text style={{ fontSize: 14 }}>{tab.icon}</Text>
              <Text style={{ fontSize: fs(12), fontWeight: '900', color: isActive ? '#FFFFFF' : c.textSec }}>
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );

    // ── TAB 1: QUICK PRACTICE QUIZ ───────────────────────────────────────────
    if (activeTab === 'quiz') {
      const displayGradeFilter = studentGradeScope ?? quizGradeFilter;
      body = (
        <>
          {/* Page Banner with Uniform Red Accent */}
          <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.red, borderTopWidth: 4, ...shadow(2) }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
                  PRACTICE HUB · {displayGradeFilter === 'all' ? 'ALL GRADES' : `GRADE ${displayGradeFilter}`} · {quizFilter === 'all' ? 'ALL SUBJECTS' : quizFilter.toUpperCase()}
                </Text>
                <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4 }}>
                  🎯 {u.quickQuiz}
                </Text>
                <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
                  {u.quickQuizDesc}
                </Text>
              </View>
              <Pressable
                onPress={resetQuiz}
                style={{ backgroundColor: c.red, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 6 }}
              >
                <Text style={{ fontSize: fs(12), fontWeight: '900', color: '#FFFFFF' }}>🔀 New Set</Text>
              </Pressable>
            </View>

            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <Chip label="100% Offline" color={c.green} />
              <Chip label={`${quizFilteredPool.length} in Pool`} color={c.lightBlue} />
              <Chip label={quizLength === 5 ? '5-Question Set' : '10-Question Set'} color={c.gold} />
            </View>
          </View>

          <TabSwitcher />

          {/* Grade Filter Bar */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.textSec, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
              {u.filterByGradeLabel}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 2 }}>
              {!studentGradeScope && (
                <Pressable
                  onPress={() => { setQuizGradeFilter('all'); setQuizPicks({}); setQuizHints({}); }}
                  style={[st.filterPill, {
                    backgroundColor: quizGradeFilter === 'all' ? c.red : c.bgElevated,
                    borderColor: quizGradeFilter === 'all' ? c.red : c.border,
                  }]}
                >
                  <Text style={{ fontSize: fs(12), fontWeight: '900', color: quizGradeFilter === 'all' ? '#FFFFFF' : c.textSec }}>
                    🌟 All Grades
                  </Text>
                </Pressable>
              )}
              {(studentGradeScope ? [studentGradeScope] : GRADES).map(g => {
                const active = quizGradeFilter === g || (studentGradeScope === g);
                return (
                  <Pressable
                    key={g}
                    onPress={() => { if (!studentGradeScope) { setQuizGradeFilter(g); } setQuizPicks({}); setQuizHints({}); }}
                    style={[st.filterPill, {
                      backgroundColor: active ? c.red : c.bgElevated,
                      borderColor: active ? c.red : c.border,
                    }]}
                  >
                    <Text style={{ fontSize: fs(12), fontWeight: '900', color: active ? '#FFFFFF' : c.textSec }}>
                      Grade {g}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Subject Filter Bar */}
          <View style={{ marginBottom: 14 }}>
            <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.textSec, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
              {u.filterBySubjectLabel}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 2 }}>
              {[{ id: 'all', icon: '🌟', name: u.filterAll }, ...(data as any).subjects].map((sb: any) => {
                const active = quizFilter === (sb.id || 'all');
                const sc = sb.id ? subColor(sb.id, c) : c.lightBlue;
                return (
                  <Pressable
                    key={sb.id || 'all'}
                    onPress={() => { setQuizFilter(sb.id || 'all'); setQuizPicks({}); setQuizHints({}); }}
                    style={[st.filterPill, {
                      backgroundColor: active ? sc : c.bgElevated,
                      borderColor: active ? sc : c.border,
                    }]}
                  >
                    <Text style={{ fontSize: fs(12), fontWeight: '900', color: active ? '#0B1120' : c.textSec }}>
                      {sb.icon || '🌟'} {T(sb.name) || u.filterAll}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>

          {/* Controls & Question Count Bar */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              {[5, 10].map(len => (
                <Pressable
                  key={len}
                  onPress={() => { setQuizLength(len); setQuizPicks({}); setQuizHints({}); }}
                  style={[st.chip, {
                    backgroundColor: quizLength === len ? c.lightBlueMid : c.bgElevated,
                    borderColor: quizLength === len ? c.lightBlue : c.border,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                  }]}
                >
                  <Text style={{ fontSize: fs(11), fontWeight: '900', color: quizLength === len ? '#FFFFFF' : c.textSec }}>
                    {len} Questions
                  </Text>
                </Pressable>
              ))}
            </View>
            <Text style={{ fontSize: fs(11), fontWeight: '700', color: c.greyLight }}>
              {quizFilteredPool.length} {u.questionsAvailable}
            </Text>
          </View>

          {/* Live Progress Card */}
          <View style={[st.card, { borderColor: c.border, marginBottom: 16, ...shadow(1) }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Text style={{ fontSize: fs(12), fontWeight: '900', color: c.textSec, textTransform: 'uppercase', letterSpacing: 0.6 }}>
                {u.quizProgress}
              </Text>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <View style={{ backgroundColor: c.greenSoft, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: c.green }}>
                  <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.greenLight }}>✓ {correctCount} Correct</Text>
                </View>
                {missedCount > 0 && (
                  <View style={{ backgroundColor: c.redSoft, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 3, borderWidth: 1, borderColor: c.red }}>
                    <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.redLight }}>✗ {missedCount} Missed</Text>
                  </View>
                )}
                <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.textPrimary }}>{answeredCount} / {quizItems.length}</Text>
              </View>
            </View>
            <View style={{ height: 8, backgroundColor: c.bgInput, borderRadius: 4, overflow: 'hidden' }}>
              <View style={{
                width: `${quizItems.length > 0 ? (answeredCount / quizItems.length) * 100 : 0}%`,
                height: '100%',
                backgroundColor: isComplete ? (correctCount === quizItems.length ? c.green : c.lightBlue) : c.lightBlue,
                borderRadius: 4,
              }} />
            </View>
          </View>

          {/* Results Summary Card (Shown when all questions answered) */}
          {isComplete && (
            <View style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 20, borderWidth: 2, borderColor: scorePercent === 100 ? c.green : scorePercent >= 60 ? c.lightBlue : c.red, ...shadow(3) }}>
              <View style={{ backgroundColor: scorePercent === 100 ? c.green : scorePercent >= 60 ? c.lightBlueMid : c.red, padding: 24, alignItems: 'center' }}>
                <Text style={{ fontSize: 36, marginBottom: 4 }}>
                  {scorePercent === 100 ? '🏆' : scorePercent >= 60 ? '⭐' : '📚'}
                </Text>
                <Text style={{ fontSize: fs(42), fontWeight: '900', color: '#FFFFFF' }}>{scorePercent}%</Text>
                <Text style={{ fontSize: fs(17), fontWeight: '900', color: 'rgba(255,255,255,0.95)', marginTop: 4 }}>
                  {scorePercent === 100 ? 'Perfect Score! 5/5 ⭐⭐⭐⭐⭐' : scorePercent >= 80 ? 'Outstanding Work! 🇱🇸' : scorePercent >= 60 ? 'Well Done! Solid Mastery' : 'Good Effort! Keep Practicing'}
                </Text>
                <Text style={{ fontSize: fs(13), color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
                  {correctCount} correct out of {quizItems.length} questions · +{correctCount} Stars earned
                </Text>
              </View>

              <View style={{ backgroundColor: c.bgElevated, padding: 18 }}>
                <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.textSec, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>
                  Question Breakdown & Answers
                </Text>
                {quizItems.map((a: any, qi: number) => {
                  const userPick = quizPicks[a.id];
                  const correct  = userPick === a.answer;
                  return (
                    <View key={a.id} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 10, paddingBottom: 10, borderBottomWidth: qi < quizItems.length - 1 ? 1 : 0, borderBottomColor: c.border }}>
                      <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: correct ? c.green : c.red, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: '900' }}>{correct ? '✓' : '✗'}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: fs(13), fontWeight: '700', color: c.textPrimary, lineHeight: fs(19) }}>{T(a.q)}</Text>
                        <Text style={{ fontSize: fs(11), color: c.greenLight, fontWeight: '800', marginTop: 3 }}>✓ {T(a.options[a.answer])}</Text>
                        {!correct && userPick !== undefined && (
                          <Text style={{ fontSize: fs(11), color: c.redLight, fontWeight: '700' }}>✗ {u.yourPick} {T(a.options[userPick])}</Text>
                        )}
                      </View>
                    </View>
                  );
                })}

                <View style={{ flexDirection: 'row', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                  <Pressable
                    onPress={resetQuiz}
                    style={{ flex: 1, minWidth: 140, backgroundColor: c.red, borderRadius: 14, paddingVertical: 13, alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: fs(13), fontWeight: '900', color: '#FFFFFF' }}>🔄 Try Another Set</Text>
                  </Pressable>
                  {missedCount > 0 && (
                    <Pressable
                      onPress={() => setPracticeSubTab('revise')}
                      style={{ flex: 1, minWidth: 140, backgroundColor: '#7C3AED', borderRadius: 14, paddingVertical: 13, alignItems: 'center' }}
                    >
                      <Text style={{ fontSize: fs(13), fontWeight: '900', color: '#FFFFFF' }}>🔁 Revise Missed ({missedCount})</Text>
                    </Pressable>
                  )}
                  <Pressable
                    onPress={() => setPracticeSubTab('drills')}
                    style={{ flex: 1, minWidth: 140, backgroundColor: c.bgInput, borderColor: c.border, borderWidth: 1.5, borderRadius: 14, paddingVertical: 13, alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.textPrimary }}>⚡ Grade Drills</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}

          {/* Question Cards */}
          {quizItems.length === 0 ? (
            <View style={[st.emptyBox, { backgroundColor: c.bgElevated, borderColor: c.border }]}>
              <Text style={{ fontSize: 32, marginBottom: 8 }}>🔍</Text>
              <Text style={{ fontSize: fs(16), fontWeight: '800', color: c.textPrimary, textAlign: 'center' }}>
                {u.noMatchFilter}
              </Text>
              <Text style={{ fontSize: fs(14), color: c.greyLight, textAlign: 'center', marginTop: 4 }}>
                {u.noMatchFilterHint}
              </Text>
              <Pressable
                onPress={() => { setQuizGradeFilter(studentGradeScope ?? 'all'); setQuizFilter('all'); resetQuiz(); }}
                style={{ backgroundColor: c.red, borderRadius: 12, minHeight: 48, paddingVertical: 10, paddingHorizontal: 18, marginTop: 14, justifyContent: 'center', alignItems: 'center' }}
              >
                <Text style={{ color: '#FFFFFF', fontWeight: '900', fontSize: fs(14) }}>{u.resetFilters}</Text>
              </Pressable>
            </View>
          ) : (
            quizItems.map((a: any, qi: number) => {
              const pk         = quizPicks[a.id];
              const hid        = quizHints[a.id] || [];
              const isAnswered = pk !== undefined;
              const isCorrect  = pk === a.answer;
              const foundSb    = (data as any).subjects.find((x: any) => x.id === a.subjectId);
              const sc         = foundSb ? subColor(foundSb.id, c) : c.lightBlue;

              return (
                <View
                  key={a.id}
                  style={[st.card, {
                    marginBottom: 16,
                    borderColor: isAnswered ? (isCorrect ? c.green : c.red) : c.border,
                    ...shadow(isAnswered ? 2 : 1),
                  }]}
                >
                  {/* Card Header */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <View style={[st.chip, { backgroundColor: sc + '22', borderColor: sc + '44' }]}>
                        <Text style={{ fontSize: fs(10), fontWeight: '900', color: sc }}>
                          Q{qi + 1} of {quizItems.length} · {foundSb?.icon} Gr.{a.grade}
                        </Text>
                      </View>
                      {!(s.lang === 'st' && !stVoice) && (
                        <Pressable
                          onPress={() => {
                            Speech.stop();
                            Speech.speak(TSpeech(a.q), {
                              language: s.lang === 'st' ? 'st-ZA' : 'en-GB',
                              voice: s.lang === 'st' && stVoiceId ? stVoiceId : undefined,
                              rate: 0.85,
                            });
                          }}
                          style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: sc + '18', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Text style={{ fontSize: 18 }}>🔊</Text>
                        </Pressable>
                      )}
                    </View>

                    {isAnswered && (
                      <View style={{ backgroundColor: isCorrect ? c.greenSoft : c.redSoft, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1, borderColor: isCorrect ? c.green : c.red }}>
                        <Text style={{ fontSize: fs(11), fontWeight: '900', color: isCorrect ? c.greenLight : c.redLight }}>
                          {isCorrect ? '✓ Correct (+1 ⭐)' : '✗ Missed (Saved)'}
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text style={{ fontSize: fs(16), fontWeight: '800', color: c.textPrimary, lineHeight: fs(25), marginBottom: 14 }}>
                    {T(a.q)}
                  </Text>

                  {/* Options */}
                  {a.options.map((opt: any, oi: number) => {
                    const isEliminated = hid.includes(oi);
                    const chosen  = pk === oi;
                    const correct = oi === a.answer;
                    let rowBg = 'transparent', rowBorder = c.border, txtCol = c.textPrimary, lBg = c.lightBlue;

                    if (isEliminated) {
                      rowBg = 'rgba(0,0,0,0.05)';
                      rowBorder = c.border;
                      txtCol = c.grey;
                      lBg = c.greyDark;
                    } else if (isAnswered) {
                      if (chosen && correct)   { rowBg = c.greenSoft; rowBorder = c.green;  txtCol = c.greenLight; lBg = c.green; }
                      else if (chosen && !correct) { rowBg = c.redSoft; rowBorder = c.red; txtCol = c.redLight; lBg = c.red; }
                      else if (correct)         { rowBg = c.greenSoft; rowBorder = c.green;  txtCol = c.greenLight; lBg = c.green; }
                      else                      { rowBg = 'transparent'; rowBorder = c.border; txtCol = c.grey; lBg = c.greyDark; }
                    }

                    return (
                      <Pressable
                        key={oi}
                        onPress={() => {
                          if (isAnswered || isEliminated) return;
                          setQuizPicks((prev: Record<string, number>) => ({ ...prev, [a.id]: oi }));
                          void recordAnswerEvent(a.id, oi === a.answer);
                          if (oi === a.answer) void recordLearningDay();
                          if (oi === a.answer) {
                            setProg((p: any) => ({ done: { ...p.done, [a.id]: 1 }, wrong: p.wrong.filter((w: string) => w !== a.id) }));
                          } else {
                            setProg((p: any) => ({ ...p, wrong: p.wrong.includes(a.id) ? p.wrong : [...p.wrong, a.id] }));
                          }
                        }}
                        disabled={isAnswered || isEliminated}
                        style={({ pressed }) => [st.optRow, { backgroundColor: rowBg, borderColor: rowBorder, opacity: isEliminated ? 0.45 : pressed ? 0.8 : 1 }]}
                      >
                        <View style={[st.optLetter, { backgroundColor: lBg }]}>
                          <Text style={{ color: '#fff', fontWeight: '900', fontSize: fs(12) }}>{letters[oi]}</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: fs(14), color: txtCol, lineHeight: fs(21), fontWeight: chosen ? '800' : '500', textDecorationLine: isEliminated ? 'line-through' : 'none' }}>
                          {T(opt)} {isEliminated ? '(Eliminated)' : ''}
                        </Text>
                        {chosen && isAnswered && (
                          <Text style={{ fontSize: 18, color: isCorrect ? c.greenLight : c.redLight, fontWeight: '900' }}>
                            {isCorrect ? '✓' : '✗'}
                          </Text>
                        )}
                      </Pressable>
                    );
                  })}

                  {/* Feedback Banner */}
                  {isAnswered && (
                    <View style={[st.feedback, { backgroundColor: isCorrect ? c.greenSoft : c.redSoft, borderColor: isCorrect ? c.green : c.red, marginTop: 12 }]}>
                      <Text style={{ fontSize: fs(13), fontWeight: '800', color: isCorrect ? c.greenLight : c.redLight }}>
                        {isCorrect ? '✓ ' + u.ok : '✗ ' + u.correctAnswer + ': ' + T(a.options[a.answer])}
                      </Text>
                      {!isCorrect && (
                        <Text style={{ fontSize: fs(11), color: c.greyLight, marginTop: 4 }}>
                          {u.questionSavedToDeck}
                        </Text>
                      )}
                    </View>
                  )}

                  {/* Hint Button */}
                  {!isAnswered && (
                    <Pressable
                      onPress={() => setQuizHints((h: Record<string, number[]>) => {
                        const cur = h[a.id] || [];
                        const n = a.options.findIndex((_: any, i: number) => i !== a.answer && !cur.includes(i));
                        return n < 0 ? h : { ...h, [a.id]: [...cur, n] };
                      })}
                      style={[st.hintBtn]}
                    >
                      <Text style={{ fontSize: fs(14), color: c.gold, fontWeight: '800' }}>💡 {u.hintButtonLabel}</Text>
                    </Pressable>
                  )}
                </View>
              );
            })
          )}
        </>
      );
    }

    // ── TAB 2: REVISION DECK (MISSED QUESTIONS) ──────────────────────────────
    else if (activeTab === 'revise') {
      const masteredInSessionCount = Object.keys(reviseSessionMastered).length;
      body = (
        <>
          {/* Page Banner with Violet Accent */}
          <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: '#7C3AED', borderTopWidth: 4, ...shadow(2) }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(11), color: '#A78BFA', fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
                  REVISION DECK · SPACED REPETITION
                </Text>
                <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4 }}>
                  🔁 {u.revise}
                </Text>
                <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
                  {prog.wrong.length} question{prog.wrong.length !== 1 ? 's' : ''} waiting for review — answer correctly to master and earn stars
                </Text>
              </View>
              {masteredInSessionCount > 0 && (
                <Pressable
                  onPress={() => setReviseSessionMastered({})}
                  style={{ backgroundColor: c.green, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8 }}
                >
                  <Text style={{ fontSize: fs(11), fontWeight: '900', color: '#FFFFFF' }}>🧹 Clear Mastered</Text>
                </Pressable>
              )}
            </View>

            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <Chip label={`${prog.wrong.length} ${u.questionsInDeck}`} color={prog.wrong.length > 0 ? c.red : c.green} />
              <Chip label={`${masteredInSessionCount} ${u.masteredToday}`} color={c.green} />
              <Chip label="Full Instant Feedback" color="#A78BFA" />
            </View>
          </View>

          <TabSwitcher />

          {/* Mastered in Session Banner */}
          {masteredInSessionCount > 0 && (
            <View style={{ backgroundColor: c.greenSoft, borderColor: c.green, borderWidth: 1.5, borderRadius: 14, padding: 14, marginBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 }}>
                <Text style={{ fontSize: 24 }}>🌟</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: fs(13), fontWeight: '900', color: c.greenLight }}>
                    {masteredInSessionCount} Question{masteredInSessionCount !== 1 ? 's' : ''} Mastered in this Session!
                  </Text>
                  <Text style={{ fontSize: fs(11), color: c.greenLight, opacity: 0.85, marginTop: 2 }}>
                    Removed from your missed deck. You can dismiss cards individually or clear all.
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() => setReviseSessionMastered({})}
                style={{ backgroundColor: c.green, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 }}
              >
                <Text style={{ fontSize: fs(11), fontWeight: '900', color: '#FFFFFF' }}>Dismiss All</Text>
              </Pressable>
            </View>
          )}

          {wrongList.length === 0 ? (
            /* ── Empty State: Deck Clear ── */
            <View style={[st.emptyBox, { backgroundColor: c.greenSoft, borderColor: c.green, borderWidth: 2, padding: 28 }]}>
              <Text style={{ fontSize: 44, marginBottom: 12 }}>🎉 🏆 🇱🇸</Text>
              <Text style={{ fontSize: fs(22), fontWeight: '900', color: c.greenLight, textAlign: 'center', marginBottom: 6 }}>
                All Caught Up!
              </Text>
              <Text style={{ fontSize: fs(14), color: c.textPrimary, textAlign: 'center', marginBottom: 18, lineHeight: fs(21), maxWidth: 480 }}>
                You have 0 missed questions in your revision deck! Excellent job maintaining complete mastery over your primary school subjects.
              </Text>
              <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Pressable
                  onPress={() => setPracticeSubTab('quiz')}
                  style={{ backgroundColor: c.red, borderRadius: 14, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center' }}
                >
                  <Text style={{ color: '#FFFFFF', fontWeight: '900', fontSize: fs(13) }}>
                    🎯 Start Practice Quiz
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setPracticeSubTab('drills')}
                  style={{ backgroundColor: c.bgInput, borderColor: c.border, borderWidth: 1.5, borderRadius: 14, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center' }}
                >
                  <Text style={{ color: c.textPrimary, fontWeight: '900', fontSize: fs(13) }}>
                    ⚡ Grade Drills
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => go({ p: 'grade' })}
                  style={{ backgroundColor: c.bgInput, borderColor: c.border, borderWidth: 1.5, borderRadius: 14, paddingVertical: 12, paddingHorizontal: 20, alignItems: 'center' }}
                >
                  <Text style={{ color: c.textPrimary, fontWeight: '900', fontSize: fs(13) }}>
                    📖 Grade Lessons
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            /* ── Missed Question Cards ── */
            wrongList.map((a: any, wi: number) => {
              const currentPick     = revisePicks[a.id];
              const isAnswered      = currentPick !== undefined;
              const isCorrect       = currentPick === a.answer;
              const wasJustMastered = !!reviseSessionMastered[a.id];
              const foundSb         = (data as any).subjects.find((x: any) => x.id === a.subjectId);
              const sc              = foundSb ? subColor(foundSb.id, c) : c.lightBlue;

              return (
                <View
                  key={a.id}
                  style={[st.card, {
                    borderColor: wasJustMastered ? c.green : isAnswered ? (isCorrect ? c.green : c.red) : '#7C3AED66',
                    borderLeftWidth: 5,
                    borderLeftColor: wasJustMastered ? c.green : '#7C3AED',
                    marginBottom: 16,
                    ...shadow(wasJustMastered ? 3 : 1),
                  }]}
                >
                  {/* Card Header */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                      <View style={[st.chip, { backgroundColor: sc + '22', borderColor: sc + '44' }]}>
                        <Text style={{ fontSize: fs(10), fontWeight: '900', color: sc }}>
                          Review #{wi + 1} · {foundSb?.icon} Gr.{a.grade}
                        </Text>
                      </View>
                      {!(s.lang === 'st' && !stVoice) && (
                        <Pressable
                          onPress={() => {
                            Speech.stop();
                            Speech.speak(TSpeech(a.q), {
                              language: s.lang === 'st' ? 'st-ZA' : 'en-GB',
                              voice: s.lang === 'st' && stVoiceId ? stVoiceId : undefined,
                              rate: 0.85,
                            });
                          }}
                          style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: sc + '18', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Text style={{ fontSize: 18 }}>🔊</Text>
                        </Pressable>
                      )}
                    </View>

                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                      {wasJustMastered ? (
                        <>
                          <View style={{ backgroundColor: c.greenSoft, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1, borderColor: c.green }}>
                            <Text style={{ fontSize: fs(11), fontWeight: '900', color: c.greenLight }}>✓ Mastered (+1 ⭐)</Text>
                          </View>
                          <Pressable
                            onPress={() => {
                              setReviseSessionMastered((prev: Record<string, boolean>) => {
                                const next = { ...prev };
                                delete next[a.id];
                                return next;
                              });
                            }}
                            style={{ backgroundColor: c.bgInput, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, borderWidth: 1, borderColor: c.border }}
                          >
                            <Text style={{ fontSize: fs(11), color: c.greyLight, fontWeight: '700' }}>✕ Dismiss</Text>
                          </Pressable>
                        </>
                      ) : isAnswered ? (
                        <View style={{ backgroundColor: isCorrect ? c.greenSoft : c.redSoft, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1, borderColor: isCorrect ? c.green : c.red }}>
                          <Text style={{ fontSize: fs(11), fontWeight: '900', color: isCorrect ? c.greenLight : c.redLight }}>
                            {isCorrect ? '✓ Mastered!' : '✗ Try again'}
                          </Text>
                        </View>
                      ) : (
                        <View style={{ backgroundColor: '#7C3AED22', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 }}>
                          <Text style={{ fontSize: fs(11), fontWeight: '800', color: '#A78BFA' }}>{u.needsReview}</Text>
                        </View>
                      )}
                    </View>
                  </View>

                  <Text style={{ fontSize: fs(16), fontWeight: '800', color: c.textPrimary, lineHeight: fs(25), marginBottom: 14 }}>
                    {T(a.q)}
                  </Text>

                  {/* Options */}
                  {a.options.map((opt: any, oi: number) => {
                    const chosen  = currentPick === oi;
                    const correct = oi === a.answer;
                    let rowBg = 'transparent', rowBorder = c.border, txtCol = c.textPrimary, lBg = c.lightBlue;

                    if (wasJustMastered) {
                      if (correct) { rowBg = c.greenSoft; rowBorder = c.green; txtCol = c.greenLight; lBg = c.green; }
                      else { rowBg = 'transparent'; rowBorder = c.border; txtCol = c.grey; lBg = c.greyDark; }
                    } else if (isAnswered) {
                      if (chosen && correct)   { rowBg = c.greenSoft; rowBorder = c.green;  txtCol = c.greenLight; lBg = c.green; }
                      else if (chosen && !correct) { rowBg = c.redSoft; rowBorder = c.red; txtCol = c.redLight; lBg = c.red; }
                      else if (correct)         { rowBg = c.greenSoft; rowBorder = c.green;  txtCol = c.greenLight; lBg = c.green; }
                      else                      { rowBg = 'transparent'; rowBorder = c.border; txtCol = c.grey; lBg = c.greyDark; }
                    }

                    return (
                      <Pressable
                        key={oi}
                        onPress={() => {
                          if (wasJustMastered) return;
                          setRevisePicks((prev: Record<string, number>) => ({ ...prev, [a.id]: oi }));
                          void recordAnswerEvent(a.id, oi === a.answer);

                          if (oi === a.answer) {
                            void recordLearningDay();
                            // Mastered! Retain card in view via reviseSessionMastered
                            setReviseSessionMastered((prev: Record<string, boolean>) => ({ ...prev, [a.id]: true }));
                            setProg((prev: any) => ({
                              done:  { ...prev.done, [a.id]: 1 },
                              wrong: prev.wrong.filter((w: string) => w !== a.id),
                            }));
                            setPicks((prev: Record<string, number>) => ({ ...prev, [a.id]: oi }));
                          }
                        }}
                        disabled={wasJustMastered}
                        style={({ pressed }) => [st.optRow, { backgroundColor: rowBg, borderColor: rowBorder, opacity: pressed ? 0.8 : 1 }]}
                      >
                        <View style={[st.optLetter, { backgroundColor: lBg }]}>
                          <Text style={{ color: '#fff', fontWeight: '900', fontSize: fs(12) }}>{letters[oi]}</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: fs(14), color: txtCol, lineHeight: fs(21), fontWeight: chosen ? '800' : '500' }}>
                          {T(opt)}
                        </Text>
                        {chosen && isAnswered && (
                          <Text style={{ fontSize: 18, color: isCorrect ? c.greenLight : c.redLight, fontWeight: '900' }}>
                            {isCorrect ? '✓' : '✗'}
                          </Text>
                        )}
                      </Pressable>
                    );
                  })}

                  {/* Feedback Banner */}
                  {isAnswered && (
                    <View style={[st.feedback, { backgroundColor: isCorrect ? c.greenSoft : c.redSoft, borderColor: isCorrect ? c.green : c.red, marginTop: 12 }]}>
                      <Text style={{ fontSize: fs(13), fontWeight: '800', color: isCorrect ? c.greenLight : c.redLight }}>
                        {isCorrect
                          ? '✓ Excellent! Mastered and removed from your revision deck.'
                          : '✗ Not quite! Review the choices and try another option.'}
                      </Text>
                      {!isCorrect && (
                        <Text style={{ fontSize: fs(12), color: c.greenLight, fontWeight: '700', marginTop: 4 }}>
                          ✓ {u.correctAnswer}: {T(a.options[a.answer])}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              );
            })
          )}
        </>
      );
    }

    // ── TAB 3: CURRICULUM GRADE & SUBJECT DRILLS ─────────────────────────────
    else {
      body = (
        <>
          {/* Page Banner with Cyan Accent */}
          <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.lightBlueMid, borderTopWidth: 4, ...shadow(2) }]}>
            <Text style={{ fontSize: fs(11), color: c.lightBlue, fontWeight: '900', letterSpacing: 1.2, textTransform: 'uppercase' }}>
              TARGETED DRILLS · LESOTHO PRIMARY SYLLABUS
            </Text>
            <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary, marginTop: 4 }}>
              ⚡ Curriculum Drills
            </Text>
            <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>
              Launch instant targeted drills aligned directly with your grade level or subject area.
            </Text>

            <View style={{ flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <Chip label="All 7 Grades" color={c.lightBlue} />
              <Chip label="All 7 Subjects" color={c.gold} />
              <Chip label="Instant Randomizer" color={c.green} />
            </View>
          </View>

          <TabSwitcher />

          {/* Section 1: Grade Level Drills */}
          <SectionHead title="Drills by Grade Level (1 – 7)" color={c.red} />
          <View style={{ gap: 12, marginBottom: 20 }}>
            {GRADES.map(g => {
              const meta = GRADE_META[g];
              const gActs = ALL_ACTIVITIES.filter((a: any) => a.grade === g);
              return (
                <Pressable
                  key={g}
                  onPress={() => {
                    setQuizGradeFilter(g);
                    setQuizFilter('all');
                    setQuizPicks({});
                    setQuizHints({});
                    setQuizSeed((p: number) => p + 1);
                    setPracticeSubTab('quiz');
                  }}
                  style={({ pressed }) => [
                    st.card,
                    {
                      borderColor: meta.color + '44',
                      borderLeftWidth: 6,
                      borderLeftColor: meta.color,
                      opacity: pressed ? 0.88 : 1,
                      transform: [{ scale: pressed ? 0.99 : 1 }],
                      ...shadow(1),
                    },
                  ]}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, paddingRight: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary }}>
                          {meta.title}
                        </Text>
                        <View style={[st.chip, { backgroundColor: meta.color + '22', borderColor: meta.color + '44' }]}>
                          <Text style={{ fontSize: fs(10), fontWeight: '900', color: meta.color }}>
                            {gActs.length} Tasks
                          </Text>
                        </View>
                      </View>
                      <Text style={{ fontSize: fs(12), color: c.textMuted, lineHeight: fs(18) }}>
                        {meta.sub}
                      </Text>
                    </View>
                    <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: meta.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 16, color: meta.color, fontWeight: '900' }}>→</Text>
                    </View>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* Section 2: Subject Drills */}
          <SectionHead title="Drills by Subject Area" color={c.lightBlue} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {(data as any).subjects.map((sb: any) => {
              const sc = subColor(sb.id, c);
              const sbActs = ALL_ACTIVITIES.filter((a: any) => a.subjectId === sb.id);
              return (
                <Pressable
                  key={sb.id}
                  onPress={() => {
                    setQuizFilter(sb.id);
                    setQuizGradeFilter(studentGradeScope ?? 'all');
                    setQuizPicks({});
                    setQuizHints({});
                    setQuizSeed((p: number) => p + 1);
                    setPracticeSubTab('quiz');
                  }}
                  style={({ pressed }) => [
                    st.toolCardResponsive,
                    {
                      borderColor: sc + '44',
                      opacity: pressed ? 0.88 : 1,
                      transform: [{ scale: pressed ? 0.98 : 1 }],
                      ...shadow(1),
                    },
                  ]}
                >
                  <View style={[st.toolIconCircle, { backgroundColor: sc + '22' }]}>
                    <Text style={{ fontSize: 24 }}>{sb.icon}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: fs(14), fontWeight: '900', color: sc }}>
                      {T(sb.name)}
                    </Text>
                    <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 3 }}>
                      {sbActs.length} Questions across G1–G7
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18, color: sc, fontWeight: '900' }}>→</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      );
    }
  }

  // ── DICTIONARY ─────────────────────────────────────────────────────────────
  else if (top.p === 'dict') {
    const dq = dictQuery.trim().toLowerCase();
    const filtered = dq ? DICTIONARY.filter((item: any) => item.word.toLowerCase().includes(dq) || item.en.toLowerCase().includes(dq) || item.st.toLowerCase().includes(dq)) : DICTIONARY;
    const DCOLS = [c.lightBlue, c.red, c.green, c.gold, '#8B5CF6', '#06B6D4'];

    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.lightBlue, borderTopWidth: 4, ...shadow(2) }]}>
          <Text style={{ fontSize: 32, marginBottom: 6 }}>📖</Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary }}>{u.dictTitle}</Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>{u.dictDesc}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 }}>
            <Chip label={DICTIONARY.length + ' Words'} color={c.lightBlue} />
            <Chip label="Bilingual English / Sesotho" color={c.red} />
          </View>
        </View>

        <View style={[st.searchBar, { borderColor: c.lightBlue + '44' }]}>
          <Text style={{ fontSize: 16, color: c.grey }}>🔍</Text>
          <TextInput
            style={{ flex: 1, fontSize: fs(14), color: c.textPrimary, marginLeft: 8 }}
            placeholder="Search word / Batla lentsoe…"
            placeholderTextColor={c.grey}
            value={dictQuery}
            onChangeText={setDictQuery}
          />
          {dictQuery.length > 0 && (
            <Pressable onPress={() => setDictQuery('')}>
              <Text style={{ fontSize: fs(13), color: c.textSec, fontWeight: '700', paddingHorizontal: 6 }}>✕</Text>
            </Pressable>
          )}
        </View>

        {filtered.map((item: any, idx: number) => {
          const dc = DCOLS[idx % DCOLS.length];
          return (
            <View key={idx} style={[st.card, { borderLeftWidth: 5, borderLeftColor: dc, marginBottom: 10, ...shadow(1) }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontSize: fs(19), fontWeight: '900', color: c.textPrimary, flex: 1 }}>{item.word}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                {!(s.lang === 'st' && !stVoice) && (
                  <Pressable
                    onPress={() => {
                      Speech.stop();
                      Speech.speak(item.word, {
                        language: s.lang === 'st' ? 'st-ZA' : 'en-GB',
                        voice: s.lang === 'st' && stVoiceId ? stVoiceId : undefined,
                        rate: 0.85,
                        pitch: 1.0,
                      });
                    }}
                    style={{ backgroundColor: dc + '22', width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 18 }}>🔊</Text>
                  </Pressable>
                )}
                <View style={{ backgroundColor: dc + '22', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 }}>
                  <Text style={{ fontSize: fs(10), fontWeight: '900', color: dc, textTransform: 'uppercase' }}>{item.pos || 'noun'}</Text>
                </View>
              </View>
              </View>
              {item.subject && <Chip label={item.subject} color={dc} />}
              <View style={{ backgroundColor: c.bgInput, borderRadius: 10, padding: 12, marginTop: 8, gap: 8 }}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <Text style={{ fontSize: 14 }}>🇬🇧</Text>
                  <Text style={{ fontSize: fs(14), color: c.textSec, flex: 1, lineHeight: fs(21), fontWeight: '600' }}>{item.en}</Text>
                </View>
                <View style={{ height: 1, backgroundColor: c.border }} />
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <Text style={{ fontSize: 14 }}>🇱🇸</Text>
                  <Text style={{ fontSize: fs(14), color: c.textSec, flex: 1, lineHeight: fs(21), fontWeight: '600' }}>{item.st}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 6, marginTop: 8 }}>
                <Text style={{ fontSize: fs(10), color: dc, fontWeight: '900', marginTop: 1 }}>EX</Text>
                <Text style={{ fontSize: fs(13), color: c.grey, fontStyle: 'italic', flex: 1, lineHeight: fs(19) }}>
                  "{L(item.exampleEn, item.exampleSt)}"
                </Text>
              </View>
            </View>
          );
        })}
      </>
    );
  }

  // ── PAST PAPERS ────────────────────────────────────────────────────────────
  else if (top.p === 'papers') {
    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.greenSoft, borderColor: c.green + '44', borderWidth: 1, ...shadow(2) }]}>
          <Text style={{ fontSize: 32, marginBottom: 6 }}>📝</Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary }}>{u.papersTitle}</Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>{u.papersDesc}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 }}>
            <Chip label={PAST_PAPERS.length + ' National Papers'} color={c.green} />
            <Chip label="Authentic Step Explanations" color={c.lightBlue} />
          </View>
        </View>

        {PAST_PAPERS.map((paper: any) => (
          <View key={paper.id} style={[st.card, { borderTopWidth: 4, borderTopColor: c.green, marginBottom: 16, ...shadow(1) }]}>
            <View style={{ backgroundColor: c.green + '22', marginHorizontal: -16, marginTop: -16, marginBottom: 14, padding: 14, borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: fs(11), color: c.greenLight, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 }}>
                  {paper.subject} · {paper.year}
                </Text>
                <View style={{ backgroundColor: c.greenSoft, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 }}>
                  <Text style={{ fontSize: fs(11), color: c.greenLight, fontWeight: '900' }}>Grade {paper.grade}</Text>
                </View>
              </View>
              <Text style={{ fontSize: fs(16), fontWeight: '900', color: '#fff', marginTop: 4, letterSpacing: -0.2 }}>
                {L(paper.titleEn, paper.titleSt)}
              </Text>
            </View>

            <Text style={{ fontSize: fs(13), color: c.grey, marginBottom: 14, fontStyle: 'italic', borderLeftWidth: 3, borderLeftColor: c.green, paddingLeft: 10, lineHeight: fs(19) }}>
              {L(paper.instructionsEn, paper.instructionsSt)}
            </Text>

            {paper.questions.map((qi: any, qIdx: number) => {
              const qKey = paper.id + '_' + qIdx;
              const chosen = paperPicks[qKey];
              const isAns = chosen !== undefined;
              const isCor = chosen === qi.answer;
              const letters = ['A', 'B', 'C', 'D'];

              return (
                <View key={qIdx} style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: qIdx < paper.questions.length - 1 ? 1 : 0, borderBottomColor: c.border }}>
                  <Text style={{ fontSize: fs(15), fontWeight: '800', color: c.textPrimary, marginBottom: 10, lineHeight: fs(22) }}>
                    {qIdx + 1}. {L(qi.qEn, qi.qSt)}
                  </Text>
                  {qi.optionsEn.map((opt: string, oi: number) => {
                    const pThis = chosen === oi;
                    let rowBg = 'transparent', rowBorder = c.border, txtCol = c.textSec;
                    if (isAns) {
                      if (pThis && isCor) { rowBg = c.greenSoft; rowBorder = c.green; txtCol = c.greenLight; }
                      else if (pThis && !isCor) { rowBg = c.redSoft; rowBorder = c.red; txtCol = c.redLight; }
                      else if (oi === qi.answer) { rowBg = c.greenSoft; rowBorder = c.green; txtCol = c.greenLight; }
                    }
                    return (
                      <Pressable
                        key={oi}
                        disabled={isAns}
                        onPress={() => setPaperPicks(p => ({ ...p, [qKey]: oi }))}
                        style={[st.optRow, { backgroundColor: rowBg, borderColor: rowBorder }]}
                      >
                        <View style={[st.optLetter, { backgroundColor: isAns && oi === qi.answer ? c.green : c.bgElevated }]}>
                          <Text style={{ color: isAns && oi === qi.answer ? '#fff' : c.textSec, fontWeight: '900', fontSize: fs(12) }}>{letters[oi]}</Text>
                        </View>
                        <Text style={{ flex: 1, fontSize: fs(14), color: txtCol, lineHeight: fs(22) }}>{L(opt, qi.optionsSt[oi] || opt)}</Text>
                        {pThis && isAns && <Text style={{ fontSize: 16, color: isCor ? c.greenLight : c.redLight }}>{isCor ? '✓' : '✗'}</Text>}
                      </Pressable>
                    );
                  })}
                  {isAns && (
                    <View style={{ backgroundColor: c.bgInput, borderRadius: 10, padding: 10, marginTop: 8, borderLeftWidth: 3, borderLeftColor: c.green }}>
                      <Text style={{ fontSize: fs(13), color: c.textSec, lineHeight: fs(19) }}>
                        💡 {L(qi.explanationEn, qi.explanationSt)}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </>
    );
  }

  // ── AI TUTOR ───────────────────────────────────────────────────────────────
  else if (top.p === 'ai') {
    const aiTopics = [
      { title: '🔢 Long Division & Multiplication', titleSt: '🔢 Kabelo le Phatiso', desc: 'Step 1: Divide first digit. Step 2: Multiply back. Step 3: Subtract. Step 4: Bring down! Example: 144 ÷ 12 = 12.', descSt: 'Mohato 1: Arola palo ea pele. Mohato 2: Atisa morao. Mohato 3: Tlosa. Mohato 4: Theolela! Mohlala: 144 ÷ 12 = 12.', color: c.lightBlue },
      { title: '🔬 Oxygen, Gases & Rusting', titleSt: '🔬 Oksijene, Meea le Mafome', desc: 'Oxygen is 21% of air. It supports animal breathing, enables fire to burn, and causes iron to rust when exposed to water.', descSt: 'Oksijene e etsa 21% ea moea. E thusa phoofo ho hema, e lumella mollo ho tuka, le ho etsa tšepe e be le mafome.', color: c.green },
      { title: '🎨 Freehand Sketching & Shading', titleSt: '🎨 Ho Taka ka Matsoho a Lokolohileng', desc: 'Hold pencil lightly. Start with basic shapes (circles, ovals, triangles), sketch light guidelines, then add shading.', descSt: 'Tšoara pensele ka bonolo. Qala ka libopeho tsa motheo, rala mela e bobebe, ebe o kenya moriti.', color: c.subCre },
      { title: '🤝 Botho / Ubuntu & Childline 116', titleSt: '🤝 Botho le Childline 116', desc: 'Botho means treating every person with dignity and kindness. If you face danger or abuse, call Childline toll-free: 116.', descSt: 'Botho bo bolela ho tšoara batho ka seriti. Ha u le kotsing, letsetsa Childline mahala: 116.', color: c.red },
      { title: '📐 Geometry & Shapes', titleSt: '📐 Libopeho tsa Geometry', desc: 'Triangle = 3 sides, sum of angles = 180°. Square = 4 equal sides with 90° corners. Rectangle area = length × width.', descSt: 'Triangle = mathoko a 3, likhutlo ke 180°. Square = mathoko a 4 a lekanang le 90°.', color: '#8B5CF6' },
      { title: '🌍 Lesotho Geography & Natural Resources', titleSt: '🌍 Lefatše le Lihlahisoa tsa Lesotho', desc: 'Water is Lesotho\'s white gold, supplied via LHDA dams (Katse, Mohale). Capital: Maseru. Motto: Khotso, Pula, Nala.', descSt: 'Metsi ke khauta e tšoeu ea Lesotho, a tsamaisoang ke matamo a LHDA (Katse, Mohale). Motse-moholo: Maseru.', color: c.gold },
    ];

    body = (
      <>
        <View style={{ backgroundColor: c.bgElevated, borderRadius: 20, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: c.lightBlue + '44', ...shadow(2) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: c.lightBlue + '22', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 26 }}>📘</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(18), fontWeight: '900', color: c.textPrimary, letterSpacing: -0.3 }}>{u.aiTitle}</Text>
              <Text style={{ fontSize: fs(12), color: c.lightBlue, fontWeight: '700', marginTop: 2 }}>Zero Data Required · Pre-written Notes</Text>
            </View>
            <View style={{ backgroundColor: c.green, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 }}>
              <Text style={{ fontSize: fs(10), fontWeight: '900', color: '#fff' }}>GUIDE</Text>
            </View>
          </View>
          <Text style={{ fontSize: fs(13), color: c.greyLight, lineHeight: fs(20) }}>{u.aiDesc}</Text>
        </View>

        {aiAnswer && (
          <View style={{ backgroundColor: c.bgElevated, borderRadius: 16, padding: 16, marginBottom: 14, borderWidth: 1.5, borderColor: aiAnswer.color }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: c.green }} />
                <Text style={{ fontSize: fs(11), fontWeight: '900', color: aiAnswer.color, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  {u.aiConceptualGuidance}
                </Text>
              </View>
              <Pressable onPress={() => setAiAnswer(null)} style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: c.bgInput, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: c.textSec, fontWeight: '700' }}>✕</Text>
              </Pressable>
            </View>
            <Text style={{ fontSize: fs(16), fontWeight: '900', color: '#fff', marginBottom: 10, letterSpacing: -0.2 }}>
              {L(aiAnswer.title, aiAnswer.titleSt || aiAnswer.title)}
            </Text>
            <View style={{ height: 1, backgroundColor: c.border, marginBottom: 10 }} />
            <Text style={{ fontSize: fs(16), color: c.textSec, lineHeight: fs(25) }}>
              {L(aiAnswer.desc, aiAnswer.descSt || aiAnswer.desc)}
            </Text>
          </View>
        )}

        <SectionHead title="Tap a Topic for Study Notes" color={c.lightBlue} />
        {aiTopics.map((t, i) => (
          <Pressable
            key={i}
            onPress={() => setAiAnswer(t)}
            style={({ pressed }) => [st.card, { borderLeftWidth: 5, borderLeftColor: t.color, marginBottom: 10, opacity: pressed ? 0.82 : 1, ...shadow(1) }]}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: t.color + '22', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>{(s.lang === 'st' ? t.titleSt : t.title).split(' ')[0]}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: fs(14), fontWeight: '800', color: c.textPrimary, letterSpacing: -0.1 }}>
                  {L(t.title, t.titleSt || t.title)}
                </Text>
                <Text style={{ fontSize: fs(12), color: c.grey, marginTop: 3 }} numberOfLines={2}>
                  {L(t.desc, t.descSt || t.desc)}
                </Text>
              </View>
              <Text style={{ fontSize: 20, color: t.color }}>›</Text>
            </View>
          </Pressable>
        ))}
      </>
    );
  }

  // ── LEARNER PROFILE & PROGRESS ────────────────────────────────────────────
  else if (top.p === 'me') {
    const grade = activeProfile?.grade || 5;
    const subjects = (data as any).subjects.map((subject: any) => {
      const lessons = subject.lessons.filter((lesson: any) => lesson.grade === grade);
      const lessonsWithProgress = lessons.filter((lesson: any) => lesson.blocks.some((block: any, index: number) =>
        block.type === 'activity' && (prog.done[`${lesson.id}#${index}`] || 0) > 0
      ));
      return { ...subject, lessons, completed: lessonsWithProgress.length };
    }).filter((subject: any) => subject.lessons.length > 0);

    const lessonStars = subjects.flatMap((subject: any) => subject.lessons.map((lesson: any) => {
      const correctAnswers = lesson.blocks.reduce((count: number, block: any, index: number) =>
        count + (block.type === 'activity' && (prog.done[`${lesson.id}#${index}`] || 0) > 0 ? 1 : 0), 0
      );
      return Math.min(3, correctAnswers);
    }));
    const progressedLessons = lessonStars.filter((stars: number) => stars > 0).length;
    const mathsCorrect = subjects
      .filter((subject: any) => subject.id === 'maths')
      .reduce((sum: number, subject: any) => sum + subject.lessons.reduce((subtotal: number, lesson: any) =>
        subtotal + lesson.blocks.reduce((count: number, block: any, index: number) =>
          count + (block.type === 'activity' && (prog.done[`${lesson.id}#${index}`] || 0) > 0 ? 1 : 0), 0
        ), 0
      ), 0);
    const badgeList = [
      { id: 'first', icon: '🌱', name: L('First lesson', 'Thuto ea pele'), earned: progressedLessons >= 1 },
      { id: 'five', icon: '📚', name: L('5 lessons', 'Lithuto tse 5'), earned: progressedLessons >= 5 },
      { id: 'twenty', icon: '🏔️', name: L('20 lessons', 'Lithuto tse 20'), earned: progressedLessons >= 20 },
      { id: 'perfect', icon: '🌟', name: L('3 stars', 'Linaleli tse 3'), earned: lessonStars.some((stars: number) => stars >= 3) },
      { id: 'maths', icon: '🧮', name: L('Maths star (50 right)', 'Naleli ea Lipalo (tse 50 tse nepahetseng)'), earned: mathsCorrect >= 50 },
      { id: 'reader', icon: '📖', name: L('Reader (3 stories)', 'Sebali (lipale tse 3)'), earned: false },
      { id: 'streak3', icon: '🔥', name: L('3 days in a row', 'Matsatsi a 3 a latellanang'), earned: streak >= 3 },
      { id: 'curious', icon: '❓', name: L('Curious (10 questions)', 'Ea ratang ho botsa (lipotso tse 10)'), earned: false },
      { id: 'player', icon: '🎲', name: L('Game player', 'Sebapali'), earned: false },
    ];

    body = (
      <>
        <View style={[st.pageBanner, { backgroundColor: c.bgElevated, borderColor: c.lightBlue, borderTopWidth: 4, ...shadow(2) }]}>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary }}>{u.meTitle}</Text>
          <Text style={{ fontSize: fs(13), color: c.textMuted, marginTop: 4 }}>
            {L('Your learning progress stays on this phone.', 'Tsoelopele ea hao e lula fonong ena.')}
          </Text>
        </View>

        <View style={[st.card, { backgroundColor: c.bgCard, borderColor: activeProfile?.color || c.border, borderWidth: 2, ...shadow(1) }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: (activeProfile?.color || c.lightBlue) + '22', borderWidth: 2, borderColor: activeProfile?.color || c.lightBlue, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 36 }}>{activeProfile?.avatar || '⭐'}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(20), fontWeight: '900', color: c.textPrimary }}>{activeProfile?.nickname || u.whoIsLearning}</Text>
              <Text style={{ fontSize: fs(13), color: c.textMuted, marginTop: 3 }}>
                {activeProfile?.role === 'teacher' ? u.teacherArea : `${u.grade} ${grade}`}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 16 }}>
            <View style={{ flex: 1, minHeight: 62, borderRadius: 14, padding: 10, justifyContent: 'center', backgroundColor: c.goldSoft }}>
              <Text style={{ fontSize: fs(18), fontWeight: '900', color: c.gold }}>⭐ {totalStars}</Text>
              <Text style={{ fontSize: fs(11), color: c.textSec }}>{u.starsEarned}</Text>
            </View>
            <View style={{ flex: 1, minHeight: 62, borderRadius: 14, padding: 10, justifyContent: 'center', backgroundColor: c.redSoft }}>
              <Text style={{ fontSize: fs(18), fontWeight: '900', color: c.redLight }}>🔥 {streak}</Text>
              <Text style={{ fontSize: fs(11), color: c.textSec }}>{u.streakTitle}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => { setShowProfileModal(true); setIsAddingProfile(false); setDeletingProfileId(null); }}
            accessibilityRole="button"
            accessibilityLabel={u.changeLearner}
            style={({ pressed }) => ({ minHeight: 50, marginTop: 14, borderRadius: 12, borderWidth: 1.5, borderColor: c.lightBlue, backgroundColor: c.lightBlueSoft, alignItems: 'center', justifyContent: 'center', opacity: pressed ? 0.8 : 1 })}
          >
            <Text style={{ fontSize: fs(14), fontWeight: '900', color: c.lightBlue }}>{u.changeLearner}</Text>
          </Pressable>
        </View>

        <SectionHead title={u.meProgress} color={c.lightBlue} />
        <View style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border }]}>
          {subjects.map((subject: any) => {
            const count = subject.lessons.length;
            const percent = count ? Math.round((subject.completed / count) * 100) : 0;
            return (
              <View key={subject.id} style={{ marginBottom: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                  <Text style={{ flex: 1, fontSize: fs(13), fontWeight: '800', color: c.textPrimary }}>{T(subject.name)}</Text>
                  <Text style={{ fontSize: fs(12), fontWeight: '800', color: subject.completed ? c.greenLight : c.textMuted }}>
                    {subject.completed ? `${subject.completed} / ${count}` : u.noDataYet}
                  </Text>
                </View>
                <View
                  accessibilityRole="progressbar"
                  accessibilityLabel={`${T(subject.name)} ${u.lessonsCompleted}`}
                  accessibilityValue={{ min: 0, max: count, now: subject.completed }}
                  style={{ height: 10, borderRadius: 5, backgroundColor: c.bgInput, overflow: 'hidden' }}
                >
                  <View style={{ width: `${percent}%`, height: '100%', borderRadius: 5, backgroundColor: subColor(subject.id, c) }} />
                </View>
              </View>
            );
          })}
        </View>

        <SectionHead title={u.badgesTitle} color={c.gold} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 }}>
          {badgeList.map(badge => (
            <View
              key={badge.id}
              accessibilityLabel={`${badge.name}. ${badge.earned ? L('Earned', 'E fumanehile') : L('Locked', 'E notletsoe')}`}
              style={{ width: '31%', minHeight: 104, borderRadius: 16, borderWidth: 1, borderColor: badge.earned ? c.gold : c.border, backgroundColor: badge.earned ? c.goldSoft : c.bgCard, padding: 8, justifyContent: 'center', alignItems: 'center', opacity: badge.earned ? 1 : 0.4 }}
            >
              <Text style={{ fontSize: 28 }}>{badge.icon}</Text>
              <Text style={{ fontSize: fs(10), color: c.textPrimary, textAlign: 'center', fontWeight: '800', marginTop: 5 }}>{badge.name}</Text>
            </View>
          ))}
        </View>

        <SectionHead title={L('Tools and support', 'Lisebelisoa le thuso')} color={c.red} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {[
            { icon: '📝', label: u.startingCheck, action: () => alert(u.featureNotReady) },
            { icon: '🏁', label: u.finalCheck, action: () => alert(u.featureNotReady) },
            { icon: '♡', label: u.tellUs, action: () => alert(u.featureNotReady) },
            { icon: '⚙️', label: u.settings, action: () => setNav([{ p: 'set' }]) },
            { icon: '📘', label: u.howToUse, action: () => setNav([{ p: 'welcome' }]) },
            { icon: '🔒', label: u.teacherArea, action: () => alert(u.featureNotReady) },
          ].map(item => (
            <Pressable
              key={item.label}
              onPress={item.action}
              accessibilityRole="button"
              accessibilityLabel={item.label}
              style={({ pressed }) => ({ flexBasis: '48%', flexGrow: 1, minHeight: 58, flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 14, borderWidth: 1, borderColor: c.border, backgroundColor: c.bgCard, paddingHorizontal: 12, opacity: pressed ? 0.8 : 1 })}
            >
              <Text style={{ fontSize: 20 }}>{item.icon}</Text>
              <Text style={{ flex: 1, fontSize: fs(12), fontWeight: '800', color: c.textPrimary }}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </>
    );
  }

  // ── SETTINGS ───────────────────────────────────────────────────────────────
  else if (top.p === 'set') {
    const SettingRow = ({ label, val, onToggle }: { label: string; val: boolean; onToggle: (x: boolean) => void }) => (
      <View style={[st.settingRow, { borderBottomColor: c.border }]}>
        <Text style={{ flex: 1, fontSize: fs(15), color: c.textPrimary, fontWeight: '600' }}>{label}</Text>
        <Switch value={val} onValueChange={onToggle} trackColor={{ false: c.border, true: c.red }} thumbColor="#fff" />
      </View>
    );
    const handleReset = async () => {
      setProg({ done: {}, wrong: [] }); setPicks({}); setHints({});
      if (activeProfileId) {
        await AsyncStorage.removeItem(`hub.p.${activeProfileId}.prog`).catch(() => {});
      }
      alert(u.resetConfirm);
    };

    body = (
      <>
        <View style={{ backgroundColor: c.bgElevated, borderRadius: 20, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: c.border, ...shadow(2) }}>
          <Text style={{ fontSize: 32, marginBottom: 6 }}>⚙️</Text>
          <Text style={{ fontSize: fs(24), fontWeight: '900', color: c.textPrimary }}>{u.settings}</Text>
          <Text style={{ fontSize: fs(13), color: c.greyLight, marginTop: 4 }}>Moshoeshoe II Hub Preferences</Text>
        </View>

                <SectionHead title={u.theme || 'Theme & Appearance'} color={c.lightBlue} />
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Pressable
            onPress={() => setSettings({ ...s, theme: 'light', hc: false })}
            style={[
              st.card,
              {
                flex: 1,
                alignItems: 'center',
                paddingVertical: 18,
                backgroundColor: isLight ? c.lightBlueSoft : c.bgCard,
                borderColor: isLight ? c.lightBlue : c.border,
                borderWidth: isLight ? 2 : 1.5,
              },
            ]}
          >
            <Text style={{ fontSize: 28, marginBottom: 6 }}>☀️</Text>
            <Text style={{ fontSize: fs(14), fontWeight: '900', color: isLight ? c.lightBlue : c.textPrimary }}>
              {u.themeLight}
            </Text>
            <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 2 }}>Warm, easy-on-the-eyes light</Text>
          </Pressable>

          <Pressable
            onPress={() => setSettings({ ...s, theme: 'dark', hc: false })}
            style={[
              st.card,
              {
                flex: 1,
                alignItems: 'center',
                paddingVertical: 18,
                backgroundColor: !isLight && !s.hc ? c.redSoft : c.bgCard,
                borderColor: !isLight && !s.hc ? c.red : c.border,
                borderWidth: !isLight && !s.hc ? 2 : 1.5,
              },
            ]}
          >
            <Text style={{ fontSize: 28, marginBottom: 6 }}>🌙</Text>
            <Text style={{ fontSize: fs(14), fontWeight: '900', color: !isLight && !s.hc ? c.redLight : c.textPrimary }}>
              {u.themeDark}
            </Text>
            <Text style={{ fontSize: fs(11), color: c.textMuted, marginTop: 2 }}>Midnight Slate</Text>
          </Pressable>
        </View>

        <SectionHead title={u.lang} color={c.red} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {[
            { l: 'both', flag: '🇱🇸 + 🇬🇧', name: 'Sesotho + English' },
            { l: 'st', flag: '🇱🇸', name: 'Sesotho' },
            { l: 'en', flag: '🇬🇧', name: 'English' },
          ].map(lang => (
            <Pressable
              key={lang.l}
              onPress={() => setSettings({ ...s, lang: lang.l })}
              style={{ flexGrow: 1, flexBasis: 105, padding: 14, borderRadius: 16, borderWidth: 2, borderColor: s.lang === lang.l ? c.lightBlue : c.border, backgroundColor: s.lang === lang.l ? c.lightBlueSoft : c.bgCard, alignItems: 'center' }}
            >
              <Text style={{ fontSize: 21 }}>{lang.flag}</Text>
              <Text style={{ fontSize: fs(13), fontWeight: '900', color: s.lang === lang.l ? c.lightBlue : c.textSec, marginTop: 8 }}>{lang.name}</Text>
            </Pressable>
          ))}
        </View>

        <SectionHead title={u.size} color={c.lightBlue} />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {[{ l: 'A−', v: -0.15 }, { l: 'A+', v: +0.15 }].map((btn, i) => (
            <Pressable
              key={i}
              onPress={() => setSettings({ ...s, scale: Math.min(1.8, Math.max(0.8, +(s.scale + btn.v).toFixed(2))) })}
              style={{ flex: 1, height: 50, borderRadius: 14, borderWidth: 1.5, borderColor: c.border, backgroundColor: c.bgElevated, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ fontSize: fs(18), fontWeight: '900', color: c.textPrimary }}>{btn.l}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={{ textAlign: 'center', color: c.grey, fontSize: fs(13), marginTop: 8, fontWeight: '700' }}>
          {Math.round(s.scale * 100)}%
        </Text>

        <SectionHead title="Accessibility & Special Modes" color={c.gold} />
        <View style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border, padding: 0, overflow: 'hidden' }]}>
          <SettingRow label={u.hc} val={s.hc} onToggle={x => setSettings({ ...s, hc: x })} />
          <SettingRow label={u.easy} val={s.easy} onToggle={x => setSettings({ ...s, easy: x })} />
          <SettingRow label={u.teacher} val={s.teacher} onToggle={x => setSettings({ ...s, teacher: x })} />
        </View>

        <SectionHead title={u.profilesTitle} color={c.gold} />
        <Pressable
          onPress={() => { setShowProfileModal(true); setIsAddingProfile(false); setDeletingProfileId(null); }}
          style={({ pressed }) => [st.card, { backgroundColor: c.bgCard, borderColor: activeProfile?.color || c.border, opacity: pressed ? 0.8 : 1 }]}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: (activeProfile?.color || c.lightBlue) + '22', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 24 }}>{activeProfile?.avatar || '👤'}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: fs(16), fontWeight: '900', color: c.textPrimary }}>
                {activeProfile ? `${activeProfile.nickname} (${activeProfile.role === 'teacher' ? 'Teacher' : `Grade ${activeProfile.grade}`})` : u.whoIsLearning}
              </Text>
              <Text style={{ fontSize: fs(12), color: c.textMuted, marginTop: 2 }}>
                {profiles.length} of 4 profiles registered · {u.switchProfileHint}
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: c.gold, fontWeight: '900' }}>→</Text>
          </View>
        </Pressable>

        <SectionHead title="Voice Speech Synthesis" color={c.lightBlue} />
        <View style={[st.card, { backgroundColor: c.bgCard, borderColor: c.border }]}>
          <Text style={{ fontSize: fs(14), fontWeight: '800', color: c.textPrimary, marginBottom: 6 }}>{u.voiceNoticeTitle}</Text>
          <Text style={{ fontSize: fs(13), color: stVoice ? c.greenLight : c.textSec, lineHeight: fs(21) }}>
            {stVoice ? '✓ ' + u.voiceNoticeSesothoInstalled : 'ℹ️ ' + u.voiceNoticeSesothoMissing}
          </Text>
        </View>

        <SectionHead title="Learner Data Management" color={c.red} />
        <Pressable
          onPress={handleReset}
          style={({ pressed }) => [st.listToolBtn, { backgroundColor: c.redSoft, borderColor: c.red + '55', opacity: pressed ? 0.8 : 1 }]}
        >
          <Text style={{ fontSize: fs(14), fontWeight: '800', color: c.redLight }}>🗑️ {u.resetProgress}</Text>
        </Pressable>

        <SectionHead title="Privacy & Offline Security" color={c.grey} />
        <View style={[st.card, { backgroundColor: c.bgInput }]}>
          <Text style={{ fontSize: fs(13), color: c.textSec, lineHeight: fs(21) }}>{u.privacy}</Text>
        </View>
      </>
    );
  }

  // ── First-launch language picker ──────────────────────────────────────────
  if (ready && !langChosen) {
    const pickLang = async (lang: 'both' | 'st' | 'en') => {
      setSettings(prev => ({ ...prev, lang }));
      setOnboardingStep(1);
    };
    const finishOnboarding = async () => {
      setLangChosen(true);
      await AsyncStorage.setItem('hub.langChosen', 'true').catch(() => {});
      await AsyncStorage.setItem('hub.s', JSON.stringify(settings)).catch(() => {});
      if (supportChoice) await AsyncStorage.setItem('hub.supportChoice', supportChoice).catch(() => {});
    };
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: LIGHT.bg }}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingTop: 88, paddingBottom: 28 }}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar barStyle="light-content" />
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 64, backgroundColor: '#1E3A8A', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', height: 7, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <View style={{ flex: 1, backgroundColor: '#002B7F' }} />
            <View style={{ flex: 1, backgroundColor: '#F4D35E' }} />
            <View style={{ flex: 1, backgroundColor: '#009A44' }} />
          </View>
          <Text style={{ color: '#FFFFFF', fontSize: 22, fontWeight: '900' }}>Moshoeshoe II Hub</Text>
        </View>
        {onboardingStep === 0 ? (
          <View style={{ width: '100%', maxWidth: 520, alignItems: 'center' }}>
            <Text style={{ fontSize: 42, marginBottom: 10 }}>🌞</Text>
            <Text style={{ fontSize: 28, fontWeight: '900', color: '#20273A', textAlign: 'center' }}>Moshoeshoe II Hub</Text>
            <Text style={{ fontSize: 15, color: '#667085', textAlign: 'center', marginTop: 6, marginBottom: 24 }}>Ho ithuta ho sa hloke inthanete · Learning without internet</Text>
            <Text style={{ fontSize: 17, fontWeight: '900', color: '#20273A', marginBottom: 12 }}>Khetha puo · Choose a language</Text>
            {([
              { lang: 'both', title: 'Sesotho le Senyesemane', sub: 'Sesotho and English together', flag: '🇱🇸 + 🇬🇧' },
              { lang: 'st', title: 'Sesotho feela', sub: 'Sesotho only', flag: '🇱🇸' },
              { lang: 'en', title: 'English only', sub: 'Senyesemane feela', flag: '🇬🇧' },
            ] as const).map((option, i) => (
              <Pressable key={i} onPress={() => pickLang(option.lang)}
                style={({ pressed }) => ({ width: '100%', minHeight: 88, borderRadius: 18, borderWidth: settings.lang === option.lang ? 2 : 1, borderColor: settings.lang === option.lang ? '#315DA8' : '#E7E1D5', backgroundColor: settings.lang === option.lang ? '#F3F6FF' : '#FFFFFF', marginBottom: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18, opacity: pressed ? 0.82 : 1 })}>
                <Text style={{ fontSize: 22, fontWeight: '900', color: '#20273A', marginRight: 14 }}>{option.flag}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 17, fontWeight: '900', color: '#20273A' }}>{option.title}</Text>
                  <Text style={{ fontSize: 14, color: '#667085', marginTop: 3 }}>{option.sub}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        ) : onboardingStep === 1 ? (
          <View style={{ width: '100%', maxWidth: 520 }}>
            <Text style={{ fontSize: 25, fontWeight: '900', color: '#20273A', textAlign: 'center', marginBottom: 8 }}>{L('How can we help you?', 'Re ka u thusa joang?')}</Text>
            <Text style={{ fontSize: 15, color: '#667085', textAlign: 'center', marginBottom: 18 }}>{L('Choose what helps. You can change this later in Settings.', 'Khetha se u thusang. U ka se fetola hamorao ho Litlhophiso.')}</Text>
            {([
              { id: 'sight', title: L('Seeing support', 'Thuso ea ho bona'), sub: L('Bigger text, read aloud, and large buttons.', 'Mongolo o moholo, ho baloa ka lentsoe, likonopo tse kholo.') },
              { id: 'hearing', title: L('Hearing support', 'Thuso ea ho utloa'), sub: L('Important information is also shown in text.', 'Lintlha tsa bohlokoa li bontšoa le ka mongolo.') },
              { id: 'large', title: L('Large text', 'Mongolo o moholo'), sub: L('Use larger text throughout the app.', 'Litlhaku tse kholoanyane leqepheng le leng le le leng.') },
            ] as const).map(option => (
              <Pressable key={option.id} onPress={() => { setSupportChoice(option.id); setSettings(prev => ({ ...prev, scale: option.id === 'large' ? 1.22 : option.id === 'sight' ? 1.15 : prev.scale })); }}
                style={({ pressed }) => ({ minHeight: 88, borderRadius: 18, borderWidth: 1.5, borderColor: supportChoice === option.id ? '#2F64D7' : '#D8DEE9', backgroundColor: supportChoice === option.id ? '#EEF4FF' : '#FFFFFF', marginBottom: 10, padding: 14, justifyContent: 'center', opacity: pressed ? 0.82 : 1 })}>
                <Text style={{ fontSize: 17, fontWeight: '900', color: '#20273A' }}>{option.title}</Text>
                <Text style={{ fontSize: 14, color: '#667085', marginTop: 4 }}>{option.sub}</Text>
              </Pressable>
            ))}
            <Pressable onPress={() => setOnboardingStep(2)} style={({ pressed }) => ({ height: 52, borderRadius: 14, backgroundColor: '#1E3A8A', alignItems: 'center', justifyContent: 'center', marginTop: 8, opacity: pressed ? 0.82 : 1 })}>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '900' }}>{L('Next', 'E latelang')}</Text>
            </Pressable>
          </View>
        ) : (
          <View style={{ width: '100%', maxWidth: 520, alignItems: 'center' }}>
            <Text style={{ fontSize: 42 }}>🔒</Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#20273A', textAlign: 'center', marginVertical: 12 }}>{L('Your information stays private', 'Tlhahisoleseling ea hau e bolokehile')}</Text>
            {[
              L('Works offline. Nothing is sent anywhere.', 'E sebetsa ntle le inthanete. Ha ho letho le romeloang kae kapa kae.'),
              L('Use a nickname, not a full name.', 'Sebelisa lebitso la bosoasoi, eseng lebitso le felletseng.'),
              L('Your progress and settings stay on this phone.', 'Tsoelo-pele le litlhophiso li lula fonong ena.'),
            ].map((text, i) => (
              <View key={i} style={{ width: '100%', borderWidth: 1, borderColor: '#D8DEE9', borderRadius: 14, padding: 14, marginBottom: 8 }}>
                <Text style={{ fontSize: 15, color: '#667085', lineHeight: 21 }}>• {text}</Text>
              </View>
            ))}
            <Pressable onPress={finishOnboarding} style={({ pressed }) => ({ width: '100%', height: 54, borderRadius: 14, backgroundColor: '#1E3A8A', alignItems: 'center', justifyContent: 'center', marginTop: 12, opacity: pressed ? 0.82 : 1 })}>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '900' }}>{L('I understand – start', 'Kea utloisisa – qala')}</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    );
  }

  // ── Learner Profile Selection / Creation (At startup or when switching) ────
  if (ready && langChosen && (!activeProfileId || profiles.length === 0 || showProfileModal)) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg }}>
        <StatusBar barStyle={isLight ? 'dark-content' : 'light-content'} />
        <ScrollView contentContainerStyle={{ padding: 24, alignItems: 'center' }} keyboardShouldPersistTaps="handled">
          {/* National tricolor stripe */}
          <View style={{ flexDirection: 'row', height: 5, width: '100%', maxWidth: 440, borderRadius: 3, overflow: 'hidden', marginTop: 16, marginBottom: 20 }}>
            <View style={{ flex: 1, backgroundColor: '#002B7F' }} />
            <View style={{ flex: 1, backgroundColor: '#F4D35E' }} />
            <View style={{ flex: 1, backgroundColor: '#009A44' }} />
          </View>

          <Text style={{ fontSize: 36, marginBottom: 6 }}>🏫</Text>
          <Text style={{ fontSize: 24, fontWeight: '900', color: c.textPrimary, textAlign: 'center', marginBottom: 4 }}>
            Moshoeshoe II Hub
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '800', color: c.lightBlue, textAlign: 'center', marginBottom: 4 }}>
            {u.whoIsLearning}
          </Text>
          <Text style={{ fontSize: 14, color: c.textMuted, textAlign: 'center', marginBottom: 16 }}>
            {u.whoIsLearningSub}
          </Text>

          {/* Ethics Privacy Reminder (NO real names or numbers) */}
          <View style={{ backgroundColor: c.lightBlueSoft, borderColor: c.lightBlue + '66', borderWidth: 1.5, borderRadius: 14, padding: 14, width: '100%', maxWidth: 440, marginBottom: 20 }}>
            <Text style={{ fontSize: 13, color: c.textSec, lineHeight: 19, textAlign: 'center', fontWeight: '700' }}>
              🔒 {u.profilePrivacyNotice}
            </Text>
          </View>

          {/* Form to Add New Profile */}
          {isAddingProfile ? (
            <View style={{ width: '100%', maxWidth: 440, backgroundColor: c.bgCard, borderColor: c.border, borderWidth: 1.5, borderRadius: 18, padding: 20, marginBottom: 20, ...shadow(1) }}>
              <Text style={{ fontSize: 18, fontWeight: '900', color: c.textPrimary, marginBottom: 14 }}>
                {u.newProfileTitle}
              </Text>

              {/* Nickname Input */}
              <Text style={{ fontSize: 14, fontWeight: '800', color: c.textSec, marginBottom: 6 }}>
                {u.nicknameLabel}
              </Text>
              <TextInput
                value={newNickname}
                onChangeText={t => setNewNickname(t.slice(0, 12))}
                maxLength={12}
                placeholder={u.nicknamePlaceholder}
                placeholderTextColor="#64748B"
                accessibilityLabel={u.nicknameLabel}
                style={{
                  backgroundColor: c.bgInput,
                  borderWidth: 1.5,
                  borderColor: newNickname.trim().length > 0 ? c.lightBlue : c.border,
                  borderRadius: 12,
                  paddingHorizontal: 14,
                  minHeight: 48,
                  fontSize: 16,
                  color: c.textPrimary,
                  fontWeight: '700',
                  marginBottom: 16,
                }}
              />

              {/* Role Selector */}
              <Text style={{ fontSize: 14, fontWeight: '800', color: c.textSec, marginBottom: 8 }}>
                {L('Access level', 'Boemo ba phihlello')}
              </Text>
              <View style={{ flexDirection: 'row', gap: 10, marginBottom: 16 }}>
                {(['student', 'teacher'] as ProfileRole[]).map(role => (
                  <Pressable
                    key={role}
                    onPress={() => {
                      setNewRole(role);
                      if (role === 'teacher') setGuardianConsent(false);
                    }}
                    accessibilityRole="radio"
                    accessibilityLabel={role === 'teacher' ? L('Teacher', 'Tichere') : L('Learner', 'Moithuti')}
                    accessibilityState={{ selected: newRole === role }}
                    style={{
                      flex: 1,
                      minHeight: 48,
                      borderRadius: 12,
                      backgroundColor: newRole === role ? c.lightBlue : c.bgElevated,
                      borderWidth: 1.5,
                      borderColor: newRole === role ? c.lightBlue : c.border,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: '900', color: newRole === role ? '#FFFFFF' : c.textPrimary }}>
                      {role === 'teacher' ? L('Teacher', 'Tichere') : L('Learner', 'Moithuti')}
                    </Text>
                  </Pressable>
                ))}
              </View>

              {/* Grade Selector */}
              <Text style={{ fontSize: 14, fontWeight: '800', color: c.textSec, marginBottom: 8 }}>
                {newRole === 'teacher' ? L('Teacher view: all grades', 'Pono ea tichere: lihlopha tsohle') : u.chooseGradeLevelLabel}
              </Text>
              {newRole === 'teacher' ? (
                <View style={{ backgroundColor: c.bgElevated, borderWidth: 1.5, borderColor: c.border, borderRadius: 12, paddingHorizontal: 14, minHeight: 48, justifyContent: 'center', marginBottom: 16 }}>
                  <Text style={{ fontSize: 15, fontWeight: '800', color: c.textSec }}>{L('Teacher accounts see every grade in the school hub.', 'Liakhaonto tsa matichere li bona lihlopha tsohle.')}</Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                  {[1, 2, 3, 4, 5, 6, 7].map(g => (
                    <Pressable
                      key={g}
                      onPress={() => setNewGrade(g)}
                      accessibilityRole="radio"
                      accessibilityLabel={`${u.grade} ${g}`}
                      accessibilityState={{ selected: newGrade === g }}
                      style={{
                        minWidth: 48,
                        minHeight: 48,
                        paddingHorizontal: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
                        backgroundColor: newGrade === g ? c.lightBlue : c.bgElevated,
                        borderWidth: 1.5,
                        borderColor: newGrade === g ? c.lightBlue : c.border,
                      }}
                    >
                      <Text style={{ fontSize: 15, fontWeight: '900', color: newGrade === g ? '#FFFFFF' : c.textPrimary }}>Gr.{g}</Text>
                    </Pressable>
                  ))}
                </View>
              )}

              {newRole === 'student' && (
                <>
                  <Text style={{ fontSize: 14, fontWeight: '800', color: c.textSec, marginBottom: 8 }}>
                    {u.genderLabel}
                  </Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                    {([
                      { value: 'girl', label: u.girl },
                      { value: 'boy', label: u.boy },
                      { value: 'prefer-not-to-say', label: u.preferNotToSay },
                    ] as const).map(option => (
                      <Pressable
                        key={option.value}
                        onPress={() => setNewGender(option.value)}
                        accessibilityRole="radio"
                        accessibilityLabel={option.label}
                        accessibilityState={{ selected: newGender === option.value }}
                        style={{
                          minHeight: 48,
                          paddingHorizontal: 12,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 12,
                          backgroundColor: newGender === option.value ? c.lightBlue : c.bgElevated,
                          borderWidth: 1.5,
                          borderColor: newGender === option.value ? c.lightBlue : c.border,
                        }}
                      >
                        <Text style={{ fontSize: 13, fontWeight: '800', color: newGender === option.value ? '#FFFFFF' : c.textPrimary }}>
                          {option.label}
                        </Text>
                      </Pressable>
                    ))}
                  </View>

                  <Pressable
                    onPress={() => setGuardianConsent(value => !value)}
                    accessibilityRole="checkbox"
                    accessibilityLabel={u.guardianConsent}
                    accessibilityState={{ checked: guardianConsent }}
                    style={{ minHeight: 52, flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, marginBottom: 14, borderRadius: 12, borderWidth: 1.5, borderColor: guardianConsent ? c.green : c.border, backgroundColor: guardianConsent ? c.greenSoft : c.bgElevated }}
                  >
                    <View style={{ width: 28, height: 28, borderRadius: 6, borderWidth: 2, borderColor: guardianConsent ? c.green : c.borderMid, backgroundColor: guardianConsent ? c.green : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>{guardianConsent ? '✓' : ''}</Text>
                    </View>
                    <Text style={{ flex: 1, fontSize: fs(12), lineHeight: fs(18), color: c.textPrimary, fontWeight: '700' }}>
                      {u.guardianConsent}
                    </Text>
                  </Pressable>
                </>
              )}

              {/* Avatar Selector */}
              <Text style={{ fontSize: 14, fontWeight: '800', color: c.textSec, marginBottom: 8 }}>
                {u.avatarLabel}
              </Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                {AVATARS.map(av => {
                  const sel = newAvatar.icon === av.icon;
                  return (
                    <Pressable
                      key={av.icon}
                      onPress={() => setNewAvatar(av)}
                      accessibilityRole="radio"
                      accessibilityLabel={`${u.avatarLabel} ${av.icon}`}
                      accessibilityState={{ selected: sel }}
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 26,
                        backgroundColor: sel ? av.color + '44' : c.bgElevated,
                        borderWidth: sel ? 2.5 : 1.5,
                        borderColor: sel ? av.color : c.border,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text style={{ fontSize: 26 }}>{av.icon}</Text>
                    </Pressable>
                  );
                })}
              </View>

              {/* Action Buttons */}
              <View style={{ flexDirection: 'row', gap: 10 }}>
                {profiles.length > 0 && (
                  <Pressable
                    onPress={() => {
                      setIsAddingProfile(false);
                      setNewNickname('');
                      setNewGender('prefer-not-to-say');
                      setGuardianConsent(false);
                    }}
                    accessibilityRole="button"
                    accessibilityLabel={u.cancelBtn}
                    style={{ flex: 1, minHeight: 48, backgroundColor: c.bgElevated, borderWidth: 1, borderColor: c.border, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: '800', color: c.textPrimary }}>{u.cancelBtn}</Text>
                  </Pressable>
                )}
                <Pressable
                  onPress={handleAddProfile}
                  disabled={newNickname.trim().length === 0 || (newRole === 'student' && !guardianConsent)}
                  accessibilityRole="button"
                  accessibilityLabel={u.saveProfileBtn}
                  accessibilityState={{ disabled: newNickname.trim().length === 0 || (newRole === 'student' && !guardianConsent) }}
                  style={{
                    flex: 2,
                    minHeight: 48,
                    backgroundColor: newNickname.trim().length > 0 && (newRole === 'teacher' || guardianConsent) ? c.lightBlue : c.greyMuted,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '900', color: '#FFFFFF' }}>{u.saveProfileBtn}</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            /* Profile List */
            <View style={{ width: '100%', maxWidth: 440, gap: 12, marginBottom: 20 }}>
              {profiles.map(p => {
                const isActive = p.id === activeProfileId;
                const isDeleting = deletingProfileId === p.id;

                return (
                  <View
                    key={p.id}
                    style={{
                      backgroundColor: c.bgCard,
                      borderColor: isActive ? p.color : c.border,
                      borderWidth: isActive ? 2.5 : 1.5,
                      borderRadius: 18,
                      padding: 16,
                    }}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                      <Pressable
                        onPress={() => selectProfile(p)}
                        accessibilityRole="button"
                        accessibilityLabel={L(`${p.nickname}, ${p.role === 'teacher' ? 'Teacher' : `Grade ${p.grade}`}`, `${p.nickname}, ${p.role === 'teacher' ? 'Tichere' : `Sehlopha sa ${p.grade}`}`)}
                        style={{ flex: 1, minHeight: 52, flexDirection: 'row', alignItems: 'center', gap: 14 }}
                      >
                        <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: p.color + '25', borderWidth: 2, borderColor: p.color, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 28 }}>{p.avatar}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ fontSize: 18, fontWeight: '900', color: c.textPrimary }}>{p.nickname}</Text>
                            {isActive && (
                              <View style={{ backgroundColor: '#10B981', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 }}>
                                <Text style={{ fontSize: 10, fontWeight: '900', color: '#FFFFFF' }}>{p.role === 'teacher' ? L('Teacher', 'Tichere') : u.activeLearnerTag}</Text>
                              </View>
                            )}
                          </View>
                          <Text style={{ fontSize: 13, color: c.textMuted, marginTop: 3 }}>
                            {p.role === 'teacher' ? L('Teacher portal · All grades available', 'Sebaka sa matichere · lihlopha tsohle') : L(`Grade ${p.grade}`, `Sehlopha sa ${p.grade}`)}
                          </Text>
                        </View>
                      </Pressable>
                      <Pressable
                        onPress={() => setDeletingProfileId(isDeleting ? null : p.id)}
                        hitSlop={8}
                        accessibilityRole="button"
                        accessibilityLabel={L('Delete learner profile', 'Hlakola profil ea moithuti')}
                        style={{ width: 48, height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 24, backgroundColor: 'rgba(239, 68, 68, 0.12)' }}
                      >
                        <Text style={{ fontSize: 18 }}>🗑️</Text>
                      </Pressable>
                    </View>

                    {/* Inline Delete Confirmation */}
                    {isDeleting && (
                      <View style={{ backgroundColor: '#7F1D1D', padding: 14, borderRadius: 12, marginTop: 12 }}>
                        <Text style={{ fontSize: 13, color: '#FEE2E2', fontWeight: '800', marginBottom: 10 }}>
                          ⚠️ {u.deleteProfileConfirm}
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end' }}>
                          <Pressable
                            onPress={() => setDeletingProfileId(null)}
                            accessibilityRole="button"
                            accessibilityLabel={u.cancelBtn}
                            style={{ backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 16, minHeight: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                          >
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '800' }}>{u.cancelBtn}</Text>
                          </Pressable>
                          <Pressable
                            onPress={() => confirmDeleteProfile(p.id)}
                            accessibilityRole="button"
                            accessibilityLabel={u.confirmDeleteBtn}
                            style={{ backgroundColor: '#DC2626', paddingHorizontal: 16, minHeight: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                          >
                            <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '900' }}>{u.confirmDeleteBtn}</Text>
                          </Pressable>
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}

              {/* Add Sibling Button (if < 4 profiles) */}
              {profiles.length < 4 ? (
                <Pressable
                  onPress={() => {
                    setIsAddingProfile(true);
                    setDeletingProfileId(null);
                    setNewGender('prefer-not-to-say');
                    setGuardianConsent(false);
                  }}
                  accessibilityRole="button"
                  accessibilityLabel={u.addLearnerBtn}
                  style={({ pressed }) => ({
                    minHeight: 52,
                    backgroundColor: c.bgCard,
                    borderColor: c.lightBlue,
                    borderWidth: 1.5,
                    borderStyle: 'dashed',
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: pressed ? 0.8 : 1,
                  })}
                >
                  <Text style={{ fontSize: 16, fontWeight: '900', color: c.lightBlue }}>
                    {u.addLearnerBtn}
                  </Text>
                </Pressable>
              ) : (
                <View style={{ backgroundColor: c.bgElevated, padding: 12, borderRadius: 12, alignItems: 'center' }}>
                  <Text style={{ fontSize: 13, color: c.textMuted, fontWeight: '700' }}>
                    ℹ️ {u.maxProfilesNotice}
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Dismiss button if active profile exists (when opened from header) */}
          {activeProfile && !isAddingProfile && (
            <Pressable
              onPress={() => setShowProfileModal(false)}
              accessibilityRole="button"
              accessibilityLabel={u.backToLearning}
              style={{
                minHeight: 48,
                paddingHorizontal: 20,
                backgroundColor: c.bgElevated,
                borderWidth: 1,
                borderColor: c.border,
                borderRadius: 14,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '800', color: c.textPrimary }}>
                {u.backToLearning}
              </Text>
            </Pressable>
          )}
        </ScrollView>
      </View>
    );
  }

  // ── ROOT LAYOUT (Smooth Scroll on Web & Mobile) ───────────────────────────
  const showHeader = top.p !== 'welcome';
  const navLabel = (en: string, st: string) => settings.lang === 'both' ? `${st}\n${en}` : L(en, st);

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      {Platform.OS !== 'web' && <StatusBar barStyle={isLight ? 'dark-content' : 'light-content'} />}

      {showHeader && (
        <View style={[st.header, { backgroundColor: '#1E3A8A', borderBottomColor: '#F4D35E', borderBottomWidth: 5, shadowColor: c.shadow, elevation: 3 }]}>
        <View style={{ width: '100%', maxWidth: 1140, alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
          {nav.length > 1 ? (
            <Pressable onPress={back} style={st.headerBtn}>
              <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: '900' }}>←</Text>
            </Pressable>
          ) : (
            <View style={st.headerBtn}>
              <Text style={{ fontSize: 20 }}>🇱🇸</Text>
            </View>
          )}

          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: fs(15), fontWeight: '900', color: '#fff', letterSpacing: 0.3 }}>
              Moshoeshoe II Hub
            </Text>
            {activeProfile ? (
              <Pressable
                onPress={() => { setShowProfileModal(true); setIsAddingProfile(false); setDeletingProfileId(null); }}
                style={({ pressed }) => ({
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  marginTop: 2,
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  borderRadius: 12,
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderWidth: 1,
                  borderColor: activeProfile.color,
                  opacity: pressed ? 0.75 : 1,
                })}
              >
                <Text style={{ fontSize: 13 }}>{activeProfile.avatar}</Text>
                <Text numberOfLines={1} style={{ fontSize: fs(11), fontWeight: '900', color: '#FFFFFF', maxWidth: 120 }}>
                  {activeProfile.nickname} {activeProfile.role === 'teacher' ? '(Teacher)' : `(Gr.${activeProfile.grade})`}
                </Text>
                <Text style={{ fontSize: 9, color: '#EAF1FF' }}>▾</Text>
              </Pressable>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: c.green }} />
                <Text style={{ fontSize: fs(9), color: '#EAF1FF', fontWeight: '800', letterSpacing: 0.8 }}>
                  {L('100% OFFLINE · READY TO LEARN', '100% NTLE LE INTHANETE · ITHUTE')}
                </Text>
              </View>
            )}
          </View>

          <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
            {/* Quick One-Click Light / Dark Theme Switcher */}
            <Pressable
              onPress={() => setSettings(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }))}
              accessibilityLabel={u.themeToggleTip}
              style={[st.headerBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}
            >
              <Text style={{ fontSize: 18 }}>{isLight ? '🌙' : '☀️'}</Text>
            </Pressable>

            {top.p !== 'home' && (
              <Pressable onPress={() => setNav([{ p: 'home' }])} style={[st.headerBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}>
                <Text style={{ fontSize: 18 }}>🏠</Text>
              </Pressable>
            )}
            <Pressable onPress={() => go({ p: 'set' })} style={[st.headerBtn, { backgroundColor: 'rgba(255,255,255,0.12)' }]}>
              <Text style={{ fontSize: 18 }}>⚙️</Text>
            </Pressable>
          </View>
        </View>
        </View>
      )}

      {/* Main Responsive Scrollable Viewport (Centered on wide web monitors) */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 90,
          backgroundColor: c.bg,
          alignItems: 'center', // Centers content on wide desktop web browsers
        }}
        style={{ flex: 1, backgroundColor: c.bg }}
        showsVerticalScrollIndicator={true}
      >
        <View style={{ width: '100%', maxWidth: 1140, paddingHorizontal: top.p === 'welcome' ? 14 : 18, paddingTop: top.p === 'welcome' ? 14 : 18 }}>
          {body}
        </View>
      </ScrollView>

      {/* Persistent Floating Bottom Dock for 1-Click Access across the entire app */}
      {top.p !== 'welcome' && (
        <View style={[st.bottomDock, { backgroundColor: c.header, borderTopColor: c.border }]}>
          <View style={st.bottomDockInner}>
            {[
              { id: 'home', icon: '🏠', label: navLabel('Home', 'Lapeng'), page: 'home' },
              { id: 'grade', icon: '📚', label: navLabel('Learn', 'Ithute'), page: 'grade' },
              { id: 'help', icon: '💬', label: navLabel('Help', 'Thuso'), page: 'ai' },
              { id: 'library', icon: '📖', label: navLabel('Library', 'Laeborari'), page: 'dict' },
              { id: 'set', icon: '👤', label: navLabel('Me', 'Nna'), page: 'me' },
            ].map(tab => {
              const isActive = activeDockTab === tab.id;
              return (
                <Pressable
                  key={tab.id}
                  onPress={() => setNav([{ p: tab.page }])}
                  accessibilityRole="button"
                  accessibilityLabel={tab.label.replace('\n', ' ')}
                  accessibilityState={{ selected: isActive }}
                  style={st.dockTabBtn}
                >
                  <View style={[st.dockIconWrap, isActive && { backgroundColor: c.lightBlueSoft }]}>
                    <Text style={{ fontSize: 20 }}>{tab.icon}</Text>
                  </View>
                  <Text numberOfLines={2} style={[st.dockTabLabel, { color: isActive ? c.lightBlue : c.textMuted, fontSize: settings.lang === 'both' ? 10 : 13, lineHeight: 14, fontWeight: isActive ? '900' : '600' }]}>
                    {tab.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}

export default function App() {
  return (
    <RootErrorBoundary>
      <MainApp />
    </RootErrorBoundary>
  );
}

// ─── STYLESHEET ────────────────────────────────────────────────────────────────
const st = StyleSheet.create({
  // Cards & Panels
  card: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },
  textCard: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
  },
  lessonHeader: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  pageBanner: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 8,
  },

  // Welcome Screen Responsive Components
  welcomeHeroCard: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1.5,
    marginBottom: 12,
  },
  uniformTagBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  freePill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  welcomeContentPanel: {
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 18,
    marginBottom: 16,
  },

  // Metrics
  metricsRow: {
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    paddingVertical: 12,
    marginBottom: 16,
  },
  metricCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Home Screen Components
  homeHeroCard: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    marginBottom: 12,
  },
  homeProgressPill: {
    position: 'absolute',
    top: 14,
    right: 14,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1.5,
  },
  bigCurriculumBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    gap: 12,
    marginBottom: 6,
  },

  // Tool Grid
  toolCardResponsive: {
    minWidth: 280,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 16,
    gap: 14,
  },
  toolCard2: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 16,
    minHeight: 110,
  },
  toolCard3: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
  },
  toolIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  listToolBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },

  // Grade Card
  gradeCard: {
    width: '30.8%',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
  },

  // Subject Card
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderLeftWidth: 5,
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    gap: 14,
  },

  // Lesson Rows
  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    gap: 12,
  },

  // Pillar / Feature Cards
  photoCard: {
    width: 220,
    height: 145,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
  },

  // Quiz & Interactive Options
  filterPill: {
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 24,
    borderWidth: 1.5,
  },
  optRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 8,
    gap: 12,
  },
  optLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedback: {
    marginTop: 10,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  hintBtn: {
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: C.bgInput,
    alignSelf: 'flex-start',
  },

  // Navigation & Buttons
  primaryCtaBtn: {
    padding: 16,
    borderRadius: 18,
  },
  ctaIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaArrowBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  readBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48,
    borderRadius: 14,
    borderWidth: 1.5,
    marginBottom: 14,
  },
  navBtn: {
    flex: 1,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  // Header & Status
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0,
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  headerBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Utility Badges
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    borderWidth: 1.5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 14,
  },
  emptyBox: {
    padding: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    marginVertical: 10,
    alignItems: 'center',
  },
  warningTag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#78350F',
    backgroundColor: '#1C0A00',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
    // Bottom Navigation Dock
  bottomDock: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1.5,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    paddingTop: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomDockInner: {
    width: '100%',
    maxWidth: 1140,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dockTabBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    paddingVertical: 4,
    paddingHorizontal: 4,
    flex: 1,
  },
  dockIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dockBadge: {
    position: 'absolute',
    top: -2,
    right: -4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  dockTabLabel: {
    fontSize: 12,
    marginTop: 2,
    letterSpacing: 0.2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
});
