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

type TeamCardCopy = { role: string; shortRole: string; focus: string };

export const khmerTeamCardCopy: Record<string, TeamCardCopy> = {
  'chhea-chhouy': {
    role: 'អ្នកអភិវឌ្ឍន៍ Full Stack', shortRole: 'Full Stack',
    focus: 'កម្មវិធីវេបដែលអាចពង្រីកបាន ស្វ័យប្រវត្តិកម្មលំហូរការងារ និងការដាក់ឱ្យប្រើប្រាស់លើ Cloud។',
  },
  'kin-doung': {
    role: 'អ្នករៀបចំផែនការ និងអ្នកអភិវឌ្ឍន៍វេប', shortRole: 'ផែនការ និងវេប',
    focus: 'ការរៀបចំផែនការគម្រោង ការសម្របសម្រួលអភិវឌ្ឍន៍វេប និងការប្រគល់ការងារជាក្រុម។',
  },
  'sokchea-boy': {
    role: 'អ្នកអភិវឌ្ឍន៍វេប', shortRole: 'អ្នកអភិវឌ្ឍន៍វេប',
    focus: 'កម្មវិធីវេប REST APIs មូលដ្ឋានទិន្នន័យ និងគុណភាពកម្មវិធីជាក់ស្តែង។',
  },
  'bunyoung-hean': {
    role: 'អ្នកឯកទេសធានាគុណភាព', shortRole: 'អ្នកឯកទេស QA',
    focus: 'ការសាកល្បងមុខងារ ការសាកល្បងឡើងវិញ UAT និងលំហូរផលិតផលដែលអាចទុកចិត្តបាន។',
  },
  'darin-hoy': {
    role: 'អ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតដំបូង', shortRole: 'អ្នកអភិវឌ្ឍន៍កម្រិតដំបូង',
    focus: 'ការអភិវឌ្ឍវេប មូលដ្ឋានកម្មវិធី និងប្រព័ន្ធទិន្នន័យ/IT ជាក់ស្តែង។',
  },
  'leader-din': {
    role: 'អ្នកគ្រប់គ្រង Roaming និង Interconnection កម្រិតដំបូង', shortRole: 'Roaming និង Interconnection',
    focus: 'ប្រតិបត្តិការ Roaming ស្វ័យប្រវត្តិកម្មហេដ្ឋារចនាសម្ព័ន្ធ ការដាក់ឱ្យប្រើប្រាស់ និងប្រព័ន្ធខាងក្នុង។',
  },
  'seang-meng-chheun': {
    role: 'អ្នកអភិវឌ្ឍន៍វេប', shortRole: 'អ្នកអភិវឌ្ឍន៍វេប',
    focus: 'កម្មវិធីវេបដែលឆ្លើយតប APIs មូលដ្ឋានទិន្នន័យ និងបទពិសោធន៍ភ្ជាប់ជាមួយ Telegram។',
  },
};

export const localizedTeamCardCopy = (slug: string, fallback: TeamCardCopy, locale: Locale): TeamCardCopy =>
  locale === 'km' ? khmerTeamCardCopy[slug] || fallback : fallback;

export const khmerProfileSummaries: Record<string, string> = {
  'chhea-chhouy': 'អ្នកអភិវឌ្ឍន៍ Full-stack ដែលចូលចិត្តបង្កើតកម្មវិធីវេបមានប្រសិទ្ធភាព ងាយប្រើ និងសិក្សាឧបករណ៍បច្ចេកវិទ្យាថ្មីៗជាបន្ត។ បទពិសោធន៍របស់គាត់រួមមានប្រព័ន្ធ CRM ការអប់រំ ការគ្រប់គ្រងផ្ទៃក្នុង ស្វ័យប្រវត្តិកម្មលំហូរការងារ ផ្ទាំងរបាយការណ៍ និងការគ្រប់គ្រងសិទ្ធិ។',
  'kin-doung': 'សមាជិកក្រុមនិស្សិត PNC ដែលផ្តោតលើការរៀបចំផែនការ និងការអភិវឌ្ឍវេប។ ប្រវត្តិរូបនេះប្រើតែព័ត៌មានដែលក្រុមបានបញ្ជាក់ និងព័ត៌មានគម្រោងដែលមានស្រាប់។',
  'sokchea-boy': 'អ្នកអភិវឌ្ឍន៍វេប និងអតីតនិស្សិត PNC ដែលមានបទពិសោធន៍ជាក់ស្តែងលើការអភិវឌ្ឍវេប REST APIs មូលដ្ឋានទិន្នន័យ និងការសាកល្បងកម្មវិធី។ គាត់បន្តពង្រឹងជំនាញវិស្វកម្មកម្មវិធី និងការអភិវឌ្ឍកម្មវិធី។',
  'bunyoung-hean': 'អតីតនិស្សិត PNC និងអ្នកឯកទេស QA ពេញម៉ោង ដែលមានបទពិសោធន៍សាកល្បងប្រព័ន្ធ POS ការគ្រប់គ្រងស្តុក និង KIOSK។ ការងាររបស់គាត់រួមមានការបង្កើតករណីសាកល្បង រកកំហុស ផ្ទៀងផ្ទាត់ការកែតម្រូវ និងសហការជាមួយក្រុមអភិវឌ្ឍន៍។',
  'darin-hoy': 'អ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតដំបូង ដែលមានបទពិសោធន៍ជាក់ស្តែងលើ frontend backend មូលដ្ឋានទិន្នន័យ និងការគាំទ្រ IT ក្នុងកម្មសិក្សា។ ការងារគម្រោងរបស់គាត់គ្របដណ្តប់លើចំណុចប្រទាក់វេប ស្វ័យប្រវត្តិកម្ម Python កម្មវិធី JavaScript និងប្រព័ន្ធគ្រប់គ្រង។',
  'leader-din': 'អ្នកគ្រប់គ្រង Roaming និង Interconnection កម្រិតដំបូង ដែលផ្តោតលើស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ ហេដ្ឋារចនាសម្ព័ន្ធ និងប្រព័ន្ធខាងក្នុង។ គាត់មានបទពិសោធន៍លើ CRM ការដំណើរការ TAP ផ្ទាំងព័ត៌មាន និងការដាក់ឱ្យប្រើប្រាស់ CI/CD។',
  'seang-meng-chheun': 'អ្នកអភិវឌ្ឍន៍វេបដែលមានបទពិសោធន៍ Full-stack លើ Python, Vue 3 និង MySQL។ គាត់បង្កើតកម្មវិធី frontend ដែលឆ្លើយតប backend APIs និងដំណោះស្រាយផ្អែកលើមូលដ្ឋានទិន្នន័យ ដោយផ្តោតលើកូដងាយថែទាំ និងបទពិសោធន៍អ្នកប្រើប្រាស់ដែលអាចទុកចិត្តបាន។',
};

