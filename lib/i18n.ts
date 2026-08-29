export const locales = ['en', 'km'] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    nav: { home: 'Home', about: 'About', team: 'Team', expertise: 'Expertise', projects: 'Projects', contact: 'Contact', connect: "Let's Connect" },
    actions: { viewProfile: 'View Profile', openCv: 'Open CV', cvUnavailable: 'CV not available', viewCaseStudy: 'View case study' },
    common: { language: 'Language', english: 'English', khmer: 'ខ្មែរ', team: 'PNC Team', rotatingShowcase: 'A rotating member showcase' },
  },
  km: {
    nav: { home: 'ទំព័រដើម', about: 'អំពីក្រុម', team: 'ក្រុមការងារ', expertise: 'ជំនាញ', projects: 'គម្រោង', contact: 'ទំនាក់ទំនង', connect: 'ទំនាក់ទំនងជាមួយយើង' },
    actions: { viewProfile: 'មើលប្រវត្តិរូប', openCv: 'បើក CV', cvUnavailable: 'មិនមាន CV', viewCaseStudy: 'មើលព័ត៌មានគម្រោង' },
    common: { language: 'ភាសា', english: 'English', khmer: 'ខ្មែរ', team: 'ក្រុម PNC', rotatingShowcase: 'បង្ហាញសមាជិកជាបន្តបន្ទាប់' },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export const khmerMemberNames: Record<string, string> = {
  'chhea-chhouy': 'ឈយ ឈា',
  'kin-doung': 'ដូង គីន',
  'sokchea-boy': 'ប៊យ សុខជា',
  'bunyoung-hean': 'ហ៊ាន ប៊ុនយ៉ុង',
  'darin-hoy': 'ហូយ ដារិន',
  'leader-din': 'ឌិន លីដ័រ',
  'seang-meng-chheun': 'ឈឿន សៀងម៉េង',
};

export const localizedMemberName = (slug: string, englishName: string, locale: Locale) =>
  locale === 'km' ? khmerMemberNames[slug] || englishName : englishName;