type ProjectCardCopy = { title: string; category: string; status: string; period: string; summary: string };

export const khmerProjectCardCopy: Record<string, ProjectCardCopy> = {
  'crm-and-internal-systems': {
    title: 'ប្រព័ន្ធ CRM និងគ្រប់គ្រងផ្ទៃក្នុង', category: 'កម្មវិធី', status: 'បទពិសោធន៍វិជ្ជាជីវៈ', period: '២០២៥ — ២០២៦',
    summary: 'បណ្តុំប្រព័ន្ធ CRM ការអប់រំ និងការគ្រប់គ្រងផ្ទៃក្នុង ដែលមានស្វ័យប្រវត្តិកម្មលំហូរការងារ ផ្ទាំងរបាយការណ៍ និងការគ្រប់គ្រងសិទ្ធិ។',
  },
  'pos-inventory-kiosk-qa': {
    title: 'ការធានាគុណភាព POS ស្តុក និង KIOSK', category: 'QA', status: 'បទពិសោធន៍វិជ្ជាជីវៈ', period: '២០២៦',
    summary: 'ការធានាគុណភាពដោយដៃពីដើមដល់ចប់ សម្រាប់ POS លក់រាយ ការគ្រប់គ្រងស្តុក និងលំហូរ KIOSK ស្វ័យសេវា។',
  },
  'farm-management-system': {
    title: 'ប្រព័ន្ធគ្រប់គ្រងកសិដ្ឋាន', category: 'វេប', status: 'គម្រោងសិក្សា', period: 'កក្កដា — សីហា ២០២៥',
    summary: 'វេទិកាគ្រប់គ្រងកសិដ្ឋាន សម្រាប់កត់ត្រាប្រភេទដំណាំ កាលបរិច្ឆេទដាំ ដំណាក់កាលលូតលាស់ និងកំណត់ត្រាប្រតិបត្តិការ។',
  },
  'leave-management-system': {
    title: 'ប្រព័ន្ធគ្រប់គ្រងការឈប់សម្រាក', category: 'វេប', status: 'គម្រោងសិក្សា', period: '២០២៥',
    summary: 'គម្រោងសិស្សសម្រាប់សំណើឈប់សម្រាក ការតាមដានស្ថានភាព សិទ្ធិ និងភាពច្បាស់លាស់ក្នុងប្រតិបត្តិការ។',
  },
  'telegram-mini-app': {
    title: 'Telegram Mini App និង Bot', category: 'វេប', status: 'បទពិសោធន៍វិជ្ជាជីវៈ', period: '២០២៦',
    summary: 'បទពិសោធន៍វេបភ្ជាប់ Telegram ដែលមានការផ្ទៀងផ្ទាត់ Bot APIs វគ្គអ្នកប្រើប្រាស់ និងការដាក់ឱ្យប្រើប្រាស់លើ Cloud។',
  },
  'roaming-automation-platform': {
    title: 'ផ្ទាំងគ្រប់គ្រង Roaming ស្វ័យប្រវត្តិ', category: 'ទូរគមនាគមន៍', status: 'បទពិសោធន៍វិជ្ជាជីវៈ', period: 'តួនាទីបច្ចុប្បន្ន',
    summary: 'ស្វ័យប្រវត្តិកម្មប្រតិបត្តិការ និងផ្ទាំងព័ត៌មាន សម្រាប់លំហូរការងារ roaming/interconnection ការដំណើរការ TAP និងហេដ្ឋារចនាសម្ព័ន្ធដាក់ឱ្យប្រើប្រាស់។',
  },
  'cambodia-airports-it-and-data': {
    title: 'បទពិសោធន៍ IT និងទិន្នន័យនៅ Cambodia Airports', category: 'ទិន្នន័យ', status: 'បទពិសោធន៍កម្មសិក្សា', period: '២០២៥',
    summary: 'បទពិសោធន៍កម្មសិក្សាជាក់ស្តែងលើការគាំទ្រ IT មូលដ្ឋានទិន្នន័យ GLPI ការគ្រប់គ្រងសិទ្ធិចូលប្រើ ការបញ្ចូលទិន្នន័យ និងឧបករណ៍វិភាគ។',
  },
};

export const localizedProjectCardCopy = (slug: string, fallback: ProjectCardCopy, locale: Locale): ProjectCardCopy =>
  locale === 'km' ? khmerProjectCardCopy[slug] || fallback : fallback;
