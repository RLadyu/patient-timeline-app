let idCounter = 0;

function nextId(prefix) {
  return `${prefix}-${++idCounter}`;
}

const state = {
  temps: [
    { id: nextId('temp'), date: '2023-01-05', time: '08:30', value: '39.3', comment: 'Поступление, лихорадка' },
    { id: nextId('temp'), date: '2023-01-07', time: '07:50', value: '39.8', comment: 'Гипертермия' },
    { id: nextId('temp'), date: '2023-01-12', time: '09:10', value: '38.4', comment: 'Старт терапии' },
    { id: nextId('temp'), date: '2023-01-18', time: '10:00', value: '37.6', comment: 'Положительная динамика' },
    { id: nextId('temp'), date: '2023-01-26', time: '08:40', value: '37.0', comment: 'Субфебрилитет' },
    { id: nextId('temp'), date: '2023-02-05', time: '09:15', value: '36.8', comment: 'Нормализация' },
    { id: nextId('temp'), date: '2023-03-01', time: '08:55', value: '36.6', comment: 'Устойчивая ремиссия' }
  ],
  therapy: [
    {
      id: nextId('therapy'),
      startDate: '2023-01-06',
      endDate: '2023-06-30',
      comment:
        'Комбинированная схема для пациента с ШЛУ-туберкулёзом: коррекция доз выполнялась по переносимости, мониторинг еженедельно.',
      medications: [
        {
          id: nextId('med'),
          name: 'Бедаквилин',
          dosage: '400 мг/сут',
          note: 'Интенсивная фаза с ежедневным контролем QTc и электролитов.',
          startDate: '2023-01-06',
          endDate: '2023-01-19',
          frequencyCount: 1,
          frequencyUnit: 'perDay',
          weekdays: []
        },
        {
          id: nextId('med'),
          name: 'Бедаквилин',
          dosage: '200 мг 3 р./нед.',
          note: 'Поддерживающая фаза с 20.01, приём по понедельникам, средам и пятницам.',
          startDate: '2023-01-20',
          endDate: '2023-06-30',
          frequencyCount: 3,
          frequencyUnit: 'perWeek',
          weekdays: [0, 2, 4]
        },
        {
          id: nextId('med'),
          name: 'Линезолид',
          dosage: '600 мг 1 р./сут',
          note: 'Коррекция при падении тромбоцитов, контроль крови еженедельно.',
          startDate: '2023-01-06',
          endDate: '2023-06-30',
          frequencyCount: 1,
          frequencyUnit: 'perDay',
          weekdays: []
        },
        {
          id: nextId('med'),
          name: 'Претоманид',
          dosage: '200 мг 1 р./сут',
          note: 'Назначен в составе базовой схемы с первого дня госпитализации.',
          startDate: '2023-01-06',
          endDate: '2023-06-30',
          frequencyCount: 1,
          frequencyUnit: 'perDay',
          weekdays: []
        },
        {
          id: nextId('med'),
          name: 'Циклосерин',
          dosage: '250 мг 2 р./сут',
          note: 'Пиридоксин 50 мг/сут для профилактики нейротоксичности.',
          startDate: '2023-01-06',
          endDate: '2023-06-30',
          frequencyCount: 2,
          frequencyUnit: 'perDay',
          weekdays: []
        }
      ]
    }
  ],
  support: [
    {
      id: nextId('support'),
      startDate: '2023-01-06',
      endDate: '2023-03-31',
      name: 'Пиридоксин',
      dosage: '50 мг/сут',
      note: 'Профилактика нейротоксичности на фоне циклосерина.',
      isFlagged: false
    },
    {
      id: nextId('support'),
      startDate: '2023-01-20',
      endDate: '2023-03-20',
      name: 'Урсодезоксихолевая кислота',
      dosage: '250 мг 2 р./сут',
      note: 'Гепатопротекция при росте трансаминаз.',
      isFlagged: true
    }
  ],
  supportiveTherapy: [
    {
      id: nextId('support'),
      startDate: '2023-01-06',
      endDate: '2023-03-31',
      name: 'Пиридоксин',
      dosage: '50 мг/сут',
      note: 'Профилактика нейротоксичности на фоне циклосерина.',
      isFlagged: false
    },
    {
      id: nextId('support'),
      startDate: '2023-01-20',
      endDate: '2023-03-20',
      name: 'Урсодезоксихолевая кислота',
      dosage: '250 мг 2 р./сут',
      note: 'Гепатопротекция при росте трансаминаз.',
      isFlagged: true
    }
  ],
  endoscopy: [
    {
      id: nextId('endo'),
      date: '2023-02-12',
      time: '11:30',
      procedures: [
        {
          type: 'diagnostic',
          actions: [
            { key: 'aspiration' },
            { key: 'bal', details: { volume: '120' } },
            { key: 'brushBiopsy' }
          ],
          complications: [],
          isFlagged: false
        },
        {
          type: 'therapeutic',
          actions: [
            { key: 'removeGranulations' },
            { key: 'laser' },
            {
              key: 'drugAdministration',
              details: { drugName: 'Будесонид', drugVolume: '2' }
            }
          ],
          complications: [],
          isFlagged: false
        }
      ],
      comment: 'Санация правого верхнедолевого бронха, контроль через 2 недели.',
      isFlagged: false
    },
    {
      id: nextId('endo'),
      date: '2023-03-18',
      time: '14:10',
      procedures: [
        {
          type: 'therapeutic',
          actions: [
            { key: 'stent' },
            { key: 'kbb', details: { kbbSize: '6.0' } },
            {
              key: 'sanitation',
              details: { solution: 'Изотонический раствор + местный анестетик' }
            }
          ],
          complications: ['Бронхоспазм'],
          isFlagged: true
        }
      ],
      comment:
        'Расположение стента скорректировано, рекомендована консультация торакального хирурга и контроль через 10 дней.',
      isFlagged: true
    }
  ],
  neuro: [
    {
      id: nextId('neuro'),
      date: '2023-01-07',
      status: 'Головные боли, фотобоязнь',
      comment: 'На фоне лихорадки'
    },
    {
      id: nextId('neuro'),
      date: '2023-01-18',
      status: 'Сознание ясное',
      comment: 'Устранена интоксикация'
    },
    {
      id: nextId('neuro'),
      date: '2023-02-10',
      status: 'Настроение стабильно',
      comment: 'Побочных реакций нет'
    }
  ],
  liver: [
    {
      id: nextId('liver'),
      startDate: '2023-01-20',
      endDate: '2023-02-10',
      status: 'Рост трансаминаз'
    },
    {
      id: nextId('liver'),
      startDate: '2023-02-10',
      endDate: '2023-03-05',
      status: 'Коррекция доз и гепатопротекторы'
    },
    {
      id: nextId('liver'),
      startDate: '2023-03-05',
      endDate: '',
      status: 'Нормализация показателей'
    }
  ],
  labDiagnostics: [
    {
      id: nextId('lab'),
      date: '2023-01-05',
      time: '10:15',
      testType: 'Микроскопия',
      result: 'КУБ+++'
    },
    {
      id: nextId('lab'),
      date: '2023-01-15',
      time: '09:20',
      testType: 'МГМ',
      result: 'Определена устойчивость к H и R'
    },
    {
      id: nextId('lab'),
      date: '2023-02-10',
      time: '12:05',
      testType: 'Посев на ППС',
      result: 'Рост M. tuberculosis, ШЛУ'
    },
    {
      id: nextId('lab'),
      date: '2023-03-10',
      time: '11:20',
      testType: 'Посев на ЖПС',
      result: 'Отрицательный рост'
    }
  ],
  surgery: [
    {
      id: nextId('surgery'),
      parameterId: 'surgery_pleura',
      date: '2023-02-05',
      time: '16:20',
      procedureType: 'дренирование плевральной полости',
      side: 'справа',
      volumeEvacuated: '450',
      drainageType: 'Бюлау, активная аспирация',
      complications: [],
      comment: 'Дренирование, контроль гемостаза',
      isFlagged: false
    }
  ],
  radiology: [
    {
      id: nextId('radiology'),
      parameterId: 'rad_ct',
      date: '2023-02-12',
      time: '08:45',
      contrast: 'да',
      cavitySizeMm: '32',
      infiltration: 'умеренная',
      dissemination: 'да',
      pleuralEffusion: 'нет',
      conclusion: 'Положительная рентгенологическая динамика',
      dynamics: 'улучшение',
      comment: 'Положительная рентгенологическая динамика',
      isFlagged: false
    }
  ],
  events: [
    {
      id: nextId('event'),
      date: '2023-01-05',
      time: '09:00',
      title: 'Поступление в стационар',
      comment: 'Диагноз: туберкулёз с широкой лекарственной устойчивостью'
    },
    {
      id: nextId('event'),
      date: '2023-01-08',
      time: '11:10',
      title: 'Консиллиум фтизиатров',
      comment: 'Утверждена схема ШЛУ-терапии'
    },
    {
      id: nextId('event'),
      date: '2023-01-20',
      time: '15:30',
      title: 'Перевод в ОРИТ',
      comment: 'Тяжёлая дыхательная недостаточность'
    },
    {
      id: nextId('event'),
      date: '2023-02-12',
      time: '08:45',
      title: 'Динамическая КТ органов грудной клетки',
      comment: 'Положительная рентгенологическая динамика'
    },
    {
      id: nextId('event'),
      date: '2023-03-15',
      time: '10:30',
      title: 'Подготовка к выписке',
      comment: 'Продолжение терапии амбулаторно'
    },
    {
      id: nextId('event'),
      date: '2023-06-30',
      time: '09:15',
      title: 'Выписка под наблюдение',
      comment: 'Клиническая стабилизация, переход на амбулаторный этап лечения'
    }
  ],
  timelineDates: [],
  layout: {
    stepX: 50,
    trackGap: 40,
    groupGap: 24,
    groupGapOverride: {
      clinical: null,
      therapy: null,
      endoscopy: null,
      surgery: null,
      radiology: null,
      diagnostics: null,
      events: null
    },
    trackGapOverride: {},
    trackHeightOverride: {}
  }
};

const MS_IN_DAY = 24 * 60 * 60 * 1000;
const WEEKDAY_LABELS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const DEFAULT_WEEKDAY_ORDER = [0, 2, 4, 1, 3, 5, 6];
const numberFormatter = new Intl.NumberFormat('ru-RU');
const MIN_FONT_SIZE_PX = 12;
const MAX_FONT_SIZE_PX = 24;

const COLORS = {
  accent: '#2563eb',
  therapy: '#16a34a',
  support: '#0f172a',
  endoscopy: '#1d4ed8',
  surgery: '#a855f7',
  radiology: '#0284c7',
  neuro: '#8b5cf6',
  liver: '#f97316',
  lab: '#0ea5e9',
  event: '#111827',
  muted: '#6b7280',
  border: '#d7dbe7'
};

const SUPPORT_FILL_COLOR = 'rgba(255, 255, 255, 0.95)';
const SUPPORT_OUTLINE_COLOR = '#111827';
const ENDOSCOPY_FILL_COLOR = 'rgba(191, 219, 254, 0.95)';
const ENDOSCOPY_TITLE_COLOR = '#000000';
const ENDOSCOPY_TEXT_COLOR = '#000000';

const DETAIL_TYPE_COLORS = {
  'Температура': COLORS.accent,
  'Лекарственная терапия': COLORS.therapy,
  'Терапия сопровождения': SUPPORT_OUTLINE_COLOR,
  'Эндоскопическая процедура': COLORS.endoscopy,
  'Хирургия': COLORS.surgery,
  'Рентгенология': COLORS.radiology,
  'Неврологический статус': COLORS.neuro,
  'ЛПП': COLORS.liver,
  'Лабораторная диагностика': COLORS.lab,
  'Событие/диагноз': COLORS.event
};

const SVG_STYLE_TEXT = `
  .track-label{font-size:calc(13px * var(--font-scale));font-weight:600;font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .grid-line{stroke:${COLORS.border};stroke-dasharray:6 6;}
  .axis-line{stroke:${COLORS.muted};stroke-width:1.5;}
  .axis-tick{fill:#000000;}
  .axis-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .temperature-line{fill:none;stroke:${COLORS.accent};stroke-width:2.5;}
  .temperature-point{fill:#ffffff;stroke:${COLORS.accent};stroke-width:2;}
  .temperature-value{font-size:calc(12px * var(--font-scale));font-weight:600;font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .temperature-comment{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .therapy-bar{fill-opacity:1;}
  .therapy-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;font-weight:600;}
  .support-bar{fill-opacity:1;}
  .support-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;font-weight:600;}
  .support-dose-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;font-weight:600;}
  .endoscopy-title{font-size:calc(12px * var(--font-scale));font-weight:700;font-family:'Inter','Segoe UI',sans-serif;fill:${ENDOSCOPY_TITLE_COLOR};}
  .endoscopy-intervention{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:${ENDOSCOPY_TEXT_COLOR};}
  .endoscopy-complication{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:${ENDOSCOPY_TEXT_COLOR};}
  .event-card{fill:rgba(17,24,39,0.06);stroke:${COLORS.event};stroke-width:1.4;}
  .lab-card{fill:rgba(14,165,233,0.12);stroke:${COLORS.lab};stroke-width:1.4;}
  .neuro-card{fill:rgba(139,92,246,0.12);stroke:${COLORS.neuro};stroke-width:1.4;}
  .track-resize-handle{fill:#ffffff;stroke:${COLORS.muted};stroke-width:1.5;cursor:ns-resize;}
  .surgery-marker{fill:${COLORS.surgery};stroke:#ffffff;stroke-width:2;}
  .surgery-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .radiology-marker{fill:${COLORS.radiology};stroke:#ffffff;stroke-width:2;}
  .radiology-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .neuro-marker{fill:${COLORS.neuro};stroke:#ffffff;stroke-width:2;}
  .neuro-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .liver-bar{fill:${COLORS.liver};opacity:0.9;}
  .liver-label{font-size:calc(12px * var(--font-scale));font-weight:600;font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .lab-marker{fill:${COLORS.lab};stroke:#ffffff;stroke-width:2;}
  .lab-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .event-marker{fill:${COLORS.event};}
  .event-label{font-size:calc(12px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .event-icon{font-size:calc(14px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;cursor:pointer;}
  .legend-group{font-size:calc(13px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;pointer-events:none;}
  .legend-label{font-size:calc(13px * var(--font-scale));font-family:'Inter','Segoe UI',sans-serif;fill:#000000;}
  .endoscopy-date-marker{fill:${COLORS.endoscopy};stroke:#ffffff;stroke-width:2;}
  .endoscopy-date-connector{stroke:${COLORS.endoscopy};stroke-width:2;stroke-linecap:round;}
  .is-flagged-shape{stroke:#dc2626;stroke-width:2.5;stroke-dasharray:6 4;}
  .is-flagged-text{fill:#000000;font-weight:700;}
  .is-flagged-line{stroke:#dc2626;stroke-width:2.5;stroke-dasharray:4 4;}
  .is-selected{filter:drop-shadow(0 0 4px rgba(37,99,235,0.35));}
`;

const LEGEND_ITEMS = [
  { key: 'temperature', label: 'Температура' },
  { key: 'therapy', label: 'Лекарственная терапия (ЛТ)' },
  { key: 'support', label: 'Терапия сопровождения' },
  { key: 'endoscopy', label: 'Эндоскопическая процедура' },
  { key: 'surgery', label: 'Хирургия' },
  { key: 'radiology', label: 'Рентгенология' },
  { key: 'neuro', label: 'Неврологический статус' },
  { key: 'liver', label: 'ЛПП' },
  { key: 'lab', label: 'Лабораторная диагностика' },
  { key: 'event', label: 'События/диагнозы' }
];

const EVENT_ICON_LIBRARY = [
  {
    key: 'diagnostic',
    title: 'Диагностика',
    keywords: ['кт', 'томограф', 'рентген', 'диагноз', 'скрининг', 'оценка', 'контроль'],
    icons: [
      { key: 'scan', label: 'Визуализация/КТ', glyph: '🖼️' },
      { key: 'stethoscope', label: 'Осмотр врача', glyph: '🩺' },
      { key: 'microscope', label: 'Лаборатория', glyph: '🔬' },
      { key: 'report', label: 'Отчёт/консилиум', glyph: '📝' }
    ]
  },
  {
    key: 'respiratory',
    title: 'Дыхательная система',
    keywords: ['кашл', 'кровохарк', 'бронх', 'легк', 'дых', 'спазм', 'адхез'],
    icons: [
      { key: 'lungs', label: 'Лёгкие/бронхи', glyph: '🫁' },
      { key: 'oxygen', label: 'Дыхательная поддержка', glyph: '🫧' },
      { key: 'drop', label: 'Гемоптизис/кровохарканье', glyph: '💧' }
    ]
  },
  {
    key: 'therapy',
    title: 'Терапия и процедуры',
    keywords: ['терап', 'инфуз', 'назнач', 'курс', 'процед', 'операц', 'манип'],
    icons: [
      { key: 'pill', label: 'Медикаменты', glyph: '💊' },
      { key: 'syringe', label: 'Инъекции', glyph: '💉' },
      { key: 'operation', label: 'Процедура', glyph: '🛠️' },
      { key: 'rehab', label: 'Реабилитация', glyph: '🤸' }
    ]
  },
  {
    key: 'status',
    title: 'Состояние',
    keywords: ['перевод', 'орит', 'обостр', 'улучш', 'стаб', 'выпис', 'поступ'],
    icons: [
      { key: 'alert', label: 'Обострение/тревога', glyph: '⚠️' },
      { key: 'icu', label: 'ОРИТ/реанимация', glyph: '🏥' },
      { key: 'home', label: 'Выписка/домой', glyph: '🏡' },
      { key: 'check', label: 'Улучшение', glyph: '✅' }
    ]
  },
  {
    key: 'other',
    title: 'Прочее',
    keywords: [],
    icons: [
      { key: 'flag', label: 'Важное событие', glyph: '🚩' },
      { key: 'calendar', label: 'Ключевая дата', glyph: '📅' },
      { key: 'note', label: 'Заметка', glyph: '🗒️' }
    ]
  }
];

const EVENT_ICON_MAP = new Map();
EVENT_ICON_LIBRARY.forEach((group) => {
  group.icons.forEach((icon) => {
    EVENT_ICON_MAP.set(icon.key, { ...icon, groupKey: group.key, groupTitle: group.title });
  });
});

const EVENT_ICON_HINTS = [
  { iconKey: 'icu', patterns: ['орит', 'реаним', 'интенсив'] },
  { iconKey: 'home', patterns: ['выпис', 'домой'] },
  { iconKey: 'alert', patterns: ['обостр', 'шок', 'ухудш', 'крит'] },
  { iconKey: 'check', patterns: ['улучш', 'ремис', 'стаб'] },
  { iconKey: 'pill', patterns: ['назнач', 'терап', 'лекар', 'препарат'] },
  { iconKey: 'syringe', patterns: ['инъек', 'в/в', 'в/м'] },
  { iconKey: 'operation', patterns: ['процед', 'операц', 'манип'] },
  { iconKey: 'rehab', patterns: ['реабил', 'физио', 'лфк'] },
  { iconKey: 'lungs', patterns: ['кашл', 'бронх', 'легк', 'дых'] },
  { iconKey: 'oxygen', patterns: ['оксиген', 'сатурац', 'кислород'] },
  { iconKey: 'drop', patterns: ['кровохарк', 'гемоптиз'] },
  { iconKey: 'microscope', patterns: ['микр', 'бактер', 'посев', 'анализ'] },
  { iconKey: 'scan', patterns: ['кт', 'мрт', 'рентген', 'скан'] },
  { iconKey: 'stethoscope', patterns: ['осмотр', 'консилиум', 'визит'] },
  { iconKey: 'report', patterns: ['заключ', 'протокол', 'отч'] },
  { iconKey: 'flag', patterns: ['важно', 'критич'] }
];

const THERAPY_MEDICATIONS = [
  'Бедаквилин',
  'Линезолид',
  'Моксифлоксацин',
  'Левофлоксацин',
  'Клофазимин',
  'Циклосерин',
  'Теризидон',
  'Деламанид',
  'Претоманид',
  'Этамбутол',
  'Пиразинамид',
  'Этамид',
  'Протионамид',
  'ПАСК (парааминосалициловая к-та)',
  'Капреомицин',
  'Канамицин',
  'Амикацин',
  'Стрептомицин',
  'Изониазид',
  'Рифампицин',
  'Рифапентин',
  'Рифабутин',
  'Кларитромицин',
  'Амоксициллин/клавуланат',
  'Имипенем/циластатин',
  'Меропенем',
  'Клавулановая кислота'
];

const THERAPY_COLOR_MAP = {
  Бедаквилин: 'rgb(102, 0, 204)',
  Линезолид: 'rgb(0, 153, 153)',
  Моксифлоксацин: 'rgb(255, 102, 0)',
  Левофлоксацин: 'rgb(0, 102, 204)',
  Клофазимин: 'rgb(204, 0, 0)',
  Циклосерин: 'rgb(255, 204, 0)',
  Теризидон: 'rgb(0, 204, 102)',
  Деламанид: 'rgb(255, 51, 153)',
  Деликманид: 'rgb(255, 51, 153)',
  Претоманид: 'rgb(102, 204, 0)',
  Этамбутол: 'rgb(0, 153, 255)',
  Пиразинамид: 'rgb(255, 153, 51)',
  Этамид: 'rgb(153, 102, 204)',
  Протионамид: 'rgb(204, 102, 0)',
  'ПАСК (парааминосалициловая к-та)': 'rgb(255, 51, 51)',
  Капреомицин: 'rgb(51, 153, 255)',
  Канамицин: 'rgb(0, 204, 204)',
  Амикацин: 'rgb(255, 204, 102)',
  Стрептомицин: 'rgb(153, 204, 51)',
  Изониазид: 'rgb(51, 102, 255)',
  Рифампицин: 'rgb(204, 51, 0)',
  Рифапентин: 'rgb(255, 102, 102)',
  Рифабутин: 'rgb(153, 51, 204)',
  Кларитромицин: 'rgb(51, 204, 153)',
  'Амоксициллин/клавуланат': 'rgb(255, 153, 0)',
  'Имипенем/циластатин': 'rgb(0, 153, 102)',
  Меропенем: 'rgb(102, 153, 255)',
  'Клавулановая кислота': 'rgb(204, 153, 0)'
};

function getTherapyBaseColor(name) {
  return THERAPY_COLOR_MAP[name] || COLORS.therapy;
}

const ENDOSCOPY_TYPE_OPTIONS = [
  { value: 'diagnostic', label: 'Диагностическая бронхоскопия' },
  { value: 'therapeutic', label: 'Терапевтическая бронхоскопия' }
];

const ENDOSCOPY_ACTION_CONFIG = {
  diagnostic: [
    { value: 'aspiration', label: 'Аспирация секрета' },
    {
      value: 'bal',
      label: 'Бронхоальвеолярный лаваж (БАЛ)',
      extras: [{ key: 'volume', label: 'Объём БАЛ', placeholder: 'Например: 120', suffix: ' мл' }]
    },
    { value: 'brushBiopsy', label: 'Щёточная биопсия' },
    { value: 'forcepsBiopsy', label: 'Форцепс-биопсия' },
    { value: 'segmentCatheterization', label: 'Катетеризация сегмента' },
    { value: 'tbas', label: 'ТБАС (трансбронхиальная аспирационная биопсия)' },
    { value: 'tbbl', label: 'ТББЛ (трансбронхиальная биопсия лёгкого)' }
  ],
  therapeutic: [
    { value: 'aspiration', label: 'Аспирация секрета' },
    {
      value: 'sanitation',
      label: 'Санация растворами',
      extras: [{ key: 'solution', label: 'Использованные растворы', placeholder: 'Например: мирамистин 0,01%' }]
    },
    { value: 'removeGranulations', label: 'Удаление грануляций' },
    { value: 'foreignBody', label: 'Удаление инородного тела' },
    {
      value: 'dilationMechanical',
      label: 'Дилатация (механическая)',
      extras: [{ key: 'instrumentDiameter', label: 'Диаметр инструмента', placeholder: 'Например: 8', suffix: ' мм' }]
    },
    {
      value: 'dilationBalloon',
      label: 'Дилатация (баллонная)',
      extras: [{ key: 'balloonSize', label: 'Размер баллона', placeholder: 'Например: 10', suffix: ' мм' }]
    },
    {
      value: 'bougienage',
      label: 'Бужирование',
      extras: [{ key: 'bougieDiameter', label: 'Диаметр бужа', placeholder: 'Например: 9', suffix: ' мм' }]
    },
    { value: 'laser', label: 'Применение высокоэнергетического лазера' },
    { value: 'electrocoagulation', label: 'Электрокоагуляция' },
    { value: 'cryodestruction', label: 'Криодеструкция' },
    {
      value: 'drugAdministration',
      label: 'Введение препаратов',
      extras: [
        { key: 'drugName', label: 'Название препарата', placeholder: 'Например: будесонид' },
        { key: 'drugVolume', label: 'Объём', placeholder: 'Например: 2', suffix: ' мл' }
      ]
    },
    { value: 'stent', label: 'Установка стента' },
    {
      value: 'kbb',
      label: 'Установка КББ',
      extras: [{ key: 'kbbSize', label: 'Размер КББ', placeholder: 'Например: 7', suffix: ' мм' }]
    }
  ]
};

const ENDOSCOPY_COMPLICATION_OPTIONS = ['Кровотечение', 'Бронхоспазм', 'Гипоксия', 'Аритмия'];

const ENDOSCOPY_TYPE_SHORT_LABELS = {
  diagnostic: 'Диагн. бронхоскопия',
  therapeutic: 'Терап. бронхоскопия'
};

const ENDOSCOPY_ACTION_SHORT_LABELS = {
  aspiration: 'Аспир. секр.',
  bal: 'БАЛ',
  brushBiopsy: 'Щёт. биопсия',
  forcepsBiopsy: 'Форц. биопсия',
  segmentCatheterization: 'Катетеризация сегм.',
  tbas: 'ТБАС',
  tbbl: 'ТББЛ',
  sanitation: 'Санация',
  removeGranulations: 'Удал. грануляций',
  foreignBody: 'Удал. инородного тела',
  dilationMechanical: 'Дилатация (мех.)',
  dilationBalloon: 'Дилатация (балл.)',
  bougienage: 'Бужирование',
  laser: 'Лазер',
  electrocoagulation: 'Электрокоагуляция',
  cryodestruction: 'Криодеструкция',
  drugAdministration: 'Введ. препаратов',
  stent: 'Уст. стента',
  kbb: 'Уст. КББ'
};

function parseRgbColor(colorString) {
  if (!colorString) return null;
  const match = colorString.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i);
  if (!match) return null;
  return match.slice(1).map((value) => Number(value));
}

function createPastelColor(colorString, lightenFactor = 0.55, alpha = 0.78) {
  const rgb = parseRgbColor(colorString);
  if (!rgb) return colorString;
  const [r, g, b] = rgb;
  const mix = (component) => Math.round(component + (255 - component) * lightenFactor);
  const newR = mix(r);
  const newG = mix(g);
  const newB = mix(b);
  return `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;
}

function getTherapyColor(name) {
  return createPastelColor(getTherapyBaseColor(name));
}

function getTherapyLabelColor(name) {
  void name;
  return '#000000';
}

function getSupportiveColor() {
  return SUPPORT_FILL_COLOR;
}

function getSupportiveLabelColor() {
  return '#000000';
}

function getEndoscopyFillColor() {
  return ENDOSCOPY_FILL_COLOR;
}

function getEndoscopyTypeLabel(type) {
  const option = ENDOSCOPY_TYPE_OPTIONS.find((item) => item.value === type);
  return option ? option.label : type || 'Эндоскопическая процедура';
}

function getEndoscopyActionConfig(type, actionKey) {
  if (!type || !actionKey) return null;
  const list = ENDOSCOPY_ACTION_CONFIG[type] || [];
  return list.find((action) => action.value === actionKey) || null;
}

function getEndoscopyExtraFieldName(type, actionKey, extraKey) {
  return `endoscopy-${type}-${actionKey}-${extraKey}`;
}

function cloneEndoscopyProcedures(procedures) {
  if (!Array.isArray(procedures)) {
    return [];
  }
  return procedures
    .map((procedure) => {
      if (!procedure || !procedure.type) {
        return null;
      }
      const clonedActions = Array.isArray(procedure.actions)
        ? procedure.actions
            .map((action) => {
              if (!action || !action.key) {
                return null;
              }
              const details = action.details && typeof action.details === 'object' ? { ...action.details } : {};
              return { key: action.key, details };
            })
            .filter(Boolean)
        : [];
      return {
        type: procedure.type,
        actions: clonedActions,
        complications: Array.isArray(procedure.complications) ? [...procedure.complications] : [],
        isFlagged: Boolean(procedure.isFlagged)
      };
    })
    .filter(Boolean);
}

function normalizeEndoscopyProcedures(procedures) {
  return cloneEndoscopyProcedures(procedures);
}

function formatEndoscopyActionLabel(type, action) {
  if (!action || !action.key) {
    return '';
  }
  const config = getEndoscopyActionConfig(type, action.key);
  let label = config ? config.label : action.key;
  if (config && Array.isArray(config.extras) && config.extras.length) {
    const detailsEntries = config.extras
      .map((extra) => {
        const details = action.details || {};
        const value = details[extra.key];
        if (value === undefined || value === null || value === '') {
          return '';
        }
        const suffix = extra.suffix || '';
        const valueText = `${value}${suffix}`;
        return extra.label ? `${extra.label}: ${valueText}` : valueText;
      })
      .filter(Boolean);
    if (detailsEntries.length) {
      label = `${label} (${detailsEntries.join(', ')})`;
    }
  }
  return label;
}

function getEndoscopyTypeShortLabel(type) {
  return ENDOSCOPY_TYPE_SHORT_LABELS[type] || getEndoscopyTypeLabel(type) || '';
}

function getEndoscopyActionLabel(type, key) {
  const config = getEndoscopyActionConfig(type, key);
  return config ? config.label : key;
}

function shortenValue(value, max = 18) {
  if (value === null || value === undefined) {
    return '';
  }
  const text = String(value).trim();
  if (!text) {
    return '';
  }
  return text;
}

function formatEndoscopyActionShortLabel(type, action) {
  if (!action || !action.key) {
    return '';
  }
  const base = ENDOSCOPY_ACTION_SHORT_LABELS[action.key] || getEndoscopyActionLabel(type, action.key);
  if (!base) {
    return '';
  }
  const details = action.details || {};
  switch (action.key) {
    case 'bal':
      if (details.volume) {
        return `${base} (${details.volume} мл)`;
      }
      break;
    case 'sanitation':
      if (details.solution) {
        return `${base} (${shortenValue(details.solution)})`;
      }
      break;
    case 'dilationMechanical':
    case 'bougienage':
      if (details.instrumentDiameter) {
        return `${base} (${details.instrumentDiameter} мм)`;
      }
      break;
    case 'dilationBalloon':
      if (details.balloonSize) {
        return `${base} (${details.balloonSize} мм)`;
      }
      break;
    case 'drugAdministration':
      if (details.drugName || details.drugVolume) {
        const pieces = [];
        if (details.drugName) {
          pieces.push(shortenValue(details.drugName));
        }
        if (details.drugVolume) {
          pieces.push(`${details.drugVolume} мл`);
        }
        return `${base} (${pieces.join(' · ')})`;
      }
      break;
    case 'kbb':
      if (details.kbbSize) {
        return `${base} (${details.kbbSize} мм)`;
      }
      break;
    default:
      break;
  }
  return base;
}

function summarizeEndoscopyProcedures(procedures) {
  if (!Array.isArray(procedures) || !procedures.length) {
    return { summary: '', chartSummary: '', complications: [] };
  }
  const parts = [];
  const chartParts = [];
  const complicationSet = new Set();

  procedures.forEach((procedure) => {
    const typeLabel = getEndoscopyTypeLabel(procedure.type);
    const actionTexts = Array.isArray(procedure.actions)
      ? procedure.actions.map((action) => formatEndoscopyActionLabel(procedure.type, action)).filter(Boolean)
      : [];
    if (typeLabel) {
      if (actionTexts.length) {
        const text = `${typeLabel}: ${actionTexts.join(', ')}`;
        parts.push(text);
        chartParts.push(text);
      } else {
        parts.push(typeLabel);
        chartParts.push(typeLabel);
      }
    }
    (procedure.complications || []).forEach((complication) => {
      if (complication) {
        complicationSet.add(complication);
      }
    });
  });

  if (!chartParts.length && parts.length) {
    chartParts.push(...parts);
  }

  return {
    summary: parts.join(' | '),
    chartSummary: chartParts.join(' | '),
    complications: Array.from(complicationSet)
  };
}

function formatEndoscopyProceduresForExport(procedures) {
  if (!Array.isArray(procedures) || !procedures.length) {
    return { typeLabelList: '', actionList: '', complicationList: '' };
  }

  const typeLabels = new Set();
  const actionTokens = new Set();
  const complicationTokens = new Set();

  procedures.forEach((procedure) => {
    const typeLabel = getEndoscopyTypeLabel(procedure.type);
    if (typeLabel) {
      typeLabels.add(typeLabel);
    }

    (procedure.complications || []).forEach((complication) => {
      if (complication) {
        complicationTokens.add(complication);
      }
    });

    (procedure.actions || []).forEach((action) => {
      const label = formatEndoscopyActionLabel(procedure.type, action);
      if (label) {
        const token = typeLabel ? `${typeLabel}: ${label}` : label;
        actionTokens.add(token);
      }
    });
  });

  return {
    typeLabelList: Array.from(typeLabels).join(LIST_DELIMITER),
    actionList: Array.from(actionTokens).join(LIST_DELIMITER),
    complicationList: Array.from(complicationTokens).join(LIST_DELIMITER)
  };
}

function resolveEndoscopyTypeFromLabel(label) {
  if (!label) return null;
  const normalized = String(label).trim();
  if (!normalized) return null;
  const option = ENDOSCOPY_TYPE_OPTIONS.find(
    (candidate) =>
      candidate.label.toLowerCase() === normalized.toLowerCase() || candidate.value.toLowerCase() === normalized.toLowerCase()
  );
  if (option) {
    return { value: option.value, label: option.label };
  }
  return { value: normalized, label: normalized };
}

function parseEndoscopyActionToken(type, token) {
  if (!token) {
    return { key: '', details: {} };
  }
  const trimmed = token.trim();
  const detailMatch = trimmed.match(/^(.*?)(?:\((.*)\))?$/);
  const actionLabel = detailMatch ? detailMatch[1].trim() : trimmed;
  const detailText = detailMatch && detailMatch[2] ? detailMatch[2].trim() : '';
  const actionConfigList = ENDOSCOPY_ACTION_CONFIG[type] || [];
  const actionConfig = actionConfigList.find(
    (candidate) =>
      candidate.label.toLowerCase() === actionLabel.toLowerCase() ||
      (ENDOSCOPY_ACTION_SHORT_LABELS[candidate.value] || '').toLowerCase() === actionLabel.toLowerCase()
  );
  const key = actionConfig ? actionConfig.value : actionLabel;
  const details = {};

  if (detailText && actionConfig && Array.isArray(actionConfig.extras)) {
    detailText
      .split(/[,;]+/)
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((part) => {
        const [rawLabel, ...rest] = part.split(':');
        const valueText = rest.join(':').trim();
        const labelText = rawLabel ? rawLabel.trim() : '';
        const extraConfig = actionConfig.extras.find(
          (extra) => extra.label.toLowerCase() === labelText.toLowerCase()
        );
        if (extraConfig && valueText) {
          const suffix = extraConfig.suffix || '';
          const normalizedValue = valueText.endsWith(suffix)
            ? valueText.slice(0, -suffix.length).trim()
            : valueText;
          details[extraConfig.key] = normalizedValue;
        }
      });
  }

  return { key, details };
}

function parseEndoscopyProceduresFromStrings(typeString, actionString, complicationString) {
  const typeTokens = parseDelimitedList(typeString);
  const actionTokens = parseDelimitedList(actionString);
  const complicationTokens = parseDelimitedList(complicationString);

  const procedures = new Map();

  const ensureProcedure = (typeLabel) => {
    const resolved = resolveEndoscopyTypeFromLabel(typeLabel) || { value: typeLabel, label: typeLabel };
    if (!procedures.has(resolved.value)) {
      procedures.set(resolved.value, {
        type: resolved.value,
        actions: [],
        complications: []
      });
    }
    return { procedure: procedures.get(resolved.value), resolved };
  };

  typeTokens.forEach((label) => {
    ensureProcedure(label);
  });

  actionTokens.forEach((token) => {
    if (!token) return;
    const splitIndex = token.indexOf(':');
    const hasExplicitType = splitIndex !== -1;
    const typeLabel = hasExplicitType ? token.slice(0, splitIndex).trim() : typeTokens[0] || '';
    const actionLabel = hasExplicitType ? token.slice(splitIndex + 1).trim() : token.trim();
    const { procedure, resolved } = ensureProcedure(typeLabel || actionLabel);
    const { key, details } = parseEndoscopyActionToken(resolved.value, actionLabel);
    procedure.actions.push({ key, details });
  });

  const complicationList = complicationTokens.filter(Boolean);
  if (complicationList.length) {
    procedures.forEach((procedure) => {
      procedure.complications = Array.from(new Set([...(procedure.complications || []), ...complicationList]));
    });
  }

  if (!procedures.size && (actionTokens.length || complicationList.length)) {
    const fallback = ensureProcedure(typeTokens[0] || 'Эндоскопическая процедура').procedure;
    if (complicationList.length) {
      fallback.complications = [...complicationList];
    }
  }

  return Array.from(procedures.values());
}

function wrapTextToLines(text, maxCharsPerLine = 28, maxLines = 2) {
  if (text === null || text === undefined) {
    return [];
  }
  const raw = String(text).trim();
  if (!raw) {
    return [];
  }
  const words = raw.split(/\s+/);
  const lines = [];
  let current = '';
  words.forEach((word) => {
    const tentative = current ? `${current} ${word}` : word;
    if (tentative.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = tentative;
    }
  });
  if (current) {
    lines.push(current);
  }
  if (!lines.length) {
    lines.push(raw);
  }
  if (Number.isFinite(maxLines) && maxLines > 0 && lines.length > maxLines) {
    const limited = lines.slice(0, maxLines);
    const lastIndex = limited.length - 1;
    limited[lastIndex] = `${limited[lastIndex]}…`;
    return limited;
  }
  return lines;
}

function wrapTrackLabelLines(text, maxCharsPerLine = 20) {
  if (text === null || text === undefined) {
    return [''];
  }
  const raw = String(text).trim();
  if (!raw) {
    return [''];
  }
  const words = raw.split(/\s+/);
  const lines = [];
  let current = '';
  words.forEach((word) => {
    const tentative = current ? `${current} ${word}` : word;
    if (tentative.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = tentative;
    }
  });
  if (current) {
    lines.push(current);
  }
  return lines.length ? lines : [''];
}

function applyMultilineSvgText(element, text, options = {}) {
  const { maxChars = 28, maxLines = 2, lineHeight = 14 } = options;
  const lines = wrapTextToLines(text, maxChars, maxLines);
  element.textContent = '';
  if (!lines.length) {
    return 0;
  }
  const baseX = element.getAttribute('x') || 0;
  const baseY = parseFloat(element.getAttribute('y') || '0');
  lines.forEach((line, index) => {
    const tspan = createSvgElement('tspan', {
      x: baseX,
      y: baseY + index * lineHeight
    });
    tspan.textContent = line;
    element.appendChild(tspan);
  });
  return lines.length;
}

function applyProvidedLines(element, lines = [], lineHeight = 14) {
  element.textContent = '';
  if (!Array.isArray(lines) || !lines.length) {
    return 0;
  }
  const baseX = element.getAttribute('x') || 0;
  const baseY = parseFloat(element.getAttribute('y') || '0');
  lines.forEach((line, index) => {
    const tspan = createSvgElement('tspan', {
      x: baseX,
      y: baseY + index * lineHeight
    });
    tspan.textContent = line;
    element.appendChild(tspan);
  });
  return lines.length;
}

function getEffectiveDatesForLayout(dates) {
  if (Array.isArray(dates) && dates.length) {
    return dates;
  }
  if (Array.isArray(state.timelineDates) && state.timelineDates.length) {
    return state.timelineDates;
  }
  return [];
}

function estimateMaxCharsForWidth(width, fontScale) {
  const safeScale = Math.max(fontScale || 1, 0.75);
  const effectiveWidth = Math.max(width || 0, 40);
  return Math.max(12, Math.floor(effectiveWidth / (SVG_CHAR_WIDTH * safeScale)));
}

function getTherapyBaseLabel(interval) {
  if (!interval || !interval.medication) {
    return '';
  }
  if (interval.medication.dosage) {
    return `${interval.medication.name} — ${interval.medication.dosage}`;
  }
  return interval.medication.name || '';
}

function getTherapyDisplayLabel(interval) {
  if (!interval) {
    return '';
  }
  const overrideSource = interval.chartLabelOverride ?? interval.medication?.chartLabelOverride;
  const override = typeof overrideSource === 'string' ? overrideSource.trim() : '';
  if (override) {
    return override;
  }
  return getTherapyBaseLabel(interval);
}

function getEventBaseLabel(item) {
  if (!item) {
    return '';
  }
  return item.title || '';
}

function getEventDisplayLabel(item) {
  if (!item) {
    return '';
  }
  const override = typeof item.chartLabelOverride === 'string' ? item.chartLabelOverride.trim() : '';
  if (override) {
    return override;
  }
  return getEventBaseLabel(item);
}

function getSurgeryDisplayLabel(item) {
  if (!item) {
    return '';
  }
  const override = typeof item.chartLabelOverride === 'string' ? item.chartLabelOverride.trim() : '';
  if (override) {
    return override;
  }
  return buildSurgerySummary(item).label;
}

function getRadiologyDisplayLabel(item) {
  if (!item) {
    return '';
  }
  const override = typeof item.chartLabelOverride === 'string' ? item.chartLabelOverride.trim() : '';
  if (override) {
    return override;
  }
  return buildRadiologySummary(item).label;
}

function buildSurgerySummary(item) {
  if (!item) {
    return { label: '', commentLines: [] };
  }
  const parameterLabel = getParameterLabel(item.parameterId);
  const pieces = [];
  if (item.procedureType) pieces.push(item.procedureType);
  if (item.side) pieces.push(item.side);
  if (item.lobeSegments) pieces.push(item.lobeSegments);
  if (item.localization) pieces.push(item.localization);
  const labelBase = pieces.filter(Boolean).join(', ');
  const label = labelBase || parameterLabel || 'Хирургия';
  const commentLines = [];
  if (parameterLabel) commentLines.push(`Параметр: ${parameterLabel}`);
  if (item.access) commentLines.push(`Доступ: ${item.access}`);
  if (item.indication) {
    const extra = item.indication === 'другое' && item.indicationOther ? ` (${item.indicationOther})` : '';
    commentLines.push(`Показание: ${item.indication}${extra}`);
  }
  if (item.goal) commentLines.push(`Цель: ${item.goal}`);
  if (item.volumeEvacuated) commentLines.push(`Объём: ${item.volumeEvacuated} мл`);
  if (item.drainageType) commentLines.push(`Дренаж: ${item.drainageType}`);
  if (item.stagesCount) commentLines.push(`Этапы: ${item.stagesCount}`);
  if (Array.isArray(item.complications) && item.complications.length) {
    const comps = item.complications.filter(Boolean);
    if (item.complicationOther) {
      comps.push(item.complicationOther);
    }
    if (comps.length) {
      commentLines.push(`Осложнения: ${comps.join(', ')}`);
    }
  }
  return { label, commentLines };
}

function buildRadiologySummary(item) {
  if (!item) {
    return { label: '', commentLines: [] };
  }
  const parameterLabel = getParameterLabel(item.parameterId);
  const labelBase = item.conclusion || parameterLabel || 'Рентгенология';
  const label = labelBase;
  const commentLines = [];
  if (parameterLabel) commentLines.push(`Параметр: ${parameterLabel}`);
  if (item.projection) commentLines.push(`Проекция: ${item.projection}`);
  if (item.contrast) commentLines.push(`Контраст: ${item.contrast}`);
  if (item.cavitySizeMm) commentLines.push(`Каверна: ${item.cavitySizeMm} мм`);
  if (item.infiltration) commentLines.push(`Инфильтрация: ${item.infiltration}`);
  if (item.dissemination) commentLines.push(`Диссеминация: ${item.dissemination}`);
  if (item.pleuralEffusion) {
    const volume = item.pleuralEffusionVolume ? ` (${item.pleuralEffusionVolume})` : '';
    commentLines.push(`Выпот: ${item.pleuralEffusion}${volume}`);
  }
  if (item.area) commentLines.push(`Область: ${item.area}`);
  if (item.effusion) {
    const volume = item.effusionVolume ? ` (${item.effusionVolume})` : '';
    commentLines.push(`Выпот: ${item.effusion}${volume}`);
  }
  if (item.septations) commentLines.push(`Септы: ${item.septations}`);
  if (item.hyperfixationSummary) commentLines.push(`Гиперфиксация: ${item.hyperfixationSummary}`);
  if (item.findingSourceBleed) commentLines.push(`Источник: ${item.findingSourceBleed}`);
  if (item.recommendation) commentLines.push(`Рекомендации: ${item.recommendation}`);
  if (item.dynamics) commentLines.push(`Динамика: ${item.dynamics}`);
  return { label, commentLines };
}

function findEventIcon(key) {
  if (!key) return null;
  return EVENT_ICON_MAP.get(key) || null;
}

function getEventIconPreview(item) {
  if (!item) return '';
  const icon = findEventIcon(item.iconKey);
  if (!icon) return '';
  return `${icon.glyph || ''} ${icon.label}`.trim();
}

function normalizeIconOffset(offset) {
  if (offset && typeof offset === 'object') {
    const x = Number(offset.x);
    const y = Number(offset.y);
    return {
      x: Number.isFinite(x) ? Math.round(x) : 0,
      y: Number.isFinite(y) ? Math.round(y) : 0
    };
  }
  const numeric = Number(offset);
  const safe = Number.isFinite(numeric) ? Math.round(numeric) : 0;
  return { x: safe, y: 0 };
}

function suggestIconsForEvent(item) {
  const title = (item?.title || '').toLowerCase();
  const matchedGroups = new Set();
  EVENT_ICON_LIBRARY.forEach((group) => {
    if (!group.keywords || !group.keywords.length) return;
    const hit = group.keywords.some((word) => title.includes(word));
    if (hit) {
      matchedGroups.add(group.key);
    }
  });
  const ordered = [];
  if (matchedGroups.size) {
    EVENT_ICON_LIBRARY.forEach((group) => {
      if (matchedGroups.has(group.key)) {
        ordered.push({ ...group, recommended: true });
      }
    });
  }
  EVENT_ICON_LIBRARY.forEach((group) => {
    if (!matchedGroups.has(group.key)) {
      ordered.push(group);
    }
  });
  return ordered;
}

function chooseAutoIconKey(item) {
  const title = (item?.title || '').toLowerCase();
  const hint = EVENT_ICON_HINTS.find((entry) => entry.patterns.some((word) => title.includes(word)));
  if (hint && findEventIcon(hint.iconKey)) {
    return hint.iconKey;
  }
  const groups = suggestIconsForEvent(item);
  const recommended = groups.find((group) => group.recommended && group.icons && group.icons.length);
  if (recommended) {
    return recommended.icons[0].key;
  }
  const fallbackGroup = groups.find((group) => group.icons && group.icons.length);
  if (fallbackGroup) {
    return fallbackGroup.icons[0].key;
  }
  return '';
}

function getEndoscopyDisplaySummary(item, fallbackSummary) {
  if (!item) {
    return '';
  }
  const override = typeof item.chartSummaryOverride === 'string' ? item.chartSummaryOverride.trim() : '';
  if (override) {
    return override;
  }
  if (typeof fallbackSummary === 'string' && fallbackSummary.trim()) {
    return fallbackSummary.trim();
  }
  const base = summarizeEndoscopyProcedures(item.procedures).summary;
  return base || '';
}

function parseHeightOverride(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return null;
  }
  return Math.round(numeric);
}

function parseWidthOverride(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return null;
  }
  return Math.round(numeric);
}

function clampNumber(value, fallback, min, max) {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return fallback;
  }
  const minValue = Number.isFinite(min) ? min : num;
  const maxValue = Number.isFinite(max) ? max : num;
  return Math.min(Math.max(num, minValue), maxValue);
}

function parseOffsetValue(value) {
  if (value === null || value === undefined || value === '') {
    return 0;
  }
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return 0;
  }
  return Math.round(numeric);
}

function getTherapyHeightOverride(interval) {
  if (!interval || !interval.medication) {
    return null;
  }
  return parseHeightOverride(interval.medication.chartHeightOverride);
}

function getSupportHeightOverride(interval) {
  if (!interval) {
    return null;
  }
  return parseHeightOverride(interval.chartHeightOverride);
}

function clampOffsetToBounds(value, bounds = {}) {
  let result = Number.isFinite(value) ? value : 0;
  const min = Number.isFinite(bounds.min) ? bounds.min : -Infinity;
  const max = Number.isFinite(bounds.max) ? bounds.max : Infinity;
  if (result < min) {
    result = min;
  }
  if (result > max) {
    result = max;
  }
  return Math.round(result);
}

function clampOffsetPoint(offset, bounds = {}) {
  const normalized = normalizeIconOffset(offset);
  const minX = Number.isFinite(bounds.minX) ? bounds.minX : -Infinity;
  const maxX = Number.isFinite(bounds.maxX) ? bounds.maxX : Infinity;
  const minY = Number.isFinite(bounds.minY) ? bounds.minY : -Infinity;
  const maxY = Number.isFinite(bounds.maxY) ? bounds.maxY : Infinity;
  return {
    x: Math.round(Math.min(Math.max(normalized.x, minX), maxX)),
    y: Math.round(Math.min(Math.max(normalized.y, minY), maxY))
  };
}

function getTherapyOffsetValue(interval) {
  if (!interval) {
    return 0;
  }
  if (interval.chartOffsetY !== undefined) {
    return parseOffsetValue(interval.chartOffsetY);
  }
  if (interval.medication && interval.medication.chartOffsetY !== undefined) {
    return parseOffsetValue(interval.medication.chartOffsetY);
  }
  return 0;
}

function getSupportOffsetValue(interval) {
  if (!interval) {
    return 0;
  }
  return parseOffsetValue(interval.chartOffsetY);
}

function getEndoscopyOffsetValue(item) {
  if (!item) {
    return 0;
  }
  return parseOffsetValue(item.chartOffsetY);
}

function getTrackOffsetBounds(track, baseY, rectHeight) {
  if (!track) {
    return { min: 0, max: 0 };
  }
  const topLimit = track.top;
  const bottomLimit = track.top + track.height - rectHeight;
  let min = topLimit - baseY;
  let max = bottomLimit - baseY;
  if (Number.isFinite(min) && Number.isFinite(max) && max < min) {
    min = max;
  }
  return {
    min: Number.isFinite(min) ? min : 0,
    max: Number.isFinite(max) ? max : 0
  };
}

function getEndoscopyHeightOverride(item) {
  if (!item) {
    return null;
  }
  return parseHeightOverride(item.chartHeightOverride);
}

function getEndoscopyWidthOverride(item) {
  if (!item) {
    return null;
  }
  return parseWidthOverride(item.chartWidthOverride);
}

function normalizeLayoutState(layout) {
  const source = layout && typeof layout === 'object' ? layout : {};
  const normalized = {
    stepX: clampStepX(Number(source.stepX) || STEP_X_DEFAULT),
    trackGap: clampNumber(source.trackGap, TRACK_GAP, TRACK_GAP_MIN, TRACK_GAP_MAX),
    groupGap: clampNumber(source.groupGap, GROUP_GAP_DEFAULT, GROUP_GAP_MIN, GROUP_GAP_MAX),
    groupGapOverride: { ...DEFAULT_GROUP_GAP_OVERRIDE, ...(source.groupGapOverride || {}) },
    trackGapOverride: { ...(source.trackGapOverride || {}) },
    trackHeightOverride: { ...(source.trackHeightOverride || {}) }
  };

  Object.keys(normalized.trackGapOverride).forEach((key) => {
    const value = normalized.trackGapOverride[key];
    normalized.trackGapOverride[key] = Number.isFinite(value)
      ? clampNumber(value, normalized.trackGap, TRACK_GAP_MIN, TRACK_GAP_MAX)
      : null;
  });

  Object.keys(normalized.groupGapOverride).forEach((key) => {
    const value = normalized.groupGapOverride[key];
    normalized.groupGapOverride[key] = Number.isFinite(value)
      ? clampNumber(value, normalized.groupGap, GROUP_GAP_MIN, GROUP_GAP_MAX)
      : null;
  });

  Object.keys(normalized.trackHeightOverride).forEach((key) => {
    const value = normalized.trackHeightOverride[key];
    normalized.trackHeightOverride[key] = Number.isFinite(value) ? Math.max(0, Math.round(value)) : null;
  });

  return normalized;
}

function getLayoutConfig() {
  return normalizeLayoutState(state.layout || {});
}

function syncStepXFromLayout() {
  const layout = getLayoutConfig();
  currentStepX = clampStepX(layout.stepX);
  state.layout = layout;
}

function clampCardWidth(value, minWidth, maxWidth) {
  const normalized = Number(value);
  if (!Number.isFinite(normalized)) {
    return minWidth;
  }
  const min = Number.isFinite(minWidth) ? minWidth : 0;
  const max = Number.isFinite(maxWidth) ? maxWidth : min;
  return Math.min(Math.max(normalized, min), max);
}

function clampCardHeight(value, minHeight, maxHeight) {
  const normalized = Number(value);
  if (!Number.isFinite(normalized)) {
    return minHeight;
  }
  const min = Number.isFinite(minHeight) ? minHeight : 0;
  const max = Number.isFinite(maxHeight) ? maxHeight : min;
  return Math.min(Math.max(normalized, min), max);
}

function computeCenteredCardX(centerX, width, chartWidth) {
  const minX = LEFT_MARGIN;
  const maxX = Math.max(minX, chartWidth - RIGHT_MARGIN - width);
  const clampedX = Math.min(Math.max(centerX - width / 2, minX), maxX);
  return {
    x: clampedX,
    center: clampedX + width / 2
  };
}

function clampCardY(desiredY, track, height) {
  if (!track) {
    return desiredY;
  }
  const minY = track.top + 6;
  const maxY = track.top + track.height - height - 6;
  if (!Number.isFinite(maxY) || maxY < minY) {
    return minY;
  }
  return Math.min(Math.max(desiredY, minY), maxY);
}

function buildSingleDateCardLayout(text, fontScale, options = {}) {
  const minWidth = Number.isFinite(options.minWidth) ? options.minWidth : SINGLE_DATE_CARD_MIN_WIDTH;
  const maxWidth = Number.isFinite(options.maxWidth) ? options.maxWidth : SINGLE_DATE_CARD_MAX_WIDTH;
  const minHeight = Number.isFinite(options.minHeight) ? options.minHeight : SINGLE_DATE_CARD_MIN_HEIGHT;
  const paddingX = (options.paddingX ?? SINGLE_DATE_CARD_PADDING_X) * fontScale;
  const paddingY = (options.paddingY ?? SINGLE_DATE_CARD_PADDING_Y) * fontScale;
  const lineHeight = (options.lineHeight ?? SINGLE_DATE_CARD_LINE_HEIGHT) * fontScale;
  const widthOverride = options.widthOverride ?? null;
  const heightOverride = options.heightOverride ?? null;

  const baseMaxChars = estimateMaxCharsForWidth(minWidth - paddingX * 2, fontScale);
  const baseLines = wrapTextToLines(text, baseMaxChars, Infinity);
  const maxLineLength = baseLines.reduce((max, line) => Math.max(max, line.length), 0);
  const resolvedMaxWidth = Math.max(minWidth, maxWidth);
  const baseWidth = Math.min(
    Math.max(minWidth, maxLineLength * SVG_CHAR_WIDTH * fontScale + paddingX * 2),
    resolvedMaxWidth
  );

  const width = clampCardWidth(widthOverride ?? baseWidth, minWidth, resolvedMaxWidth);
  const maxChars = estimateMaxCharsForWidth(width - paddingX * 2, fontScale);
  const lines = wrapTextToLines(text, maxChars, Infinity);
  const naturalHeight = Math.max(minHeight, lines.length * lineHeight + paddingY * 2);
  const height = heightOverride ? Math.max(naturalHeight, heightOverride) : naturalHeight;

  return {
    width,
    height,
    baseWidth,
    naturalHeight,
    lines,
    lineHeight,
    paddingX,
    paddingY,
    maxChars
  };
}

function clampChartFontScale(value) {
  if (!Number.isFinite(value)) return 1;
  return Math.min(Math.max(value, CHART_FONT_SCALE_MIN), CHART_FONT_SCALE_MAX);
}

function getChartFontScaleValue(source) {
  if (!source) {
    return 1;
  }
  const raw = Number(source.chartFontScale);
  if (!Number.isFinite(raw) || raw <= 0) {
    return 1;
  }
  return clampChartFontScale(raw);
}

function getEffectiveChartFontScale(source) {
  return getCurrentFontScale() * getChartFontScaleValue(source);
}

function getBaseChartFontPx(basePx = CHART_BASE_LABEL_PX) {
  return basePx * getCurrentFontScale();
}

function describeChartFontPx(source, basePx = CHART_BASE_LABEL_PX) {
  return getBaseChartFontPx(basePx) * getChartFontScaleValue(source);
}

function measureTherapyLayout(intervals = [], dates) {
  const effectiveDates = getEffectiveDatesForLayout(dates);
  if (!intervals.length) {
    return { levelHeights: [], itemsByKey: new Map() };
  }

  const baseFontScale = getCurrentFontScale();
  const defaultWidth = Math.max(getStepX(), 80);
  const lastCoordinate = effectiveDates.length
    ? LEFT_MARGIN + (effectiveDates.length - 1) * getStepX()
    : LEFT_MARGIN + defaultWidth;

  const itemsByKey = new Map();
  const levelHeights = [];
  let maxLevel = 0;

  intervals.forEach((interval) => {
    if (!interval) return;
    const level = interval.__level || 0;
    if (level > maxLevel) {
      maxLevel = level;
    }
    const key = `${interval.courseId}:${interval.medicationId}`;

    let xStart = LEFT_MARGIN;
    if (effectiveDates.length) {
      xStart = getXPosition(interval.startDate, effectiveDates);
    }

    let width = defaultWidth;
    if (effectiveDates.length) {
      if (interval.endDate) {
        width = Math.max(40, getXPosition(interval.endDate, effectiveDates) - xStart);
      } else {
        width = Math.max(40, lastCoordinate - xStart + defaultWidth);
      }
    } else if (interval.endDate) {
      const start = parseDate(interval.startDate).getTime();
      const end = parseDate(interval.endDate).getTime();
      const diff = Math.max(1, Math.round((end - start) / MS_IN_DAY));
      width = Math.max(40, diff * (defaultWidth * 0.75));
    }

    const fontScale = baseFontScale * getChartFontScaleValue(interval);
    const lineHeight = THERAPY_LABEL_LINE_HEIGHT * fontScale;
    const paddingTop = (THERAPY_LABEL_PADDING_Y / 2) * fontScale;
    const paddingBottom = paddingTop;

    const availableWidth = Math.max(48, width - 24);
    const maxChars = estimateMaxCharsForWidth(availableWidth, fontScale);
    const labelText = getTherapyDisplayLabel(interval);
    const overrideHeight = getTherapyHeightOverride(interval);
    const lines = wrapTextToLines(labelText, maxChars, Infinity);
    const maxLineLength = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const minWidth = Math.max(availableWidth + 24, maxLineLength * SVG_CHAR_WIDTH * fontScale + 28);
    const lineCount = Math.max(1, lines.length || 0);
    const naturalHeight = Math.max(
      THERAPY_LEVEL_HEIGHT,
      lineCount * lineHeight + paddingTop + paddingBottom
    );
    const rectHeight = overrideHeight ? Math.max(naturalHeight, overrideHeight) : naturalHeight;

    levelHeights[level] = Math.max(levelHeights[level] || 0, rectHeight);

    itemsByKey.set(key, {
      rectHeight,
      naturalHeight,
      maxChars,
      maxLineLength,
      minWidth,
      lines,
      lineCount,
      paddingTop,
      paddingBottom,
      lineHeight,
      lineCount,
      fontScale
    });
  });

  const levelCount = Math.max(maxLevel + 1, levelHeights.length);
  const normalizedHeights = [];
  for (let index = 0; index < levelCount; index += 1) {
    normalizedHeights[index] = Math.max(levelHeights[index] || 0, THERAPY_LEVEL_HEIGHT);
  }

  return { levelHeights: normalizedHeights, itemsByKey };
}

function measureSupportLayout(intervals = [], dates) {
  const effectiveDates = getEffectiveDatesForLayout(dates);
  if (!intervals.length) {
    return { levelHeights: [], itemsByKey: new Map() };
  }

  const baseFontScale = getCurrentFontScale();
  const defaultWidth = Math.max(getStepX(), 80);
  const lastCoordinate = effectiveDates.length
    ? LEFT_MARGIN + (effectiveDates.length - 1) * getStepX()
    : LEFT_MARGIN + defaultWidth;

  const itemsByKey = new Map();
  const levelHeights = [];
  let maxLevel = 0;

  intervals.forEach((interval) => {
    if (!interval) return;
    const level = interval.__level || 0;
    if (level > maxLevel) {
      maxLevel = level;
    }
    const key = `support:${interval.supportId}`;

    let xStart = LEFT_MARGIN;
    if (effectiveDates.length) {
      xStart = getXPosition(interval.startDate, effectiveDates);
    }

    let width = defaultWidth;
    if (effectiveDates.length) {
      if (interval.endDate) {
        width = Math.max(40, getXPosition(interval.endDate, effectiveDates) - xStart);
      } else {
        width = Math.max(40, lastCoordinate - xStart + defaultWidth);
      }
    } else if (interval.endDate) {
      const start = parseDate(interval.startDate).getTime();
      const end = parseDate(interval.endDate).getTime();
      const diff = Math.max(1, Math.round((end - start) / MS_IN_DAY));
      width = Math.max(40, diff * (defaultWidth * 0.75));
    }

    const fontScale = baseFontScale * getChartFontScaleValue(interval);
    const lineHeight = THERAPY_LABEL_LINE_HEIGHT * fontScale;
    const paddingTop = (THERAPY_LABEL_PADDING_Y / 2) * fontScale;
    const paddingBottom = paddingTop;

    const availableWidth = Math.max(48, width - 24);
    const maxChars = estimateMaxCharsForWidth(availableWidth, fontScale);
    const labelText = interval.medication?.dosage
      ? `${interval.medication.name} — ${interval.medication.dosage}`
      : interval.medication?.name || '';
    const overrideHeight = getSupportHeightOverride(interval);
    const lines = wrapTextToLines(labelText, maxChars, Infinity);
    const maxLineLength = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const minWidth = Math.max(availableWidth + 24, maxLineLength * SVG_CHAR_WIDTH * fontScale + 28);
    const lineCount = Math.max(1, lines.length || 0);
    const naturalHeight = Math.max(
      THERAPY_LEVEL_HEIGHT,
      lineCount * lineHeight + paddingTop + paddingBottom
    );
    const rectHeight = overrideHeight ? Math.max(naturalHeight, overrideHeight) : naturalHeight;

    levelHeights[level] = Math.max(levelHeights[level] || 0, rectHeight);
    itemsByKey.set(key, {
      rectHeight,
      naturalHeight,
      maxChars,
      maxLineLength,
      minWidth,
      lines,
      lineCount,
      paddingTop,
      paddingBottom,
      lineHeight,
      lineCount,
      fontScale
    });
  });

  const levelCount = Math.max(maxLevel + 1, levelHeights.length);
  const normalizedHeights = [];
  for (let index = 0; index < levelCount; index += 1) {
    normalizedHeights[index] = Math.max(levelHeights[index] || 0, THERAPY_LEVEL_HEIGHT);
  }

  return { levelHeights: normalizedHeights, itemsByKey };
}

function measureEndoscopyLayout(items = []) {
  if (!Array.isArray(items) || !items.length) {
    return { levelHeights: [], itemsById: new Map() };
  }

  const baseFontScale = getCurrentFontScale();

  const itemsById = new Map();
  const levelHeights = [];
  let maxLevel = 0;

  items.forEach((item) => {
    if (!item) return;
    const level = item.__level || 0;
    if (level > maxLevel) {
      maxLevel = level;
    }

    const fontScale = baseFontScale * getChartFontScaleValue(item);
    const widthOverride = getEndoscopyWidthOverride(item);

    const typeLabels = Array.isArray(item.procedures)
      ? item.procedures.map((procedure) => getEndoscopyTypeLabel(procedure.type)).filter(Boolean)
      : [];
    const titleText = typeLabels.length ? typeLabels.join(' • ') : 'Эндоскопическая процедура';

    const summary = summarizeEndoscopyProcedures(item.procedures);
    const interventionsText = getEndoscopyDisplaySummary(item, summary.summary);
    const complicationText = formatEndoscopyComplications(summary.complications);

    const fallbackLines = [
      ...wrapTextToLines(titleText, 32, Infinity),
      ...wrapTextToLines(interventionsText, 32, Infinity),
      ...wrapTextToLines(complicationText, 32, Infinity)
    ];
    const fallbackMaxLine = fallbackLines.reduce((max, line) => Math.max(max, line.length), 0);
    const minWidth = Math.max(
      ENDOSCOPY_CARD_MIN_WIDTH,
      fallbackMaxLine * SVG_CHAR_WIDTH * fontScale + ENDOSCOPY_PADDING_X * 2
    );
    const maxWidth = Math.max(minWidth, ENDOSCOPY_CARD_MAX_WIDTH);
    const baseWidth = Math.min(Math.max(240, minWidth), maxWidth);
    const cardWidth = clampCardWidth(widthOverride ?? baseWidth, minWidth, maxWidth);

    const maxChars = estimateMaxCharsForWidth(cardWidth - ENDOSCOPY_PADDING_X * 2, fontScale);
    const titleLines = wrapTextToLines(titleText, maxChars, Infinity);
    const interventionsLines = wrapTextToLines(interventionsText, maxChars, Infinity);
    const complicationLines = wrapTextToLines(complicationText, maxChars, Infinity);

    const lineHeight = ENDOSCOPY_LABEL_LINE_HEIGHT * fontScale;
    const paddingTop = (ENDOSCOPY_PADDING_Y / 2) * fontScale;
    const paddingBottom = paddingTop;
    const sectionSpacing = 6 * fontScale;

    let contentHeight = paddingTop;
    if (titleLines.length) {
      contentHeight += titleLines.length * lineHeight;
      if (interventionsLines.length || complicationLines.length) {
        contentHeight += sectionSpacing;
      }
    }
    if (interventionsLines.length) {
      contentHeight += interventionsLines.length * lineHeight;
      if (complicationLines.length) {
        contentHeight += sectionSpacing;
      }
    }
    if (complicationLines.length) {
      contentHeight += complicationLines.length * lineHeight;
    }
    contentHeight += paddingBottom;

    const overrideHeight = getEndoscopyHeightOverride(item);
    const naturalHeight = Math.max(ENDOSCOPY_ITEM_HEIGHT, contentHeight);
    const rectHeight = overrideHeight ? Math.max(naturalHeight, overrideHeight) : naturalHeight;

    levelHeights[level] = Math.max(levelHeights[level] || 0, rectHeight);

    itemsById.set(item.id, {
      rectHeight,
      naturalHeight,
      minWidth,
      maxWidth,
      baseWidth,
      cardWidth,
      titleLines,
      interventionsLines,
      complicationLines,
      interventionsText,
      fullSummary: summary.summary,
      complicationText,
      titleText,
      lineHeight,
      paddingTop,
      paddingBottom,
      sectionSpacing,
      maxChars
    });
  });

  const levelCount = Math.max(maxLevel + 1, levelHeights.length);
  const normalizedHeights = [];
  for (let index = 0; index < levelCount; index += 1) {
    normalizedHeights[index] = Math.max(levelHeights[index] || 0, ENDOSCOPY_ITEM_HEIGHT);
  }

  return { levelHeights: normalizedHeights, itemsById };
}

function getSingleDateCardText(item, key) {
  switch (key) {
    case 'neuro':
      return item.status || '';
    case 'lab':
      return item.testType || '';
    case 'event':
      return getEventDisplayLabel(item);
    default:
      return '';
  }
}

function measureSingleDateCardLayout(items = [], dates, trackKey) {
  if (!Array.isArray(items) || !items.length) {
    return { levelHeights: [], levelAssignments: new Map(), measurements: new Map() };
  }
  const fontScale = getCurrentFontScale();
  const measurements = new Map();
  const levelAssignments = new Map();
  const levelRanges = [];
  const levelHeights = [];
  const collisionPadding = 12;

  const sorted = [...items].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  const maxWidth = SINGLE_DATE_CARD_MAX_WIDTH;

  sorted.forEach((item) => {
    const text = getSingleDateCardText(item, trackKey);
    const itemFontScale = getEffectiveChartFontScale(item);
    const widthOverride = parseWidthOverride(item.chartWidthOverride);
    const heightOverride = parseHeightOverride(item.chartHeightOverride);
    const layout = buildSingleDateCardLayout(text, itemFontScale, {
      widthOverride,
      heightOverride,
      maxWidth
    });

    const width = layout.width;
    const center = getXPosition(item.date, dates);
    const start = center - width / 2;
    const end = center + width / 2;
    let level = 0;

    while (
      levelRanges[level] &&
      levelRanges[level].some((range) => !(end + collisionPadding < range.start || start - collisionPadding > range.end))
    ) {
      level += 1;
    }
    if (!levelRanges[level]) {
      levelRanges[level] = [];
    }
    levelRanges[level].push({ start, end });

    const height = Math.max(layout.height, SINGLE_DATE_CARD_MIN_HEIGHT);
    levelHeights[level] = Math.max(levelHeights[level] || 0, height);
    levelAssignments.set(item.id, level);
    measurements.set(item.id, {
      ...layout,
      height,
      width
    });
  });

  const normalizedHeights = levelHeights.map((height) => Math.max(height, SINGLE_DATE_CARD_MIN_HEIGHT));
  return { levelHeights: normalizedHeights, levelAssignments, measurements };
}

function computeSingleDateTrackHeight(trackMinHeight, layout = {}) {
  const levelHeights = layout.levelHeights || [];
  if (!levelHeights.length) {
    return trackMinHeight;
  }
  const spacing = (levelHeights.length - 1) * SINGLE_DATE_CARD_GAP;
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  return Math.max(trackMinHeight, blockHeight + spacing + 48);
}

function renderTrackResizeHandles(tracks = []) {
  if (!timelineSvg) {
    return;
  }
  if (!Array.isArray(tracks) || !tracks.length) {
    return;
  }
  const layer = timelineSvg;
  const handleRadius = 6;
  const handleX = LEFT_MARGIN - 18;

  tracks.forEach((track) => {
    const y = track.top + track.height;
    const handle = createSvgElement('circle', {
      cx: handleX,
      cy: y,
      r: handleRadius,
      class: 'track-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreview = (nextHeight) => {
      if (!state.layout) {
        state.layout = normalizeLayoutState({});
      }
      state.layout.trackHeightOverride = {
        ...(state.layout.trackHeightOverride || {}),
        [track.key]: Math.round(nextHeight)
      };
      state.layout = normalizeLayoutState(state.layout);
      renderTimeline();
    };

    registerResizable(handle, {
      axis: 'y',
      getHeight: () => track.height,
      getMinHeight: () => TRACK_HEIGHT_MIN,
      getMaxHeight: () => Number.POSITIVE_INFINITY,
      onPreview: ({ height }) => updatePreview(height),
      onCancel: ({ height }) => updatePreview(height),
      onCommit: ({ height }) => applyTrackHeightOverride(track.key, height, track.baseHeight)
    });
  });
}

const LAB_TEST_TYPES = ['Микроскопия', 'МГМ', 'Посев на ППС', 'Посев на ЖПС'];
const SURGERY_RESECTION_TYPES = [
  'атипичная (клиновидная) резекция',
  'сегментэктомия',
  'лобэктомия',
  'билобэктомия',
  'пневмонэктомия'
];
const SURGERY_PLEURA_TYPES = [
  'плевральная пункция (торакоцентез)',
  'дренирование плевральной полости',
  'декортикация',
  'плеврэктомия',
  'плевродез'
];
const SURGERY_COLLAPSE_TYPES = [
  'кавернотомия',
  'кавернопластика',
  'торакомиопластика/торакопластика',
  'искусственный пневмоторакс',
  'пневмоперитонеум'
];
const SURGERY_SIDES = ['справа', 'слева'];
const SURGERY_ACCESS_TYPES = ['открытый', 'VATS'];
const SURGERY_COMPLICATIONS = [
  'кровотечение',
  'бронхоплевральный свищ',
  'эмпиема',
  'ателектаз',
  'пневмоторакс',
  'инфекция',
  'другое'
];
const RAD_DYNAMICS = ['улучшение', 'без динамики', 'ухудшение'];

const CSV_DELIMITER = ';';
const LIST_DELIMITER = '|';
function normalizeDateString(raw) {
  if (!raw) return '';
  const input = String(raw).trim();
  if (!input) return '';

  const isoMatch = input.match(/^\d{4}-\d{2}-\d{2}$/);
  if (isoMatch) {
    return input;
  }

  const parts = input.split(/[-./\\]/).map((part) => part.trim()).filter(Boolean);
  if (parts.length === 3) {
    let year;
    let month;
    let day;

    if (parts[0].length === 4) {
      // Already in Y-M-D but with a different separator.
      [year, month, day] = parts;
    } else {
      [day, month, year] = parts;
    }

    const yearNum = Number(year);
    const monthNum = Number(month);
    const dayNum = Number(day);
    if (Number.isFinite(dayNum) && Number.isFinite(monthNum) && Number.isFinite(yearNum)) {
      const normalizedYear = yearNum < 100 ? 2000 + yearNum : yearNum;
      const normalizedMonth = String(Math.max(1, Math.min(12, monthNum))).padStart(2, '0');
      const normalizedDay = String(Math.max(1, Math.min(31, dayNum))).padStart(2, '0');
      return `${String(normalizedYear).padStart(4, '0')}-${normalizedMonth}-${normalizedDay}`;
    }
  }

  return '';
}
const DATA_EXPORT_FIELDS = [
  { key: 'type', label: 'Тип' },
  { key: 'parameterId', label: 'Параметр' },
  { key: 'id', label: 'Идентификатор' },
  { key: 'parentId', label: 'Идентификатор курса' },
  { key: 'date', label: 'Дата' },
  { key: 'time', label: 'Время' },
  { key: 'startDate', label: 'Дата начала' },
  { key: 'endDate', label: 'Дата окончания' },
  { key: 'value', label: 'Значение' },
  { key: 'title', label: 'Название' },
  { key: 'status', label: 'Статус' },
  { key: 'comment', label: 'Комментарий' },
  { key: 'testType', label: 'Тип исследования' },
  { key: 'result', label: 'Результат' },
  { key: 'manipulationType', label: 'Тип процедуры' },
  { key: 'interventions', label: 'Выполненные действия' },
  { key: 'complications', label: 'Осложнения' },
  { key: 'procedureType', label: 'Тип операции/процедуры' },
  { key: 'side', label: 'Сторона' },
  { key: 'lobeSegments', label: 'Доля/сегменты' },
  { key: 'access', label: 'Доступ' },
  { key: 'indication', label: 'Показание' },
  { key: 'indicationOther', label: 'Показание (другое)' },
  { key: 'complicationOther', label: 'Осложнение (другое)' },
  { key: 'volumeEvacuated', label: 'Объём эвакуированного, мл' },
  { key: 'drainageType', label: 'Тип дренажа/метод' },
  { key: 'localization', label: 'Локализация' },
  { key: 'goal', label: 'Цель вмешательства' },
  { key: 'stagesCount', label: 'Количество этапов' },
  { key: 'projection', label: 'Проекция' },
  { key: 'conclusion', label: 'Заключение' },
  { key: 'dynamics', label: 'Динамика' },
  { key: 'contrast', label: 'Контраст' },
  { key: 'cavitySizeMm', label: 'Размер каверны, мм' },
  { key: 'infiltration', label: 'Инфильтрация' },
  { key: 'dissemination', label: 'Диссеминация' },
  { key: 'pleuralEffusion', label: 'Плевральный выпот' },
  { key: 'pleuralEffusionVolume', label: 'Объём выпота' },
  { key: 'findingSourceBleed', label: 'Источник кровотечения' },
  { key: 'recommendation', label: 'Рекомендации' },
  { key: 'area', label: 'Область исследования' },
  { key: 'effusion', label: 'Выпот' },
  { key: 'effusionVolume', label: 'Объём выпота (если есть)' },
  { key: 'septations', label: 'Септы' },
  { key: 'hyperfixationSummary', label: 'Сводка гиперфиксации' },
  { key: 'medicationName', label: 'Препарат' },
  { key: 'dosage', label: 'Дозировка' },
  { key: 'note', label: 'Примечание' },
  { key: 'frequencyCount', label: 'Частота' },
  { key: 'frequencyUnit', label: 'Единица частоты' },
  { key: 'weekdays', label: 'Дни недели' },
  { key: 'courseComment', label: 'Комментарий курса' },
  { key: 'courseStartDate', label: 'Дата начала курса' },
  { key: 'courseEndDate', label: 'Дата окончания курса' },
  { key: 'chartLabelOverride', label: 'Подпись на графике' },
  { key: 'chartSummaryOverride', label: 'Краткое описание' },
  { key: 'chartHeightOverride', label: 'Высота элемента' },
  { key: 'chartWidthOverride', label: 'Ширина элемента' },
  { key: 'chartOffsetY', label: 'Смещение по Y' },
  { key: 'chartFontScale', label: 'Масштаб подписи' },
  { key: 'iconKey', label: 'Иконка' },
  { key: 'iconOffsetX', label: 'Смещение иконки X' },
  { key: 'iconOffsetY', label: 'Смещение иконки Y' },
  { key: 'flagged', label: 'Проблемный участок' },
  { key: 'enabled', label: 'Использовать' }
];
const DATA_EXPORT_HEADERS = DATA_EXPORT_FIELDS.map((field) => field.label);
const DATA_EXPORT_KEY_BY_LABEL = new Map(DATA_EXPORT_FIELDS.map((field) => [field.label, field.key]));
const DATA_EXPORT_LABEL_BY_KEY = new Map(DATA_EXPORT_FIELDS.map((field) => [field.key, field.label]));
const OPTIONAL_IMPORT_HEADERS = new Set(
  [
    'parameterId',
    'manipulationType',
    'interventions',
    'complications',
    'procedureType',
    'side',
    'lobeSegments',
    'access',
    'indication',
    'indicationOther',
    'complicationOther',
    'volumeEvacuated',
    'drainageType',
    'localization',
    'goal',
    'stagesCount',
    'projection',
    'conclusion',
    'dynamics',
    'contrast',
    'cavitySizeMm',
    'infiltration',
    'dissemination',
    'pleuralEffusion',
    'pleuralEffusionVolume',
    'findingSourceBleed',
    'recommendation',
    'area',
    'effusion',
    'effusionVolume',
    'septations',
    'hyperfixationSummary',
    'chartLabelOverride',
    'chartSummaryOverride',
    'chartHeightOverride',
    'chartWidthOverride',
    'chartOffsetY',
    'chartFontScale',
    'iconKey',
    'iconOffsetX',
    'iconOffsetY',
    'enabled'
  ].map(
    (key) => DATA_EXPORT_LABEL_BY_KEY.get(key)
  )
);
const DATA_EXPORT_FILENAME = 'timeline-data.csv';
const DATA_EXPORT_VERSION = '2.0.0';

const EXPORT_TYPE_ORDER = new Map([
  ['temperature', 0],
  ['therapy', 1],
  ['support', 2],
  ['endoscopy', 3],
  ['surgery', 4],
  ['radiology', 5],
  ['neuro', 6],
  ['liver', 7],
  ['lab', 8],
  ['event', 9]
]);

const EXPORT_TYPE_LABELS = {
  temperature: 'Температура',
  therapy: 'Лекарственная терапия',
  support: 'Терапия сопровождения',
  endoscopy: 'Эндоскопическая процедура',
  surgery: 'Хирургия',
  radiology: 'Рентгенология',
  neuro: 'Неврологический статус',
  liver: 'ЛПП',
  lab: 'Лабораторная диагностика',
  event: 'Событие/диагноз',
  __meta__: 'Служебная запись'
};

const IMPORT_TYPE_LABELS = new Map(
  Object.entries(EXPORT_TYPE_LABELS).map(([key, label]) => [label.toLowerCase(), key])
);

const IMPORT_TYPE_SYNONYMS = new Map([
  ['терапия', 'therapy'],
  ['поддерживающая терапия', 'support'],
  ['сопроводительная терапия', 'support'],
  ['эндоскопическое лечение', 'endoscopy'],
  ['эндоскопия', 'endoscopy'],
  ['эгдоскопическая процедура', 'endoscopy'],
  ['бронхоскопия', 'endoscopy'],
  ['диагностическая бронхоскопия', 'endoscopy'],
  ['терапевтическая бронхоскопия', 'endoscopy'],
  ['хирургия', 'surgery'],
  ['операция', 'surgery'],
  ['хирургическое лечение', 'surgery'],
  ['рентгенология', 'radiology'],
  ['рентген', 'radiology'],
  ['кт', 'radiology'],
  ['событие', 'event'],
  ['диагноз', 'event']
]);

const MAX_HISTORY_ENTRIES = 50;

const DIRECTIONS = [
  { id: 'clinical', label: 'Клинические показатели' },
  { id: 'therapy', label: 'Терапия' },
  { id: 'endoscopy', label: 'Эндоскопия' },
  { id: 'surgery', label: 'Хирургия' },
  { id: 'radiology', label: 'Рентгенология' },
  { id: 'diagnostics', label: 'Диагностика' },
  { id: 'events', label: 'События' }
];

const PARAMETER_CATALOG = {
  clinical: [
    { id: 'temperature', label: 'Температура', trackKey: 'temperature', formKind: 'temperature' },
    { id: 'neuro', label: 'Неврологический статус (НС)', trackKey: 'neuro', formKind: 'neuro' },
    { id: 'liver', label: 'ЛПП', trackKey: 'liver', formKind: 'liver' }
  ],
  therapy: [
    { id: 'therapy', label: 'Лекарственная терапия (ЛТ)', trackKey: 'therapy', formKind: 'therapy' },
    { id: 'support', label: 'Терапия сопровождения', trackKey: 'support', formKind: 'support' }
  ],
  endoscopy: [
    { id: 'endoscopy', label: 'Эндоскопическая процедура', trackKey: 'endoscopy', formKind: 'endoscopy' }
  ],
  surgery: [
    { id: 'surgery_resection', label: 'Резекционная хирургия лёгких', trackKey: 'surgery', formKind: 'surgery_resection' },
    { id: 'surgery_pleura', label: 'Плевра и дренирование', trackKey: 'surgery', formKind: 'surgery_pleura' },
    { id: 'surgery_collapse', label: 'Кавернозная/коллапсохирургия', trackKey: 'surgery', formKind: 'surgery_collapse' }
  ],
  radiology: [
    { id: 'rad_cxr', label: 'Рентгенография ОГК', trackKey: 'radiology', formKind: 'rad_cxr' },
    { id: 'rad_ct', label: 'КТ/HRCT ОГК', trackKey: 'radiology', formKind: 'rad_ct' },
    { id: 'rad_cta', label: 'КТ-ангиография', trackKey: 'radiology', formKind: 'rad_cta' },
    { id: 'rad_us', label: 'УЗИ', trackKey: 'radiology', formKind: 'rad_us' },
    { id: 'rad_mri', label: 'МРТ', trackKey: 'radiology', formKind: 'rad_mri' },
    { id: 'rad_petct', label: 'ПЭТ/КТ', trackKey: 'radiology', formKind: 'rad_petct' }
  ],
  diagnostics: [
    { id: 'lab', label: 'Лабораторная диагностика', trackKey: 'lab', formKind: 'lab' }
  ],
  events: [
    { id: 'event', label: 'Событие/диагноз', trackKey: 'event', formKind: 'event' }
  ]
};

const PARAMETER_BY_ID = new Map();
const PARAMETER_DIRECTION_BY_ID = new Map();
const PARAMETER_LABEL_BY_ID = new Map();
const PARAMETER_ID_BY_LABEL = new Map();

const formConfig = {
  temperature: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false, defaultValue: '09:00' },
    { type: 'number', name: 'value', label: 'Значение температуры, °C', required: true, step: '0.1', min: '30', max: '45' },
    { type: 'textarea', name: 'comment', label: 'Комментарий/описание', required: false, placeholder: 'Аннотация' },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  neuro: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'text', name: 'status', label: 'Состояние', required: true, placeholder: 'Например: дезориентирован' },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  liver: [
    { type: 'date', name: 'startDate', label: 'Дата начала', required: true },
    { type: 'date', name: 'endDate', label: 'Дата окончания', required: false },
    {
      type: 'text',
      name: 'status',
      label: 'Стадия/описание',
      required: true,
      placeholder: 'Например: рост трансаминаз'
    },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  lab: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    { type: 'select', name: 'testType', label: 'Тип исследования', required: true, options: LAB_TEST_TYPES },
    { type: 'textarea', name: 'result', label: 'Результат/комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  event: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    { type: 'text', name: 'title', label: 'Название события', required: true, placeholder: 'Например: перевод в ОРИТ' },
    { type: 'textarea', name: 'comment', label: 'Комментарий/детали', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  support: [
    { type: 'date', name: 'startDate', label: 'Дата начала', required: true },
    { type: 'date', name: 'endDate', label: 'Дата окончания', required: false },
    {
      type: 'text',
      name: 'name',
      label: 'Препарат/мероприятие',
      required: true,
      placeholder: 'Например: Урсодезоксихолевая кислота'
    },
    {
      type: 'text',
      name: 'dosage',
      label: 'Дозировка/режим',
      required: false,
      placeholder: 'Например: 250 мг 2 р./сут'
    },
    {
      type: 'textarea',
      name: 'note',
      label: 'Комментарий',
      required: false,
      placeholder: 'Дополнительные сведения: переносимость, цели назначения'
    },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  surgery_resection: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'procedureType',
      label: 'Тип операции',
      required: true,
      options: SURGERY_RESECTION_TYPES
    },
    {
      type: 'select',
      name: 'side',
      label: 'Сторона',
      required: true,
      options: SURGERY_SIDES
    },
    {
      type: 'text',
      name: 'lobeSegments',
      label: 'Доля/сегменты',
      required: false,
      placeholder: 'Например: S1-S2, верхняя доля'
    },
    {
      type: 'select',
      name: 'access',
      label: 'Доступ',
      required: false,
      options: SURGERY_ACCESS_TYPES
    },
    {
      type: 'select',
      name: 'indication',
      label: 'Показание',
      required: false,
      options: ['по жизненным показаниям', 'по плану', 'другое']
    },
    {
      type: 'text',
      name: 'indicationOther',
      label: 'Показание (другое)',
      required: false
    },
    {
      type: 'select',
      name: 'complications',
      label: 'Осложнения',
      required: false,
      options: SURGERY_COMPLICATIONS,
      multiple: true,
      size: 6
    },
    {
      type: 'text',
      name: 'complicationOther',
      label: 'Осложнение (другое)',
      required: false
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  surgery_pleura: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'procedureType',
      label: 'Манипуляция',
      required: true,
      options: SURGERY_PLEURA_TYPES
    },
    {
      type: 'select',
      name: 'side',
      label: 'Сторона',
      required: false,
      options: SURGERY_SIDES
    },
    {
      type: 'text',
      name: 'volumeEvacuated',
      label: 'Объём эвакуированного, мл',
      required: false,
      placeholder: 'Например: 450'
    },
    {
      type: 'text',
      name: 'drainageType',
      label: 'Тип дренажа/метод',
      required: false
    },
    {
      type: 'select',
      name: 'complications',
      label: 'Осложнения',
      required: false,
      options: SURGERY_COMPLICATIONS,
      multiple: true,
      size: 6
    },
    {
      type: 'text',
      name: 'complicationOther',
      label: 'Осложнение (другое)',
      required: false
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  surgery_collapse: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'procedureType',
      label: 'Манипуляция',
      required: true,
      options: SURGERY_COLLAPSE_TYPES
    },
    {
      type: 'text',
      name: 'localization',
      label: 'Сторона/локализация',
      required: false
    },
    {
      type: 'text',
      name: 'goal',
      label: 'Цель вмешательства',
      required: false
    },
    {
      type: 'number',
      name: 'stagesCount',
      label: 'Количество этапов',
      required: false,
      min: '1'
    },
    {
      type: 'select',
      name: 'complications',
      label: 'Осложнения',
      required: false,
      options: SURGERY_COMPLICATIONS,
      multiple: true,
      size: 6
    },
    {
      type: 'text',
      name: 'complicationOther',
      label: 'Осложнение (другое)',
      required: false
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_cxr: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'projection',
      label: 'Проекция',
      required: true,
      options: ['прямая', 'боковая']
    },
    {
      type: 'text',
      name: 'conclusion',
      label: 'Заключение',
      required: true
    },
    {
      type: 'select',
      name: 'dynamics',
      label: 'Динамика',
      required: true,
      options: RAD_DYNAMICS
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_ct: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'contrast',
      label: 'Контраст',
      required: true,
      options: ['нет', 'да']
    },
    {
      type: 'number',
      name: 'cavitySizeMm',
      label: 'Размер каверны, мм',
      required: false,
      min: '0'
    },
    {
      type: 'select',
      name: 'infiltration',
      label: 'Инфильтрация',
      required: false,
      options: ['нет', 'умеренная', 'выраженная']
    },
    {
      type: 'select',
      name: 'dissemination',
      label: 'Диссеминация',
      required: false,
      options: ['нет', 'да']
    },
    {
      type: 'select',
      name: 'pleuralEffusion',
      label: 'Плевральный выпот',
      required: false,
      options: ['нет', 'да']
    },
    {
      type: 'text',
      name: 'pleuralEffusionVolume',
      label: 'Объём выпота (если есть)',
      required: false
    },
    { type: 'text', name: 'conclusion', label: 'Заключение', required: true },
    {
      type: 'select',
      name: 'dynamics',
      label: 'Динамика',
      required: true,
      options: RAD_DYNAMICS
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_cta: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'text',
      name: 'findingSourceBleed',
      label: 'Источник кровотечения',
      required: false
    },
    {
      type: 'textarea',
      name: 'recommendation',
      label: 'Рекомендации',
      required: false
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_us: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'area',
      label: 'Область исследования',
      required: true,
      options: ['плевра', 'брюшная', 'лимфоузлы', 'другое']
    },
    {
      type: 'select',
      name: 'effusion',
      label: 'Выпот',
      required: false,
      options: ['нет', 'да']
    },
    {
      type: 'text',
      name: 'effusionVolume',
      label: 'Объём выпота (если есть)',
      required: false
    },
    {
      type: 'select',
      name: 'septations',
      label: 'Септы',
      required: false,
      options: ['нет', 'да']
    },
    { type: 'text', name: 'conclusion', label: 'Заключение', required: true },
    {
      type: 'select',
      name: 'dynamics',
      label: 'Динамика',
      required: false,
      options: RAD_DYNAMICS
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_mri: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'select',
      name: 'area',
      label: 'Область исследования',
      required: true,
      options: ['головной мозг', 'позвоночник', 'суставы', 'другое']
    },
    {
      type: 'select',
      name: 'contrast',
      label: 'Контраст',
      required: true,
      options: ['нет', 'да']
    },
    { type: 'text', name: 'conclusion', label: 'Заключение', required: true },
    {
      type: 'select',
      name: 'dynamics',
      label: 'Динамика',
      required: true,
      options: RAD_DYNAMICS
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ],
  rad_petct: [
    { type: 'date', name: 'date', label: 'Дата', required: true },
    { type: 'time', name: 'time', label: 'Время', required: false },
    {
      type: 'text',
      name: 'area',
      label: 'Область исследования',
      required: true
    },
    {
      type: 'textarea',
      name: 'hyperfixationSummary',
      label: 'Сводка гиперфиксации',
      required: false
    },
    {
      type: 'select',
      name: 'dynamics',
      label: 'Динамика',
      required: true,
      options: RAD_DYNAMICS
    },
    { type: 'textarea', name: 'comment', label: 'Комментарий', required: false },
    {
      type: 'checkbox',
      name: 'isFlagged',
      label: 'Выделить красным (проблемный участок)',
      required: false
    }
  ]
};

function buildEndoscopyTooltipFields() {
  const fields = [
    { name: 'date', label: 'Дата', type: 'date', required: true },
    { name: 'time', label: 'Время', type: 'time' },
    {
      name: 'types',
      label: 'Типы процедур',
      type: 'multi-select',
      options: ENDOSCOPY_TYPE_OPTIONS.map((option) => ({ value: option.value, label: option.label })),
      size: Math.min(ENDOSCOPY_TYPE_OPTIONS.length, 4)
    }
  ];

  ENDOSCOPY_TYPE_OPTIONS.forEach((option) => {
    const actionOptions = (ENDOSCOPY_ACTION_CONFIG[option.value] || []).map((action) => ({
      value: action.value,
      label: action.label
    }));
    fields.push({
      name: `actions_${option.value}`,
      label: `Действия — ${option.label}`,
      type: 'multi-select',
      options: actionOptions,
      size: Math.min(actionOptions.length || 4, 6)
    });

    (ENDOSCOPY_ACTION_CONFIG[option.value] || []).forEach((action) => {
      if (!Array.isArray(action.extras) || !action.extras.length) {
        return;
      }
      action.extras.forEach((extra) => {
        fields.push({
          name: getEndoscopyExtraFieldName(option.value, action.value, extra.key),
          label: `${extra.label} — ${option.label}`,
          type: 'text',
          placeholder: extra.placeholder || ''
        });
      });
    });

    fields.push({
      name: `complications_${option.value}`,
      label: `Осложнения — ${option.label}`,
      type: 'multi-select',
      options: ENDOSCOPY_COMPLICATION_OPTIONS.map((name) => ({ value: name, label: name })),
      size: Math.min(ENDOSCOPY_COMPLICATION_OPTIONS.length, 6)
    });
    fields.push({ name: `flag_${option.value}`, label: `Проблемный участок — ${option.label}`, type: 'checkbox' });
  });

  fields.push({ name: 'comment', label: 'Комментарий', type: 'textarea' });
  fields.push({ name: 'isFlagged', label: 'Проблемный участок (общий)', type: 'checkbox' });
  return fields;
}

const ENDOSCOPY_TOOLTIP_FIELDS = buildEndoscopyTooltipFields();

const TOOLTIP_EDITORS = {
  temperature: {
    get(editInfo) {
      if (!editInfo) return null;
      const item = state.temps.find((entry) => entry.id === editInfo.id);
      if (!item) return null;
      return {
        value: parseFloat(item.value) || '',
        time: item.time || '',
        comment: item.comment || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'value', label: 'Температура, °C', type: 'number', step: '0.1', min: '30', max: '45', required: true },
      { name: 'time', label: 'Время', type: 'time' },
      { name: 'comment', label: 'Комментарий', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.temps.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.value !== undefined && values.value !== '' && String(values.value) !== String(item.value)) {
        item.value = String(values.value);
        changed = true;
      }
      if (values.time !== undefined && values.time !== (item.time || '')) {
        item.time = values.time || '';
        changed = true;
      }
      if (values.comment !== undefined && values.comment !== (item.comment || '')) {
        item.comment = values.comment || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  therapy: {
    get(editInfo) {
      if (!editInfo) return null;
      const course = state.therapy.find((entry) => entry.id === editInfo.courseId);
      if (!course || !Array.isArray(course.medications)) return null;
      const medication = course.medications.find((med) => med.id === editInfo.medicationId);
      if (!medication) return null;
      return {
        dosage: medication.dosage || '',
        note: medication.note || '',
        frequencyCount: medication.frequencyCount || '',
        frequencyUnit: medication.frequencyUnit || 'perDay',
        weekdays: Array.isArray(medication.weekdays) ? medication.weekdays.map((day) => String(day)) : [],
        courseComment: course.comment || '',
        isFlagged: Boolean(course.isFlagged)
      };
    },
    fields: [
      { name: 'dosage', label: 'Дозировка', type: 'text' },
      { name: 'note', label: 'Примечание', type: 'textarea' },
      { name: 'frequencyCount', label: 'Число приёмов', type: 'number', min: '0', step: '1' },
      {
        name: 'frequencyUnit',
        label: 'Единица частоты',
        type: 'select',
        options: [
          { value: 'perDay', label: 'В день' },
          { value: 'perWeek', label: 'В неделю' }
        ]
      },
      {
        name: 'weekdays',
        label: 'Дни недели',
        type: 'multi-select',
        options: WEEKDAY_LABELS.map((label, index) => ({ value: String(index), label }))
      },
      { name: 'courseComment', label: 'Комментарий курса', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const course = state.therapy.find((entry) => entry.id === editInfo.courseId);
      if (!course || !Array.isArray(course.medications)) return false;
      const medication = course.medications.find((med) => med.id === editInfo.medicationId);
      if (!medication) return false;
      let changed = false;
      if (values.dosage !== undefined && values.dosage !== (medication.dosage || '')) {
        medication.dosage = values.dosage || '';
        changed = true;
      }
      if (values.note !== undefined && values.note !== (medication.note || '')) {
        medication.note = values.note || '';
        changed = true;
      }
      if (values.frequencyCount !== undefined && values.frequencyCount !== medication.frequencyCount) {
        medication.frequencyCount = values.frequencyCount ? Number(values.frequencyCount) : '';
        changed = true;
      }
      if (values.frequencyUnit && values.frequencyUnit !== medication.frequencyUnit) {
        medication.frequencyUnit = values.frequencyUnit;
        changed = true;
      }
      if (Array.isArray(values.weekdays)) {
        const normalized = values.weekdays.map((day) => Number(day)).filter((day) => !Number.isNaN(day));
        const original = Array.isArray(medication.weekdays) ? medication.weekdays : [];
        const sameLength = normalized.length === original.length;
        const sameValues = sameLength && normalized.every((day) => original.includes(day));
        if (!sameValues) {
          medication.weekdays = normalized;
          changed = true;
        }
      }
      if (values.courseComment !== undefined && values.courseComment !== (course.comment || '')) {
        course.comment = values.courseComment || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(course.isFlagged)) {
        course.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  support: {
    get(editInfo) {
      const item = state.supportiveTherapy.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      return {
        name: item.name || '',
        dosage: item.dosage || '',
        note: item.note || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'name', label: 'Название', type: 'text', required: true },
      { name: 'dosage', label: 'Дозировка', type: 'text' },
      { name: 'note', label: 'Комментарий', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.supportiveTherapy.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.name !== undefined && values.name !== (item.name || '')) {
        item.name = values.name || '';
        changed = true;
      }
      if (values.dosage !== undefined && values.dosage !== (item.dosage || '')) {
        item.dosage = values.dosage || '';
        changed = true;
      }
      if (values.note !== undefined && values.note !== (item.note || '')) {
        item.note = values.note || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  endoscopy: {
    get(editInfo) {
      const item = state.endoscopy.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      const procedures = normalizeEndoscopyProcedures(item.procedures);
      const values = {
        date: item.date || '',
        time: item.time || '',
        types: procedures.map((procedure) => procedure.type),
        comment: item.comment || '',
        isFlagged: Boolean(item.isFlagged)
      };
      procedures.forEach((procedure) => {
        const type = procedure.type;
        values[`actions_${type}`] = Array.isArray(procedure.actions)
          ? procedure.actions.map((action) => action.key)
          : [];
        (procedure.actions || []).forEach((action) => {
          const config = getEndoscopyActionConfig(type, action.key);
          if (!config || !Array.isArray(config.extras)) {
            return;
          }
          config.extras.forEach((extra) => {
            const fieldName = getEndoscopyExtraFieldName(type, action.key, extra.key);
            values[fieldName] = action.details && action.details[extra.key] ? action.details[extra.key] : '';
          });
        });
        values[`complications_${type}`] = Array.isArray(procedure.complications)
          ? [...procedure.complications]
          : [];
        values[`flag_${type}`] = Boolean(procedure.isFlagged);
      });
      return values;
    },
    fields: ENDOSCOPY_TOOLTIP_FIELDS,
    apply(editInfo, values) {
      const item = state.endoscopy.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      const types = Array.isArray(values.types) ? values.types.filter(Boolean) : [];
      if (!types.length) {
        alert('Выберите типы эндоскопической процедуры.');
        return false;
      }
      if (!values.date) {
        alert('Укажите дату процедуры.');
        return false;
      }
      const procedures = [];
      let validationError = '';

      types.forEach((type) => {
        if (validationError) return;
        const actionField = `actions_${type}`;
        const actionKeys = Array.isArray(values[actionField]) ? values[actionField].filter(Boolean) : [];
        if (!actionKeys.length) {
          validationError = `Укажите действия для "${getEndoscopyTypeLabel(type)}".`;
          return;
        }
        const actions = [];
        actionKeys.forEach((actionKey) => {
          if (validationError) return;
          const config = getEndoscopyActionConfig(type, actionKey);
          const extras = config && Array.isArray(config.extras) ? config.extras : [];
          const details = {};
          let hasDetails = false;
          extras.forEach((extra) => {
            const fieldName = getEndoscopyExtraFieldName(type, actionKey, extra.key);
            const value = values[fieldName] ? String(values[fieldName]).trim() : '';
            if (!value) {
              validationError = `Заполните поле "${extra.label}" для действия "${config.label}".`;
            } else {
              details[extra.key] = value;
              hasDetails = true;
            }
          });
          if (validationError) return;
          const actionData = { key: actionKey };
          if (hasDetails) {
            actionData.details = details;
          }
          actions.push(actionData);
        });
        if (validationError) return;
        const complicationField = `complications_${type}`;
        const complications = Array.isArray(values[complicationField])
          ? values[complicationField].filter(Boolean)
          : [];
        const flagField = `flag_${type}`;
        procedures.push({
          type,
          actions,
          complications,
          isFlagged: Boolean(values[flagField])
        });
      });

      if (validationError) {
        alert(validationError);
        return false;
      }

      item.date = values.date;
      item.time = values.time || '';
      item.comment = values.comment || '';
      item.procedures = procedures;
      item.isFlagged = Boolean(values.isFlagged) || procedures.some((procedure) => procedure.isFlagged);
      return true;
    }
  },
  neuro: {
    get(editInfo) {
      const item = state.neuro.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      return {
        status: item.status || '',
        comment: item.comment || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'status', label: 'Состояние', type: 'text', required: true },
      { name: 'comment', label: 'Комментарий', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.neuro.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.status !== undefined && values.status !== (item.status || '')) {
        item.status = values.status || '';
        changed = true;
      }
      if (values.comment !== undefined && values.comment !== (item.comment || '')) {
        item.comment = values.comment || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  liver: {
    get(editInfo) {
      const item = state.liver.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      return {
        status: item.status || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'status', label: 'Статус', type: 'text', required: true },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.liver.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.status !== undefined && values.status !== (item.status || '')) {
        item.status = values.status || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  lab: {
    get(editInfo) {
      const item = state.labDiagnostics.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      return {
        testType: item.testType || '',
        result: item.result || '',
        time: item.time || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'testType', label: 'Тип исследования', type: 'select', options: LAB_TEST_TYPES.map((value) => ({ value, label: value })), required: true },
      { name: 'time', label: 'Время', type: 'time' },
      { name: 'result', label: 'Результат', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.labDiagnostics.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.testType !== undefined && values.testType !== (item.testType || '')) {
        item.testType = values.testType || '';
        changed = true;
      }
      if (values.time !== undefined && values.time !== (item.time || '')) {
        item.time = values.time || '';
        changed = true;
      }
      if (values.result !== undefined && values.result !== (item.result || '')) {
        item.result = values.result || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  },
  event: {
    get(editInfo) {
      const item = state.events.find((entry) => entry.id === editInfo?.id);
      if (!item) return null;
      return {
        title: item.title || '',
        comment: item.comment || '',
        time: item.time || '',
        isFlagged: Boolean(item.isFlagged)
      };
    },
    fields: [
      { name: 'title', label: 'Название', type: 'text', required: true },
      { name: 'time', label: 'Время', type: 'time' },
      { name: 'comment', label: 'Комментарий', type: 'textarea' },
      { name: 'isFlagged', label: 'Проблемный участок', type: 'checkbox' }
    ],
    apply(editInfo, values) {
      const item = state.events.find((entry) => entry.id === editInfo.id);
      if (!item) return false;
      let changed = false;
      if (values.title !== undefined && values.title !== (item.title || '')) {
        item.title = values.title || '';
        changed = true;
      }
      if (values.time !== undefined && values.time !== (item.time || '')) {
        item.time = values.time || '';
        changed = true;
      }
      if (values.comment !== undefined && values.comment !== (item.comment || '')) {
        item.comment = values.comment || '';
        changed = true;
      }
      if (typeof values.isFlagged === 'boolean' && values.isFlagged !== Boolean(item.isFlagged)) {
        item.isFlagged = values.isFlagged;
        changed = true;
      }
      return changed;
    }
  }
};

const THERAPY_LEVEL_HEIGHT = 28;
const THERAPY_ROW_SPACING = 12;
const THERAPY_VERTICAL_PADDING = 36;
const THERAPY_MIN_HEIGHT = 220;
const THERAPY_LABEL_LINE_HEIGHT = 14;
const THERAPY_LABEL_PADDING_Y = 18;

const SUPPORT_MIN_HEIGHT = 180;

const ENDOSCOPY_ITEM_HEIGHT = 72;
const ENDOSCOPY_ROW_SPACING = 20;
const ENDOSCOPY_MIN_HEIGHT = 170;
const ENDOSCOPY_LABEL_LINE_HEIGHT = 14;
const ENDOSCOPY_PADDING_Y = 28;
const ENDOSCOPY_PADDING_X = 24;
const ENDOSCOPY_CARD_MIN_WIDTH = 220;
const ENDOSCOPY_CARD_MAX_WIDTH = 560;

const SINGLE_DATE_CARD_MIN_WIDTH = 160;
const SINGLE_DATE_CARD_MAX_WIDTH = 420;
const SINGLE_DATE_CARD_MIN_HEIGHT = 48;
const SINGLE_DATE_CARD_PADDING_X = 14;
const SINGLE_DATE_CARD_PADDING_Y = 10;
const SINGLE_DATE_CARD_LINE_HEIGHT = 14;
const SINGLE_DATE_CARD_GAP = 10;
const CHART_FONT_SCALE_MIN = 0.5;
const CHART_FONT_SCALE_MAX = 3;
const CHART_FONT_STEP_PX = 1;
const CHART_BASE_LABEL_PX = 12;

const SVG_CHAR_WIDTH = 6.4;

const TRACK_DEFINITIONS = [
  { key: 'temperature', label: 'Температура', minHeight: 150 },
  { key: 'therapy', label: 'ЛТ', minHeight: THERAPY_MIN_HEIGHT },
  { key: 'support', label: 'Терапия сопровождения', minHeight: SUPPORT_MIN_HEIGHT },
  { key: 'endoscopy', label: 'Эндоскопическая процедура', minHeight: ENDOSCOPY_MIN_HEIGHT },
  { key: 'surgery', label: 'Хирургия', minHeight: 130 },
  { key: 'radiology', label: 'Рентгенология', minHeight: 130 },
  { key: 'neuro', label: 'НС', minHeight: 120 },
  { key: 'liver', label: 'ЛПП', minHeight: 130 },
  { key: 'lab', label: 'Лабораторная диагностика', minHeight: 140 },
  { key: 'event', label: 'События/диагнозы', minHeight: 120 }
];

const TRACK_GROUP_BY_KEY = {
  temperature: 'clinical',
  therapy: 'therapy',
  support: 'therapy',
  neuro: 'therapy',
  liver: 'therapy',
  endoscopy: 'endoscopy',
  surgery: 'surgery',
  radiology: 'radiology',
  lab: 'diagnostics',
  event: 'events'
};

const PARAMETER_GROUPS = [
  {
    label: 'Клинические показатели',
    items: [
      { key: 'temperature', label: 'Температура' },
      { key: 'neuro', label: 'Неврологический статус (НС)' },
      { key: 'liver', label: 'ЛПП' }
    ]
  },
  {
    label: 'Терапия',
    items: [
      { key: 'therapy', label: 'Лекарственная терапия (ЛТ)' },
      { key: 'support', label: 'Терапия сопровождения' }
    ]
  },
  {
    label: 'Эндоскопия',
    items: [{ key: 'endoscopy', label: 'Эндоскопическая процедура' }]
  },
  {
    label: 'Хирургия',
    items: [{ key: 'surgery', label: 'Хирургия' }]
  },
  {
    label: 'Рентгенология',
    items: [{ key: 'radiology', label: 'Рентгенология' }]
  },
  {
    label: 'Диагностика и события',
    items: [
      { key: 'lab', label: 'Лабораторная диагностика' },
      { key: 'event', label: 'События/диагнозы' }
    ]
  }
];

const TRACK_KEYS = TRACK_DEFINITIONS.map((track) => track.key);
const trackVisibility = new Map(TRACK_KEYS.map((key) => [key, true]));

function buildParameterCatalogIndex() {
  PARAMETER_BY_ID.clear();
  PARAMETER_DIRECTION_BY_ID.clear();
  PARAMETER_LABEL_BY_ID.clear();
  PARAMETER_ID_BY_LABEL.clear();
  Object.entries(PARAMETER_CATALOG).forEach(([directionKey, params]) => {
    (params || []).forEach((param) => {
      if (!param || !param.id) {
        return;
      }
      PARAMETER_BY_ID.set(param.id, param);
      PARAMETER_DIRECTION_BY_ID.set(param.id, directionKey);
      if (param.label) {
        PARAMETER_LABEL_BY_ID.set(param.id, param.label);
        PARAMETER_ID_BY_LABEL.set(param.label.toLowerCase(), param.id);
      }
    });
  });
}

function getParameterConfig(parameterId) {
  if (!parameterId) return null;
  return PARAMETER_BY_ID.get(parameterId) || null;
}

function getDirectionForParameter(parameterId) {
  if (!parameterId) return '';
  return PARAMETER_DIRECTION_BY_ID.get(parameterId) || '';
}

function getParameterLabel(parameterId) {
  if (!parameterId) return '';
  return PARAMETER_LABEL_BY_ID.get(parameterId) || '';
}

function formatParameterForExport(parameterId) {
  if (!parameterId) return '';
  return getParameterLabel(parameterId) || parameterId;
}

function parseParameterForImport(rawValue) {
  if (!rawValue) return '';
  const normalized = String(rawValue).trim();
  if (!normalized) return '';
  if (PARAMETER_BY_ID.has(normalized)) {
    return normalized;
  }
  const lowered = normalized.toLowerCase();
  if (PARAMETER_ID_BY_LABEL.has(lowered)) {
    return PARAMETER_ID_BY_LABEL.get(lowered) || '';
  }
  return '';
}

function getParametersForDirection(directionKey) {
  if (!directionKey) return [];
  return PARAMETER_CATALOG[directionKey] || [];
}

const STEP_X_DEFAULT = 50;
const STEP_X_MIN = 12;
const STEP_X_MAX = 80;
let currentStepX = STEP_X_DEFAULT;
const LEFT_MARGIN = 160;
const RIGHT_MARGIN = 140;
const TOP_MARGIN = 70;
const BOTTOM_MARGIN = 140;
const BASE_AXIS_LABEL_OFFSET = 22;
const BASE_LEGEND_TOP_OFFSET = 45;
const BASE_LEGEND_ROW_HEIGHT = 28;
const BASE_LEGEND_EXTRA_GAP = 20;
const TRACK_GAP = 40;
const TRACK_GAP_MIN = 0;
const TRACK_GAP_MAX = 80;
const GROUP_GAP_DEFAULT = 24;
const GROUP_GAP_MIN = 0;
const GROUP_GAP_MAX = 120;
const TRACK_HEIGHT_MIN = 8;
const DEFAULT_GROUP_GAP_OVERRIDE = {
  clinical: null,
  therapy: null,
  endoscopy: null,
  surgery: null,
  radiology: null,
  diagnostics: null,
  events: null
};
const MIN_WIDTH = 1200;
const DRAG_THRESHOLD = 4;
const RESIZE_THRESHOLD = 3;
const RESIZE_HANDLE_SIZE = 12;
let dragContext = null;
let resizeContext = null;
let suppressClick = false;
let activeHighlight = null;
let activeSelectionKey = null;
let activeDetailPayload = null;
let editContext = null;
let deleteContext = null;
let previewResourceUrl = null;
let previewResourceIsObjectUrl = false;
const PREVIEW_FILENAME = 'timeline.png';
let therapyDraft = createEmptyTherapyDraft();
const therapyFormElements = {
  builder: null,
  select: null,
  inputsWrapper: null,
  dosage: null,
  note: null,
  addButton: null,
  list: null,
  start: null,
  end: null,
  supportButton: null
};

const endoscopyFormElements = {
  date: null,
  time: null,
  comment: null,
  typeCheckboxes: new Map(),
  sections: new Map(),
  actionCheckboxes: new Map(),
  extraFields: new Map(),
  complicationCheckboxes: new Map(),
  flagCheckboxes: new Map()
};

const panContext = {
  active: false,
  spaceMode: false,
  startX: 0,
  startY: 0,
  scrollLeft: 0,
  scrollTop: 0
};

const rootElement = document.documentElement;
const bodyElement = document.body;
const directionSelect = document.getElementById('directionSelect');
const parameterSelect = document.getElementById('parameterSelect');
const dynamicFields = document.getElementById('dynamicFields');
const entryForm = document.getElementById('entryForm');
const clearAllButton = document.getElementById('clearAll');
const downloadButton = document.getElementById('downloadPng');
const exportDataButton = document.getElementById('exportData');
const importDataButton = document.getElementById('importData');
const resetGraphButton = document.getElementById('resetGraph');
const undoButton = document.getElementById('undoAction');
const importFileInput = document.getElementById('importFile');
const chartViewport = document.getElementById('chartViewport');
const timelineSvg = document.getElementById('timeline');
const chartScrollContainer = document.getElementById('chartScroll');
const inlineEditorLayer = document.getElementById('inlineEditorLayer');
const toolbarMenuButton = document.getElementById('toolbarMenuButton');
const toolbarMenu = document.getElementById('toolbarMenu');
const openSettingsButton = document.getElementById('openSettings');
const settingsModal = document.getElementById('settingsModal');
const settingsForm = document.getElementById('settingsForm');
const fontDecreaseButton = settingsForm
  ? settingsForm.querySelector('[data-font-decrease]')
  : null;
const fontIncreaseButton = settingsForm
  ? settingsForm.querySelector('[data-font-increase]')
  : null;
const fontSizeValueLabel = settingsForm
  ? settingsForm.querySelector('[data-font-size-value]')
  : null;
const layoutStepXInput = settingsForm
  ? settingsForm.querySelector('[data-layout-step-x]')
  : null;
const layoutStepXValue = settingsForm
  ? settingsForm.querySelector('[data-layout-step-x-value]')
  : null;
const layoutTrackGapInput = settingsForm
  ? settingsForm.querySelector('[data-layout-track-gap]')
  : null;
const layoutTrackGapValue = settingsForm
  ? settingsForm.querySelector('[data-layout-track-gap-value]')
  : null;
const layoutGroupGapInput = settingsForm
  ? settingsForm.querySelector('[data-layout-group-gap]')
  : null;
const layoutGroupGapValue = settingsForm
  ? settingsForm.querySelector('[data-layout-group-gap-value]')
  : null;
const parameterVisibilityContainer = document.querySelector('[data-visibility-container]');
const parameterVisibilityTrigger = parameterVisibilityContainer
  ? parameterVisibilityContainer.querySelector('[data-visibility-trigger]')
  : null;
const parameterVisibilityDropdown = parameterVisibilityContainer
  ? parameterVisibilityContainer.querySelector('[data-visibility-dropdown]')
  : null;
const parameterVisibilitySummary = parameterVisibilityContainer
  ? parameterVisibilityContainer.querySelector('[data-visibility-summary]')
  : null;
const parameterVisibilityCount = parameterVisibilityContainer
  ? parameterVisibilityContainer.querySelector('[data-visibility-count]')
  : null;
let trackToggleInputs = [];
const trackToggleMap = new Map();
const submitButton = entryForm.querySelector('button[type="submit"]');

const detailType = document.getElementById('detailType');
const detailColorIndicator = document.getElementById('detailColor');
const detailFlagIndicator = document.getElementById('detailFlag');
const detailDate = document.getElementById('detailDate');
const detailTitle = document.getElementById('detailTitle');
const detailComment = document.getElementById('detailComment');
const detailFontRow = document.getElementById('detailFontRow');
const detailFontValue = document.getElementById('detailFontValue');
const detailFontDecrease = document.getElementById('detailFontDecrease');
const detailFontIncrease = document.getElementById('detailFontIncrease');
const detailIconRow = document.getElementById('detailIconRow');
const detailIconPreview = document.getElementById('detailIconPreview');
const detailIconChoose = document.getElementById('detailIconChoose');
const detailIconClear = document.getElementById('detailIconClear');
const deleteSelectedButton = document.getElementById('deleteSelected');
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');
const previewDownloadLink = document.getElementById('previewDownload');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const iconPickerModal = document.getElementById('iconPickerModal');
const iconPickerGroups = document.getElementById('iconPickerGroups');
const iconPickerApply = document.getElementById('iconPickerApply');
let isVisibilityDropdownOpen = false;
let isToolbarMenuOpen = false;
let iconPickerContext = null;
let activeIconActionMenu = null;

const displayPreferences = {
  fontSizePx: 16,
  theme: 'light'
};

function getCurrentFontScale() {
  const fontSize = clampFontSizePx(displayPreferences.fontSizePx || 16);
  return fontSize / 16;
}

function applySvgFontScale(targetSvg) {
  if (!targetSvg) return;
  const scale = getCurrentFontScale();
  targetSvg.style.setProperty('--font-scale', scale.toString());
  targetSvg.style.setProperty('--font-size-base', `${clampFontSizePx(displayPreferences.fontSizePx || 16)}px`);
}

if (rootElement) {
  const computedStyles = getComputedStyle(rootElement);
  const fontSizeValue = parseFloat(computedStyles.getPropertyValue('--font-size-base'));
  if (!Number.isNaN(fontSizeValue)) {
    displayPreferences.fontSizePx = clampFontSizePx(fontSizeValue);
  }
}

if (bodyElement) {
  const initialTheme = bodyElement.dataset.theme;
  if (initialTheme && ['light', 'dark'].includes(initialTheme)) {
    displayPreferences.theme = initialTheme;
  }
}

const tooltipDataMap = new WeakMap();
let tooltipElement = null;
let tooltipActiveData = null;
let tooltipHideTimeout = null;
const TOOLTIP_ENABLED = false;
let activeFontTarget = null;
let tooltipViewSection = null;
let tooltipEditorForm = null;
let tooltipFieldsContainer = null;
let tooltipSaveButton = null;
let tooltipCancelButton = null;
let tooltipEditState = null;
let inlineEditorElement = null;
let inlineEditorState = null;
let labelEditorElement = null;
let labelEditorTarget = null;
let labelEditorInitialValue = '';
let labelEditorCommitCallback = null;
let labelEditorCleanup = null;

const historyStack = [];

function isTrackVisible(key) {
  if (!key) return false;
  return trackVisibility.get(key) !== false;
}

function setTrackVisibility(key, visible) {
  if (!key) return;
  const isVisible = Boolean(visible);
  trackVisibility.set(key, isVisible);
  const toggle = trackToggleMap.get(key);
  if (toggle && toggle.checked !== isVisible) {
    toggle.checked = isVisible;
  }
  updateVisibilityTriggerLabel();
}

function getVisibleTrackKeys() {
  return TRACK_KEYS.filter((key) => isTrackVisible(key));
}

function getFirstVisibleTrackKey() {
  const keys = getVisibleTrackKeys();
  return keys.length ? keys[0] : '';
}

function updateVisibilityTriggerLabel() {
  if (!parameterVisibilityTrigger || !parameterVisibilitySummary || !parameterVisibilityCount) {
    return;
  }
  const checkedInputs = trackToggleInputs.filter((input) => input.checked);
  const total = checkedInputs.length;
  parameterVisibilityCount.textContent = String(total);
  let summary = '';
  if (total === 0) {
    summary = 'Нет выбранных параметров';
  } else {
    const labels = checkedInputs
      .slice(0, 2)
      .map((input) => input.dataset.label || input.getAttribute('data-label') || '')
      .filter(Boolean);
    summary = labels.join(', ');
    const remaining = total - labels.length;
    if (remaining > 0) {
      summary = summary ? `${summary} +${remaining}` : `+${remaining}`;
    }
  }
  parameterVisibilitySummary.textContent = summary || 'Выберите параметры';
  parameterVisibilityTrigger.setAttribute('aria-expanded', String(isVisibilityDropdownOpen));
  if (parameterVisibilityContainer) {
    parameterVisibilityContainer.classList.toggle('is-open', isVisibilityDropdownOpen);
  }
}

function renderParameterVisibilityOptions() {
  if (!parameterVisibilityDropdown) {
    return;
  }
  parameterVisibilityDropdown.innerHTML = '';
  trackToggleInputs = [];
  trackToggleMap.clear();

  PARAMETER_GROUPS.forEach((group) => {
    const groupElement = document.createElement('div');
    groupElement.className = 'parameter-visibility__group';

    const title = document.createElement('div');
    title.className = 'parameter-visibility__group-title';
    title.textContent = group.label;
    groupElement.appendChild(title);

    group.items.forEach((item) => {
      const optionLabel = document.createElement('label');
      optionLabel.className = 'parameter-visibility__item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = item.key;
      checkbox.dataset.label = item.label;
      checkbox.dataset.trackToggle = 'true';
      checkbox.checked = isTrackVisible(item.key);
      optionLabel.appendChild(checkbox);

      const text = document.createElement('span');
      text.textContent = item.label;
      optionLabel.appendChild(text);

      checkbox.addEventListener('change', handleTrackToggleChange);

      trackToggleInputs.push(checkbox);
      trackToggleMap.set(item.key, checkbox);
      groupElement.appendChild(optionLabel);
    });

    parameterVisibilityDropdown.appendChild(groupElement);
  });

  updateVisibilityTriggerLabel();
}

function openParameterVisibilityDropdown() {
  if (!parameterVisibilityDropdown || isVisibilityDropdownOpen) {
    return;
  }
  parameterVisibilityDropdown.hidden = false;
  isVisibilityDropdownOpen = true;
  updateVisibilityTriggerLabel();
}

function closeParameterVisibilityDropdown() {
  if (!parameterVisibilityDropdown || !isVisibilityDropdownOpen) {
    return;
  }
  parameterVisibilityDropdown.hidden = true;
  isVisibilityDropdownOpen = false;
  updateVisibilityTriggerLabel();
}

function toggleParameterVisibilityDropdown() {
  if (!parameterVisibilityDropdown) {
    return;
  }
  hideTooltip(true);
  closeInlineEditor();
  if (isVisibilityDropdownOpen) {
    closeParameterVisibilityDropdown();
  } else {
    openParameterVisibilityDropdown();
  }
}

function handleDocumentClickForVisibility(event) {
  const target = event.target;

  if (isVisibilityDropdownOpen && parameterVisibilityContainer) {
    if (!parameterVisibilityContainer.contains(target)) {
      closeParameterVisibilityDropdown();
    }
  }

  if (isToolbarMenuOpen && toolbarMenuButton) {
    const menuContainsTarget = toolbarMenu && toolbarMenu.contains(target);
    const buttonContainsTarget = toolbarMenuButton.contains(target);
    if (!menuContainsTarget && !buttonContainsTarget) {
      closeToolbarMenu();
    }
  }

  if (inlineEditorElement) {
    const highlightTarget = inlineEditorState ? inlineEditorState.highlightTarget : null;
    const insideEditor = inlineEditorElement.contains(target);
    const insideHighlight = highlightTarget && typeof highlightTarget.contains === 'function'
      ? highlightTarget.contains(target)
      : false;
    if (!insideEditor && !insideHighlight) {
      closeInlineEditor();
    }
  }
}

function openToolbarMenu() {
  if (!toolbarMenuButton || !toolbarMenu) {
    return;
  }
  hideTooltip(true);
  closeInlineEditor();
  toolbarMenu.hidden = false;
  toolbarMenuButton.setAttribute('aria-expanded', 'true');
  isToolbarMenuOpen = true;
}

function closeToolbarMenu() {
  if (!toolbarMenuButton || !toolbarMenu || !isToolbarMenuOpen) {
    return;
  }
  toolbarMenu.hidden = true;
  toolbarMenuButton.setAttribute('aria-expanded', 'false');
  isToolbarMenuOpen = false;
}

function toggleToolbarMenu() {
  if (!toolbarMenuButton || !toolbarMenu) {
    return;
  }
  if (isToolbarMenuOpen) {
    closeToolbarMenu();
  } else {
    openToolbarMenu();
  }
}

function isSettingsModalOpen() {
  return Boolean(settingsModal && settingsModal.getAttribute('aria-hidden') === 'false');
}

function clampFontSizePx(value) {
  if (Number.isNaN(value)) {
    return displayPreferences.fontSizePx || 16;
  }
  return Math.min(MAX_FONT_SIZE_PX, Math.max(MIN_FONT_SIZE_PX, value));
}

function updateFontSizeDisplay() {
  if (!fontSizeValueLabel) {
    return;
  }
  const size = Math.round(displayPreferences.fontSizePx || 16);
  fontSizeValueLabel.textContent = `${size} px`;
}

function updateLayoutSettingsDisplay() {
  const layout = getLayoutConfig();
  if (layoutStepXInput) {
    layoutStepXInput.value = String(layout.stepX);
  }
  if (layoutStepXValue) {
    layoutStepXValue.textContent = `${Math.round(layout.stepX)} px`;
  }
  if (layoutTrackGapInput) {
    layoutTrackGapInput.value = String(layout.trackGap);
  }
  if (layoutTrackGapValue) {
    layoutTrackGapValue.textContent = `${Math.round(layout.trackGap)} px`;
  }
  if (layoutGroupGapInput) {
    layoutGroupGapInput.value = String(layout.groupGap);
  }
  if (layoutGroupGapValue) {
    layoutGroupGapValue.textContent = `${Math.round(layout.groupGap)} px`;
  }
}

function applyLayoutSettings() {
  state.layout = normalizeLayoutState(state.layout || {});
  syncStepXFromLayout();
  updateZoomButtons();
  updateLayoutSettingsDisplay();
  renderTimeline();
}

function handleLayoutControlInput() {
  if (!state.layout) {
    state.layout = normalizeLayoutState({});
  }
  const layout = { ...(state.layout || {}) };
  if (layoutStepXInput) {
    layout.stepX = clampStepX(Number(layoutStepXInput.value) || STEP_X_DEFAULT);
  }
  if (layoutTrackGapInput) {
    layout.trackGap = clampNumber(layoutTrackGapInput.value, TRACK_GAP, TRACK_GAP_MIN, TRACK_GAP_MAX);
  }
  if (layoutGroupGapInput) {
    layout.groupGap = clampNumber(layoutGroupGapInput.value, GROUP_GAP_DEFAULT, GROUP_GAP_MIN, GROUP_GAP_MAX);
  }
  state.layout = normalizeLayoutState(layout);
  applyLayoutSettings();
}

function applyDisplayPreferences() {
  const fontSize = clampFontSizePx(displayPreferences.fontSizePx || 16);
  displayPreferences.fontSizePx = fontSize;
  if (rootElement) {
    const scale = fontSize / 16;
    rootElement.style.setProperty('--font-scale', scale.toString());
  }
  if (!bodyElement) {
    updateFontSizeDisplay();
    return;
  }
  const theme = displayPreferences.theme || 'light';
  bodyElement.dataset.theme = theme;
  updateFontSizeDisplay();
}

function syncSettingsForm() {
  if (!settingsForm) {
    return;
  }
  const theme = displayPreferences.theme || 'light';
  const themeInputs = settingsForm.querySelectorAll('input[name="theme"]');
  themeInputs.forEach((input) => {
    input.checked = input.value === theme;
  });
  updateFontSizeDisplay();
  updateLayoutSettingsDisplay();
}

function openSettingsModal() {
  if (!settingsModal) {
    return;
  }
  hideTooltip(true);
  closeInlineEditor();
  closeToolbarMenu();
  syncSettingsForm();
  settingsModal.setAttribute('aria-hidden', 'false');
  if (bodyElement) {
    bodyElement.style.overflow = 'hidden';
  }
  if (settingsForm) {
    const focusTarget =
      fontDecreaseButton ||
      settingsForm.querySelector('input[name="theme"]:checked') ||
      settingsForm.querySelector('input[name="theme"]');
    if (focusTarget) {
      focusTarget.focus();
    }
  }
}

function closeSettingsModal() {
  if (!settingsModal) {
    return;
  }
  settingsModal.setAttribute('aria-hidden', 'true');
  if (bodyElement && (!previewModal || !previewModal.classList.contains('is-visible'))) {
    bodyElement.style.overflow = '';
  }
}

function handleSettingsFormChange(event) {
  if (!event || !settingsForm) {
    return;
  }
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  if (target.name === 'theme') {
    displayPreferences.theme = target.value;
    applyDisplayPreferences();
  }
}

function adjustFontSize(delta) {
  if (typeof delta !== 'number' || Number.isNaN(delta)) {
    return;
  }
  const current = displayPreferences.fontSizePx || 16;
  const next = clampFontSizePx(current + delta);
  if (next === current) {
    updateFontSizeDisplay();
    return;
  }
  displayPreferences.fontSizePx = next;
  applyDisplayPreferences();
}

function ensureTooltipElement() {
  if (tooltipElement) {
    return tooltipElement;
  }
  const element = document.createElement('div');
  element.className = 'chart-tooltip';
  element.setAttribute('aria-hidden', 'true');
  element.innerHTML = `
    <div class="chart-tooltip__content">
      <div class="chart-tooltip__view" data-tooltip-view>
        <div class="chart-tooltip__type" data-tooltip-type></div>
        <div class="chart-tooltip__title" data-tooltip-title></div>
        <div class="chart-tooltip__datetime" data-tooltip-datetime></div>
        <div class="chart-tooltip__flag" data-tooltip-flag hidden>Проблемный участок</div>
        <div class="chart-tooltip__comment" data-tooltip-comment></div>
        <div class="chart-tooltip__icon-row" data-tooltip-icon-row hidden>
          <span class="chart-tooltip__icon-preview" data-tooltip-icon-preview></span>
          <button type="button" class="ghost" data-tooltip-icon-picker>Выбрать иконку</button>
        </div>
      </div>
    </div>
  `;
  element.addEventListener('mouseenter', cancelTooltipHide);
  element.addEventListener('mouseleave', () => scheduleTooltipHide());
  tooltipViewSection = element.querySelector('[data-tooltip-view]');
  tooltipEditorForm = null;
  tooltipFieldsContainer = null;
  tooltipSaveButton = null;
  tooltipCancelButton = null;
  document.body.appendChild(element);
  const iconButton = element.querySelector('[data-tooltip-icon-picker]');
  if (iconButton) {
    iconButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const eventId = iconButton.dataset.eventId;
      if (eventId) {
        openIconPickerForEvent(eventId);
      }
    });
  }
  tooltipElement = element;
  return tooltipElement;
}

function updateTooltipContent(detail, editInfo) {
  const tooltip = ensureTooltipElement();
  closeTooltipEditor(true);
  const typeEl = tooltip.querySelector('[data-tooltip-type]');
  const titleEl = tooltip.querySelector('[data-tooltip-title]');
  const datetimeEl = tooltip.querySelector('[data-tooltip-datetime]');
  const commentEl = tooltip.querySelector('[data-tooltip-comment]');
  const flagEl = tooltip.querySelector('[data-tooltip-flag]');

  const typeText = detail?.type || '';
  typeEl.textContent = typeText;
  typeEl.hidden = !typeText;

  titleEl.textContent = detail?.title || '';
  const datetimeText = detail?.date ? formatDisplayDateTime(detail.date, detail.time) : '';
  datetimeEl.textContent = datetimeText;
  datetimeEl.hidden = !datetimeText;

  if (flagEl) {
    const flagged = Boolean(detail?.isFlagged);
    flagEl.hidden = !flagged;
    flagEl.setAttribute('aria-hidden', flagged ? 'false' : 'true');
  }

  commentEl.innerHTML = '';
  const lines = typeof detail?.comment === 'string'
    ? detail.comment
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
    : [];
  if (lines.length) {
    commentEl.hidden = false;
    lines.forEach((line) => {
      const item = document.createElement('div');
      item.className = 'chart-tooltip__comment-line';
      item.textContent = line;
      commentEl.appendChild(item);
    });
  } else {
    commentEl.hidden = true;
  }

  const iconRow = tooltip.querySelector('[data-tooltip-icon-row]');
  const iconPreview = tooltip.querySelector('[data-tooltip-icon-preview]');
  const iconButton = tooltip.querySelector('[data-tooltip-icon-picker]');
  if (iconRow && iconPreview && iconButton) {
    const eventId = detail?.iconContext?.id || '';
    if (eventId) {
      const eventItem = state.events.find((entry) => entry.id === eventId);
      const icon = eventItem ? findEventIcon(eventItem.iconKey) : null;
      iconPreview.textContent = icon ? `${icon.glyph || ''} ${icon.label}`.trim() : '—';
      iconButton.dataset.eventId = eventId;
      iconButton.disabled = false;
      iconRow.hidden = false;
    } else {
      iconRow.hidden = true;
      iconButton.dataset.eventId = '';
    }
  }

}

function positionTooltip(anchorElement) {
  if (!tooltipElement) {
    return;
  }
  const tooltipRect = tooltipElement.getBoundingClientRect();
  const margin = 12;
  const viewportRight = window.innerWidth - margin;
  const viewportBottom = window.innerHeight - margin;

  const anchorRect =
    anchorElement && typeof anchorElement.getBoundingClientRect === 'function'
      ? anchorElement.getBoundingClientRect()
      : null;

  let left = Math.max(margin, (window.innerWidth - tooltipRect.width) / 2);
  let top = Math.max(margin, (window.innerHeight - tooltipRect.height) / 2);

  if (anchorRect) {
    left = anchorRect.right + margin;
    if (left + tooltipRect.width > viewportRight) {
      left = anchorRect.left - tooltipRect.width - margin;
    }
    if (left < margin) {
      left = Math.min(Math.max(margin, anchorRect.left + margin), viewportRight - tooltipRect.width);
    }

    top = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
    if (top < margin) {
      top = anchorRect.bottom + margin;
    }
    if (top + tooltipRect.height > viewportBottom) {
      top = anchorRect.top - tooltipRect.height - margin;
    }
    if (top < margin || top + tooltipRect.height > viewportBottom) {
      top = Math.max(margin, Math.min(viewportBottom - tooltipRect.height, top));
    }
  }

  tooltipElement.style.left = `${Math.round(left)}px`;
  tooltipElement.style.top = `${Math.round(top)}px`;
}

function cancelTooltipHide() {
  if (tooltipHideTimeout) {
    clearTimeout(tooltipHideTimeout);
    tooltipHideTimeout = null;
  }
}

function scheduleTooltipHide(delay = 400) {
  cancelTooltipHide();
  if (tooltipEditState) {
    return;
  }
  tooltipHideTimeout = window.setTimeout(() => {
    if (tooltipElement) {
      tooltipElement.classList.remove('is-visible');
      tooltipElement.setAttribute('aria-hidden', 'true');
    }
    tooltipActiveData = null;
    tooltipHideTimeout = null;
  }, delay);
}

function hideTooltip(immediate = false) {
  if (!tooltipElement) {
    return;
  }
  if (immediate) {
    cancelTooltipHide();
    closeTooltipEditor(true);
    tooltipElement.classList.remove('is-visible');
    tooltipElement.setAttribute('aria-hidden', 'true');
    tooltipActiveData = null;
    return;
  }
  scheduleTooltipHide();
}

function showTooltip(data, anchorElement) {
  if (!data) {
    return;
  }
  const tooltip = ensureTooltipElement();
  cancelTooltipHide();
  const anchor =
    anchorElement && typeof anchorElement.getBoundingClientRect === 'function'
      ? anchorElement
      : data.highlightTarget;
  tooltipActiveData = { ...data, anchorTarget: anchor };
  updateTooltipContent(data.detail, data.editInfo);
  tooltip.classList.add('is-visible');
  tooltip.setAttribute('aria-hidden', 'false');
  positionTooltip(anchor);
}

function handleTooltipEnter(event) {
  const target = event.currentTarget;
  const data = tooltipDataMap.get(target);
  if (!data) {
    return;
  }
  showTooltip(data, data.highlightTarget || target);
}

function handleTooltipLeave(event) {
  if (tooltipElement) {
    const nextTarget = event && event.relatedTarget;
    if (nextTarget && (nextTarget === tooltipElement || tooltipElement.contains(nextTarget))) {
      return;
    }
  }
  scheduleTooltipHide();
}

function createEditorFields(fields = [], values = {}, options = {}) {
  const idPrefix = options.idPrefix || 'editor-field';
  const classPrefix = options.classPrefix || 'chart-tooltip';
  const fragment = document.createDocumentFragment();
  const inputs = new Map();

  fields.forEach((field) => {
    if (!field || !field.name) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = `${classPrefix}__field`;

    const fieldType = field.type || 'text';
    const currentValue = values[field.name];
    let input;

    if (fieldType !== 'checkbox') {
      const label = document.createElement('label');
      label.className = `${classPrefix}__field-label`;
      label.textContent = field.label || field.name;
      label.setAttribute('for', `${idPrefix}-${field.name}`);
      wrapper.appendChild(label);
    }

    switch (fieldType) {
      case 'textarea':
        input = document.createElement('textarea');
        input.value = currentValue || '';
        break;
      case 'number':
        input = document.createElement('input');
        input.type = 'number';
        if (field.min !== undefined) input.min = field.min;
        if (field.max !== undefined) input.max = field.max;
        if (field.step !== undefined) input.step = field.step;
        input.value = currentValue !== undefined && currentValue !== null ? currentValue : '';
        break;
      case 'time':
        input = document.createElement('input');
        input.type = 'time';
        input.value = currentValue || '';
        break;
      case 'select':
      case 'multi-select': {
        input = document.createElement('select');
        const optionList = Array.isArray(field.options) ? field.options : [];
        if (fieldType === 'multi-select') {
          input.multiple = true;
          input.size = field.size || Math.min(optionList.length || 4, 6);
        }
        optionList.forEach((option) => {
          const optionEl = document.createElement('option');
          if (typeof option === 'string') {
            optionEl.value = option;
            optionEl.textContent = option;
          } else {
            optionEl.value = option.value;
            optionEl.textContent = option.label;
          }
          input.appendChild(optionEl);
        });
        if (input.multiple) {
          const selectedValues = Array.isArray(currentValue)
            ? currentValue.map((value) => String(value))
            : [];
          Array.from(input.options).forEach((option) => {
            option.selected = selectedValues.includes(option.value);
          });
        } else if (currentValue !== undefined && currentValue !== null) {
          input.value = currentValue;
        } else {
          input.value = '';
        }
        break;
      }
      case 'checkbox': {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = Boolean(currentValue);
        const checkboxLabel = document.createElement('label');
        checkboxLabel.className = `${classPrefix}__field-checkbox-label`;
        checkboxLabel.textContent = field.label || field.name;
        checkboxLabel.prepend(input);
        wrapper.appendChild(checkboxLabel);
        break;
      }
      default:
        input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue || '';
        break;
    }

    if (!input) {
      fragment.appendChild(wrapper);
      return;
    }

    if (fieldType !== 'checkbox') {
      input.id = `${idPrefix}-${field.name}`;
      input.classList.add(`${classPrefix}__field-input`);
      wrapper.appendChild(input);
    } else {
      input.classList.add(`${classPrefix}__field-checkbox`);
    }

    input.dataset.fieldName = field.name;
    input.dataset.fieldType = fieldType;
    if (field.required) {
      input.required = true;
    }

    fragment.appendChild(wrapper);
    inputs.set(field.name, input);
  });

  return { fragment, inputs };
}

function renderTooltipEditorFields(fields = [], values = {}) {
  if (!tooltipFieldsContainer) {
    return;
  }
  const { fragment, inputs } = createEditorFields(fields, values, {
    idPrefix: 'tooltip-field',
    classPrefix: 'chart-tooltip'
  });
  tooltipFieldsContainer.innerHTML = '';
  if (!tooltipEditState) {
    tooltipEditState = {};
  }
  tooltipEditState.inputs = inputs;
  tooltipFieldsContainer.appendChild(fragment);
}

function openTooltipEditor(data) {
  if (!data || !data.editInfo) {
    return false;
  }
  const config = TOOLTIP_EDITORS[data.editInfo.type];
  if (!config || typeof config.get !== 'function') {
    return false;
  }
  const initialValues = config.get(data.editInfo);
  if (!initialValues) {
    return false;
  }

  tooltipEditState = {
    config,
    editInfo: data.editInfo,
    initialValues,
    inputs: new Map()
  };

  renderTooltipEditorFields(config.fields || [], initialValues);

  cancelTooltipHide();

  if (tooltipViewSection) {
    tooltipViewSection.hidden = true;
  }
  if (tooltipEditorForm) {
    tooltipEditorForm.hidden = false;
  }
  if (tooltipElement) {
    tooltipElement.classList.add('is-editing');
  }
  return true;
}

function closeTooltipEditor(silent = false) {
  tooltipEditState = null;
  if (tooltipEditorForm) {
    tooltipEditorForm.hidden = true;
  }
  if (tooltipFieldsContainer) {
    tooltipFieldsContainer.innerHTML = '';
  }
  if (tooltipViewSection) {
    tooltipViewSection.hidden = false;
  }
  if (tooltipElement && !silent) {
    tooltipElement.classList.remove('is-editing');
  } else if (tooltipElement && silent) {
    tooltipElement.classList.remove('is-editing');
  }
}

function collectEditorValuesFromInputs(fields = [], inputsMap = new Map()) {
  const result = {};
  (fields || []).forEach((field) => {
    if (!field || !field.name) {
      return;
    }
    const input = inputsMap.get(field.name);
    if (!input) {
      return;
    }
    const fieldType = field.type || input.dataset.fieldType || 'text';
    switch (fieldType) {
      case 'checkbox':
        result[field.name] = input.checked;
        break;
      case 'number': {
        const value = input.value;
        result[field.name] = value === '' ? '' : Number(value);
        break;
      }
      case 'multi-select': {
        result[field.name] = Array.from(input.selectedOptions || []).map((option) => option.value);
        break;
      }
      default:
        result[field.name] = input.value;
        break;
    }
  });
  return result;
}

function collectTooltipEditorValues(config) {
  if (!tooltipEditState || !tooltipEditState.inputs) {
    return null;
  }
  return collectEditorValuesFromInputs(config.fields || [], tooltipEditState.inputs);
}

function closeInlineEditor() {
  if (inlineEditorElement && inlineEditorElement.parentElement) {
    inlineEditorElement.parentElement.removeChild(inlineEditorElement);
  }
  if (inlineEditorLayer) {
    inlineEditorLayer.setAttribute('aria-hidden', 'true');
  }
  inlineEditorElement = null;
  inlineEditorState = null;
}

function disposeChartLabelEditor() {
  if (typeof labelEditorCleanup === 'function') {
    try {
      labelEditorCleanup();
    } catch (error) {
      // ignore cleanup errors
    }
  }
  labelEditorCleanup = null;
  if (labelEditorElement && labelEditorElement.parentElement) {
    labelEditorElement.parentElement.removeChild(labelEditorElement);
  }
  if (labelEditorTarget) {
    if (labelEditorTarget.style) {
      labelEditorTarget.style.visibility = '';
    }
    if (labelEditorTarget.classList) {
      labelEditorTarget.classList.remove('is-label-editing');
    }
  }
  labelEditorElement = null;
  labelEditorTarget = null;
  labelEditorInitialValue = '';
  labelEditorCommitCallback = null;
}

function finishChartLabelEditor(applyChanges) {
  if (!labelEditorElement) {
    return;
  }
  const editor = labelEditorElement;
  const value = editor.value;
  const initial = labelEditorInitialValue;
  const commit = labelEditorCommitCallback;
  disposeChartLabelEditor();
  if (applyChanges && typeof commit === 'function') {
    commit(value, initial);
  }
}

function openChartLabelEditor(target, { initialValue = '', onCommit, multiline = true } = {}) {
  if (!chartViewport || !target) {
    return;
  }

  finishChartLabelEditor(false);

  const editor = multiline ? document.createElement('textarea') : document.createElement('input');
  editor.className = 'chart-label-editor';
  if (!multiline) {
    editor.type = 'text';
  }
  const valueText = initialValue !== undefined && initialValue !== null ? String(initialValue) : '';
  editor.value = valueText;
  editor.setAttribute('spellcheck', 'false');
  editor.setAttribute('autocomplete', 'off');
  editor.setAttribute('autocapitalize', 'none');

  const computed = window.getComputedStyle(target);
  editor.style.fontSize = computed.fontSize || '16px';
  editor.style.fontFamily = computed.fontFamily || 'inherit';
  editor.style.fontWeight = computed.fontWeight || '400';
  editor.style.lineHeight = computed.lineHeight || '1.4';
  editor.style.color = '#000000';

  const targetRect = target.getBoundingClientRect();
  const viewportRect = chartViewport.getBoundingClientRect();
  const padding = 10;
  const width = Math.max(targetRect.width + padding, 140);
  const minHeight = multiline ? 44 : 32;
  const height = Math.max(targetRect.height + padding, minHeight);
  const offsetLeft = targetRect.left - viewportRect.left - padding / 2;
  const offsetTop = targetRect.top - viewportRect.top - padding / 2;

  editor.style.width = `${Math.ceil(width)}px`;
  editor.style.height = `${Math.ceil(height)}px`;
  editor.style.left = `${Math.floor(offsetLeft)}px`;
  editor.style.top = `${Math.floor(offsetTop)}px`;

  const handleBlur = () => finishChartLabelEditor(true);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !(event.shiftKey || event.ctrlKey || event.altKey)) {
      event.preventDefault();
      finishChartLabelEditor(true);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      finishChartLabelEditor(false);
    }
  };

  editor.addEventListener('blur', handleBlur);
  editor.addEventListener('keydown', handleKeyDown);

  labelEditorCleanup = () => {
    editor.removeEventListener('blur', handleBlur);
    editor.removeEventListener('keydown', handleKeyDown);
  };

  chartViewport.appendChild(editor);

  labelEditorElement = editor;
  labelEditorTarget = target;
  labelEditorInitialValue = valueText;
  labelEditorCommitCallback = typeof onCommit === 'function' ? onCommit : null;

  if (target.style) {
    target.style.visibility = 'hidden';
  }
  if (target.classList) {
    target.classList.add('is-label-editing');
  }

  window.requestAnimationFrame(() => {
    editor.focus({ preventScroll: true });
    editor.select();
  });
}

function enableChartLabelOverrideEditing(element, { getCurrentText, onCommit, multiline = true } = {}) {
  if (!element) {
    return;
  }
  element.addEventListener('dblclick', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') {
      event.stopImmediatePropagation();
    }
    hideTooltip(true);
    closeInlineEditor();
    finishChartLabelEditor(false);
    const initial = typeof getCurrentText === 'function' ? getCurrentText() : '';
    openChartLabelEditor(element, {
      initialValue: initial,
      multiline,
      onCommit: (value, initialValue) => {
        const trimmed = typeof value === 'string' ? value.trim() : '';
        const previous = typeof initialValue === 'string' ? initialValue.trim() : '';
        if (trimmed === previous) {
          return;
        }
        if (typeof onCommit === 'function') {
          onCommit(trimmed);
        }
      }
    });
  });
}

function positionInlineEditor() {
  if (!inlineEditorElement || !inlineEditorState || !inlineEditorLayer) {
    return;
  }
  const highlightTarget = inlineEditorState.highlightTarget;
  const inlineOptions = inlineEditorState.inlineOptions || null;
  if (!highlightTarget || typeof highlightTarget.getBoundingClientRect !== 'function') {
    return;
  }
  const viewportRect = chartViewport
    ? chartViewport.getBoundingClientRect()
    : inlineEditorLayer.getBoundingClientRect();
  const targetRect = highlightTarget.getBoundingClientRect();
  const formRect = inlineEditorElement.getBoundingClientRect();

  const availableWidth = (chartViewport ? chartViewport.clientWidth : inlineEditorLayer.clientWidth) || formRect.width;
  const availableHeight = (chartViewport ? chartViewport.clientHeight : inlineEditorLayer.clientHeight) || formRect.height;

  const baseLeft = targetRect.left - viewportRect.left;
  const baseTop = targetRect.top - viewportRect.top;

  let desiredWidth = Math.max(220, Math.min(360, Math.max(targetRect.width + 60, formRect.width)));
  if (inlineOptions && typeof inlineOptions.preferredWidth === 'number') {
    const preferred = inlineOptions.preferredWidth;
    desiredWidth = Math.max(160, Math.min(360, preferred));
  }
  if (inlineOptions && inlineOptions.compact) {
    desiredWidth = Math.min(desiredWidth, 300);
  }
  inlineEditorElement.style.width = `${desiredWidth}px`;
  const updatedRect = inlineEditorElement.getBoundingClientRect();
  const editorWidth = updatedRect.width || desiredWidth;
  const editorHeight = updatedRect.height || formRect.height;

  const maxLeft = Math.max(0, availableWidth - editorWidth - 8);
  const maxTop = Math.max(0, availableHeight - editorHeight - 8);

  const left = Math.min(Math.max(0, baseLeft), maxLeft);
  const top = Math.min(Math.max(0, baseTop), maxTop);

  inlineEditorElement.style.left = `${left}px`;
  inlineEditorElement.style.top = `${top}px`;
}

function selectInitialValuesForFields(values = {}, fields = []) {
  const subset = {};
  fields.forEach((field) => {
    if (field && field.name) {
      subset[field.name] = values[field.name];
    }
  });
  return subset;
}

function openInlineEditor(editInfo, highlightTarget, inlineOptions = null) {
  if (!inlineEditorLayer || !editInfo) {
    return;
  }
  const config = TOOLTIP_EDITORS[editInfo.type];
  if (!config || typeof config.get !== 'function') {
    return;
  }
  const initialValues = config.get(editInfo);
  if (!initialValues) {
    return;
  }

  closeInlineEditor();

  const allFields = Array.isArray(config.fields) ? config.fields : [];
  let fields = allFields;
  if (inlineOptions && Array.isArray(inlineOptions.fieldNames) && inlineOptions.fieldNames.length) {
    const requested = new Set(inlineOptions.fieldNames.map(String));
    const filtered = allFields.filter((field) => requested.has(String(field.name)));
    if (filtered.length) {
      fields = filtered;
    }
  }
  if (!fields.length) {
    return;
  }

  const { fragment, inputs } = createEditorFields(fields, initialValues, {
    idPrefix: 'inline-field',
    classPrefix: 'chart-tooltip'
  });

  const form = document.createElement('form');
  form.className = 'chart-inline-editor';
  if (inlineOptions && inlineOptions.compact) {
    form.classList.add('chart-inline-editor--compact');
  }

  const fieldsWrapper = document.createElement('div');
  fieldsWrapper.className = 'chart-inline-editor__fields';
  fieldsWrapper.appendChild(fragment);
  form.appendChild(fieldsWrapper);

  const actions = document.createElement('div');
  actions.className = 'chart-inline-editor__actions';

  const cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.className = 'secondary';
  cancelButton.textContent = 'Отмена';
  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeInlineEditor();
  });

  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.className = 'primary';
  saveButton.textContent = 'Сохранить';

  actions.appendChild(cancelButton);
  actions.appendChild(saveButton);
  form.appendChild(actions);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!inlineEditorState) {
      closeInlineEditor();
      return;
    }
    const { config: activeConfig, inputs: activeInputs, initialValues: startValues, fields: activeFields } = inlineEditorState;
    if (!activeConfig || !activeInputs) {
      closeInlineEditor();
      return;
    }
    const currentFields = activeFields && activeFields.length ? activeFields : activeConfig.fields || [];
    const values = collectEditorValuesFromInputs(currentFields, activeInputs);
    if (!values) {
      closeInlineEditor();
      return;
    }
    const comparableInitials = selectInitialValuesForFields(startValues || {}, currentFields);
    if (areEditorValuesEqual(comparableInitials, values)) {
      closeInlineEditor();
      return;
    }

    pushHistoryState();
    const applied = typeof activeConfig.apply === 'function'
      ? activeConfig.apply(inlineEditorState.editInfo, values)
      : false;
    if (!applied && historyStack.length) {
      historyStack.pop();
      updateUndoButtonState();
    }
    closeInlineEditor();
    if (applied) {
      renderTimeline();
    }
  });

  inlineEditorElement = form;
  inlineEditorState = {
    config,
    editInfo,
    inputs,
    initialValues: selectInitialValuesForFields(initialValues, fields),
    fields,
    highlightTarget,
    inlineOptions: inlineOptions || null
  };

  inlineEditorLayer.appendChild(form);
  inlineEditorLayer.setAttribute('aria-hidden', 'false');

  positionInlineEditor();

  let focusInput = null;
  if (inlineOptions && inlineOptions.focusField && inputs.has(inlineOptions.focusField)) {
    focusInput = inputs.get(inlineOptions.focusField);
  }
  if (!focusInput) {
    focusInput = inputs.values().next().value;
  }
  if (focusInput && typeof focusInput.focus === 'function') {
    window.setTimeout(() => {
      if (!focusInput) {
        return;
      }
      focusInput.focus();
      if (typeof focusInput.select === 'function') {
        focusInput.select();
      }
    }, 0);
  }
}

function handleTooltipEditorSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  if (!tooltipEditState || !tooltipEditState.config) {
    closeTooltipEditor();
    return;
  }
  const config = tooltipEditState.config;
  const values = collectTooltipEditorValues(config);
  if (!values) {
    closeTooltipEditor();
    return;
  }
  const initialValues = tooltipEditState.initialValues || {};
  if (areEditorValuesEqual(initialValues, values)) {
    closeTooltipEditor();
    return;
  }

  pushHistoryState();
  const applied = typeof config.apply === 'function' ? config.apply(tooltipEditState.editInfo, values) : false;
  if (!applied && historyStack.length) {
    historyStack.pop();
    updateUndoButtonState();
  }
  closeTooltipEditor();
  if (applied) {
    renderTimeline();
  }
}

function registerTooltipTarget(target, detail, highlightTarget, editInfo) {
  if (!TOOLTIP_ENABLED || !target || !detail) {
    return;
  }
  tooltipDataMap.set(target, { detail, highlightTarget, editInfo });
  if (!target.dataset.tooltipBound) {
    target.addEventListener('mouseenter', handleTooltipEnter);
    target.addEventListener('mouseleave', handleTooltipLeave);
    target.dataset.tooltipBound = 'true';
  }
}

function extractIdNumber(id) {
  if (!id) return 0;
  const match = String(id).match(/-(\d+)$/);
  return match ? Number(match[1]) : 0;
}

function cloneStateData(source = state) {
  return {
    temps: Array.isArray(source.temps) ? source.temps.map((item) => ({ ...item })) : [],
    therapy: Array.isArray(source.therapy)
      ? source.therapy.map((course) => ({
          ...course,
          medications: Array.isArray(course.medications)
            ? course.medications.map((medication) => ({ ...medication }))
            : []
        }))
      : [],
    supportiveTherapy: Array.isArray(source.supportiveTherapy)
      ? source.supportiveTherapy.map((item) => ({ ...item }))
      : [],
    endoscopy: Array.isArray(source.endoscopy)
      ? source.endoscopy.map((item) => ({
          ...item,
          procedures: cloneEndoscopyProcedures(item.procedures)
        }))
      : [],
    neuro: Array.isArray(source.neuro) ? source.neuro.map((item) => ({ ...item })) : [],
    liver: Array.isArray(source.liver) ? source.liver.map((item) => ({ ...item })) : [],
    labDiagnostics: Array.isArray(source.labDiagnostics)
      ? source.labDiagnostics.map((item) => ({ ...item }))
      : [],
    surgery: Array.isArray(source.surgery) ? source.surgery.map((item) => ({ ...item })) : [],
    radiology: Array.isArray(source.radiology) ? source.radiology.map((item) => ({ ...item })) : [],
    events: Array.isArray(source.events) ? source.events.map((item) => ({ ...item })) : [],
    layout: source.layout ? normalizeLayoutState(source.layout) : normalizeLayoutState({})
  };
}

function captureStateSnapshot() {
  return {
    data: cloneStateData(),
    trackVisibility: Array.from(trackVisibility.entries()),
    parameterType: parameterSelect ? parameterSelect.value : '',
    idCounter
  };
}

function pushHistoryState() {
  historyStack.push(captureStateSnapshot());
  if (historyStack.length > MAX_HISTORY_ENTRIES) {
    historyStack.shift();
  }
  updateUndoButtonState();
}

function hasDataForTrackKey(key, source = state) {
  switch (key) {
    case 'temperature':
      return Array.isArray(source.temps) && source.temps.length > 0;
    case 'therapy':
      return (
        Array.isArray(source.therapy) &&
        source.therapy.some((course) => Array.isArray(course.medications) && course.medications.length > 0)
      );
    case 'support':
      return Array.isArray(source.supportiveTherapy) && source.supportiveTherapy.length > 0;
    case 'endoscopy':
      return Array.isArray(source.endoscopy) && source.endoscopy.length > 0;
    case 'surgery':
      return Array.isArray(source.surgery) && source.surgery.length > 0;
    case 'radiology':
      return Array.isArray(source.radiology) && source.radiology.length > 0;
    case 'neuro':
      return Array.isArray(source.neuro) && source.neuro.length > 0;
    case 'liver':
      return Array.isArray(source.liver) && source.liver.length > 0;
    case 'lab':
      return Array.isArray(source.labDiagnostics) && source.labDiagnostics.length > 0;
    case 'event':
      return Array.isArray(source.events) && source.events.length > 0;
    default:
      return false;
  }
}

function applyTrackVisibilitySnapshot(entries, { fallbackToData = false } = {}) {
  const visibilityMap = entries instanceof Map ? entries : new Map(entries || []);
  let anyVisible = false;

  TRACK_KEYS.forEach((key) => {
    let visible;
    if (visibilityMap.has(key)) {
      visible = Boolean(visibilityMap.get(key));
    } else if (fallbackToData) {
      visible = hasDataForTrackKey(key);
    } else {
      visible = trackVisibility.get(key) !== false;
    }
    trackVisibility.set(key, visible);
    if (visible) {
      anyVisible = true;
    }
  });

  if (!anyVisible && fallbackToData) {
    const fallbackKey = TRACK_KEYS.find((key) => hasDataForTrackKey(key));
    if (fallbackKey) {
      trackVisibility.set(fallbackKey, true);
      anyVisible = true;
    }
  }

  renderParameterVisibilityOptions();
  syncParameterSelectOptions();
  const activeParam = ensureActiveParameterSelection();
  syncDirectionForParameter(activeParam);
  closeParameterVisibilityDropdown();
  return anyVisible;
}

function rebuildTrackVisibilityFromState(source = state) {
  const entries = TRACK_KEYS.map((key) => [key, hasDataForTrackKey(key, source)]);
  const anyVisible = entries.some(([, visible]) => visible);
  if (anyVisible) {
    applyTrackVisibilitySnapshot(entries);
  } else {
    applyTrackVisibilitySnapshot(TRACK_KEYS.map((key) => [key, true]));
  }
}

function syncIdCounterWithState(source = state) {
  let maxValue = 0;
  const consider = (value) => {
    const numeric = extractIdNumber(value);
    if (numeric > maxValue) {
      maxValue = numeric;
    }
  };

  const data = cloneStateData(source);
  data.temps.forEach((item) => consider(item.id));
  data.neuro.forEach((item) => consider(item.id));
  data.liver.forEach((item) => consider(item.id));
  data.labDiagnostics.forEach((item) => consider(item.id));
  data.surgery.forEach((item) => consider(item.id));
  data.radiology.forEach((item) => consider(item.id));
  data.events.forEach((item) => consider(item.id));
  data.therapy.forEach((course) => {
    consider(course.id);
    (course.medications || []).forEach((medication) => consider(medication.id));
  });
  data.supportiveTherapy.forEach((item) => consider(item.id));
  data.endoscopy.forEach((item) => consider(item.id));

  idCounter = Math.max(maxValue, 0);
}

function restoreStateSnapshot(snapshot) {
  if (!snapshot || !snapshot.data) {
    return;
  }

  hideTooltip(true);
  closeInlineEditor();
  clearSelection();

  const cloned = cloneStateData(snapshot.data);
  state.temps = cloned.temps;
  state.therapy = cloned.therapy;
  state.supportiveTherapy = cloned.supportiveTherapy;
  state.endoscopy = cloned.endoscopy;
  state.neuro = cloned.neuro;
  state.liver = cloned.liver;
  state.labDiagnostics = cloned.labDiagnostics;
  state.surgery = cloned.surgery;
  state.radiology = cloned.radiology;
  state.events = cloned.events;
  state.layout = normalizeLayoutState(cloned.layout || state.layout || {});
  syncStepXFromLayout();
  updateLayoutSettingsDisplay();
  state.timelineDates = [];
  therapyDraft = createEmptyTherapyDraft();

  if (snapshot.trackVisibility && snapshot.trackVisibility.length) {
    applyTrackVisibilitySnapshot(snapshot.trackVisibility, { fallbackToData: true });
  } else {
    rebuildTrackVisibilityFromState(state);
  }

  syncIdCounterWithState(state);

  let targetType = snapshot.parameterType || '';
  if (parameterSelect) {
    if (targetType) {
      syncDirectionForParameter(targetType);
    }
    const config = getParameterConfig(targetType);
    const trackKey = config ? config.trackKey : targetType;
    if (!targetType || !isTrackVisible(trackKey)) {
      targetType = ensureActiveParameterSelection();
      syncDirectionForParameter(targetType);
    }
  } else if (!targetType || !isTrackVisible(targetType)) {
    targetType = ensureActiveParameterSelection();
  }

  renderDynamicFields(parameterSelect ? parameterSelect.value : targetType);
  renderTimeline();
  showDetails(null);
}

function updateUndoButtonState() {
  if (!undoButton) {
    return;
  }
  undoButton.disabled = historyStack.length === 0;
}

function syncParameterSelectOptions() {
  if (!parameterSelect) return;
  Array.from(parameterSelect.options).forEach((option) => {
    if (!option.value) return;
    const config = getParameterConfig(option.value);
    const trackKey = config ? config.trackKey : option.value;
    const visible = isTrackVisible(trackKey);
    option.disabled = !visible;
    option.classList.toggle('is-disabled', !visible);
  });
}

function ensureActiveParameterSelection() {
  if (!parameterSelect) return '';
  const current = parameterSelect.value;
  if (current) {
    const config = getParameterConfig(current);
    const trackKey = config ? config.trackKey : current;
    if (trackKey && isTrackVisible(trackKey)) {
      return current;
    }
  }
  const fallbackOption = Array.from(parameterSelect.options).find((option) => {
    if (!option.value) return false;
    const config = getParameterConfig(option.value);
    const trackKey = config ? config.trackKey : option.value;
    return isTrackVisible(trackKey);
  });
  let fallback = fallbackOption ? fallbackOption.value : '';
  if (!fallback && directionSelect) {
    const fallbackEntry = DIRECTIONS.map((direction) => {
      const params = getParametersForDirection(direction.id);
      const param = params.find((entry) => isTrackVisible(entry.trackKey));
      return param ? { direction: direction.id, param: param.id } : null;
    }).find(Boolean);
    if (fallbackEntry) {
      directionSelect.value = fallbackEntry.direction;
      populateParameterSelect(fallbackEntry.direction, { selectedId: fallbackEntry.param });
      fallback = fallbackEntry.param;
    }
  }
  parameterSelect.value = fallback || '';
  return parameterSelect.value;
}

function populateDirectionSelect(preferredDirection = '') {
  if (!directionSelect) return;
  directionSelect.innerHTML = '';
  DIRECTIONS.forEach((direction) => {
    const option = document.createElement('option');
    option.value = direction.id;
    option.textContent = direction.label;
    directionSelect.appendChild(option);
  });
  const fallback = preferredDirection || DIRECTIONS[0]?.id || '';
  directionSelect.value = fallback;
}

function populateParameterSelect(directionKey, { selectedId = '' } = {}) {
  if (!parameterSelect) return;
  parameterSelect.innerHTML = '';
  const params = getParametersForDirection(directionKey);
  params.forEach((param) => {
    const option = document.createElement('option');
    option.value = param.id;
    option.textContent = param.label;
    parameterSelect.appendChild(option);
  });
  syncParameterSelectOptions();
  const preferred = selectedId && params.some((param) => param.id === selectedId) ? selectedId : '';
  if (preferred) {
    parameterSelect.value = preferred;
  } else {
    ensureActiveParameterSelection();
  }
}

function syncDirectionForParameter(parameterId) {
  if (!directionSelect) return;
  const direction = getDirectionForParameter(parameterId) || directionSelect.value || DIRECTIONS[0]?.id || '';
  if (direction && directionSelect.value !== direction) {
    directionSelect.value = direction;
  }
  populateParameterSelect(direction, { selectedId: parameterId });
}

function updateFormModeIndicators(type) {
  if (!submitButton || !entryForm) return;
  const editing = Boolean(editContext && (!type || editContext.type === type));
  submitButton.textContent = editing ? 'Сохранить изменения' : 'Добавить';
  submitButton.classList.toggle('is-editing', editing);
  entryForm.classList.toggle('is-editing', editing);
}

function exitEditMode({ refreshFields = true } = {}) {
  if (!editContext) return;
  editContext = null;
  updateFormModeIndicators(parameterSelect.value);
  if (refreshFields) {
    renderDynamicFields(parameterSelect.value);
  }
}

function getEditingSnapshot(type) {
  if (!editContext || editContext.type !== type) {
    return null;
  }
  switch (type) {
    case 'temperature':
      return state.temps.find((item) => item.id === editContext.id) || null;
    case 'neuro':
      return state.neuro.find((item) => item.id === editContext.id) || null;
    case 'liver':
      return state.liver.find((item) => item.id === editContext.id) || null;
    case 'lab':
      return state.labDiagnostics.find((item) => item.id === editContext.id) || null;
    case 'surgery':
      return state.surgery.find((item) => item.id === editContext.id) || null;
    case 'radiology':
      return state.radiology.find((item) => item.id === editContext.id) || null;
    case 'event':
      return state.events.find((item) => item.id === editContext.id) || null;
    case 'therapy': {
      const course = state.therapy.find((item) => item.id === editContext.courseId);
      if (!course) {
        return null;
      }
      return {
        ...course,
        medications: Array.isArray(course.medications)
          ? course.medications.map((medication) => ({ ...medication }))
          : []
      };
    }
    case 'support':
      return state.supportiveTherapy.find((item) => item.id === editContext.id) || null;
    case 'endoscopy': {
      const target = state.endoscopy.find((item) => item.id === editContext.id);
      if (!target) {
        return null;
      }
      return {
        ...target,
        procedures: cloneEndoscopyProcedures(target.procedures)
      };
    }
    default:
      return null;
  }
}

function enterEditMode(editInfo) {
  if (!editInfo || !editInfo.type) {
    return;
  }
  const type = editInfo.type;
  if (!isTrackVisible(type)) {
    setTrackVisibility(type, true);
    const toggle = trackToggleMap.get(type);
    if (toggle) {
      toggle.checked = true;
    }
    syncParameterSelectOptions();
  }

  editContext = { ...editInfo };
  const parameterId = editInfo.parameterId || type;
  if (parameterSelect) {
    syncDirectionForParameter(parameterId);
  }
  renderDynamicFields(parameterId);
  updateFormModeIndicators(type);
}

function handleTrackToggleChange(event) {
  const checkbox = event.currentTarget;
  const key = checkbox ? checkbox.value : '';
  if (!key) return;
  const visible = checkbox.checked;
  clearSelection();
  hideTooltip(true);
  closeInlineEditor();
  setTrackVisibility(key, visible);
  syncParameterSelectOptions();
  const activeParam = ensureActiveParameterSelection();
  syncDirectionForParameter(activeParam);
  renderTimeline();
  renderDynamicFields(parameterSelect.value);
}

function initializeTrackToggles() {
  renderParameterVisibilityOptions();
  trackToggleInputs.forEach((input) => {
    const key = input.value;
    if (!trackVisibility.has(key)) {
      trackVisibility.set(key, input.checked);
    } else {
      input.checked = isTrackVisible(key);
    }
  });
  updateVisibilityTriggerLabel();
  syncParameterSelectOptions();
  const activeParam = ensureActiveParameterSelection();
  syncDirectionForParameter(activeParam);
}

function waitForFonts() {
  if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
    return document.fonts.ready.catch(() => {});
  }
  return Promise.resolve();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('Не удалось создать изображение из SVG'));
    image.src = src;
  });
}

function cleanupPreviewResource() {
  if (previewResourceUrl && previewResourceIsObjectUrl) {
    URL.revokeObjectURL(previewResourceUrl);
  }
  previewResourceUrl = null;
  previewResourceIsObjectUrl = false;
}

function triggerDownload(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  link.style.position = 'absolute';
  link.style.left = '-9999px';
  document.body.appendChild(link);
  link.click();
  requestAnimationFrame(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  });
}

function updateZoomButtons() {
  const stepX = getStepX();
  if (zoomOutButton) {
    zoomOutButton.disabled = stepX <= STEP_X_MIN + 0.1;
  }
  if (zoomInButton) {
    zoomInButton.disabled = stepX >= STEP_X_MAX - 0.1;
  }
}

function adjustZoom(delta) {
  const nextStep = clampStepX(getStepX() + delta);
  if (nextStep === getStepX()) {
    updateZoomButtons();
    return;
  }
  currentStepX = nextStep;
  state.layout = normalizeLayoutState({ ...(state.layout || {}), stepX: nextStep });
  renderTimeline();
  updateLayoutSettingsDisplay();
}

function handleResetGraph() {
  hideTooltip(true);
  closeInlineEditor();
  if (panContext.active) {
    endPan();
  }
  currentStepX = STEP_X_DEFAULT;
  state.layout = normalizeLayoutState({ ...(state.layout || {}), stepX: STEP_X_DEFAULT });
  if (chartScrollContainer) {
    chartScrollContainer.scrollLeft = 0;
    chartScrollContainer.scrollTop = 0;
  }
  updateZoomButtons();
  updateLayoutSettingsDisplay();
  renderTimeline();
}

function setSpacePanMode(enabled) {
  panContext.spaceMode = Boolean(enabled);
  if (!chartScrollContainer) {
    return;
  }
  chartScrollContainer.classList.toggle('is-space-panning', panContext.spaceMode);
  if (!panContext.spaceMode && panContext.active) {
    endPan();
  }
}

function startPan(event) {
  if (!chartScrollContainer) {
    return;
  }
  panContext.active = true;
  panContext.startX = event.clientX;
  panContext.startY = event.clientY;
  panContext.scrollLeft = chartScrollContainer.scrollLeft;
  panContext.scrollTop = chartScrollContainer.scrollTop;
  chartScrollContainer.classList.add('is-panning');
  document.addEventListener('mousemove', handlePanMouseMove);
  document.addEventListener('mouseup', handlePanMouseUp);
}

function handlePanMouseMove(event) {
  if (!panContext.active || !chartScrollContainer) {
    return;
  }
  const dx = event.clientX - panContext.startX;
  const dy = event.clientY - panContext.startY;
  chartScrollContainer.scrollLeft = panContext.scrollLeft - dx;
  chartScrollContainer.scrollTop = panContext.scrollTop - dy;
}

function handlePanMouseUp() {
  endPan();
}

function endPan() {
  if (!panContext.active) {
    return;
  }
  panContext.active = false;
  if (chartScrollContainer) {
    chartScrollContainer.classList.remove('is-panning');
  }
  document.removeEventListener('mousemove', handlePanMouseMove);
  document.removeEventListener('mouseup', handlePanMouseUp);
}

function ensureSvgStyles(targetSvg) {
  if (!targetSvg) return;
  const existing = targetSvg.querySelector('style[data-export-style="true"]');
  if (existing) {
    existing.textContent = SVG_STYLE_TEXT;
    if (existing !== targetSvg.firstChild) {
      targetSvg.insertBefore(existing, targetSvg.firstChild);
    }
    return;
  }
  const styleElement = createSvgElement('style', { 'data-export-style': 'true' });
  styleElement.textContent = SVG_STYLE_TEXT;
  targetSvg.insertBefore(styleElement, targetSvg.firstChild || null);
}

function createEmptyTherapyDraft() {
  return { medications: [] };
}

function createField(field) {
  const wrapper = document.createElement('div');
  wrapper.className = 'form-field';

  if (field.type === 'checkbox') {
    wrapper.classList.add('form-field--checkbox');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `field-${field.name}`;
    input.name = field.name;
    if (field.required) {
      input.required = true;
    }
    if (field.defaultValue) {
      input.checked = Boolean(field.defaultValue);
    }
    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = field.label;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return wrapper;
  }

  const label = document.createElement('label');
  label.setAttribute('for', `field-${field.name}`);
  label.textContent = field.label + (field.required ? ' *' : '');
  wrapper.appendChild(label);

  let input;
  if (field.type === 'textarea') {
    input = document.createElement('textarea');
  } else if (field.type === 'select') {
    input = document.createElement('select');
    if (field.multiple) {
      input.multiple = true;
      if (field.size) {
        input.size = field.size;
      } else if (Array.isArray(field.options)) {
        input.size = Math.min(field.options.length, 8);
      }
    } else {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      placeholderOption.hidden = true;
      placeholderOption.textContent = field.placeholder || 'Выберите значение';
      input.appendChild(placeholderOption);
    }

    if (Array.isArray(field.options)) {
      field.options.forEach((option) => {
        const optionElement = document.createElement('option');
        if (typeof option === 'string') {
          optionElement.value = option;
          optionElement.textContent = option;
        } else {
          optionElement.value = option.value;
          optionElement.textContent = option.label;
        }
        input.appendChild(optionElement);
      });
    }
  } else {
    input = document.createElement('input');
    input.type = field.type;
  }

  input.id = `field-${field.name}`;
  input.name = field.name;
  if (field.placeholder && field.type !== 'select') {
    input.placeholder = field.placeholder;
  }
  if (field.defaultValue) {
    if (field.type === 'select' && input.multiple && Array.isArray(field.defaultValue)) {
      Array.from(input.options).forEach((option) => {
        option.selected = field.defaultValue.includes(option.value);
      });
    } else {
      input.value = field.defaultValue;
    }
  }
  if (field.step) {
    input.step = field.step;
  }
  if (field.min) {
    input.min = field.min;
  }
  if (field.max) {
    input.max = field.max;
  }
  if (field.required) {
    input.required = true;
  }

  wrapper.appendChild(input);
  return wrapper;
}

function renderDynamicFields(type) {
  const currentType = type || ensureActiveParameterSelection();
  const parameterConfig = getParameterConfig(currentType);
  const trackKey = parameterConfig ? parameterConfig.trackKey : currentType;
  const formKind = parameterConfig ? parameterConfig.formKind : currentType;
  dynamicFields.innerHTML = '';
  updateFormModeIndicators(trackKey);

  if (!currentType || !trackKey) {
    if (submitButton) {
      submitButton.disabled = true;
    }
    const notice = document.createElement('p');
    notice.className = 'form-notice';
    notice.textContent = 'Отметьте параметр слева, чтобы добавить первое событие.';
    dynamicFields.appendChild(notice);
    return;
  }

  const visible = isTrackVisible(trackKey);
  if (!visible) {
    if (submitButton) {
      submitButton.disabled = true;
    }
    const notice = document.createElement('p');
    notice.className = 'form-notice';
    notice.textContent = 'Включите параметр выше, чтобы добавлять и редактировать данные на графике.';
    dynamicFields.appendChild(notice);
    return;
  }

  if (submitButton) {
    submitButton.disabled = false;
  }

  let editingSnapshot = getEditingSnapshot(trackKey);
  if (editContext && editContext.type === trackKey && editContext.parameterId && editContext.parameterId !== currentType) {
    editingSnapshot = null;
  }
  if (editContext && editContext.type === trackKey && !editingSnapshot) {
    editContext = null;
    updateFormModeIndicators(trackKey);
  }

  if (formKind === 'therapy') {
    renderTherapyDynamicFields(editingSnapshot);
    updateFormModeIndicators(trackKey);
    return;
  }

  if (formKind === 'endoscopy') {
    renderEndoscopyDynamicFields(editingSnapshot || null);
    updateFormModeIndicators(trackKey);
    return;
  }

  const fields = formConfig[formKind] || [];
  fields.forEach((field) => {
    const fieldElement = createField(field);
    dynamicFields.appendChild(fieldElement);
    if (!editingSnapshot) {
      return;
    }
    const input = fieldElement.querySelector(`#field-${field.name}`);
    if (!input) {
      return;
    }
    if (!Object.prototype.hasOwnProperty.call(editingSnapshot, field.name)) {
      return;
    }
    const value = editingSnapshot[field.name] ?? '';
    if (input.tagName === 'SELECT') {
      if (input.multiple) {
        const selectedValues = Array.isArray(value)
          ? value
          : typeof value === 'string' && value.length
            ? value.split(LIST_DELIMITER).map((entry) => entry.trim()).filter(Boolean)
            : [];
        Array.from(input.options).forEach((option) => {
          option.selected = selectedValues.includes(option.value);
        });
      } else {
        input.value = value || '';
      }
    } else if (input.type === 'checkbox') {
      input.checked = Boolean(value);
    } else {
      input.value = value;
    }
  });

  updateFormModeIndicators(trackKey);
}

function collectFormData(type) {
  const parameterConfig = getParameterConfig(type);
  const trackKey = parameterConfig ? parameterConfig.trackKey : type;
  const formKind = parameterConfig ? parameterConfig.formKind : type;
  if (!type || !trackKey || !isTrackVisible(trackKey)) {
    alert('Отметьте параметр в списке выше, чтобы работать с данными.');
    return null;
  }

  if (formKind === 'therapy') {
    return collectTherapyFormData();
  }

  if (formKind === 'endoscopy') {
    return collectEndoscopyFormData();
  }

  const fields = formConfig[formKind] || [];
  const payload = {};

  for (const field of fields) {
    const input = entryForm.querySelector(`[name="${field.name}"]`);
    if (!input) continue;
    if (input.tagName === 'SELECT') {
      if (input.multiple) {
        const selectedValues = Array.from(input.selectedOptions).map((option) => option.value.trim());
        if (field.required && selectedValues.length === 0) {
          alert(`Выберите одно или несколько значений: ${field.label}`);
          return null;
        }
        payload[field.name] = selectedValues;
        continue;
      }

      const value = input.value;
      if (field.required && !value) {
        alert(`Выберите значение: ${field.label}`);
        return null;
      }
      payload[field.name] = value;
      continue;
    }

    if (input.type === 'checkbox') {
      payload[field.name] = input.checked;
      continue;
    }

    const value = input.value.trim();
    if (field.required && !value) {
      alert(`Заполните поле: ${field.label}`);
      return null;
    }
    payload[field.name] = value;
  }

  return payload;
}

function renderTherapyDynamicFields(editingCourse) {
  therapyDraft = editingCourse
    ? {
        courseId: editingCourse.id,
        medications: Array.isArray(editingCourse.medications)
          ? editingCourse.medications.map((medication) => ({ ...medication }))
          : []
      }
    : createEmptyTherapyDraft();

  const startField = createField({ type: 'date', name: 'startDate', label: 'Дата начала', required: true });
  const endField = createField({ type: 'date', name: 'endDate', label: 'Дата окончания', required: false });
  const commentField = createField({
    type: 'textarea',
    name: 'courseComment',
    label: 'Комментарий к курсу',
    required: false,
    placeholder: 'Например: особенности схемы, мониторинг побочных эффектов'
  });

  dynamicFields.appendChild(startField);
  dynamicFields.appendChild(endField);
  dynamicFields.appendChild(commentField);

  const flagField = createField({
    type: 'checkbox',
    name: 'isFlagged',
    label: 'Выделить красным (проблемный участок)'
  });
  dynamicFields.appendChild(flagField);

  if (editingCourse) {
    const startInputEl = startField.querySelector('input');
    const endInputEl = endField.querySelector('input');
    const commentInputEl = commentField.querySelector('textarea');
    const flagInputEl = flagField.querySelector('input[type="checkbox"]');
    if (startInputEl) {
      startInputEl.value = editingCourse.startDate || '';
    }
    if (endInputEl) {
      endInputEl.value = editingCourse.endDate || '';
    }
    if (commentInputEl) {
      commentInputEl.value = editingCourse.comment || '';
    }
    if (flagInputEl) {
      flagInputEl.checked = Boolean(editingCourse.isFlagged);
    }
  }

  const builder = document.createElement('div');
  builder.className = 'therapy-builder';

  const selectField = document.createElement('div');
  selectField.className = 'form-field therapy-builder__select-field';

  const selectLabel = document.createElement('label');
  selectLabel.setAttribute('for', 'therapyMedicationSelect');
  selectLabel.textContent = 'Добавить препарат';
  selectField.appendChild(selectLabel);

  const select = document.createElement('select');
  select.id = 'therapyMedicationSelect';
  select.name = 'therapyMedicationSelect';
  const placeholderOption = document.createElement('option');
  placeholderOption.value = '';
  placeholderOption.textContent = 'Выберите препарат';
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  placeholderOption.hidden = true;
  select.appendChild(placeholderOption);
  THERAPY_MEDICATIONS.forEach((medication) => {
    const option = document.createElement('option');
    option.value = medication;
    option.textContent = medication;
    select.appendChild(option);
  });
  selectField.appendChild(select);

  builder.appendChild(selectField);

  const inputsWrapper = document.createElement('div');
  inputsWrapper.className = 'therapy-builder__inputs';
  inputsWrapper.hidden = true;

  const dosageField = document.createElement('div');
  dosageField.className = 'therapy-inline-field';
  const dosageLabel = document.createElement('label');
  dosageLabel.setAttribute('for', 'therapyMedicationDosage');
  dosageLabel.textContent = 'Дозировка';
  const dosageInput = document.createElement('input');
  dosageInput.type = 'text';
  dosageInput.id = 'therapyMedicationDosage';
  dosageInput.placeholder = 'Например: 600 мг/сут';
  dosageField.appendChild(dosageLabel);
  dosageField.appendChild(dosageInput);

  const noteField = document.createElement('div');
  noteField.className = 'therapy-inline-field';
  const noteLabel = document.createElement('label');
  noteLabel.setAttribute('for', 'therapyMedicationNote');
  noteLabel.textContent = 'Примечание';
  const noteInput = document.createElement('textarea');
  noteInput.id = 'therapyMedicationNote';
  noteInput.placeholder = 'Дополнительные сведения: мониторинг, ограничения, побочные реакции';
  noteInput.rows = 3;
  noteField.appendChild(noteLabel);
  noteField.appendChild(noteInput);

  const periodRow = document.createElement('div');
  periodRow.className = 'therapy-inline-row';

  const startFieldWrapper = document.createElement('div');
  startFieldWrapper.className = 'therapy-inline-field';
  const startLabel = document.createElement('label');
  startLabel.setAttribute('for', 'therapyMedicationStart');
  startLabel.textContent = 'Начало (для препарата)';
  const startInput = document.createElement('input');
  startInput.type = 'date';
  startInput.id = 'therapyMedicationStart';
  startFieldWrapper.appendChild(startLabel);
  startFieldWrapper.appendChild(startInput);

  const endFieldWrapper = document.createElement('div');
  endFieldWrapper.className = 'therapy-inline-field';
  const endLabel = document.createElement('label');
  endLabel.setAttribute('for', 'therapyMedicationEnd');
  endLabel.textContent = 'Окончание (для препарата)';
  const endInput = document.createElement('input');
  endInput.type = 'date';
  endInput.id = 'therapyMedicationEnd';
  endFieldWrapper.appendChild(endLabel);
  endFieldWrapper.appendChild(endInput);

  periodRow.appendChild(startFieldWrapper);
  periodRow.appendChild(endFieldWrapper);

  const frequencyRow = document.createElement('div');
  frequencyRow.className = 'therapy-inline-row therapy-frequency-row';

  const frequencyCountField = document.createElement('div');
  frequencyCountField.className = 'therapy-inline-field therapy-frequency-count';
  const frequencyCountLabel = document.createElement('label');
  frequencyCountLabel.setAttribute('for', 'therapyMedicationFrequencyCount');
  frequencyCountLabel.textContent = 'Кратность приёма';
  const frequencyCountInput = document.createElement('input');
  frequencyCountInput.type = 'number';
  frequencyCountInput.min = '1';
  frequencyCountInput.step = '1';
  frequencyCountInput.max = '7';
  frequencyCountInput.id = 'therapyMedicationFrequencyCount';
  frequencyCountInput.placeholder = 'Например: 1';
  frequencyCountField.appendChild(frequencyCountLabel);
  frequencyCountField.appendChild(frequencyCountInput);

  const frequencyUnitField = document.createElement('div');
  frequencyUnitField.className = 'therapy-inline-field therapy-frequency-unit';
  const frequencyUnitLabel = document.createElement('label');
  frequencyUnitLabel.setAttribute('for', 'therapyMedicationFrequencyUnit');
  frequencyUnitLabel.textContent = 'Периодичность';
  const frequencyUnitSelect = document.createElement('select');
  frequencyUnitSelect.id = 'therapyMedicationFrequencyUnit';
  const frequencyPlaceholder = document.createElement('option');
  frequencyPlaceholder.value = '';
  frequencyPlaceholder.textContent = 'Выберите периодичность';
  frequencyPlaceholder.disabled = true;
  frequencyPlaceholder.selected = true;
  frequencyPlaceholder.hidden = true;
  frequencyUnitSelect.appendChild(frequencyPlaceholder);
  [
    { value: 'perDay', label: 'раз в сутки' },
    { value: 'perWeek', label: 'раз в неделю' }
  ].forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    frequencyUnitSelect.appendChild(optionElement);
  });
  frequencyUnitField.appendChild(frequencyUnitLabel);
  frequencyUnitField.appendChild(frequencyUnitSelect);

  frequencyRow.appendChild(frequencyCountField);
  frequencyRow.appendChild(frequencyUnitField);

  const weekdaysField = document.createElement('div');
  weekdaysField.className = 'therapy-weekdays';
  weekdaysField.hidden = true;

  const weekdaysLabel = document.createElement('span');
  weekdaysLabel.className = 'therapy-weekdays__label';
  weekdaysLabel.textContent = 'Дни приёма (для еженедельного графика)';
  weekdaysField.appendChild(weekdaysLabel);

  const weekdaysList = document.createElement('div');
  weekdaysList.className = 'therapy-weekdays__list';
  const weekdayInputs = [];
  WEEKDAY_LABELS.forEach((labelText, index) => {
    const itemLabel = document.createElement('label');
    itemLabel.className = 'therapy-weekdays__item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = String(index);
    const text = document.createElement('span');
    text.textContent = labelText;
    itemLabel.appendChild(checkbox);
    itemLabel.appendChild(text);
    weekdaysList.appendChild(itemLabel);
    weekdayInputs.push(checkbox);
  });
  weekdaysField.appendChild(weekdaysList);

  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.className = 'therapy-builder__add';
  addButton.textContent = 'Добавить препарат';

  inputsWrapper.appendChild(dosageField);
  inputsWrapper.appendChild(noteField);
  inputsWrapper.appendChild(periodRow);
  inputsWrapper.appendChild(frequencyRow);
  inputsWrapper.appendChild(weekdaysField);
  inputsWrapper.appendChild(addButton);

  builder.appendChild(inputsWrapper);

  const listTitle = document.createElement('div');
  listTitle.className = 'therapy-builder__list-title';
  listTitle.textContent = 'Состав курса';
  builder.appendChild(listTitle);

  const list = document.createElement('div');
  list.className = 'therapy-builder__list';
  builder.appendChild(list);

  therapyFormElements.builder = builder;
  therapyFormElements.select = select;
  therapyFormElements.inputsWrapper = inputsWrapper;
  therapyFormElements.dosage = dosageInput;
  therapyFormElements.note = noteInput;
  therapyFormElements.addButton = addButton;
  therapyFormElements.list = list;
  therapyFormElements.start = startInput;
  therapyFormElements.end = endInput;
  therapyFormElements.frequencyCount = frequencyCountInput;
  therapyFormElements.frequencyUnit = frequencyUnitSelect;
  therapyFormElements.weekdaysContainer = weekdaysField;
  therapyFormElements.weekdayInputs = weekdayInputs;

  select.addEventListener('change', handleTherapyMedicationSelectionChange);
  frequencyUnitSelect.addEventListener('change', handleTherapyFrequencyUnitChange);
  frequencyCountInput.addEventListener('input', handleTherapyFrequencyCountChange);
  addButton.addEventListener('click', handleTherapyMedicationAdd);

  dynamicFields.appendChild(builder);
  updateTherapyMedicationsList();

  const supportHint = document.createElement('div');
  supportHint.className = 'therapy-support-hint';
  const supportText = document.createElement('p');
  supportText.className = 'therapy-support-hint__text';
  supportText.textContent =
    'Если для контроля побочных эффектов требуется больше назначений, добавьте терапию сопровождения.';
  const supportButton = document.createElement('button');
  supportButton.type = 'button';
  supportButton.className = 'therapy-support-hint__button ghost';
  supportButton.textContent = 'Добавить терапию сопровождения';
  supportButton.addEventListener('click', handleTherapySupportButtonClick);
  supportHint.appendChild(supportText);
  supportHint.appendChild(supportButton);
  dynamicFields.appendChild(supportHint);
  therapyFormElements.supportButton = supportButton;
}

function collectTherapyFormData() {
  const startInput = entryForm.querySelector('[name="startDate"]');
  const endInput = entryForm.querySelector('[name="endDate"]');
  const commentInput = entryForm.querySelector('[name="courseComment"]');
  const flagInput = entryForm.querySelector('[name="isFlagged"]');

  const startDate = startInput ? startInput.value : '';
  const endDate = endInput ? endInput.value : '';
  const comment = commentInput ? commentInput.value.trim() : '';
  const isFlagged = flagInput ? flagInput.checked : false;

  if (!startDate) {
    alert('Укажите дату начала курса терапии');
    return null;
  }

  if (endDate && parseDate(endDate) < parseDate(startDate)) {
    alert('Дата окончания не может быть раньше даты начала');
    return null;
  }

  if (!therapyDraft.medications.length) {
    alert('Добавьте хотя бы один препарат в схему лечения');
    return null;
  }

  return {
    startDate,
    endDate,
    comment,
    isFlagged,
    medications: therapyDraft.medications.map((medication) => ({ ...medication }))
  };
}

function handleTherapyMedicationSelectionChange() {
  if (!therapyFormElements.select || !therapyFormElements.inputsWrapper) {
    return;
  }
  const selected = therapyFormElements.select.value;
  const shouldShow = Boolean(selected);
  therapyFormElements.inputsWrapper.hidden = !shouldShow;
  if (shouldShow && therapyFormElements.dosage) {
    therapyFormElements.dosage.focus();
    const courseStartInput = entryForm.querySelector('[name="startDate"]');
    const courseEndInput = entryForm.querySelector('[name="endDate"]');
    if (therapyFormElements.start) {
      therapyFormElements.start.value = courseStartInput ? courseStartInput.value : '';
    }
    if (therapyFormElements.end) {
      therapyFormElements.end.value = courseEndInput ? courseEndInput.value : '';
    }
    if (therapyFormElements.frequencyCount) {
      therapyFormElements.frequencyCount.value = '';
    }
    if (therapyFormElements.frequencyUnit) {
      therapyFormElements.frequencyUnit.value = '';
    }
    if (therapyFormElements.weekdayInputs) {
      therapyFormElements.weekdayInputs.forEach((input) => {
        input.checked = false;
      });
    }
    if (therapyFormElements.weekdaysContainer) {
      therapyFormElements.weekdaysContainer.hidden = true;
    }
  } else {
    if (therapyFormElements.dosage) {
      therapyFormElements.dosage.value = '';
    }
    if (therapyFormElements.note) {
      therapyFormElements.note.value = '';
    }
    if (therapyFormElements.start) {
      therapyFormElements.start.value = '';
    }
    if (therapyFormElements.end) {
      therapyFormElements.end.value = '';
    }
    if (therapyFormElements.frequencyCount) {
      therapyFormElements.frequencyCount.value = '';
    }
    if (therapyFormElements.frequencyUnit) {
      therapyFormElements.frequencyUnit.value = '';
    }
    if (therapyFormElements.weekdayInputs) {
      therapyFormElements.weekdayInputs.forEach((input) => {
        input.checked = false;
      });
    }
    if (therapyFormElements.weekdaysContainer) {
      therapyFormElements.weekdaysContainer.hidden = true;
    }
  }
}

function handleTherapyFrequencyUnitChange() {
  if (!therapyFormElements.frequencyUnit || !therapyFormElements.weekdaysContainer) {
    return;
  }
  const unit = therapyFormElements.frequencyUnit.value;
  const shouldShowWeekdays = unit === 'perWeek';
  therapyFormElements.weekdaysContainer.hidden = !shouldShowWeekdays;
  if (shouldShowWeekdays) {
    handleTherapyFrequencyCountChange();
  } else if (therapyFormElements.weekdayInputs) {
    therapyFormElements.weekdayInputs.forEach((input) => {
      input.checked = false;
    });
  }
}

function handleTherapyFrequencyCountChange() {
  if (
    !therapyFormElements.frequencyCount ||
    !therapyFormElements.frequencyUnit ||
    therapyFormElements.frequencyUnit.value !== 'perWeek' ||
    !Array.isArray(therapyFormElements.weekdayInputs)
  ) {
    return;
  }
  const count = Number(therapyFormElements.frequencyCount.value);
  const selectedCount = therapyFormElements.weekdayInputs.filter((input) => input.checked).length;
  if (!count || selectedCount) {
    return;
  }
  const defaults = getDefaultWeekdays(count);
  therapyFormElements.weekdayInputs.forEach((input) => {
    input.checked = defaults.includes(Number(input.value));
  });
}

function handleTherapyMedicationAdd() {
  if (!therapyFormElements.select) return;
  const medicationName = therapyFormElements.select.value;
  if (!medicationName) {
    alert('Выберите препарат из списка');
    return;
  }

  if (therapyDraft.medications.length >= 5) {
    alert('В основном курсе можно указать не более 5 препаратов. Используйте терапию сопровождения для дополнительных назначений.');
    return;
  }

  const dosageValue = therapyFormElements.dosage ? therapyFormElements.dosage.value.trim() : '';
  const noteValue = therapyFormElements.note ? therapyFormElements.note.value.trim() : '';
  const startValue = therapyFormElements.start ? therapyFormElements.start.value : '';
  const endValue = therapyFormElements.end ? therapyFormElements.end.value : '';
  const frequencyCountRaw = therapyFormElements.frequencyCount
    ? Number(therapyFormElements.frequencyCount.value)
    : NaN;
  const frequencyCountValue = Number.isFinite(frequencyCountRaw)
    ? Math.floor(frequencyCountRaw)
    : NaN;
  const frequencyUnitValue = therapyFormElements.frequencyUnit ? therapyFormElements.frequencyUnit.value : '';

  if (!dosageValue) {
    alert('Укажите дозировку для выбранного препарата');
    return;
  }

  if (!frequencyCountValue || frequencyCountValue <= 0) {
    alert('Укажите корректную кратность приёма');
    return;
  }

  if (!frequencyUnitValue) {
    alert('Выберите периодичность приёма');
    return;
  }

  let weekdays = [];
  if (frequencyUnitValue === 'perWeek' && Array.isArray(therapyFormElements.weekdayInputs)) {
    weekdays = therapyFormElements.weekdayInputs
      .filter((input) => input.checked)
      .map((input) => Number(input.value))
      .filter((day) => Number.isInteger(day));
    if (!weekdays.length) {
      alert('Отметьте дни недели для еженедельного режима приёма');
      return;
    }
    if (weekdays.length !== frequencyCountValue) {
      alert('Количество выбранных дней недели должно совпадать с кратностью приёма');
      return;
    }
  }

  if (startValue && endValue && parseDate(endValue) < parseDate(startValue)) {
    alert('Дата окончания препарата не может быть раньше даты начала');
    return;
  }

  const courseStartInput = entryForm.querySelector('[name="startDate"]');
  const courseEndInput = entryForm.querySelector('[name="endDate"]');
  const courseStart = courseStartInput ? courseStartInput.value : '';
  const courseEnd = courseEndInput ? courseEndInput.value : '';

  if (startValue && courseStart && parseDate(startValue) < parseDate(courseStart)) {
    alert('Начало препарата выходит за пределы даты начала курса');
    return;
  }

  if (endValue && courseEnd && parseDate(endValue) > parseDate(courseEnd)) {
    alert('Окончание препарата выходит за пределы даты окончания курса');
    return;
  }

  const medication = {
    id: nextId('med'),
    name: medicationName,
    dosage: dosageValue,
    note: noteValue,
    startDate: startValue || '',
    endDate: endValue || '',
    frequencyCount: frequencyCountValue,
    frequencyUnit: frequencyUnitValue,
    weekdays: frequencyUnitValue === 'perWeek' ? normalizeWeekdays(weekdays, frequencyCountValue) : []
  };

  therapyDraft.medications.push(medication);
  updateTherapyMedicationsList();

  therapyFormElements.select.value = '';
  handleTherapyMedicationSelectionChange();
}

function handleTherapySupportButtonClick(event) {
  event.preventDefault();
  clearSelection();
  setTrackVisibility('support', true);
  const toggle = trackToggleMap.get('support');
  if (toggle && !toggle.checked) {
    toggle.checked = true;
  }
  updateVisibilityTriggerLabel();
  closeParameterVisibilityDropdown();
  syncParameterSelectOptions();
  if (parameterSelect) {
    syncDirectionForParameter('support');
  }
  renderDynamicFields('support');
  renderTimeline();
}

function removeTherapyMedication(id) {
  therapyDraft.medications = therapyDraft.medications.filter((item) => item.id !== id);
  updateTherapyMedicationsList();
}

function updateTherapyMedicationsList() {
  const list = therapyFormElements.list;
  if (!list) return;

  list.innerHTML = '';

  if (!therapyDraft.medications.length) {
    const empty = document.createElement('p');
    empty.className = 'therapy-builder__empty';
    empty.textContent = 'Добавьте препараты, чтобы сформировать курс лечения.';
    list.appendChild(empty);
    return;
  }

  therapyDraft.medications.forEach((medication) => {
    const item = document.createElement('div');
    item.className = 'therapy-medication-item';

    const colorBadge = document.createElement('span');
    colorBadge.className = 'therapy-medication-item__color';
    const color = getTherapyColor(medication.name);
    colorBadge.style.backgroundColor = color;
    item.appendChild(colorBadge);

    const content = document.createElement('div');
    content.className = 'therapy-medication-item__content';
    const title = document.createElement('div');
    title.className = 'therapy-medication-item__title';
    title.textContent = medication.dosage ? `${medication.name} — ${medication.dosage}` : medication.name;
    content.appendChild(title);
    const frequencySummary = formatMedicationFrequency(medication);
    if (frequencySummary) {
      const frequency = document.createElement('div');
      frequency.className = 'therapy-medication-item__frequency';
      frequency.textContent = `Частота: ${frequencySummary}`;
      content.appendChild(frequency);
    }
    if (medication.startDate || medication.endDate) {
      const period = document.createElement('div');
      period.className = 'therapy-medication-item__period';
      if (medication.endDate) {
        const startText = medication.startDate ? formatDisplayDate(medication.startDate) : 'без указания';
        period.textContent = `Период: ${startText} – ${formatDisplayDate(medication.endDate)}`;
      } else if (medication.startDate) {
        period.textContent = `С ${formatDisplayDate(medication.startDate)}`;
      } else {
        period.textContent = 'Период: в пределах дат курса';
      }
      content.appendChild(period);
    }
    if (medication.note) {
      const note = document.createElement('div');
      note.className = 'therapy-medication-item__note';
      note.textContent = medication.note;
      content.appendChild(note);
    }
    item.appendChild(content);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'therapy-medication-item__remove';
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', () => removeTherapyMedication(medication.id));
    item.appendChild(removeButton);

    list.appendChild(item);
  });
}

function clearEndoscopySection(type) {
  const actionMap = endoscopyFormElements.actionCheckboxes.get(type);
  if (actionMap) {
    actionMap.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  const extrasMap = endoscopyFormElements.extraFields.get(type);
  if (extrasMap) {
    extrasMap.forEach((info) => {
      if (info && info.inputs) {
        info.inputs.forEach((input) => {
          input.value = '';
        });
      }
      if (info && info.container) {
        info.container.hidden = true;
      }
    });
  }
  const complicationsMap = endoscopyFormElements.complicationCheckboxes.get(type);
  if (complicationsMap) {
    complicationsMap.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  const flagCheckbox = endoscopyFormElements.flagCheckboxes.get(type);
  if (flagCheckbox) {
    flagCheckbox.checked = false;
  }
}

function updateEndoscopySectionsVisibility() {
  endoscopyFormElements.sections.forEach((section, type) => {
    const checkbox = endoscopyFormElements.typeCheckboxes.get(type);
    if (!section) return;
    const visible = Boolean(checkbox && checkbox.checked);
    section.hidden = !visible;
  });
}

function toggleEndoscopyActionExtras(type, actionKey, visible) {
  const extrasInfo = endoscopyFormElements.extraFields.get(type)?.get(actionKey);
  if (!extrasInfo) {
    return;
  }
  if (extrasInfo.container) {
    extrasInfo.container.hidden = !visible;
  }
  if (!visible && extrasInfo.inputs) {
    extrasInfo.inputs.forEach((input) => {
      input.value = '';
    });
  }
}

function handleEndoscopyTypeToggle(type) {
  const checkbox = endoscopyFormElements.typeCheckboxes.get(type);
  if (!checkbox) return;
  if (!checkbox.checked) {
    clearEndoscopySection(type);
  }
  updateEndoscopySectionsVisibility();
}

function renderEndoscopyDynamicFields(editingSnapshot) {
  const procedures = normalizeEndoscopyProcedures(editingSnapshot ? editingSnapshot.procedures : []);
  const selectedTypes = new Set(procedures.map((procedure) => procedure.type));

  endoscopyFormElements.typeCheckboxes = new Map();
  endoscopyFormElements.sections = new Map();
  endoscopyFormElements.actionCheckboxes = new Map();
  endoscopyFormElements.extraFields = new Map();
  endoscopyFormElements.complicationCheckboxes = new Map();
  endoscopyFormElements.flagCheckboxes = new Map();

  const dateField = createField({ type: 'date', name: 'date', label: 'Дата', required: true });
  dynamicFields.appendChild(dateField);
  endoscopyFormElements.date = dateField.querySelector('input');
  if (endoscopyFormElements.date && editingSnapshot?.date) {
    endoscopyFormElements.date.value = editingSnapshot.date;
  }

  const timeField = createField({ type: 'time', name: 'time', label: 'Время', required: false });
  dynamicFields.appendChild(timeField);
  endoscopyFormElements.time = timeField.querySelector('input');
  if (endoscopyFormElements.time && editingSnapshot?.time) {
    endoscopyFormElements.time.value = editingSnapshot.time;
  }

  const typeFieldset = document.createElement('fieldset');
  typeFieldset.className = 'form-field endoscopy-type-selector';
  const legend = document.createElement('legend');
  legend.textContent = 'Вид эндоскопической процедуры';
  typeFieldset.appendChild(legend);

  ENDOSCOPY_TYPE_OPTIONS.forEach((option) => {
    const item = document.createElement('label');
    item.className = 'endoscopy-type-option';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = option.value;
    checkbox.name = 'endoscopyType';
    checkbox.checked = selectedTypes.has(option.value);
    checkbox.addEventListener('change', () => handleEndoscopyTypeToggle(option.value));
    item.appendChild(checkbox);
    const text = document.createElement('span');
    text.textContent = option.label;
    item.appendChild(text);
    typeFieldset.appendChild(item);
    endoscopyFormElements.typeCheckboxes.set(option.value, checkbox);
  });

  dynamicFields.appendChild(typeFieldset);

  ENDOSCOPY_TYPE_OPTIONS.forEach((option) => {
    const section = document.createElement('div');
    section.className = 'endoscopy-section';
    section.dataset.endoscopySection = option.value;
    section.hidden = !selectedTypes.has(option.value);

    const title = document.createElement('h4');
    title.className = 'endoscopy-section__title';
    title.textContent = option.label;
    section.appendChild(title);

    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'endoscopy-actions';
    const actionMap = new Map();
    const extrasMap = new Map();

    (ENDOSCOPY_ACTION_CONFIG[option.value] || []).forEach((actionConfig) => {
      const actionItem = document.createElement('div');
      actionItem.className = 'endoscopy-action-item';

      const label = document.createElement('label');
      label.className = 'endoscopy-action-label';
      const actionCheckbox = document.createElement('input');
      actionCheckbox.type = 'checkbox';
      actionCheckbox.value = actionConfig.value;
      actionCheckbox.name = `endoscopyAction-${option.value}`;
      label.appendChild(actionCheckbox);
      const span = document.createElement('span');
      span.textContent = actionConfig.label;
      label.appendChild(span);
      actionItem.appendChild(label);

      const extrasInfo = { inputs: new Map(), container: null };
      if (Array.isArray(actionConfig.extras) && actionConfig.extras.length) {
        const extrasContainer = document.createElement('div');
        extrasContainer.className = 'endoscopy-action-extras';
        extrasContainer.hidden = true;
        actionConfig.extras.forEach((extra) => {
          const extraField = document.createElement('div');
          extraField.className = 'form-field endoscopy-extra-field';
          const extraLabel = document.createElement('label');
          extraLabel.textContent = extra.label;
          const extraInput = document.createElement('input');
          extraInput.type = 'text';
          extraInput.name = getEndoscopyExtraFieldName(option.value, actionConfig.value, extra.key);
          extraInput.placeholder = extra.placeholder || '';
          extraField.appendChild(extraLabel);
          extraField.appendChild(extraInput);
          extrasContainer.appendChild(extraField);
          extrasInfo.inputs.set(extra.key, extraInput);
        });
        extrasInfo.container = extrasContainer;
        actionItem.appendChild(extrasContainer);
      }

      actionCheckbox.addEventListener('change', () => {
        toggleEndoscopyActionExtras(option.value, actionConfig.value, actionCheckbox.checked);
      });

      actionsContainer.appendChild(actionItem);
      actionMap.set(actionConfig.value, actionCheckbox);
      extrasMap.set(actionConfig.value, extrasInfo);
    });

    section.appendChild(actionsContainer);
    endoscopyFormElements.actionCheckboxes.set(option.value, actionMap);
    endoscopyFormElements.extraFields.set(option.value, extrasMap);

    const complicationsContainer = document.createElement('div');
    complicationsContainer.className = 'endoscopy-complications';
    const complicationsTitle = document.createElement('span');
    complicationsTitle.className = 'endoscopy-subtitle';
    complicationsTitle.textContent = 'Осложнения';
    complicationsContainer.appendChild(complicationsTitle);
    const complicationMap = new Map();
    ENDOSCOPY_COMPLICATION_OPTIONS.forEach((name) => {
      const compLabel = document.createElement('label');
      compLabel.className = 'endoscopy-complication-item';
      const compCheckbox = document.createElement('input');
      compCheckbox.type = 'checkbox';
      compCheckbox.value = name;
      compLabel.appendChild(compCheckbox);
      const compText = document.createElement('span');
      compText.textContent = name;
      compLabel.appendChild(compText);
      complicationsContainer.appendChild(compLabel);
      complicationMap.set(name, compCheckbox);
    });
    section.appendChild(complicationsContainer);
    endoscopyFormElements.complicationCheckboxes.set(option.value, complicationMap);

    const flagWrapper = document.createElement('label');
    flagWrapper.className = 'form-field form-field--checkbox endoscopy-flag';
    const flagCheckbox = document.createElement('input');
    flagCheckbox.type = 'checkbox';
    flagCheckbox.name = `endoscopyFlag-${option.value}`;
    flagWrapper.appendChild(flagCheckbox);
    const flagText = document.createElement('span');
    flagText.textContent = 'Выделить красным (проблемный участок)';
    flagWrapper.appendChild(flagText);
    section.appendChild(flagWrapper);
    endoscopyFormElements.flagCheckboxes.set(option.value, flagCheckbox);

    dynamicFields.appendChild(section);
    endoscopyFormElements.sections.set(option.value, section);
  });

  const commentField = createField({
    type: 'textarea',
    name: 'endoscopyComment',
    label: 'Комментарий',
    required: false,
    placeholder: 'Дополнительные сведения'
  });
  dynamicFields.appendChild(commentField);
  endoscopyFormElements.comment = commentField.querySelector('textarea');
  if (endoscopyFormElements.comment && editingSnapshot?.comment) {
    endoscopyFormElements.comment.value = editingSnapshot.comment;
  }

  procedures.forEach((procedure) => {
    const type = procedure.type;
    const typeCheckbox = endoscopyFormElements.typeCheckboxes.get(type);
    if (typeCheckbox) {
      typeCheckbox.checked = true;
    }
    (procedure.actions || []).forEach((action) => {
      const actionCheckbox = endoscopyFormElements.actionCheckboxes.get(type)?.get(action.key);
      if (actionCheckbox) {
        actionCheckbox.checked = true;
        toggleEndoscopyActionExtras(type, action.key, true);
        const extrasInfo = endoscopyFormElements.extraFields.get(type)?.get(action.key);
        if (extrasInfo && extrasInfo.inputs && action.details) {
          extrasInfo.inputs.forEach((input, extraKey) => {
            input.value = action.details[extraKey] ? String(action.details[extraKey]) : '';
          });
        }
      }
    });
    const compMap = endoscopyFormElements.complicationCheckboxes.get(type);
    (procedure.complications || []).forEach((complication) => {
      const checkbox = compMap?.get(complication);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
    const flagCheckbox = endoscopyFormElements.flagCheckboxes.get(type);
    if (flagCheckbox) {
      flagCheckbox.checked = Boolean(procedure.isFlagged);
    }
  });

  updateEndoscopySectionsVisibility();
}

function collectEndoscopyFormData() {
  const dateInput = endoscopyFormElements.date;
  if (!dateInput || !dateInput.value) {
    alert('Укажите дату проведения процедуры.');
    return null;
  }
  const timeValue = endoscopyFormElements.time ? endoscopyFormElements.time.value : '';
  const commentValue = endoscopyFormElements.comment ? endoscopyFormElements.comment.value.trim() : '';

  const procedures = [];
  let validationError = '';

  endoscopyFormElements.typeCheckboxes.forEach((checkbox, type) => {
    if (validationError || !checkbox || !checkbox.checked) {
      return;
    }
    const actionMap = endoscopyFormElements.actionCheckboxes.get(type) || new Map();
    const extrasMap = endoscopyFormElements.extraFields.get(type) || new Map();
    const selectedActions = [];
    actionMap.forEach((actionCheckbox, actionKey) => {
      if (validationError || !actionCheckbox.checked) {
        return;
      }
      const config = getEndoscopyActionConfig(type, actionKey);
      const extrasInfo = extrasMap.get(actionKey);
      const details = {};
      let hasDetails = false;
      if (config && Array.isArray(config.extras)) {
        config.extras.forEach((extra) => {
          const input = extrasInfo && extrasInfo.inputs ? extrasInfo.inputs.get(extra.key) : null;
          const value = input ? input.value.trim() : '';
          if (!value) {
            validationError = `Заполните поле "${extra.label}" для действия "${config.label}".`;
          } else {
            details[extra.key] = value;
            hasDetails = true;
          }
        });
      }
      if (validationError) {
        return;
      }
      const actionData = { key: actionKey };
      if (hasDetails) {
        actionData.details = details;
      }
      selectedActions.push(actionData);
    });
    if (validationError) {
      return;
    }
    if (!selectedActions.length) {
      validationError = `Выберите выполненные действия для "${getEndoscopyTypeLabel(type)}".`;
      return;
    }
    const complicationMap = endoscopyFormElements.complicationCheckboxes.get(type) || new Map();
    const complications = [];
    complicationMap.forEach((compCheckbox, complication) => {
      if (compCheckbox.checked) {
        complications.push(complication);
      }
    });
    const flagCheckbox = endoscopyFormElements.flagCheckboxes.get(type);
    procedures.push({
      type,
      actions: selectedActions,
      complications,
      isFlagged: Boolean(flagCheckbox && flagCheckbox.checked)
    });
  });

  if (validationError) {
    alert(validationError);
    return null;
  }

  if (!procedures.length) {
    alert('Выберите хотя бы одну эндоскопическую процедуру и настройте действия.');
    return null;
  }

  const isFlagged = procedures.some((procedure) => procedure.isFlagged);
  return {
    date: dateInput.value,
    time: timeValue,
    comment: commentValue,
    procedures,
    isFlagged
  };
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  const normalized = normalizeDateString(dateStr);
  if (!normalized) return null;
  const [year, month, day] = normalized.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function isEditableElement(element) {
  if (!element) return false;
  if (element.isContentEditable) return true;
  const tagName = element.tagName ? element.tagName.toLowerCase() : '';
  return tagName === 'input' || tagName === 'textarea' || tagName === 'select';
}

function parseDateTime(dateStr, timeStr) {
  if (!dateStr) return null;
  const [hours = 0, minutes = 0] = timeStr ? timeStr.split(':').map(Number) : [0, 0];
  const date = parseDate(dateStr);
  if (!date) return null;
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function formatNumber(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '';
  }
  return numberFormatter.format(Math.round(value));
}

function getWeekdayLabel(index) {
  return WEEKDAY_LABELS[index] || '';
}

function getWeekdayIndex(date) {
  return (date.getDay() + 6) % 7;
}

function getDefaultWeekdays(count) {
  const safeCount = Math.max(1, Math.min(count || 1, WEEKDAY_LABELS.length));
  const defaults = [];
  DEFAULT_WEEKDAY_ORDER.forEach((day) => {
    if (defaults.length < safeCount && !defaults.includes(day)) {
      defaults.push(day);
    }
  });
  return defaults;
}

function normalizeWeekdays(weekdays, frequencyCount) {
  const normalized = Array.isArray(weekdays)
    ? Array.from(
        new Set(
          weekdays
            .map((day) => Number(day))
            .filter((day) => Number.isInteger(day) && day >= 0 && day < WEEKDAY_LABELS.length)
        )
      ).sort((a, b) => a - b)
    : [];

  const target = Math.max(1, frequencyCount || normalized.length || 1);
  if (normalized.length >= target) {
    return normalized;
  }

  const defaults = getDefaultWeekdays(target);
  defaults.forEach((day) => {
    if (normalized.length < target && !normalized.includes(day)) {
      normalized.push(day);
    }
  });

  return normalized.sort((a, b) => a - b);
}

function formatWeekdayList(weekdays) {
  if (!Array.isArray(weekdays) || !weekdays.length) {
    return '';
  }
  return weekdays.map((day) => getWeekdayLabel(day)).join(', ');
}

function formatMedicationFrequency(medication) {
  if (!medication) return '';
  const count = Number(medication.frequencyCount);
  const unit = medication.frequencyUnit;
  if (!count || !unit) return '';
  const unitLabel = unit === 'perWeek' ? 'р./нед.' : 'р./день';
  let result = `${count} ${unitLabel}`;
  if (unit === 'perWeek') {
    const weekdays = normalizeWeekdays(medication.weekdays, count);
    const weekdaysLabel = formatWeekdayList(weekdays);
    if (weekdaysLabel) {
      result += ` (${weekdaysLabel})`;
    }
  }
  return result;
}

function getEffectiveIntervalEnd(interval, dates) {
  if (interval.endDate) {
    return interval.endDate;
  }
  if (Array.isArray(dates) && dates.length) {
    return dates[dates.length - 1];
  }
  return interval.startDate;
}

function calculateTotalDoses(interval, dates) {
  if (!interval || !interval.medication) {
    return null;
  }
  const start = parseDate(interval.startDate);
  if (!start) {
    return null;
  }
  const effectiveEnd = getEffectiveIntervalEnd(interval, dates);
  const end = parseDate(effectiveEnd);
  if (!end || end < start) {
    return null;
  }
  const days = Math.floor((end - start) / MS_IN_DAY) + 1;
  const count = Number(interval.medication.frequencyCount);
  const unit = interval.medication.frequencyUnit;
  if (!count || !unit) {
    return null;
  }
  if (unit === 'perDay') {
    return days * count;
  }
  if (unit === 'perWeek') {
    const weekdays = normalizeWeekdays(interval.medication.weekdays, count);
    let total = 0;
    const cursor = new Date(start.getTime());
    while (cursor <= end) {
      if (weekdays.includes(getWeekdayIndex(cursor))) {
        total += 1;
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return total;
  }
  return null;
}

function formatDisplayDate(dateStr) {
  const parsed = parseDate(dateStr);
  return parsed ? parsed.toLocaleDateString('ru-RU') : '—';
}

function formatDisplayDateTime(dateStr, timeStr) {
  if (!dateStr) return '—';
  const base = formatDisplayDate(dateStr);
  return timeStr ? `${base} ${timeStr}` : base;
}

function formatEndoscopyComplications(complications) {
  if (!Array.isArray(complications) || !complications.length) {
    return '';
  }
  const filtered = complications.filter((item) => item && item.length);
  if (!filtered.length) {
    return '';
  }
  const significant = filtered.filter(
    (item) => item.trim().toLowerCase() !== 'без осложнений'
  );
  if (significant.length === 0) {
    return 'Без осложнений';
  }
  return significant.join(', ');
}

function updateTimelineDates() {
  const dates = new Set();
  if (isTrackVisible('temperature')) {
    state.temps.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('therapy')) {
    state.therapy.forEach((item) => {
      dates.add(item.startDate);
      if (item.endDate) dates.add(item.endDate);
      (item.medications || []).forEach((medication) => {
        if (medication.startDate) {
          dates.add(medication.startDate);
        }
        if (medication.endDate) {
          dates.add(medication.endDate);
        }
      });
    });
  }
  if (isTrackVisible('support')) {
    state.supportiveTherapy.forEach((item) => {
      dates.add(item.startDate);
      if (item.endDate) {
        dates.add(item.endDate);
      }
    });
  }
  if (isTrackVisible('endoscopy')) {
    state.endoscopy.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('surgery')) {
    state.surgery.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('radiology')) {
    state.radiology.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('neuro')) {
    state.neuro.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('liver')) {
    state.liver.forEach((item) => {
      dates.add(item.startDate);
      if (item.endDate) dates.add(item.endDate);
    });
  }
  if (isTrackVisible('lab')) {
    state.labDiagnostics.forEach((item) => dates.add(item.date));
  }
  if (isTrackVisible('event')) {
    state.events.forEach((item) => dates.add(item.date));
  }

  state.timelineDates = Array.from(dates)
    .filter(Boolean)
    .sort((a, b) => parseDate(a) - parseDate(b));
}

function getStepX() {
  const layoutStep = state.layout && Number.isFinite(state.layout.stepX) ? state.layout.stepX : currentStepX;
  return clampStepX(layoutStep);
}

function clampStepX(value) {
  return Math.min(STEP_X_MAX, Math.max(STEP_X_MIN, value));
}

function clampDateIndex(index, lastIndex) {
  if (lastIndex < 0) return 0;
  if (index < 0) return 0;
  if (index > lastIndex) return lastIndex;
  return index;
}

function areStringArraysEqual(a = [], b = []) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return Array.isArray(a) === Array.isArray(b) && (!Array.isArray(a) || a.length === 0) && (!Array.isArray(b) || b.length === 0);
  }
  if (a.length !== b.length) {
    return false;
  }
  const sortedA = [...a].map(String).sort();
  const sortedB = [...b].map(String).sort();
  return sortedA.every((value, index) => value === sortedB[index]);
}

function areEditorValuesEqual(a = {}, b = {}) {
  const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
  for (const key of keys) {
    const valueA = a ? a[key] : undefined;
    const valueB = b ? b[key] : undefined;
    if (Array.isArray(valueA) || Array.isArray(valueB)) {
      if (!areStringArraysEqual(valueA || [], valueB || [])) {
        return false;
      }
    } else if (typeof valueA === 'boolean' || typeof valueB === 'boolean') {
      if (Boolean(valueA) !== Boolean(valueB)) {
        return false;
      }
    } else {
      if (String(valueA ?? '') !== String(valueB ?? '')) {
        return false;
      }
    }
  }
  return true;
}

function getXPosition(dateStr, dates) {
  const index = dates.indexOf(dateStr);
  if (index === -1) return LEFT_MARGIN;
  return LEFT_MARGIN + index * getStepX();
}

function buildTherapyIntervals() {
  const intervals = [];
  state.therapy.forEach((course) => {
    if (!Array.isArray(course.medications) || !course.medications.length) {
      return;
    }
    course.medications.forEach((medication) => {
      const medicationStart = medication.startDate || course.startDate;
      if (!medicationStart) {
        return;
      }
      const interval = {
        courseId: course.id,
        medicationId: medication.id || `${course.id}-${medication.name}`,
        startDate: medicationStart,
        endDate: medication.endDate || course.endDate || '',
        courseComment: course.comment || '',
        isFlagged: Boolean(course.isFlagged),
        chartLabelOverride: medication.chartLabelOverride || '',
        chartFontScale: medication.chartFontScale || '',
        chartOffsetY: parseOffsetValue(medication.chartOffsetY),
        medication: {
          ...medication,
          weekdays:
            medication.frequencyUnit === 'perWeek'
              ? normalizeWeekdays(medication.weekdays, medication.frequencyCount)
              : Array.isArray(medication.weekdays)
                ? [...medication.weekdays]
                : []
        }
      };
      intervals.push(interval);
    });
  });
  return intervals;
}

function getTherapyMetrics() {
  const intervals = buildTherapyIntervals();
  if (!intervals.length) {
    return { intervals: [], totalLevels: 0 };
  }
  const stacked = stackIntervals(intervals.map((item) => ({ ...item })));
  const totalLevels = stacked.reduce((max, item) => Math.max(max, item.__level || 0), 0) + 1;
  return { intervals: stacked, totalLevels };
}

function computeTherapyTrackHeight(metrics, dates) {
  const effectiveMetrics = metrics || getTherapyMetrics();
  if (!effectiveMetrics.totalLevels) {
    effectiveMetrics.layout = { levelHeights: [], itemsByKey: new Map() };
    return THERAPY_MIN_HEIGHT;
  }
  const layout = measureTherapyLayout(effectiveMetrics.intervals, dates);
  effectiveMetrics.layout = layout;
  const { levelHeights } = layout;
  if (!levelHeights || !levelHeights.length) {
    return THERAPY_MIN_HEIGHT;
  }
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (levelHeights.length - 1) * THERAPY_ROW_SPACING;
  return Math.max(THERAPY_MIN_HEIGHT, blockHeight + spacing + THERAPY_VERTICAL_PADDING);
}

function buildSupportiveIntervals() {
  const intervals = [];
  state.supportiveTherapy.forEach((item) => {
    if (!item || !item.startDate) {
      return;
    }
    intervals.push({
      supportId: item.id,
      startDate: item.startDate,
      endDate: item.endDate || '',
      isFlagged: Boolean(item.isFlagged),
      chartHeightOverride: item.chartHeightOverride || '',
      chartOffsetY: parseOffsetValue(item.chartOffsetY),
      chartFontScale: item.chartFontScale || '',
      medication: {
        name: item.name || '',
        dosage: item.dosage || '',
        note: item.note || ''
      }
    });
  });
  return intervals;
}

function getSupportiveMetrics() {
  const intervals = buildSupportiveIntervals();
  if (!intervals.length) {
    return { intervals: [], totalLevels: 0 };
  }
  const stacked = stackIntervals(intervals.map((item) => ({ ...item })));
  const totalLevels = stacked.reduce((max, item) => Math.max(max, item.__level || 0), 0) + 1;
  return { intervals: stacked, totalLevels };
}

function computeSupportTrackHeight(metrics, dates) {
  const effectiveMetrics = metrics || getSupportiveMetrics();
  if (!effectiveMetrics.totalLevels) {
    effectiveMetrics.layout = { levelHeights: [], itemsByKey: new Map() };
    return SUPPORT_MIN_HEIGHT;
  }
  const layout = measureSupportLayout(effectiveMetrics.intervals, dates);
  effectiveMetrics.layout = layout;
  const { levelHeights } = layout;
  if (!levelHeights || !levelHeights.length) {
    return SUPPORT_MIN_HEIGHT;
  }
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (levelHeights.length - 1) * THERAPY_ROW_SPACING;
  return Math.max(SUPPORT_MIN_HEIGHT, blockHeight + spacing + THERAPY_VERTICAL_PADDING);
}

function getEndoscopyMetrics() {
  const grouped = new Map();
  state.endoscopy.forEach((item) => {
    if (!item || !item.date) {
      return;
    }
    const key = item.date;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push({
      ...item,
      chartOffsetY: parseOffsetValue(item.chartOffsetY),
      procedures: cloneEndoscopyProcedures(item.procedures)
    });
  });

  if (!grouped.size) {
    return { items: [], totalLevels: 0 };
  }

  const sortedDates = Array.from(grouped.keys()).sort((a, b) => parseDate(a) - parseDate(b));
  let totalLevels = 0;
  const items = [];

  sortedDates.forEach((date) => {
    const list = grouped.get(date) || [];
    list.sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
    list.forEach((entry, index) => {
      entry.__level = index;
      items.push(entry);
    });
    if (list.length > totalLevels) {
      totalLevels = list.length;
    }
  });

  return { items, totalLevels };
}

function estimateEndoscopyCardWidth(measurement, fontScale) {
  if (measurement?.cardWidth) {
    return measurement.cardWidth;
  }
  const minWidth = measurement?.minWidth || 0;
  const maxChars = measurement?.maxChars || 32;
  return Math.max(240, minWidth, maxChars * (SVG_CHAR_WIDTH * Math.max(fontScale, 0.85)) + 48);
}

function resolveEndoscopyLevels(items = [], layout, dates = []) {
  if (!items.length) {
    return { levelHeights: [], levelAssignments: new Map() };
  }

  const fontScale = getCurrentFontScale();
  const levelRanges = [];
  const levelHeights = [];
  const levelAssignments = new Map();
  const collisionPadding = 12;

  const sorted = [...items].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));

  sorted.forEach((item) => {
    const measurement = layout?.itemsById?.get(item.id);
    const width = estimateEndoscopyCardWidth(measurement, fontScale);
    const center = getXPosition(item.date, dates);
    const start = center - width / 2;
    const end = center + width / 2;
    let level = 0;

    while (
      levelRanges[level] &&
      levelRanges[level].some((range) => !(end + collisionPadding < range.start || start - collisionPadding > range.end))
    ) {
      level += 1;
    }

    if (!levelRanges[level]) {
      levelRanges[level] = [];
    }
    levelRanges[level].push({ start, end });

    const rectHeight = Math.max(measurement?.rectHeight || ENDOSCOPY_ITEM_HEIGHT, ENDOSCOPY_ITEM_HEIGHT);
    levelHeights[level] = Math.max(levelHeights[level] || 0, rectHeight);
    levelAssignments.set(item.id, level);
    item.__level = level;
  });

  const normalizedHeights = levelHeights.map((height) => Math.max(height, ENDOSCOPY_ITEM_HEIGHT));
  return { levelHeights: normalizedHeights, levelAssignments };
}

function computeEndoscopyTrackHeight(metrics, dates = []) {
  const effectiveMetrics = metrics || getEndoscopyMetrics();
  if (!effectiveMetrics.totalLevels) {
    effectiveMetrics.layout = { levelHeights: [], itemsById: new Map(), levelAssignments: new Map() };
    return ENDOSCOPY_MIN_HEIGHT;
  }

  const layout = measureEndoscopyLayout(effectiveMetrics.items);
  const resolved = resolveEndoscopyLevels(effectiveMetrics.items, layout, dates);
  layout.levelHeights = resolved.levelHeights;
  layout.levelAssignments = resolved.levelAssignments;
  effectiveMetrics.layout = layout;
  effectiveMetrics.totalLevels = resolved.levelHeights.length;

  if (!layout.levelHeights || !layout.levelHeights.length) {
    return ENDOSCOPY_MIN_HEIGHT;
  }

  const blockHeight = layout.levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (layout.levelHeights.length - 1) * ENDOSCOPY_ROW_SPACING;
  return Math.max(ENDOSCOPY_MIN_HEIGHT, blockHeight + spacing + 48);
}

function getTrackLayout(metricsByKey, visibleKeys, dates) {
  const keys = Array.isArray(visibleKeys) && visibleKeys.length ? visibleKeys : getVisibleTrackKeys();
  let currentTop = TOP_MARGIN;
  const layouts = [];
  const layoutConfig = getLayoutConfig();
  let previousGroup = null;

  keys.forEach((key) => {
    const track = TRACK_DEFINITIONS.find((definition) => definition.key === key);
    if (!track) return;
    let baseHeight = track.minHeight;
    if (track.key === 'therapy') {
      baseHeight = computeTherapyTrackHeight(metricsByKey?.therapy, dates);
    } else if (track.key === 'support') {
      baseHeight = computeSupportTrackHeight(metricsByKey?.support, dates);
    } else if (track.key === 'endoscopy') {
      baseHeight = computeEndoscopyTrackHeight(metricsByKey?.endoscopy, dates);
    } else if (track.key === 'neuro') {
      baseHeight = computeSingleDateTrackHeight(track.minHeight, metricsByKey?.neuro?.layout);
    } else if (track.key === 'lab') {
      baseHeight = computeSingleDateTrackHeight(track.minHeight, metricsByKey?.lab?.layout);
    } else if (track.key === 'event') {
      baseHeight = computeSingleDateTrackHeight(track.minHeight, metricsByKey?.event?.layout);
    }
    const heightOverride = layoutConfig.trackHeightOverride?.[key];
    const height =
      Number.isFinite(heightOverride) && heightOverride >= 0
        ? Math.max(TRACK_HEIGHT_MIN, heightOverride)
        : baseHeight;
    const scaleY = baseHeight > 0 && height < baseHeight ? height / baseHeight : 1;
    const groupId = TRACK_GROUP_BY_KEY[key] || key;
    if (previousGroup && groupId !== previousGroup) {
      const groupGapOverride = layoutConfig.groupGapOverride?.[groupId];
      const groupGap =
        Number.isFinite(groupGapOverride) && groupGapOverride !== null
          ? groupGapOverride
          : layoutConfig.groupGap;
      currentTop += groupGap;
    }
    const layout = { ...track, height, baseHeight, top: currentTop, scaleY };
    layouts.push(layout);
    const gapOverride = layoutConfig.trackGapOverride?.[key];
    const trackGap =
      Number.isFinite(gapOverride) && gapOverride !== null ? gapOverride : layoutConfig.trackGap;
    currentTop += height + trackGap;
    previousGroup = groupId;
  });

  return layouts;
}

function stackIntervals(items) {
  const sorted = [...items].sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));
  const levels = [];

  sorted.forEach((item) => {
    const start = parseDate(item.startDate).getTime();
    const end = item.endDate ? parseDate(item.endDate).getTime() : Infinity;
    let level = 0;
    while (levels[level] && levels[level] > start) {
      level += 1;
    }
    levels[level] = end;
    item.__level = level;
  });

  return sorted;
}

function getLastCoordinate(dates, chartWidth) {
  if (!dates.length) {
    return chartWidth - RIGHT_MARGIN;
  }
  const lastIndex = dates.length - 1;
  return LEFT_MARGIN + lastIndex * getStepX();
}

function getUsedTherapyMedicationNames() {
  const used = new Set();
  state.therapy.forEach((course) => {
    (course.medications || []).forEach((medication) => {
      if (medication && medication.name) {
        used.add(medication.name);
      }
    });
  });
  return THERAPY_MEDICATIONS.filter((medication) => used.has(medication));
}

function getUsedSupportiveMedicationNames() {
  const used = new Set();
  state.supportiveTherapy.forEach((item) => {
    if (item && item.name) {
      used.add(item.name);
    }
  });
  return Array.from(used);
}

function clearSelection(resetDetails = true) {
  if (activeHighlight && activeHighlight.classList) {
    activeHighlight.classList.remove('is-selected');
  }
  activeHighlight = null;
  activeSelectionKey = null;
  hideTooltip(true);
  closeInlineEditor();
  if (editContext) {
    exitEditMode({ refreshFields: false });
  }
  if (resetDetails) {
    activeDetailPayload = null;
    showDetails(null);
  }
}

function resolveDetailColor(detail) {
  if (!detail) return '';
  if (detail.color) return detail.color;
  if (detail.type && DETAIL_TYPE_COLORS[detail.type]) {
    return DETAIL_TYPE_COLORS[detail.type];
  }
  return '';
}

function setDeleteContext(context) {
  deleteContext = context ? { ...context } : null;
  if (deleteSelectedButton) {
    deleteSelectedButton.disabled = !deleteContext;
  }
}

function resolveFontTargetItem(target) {
  if (!target || !target.type) return null;
  switch (target.type) {
    case 'therapy': {
      const course = state.therapy.find((entry) => entry.id === target.courseId);
      if (!course || !Array.isArray(course.medications)) return null;
      return course.medications.find((med) => {
        const key = med.id || `${course.id}-${med.name}`;
        return key === target.medicationId;
      });
    }
    case 'temperature':
      return state.temps.find((entry) => entry.id === target.id);
    case 'neuro':
      return state.neuro.find((entry) => entry.id === target.id);
    case 'liver':
      return state.liver.find((entry) => entry.id === target.id);
    case 'lab':
      return state.labDiagnostics.find((entry) => entry.id === target.id);
    case 'support':
      return state.supportiveTherapy.find((entry) => entry.id === target.id);
    case 'endoscopy':
      return state.endoscopy.find((entry) => entry.id === target.id);
    case 'surgery':
      return state.surgery.find((entry) => entry.id === target.id);
    case 'radiology':
      return state.radiology.find((entry) => entry.id === target.id);
    case 'event':
      return state.events.find((entry) => entry.id === target.id);
    default:
      return null;
  }
}

function getFontTargetInfo(target) {
  if (!target) return null;
  const item = resolveFontTargetItem(target);
  if (!item) return null;
  const basePx = getBaseChartFontPx(CHART_BASE_LABEL_PX);
  const sizePx = describeChartFontPx(item, CHART_BASE_LABEL_PX);
  return {
    target,
    item,
    basePx,
    sizePx,
    minPx: basePx * CHART_FONT_SCALE_MIN,
    maxPx: basePx * CHART_FONT_SCALE_MAX
  };
}

function applyChartFontScale(targetItem, nextScale) {
  if (!targetItem) return false;
  const clamped = clampChartFontScale(nextScale);
  const normalized = Number(clamped.toFixed(2));
  if (!Number.isFinite(normalized) || normalized <= 0) {
    return false;
  }
  const current = Number(targetItem.chartFontScale);
  if ((Number.isNaN(current) || current === 0 || current === 1) && normalized === 1) {
    return false;
  }
  if (normalized === 1) {
    if (targetItem.chartFontScale !== undefined) {
      delete targetItem.chartFontScale;
      return true;
    }
    return false;
  }
  if (current === normalized) {
    return false;
  }
  targetItem.chartFontScale = normalized;
  return true;
}

function updateDetailFontControls(target) {
  if (!detailFontRow || !detailFontValue || !detailFontDecrease || !detailFontIncrease) {
    return;
  }
  const info = getFontTargetInfo(target);
  activeFontTarget = info ? { ...info.target } : null;
  if (!info) {
    detailFontRow.hidden = true;
    detailFontValue.textContent = '—';
    detailFontDecrease.disabled = true;
    detailFontIncrease.disabled = true;
    return;
  }
  detailFontRow.hidden = false;
  detailFontValue.textContent = `${Math.round(info.sizePx)} px`;
  detailFontDecrease.disabled = info.sizePx <= info.minPx + 0.5;
  detailFontIncrease.disabled = info.sizePx >= info.maxPx - 0.5;
}

function updateDetailIconControls(detail) {
  if (!detailIconRow || !detailIconPreview || !detailIconChoose || !detailIconClear) {
    return;
  }
  const eventId = detail?.iconContext?.id || null;
  if (!eventId) {
    detailIconRow.hidden = true;
    detailIconChoose.dataset.eventId = '';
    detailIconClear.dataset.eventId = '';
    return;
  }
  const eventItem = state.events.find((entry) => entry.id === eventId);
  const icon = eventItem ? findEventIcon(eventItem.iconKey) : null;
  detailIconRow.hidden = false;
  detailIconPreview.textContent = icon ? icon.glyph : '—';
  detailIconPreview.title = icon ? icon.label : 'Без иконки';
  detailIconChoose.disabled = false;
  detailIconClear.disabled = !icon;
  detailIconChoose.dataset.eventId = eventId;
  detailIconClear.dataset.eventId = eventId;
}

function adjustFontForSelection(deltaPx) {
  if (!activeFontTarget) return;
  const info = getFontTargetInfo(activeFontTarget);
  if (!info || !info.basePx) return;
  const nextSize = Math.min(Math.max(info.sizePx + deltaPx, info.minPx), info.maxPx);
  const nextScale = nextSize / info.basePx;
  pushHistoryState();
  const changed = applyChartFontScale(info.item, nextScale);
  if (!changed) {
    historyStack.pop();
    return;
  }
  renderTimeline();
  if (activeDetailPayload) {
    showDetails(activeDetailPayload);
  }
}

function showDetails(detail) {
  setDeleteContext(detail && detail.deleteInfo ? detail.deleteInfo : null);
  const color = resolveDetailColor(detail);
  if (detailColorIndicator) {
    if (color) {
      detailColorIndicator.style.backgroundColor = color;
      detailColorIndicator.dataset.empty = 'false';
    } else {
      detailColorIndicator.style.backgroundColor = 'transparent';
      detailColorIndicator.dataset.empty = 'true';
    }
  }

  if (detailFlagIndicator) {
    const flagged = Boolean(detail && detail.isFlagged);
    detailFlagIndicator.hidden = !flagged;
    detailFlagIndicator.setAttribute('aria-hidden', flagged ? 'false' : 'true');
  }

  if (!detail) {
    detailType.textContent = 'Выберите событие на графике';
    detailDate.textContent = '—';
    detailTitle.textContent = '—';
    detailComment.textContent = '—';
    updateDetailFontControls(null);
    updateDetailIconControls(null);
    return;
  }

  detailType.textContent = detail.type || '—';
  detailDate.textContent = detail.date ? formatDisplayDateTime(detail.date, detail.time) : '—';
  detailTitle.textContent = detail.title || '—';
  detailComment.textContent = detail.comment ? detail.comment : '—';
  updateDetailFontControls(detail.fontTarget || null);
  updateDetailIconControls(detail || null);
}

function setEventIcon(eventId, iconKey) {
  const eventItem = state.events.find((entry) => entry.id === eventId);
  if (!eventItem) return false;
  if (!iconKey) {
    if (!eventItem.iconKey && !eventItem.iconOffset) {
      return false;
    }
    delete eventItem.iconKey;
    delete eventItem.iconOffset;
    return true;
  }
  const icon = findEventIcon(iconKey);
  if (!icon) return false;
  eventItem.iconKey = iconKey;
  if (!eventItem.iconOffset) {
    eventItem.iconOffset = { x: 6, y: -12 };
  }
  return true;
}

function clearEventIcon(eventId) {
  pushHistoryState();
  const changed = setEventIcon(eventId, '');
  if (!changed) {
    historyStack.pop();
    return;
  }
  renderTimeline();
  if (activeDetailPayload) {
    const iconContext = activeDetailPayload.iconContext;
    if (iconContext && iconContext.id === eventId) {
      const eventItem = state.events.find((entry) => entry.id === eventId);
      activeDetailPayload.iconContext = { id: eventId, iconKey: eventItem?.iconKey || '' };
      showDetails(activeDetailPayload);
    }
  }
}

function renderIconPicker(groups, selectedKey) {
  if (!iconPickerGroups) return;
  iconPickerGroups.innerHTML = '';
  groups.forEach((group) => {
    const wrapper = document.createElement('div');
    const title = document.createElement('div');
    title.className = 'icon-picker__group-title';
    title.textContent = group.recommended ? `${group.title} • рекомендовано` : group.title;
    wrapper.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'icon-picker__grid';
    group.icons.forEach((icon) => {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'icon-picker__option';
      option.dataset.iconKey = icon.key;
      option.setAttribute('data-selected', icon.key === selectedKey ? 'true' : 'false');
      const glyph = document.createElement('span');
      glyph.className = 'icon-picker__glyph';
      glyph.textContent = icon.glyph || '•';
      const label = document.createElement('span');
      label.className = 'icon-picker__label';
      label.textContent = icon.label;
      option.appendChild(glyph);
      option.appendChild(label);
      option.addEventListener('click', () => {
        iconPickerContext = iconPickerContext ? { ...iconPickerContext, selectedKey: icon.key } : { selectedKey: icon.key };
        renderIconPicker(groups, icon.key);
        if (iconPickerApply) {
          iconPickerApply.disabled = false;
        }
      });
      grid.appendChild(option);
    });
    wrapper.appendChild(grid);
    iconPickerGroups.appendChild(wrapper);
  });
}

function openIconPickerForEvent(eventId) {
  hideIconActionMenu();
  const eventItem = state.events.find((entry) => entry.id === eventId);
  if (!eventItem || !iconPickerModal || !iconPickerGroups || !iconPickerApply) {
    return;
  }
  const groups = suggestIconsForEvent(eventItem);
  const autoKey = eventItem.iconKey || chooseAutoIconKey(eventItem);
  iconPickerContext = { eventId, selectedKey: autoKey, groups };
  renderIconPicker(groups, iconPickerContext.selectedKey);
  iconPickerApply.disabled = !iconPickerContext.selectedKey;
  iconPickerModal.setAttribute('aria-hidden', 'false');
}

function closeIconPicker() {
  if (!iconPickerModal) return;
  iconPickerModal.setAttribute('aria-hidden', 'true');
  iconPickerContext = null;
}

function applyIconSelection() {
  if (!iconPickerContext) return;
  const { eventId, selectedKey } = iconPickerContext;
  if (!eventId || !selectedKey) {
    closeIconPicker();
    return;
  }
  pushHistoryState();
  const changed = setEventIcon(eventId, selectedKey);
  if (!changed) {
    historyStack.pop();
    closeIconPicker();
    return;
  }
  closeIconPicker();
  renderTimeline();
  if (activeDetailPayload) {
    activeDetailPayload.iconContext = { id: eventId, iconKey: selectedKey };
    showDetails(activeDetailPayload);
  }
}

function hideIconActionMenu() {
  if (activeIconActionMenu) {
    activeIconActionMenu.remove();
    activeIconActionMenu = null;
  }
}

function showIconActionMenu(target, eventId) {
  hideIconActionMenu();
  if (!target || !eventId) return;
  const menu = document.createElement('div');
  menu.className = 'icon-action-menu';
  const replaceBtn = document.createElement('button');
  replaceBtn.type = 'button';
  replaceBtn.className = 'primary';
  replaceBtn.textContent = 'Заменить иконку';
  replaceBtn.addEventListener('click', () => {
    hideIconActionMenu();
    openIconPickerForEvent(eventId);
  });
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'danger';
  deleteBtn.textContent = 'Удалить иконку';
  deleteBtn.addEventListener('click', () => {
    hideIconActionMenu();
    clearEventIcon(eventId);
  });
  menu.appendChild(replaceBtn);
  menu.appendChild(deleteBtn);
  document.body.appendChild(menu);
  const rect = target.getBoundingClientRect();
  const left = Math.min(rect.right + 12, window.innerWidth - menu.offsetWidth - 12);
  const top = Math.min(rect.top, window.innerHeight - menu.offsetHeight - 12);
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  activeIconActionMenu = menu;
}

function registerDraggable(elements, config = {}) {
  const targets = Array.isArray(elements) ? elements.filter(Boolean) : [elements].filter(Boolean);
  if (!targets.length) {
    return;
  }
  const handler = (event) => beginDrag(event, targets, config);
  targets.forEach((element) => {
    element.classList.add('is-draggable');
    element.addEventListener('mousedown', handler);
  });
}

function registerResizable(handle, config = {}) {
  if (!handle) {
    return;
  }
  handle.classList.add('resize-handle');
  const onMouseDown = (event) => beginResize(event, handle, config);
  if (!handle.dataset.resizeBound) {
    handle.addEventListener('mousedown', onMouseDown);
    handle.dataset.resizeBound = 'true';
  }
}

function beginResize(event, handle, config = {}) {
  if (event.button !== 0) {
    return;
  }
  if (panContext.spaceMode || panContext.active) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  hideTooltip(true);
  closeInlineEditor();
  finishChartLabelEditor(false);

  const getValue = (fn, fallback, context) => {
    if (typeof fn === 'function') {
      try {
        return fn(context);
      } catch (error) {
        return fallback;
      }
    }
    return fallback;
  };

  const axis = config.axis === 'x' || config.axis === 'xy' ? config.axis : 'y';
  const startWidth = getValue(config.getWidth, config.initialWidth || 0);
  const startHeight = getValue(config.getHeight, config.initialHeight || 0);

  if (axis.includes('x') && (!Number.isFinite(startWidth) || startWidth <= 0)) {
    return;
  }
  if (axis.includes('y') && (!Number.isFinite(startHeight) || startHeight <= 0)) {
    return;
  }

  resizeContext = {
    handle,
    config,
    axis,
    startX: event.clientX,
    startY: event.clientY,
    startWidth,
    startHeight,
    minWidth: Math.max(8, getValue(config.getMinWidth, config.minWidth || 8)),
    maxWidth: Math.max(8, getValue(config.getMaxWidth, config.maxWidth || startWidth || 0)),
    minHeight: Math.max(8, getValue(config.getMinHeight, config.minHeight || 8)),
    maxHeight: Math.max(8, getValue(config.getMaxHeight, config.maxHeight || startHeight || 0)),
    currentWidth: startWidth,
    currentHeight: startHeight,
    changed: false
  };

  document.addEventListener('mousemove', handleResizeMove);
  document.addEventListener('mouseup', handleResizeEnd);
}

function handleResizeMove(event) {
  if (!resizeContext) {
    return;
  }

  const { config, axis } = resizeContext;
  const dx = event.clientX - resizeContext.startX;
  const dy = event.clientY - resizeContext.startY;
  const xMultiplier = config.centered ? 2 : 1;

  let nextWidth = resizeContext.startWidth;
  let nextHeight = resizeContext.startHeight;

  if (axis.includes('x')) {
    nextWidth = resizeContext.startWidth + dx * xMultiplier;
  }
  if (axis.includes('y')) {
    nextHeight = resizeContext.startHeight + dy;
  }

  resizeContext.currentWidth = nextWidth;
  resizeContext.currentHeight = nextHeight;

  const minWidth = Math.max(
    8,
    typeof config.getMinWidth === 'function'
      ? Number(config.getMinWidth(resizeContext)) || resizeContext.minWidth
      : resizeContext.minWidth
  );
  const maxWidth = Math.max(
    minWidth,
    typeof config.getMaxWidth === 'function'
      ? Number(config.getMaxWidth(resizeContext)) || resizeContext.maxWidth
      : resizeContext.maxWidth
  );
  const minHeight = Math.max(
    8,
    typeof config.getMinHeight === 'function'
      ? Number(config.getMinHeight(resizeContext)) || resizeContext.minHeight
      : resizeContext.minHeight
  );
  const maxHeight = Math.max(
    minHeight,
    typeof config.getMaxHeight === 'function'
      ? Number(config.getMaxHeight(resizeContext)) || resizeContext.maxHeight
      : resizeContext.maxHeight
  );

  if (!Number.isFinite(nextWidth)) {
    nextWidth = resizeContext.startWidth;
  }
  if (!Number.isFinite(nextHeight)) {
    nextHeight = resizeContext.startHeight;
  }

  if (axis.includes('x')) {
    nextWidth = Math.min(Math.max(nextWidth, minWidth), maxWidth);
  }
  if (axis.includes('y')) {
    nextHeight = Math.min(Math.max(nextHeight, minHeight), maxHeight);
  }

  resizeContext.currentWidth = nextWidth;
  resizeContext.currentHeight = nextHeight;

  const widthDelta = Math.abs(nextWidth - resizeContext.startWidth);
  const heightDelta = Math.abs(nextHeight - resizeContext.startHeight);
  if (!resizeContext.changed && (widthDelta >= RESIZE_THRESHOLD || heightDelta >= RESIZE_THRESHOLD)) {
    resizeContext.changed = true;
    suppressClick = true;
  }

  if (typeof config.onPreview === 'function') {
    config.onPreview({ width: nextWidth, height: nextHeight }, resizeContext);
  }
}

function handleResizeEnd() {
  if (!resizeContext) {
    return;
  }

  document.removeEventListener('mousemove', handleResizeMove);
  document.removeEventListener('mouseup', handleResizeEnd);

  const context = resizeContext;
  resizeContext = null;

  if (!context.changed) {
    if (typeof context.config.onCancel === 'function') {
      context.config.onCancel({ width: context.startWidth, height: context.startHeight }, context);
    } else if (typeof context.config.onPreview === 'function') {
      context.config.onPreview({ width: context.startWidth, height: context.startHeight }, context);
    }
    return;
  }

  const commit = context.config.onCommit;
  if (typeof commit === 'function') {
    pushHistoryState();
    const result = commit({ width: context.currentWidth, height: context.currentHeight }, context);
    if (result === false && historyStack.length) {
      historyStack.pop();
      updateUndoButtonState();
    }
    if (result === false && typeof context.config.onCancel === 'function') {
      context.config.onCancel({ width: context.startWidth, height: context.startHeight }, context);
    }
  }
}

function beginDrag(event, elements, config) {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }
  if (panContext.spaceMode || panContext.active) {
    return;
  }
  const datesSnapshot = Array.isArray(state.timelineDates) ? [...state.timelineDates] : [];
  if (!datesSnapshot.length) {
    return;
  }
  const startDate = config.startDate;
  if (!startDate) {
    return;
  }
  const startIndex = datesSnapshot.indexOf(startDate);
  if (startIndex === -1) {
    return;
  }
  const endDate = config.endDate ? config.endDate : null;
  const endIndex = endDate ? datesSnapshot.indexOf(endDate) : null;

  const getOffset = typeof config.getOffset === 'function' ? config.getOffset : null;
  const startOffset = getOffset ? Number(getOffset()) || 0 : 0;
  const bounds = typeof config.getOffsetBounds === 'function' ? config.getOffsetBounds() : null;

  dragContext = {
    elements,
    config,
    startX: event.clientX,
    startY: event.clientY,
    dx: 0,
    dy: 0,
    isDragging: false,
    historyPushed: false,
    startIndex,
    endIndex,
    duration: endIndex !== null ? endIndex - startIndex : null,
    datesSnapshot,
    originalTransforms: new Map(),
    startOffset,
    bounds
  };

  document.addEventListener('mousemove', handleElementDragMove);
  document.addEventListener('mouseup', handleElementDragEnd);
}

function handleElementDragMove(event) {
  if (!dragContext) {
    return;
  }
  const dx = event.clientX - dragContext.startX;
  const dy = event.clientY - dragContext.startY;
  dragContext.dx = dx;
  dragContext.dy = dy;
  if (!dragContext.isDragging) {
    if (Math.hypot(dx, dy) < DRAG_THRESHOLD) {
      return;
    }
    dragContext.isDragging = true;
    suppressClick = true;
    hideTooltip(true);
    pushHistoryState();
    dragContext.historyPushed = true;
    dragContext.elements.forEach((element) => {
      dragContext.originalTransforms.set(element, element.getAttribute('transform') || '');
      element.classList.add('is-being-dragged');
    });
  }

  dragContext.elements.forEach((element) => {
    const base = dragContext.originalTransforms.get(element) || '';
    const transform = base ? `${base} translate(${dx},${dy})` : `translate(${dx},${dy})`;
    element.setAttribute('transform', transform);
  });
}

function handleElementDragEnd() {
  if (!dragContext) {
    return;
  }

  const context = dragContext;
  dragContext = null;
  document.removeEventListener('mousemove', handleElementDragMove);
  document.removeEventListener('mouseup', handleElementDragEnd);

  context.elements.forEach((element) => {
    const base = context.originalTransforms.get(element);
    if (base) {
      element.setAttribute('transform', base);
    } else {
      element.removeAttribute('transform');
    }
    element.classList.remove('is-being-dragged');
  });

  if (!context.isDragging) {
    return;
  }

  const step = getStepX();
  const deltaSteps = step > 0 ? Math.round(context.dx / step) : 0;
  let applied = false;
  if (deltaSteps !== 0) {
    applied = applyDragDelta(context, deltaSteps);
  }
  const offsetApplied = applyDragOffset(context);
  const anyApplied = applied || offsetApplied;

  if (!anyApplied && context.historyPushed && historyStack.length) {
    historyStack.pop();
    updateUndoButtonState();
  }

  if (anyApplied) {
    clearSelection();
    renderTimeline();
  } else {
    renderTimeline();
  }
}

function applyDragDelta(context, deltaSteps) {
  if (!context || !deltaSteps) {
    return false;
  }
  const dates = context.datesSnapshot || [];
  if (!dates.length) {
    return false;
  }
  const lastIndex = dates.length - 1;
  const clamp = (index) => clampDateIndex(index, lastIndex);
  const newStartIndex = clamp(context.startIndex + deltaSteps);
  if (newStartIndex === context.startIndex) {
    return false;
  }

  switch (context.config.type) {
    case 'temperature': {
      const item = state.temps.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'neuro': {
      const item = state.neuro.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'lab': {
      const item = state.labDiagnostics.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'event': {
      const item = state.events.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'endoscopy': {
      const item = state.endoscopy.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'surgery': {
      const item = state.surgery.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'radiology': {
      const item = state.radiology.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.date = dates[newStartIndex];
      return true;
    }
    case 'support': {
      const item = state.supportiveTherapy.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.startDate = dates[newStartIndex];
      if (item.endDate) {
        const originalEndIndex = context.endIndex !== null ? context.endIndex : context.startIndex;
        const duration = originalEndIndex - context.startIndex;
        const newEndIndex = clamp(newStartIndex + duration);
        item.endDate = dates[newEndIndex];
      }
      return true;
    }
    case 'liver': {
      const item = state.liver.find((entry) => entry.id === context.config.id);
      if (!item) return false;
      item.startDate = dates[newStartIndex];
      if (item.endDate) {
        const originalEndIndex = context.endIndex !== null ? context.endIndex : context.startIndex;
        const duration = originalEndIndex - context.startIndex;
        const newEndIndex = clamp(newStartIndex + duration);
        item.endDate = dates[newEndIndex];
      }
      return true;
    }
    case 'therapy': {
      const course = state.therapy.find((entry) => entry.id === context.config.courseId);
      if (!course || !Array.isArray(course.medications)) return false;
      const medication = course.medications.find((med) => med.id === context.config.medicationId);
      if (!medication) return false;
      medication.startDate = dates[newStartIndex];
      if (medication.endDate) {
        const originalEndIndex = context.endIndex !== null ? context.endIndex : context.startIndex;
        const duration = originalEndIndex - context.startIndex;
        const newEndIndex = clamp(newStartIndex + duration);
        medication.endDate = dates[newEndIndex];
      }
      updateTherapyCourseBounds(course);
      return true;
    }
    default:
      return false;
  }
}

function applyDragOffset(context) {
  if (!context || !context.config || typeof context.config.applyOffset !== 'function') {
    return false;
  }
  const dy = Number(context.dy) || 0;
  const dx = Number(context.dx) || 0;
  const startOffset = context.startOffset !== undefined ? context.startOffset : 0;
  const bounds = context.bounds || {};

  if (typeof startOffset === 'object') {
    if (!dx && !dy) {
      return false;
    }
    const next = clampOffsetPoint({
      x: (startOffset.x || 0) + dx,
      y: (startOffset.y || 0) + dy
    }, bounds);
    if (next.x === (startOffset.x || 0) && next.y === (startOffset.y || 0)) {
      return false;
    }
    return context.config.applyOffset(next) !== false;
  }

  if (!dy) {
    return false;
  }
  const numericStart = Number(startOffset) || 0;
  const nextOffset = clampOffsetToBounds(numericStart + dy, bounds);
  if (nextOffset === numericStart) {
    return false;
  }
  return context.config.applyOffset(nextOffset) !== false;
}

function updateTherapyCourseBounds(course) {
  if (!course || !Array.isArray(course.medications) || !course.medications.length) {
    return;
  }
  let earliest = null;
  let latest = null;
  let openEnded = false;
  course.medications.forEach((med) => {
    if (med.startDate) {
      if (!earliest || parseDate(med.startDate) < parseDate(earliest)) {
        earliest = med.startDate;
      }
    }
    if (med.endDate) {
      if (!latest || parseDate(med.endDate) > parseDate(latest)) {
        latest = med.endDate;
      }
    } else {
      openEnded = true;
    }
  });
  if (earliest) {
    course.startDate = earliest;
  }
  if (openEnded) {
    course.endDate = '';
  } else if (latest) {
    course.endDate = latest;
  }
}

function applyTherapyLabelOverride(courseId, medicationId, newText) {
  if (!courseId || !medicationId) {
    return false;
  }
  const course = state.therapy.find((entry) => entry.id === courseId);
  if (!course || !Array.isArray(course.medications)) {
    return false;
  }
  const medication = course.medications.find((med) => {
    const key = med.id || `${course.id}-${med.name}`;
    return key === medicationId;
  });
  if (!medication) {
    return false;
  }
  const normalized = typeof newText === 'string' ? newText.trim() : '';
  const baseLabel = medication.dosage ? `${medication.name} — ${medication.dosage}` : medication.name || '';
  const baseNormalized = baseLabel.trim();
  const current = typeof medication.chartLabelOverride === 'string' ? medication.chartLabelOverride.trim() : '';
  const shouldRemove = !normalized || normalized === baseNormalized;
  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && normalized === current) {
    return false;
  }
  pushHistoryState();
  if (shouldRemove) {
    delete medication.chartLabelOverride;
  } else {
    medication.chartLabelOverride = normalized;
  }
  renderTimeline();
  return true;
}

function applyTherapyOffsetOverride(courseId, medicationId, newOffset, bounds = {}) {
  if (!courseId || !medicationId) {
    return false;
  }
  const course = state.therapy.find((entry) => entry.id === courseId);
  if (!course || !Array.isArray(course.medications)) {
    return false;
  }
  const medication = course.medications.find((med) => {
    const key = med.id || `${course.id}-${med.name}`;
    return key === medicationId;
  });
  if (!medication) {
    return false;
  }
  const normalized = clampOffsetToBounds(Number(newOffset), bounds);
  const current = parseOffsetValue(medication.chartOffsetY);
  if (normalized === current) {
    return false;
  }
  if (normalized === 0) {
    delete medication.chartOffsetY;
  } else {
    medication.chartOffsetY = normalized;
  }
  return true;
}

function applyTherapyHeightOverride(courseId, medicationId, newHeight, naturalHeight) {
  if (!courseId || !medicationId) {
    return false;
  }
  const course = state.therapy.find((entry) => entry.id === courseId);
  if (!course || !Array.isArray(course.medications)) {
    return false;
  }
  const medication = course.medications.find((med) => {
    const key = med.id || `${course.id}-${med.name}`;
    return key === medicationId;
  });
  if (!medication) {
    return false;
  }

  const normalized = Math.round(Number(newHeight));
  if (!Number.isFinite(normalized) || normalized <= 0) {
    return false;
  }
  const baseHeight = Math.max(Math.round(Number(naturalHeight) || THERAPY_LEVEL_HEIGHT), THERAPY_LEVEL_HEIGHT);
  const current = parseHeightOverride(medication.chartHeightOverride) || 0;
  const shouldRemove = normalized <= baseHeight + 1;

  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && current === normalized) {
    return false;
  }

  if (shouldRemove) {
    delete medication.chartHeightOverride;
  } else {
    medication.chartHeightOverride = normalized;
  }
  renderTimeline();
  return true;
}

function applySupportOffsetOverride(supportId, newOffset, bounds = {}) {
  if (!supportId) {
    return false;
  }
  const item = state.supportiveTherapy.find((entry) => entry.id === supportId);
  if (!item) {
    return false;
  }
  const normalized = clampOffsetToBounds(Number(newOffset), bounds);
  const current = parseOffsetValue(item.chartOffsetY);
  if (normalized === current) {
    return false;
  }
  if (normalized === 0) {
    delete item.chartOffsetY;
  } else {
    item.chartOffsetY = normalized;
  }
  return true;
}

function applySupportHeightOverride(supportId, newHeight, naturalHeight) {
  if (!supportId) {
    return false;
  }
  const item = state.supportiveTherapy.find((entry) => entry.id === supportId);
  if (!item) {
    return false;
  }
  const normalized = Math.round(Number(newHeight));
  if (!Number.isFinite(normalized) || normalized <= 0) {
    return false;
  }
  const baseHeight = Math.max(Math.round(Number(naturalHeight) || THERAPY_LEVEL_HEIGHT), THERAPY_LEVEL_HEIGHT);
  const current = parseHeightOverride(item.chartHeightOverride) || 0;
  const shouldRemove = normalized <= baseHeight + 1;

  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && current === normalized) {
    return false;
  }

  if (shouldRemove) {
    delete item.chartHeightOverride;
  } else {
    item.chartHeightOverride = normalized;
  }
  renderTimeline();
  return true;
}

function applyEndoscopyOffsetOverride(entryId, newOffset, bounds = {}) {
  if (!entryId) {
    return false;
  }
  const item = state.endoscopy.find((entry) => entry.id === entryId);
  if (!item) {
    return false;
  }
  const normalized = clampOffsetToBounds(Number(newOffset), bounds);
  const current = parseOffsetValue(item.chartOffsetY);
  if (normalized === current) {
    return false;
  }
  if (normalized === 0) {
    delete item.chartOffsetY;
  } else {
    item.chartOffsetY = normalized;
  }
  return true;
}

function applyEndoscopyHeightOverride(entryId, newHeight, naturalHeight) {
  if (!entryId) {
    return false;
  }
  const item = state.endoscopy.find((entry) => entry.id === entryId);
  if (!item) {
    return false;
  }
  const normalized = Math.round(Number(newHeight));
  if (!Number.isFinite(normalized) || normalized <= 0) {
    return false;
  }
  const baseHeight = Math.max(Math.round(Number(naturalHeight) || ENDOSCOPY_ITEM_HEIGHT), ENDOSCOPY_ITEM_HEIGHT);
  const current = parseHeightOverride(item.chartHeightOverride) || 0;
  const shouldRemove = normalized <= baseHeight + 1;

  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && current === normalized) {
    return false;
  }

  if (shouldRemove) {
    delete item.chartHeightOverride;
  } else {
    item.chartHeightOverride = normalized;
  }
  renderTimeline();
  return true;
}

function applyCardSizeOverride(item, nextWidth, nextHeight, baseWidth, baseHeight) {
  if (!item) {
    return false;
  }
  let changed = false;

  const normalizedWidth = Math.round(Number(nextWidth));
  if (Number.isFinite(normalizedWidth) && normalizedWidth > 0 && Number.isFinite(baseWidth)) {
    const current = parseWidthOverride(item.chartWidthOverride) || 0;
    const shouldRemove = normalizedWidth <= baseWidth + 1;
    if (!shouldRemove && current !== normalizedWidth) {
      item.chartWidthOverride = normalizedWidth;
      changed = true;
    } else if (shouldRemove && current) {
      delete item.chartWidthOverride;
      changed = true;
    }
  }

  const normalizedHeight = Math.round(Number(nextHeight));
  if (Number.isFinite(normalizedHeight) && normalizedHeight > 0 && Number.isFinite(baseHeight)) {
    const current = parseHeightOverride(item.chartHeightOverride) || 0;
    const shouldRemove = normalizedHeight <= baseHeight + 1;
    if (!shouldRemove && current !== normalizedHeight) {
      item.chartHeightOverride = normalizedHeight;
      changed = true;
    } else if (shouldRemove && current) {
      delete item.chartHeightOverride;
      changed = true;
    }
  }

  if (changed) {
    renderTimeline();
  }
  return changed;
}

function applyTrackHeightOverride(trackKey, nextHeight, minHeight) {
  if (!trackKey || !state.layout) {
    return false;
  }
  const normalized = Math.round(Number(nextHeight));
  if (!Number.isFinite(normalized) || normalized <= 0) {
    return false;
  }
  const clampedHeight = Math.max(TRACK_HEIGHT_MIN, normalized);
  const current = Number(state.layout.trackHeightOverride?.[trackKey]) || 0;
  if (current === clampedHeight) {
    return false;
  }

  if (!state.layout.trackHeightOverride) {
    state.layout.trackHeightOverride = {};
  }
  state.layout.trackHeightOverride[trackKey] = clampedHeight;
  state.layout = normalizeLayoutState(state.layout);
  syncStepXFromLayout();
  renderTimeline();
  return true;
}

function attachDetails(
  element,
  detail,
  highlightTarget = element,
  selectionKey,
  editInfo,
  options = {}
) {
  element.classList.add('is-clickable');
  if (highlightTarget !== element) {
    highlightTarget.classList.add('is-clickable');
  }
  if (selectionKey) {
    highlightTarget.dataset.selectionKey = selectionKey;
  }

  registerTooltipTarget(element, detail, highlightTarget, editInfo);
  if (highlightTarget !== element) {
    registerTooltipTarget(highlightTarget, detail, highlightTarget, editInfo);
  }

  const hasInlineOption = options && Object.prototype.hasOwnProperty.call(options, 'inlineEditor');
  const inlineEditorOptions = hasInlineOption ? options.inlineEditor : undefined;
  const highlightInlineOptions =
    options && Object.prototype.hasOwnProperty.call(options, 'highlightInlineEditor')
      ? options.highlightInlineEditor
      : inlineEditorOptions;

  const shouldBindInlineEditor = editInfo && inlineEditorOptions !== false;
  if (shouldBindInlineEditor) {
    const handleInlineEdit = (event, editorOptions) => {
      if (!editInfo) return;
      event.stopPropagation();
      hideTooltip(true);
      openInlineEditor(editInfo, highlightTarget, editorOptions || null);
    };

    element.addEventListener('dblclick', (event) => handleInlineEdit(event, inlineEditorOptions));
    if (highlightTarget !== element) {
      highlightTarget.addEventListener('dblclick', (event) => handleInlineEdit(event, highlightInlineOptions));
    }
  }

  element.addEventListener('click', (event) => {
    event.stopPropagation();
    hideTooltip(true);
    closeInlineEditor();
    if (activeHighlight && activeHighlight !== highlightTarget) {
      activeHighlight.classList.remove('is-selected');
    }
    activeHighlight = highlightTarget;
    activeSelectionKey = selectionKey || null;
    activeDetailPayload = detail;
    highlightTarget.classList.add('is-selected');
    showDetails(detail);
    if (editInfo) {
      enterEditMode(editInfo);
    }
  });
}

function restoreSelection() {
  if (!activeSelectionKey) {
    if (!activeDetailPayload) {
      showDetails(null);
    } else {
      showDetails(activeDetailPayload);
    }
    return;
  }
  const target = timelineSvg.querySelector(`[data-selection-key="${activeSelectionKey}"]`);
  if (!target) {
    activeSelectionKey = null;
    activeHighlight = null;
    showDetails(activeDetailPayload);
    return;
  }
  activeHighlight = target;
  target.classList.add('is-selected');
  showDetails(activeDetailPayload);
}

function getTrackContentScale(track) {
  if (!track) {
    return 1;
  }
  const scale = Number(track.scaleY);
  return Number.isFinite(scale) && scale > 0 ? Math.min(scale, 1) : 1;
}

function getTrackContentTrack(track) {
  if (!track) {
    return null;
  }
  const scale = getTrackContentScale(track);
  if (scale >= 1) {
    return track;
  }
  return { ...track, height: track.baseHeight };
}

function getTrackContentLayer(track) {
  if (!timelineSvg) {
    return null;
  }
  if (!track) {
    return timelineSvg;
  }
  if (track.contentLayer) {
    return track.contentLayer;
  }
  const group = createSvgElement('g', { 'data-track-layer': track.key });
  const scale = getTrackContentScale(track);
  if (scale !== 1) {
    group.setAttribute(
      'transform',
      `translate(0 ${track.top}) scale(1 ${scale}) translate(0 ${-track.top})`
    );
  }
  timelineSvg.appendChild(group);
  track.contentLayer = group;
  return group;
}

function renderTimeline() {
  hideTooltip(true);
  closeInlineEditor();
  finishChartLabelEditor(false);
  hideIconActionMenu();
  updateTimelineDates();
  const dates = state.timelineDates;
  const visibleTrackKeys = getVisibleTrackKeys();
  const therapyMetrics = isTrackVisible('therapy') ? getTherapyMetrics() : { intervals: [], totalLevels: 0 };
  const supportMetrics = isTrackVisible('support') ? getSupportiveMetrics() : { intervals: [], totalLevels: 0 };
  const endoscopyMetrics = isTrackVisible('endoscopy') ? getEndoscopyMetrics() : { items: [], totalLevels: 0 };
  const neuroMetrics = isTrackVisible('neuro')
    ? { items: [...state.neuro], layout: measureSingleDateCardLayout(state.neuro, dates, 'neuro') }
    : { items: [], layout: { levelHeights: [], levelAssignments: new Map(), measurements: new Map() } };
  const labMetrics = isTrackVisible('lab')
    ? { items: [...state.labDiagnostics], layout: measureSingleDateCardLayout(state.labDiagnostics, dates, 'lab') }
    : { items: [], layout: { levelHeights: [], levelAssignments: new Map(), measurements: new Map() } };
  const eventMetrics = isTrackVisible('event')
    ? { items: [...state.events], layout: measureSingleDateCardLayout(state.events, dates, 'event') }
    : { items: [], layout: { levelHeights: [], levelAssignments: new Map(), measurements: new Map() } };
  const tracks = getTrackLayout(
    {
      therapy: therapyMetrics,
      support: supportMetrics,
      endoscopy: endoscopyMetrics,
      neuro: neuroMetrics,
      lab: labMetrics,
      event: eventMetrics
    },
    visibleTrackKeys,
    dates
  );
  const lastTrack = tracks.length ? tracks[tracks.length - 1] : null;
  const dateSpan = dates.length > 0 ? dates.length - 1 : 0;
  let baseWidth = LEFT_MARGIN + RIGHT_MARGIN + dateSpan * getStepX();
  let maxContentRight = LEFT_MARGIN + RIGHT_MARGIN;

  const fontScale = getCurrentFontScale();

  if (therapyMetrics.layout && Array.isArray(therapyMetrics.intervals)) {
    therapyMetrics.intervals.forEach((interval) => {
      const measurement = therapyMetrics.layout.itemsByKey?.get(`${interval.courseId}:${interval.medicationId}`);
      const minWidth = measurement?.minWidth || 0;
      const xStart = getXPosition(interval.startDate, dates);
      let width = 0;
      if (interval.endDate) {
        width = Math.max(40, getXPosition(interval.endDate, dates) - xStart);
      }
      width = Math.max(width, minWidth, 60);
      maxContentRight = Math.max(maxContentRight, xStart + width + 20);
    });
  }

  if (supportMetrics.layout && Array.isArray(supportMetrics.intervals)) {
    supportMetrics.intervals.forEach((interval) => {
      const measurement = supportMetrics.layout.itemsByKey?.get(`support:${interval.supportId}`);
      const minWidth = measurement?.minWidth || 0;
      const xStart = getXPosition(interval.startDate, dates);
      let width = 0;
      if (interval.endDate) {
        width = Math.max(40, getXPosition(interval.endDate, dates) - xStart);
      }
      width = Math.max(width, minWidth, 60);
      maxContentRight = Math.max(maxContentRight, xStart + width + 20);
    });
  }

  if (endoscopyMetrics.layout && Array.isArray(endoscopyMetrics.items)) {
    endoscopyMetrics.items.forEach((item) => {
      const measurement = endoscopyMetrics.layout.itemsById?.get(item.id);
      const minWidth = measurement?.minWidth || 0;
      const width = Math.max(minWidth, (measurement?.maxChars || 32) * (SVG_CHAR_WIDTH * Math.max(fontScale, 0.85)) + 48, 240);
      const center = getXPosition(item.date, dates);
      maxContentRight = Math.max(maxContentRight, center + width / 2 + 20);
    });
  }

  const expandForSingleDate = (metrics, trackKey) => {
    if (!metrics?.layout || !Array.isArray(metrics.items)) {
      return;
    }
    metrics.items.forEach((item) => {
      const measurement = metrics.layout.measurements?.get(item.id);
      const width = measurement?.width || SINGLE_DATE_CARD_MIN_WIDTH;
      const center = getXPosition(item.date, dates);
      maxContentRight = Math.max(maxContentRight, center + width / 2 + 20);
    });
  };

  expandForSingleDate(neuroMetrics, 'neuro');
  expandForSingleDate(labMetrics, 'lab');
  expandForSingleDate(eventMetrics, 'event');

  baseWidth = Math.max(baseWidth, maxContentRight + RIGHT_MARGIN);
  const chartWidth = Math.max(MIN_WIDTH, baseWidth || MIN_WIDTH);
  const bottomMargin = calculateBottomMargin(chartWidth, visibleTrackKeys);
  const baseHeight = TOP_MARGIN + bottomMargin + 200;
  const chartHeight = lastTrack ? lastTrack.top + lastTrack.height + bottomMargin : baseHeight;
  const axisLabelOffset = BASE_AXIS_LABEL_OFFSET * getCurrentFontScale();

  timelineSvg.innerHTML = '';
  timelineSvg.setAttribute('width', chartWidth);
  timelineSvg.setAttribute('height', chartHeight);
  timelineSvg.setAttribute('viewBox', `0 0 ${chartWidth} ${chartHeight}`);
  chartViewport.style.width = `${chartWidth}px`;
  chartViewport.style.minWidth = `${chartWidth}px`;
  chartViewport.style.height = `${chartHeight}px`;
  chartViewport.style.minHeight = `${chartHeight}px`;

  applySvgFontScale(timelineSvg);
  ensureSvgStyles(timelineSvg);

  const defs = createSvgElement('defs', { 'data-export-defs': 'true' });
  const gradient = createSvgElement('linearGradient', {
    id: 'timelineBackgroundGradient',
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%'
  });
  gradient.appendChild(
    createSvgElement('stop', {
      offset: '0%',
      'stop-color': '#f9fafb',
      'stop-opacity': '0.95'
    })
  );
  gradient.appendChild(
    createSvgElement('stop', {
      offset: '100%',
      'stop-color': '#ffffff',
      'stop-opacity': '1'
    })
  );
  defs.appendChild(gradient);
  timelineSvg.appendChild(defs);

  const background = createSvgElement('rect', {
    x: 0,
    y: 0,
    width: chartWidth,
    height: chartHeight,
    fill: 'url(#timelineBackgroundGradient)',
    stroke: COLORS.border,
    'stroke-width': 1,
    rx: 14,
    ry: 14
  });
  timelineSvg.appendChild(background);

  tracks.forEach((track) => {
    const labelLines = wrapTrackLabelLines(track.label, 18);
    const labelX = LEFT_MARGIN - 24;
    const lineHeight = 16;
    const totalHeight = lineHeight * labelLines.length;
    const startY = track.top + track.height / 2 - (totalHeight - lineHeight) / 2;
    const label = createSvgElement('text', {
      x: labelX,
      y: track.top + track.height / 2,
      class: 'track-label',
      'text-anchor': 'end'
    });
    labelLines.forEach((line, index) => {
      const tspan = createSvgElement('tspan', {
        x: labelX,
        y: startY + index * lineHeight
      });
      tspan.textContent = line;
      label.appendChild(tspan);
    });
    timelineSvg.appendChild(label);

    const baseline = createSvgElement('line', {
      x1: LEFT_MARGIN,
      y1: track.top + track.height,
      x2: chartWidth - RIGHT_MARGIN,
      y2: track.top + track.height,
      stroke: 'rgba(148, 163, 184, 0.25)'
    });
    timelineSvg.appendChild(baseline);
  });

  const gridTop = tracks.length ? tracks[0].top - 20 : TOP_MARGIN;
  const gridBottom = chartHeight - bottomMargin;

  dates.forEach((date) => {
    const x = getXPosition(date, dates);
    const line = createSvgElement('line', {
      x1: x,
      y1: gridTop,
      x2: x,
      y2: gridBottom,
      class: 'grid-line'
    });
    timelineSvg.appendChild(line);

    const tick = createSvgElement('circle', {
      cx: x,
      cy: chartHeight - bottomMargin,
      r: 4,
      class: 'axis-tick'
    });
    timelineSvg.appendChild(tick);

    const label = createSvgElement('text', {
      x,
      y: chartHeight - bottomMargin + axisLabelOffset,
      class: 'axis-label',
      'text-anchor': 'middle'
    });
    const display = formatDisplayDate(date);
    label.textContent = display.length >= 5 ? display.slice(0, 5) : display;
    timelineSvg.appendChild(label);
  });

  const axisLine = createSvgElement('line', {
    x1: LEFT_MARGIN,
    y1: chartHeight - bottomMargin,
    x2: chartWidth - RIGHT_MARGIN,
    y2: chartHeight - bottomMargin,
    class: 'axis-line'
  });
  timelineSvg.appendChild(axisLine);

  renderTrackResizeHandles(tracks);

  renderTemperature(tracks.find((track) => track.key === 'temperature'), dates, chartWidth);
  renderTherapy(tracks.find((track) => track.key === 'therapy'), dates, chartWidth, therapyMetrics);
  renderSupportiveTherapy(tracks.find((track) => track.key === 'support'), dates, chartWidth, supportMetrics);
  renderEndoscopy(tracks.find((track) => track.key === 'endoscopy'), dates, chartWidth, endoscopyMetrics);
  renderSurgery(tracks.find((track) => track.key === 'surgery'), dates);
  renderRadiology(tracks.find((track) => track.key === 'radiology'), dates);
  renderNeuro(tracks.find((track) => track.key === 'neuro'), dates, chartWidth, neuroMetrics);
  renderLiver(tracks.find((track) => track.key === 'liver'), dates, chartWidth);
  renderLabDiagnostics(tracks.find((track) => track.key === 'lab'), dates, chartWidth, labMetrics);
  renderEvents(tracks.find((track) => track.key === 'event'), dates, chartWidth, eventMetrics);
  renderLegend(chartWidth, chartHeight, bottomMargin, visibleTrackKeys);
  updateZoomButtons();

  restoreSelection();
}

function renderTemperature(track, dates, chartWidth) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.temps].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  if (!sorted.length) return;

  const values = sorted.map((item) => Number(item.value));
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (min === max) {
    min -= 1;
    max += 1;
  }

  const usableHeight = renderTrack.height - 40;
  const points = sorted.map((item) => {
    const x = getXPosition(item.date, dates);
    const normalized = (Number(item.value) - min) / (max - min);
    const y = renderTrack.top + 20 + (1 - normalized) * usableHeight;
    return { item, x, y };
  });

  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x},${point.y}`)
    .join(' ');
  const path = createSvgElement('path', {
    d: pathData,
    class: 'temperature-line'
  });
  layer.appendChild(path);

  points.forEach(({ item, x, y }) => {
    const fontScale = getEffectiveChartFontScale(item);
    const circle = createSvgElement('circle', {
      cx: x,
      cy: y,
      r: 6,
      class: 'temperature-point'
    });
    layer.appendChild(circle);

    const valueLabel = createSvgElement('text', {
      x,
      y: y - 12 * fontScale,
      class: 'temperature-value',
      'text-anchor': 'middle'
    });
    valueLabel.textContent = Number(item.value).toFixed(1);
    valueLabel.style.fontSize = `${12 * fontScale}px`;
    layer.appendChild(valueLabel);

    const commentCard = null;
    const commentText = null;

    const detailPayload = {
      type: 'Температура',
      date: item.date,
      time: item.time,
      title: `${Number(item.value).toFixed(1)} °C`,
      comment: item.comment || '',
      color: COLORS.accent,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'temperature', id: item.id },
      fontTarget: { type: 'temperature', id: item.id }
    };
    const editInfo = { type: 'temperature', id: item.id };

    if (item.isFlagged) {
      circle.classList.add('is-flagged-shape');
      valueLabel.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(x - 10, y, { anchor: 'end', container: layer });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, circle, item.id, editInfo);
      }
    }

    attachDetails(circle, detailPayload, circle, item.id, editInfo);

    attachDetails(valueLabel, detailPayload, circle, item.id, editInfo, {
      inlineEditor: {
        fieldNames: ['value'],
        preferredWidth: 200,
        focusField: 'value',
        compact: true
      },
      highlightInlineEditor: null
    });

    const dragElements = [circle, valueLabel];
    registerDraggable(dragElements, {
      type: 'temperature',
      id: item.id,
      startDate: item.date
    });
  });
}

function renderTherapy(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;

  const effectiveMetrics = metrics || getTherapyMetrics();
  const intervals = effectiveMetrics.intervals;
  if (!intervals.length) return;

  const layout = effectiveMetrics.layout || measureTherapyLayout(intervals, dates);
  const levelHeights = layout.levelHeights || [];
  if (!levelHeights.length) return;

  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (levelHeights.length - 1) * THERAPY_ROW_SPACING;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + THERAPY_ROW_SPACING;
  });

  const globalFontScale = getCurrentFontScale();
  const fallbackPadding = (THERAPY_LABEL_PADDING_Y / 2) * globalFontScale;
  const fallbackLineHeight = THERAPY_LABEL_LINE_HEIGHT * globalFontScale;

  intervals.forEach((item) => {
    const level = item.__level || 0;
    const y = levelOffsets[level] ?? startY;
    const xStart = getXPosition(item.startDate, dates);
    const xEnd = item.endDate
      ? getXPosition(item.endDate, dates)
      : Math.max(xStart + 80, getLastCoordinate(dates, chartWidth));
    let width = Math.max(40, xEnd - xStart);

    const color = getTherapyColor(item.medication.name);
    const textColor = getTherapyLabelColor(item.medication.name);
    const effectiveEndDate = getEffectiveIntervalEnd(item, dates);
    const totalDoses = calculateTotalDoses(item, dates);
    const frequencySummary = formatMedicationFrequency(item.medication);
    const isFlagged = Boolean(item.isFlagged);

    const key = `${item.courseId}:${item.medicationId}`;
    const measurement = layout.itemsByKey?.get(key) || {
      rectHeight: THERAPY_LEVEL_HEIGHT,
      naturalHeight: THERAPY_LEVEL_HEIGHT,
      maxChars: estimateMaxCharsForWidth(width - 24, globalFontScale),
      paddingTop: fallbackPadding,
      paddingBottom: fallbackPadding,
      lineHeight: fallbackLineHeight,
      lineCount: 4,
      fontScale: globalFontScale * getChartFontScaleValue(item)
    };
    width = Math.max(width, measurement.minWidth || 0);
    const rectHeight = measurement.rectHeight || THERAPY_LEVEL_HEIGHT;
    const naturalHeight = measurement.naturalHeight || rectHeight;
    const itemFontScale = measurement.fontScale || globalFontScale * getChartFontScaleValue(item);
    const paddingTop = measurement.paddingTop ?? fallbackPadding;
    const paddingBottom = measurement.paddingBottom ?? fallbackPadding;
    const lineHeight = measurement.lineHeight || THERAPY_LABEL_LINE_HEIGHT * itemFontScale;
    const maxChars = measurement.maxChars || estimateMaxCharsForWidth(width - 24, itemFontScale);
    const rectRight = xStart + width;
    const providedLines = Array.isArray(measurement.lines) ? measurement.lines : null;
    const labelLineCount = Math.max(
      1,
      providedLines && providedLines.length ? providedLines.length : measurement.lineCount || 4
    );

    const bounds = getTrackOffsetBounds(renderTrack, y, rectHeight);
    const storedOffset = getSupportOffsetValue(item);
    const offsetY = clampOffsetToBounds(storedOffset, bounds);
    const finalY = y + offsetY;

    const rect = createSvgElement('rect', {
      x: xStart,
      y: finalY,
      width,
      height: rectHeight,
      class: 'therapy-bar',
      fill: color,
      stroke: 'rgba(255,255,255,0.75)',
      'stroke-width': 1,
      rx: 7,
      ry: 7
    });
    layer.appendChild(rect);

    const baseLabelText = getTherapyBaseLabel(item);
    const labelText = getTherapyDisplayLabel(item);
    const label = createSvgElement('text', {
      x: xStart + 10,
      y: finalY + paddingTop,
      class: 'therapy-label',
      'dominant-baseline': 'hanging',
      fill: textColor
    });
    label.style.fontSize = `${12 * itemFontScale}px`;
    if (providedLines && providedLines.length) {
      applyProvidedLines(label, providedLines, lineHeight);
    } else {
      applyMultilineSvgText(label, labelText, {
        maxChars,
        maxLines: labelLineCount,
        lineHeight
      });
    }
    layer.appendChild(label);

    const detailLines = [];
    if (item.medication.dosage) {
      detailLines.push(`Дозировка: ${item.medication.dosage}`);
    }
    if (frequencySummary) {
      detailLines.push(`Частота: ${frequencySummary}`);
    }
    if (item.medication.note) {
      detailLines.push(`Примечание: ${item.medication.note}`);
    }
    if (item.courseComment) {
      detailLines.push(`Комментарий курса: ${item.courseComment}`);
    }
    let periodText;
    if (item.endDate) {
      const startText = item.startDate ? formatDisplayDate(item.startDate) : 'без указания';
      periodText = `Период: ${startText} – ${formatDisplayDate(item.endDate)}`;
    } else if (item.startDate) {
      periodText = `Период: с ${formatDisplayDate(item.startDate)}`;
    } else {
      periodText = 'Период: в пределах дат курса';
    }
    detailLines.push(periodText);
    if (typeof totalDoses === 'number') {
      const doseText = `${formatNumber(totalDoses)} доз`;
      const effectiveDateText = effectiveEndDate ? formatDisplayDate(effectiveEndDate) : '';
      detailLines.push(effectiveDateText ? `Всего доз: ${doseText} (по ${effectiveDateText})` : `Всего доз: ${doseText}`);
    }

    const selectionKey = `${item.courseId}:${item.medicationId}`;
    const detailPayload = {
      type: 'Лекарственная терапия',
      date: item.startDate,
      title: baseLabelText,
      comment: detailLines.join('\n'),
      color,
      isFlagged,
      deleteInfo: {
        type: 'therapy',
        courseId: item.courseId,
        medicationId: item.medicationId
      },
      fontTarget: { type: 'therapy', courseId: item.courseId, medicationId: item.medicationId }
    };

    const editInfo = { type: 'therapy', courseId: item.courseId, medicationId: item.medicationId };
    attachDetails(rect, detailPayload, rect, selectionKey, editInfo);
    attachDetails(label, detailPayload, rect, selectionKey, editInfo, { inlineEditor: false });

    enableChartLabelOverrideEditing(label, {
      getCurrentText: () => getTherapyDisplayLabel(item),
      onCommit: (text) => applyTherapyLabelOverride(item.courseId, item.medicationId, text)
    });

    if (isFlagged) {
      rect.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(xStart + 6, finalY + rectHeight / 2, {
        anchor: 'start',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, rect, selectionKey, editInfo);
      }
    }

    let doseLabel = null;
    if (typeof totalDoses === 'number') {
      doseLabel = createSvgElement('text', {
        x: rectRight - 12,
        y: finalY + rectHeight - Math.max(6, paddingBottom / 2),
        class: 'therapy-dose-label',
        'text-anchor': 'end',
        fill: textColor
      });
      doseLabel.style.fontSize = `${11 * itemFontScale}px`;
      doseLabel.textContent = `${formatNumber(totalDoses)} доз`;
      layer.appendChild(doseLabel);
      if (isFlagged) {
        doseLabel.classList.add('is-flagged-text');
      }
      attachDetails(doseLabel, detailPayload, rect, selectionKey, editInfo, {
        highlightInlineEditor: null
      });
    }

    const dragTargets = [rect, label];
    if (doseLabel) {
      dragTargets.push(doseLabel);
    }
    registerDraggable(dragTargets, {
      type: 'therapy',
      courseId: item.courseId,
      medicationId: item.medicationId,
      startDate: item.startDate,
      endDate: item.endDate || '',
      getOffset: () => {
        const course = state.therapy.find((entry) => entry.id === item.courseId);
        if (!course || !Array.isArray(course.medications)) {
          return 0;
        }
        const medication = course.medications.find((med) => {
          const key = med.id || `${course.id}-${med.name}`;
          return key === item.medicationId;
        });
        return medication ? parseOffsetValue(medication.chartOffsetY) : 0;
      },
      getOffsetBounds: () => getTrackOffsetBounds(renderTrack, y, rectHeight),
      applyOffset: (nextOffset) =>
        applyTherapyOffsetOverride(
          item.courseId,
          item.medicationId,
          nextOffset,
          getTrackOffsetBounds(renderTrack, y, rectHeight)
        )
    });

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: rectRight - handleSize,
      y: finalY + rectHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle therapy-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreviewHeight = (nextHeight) => {
      rect.setAttribute('height', nextHeight);
      handle.setAttribute('y', finalY + nextHeight - handleSize);
      if (doseLabel) {
        doseLabel.setAttribute('y', finalY + nextHeight - Math.max(6, paddingBottom / 2));
      }
    };

    registerResizable(handle, {
      axis: 'y',
      getHeight: () => {
        const current = Number(rect.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : rectHeight;
      },
      getMinHeight: () => Math.max(naturalHeight, THERAPY_LEVEL_HEIGHT),
      getMaxHeight: () => {
        const minHeight = Math.max(naturalHeight, THERAPY_LEVEL_HEIGHT);
        const available = renderTrack.top + renderTrack.height - finalY - 6;
        return Math.max(minHeight, available);
      },
      onPreview: ({ height }) => {
        updatePreviewHeight(height);
      },
      onCancel: ({ height }) => {
        updatePreviewHeight(height);
      },
      onCommit: ({ height }) =>
        applyTherapyHeightOverride(item.courseId, item.medicationId, height, naturalHeight)
    });
  });
}

function renderSupportiveTherapy(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;

  const effectiveMetrics = metrics || getSupportiveMetrics();
  const intervals = effectiveMetrics.intervals;
  if (!intervals.length) return;

  const layout = effectiveMetrics.layout || measureSupportLayout(intervals, dates);
  const levelHeights = layout.levelHeights || [];
  if (!levelHeights.length) return;

  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (levelHeights.length - 1) * THERAPY_ROW_SPACING;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + THERAPY_ROW_SPACING;
  });

  const globalFontScale = getCurrentFontScale();
  const fallbackPadding = (THERAPY_LABEL_PADDING_Y / 2) * globalFontScale;
  const fallbackLineHeight = THERAPY_LABEL_LINE_HEIGHT * globalFontScale;

  intervals.forEach((item) => {
    const level = item.__level || 0;
    const y = levelOffsets[level] ?? startY;
    const xStart = getXPosition(item.startDate, dates);
    const xEnd = item.endDate
      ? getXPosition(item.endDate, dates)
      : Math.max(xStart + 80, getLastCoordinate(dates, chartWidth));
    let width = Math.max(40, xEnd - xStart);

    const color = getSupportiveColor();
    const textColor = getSupportiveLabelColor();
    const isFlagged = Boolean(item.isFlagged);

    const key = `support:${item.supportId}`;
    const measurement = layout.itemsByKey?.get(key) || {
      rectHeight: THERAPY_LEVEL_HEIGHT,
      naturalHeight: THERAPY_LEVEL_HEIGHT,
      maxChars: estimateMaxCharsForWidth(width - 24, globalFontScale),
      paddingTop: fallbackPadding,
      paddingBottom: fallbackPadding,
      lineHeight: fallbackLineHeight,
      lineCount: 4,
      fontScale: globalFontScale * getChartFontScaleValue(item)
    };
    width = Math.max(width, measurement.minWidth || 0);
    const rectHeight = measurement.rectHeight || THERAPY_LEVEL_HEIGHT;
    const naturalHeight = measurement.naturalHeight || rectHeight;
    const itemFontScale = measurement.fontScale || globalFontScale * getChartFontScaleValue(item);
    const paddingTop = measurement.paddingTop ?? fallbackPadding;
    const paddingBottom = measurement.paddingBottom ?? fallbackPadding;
    const lineHeight = measurement.lineHeight || THERAPY_LABEL_LINE_HEIGHT * itemFontScale;
    const maxChars = measurement.maxChars || estimateMaxCharsForWidth(width - 24, itemFontScale);
    const rectRight = xStart + width;
    const providedLines = Array.isArray(measurement.lines) ? measurement.lines : null;
    const labelLineCount = Math.max(
      1,
      providedLines && providedLines.length ? providedLines.length : measurement.lineCount || 4
    );

    const bounds = getTrackOffsetBounds(renderTrack, y, rectHeight);
    const storedOffset = getSupportOffsetValue(item);
    const offsetY = clampOffsetToBounds(storedOffset, bounds);
    const finalY = y + offsetY;

    const rect = createSvgElement('rect', {
      x: xStart,
      y: finalY,
      width,
      height: rectHeight,
      class: 'support-bar',
      fill: color,
      stroke: SUPPORT_OUTLINE_COLOR,
      'stroke-width': 1.5,
      rx: 7,
      ry: 7
    });
    layer.appendChild(rect);

    const labelText = item.medication.dosage
      ? `${item.medication.name} — ${item.medication.dosage}`
      : item.medication.name;
    const label = createSvgElement('text', {
      x: xStart + 10,
      y: finalY + paddingTop,
      class: 'support-label',
      'dominant-baseline': 'hanging',
      fill: textColor
    });
    label.style.fontSize = `${12 * itemFontScale}px`;
    if (providedLines && providedLines.length) {
      applyProvidedLines(label, providedLines, lineHeight);
    } else {
      applyMultilineSvgText(label, labelText, {
        maxChars,
        maxLines: labelLineCount,
        lineHeight
      });
    }
    layer.appendChild(label);

    const detailLines = [];
    if (item.medication.dosage) {
      detailLines.push(`Дозировка: ${item.medication.dosage}`);
    }
    if (item.medication.note) {
      detailLines.push(`Комментарий: ${item.medication.note}`);
    }
    let periodText;
    if (item.endDate) {
      const startText = item.startDate ? formatDisplayDate(item.startDate) : 'без указания';
      periodText = `Период: ${startText} – ${formatDisplayDate(item.endDate)}`;
    } else if (item.startDate) {
      periodText = `С ${formatDisplayDate(item.startDate)}`;
    } else {
      periodText = 'Период: не указан';
    }
    detailLines.push(periodText);

    const selectionKey = `support:${item.supportId}`;
    const detailPayload = {
      type: 'Терапия сопровождения',
      date: item.startDate,
      title: labelText,
      comment: detailLines.join('\n'),
      color: SUPPORT_OUTLINE_COLOR,
      isFlagged,
      deleteInfo: { type: 'support', id: item.supportId },
      fontTarget: { type: 'support', id: item.supportId }
    };

    const editInfo = { type: 'support', id: item.supportId };
    attachDetails(rect, detailPayload, rect, selectionKey, editInfo);
    attachDetails(label, detailPayload, rect, selectionKey, editInfo, {
      inlineEditor: {
        fieldNames: ['name', 'dosage', 'note'],
        preferredWidth: 260,
        focusField: 'name',
        compact: true
      },
      highlightInlineEditor: null
    });

    if (isFlagged) {
      rect.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(xStart + 6, finalY + rectHeight / 2, {
        anchor: 'start',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, rect, selectionKey, editInfo);
      }
    }

    const dragTargets = [rect, label];
    registerDraggable(dragTargets, {
      type: 'support',
      id: item.supportId,
      startDate: item.startDate,
      endDate: item.endDate || '',
      getOffset: () => {
        const entry = state.supportiveTherapy.find((support) => support.id === item.supportId);
        return entry ? parseOffsetValue(entry.chartOffsetY) : 0;
      },
      getOffsetBounds: () => bounds,
      applyOffset: (nextOffset) => applySupportOffsetOverride(item.supportId, nextOffset, bounds)
    });

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: xStart + width - handleSize,
      y: finalY + rectHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle support-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreviewHeight = (nextHeight) => {
      rect.setAttribute('height', nextHeight);
      handle.setAttribute('y', finalY + nextHeight - handleSize);
    };

    registerResizable(handle, {
      axis: 'y',
      getHeight: () => {
        const current = Number(rect.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : rectHeight;
      },
      getMinHeight: () => Math.max(naturalHeight, THERAPY_LEVEL_HEIGHT),
      getMaxHeight: () => {
        const minHeight = Math.max(naturalHeight, THERAPY_LEVEL_HEIGHT);
        const available = renderTrack.top + renderTrack.height - finalY - 6;
        return Math.max(minHeight, available);
      },
      onPreview: ({ height }) => {
        updatePreviewHeight(height);
      },
      onCancel: ({ height }) => {
        updatePreviewHeight(height);
      },
      onCommit: ({ height }) => applySupportHeightOverride(item.supportId, height, naturalHeight)
    });
  });
}

function renderEndoscopy(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;

  const effectiveMetrics = metrics || getEndoscopyMetrics();
  const items = effectiveMetrics.items || [];
  if (!items.length) return;

  const layout = effectiveMetrics.layout || measureEndoscopyLayout(items);
  const levelAssignments = layout.levelAssignments || new Map();
  const levelHeights = layout.levelHeights || [];
  if (!levelHeights.length) return;

  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = (levelHeights.length - 1) * ENDOSCOPY_ROW_SPACING;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + ENDOSCOPY_ROW_SPACING;
  });

  const globalFontScale = getCurrentFontScale();
  const fallbackLineHeight = ENDOSCOPY_LABEL_LINE_HEIGHT * globalFontScale;
  const fallbackPadding = (ENDOSCOPY_PADDING_Y / 2) * globalFontScale;

  items.forEach((item) => {
    const level = levelAssignments.get(item.id) ?? item.__level ?? 0;
    const y = levelOffsets[level] ?? startY;
    const xDate = getXPosition(item.date, dates);

    const measurement = layout.itemsById?.get(item.id) || {
      rectHeight: ENDOSCOPY_ITEM_HEIGHT,
      naturalHeight: ENDOSCOPY_ITEM_HEIGHT,
      minWidth: ENDOSCOPY_CARD_MIN_WIDTH,
      maxWidth: ENDOSCOPY_CARD_MAX_WIDTH,
      baseWidth: ENDOSCOPY_CARD_MIN_WIDTH,
      cardWidth: ENDOSCOPY_CARD_MIN_WIDTH,
      titleLines: wrapTextToLines('Эндоскопическая процедура', 28, Infinity),
      interventionsLines: [],
      complicationLines: [],
      titleText: 'Эндоскопическая процедура',
      interventionsText: '',
      complicationText: '',
      lineHeight: fallbackLineHeight,
      paddingTop: fallbackPadding,
      paddingBottom: fallbackPadding,
      sectionSpacing: 6 * globalFontScale,
      maxChars: 32,
      fontScale: globalFontScale * getChartFontScaleValue(item)
    };

    const itemFontScale = measurement.fontScale || globalFontScale * getChartFontScaleValue(item);
    const rectHeight = measurement.rectHeight || ENDOSCOPY_ITEM_HEIGHT;
    const naturalHeight = measurement.naturalHeight || rectHeight;
    const lineHeight = measurement.lineHeight || ENDOSCOPY_LABEL_LINE_HEIGHT * itemFontScale;
    const paddingTop = measurement.paddingTop ?? (ENDOSCOPY_PADDING_Y / 2) * itemFontScale;
    const paddingBottom = measurement.paddingBottom ?? (ENDOSCOPY_PADDING_Y / 2) * itemFontScale;
    const sectionSpacing = measurement.sectionSpacing ?? 6 * itemFontScale;

    const bounds = getTrackOffsetBounds(renderTrack, y, rectHeight);
    const storedOffset = getEndoscopyOffsetValue(item);
    const offsetY = clampOffsetToBounds(storedOffset, bounds);
    const finalY = y + offsetY;

    const maxCardWidth = Math.max(
      measurement.minWidth || ENDOSCOPY_CARD_MIN_WIDTH,
      Math.min(measurement.maxWidth || ENDOSCOPY_CARD_MAX_WIDTH, chartWidth - LEFT_MARGIN - RIGHT_MARGIN)
    );
    const cardWidth = clampCardWidth(
      measurement.cardWidth || estimateEndoscopyCardWidth(measurement, itemFontScale),
      measurement.minWidth || ENDOSCOPY_CARD_MIN_WIDTH,
      maxCardWidth
    );
    const centered = computeCenteredCardX(xDate, cardWidth, chartWidth);
    const rectX = centered.x;
    const cardCenter = centered.center;

    const circleY = Math.max(track.top + 12, finalY - 12);
    const connector = createSvgElement('line', {
      x1: xDate,
      y1: circleY + 6,
      x2: xDate,
      y2: finalY,
      class: 'endoscopy-date-connector'
    });
    layer.appendChild(connector);

    const dateMarker = createSvgElement('circle', {
      cx: xDate,
      cy: circleY,
      r: 6,
      class: 'endoscopy-date-marker'
    });
    layer.appendChild(dateMarker);

    const rect = createSvgElement('rect', {
      x: rectX,
      y: finalY,
      width: cardWidth,
      height: rectHeight,
      rx: 12,
      ry: 12,
      fill: getEndoscopyFillColor(),
      stroke: COLORS.endoscopy,
      'stroke-width': 1.5,
      class: 'endoscopy-card'
    });
    layer.appendChild(rect);

    let cursorLineY = finalY + paddingTop;

    const typeLabels = Array.isArray(item.procedures)
      ? item.procedures.map((procedure) => getEndoscopyTypeLabel(procedure.type)).filter(Boolean)
      : [];
    const titleText = typeLabels.length ? typeLabels.join(' • ') : 'Эндоскопическая процедура';
    const title = createSvgElement('text', {
      x: cardCenter,
      y: cursorLineY,
      class: 'endoscopy-title',
      'text-anchor': 'middle'
    });
    title.style.fontSize = `${12 * itemFontScale}px`;
    const titleLines =
      applyProvidedLines(title, measurement.titleLines || [], lineHeight) ||
      applyMultilineSvgText(title, titleText, { maxChars: 28, maxLines: 2, lineHeight });
    layer.appendChild(title);
    if (titleLines) {
      cursorLineY += titleLines * lineHeight + sectionSpacing;
    }

    const summary = summarizeEndoscopyProcedures(item.procedures);
    const interventionsText =
      measurement.interventionsText || getEndoscopyDisplaySummary(item, summary.summary);
    const detailSummary = measurement.fullSummary || summary.summary;
    let interventionsLabel = null;
    let interventionLines = 0;
    if (interventionsText) {
      interventionsLabel = createSvgElement('text', {
        x: cardCenter,
        y: cursorLineY,
        class: 'endoscopy-intervention',
        'text-anchor': 'middle'
      });
      interventionsLabel.style.fontSize = `${12 * itemFontScale}px`;
      interventionLines =
        applyProvidedLines(interventionsLabel, measurement.interventionsLines || [], lineHeight) ||
        applyMultilineSvgText(interventionsLabel, interventionsText, {
          maxChars: 32,
          maxLines: 2,
          lineHeight
        });
      layer.appendChild(interventionsLabel);
      if (interventionLines) {
        cursorLineY += interventionLines * lineHeight + sectionSpacing;
      }
    }

    const complicationText = formatEndoscopyComplications(summary.complications);
    const showComplicationsOnChart = Boolean(complicationText);
    let complicationLabel = null;
    if (showComplicationsOnChart) {
      const maxLines = cursorLineY + lineHeight * 2 <= finalY + rectHeight ? 2 : 1;
      const maxStart = finalY + rectHeight - lineHeight * maxLines - 4;
      const baseY = Math.min(cursorLineY, maxStart);
      complicationLabel = createSvgElement('text', {
        x: cardCenter,
        y: baseY,
        class: 'endoscopy-complication',
        'text-anchor': 'middle'
      });
      complicationLabel.style.fontSize = `${12 * itemFontScale}px`;
      const providedCount =
        applyProvidedLines(complicationLabel, measurement.complicationLines || [], lineHeight);
      if (!providedCount) {
        applyMultilineSvgText(complicationLabel, complicationText, {
          maxChars: 30,
          maxLines,
          lineHeight
        });
      }
      layer.appendChild(complicationLabel);
    }

    const detailCommentParts = [];
    if (item.comment) {
      detailCommentParts.push(item.comment);
    }
    if (summary.complications && summary.complications.length) {
      detailCommentParts.push(`Осложнения: ${formatEndoscopyComplications(summary.complications)}`);
    }

    const detailPayload = {
      type: 'Эндоскопическая процедура',
      date: item.date,
      time: item.time,
      title: detailSummary ? `${titleText} — ${detailSummary}` : titleText,
      comment: detailCommentParts.join('\n'),
      color: COLORS.endoscopy,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'endoscopy', id: item.id },
      fontTarget: { type: 'endoscopy', id: item.id }
    };

    const selectionKey = `endoscopy:${item.id}`;
    const editInfo = { type: 'endoscopy', id: item.id };

    attachDetails(rect, detailPayload, rect, selectionKey, editInfo);
    attachDetails(title, detailPayload, rect, selectionKey, editInfo);
    if (interventionsLabel) {
      attachDetails(interventionsLabel, detailPayload, rect, selectionKey, editInfo, {
        inlineEditor: false
      });
      enableChartLabelOverrideEditing(interventionsLabel, {
        getCurrentText: () => getEndoscopyDisplaySummary(item, summary.summary),
        onCommit: (text) => applyEndoscopySummaryOverride(item.id, text)
      });
    }
    if (complicationLabel) {
      attachDetails(complicationLabel, detailPayload, rect, selectionKey, editInfo);
    }
    attachDetails(dateMarker, detailPayload, rect, selectionKey, editInfo);
    attachDetails(connector, detailPayload, rect, selectionKey, editInfo);

    if (item.isFlagged) {
      rect.classList.add('is-flagged-shape');
      title.classList.add('is-flagged-text');
      if (interventionsLabel) {
        interventionsLabel.classList.add('is-flagged-text');
      }
      if (complicationLabel) {
        complicationLabel.classList.add('is-flagged-text');
      }
      dateMarker.classList.add('is-flagged-shape');
      connector.classList.add('is-flagged-line');
      const indicator = appendFlagIndicator(rectX + 12, finalY + 16, {
        anchor: 'start',
        baseline: 'hanging',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, rect, selectionKey, editInfo);
      }
    }

    const dragTargets = [rect, title, dateMarker];
    if (interventionsLabel) dragTargets.push(interventionsLabel);
    if (complicationLabel) dragTargets.push(complicationLabel);
    registerDraggable(dragTargets, {
      type: 'endoscopy',
      id: item.id,
      startDate: item.date,
      getOffset: () => {
        const entry = state.endoscopy.find((record) => record.id === item.id);
        return entry ? parseOffsetValue(entry.chartOffsetY) : 0;
      },
      getOffsetBounds: () => getTrackOffsetBounds(renderTrack, y, rectHeight),
      applyOffset: (nextOffset) =>
        applyEndoscopyOffsetOverride(
          item.id,
          nextOffset,
          getTrackOffsetBounds(renderTrack, y, rectHeight)
        )
    });

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: rectX + cardWidth - handleSize,
      y: finalY + rectHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle endoscopy-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreviewLayout = (nextWidth, nextHeight) => {
      const previewWidth = clampCardWidth(
        nextWidth,
        measurement.minWidth || ENDOSCOPY_CARD_MIN_WIDTH,
        maxCardWidth
      );
      const previewCenter = computeCenteredCardX(xDate, previewWidth, chartWidth);
      rect.setAttribute('width', previewWidth);
      rect.setAttribute('x', previewCenter.x);
      handle.setAttribute('x', previewCenter.x + previewWidth - handleSize);

      title.setAttribute('x', previewCenter.center);
      if (interventionsLabel) {
        interventionsLabel.setAttribute('x', previewCenter.center);
      }
      if (complicationLabel) {
        complicationLabel.setAttribute('x', previewCenter.center);
      }

      const previewMaxChars = estimateMaxCharsForWidth(previewWidth - ENDOSCOPY_PADDING_X * 2, itemFontScale);
      const previewTitleLines = wrapTextToLines(titleText, previewMaxChars, Infinity);
      const previewInterventionLines = wrapTextToLines(interventionsText, previewMaxChars, Infinity);
      const previewComplicationLines = wrapTextToLines(complicationText, previewMaxChars, Infinity);

      let previewContentHeight = paddingTop;
      if (previewTitleLines.length) {
        previewContentHeight += previewTitleLines.length * lineHeight;
        if (previewInterventionLines.length || previewComplicationLines.length) {
          previewContentHeight += sectionSpacing;
        }
      }
      if (previewInterventionLines.length) {
        previewContentHeight += previewInterventionLines.length * lineHeight;
        if (previewComplicationLines.length) {
          previewContentHeight += sectionSpacing;
        }
      }
      if (previewComplicationLines.length) {
        previewContentHeight += previewComplicationLines.length * lineHeight;
      }
      previewContentHeight += paddingBottom;
      const previewNaturalHeight = Math.max(ENDOSCOPY_ITEM_HEIGHT, previewContentHeight);
      const previewHeight = Math.max(nextHeight, previewNaturalHeight);

      rect.setAttribute('height', previewHeight);
      handle.setAttribute('y', finalY + previewHeight - handleSize);

      let previewCursorY = finalY + paddingTop;
      title.setAttribute('y', previewCursorY);
      const titleCount = applyProvidedLines(title, previewTitleLines, lineHeight);
      if (titleCount) {
        previewCursorY += titleCount * lineHeight + sectionSpacing;
      }

      if (interventionsLabel) {
        interventionsLabel.setAttribute('y', previewCursorY);
        const count =
          applyProvidedLines(interventionsLabel, previewInterventionLines, lineHeight) ||
          applyMultilineSvgText(interventionsLabel, interventionsText, {
            maxChars: previewMaxChars,
            maxLines: 2,
            lineHeight
          });
        if (count) {
          previewCursorY += count * lineHeight + sectionSpacing;
        }
      }

      if (complicationLabel) {
        const maxLines = previewCursorY + lineHeight * 2 <= finalY + previewHeight ? 2 : 1;
        const maxStart = finalY + previewHeight - lineHeight * maxLines - 4;
        const baseY = Math.min(previewCursorY, maxStart);
        complicationLabel.setAttribute('y', baseY);
        const count = applyProvidedLines(complicationLabel, previewComplicationLines, lineHeight);
        if (!count) {
          applyMultilineSvgText(complicationLabel, complicationText, {
            maxChars: previewMaxChars,
            maxLines,
            lineHeight
          });
        }
      }
    };

    registerResizable(handle, {
      axis: 'xy',
      centered: true,
      getWidth: () => {
        const current = Number(rect.getAttribute('width'));
        return Number.isFinite(current) && current > 0 ? current : cardWidth;
      },
      getHeight: () => {
        const current = Number(rect.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : rectHeight;
      },
      getMinWidth: () => measurement.minWidth || ENDOSCOPY_CARD_MIN_WIDTH,
      getMaxWidth: () => maxCardWidth,
      getMinHeight: () => Math.max(naturalHeight, ENDOSCOPY_ITEM_HEIGHT),
      getMaxHeight: () => {
        const minHeight = Math.max(naturalHeight, ENDOSCOPY_ITEM_HEIGHT);
        const available = renderTrack.top + renderTrack.height - finalY - 6;
        return Math.max(minHeight, available);
      },
      onPreview: ({ width, height }) => {
        updatePreviewLayout(width, height);
      },
      onCancel: ({ width, height }) => {
        updatePreviewLayout(width, height);
      },
      onCommit: ({ width, height }) =>
        applyCardSizeOverride(
          state.endoscopy.find((entry) => entry.id === item.id),
          width,
          height,
          measurement.baseWidth || cardWidth,
          naturalHeight
        )
    });
  });
}

function applyEventLabelOverride(eventId, newText) {
  if (!eventId) {
    return false;
  }
  const target = state.events.find((item) => item.id === eventId);
  if (!target) {
    return false;
  }
  const normalized = typeof newText === 'string' ? newText.trim() : '';
  const baseTitle = target.title || '';
  const baseNormalized = baseTitle.trim();
  const current = typeof target.chartLabelOverride === 'string' ? target.chartLabelOverride.trim() : '';
  const shouldRemove = !normalized || normalized === baseNormalized;
  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && normalized === current) {
    return false;
  }
  pushHistoryState();
  if (shouldRemove) {
    delete target.chartLabelOverride;
  } else {
    target.chartLabelOverride = normalized;
  }
  renderTimeline();
  return true;
}

function applyEventIconOffset(eventId, nextOffset, bounds = {}) {
  const target = state.events.find((item) => item.id === eventId);
  if (!target) return false;
  const clamped = clampOffsetPoint(nextOffset, bounds);
  const current = normalizeIconOffset(target.iconOffset || { x: 6, y: -12 });
  if (clamped.x === current.x && clamped.y === current.y) {
    return false;
  }
  target.iconOffset = clamped;
  return true;
}

function applyEndoscopySummaryOverride(entryId, newText) {
  if (!entryId) {
    return false;
  }
  const entry = state.endoscopy.find((item) => item.id === entryId);
  if (!entry) {
    return false;
  }
  const normalized = typeof newText === 'string' ? newText.trim() : '';
  const summary = summarizeEndoscopyProcedures(entry.procedures);
  const baseSummary = summary.summary || '';
  const baseNormalized = baseSummary.trim();
  const current = typeof entry.chartSummaryOverride === 'string' ? entry.chartSummaryOverride.trim() : '';
  const shouldRemove = !normalized || normalized === baseNormalized;
  if (shouldRemove && !current) {
    return false;
  }
  if (!shouldRemove && normalized === current) {
    return false;
  }
  pushHistoryState();
  if (shouldRemove) {
    delete entry.chartSummaryOverride;
  } else {
    entry.chartSummaryOverride = normalized;
  }
  renderTimeline();
  return true;
}

function renderSurgery(track, dates) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.surgery].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  if (!sorted.length) return;

  const centerY = renderTrack.top + renderTrack.height / 2;
  const markerRadius = 8;

  sorted.forEach((item) => {
    const x = getXPosition(item.date, dates);
    const fontScale = getEffectiveChartFontScale(item);
    const summary = buildSurgerySummary(item);
    const marker = createSvgElement('circle', {
      cx: x,
      cy: centerY,
      r: markerRadius,
      class: 'surgery-marker'
    });
    layer.appendChild(marker);

    const label = createSvgElement('text', {
      x: x + markerRadius + 8,
      y: centerY + 4,
      class: 'surgery-label'
    });
    label.textContent = getSurgeryDisplayLabel(item);
    label.style.fontSize = `${12 * fontScale}px`;
    layer.appendChild(label);

    const detail = {
      type: 'Хирургия',
      date: item.date,
      time: item.time,
      title: summary.label || getSurgeryDisplayLabel(item),
      comment: [...summary.commentLines, item.comment || ''].filter(Boolean).join(' • '),
      color: COLORS.surgery,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'surgery', id: item.id },
      fontTarget: { type: 'surgery', id: item.id }
    };

    const editInfo = { type: 'surgery', id: item.id, parameterId: item.parameterId || 'surgery_pleura' };
    attachDetails(marker, detail, marker, item.id, editInfo);
    attachDetails(label, detail, marker, item.id, editInfo, { inlineEditor: false });

    if (item.isFlagged) {
      marker.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(x - markerRadius - 8, centerY, {
        anchor: 'end',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detail, marker, item.id, editInfo);
      }
    }

    registerDraggable([marker, label], {
      type: 'surgery',
      id: item.id,
      startDate: item.date
    });
  });
}

function renderRadiology(track, dates) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.radiology].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  if (!sorted.length) return;

  const centerY = renderTrack.top + renderTrack.height / 2;
  const markerSize = 16;

  sorted.forEach((item) => {
    const x = getXPosition(item.date, dates);
    const fontScale = getEffectiveChartFontScale(item);
    const summary = buildRadiologySummary(item);
    const marker = createSvgElement('rect', {
      x: x - markerSize / 2,
      y: centerY - markerSize / 2,
      width: markerSize,
      height: markerSize,
      rx: 4,
      ry: 4,
      class: 'radiology-marker'
    });
    layer.appendChild(marker);

    const label = createSvgElement('text', {
      x: x + markerSize / 2 + 8,
      y: centerY + 4,
      class: 'radiology-label'
    });
    label.textContent = getRadiologyDisplayLabel(item);
    label.style.fontSize = `${12 * fontScale}px`;
    layer.appendChild(label);

    const detail = {
      type: 'Рентгенология',
      date: item.date,
      time: item.time,
      title: summary.label || getRadiologyDisplayLabel(item),
      comment: [...summary.commentLines, item.comment || ''].filter(Boolean).join(' • '),
      color: COLORS.radiology,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'radiology', id: item.id },
      fontTarget: { type: 'radiology', id: item.id }
    };

    const editInfo = { type: 'radiology', id: item.id, parameterId: item.parameterId || 'rad_cxr' };
    attachDetails(marker, detail, marker, item.id, editInfo);
    attachDetails(label, detail, marker, item.id, editInfo, { inlineEditor: false });

    if (item.isFlagged) {
      marker.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(x - markerSize - 6, centerY, {
        anchor: 'end',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detail, marker, item.id, editInfo);
      }
    }

    registerDraggable([marker, label], {
      type: 'radiology',
      id: item.id,
      startDate: item.date
    });
  });
}

function renderNeuro(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.neuro].sort((a, b) => parseDate(a.date) - parseDate(b.date));
  if (!sorted.length) return;

  const layout = metrics?.layout || { levelHeights: [], levelAssignments: new Map(), measurements: new Map() };
  const levelHeights = layout.levelHeights || [];
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = levelHeights.length ? (levelHeights.length - 1) * SINGLE_DATE_CARD_GAP : 0;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + SINGLE_DATE_CARD_GAP;
  });

  sorted.forEach((item) => {
    const x = getXPosition(item.date, dates);
    const fontScale = getEffectiveChartFontScale(item);
    const measurement = layout.measurements?.get(item.id);
    const baseLayout = measurement || buildSingleDateCardLayout(item.status, fontScale, {});
    const maxWidth = Math.max(
      baseLayout.baseWidth,
      Math.min(SINGLE_DATE_CARD_MAX_WIDTH, chartWidth - LEFT_MARGIN - RIGHT_MARGIN)
    );
    const cardWidth = clampCardWidth(baseLayout.width, baseLayout.baseWidth, maxWidth);
    const centered = computeCenteredCardX(x, cardWidth, chartWidth);
    const level = layout.levelAssignments?.get(item.id) ?? item.__level ?? 0;
    const cardHeight = Math.max(baseLayout.height, SINGLE_DATE_CARD_MIN_HEIGHT);
    const cardY = clampCardY(levelOffsets[level] ?? startY, renderTrack, cardHeight);
    const markerY = cardY + cardHeight + SINGLE_DATE_CARD_GAP;
    const marker = createSvgElement('circle', {
      cx: x,
      cy: markerY,
      r: 8,
      class: 'neuro-marker'
    });
    layer.appendChild(marker);

    const card = createSvgElement('rect', {
      x: centered.x,
      y: cardY,
      width: cardWidth,
      height: cardHeight,
      rx: 10,
      ry: 10,
      class: 'neuro-card'
    });
    layer.appendChild(card);

    const label = createSvgElement('text', {
      x: centered.center,
      y: cardY + baseLayout.paddingY,
      class: 'neuro-label',
      'text-anchor': 'middle',
      'dominant-baseline': 'hanging'
    });
    label.style.fontSize = `${12 * fontScale}px`;
    applyProvidedLines(label, baseLayout.lines, baseLayout.lineHeight);
    layer.appendChild(label);

    const editInfo = { type: 'neuro', id: item.id };
    const detailPayload = {
      type: 'Неврологический статус',
      date: item.date,
      time: item.time,
      title: item.status,
      comment: item.comment || '',
      color: COLORS.neuro,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'neuro', id: item.id },
      fontTarget: { type: 'neuro', id: item.id }
    };

    attachDetails(marker, detailPayload, marker, item.id, editInfo);
    attachDetails(card, detailPayload, marker, item.id, editInfo);
    attachDetails(label, detailPayload, marker, item.id, editInfo, {
      inlineEditor: {
        fieldNames: ['status', 'comment'],
        preferredWidth: 240,
        focusField: 'status',
        compact: true
      },
      highlightInlineEditor: null
    });

    if (item.isFlagged) {
      marker.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      card.classList.add('is-flagged-shape');
      const indicator = appendFlagIndicator(x - 12, markerY, {
        anchor: 'end',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, marker, item.id, editInfo);
      }
    }

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: centered.x + cardWidth - handleSize,
      y: cardY + cardHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle neuro-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreview = (nextWidth, nextHeight) => {
      const previewWidth = clampCardWidth(nextWidth, baseLayout.baseWidth, maxWidth);
      const previewMaxChars = estimateMaxCharsForWidth(previewWidth - baseLayout.paddingX * 2, fontScale);
      const previewLines = wrapTextToLines(item.status, previewMaxChars, Infinity);
      const previewNaturalHeight = Math.max(
        SINGLE_DATE_CARD_MIN_HEIGHT,
        previewLines.length * baseLayout.lineHeight + baseLayout.paddingY * 2
      );
      const previewHeight = Math.max(nextHeight, previewNaturalHeight);
      const previewCenter = computeCenteredCardX(x, previewWidth, chartWidth);

      card.setAttribute('x', previewCenter.x);
      card.setAttribute('width', previewWidth);
      card.setAttribute('height', previewHeight);
      label.setAttribute('x', previewCenter.center);
      label.setAttribute('y', cardY + baseLayout.paddingY);
      applyProvidedLines(label, previewLines, baseLayout.lineHeight);
      handle.setAttribute('x', previewCenter.x + previewWidth - handleSize);
      handle.setAttribute('y', cardY + previewHeight - handleSize);
    };

    registerResizable(handle, {
      axis: 'xy',
      centered: true,
      getWidth: () => {
        const current = Number(card.getAttribute('width'));
        return Number.isFinite(current) && current > 0 ? current : layout.width;
      },
      getHeight: () => {
        const current = Number(card.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : cardHeight;
      },
      getMinWidth: () => baseLayout.baseWidth,
      getMaxWidth: () => maxWidth,
      getMinHeight: () => baseLayout.naturalHeight,
      getMaxHeight: () => Math.max(baseLayout.naturalHeight, renderTrack.height - 12),
      onPreview: ({ width, height }) => updatePreview(width, height),
      onCancel: ({ width, height }) => updatePreview(width, height),
      onCommit: ({ width, height }) =>
        applyCardSizeOverride(
          state.neuro.find((entry) => entry.id === item.id),
          width,
          height,
          baseLayout.baseWidth,
          baseLayout.naturalHeight
        )
    });

    registerDraggable([marker, card, label], {
      type: 'neuro',
      id: item.id,
      startDate: item.date
    });
  });
}

function renderLiver(track, dates, chartWidth) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = stackIntervals(state.liver);
  if (!sorted.length) return;

  const levelHeight = 24;
  const rowSpacing = 12;
  const totalLevels = sorted.reduce((acc, item) => Math.max(acc, item.__level || 0), 0) + 1;
  const blockAreaHeight = totalLevels * levelHeight + (totalLevels - 1) * rowSpacing;
  const startY = renderTrack.top + (renderTrack.height - blockAreaHeight) / 2;

  sorted.forEach((item) => {
    const level = item.__level || 0;
    const y = startY + level * (levelHeight + rowSpacing);
    const xStart = getXPosition(item.startDate, dates);
    const xEnd = item.endDate
      ? getXPosition(item.endDate, dates)
      : Math.max(xStart + 80, getLastCoordinate(dates, chartWidth));
    const width = Math.max(40, xEnd - xStart);

    const rect = createSvgElement('rect', {
      x: xStart,
      y,
      width,
      height: levelHeight,
      class: 'liver-bar',
      rx: 6,
      ry: 6
    });
    layer.appendChild(rect);

    const fontScale = getEffectiveChartFontScale(item);
    const label = createSvgElement('text', {
      x: xStart + 6,
      y: y - 6,
      class: 'liver-label'
    });
    label.textContent = item.status;
    label.style.fontSize = `${12 * fontScale}px`;
    layer.appendChild(label);

    const comment = item.endDate
      ? `Период: ${formatDisplayDate(item.startDate)} – ${formatDisplayDate(item.endDate)}`
      : `С ${formatDisplayDate(item.startDate)}`;

    const editInfo = { type: 'liver', id: item.id };
    const detailPayload = {
      type: 'ЛПП',
      date: item.startDate,
      title: item.status,
      comment,
      color: COLORS.liver,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'liver', id: item.id },
      fontTarget: { type: 'liver', id: item.id }
    };

    attachDetails(rect, detailPayload, rect, item.id, editInfo);

    attachDetails(label, detailPayload, rect, item.id, editInfo, {
      inlineEditor: {
        fieldNames: ['status'],
        preferredWidth: 240,
        focusField: 'status',
        compact: true
      },
      highlightInlineEditor: null
    });

    if (item.isFlagged) {
      rect.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      const indicator = appendFlagIndicator(xStart - 6, y + levelHeight / 2, {
        anchor: 'end',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, rect, item.id, editInfo);
      }
    }

    registerDraggable([rect, label], {
      type: 'liver',
      id: item.id,
      startDate: item.startDate,
      endDate: item.endDate || ''
    });
  });
}

function renderLabDiagnostics(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.labDiagnostics].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  if (!sorted.length) return;

  const layout = metrics?.layout || { levelHeights: [], levelAssignments: new Map(), measurements: new Map() };
  const levelHeights = layout.levelHeights || [];
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = levelHeights.length ? (levelHeights.length - 1) * SINGLE_DATE_CARD_GAP : 0;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + SINGLE_DATE_CARD_GAP;
  });

  sorted.forEach((item) => {
    const x = getXPosition(item.date, dates);

    const fontScale = getEffectiveChartFontScale(item);
    const measurement = layout.measurements?.get(item.id);
    const baseLayout = measurement || buildSingleDateCardLayout(item.testType, fontScale, {});
    const maxWidth = Math.max(
      baseLayout.baseWidth,
      Math.min(SINGLE_DATE_CARD_MAX_WIDTH, chartWidth - LEFT_MARGIN - RIGHT_MARGIN)
    );
    const cardWidth = clampCardWidth(baseLayout.width, baseLayout.baseWidth, maxWidth);
    const centered = computeCenteredCardX(x, cardWidth, chartWidth);
    const level = layout.levelAssignments?.get(item.id) ?? item.__level ?? 0;
    const cardHeight = Math.max(baseLayout.height, SINGLE_DATE_CARD_MIN_HEIGHT);
    const cardY = clampCardY(levelOffsets[level] ?? startY, renderTrack, cardHeight);
    const markerY = cardY + cardHeight + SINGLE_DATE_CARD_GAP;
    const marker = createSvgElement('rect', {
      x: x - 9,
      y: markerY - 9,
      width: 18,
      height: 18,
      rx: 5,
      ry: 5,
      class: 'lab-marker'
    });
    layer.appendChild(marker);

    const card = createSvgElement('rect', {
      x: centered.x,
      y: cardY,
      width: cardWidth,
      height: cardHeight,
      rx: 10,
      ry: 10,
      class: 'lab-card'
    });
    layer.appendChild(card);

    const label = createSvgElement('text', {
      x: centered.center,
      y: cardY + baseLayout.paddingY,
      class: 'lab-label',
      'text-anchor': 'middle',
      'dominant-baseline': 'hanging'
    });
    label.style.fontSize = `${12 * fontScale}px`;
    applyProvidedLines(label, baseLayout.lines, baseLayout.lineHeight);
    layer.appendChild(label);

    const detail = {
      type: 'Лабораторная диагностика',
      date: item.date,
      time: item.time,
      title: item.testType,
      comment: item.result || '',
      color: COLORS.lab,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'lab', id: item.id },
      fontTarget: { type: 'lab', id: item.id }
    };

    const editInfo = { type: 'lab', id: item.id };
    attachDetails(marker, detail, marker, item.id, editInfo);
    attachDetails(card, detail, marker, item.id, editInfo);
    attachDetails(label, detail, marker, item.id, editInfo, {
      inlineEditor: {
        fieldNames: ['testType', 'result'],
        preferredWidth: 260,
        focusField: 'testType',
        compact: true
      },
      highlightInlineEditor: null
    });

    if (item.isFlagged) {
      marker.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      card.classList.add('is-flagged-shape');
      const indicator = appendFlagIndicator(x - 12, markerY, { anchor: 'end', container: layer });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detail, marker, item.id, editInfo);
      }
    }

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: centered.x + cardWidth - handleSize,
      y: cardY + cardHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle lab-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreview = (nextWidth, nextHeight) => {
      const previewWidth = clampCardWidth(nextWidth, baseLayout.baseWidth, maxWidth);
      const previewMaxChars = estimateMaxCharsForWidth(previewWidth - baseLayout.paddingX * 2, fontScale);
      const previewLines = wrapTextToLines(item.testType, previewMaxChars, Infinity);
      const previewNaturalHeight = Math.max(
        SINGLE_DATE_CARD_MIN_HEIGHT,
        previewLines.length * baseLayout.lineHeight + baseLayout.paddingY * 2
      );
      const previewHeight = Math.max(nextHeight, previewNaturalHeight);
      const previewCenter = computeCenteredCardX(x, previewWidth, chartWidth);

      card.setAttribute('x', previewCenter.x);
      card.setAttribute('width', previewWidth);
      card.setAttribute('height', previewHeight);
      label.setAttribute('x', previewCenter.center);
      label.setAttribute('y', cardY + baseLayout.paddingY);
      applyProvidedLines(label, previewLines, baseLayout.lineHeight);
      handle.setAttribute('x', previewCenter.x + previewWidth - handleSize);
      handle.setAttribute('y', cardY + previewHeight - handleSize);
    };

    registerResizable(handle, {
      axis: 'xy',
      centered: true,
      getWidth: () => {
        const current = Number(card.getAttribute('width'));
        return Number.isFinite(current) && current > 0 ? current : layout.width;
      },
      getHeight: () => {
        const current = Number(card.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : cardHeight;
      },
      getMinWidth: () => baseLayout.baseWidth,
      getMaxWidth: () => maxWidth,
      getMinHeight: () => baseLayout.naturalHeight,
      getMaxHeight: () => Math.max(baseLayout.naturalHeight, renderTrack.height - 12),
      onPreview: ({ width, height }) => updatePreview(width, height),
      onCancel: ({ width, height }) => updatePreview(width, height),
      onCommit: ({ width, height }) =>
        applyCardSizeOverride(
          state.labDiagnostics.find((entry) => entry.id === item.id),
          width,
          height,
          baseLayout.baseWidth,
          baseLayout.naturalHeight
        )
    });

    registerDraggable([marker, card, label], {
      type: 'lab',
      id: item.id,
      startDate: item.date
    });
  });
}

function renderEvents(track, dates, chartWidth, metrics) {
  const renderTrack = getTrackContentTrack(track);
  const layer = getTrackContentLayer(track);
  if (!renderTrack || !layer) return;
  const sorted = [...state.events].sort((a, b) => parseDateTime(a.date, a.time) - parseDateTime(b.date, b.time));
  if (!sorted.length) return;

  const markerSize = 10;
  const layout = metrics?.layout || { levelHeights: [], levelAssignments: new Map(), measurements: new Map() };
  const levelHeights = layout.levelHeights || [];
  const blockHeight = levelHeights.reduce((total, height) => total + height, 0);
  const spacing = levelHeights.length ? (levelHeights.length - 1) * SINGLE_DATE_CARD_GAP : 0;
  const startY = renderTrack.top + Math.max((renderTrack.height - (blockHeight + spacing)) / 2, 12);

  const levelOffsets = [];
  let cursorY = startY;
  levelHeights.forEach((height, level) => {
    levelOffsets[level] = cursorY;
    cursorY += height + SINGLE_DATE_CARD_GAP;
  });

  sorted.forEach((item) => {
    const x = getXPosition(item.date, dates);
    const itemFontScale = getEffectiveChartFontScale(item);
    const labelText = getEventDisplayLabel(item);
    const measurement = layout.measurements?.get(item.id);
    const baseLayout = measurement || buildSingleDateCardLayout(labelText, itemFontScale, {});
    const maxWidth = Math.max(
      baseLayout.baseWidth,
      Math.min(SINGLE_DATE_CARD_MAX_WIDTH, chartWidth - LEFT_MARGIN - RIGHT_MARGIN)
    );
    const cardWidth = clampCardWidth(baseLayout.width, baseLayout.baseWidth, maxWidth);
    const centered = computeCenteredCardX(x, cardWidth, chartWidth);
    const level = layout.levelAssignments?.get(item.id) ?? item.__level ?? 0;
    const cardHeight = Math.max(baseLayout.height, SINGLE_DATE_CARD_MIN_HEIGHT);
    const cardY = clampCardY(levelOffsets[level] ?? startY, renderTrack, cardHeight);
    const markerY = cardY + cardHeight + SINGLE_DATE_CARD_GAP;
    const path = createSvgElement('path', {
      d: `M ${x} ${markerY - markerSize} L ${x + markerSize} ${markerY} L ${x} ${markerY + markerSize} L ${x - markerSize} ${markerY} Z`,
      class: 'event-marker'
    });
    layer.appendChild(path);

    const card = createSvgElement('rect', {
      x: centered.x,
      y: cardY,
      width: cardWidth,
      height: cardHeight,
      rx: 10,
      ry: 10,
      class: 'event-card'
    });
    layer.appendChild(card);

    const label = createSvgElement('text', {
      x: centered.center,
      y: cardY + baseLayout.paddingY,
      class: 'event-label',
      'text-anchor': 'middle',
      'dominant-baseline': 'hanging'
    });
    label.style.fontSize = `${12 * itemFontScale}px`;
    applyProvidedLines(label, baseLayout.lines, baseLayout.lineHeight);
    layer.appendChild(label);

    const detailPayload = {
      type: 'Событие/диагноз',
      date: item.date,
      time: item.time,
      title: getEventBaseLabel(item),
      comment: item.comment || '',
      color: COLORS.event,
      isFlagged: Boolean(item.isFlagged),
      deleteInfo: { type: 'event', id: item.id },
      fontTarget: { type: 'event', id: item.id },
      iconContext: { id: item.id, iconKey: item.iconKey || '' }
    };

    const editInfo = { type: 'event', id: item.id };
    attachDetails(path, detailPayload, path, item.id, editInfo);
    attachDetails(card, detailPayload, path, item.id, editInfo);
    attachDetails(label, detailPayload, path, item.id, editInfo, { inlineEditor: false });

    enableChartLabelOverrideEditing(label, {
      getCurrentText: () => getEventDisplayLabel(item),
      onCommit: (text) => applyEventLabelOverride(item.id, text),
      multiline: false
    });

    if (item.isFlagged) {
      path.classList.add('is-flagged-shape');
      label.classList.add('is-flagged-text');
      card.classList.add('is-flagged-shape');
      const indicator = appendFlagIndicator(x - markerSize - 6, markerY, {
        anchor: 'end',
        container: layer
      });
      if (indicator) {
        indicator.classList.add('is-flagged-text');
        attachDetails(indicator, detailPayload, path, item.id, editInfo);
      }
    }

    const iconDef = findEventIcon(item.iconKey);
    if (iconDef) {
      const offset = normalizeIconOffset(item.iconOffset || { x: 6, y: -12 });
      const icon = createSvgElement('text', {
        x: x + markerSize + 6 + offset.x,
        y: markerY - markerSize - 6 + offset.y,
        class: 'event-icon'
      });
      icon.textContent = iconDef.glyph || '•';
      icon.style.fontSize = `${14 * itemFontScale}px`;
      layer.appendChild(icon);
      attachDetails(icon, detailPayload, path, `${item.id}-icon`, editInfo, { inlineEditor: false });
      registerDraggable([icon], {
        type: 'eventIcon',
        id: item.id,
        startDate: item.date,
        getOffset: () => normalizeIconOffset(item.iconOffset || { x: 6, y: -12 }),
        getOffsetBounds: () => ({ minX: -120, maxX: 140, minY: -80, maxY: 80 }),
        applyOffset: (nextOffset) => applyEventIconOffset(item.id, nextOffset, { minX: -120, maxX: 140, minY: -80, maxY: 80 })
      });
      icon.addEventListener('click', (ev) => {
        ev.stopPropagation();
        showIconActionMenu(icon, item.id);
      });
    }

    const handleSize = RESIZE_HANDLE_SIZE;
    const handle = createSvgElement('rect', {
      x: centered.x + cardWidth - handleSize,
      y: cardY + cardHeight - handleSize,
      width: handleSize,
      height: handleSize,
      rx: 3,
      ry: 3,
      class: 'resize-handle event-resize-handle'
    });
    layer.appendChild(handle);

    const updatePreview = (nextWidth, nextHeight) => {
      const previewWidth = clampCardWidth(nextWidth, baseLayout.baseWidth, maxWidth);
      const previewMaxChars = estimateMaxCharsForWidth(previewWidth - baseLayout.paddingX * 2, itemFontScale);
      const previewLines = wrapTextToLines(labelText, previewMaxChars, Infinity);
      const previewNaturalHeight = Math.max(
        SINGLE_DATE_CARD_MIN_HEIGHT,
        previewLines.length * baseLayout.lineHeight + baseLayout.paddingY * 2
      );
      const previewHeight = Math.max(nextHeight, previewNaturalHeight);
      const previewCenter = computeCenteredCardX(x, previewWidth, chartWidth);

      card.setAttribute('x', previewCenter.x);
      card.setAttribute('width', previewWidth);
      card.setAttribute('height', previewHeight);
      label.setAttribute('x', previewCenter.center);
      label.setAttribute('y', cardY + baseLayout.paddingY);
      applyProvidedLines(label, previewLines, baseLayout.lineHeight);
      handle.setAttribute('x', previewCenter.x + previewWidth - handleSize);
      handle.setAttribute('y', cardY + previewHeight - handleSize);
    };

    registerResizable(handle, {
      axis: 'xy',
      centered: true,
      getWidth: () => {
        const current = Number(card.getAttribute('width'));
        return Number.isFinite(current) && current > 0 ? current : layout.width;
      },
      getHeight: () => {
        const current = Number(card.getAttribute('height'));
        return Number.isFinite(current) && current > 0 ? current : cardHeight;
      },
      getMinWidth: () => baseLayout.baseWidth,
      getMaxWidth: () => maxWidth,
      getMinHeight: () => baseLayout.naturalHeight,
      getMaxHeight: () => Math.max(baseLayout.naturalHeight, renderTrack.height - 12),
      onPreview: ({ width, height }) => updatePreview(width, height),
      onCancel: ({ width, height }) => updatePreview(width, height),
      onCommit: ({ width, height }) =>
        applyCardSizeOverride(
          state.events.find((entry) => entry.id === item.id),
          width,
          height,
          baseLayout.baseWidth,
          baseLayout.naturalHeight
        )
    });

    registerDraggable([path, card, label], {
      type: 'event',
      id: item.id,
      startDate: item.date
    });
  });
}

function legendItemHasData(key) {
  if (!isTrackVisible(key)) {
    return false;
  }
  switch (key) {
    case 'temperature':
      return state.temps.length > 0;
    case 'therapy':
      return state.therapy.some((course) => Array.isArray(course.medications) && course.medications.length > 0);
    case 'support':
      return state.supportiveTherapy.length > 0;
    case 'endoscopy':
      return state.endoscopy.length > 0;
    case 'neuro':
      return state.neuro.length > 0;
    case 'liver':
      return state.liver.length > 0;
    case 'lab':
      return state.labDiagnostics.length > 0;
    case 'surgery':
      return state.surgery.length > 0;
    case 'radiology':
      return state.radiology.length > 0;
    case 'event':
      return state.events.length > 0;
    default:
      return true;
  }
}

function estimateLegendRows(chartWidth, visibleTrackKeys = []) {
  const scale = getCurrentFontScale();
  const visibleSet = new Set(visibleTrackKeys);
  const relevantItems = LEGEND_ITEMS.filter((item) => {
    if (!legendItemHasData(item.key)) {
      return false;
    }
    if (visibleSet.size && !visibleSet.has(item.key)) {
      return false;
    }
    return true;
  });

  const therapyNames = visibleSet.has('therapy') ? getUsedTherapyMedicationNames() : [];
  const supportNames = visibleSet.has('support') ? getUsedSupportiveMedicationNames() : [];

  if (!relevantItems.length && !therapyNames.length && !supportNames.length) {
    return 0;
  }

  const maxWidth = Math.max(chartWidth - RIGHT_MARGIN, LEFT_MARGIN + 320);
  const iconWidth = 20;
  const gap = 28 * scale;
  const charWidth = 7 * scale;

  let rows = 0;
  let cursorX = LEFT_MARGIN;

  const startNewRow = () => {
    rows += 1;
    cursorX = LEFT_MARGIN;
  };

  const ensureRow = (width) => {
    if (rows === 0) {
      startNewRow();
    } else if (cursorX !== LEFT_MARGIN && cursorX + width > maxWidth) {
      startNewRow();
    }
  };

  const place = (width, trailingGap = gap) => {
    if (width <= 0) {
      return;
    }
    ensureRow(width);
    cursorX += width;
    if (trailingGap > 0) {
      cursorX += trailingGap;
    }
  };

  relevantItems.forEach((item) => {
    const labelWidth = (item.label || '').length * charWidth;
    place(iconWidth + 8 + labelWidth);
  });

  if (therapyNames.length) {
    startNewRow();
    const headerText = 'Лекарственная терапия:';
    const headerWidth = headerText.length * charWidth;
    place(headerWidth, 16 * scale);
    therapyNames.forEach((name) => {
      const labelWidth = name.length * charWidth;
      place(18 + 8 + labelWidth);
    });
  }

  if (supportNames.length) {
    startNewRow();
    const headerText = 'Терапия сопровождения:';
    const headerWidth = headerText.length * charWidth;
    place(headerWidth, 16 * scale);
    supportNames.forEach((name) => {
      const labelWidth = name.length * charWidth;
      place(18 + 8 + labelWidth);
    });
  }

  return rows;
}

function calculateBottomMargin(chartWidth, visibleTrackKeys = []) {
  const scale = getCurrentFontScale();
  const rows = estimateLegendRows(chartWidth, visibleTrackKeys);
  const baseMargin = BOTTOM_MARGIN;
  if (!rows) {
    return baseMargin;
  }
  const legendHeight = BASE_LEGEND_TOP_OFFSET * scale + rows * (BASE_LEGEND_ROW_HEIGHT * scale);
  return Math.max(baseMargin, legendHeight + BASE_LEGEND_EXTRA_GAP * scale);
}

function renderLegend(chartWidth, chartHeight, bottomMargin, visibleTrackKeys = []) {
  const existing = timelineSvg.querySelector('.legend-group');
  if (existing) {
    existing.remove();
  }

  const legendGroup = createSvgElement('g', { class: 'legend-group' });
  timelineSvg.appendChild(legendGroup);

  const scale = getCurrentFontScale();
  const iconWidth = 20;
  const gap = 28 * scale;
  const charWidth = 7 * scale;
  let cursorX = LEFT_MARGIN;
  let cursorY = chartHeight - bottomMargin + BASE_LEGEND_TOP_OFFSET * scale;
  const maxWidth = chartWidth - RIGHT_MARGIN;
  const rowHeight = BASE_LEGEND_ROW_HEIGHT * scale;

  const ensureSpace = (expectedWidth) => {
    if (cursorX + expectedWidth > maxWidth) {
      cursorX = LEFT_MARGIN;
      cursorY += rowHeight;
    }
  };

  const visibleSet = new Set(visibleTrackKeys);

  LEGEND_ITEMS.forEach((item) => {
    if (visibleSet.size && !visibleSet.has(item.key)) {
      return;
    }
    if (!legendItemHasData(item.key)) {
      return;
    }
    const estimatedWidth = iconWidth + 8 + item.label.length * charWidth + gap;
    ensureSpace(estimatedWidth);

    switch (item.key) {
      case 'temperature': {
        legendGroup.appendChild(createSvgElement('line', {
          x1: cursorX,
          y1: cursorY,
          x2: cursorX + iconWidth,
          y2: cursorY,
          stroke: COLORS.accent,
          'stroke-width': 3,
          'stroke-linecap': 'round'
        }));
        legendGroup.appendChild(createSvgElement('circle', {
          cx: cursorX + iconWidth / 2,
          cy: cursorY,
          r: 4.5,
          fill: '#ffffff',
          stroke: COLORS.accent,
          'stroke-width': 2
        }));
        break;
      }
      case 'therapy': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX,
          y: cursorY - 6,
          width: iconWidth,
          height: 12,
          rx: 4,
          ry: 4,
          fill: createPastelColor(COLORS.therapy)
        }));
        break;
      }
      case 'support': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX,
          y: cursorY - 6,
          width: iconWidth,
          height: 12,
          rx: 4,
          ry: 4,
          fill: SUPPORT_FILL_COLOR,
          stroke: SUPPORT_OUTLINE_COLOR,
          'stroke-width': 1.5
        }));
        break;
      }
      case 'endoscopy': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX,
          y: cursorY - 6,
          width: iconWidth,
          height: 12,
          rx: 6,
          ry: 6,
          fill: getEndoscopyFillColor(),
          stroke: COLORS.endoscopy,
          'stroke-width': 1.5
        }));
        break;
      }
      case 'surgery': {
        legendGroup.appendChild(createSvgElement('circle', {
          cx: cursorX + iconWidth / 2,
          cy: cursorY,
          r: 6,
          fill: COLORS.surgery
        }));
        break;
      }
      case 'radiology': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX + 2,
          y: cursorY - 8,
          width: iconWidth - 4,
          height: 16,
          rx: 4,
          ry: 4,
          fill: COLORS.radiology
        }));
        break;
      }
      case 'neuro': {
        legendGroup.appendChild(createSvgElement('circle', {
          cx: cursorX + iconWidth / 2,
          cy: cursorY,
          r: 6,
          fill: COLORS.neuro
        }));
        break;
      }
      case 'liver': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX,
          y: cursorY - 6,
          width: iconWidth,
          height: 12,
          rx: 4,
          ry: 4,
          fill: COLORS.liver
        }));
        break;
      }
      case 'lab': {
        legendGroup.appendChild(createSvgElement('rect', {
          x: cursorX,
          y: cursorY - 9,
          width: 18,
          height: 18,
          rx: 5,
          ry: 5,
          fill: COLORS.lab
        }));
        legendGroup.appendChild(createSvgElement('line', {
          x1: cursorX + 5,
          y1: cursorY,
          x2: cursorX + 13,
          y2: cursorY,
          stroke: '#ffffff',
          'stroke-width': 2
        }));
        legendGroup.appendChild(createSvgElement('line', {
          x1: cursorX + 9,
          y1: cursorY - 4,
          x2: cursorX + 9,
          y2: cursorY + 4,
          stroke: '#ffffff',
          'stroke-width': 2
        }));
        break;
      }
      case 'event': {
        legendGroup.appendChild(createSvgElement('path', {
          d: `M ${cursorX + iconWidth / 2} ${cursorY - 7} L ${cursorX + iconWidth} ${cursorY} L ${cursorX + iconWidth / 2} ${cursorY + 7} L ${cursorX} ${cursorY} Z`,
          fill: COLORS.event
        }));
        break;
      }
      default:
        break;
    }

    const label = createSvgElement('text', {
      x: cursorX + iconWidth + 8,
      y: cursorY,
      class: 'legend-label',
      'dominant-baseline': 'middle'
    });
    label.textContent = item.label;
    legendGroup.appendChild(label);

    const labelWidth = typeof label.getComputedTextLength === 'function'
      ? label.getComputedTextLength()
      : label.textContent.length * charWidth;
    cursorX += iconWidth + 8 + labelWidth + gap;
  });

  const therapyNames = visibleSet.has('therapy') ? getUsedTherapyMedicationNames() : [];
  if (therapyNames.length) {
    cursorX = LEFT_MARGIN;
    cursorY += rowHeight;

    const header = createSvgElement('text', {
      x: cursorX,
      y: cursorY,
      class: 'legend-label',
      'font-weight': '600',
      'dominant-baseline': 'middle'
    });
    header.textContent = 'Лекарственная терапия:';
    legendGroup.appendChild(header);
    const headerWidth = typeof header.getComputedTextLength === 'function'
      ? header.getComputedTextLength()
      : header.textContent.length * charWidth;
    cursorX += headerWidth + 16;

    therapyNames.forEach((name) => {
      const color = getTherapyColor(name);
      const swatchWidth = 18;
      const estimatedWidth = swatchWidth + 8 + name.length * charWidth + gap;
      ensureSpace(estimatedWidth);

      const swatch = createSvgElement('rect', {
        x: cursorX,
        y: cursorY - 8,
        width: swatchWidth,
        height: 16,
        rx: 4,
        ry: 4,
        fill: color
      });
      legendGroup.appendChild(swatch);

      const label = createSvgElement('text', {
        x: cursorX + swatchWidth + 8,
        y: cursorY,
        class: 'legend-label',
        'dominant-baseline': 'middle'
      });
      label.textContent = name;
      legendGroup.appendChild(label);

      const labelWidth = typeof label.getComputedTextLength === 'function'
        ? label.getComputedTextLength()
        : label.textContent.length * charWidth;
      cursorX += swatchWidth + 8 + labelWidth + gap;
    });
  }

  const supportNames = visibleSet.has('support') ? getUsedSupportiveMedicationNames() : [];
  if (supportNames.length) {
    cursorX = LEFT_MARGIN;
    cursorY += rowHeight;

    const header = createSvgElement('text', {
      x: cursorX,
      y: cursorY,
      class: 'legend-label',
      'font-weight': '600',
      'dominant-baseline': 'middle'
    });
    header.textContent = 'Терапия сопровождения:';
    legendGroup.appendChild(header);
    const headerWidth = typeof header.getComputedTextLength === 'function'
      ? header.getComputedTextLength()
      : header.textContent.length * charWidth;
    cursorX += headerWidth + 16;

    supportNames.forEach((name) => {
      const color = SUPPORT_FILL_COLOR;
      const swatchWidth = 18;
      const estimatedWidth = swatchWidth + 8 + name.length * charWidth + gap;
      ensureSpace(estimatedWidth);

      const swatch = createSvgElement('rect', {
        x: cursorX,
        y: cursorY - 8,
        width: swatchWidth,
        height: 16,
        rx: 4,
        ry: 4,
        fill: color,
        stroke: SUPPORT_OUTLINE_COLOR,
        'stroke-width': 1.2
      });
      legendGroup.appendChild(swatch);

      const label = createSvgElement('text', {
        x: cursorX + swatchWidth + 8,
        y: cursorY,
        class: 'legend-label',
        'dominant-baseline': 'middle'
      });
      label.textContent = name;
      legendGroup.appendChild(label);

      const labelWidth = typeof label.getComputedTextLength === 'function'
        ? label.getComputedTextLength()
        : label.textContent.length * charWidth;
      cursorX += swatchWidth + 8 + labelWidth + gap;
    });
  }
}

function createSvgElement(tag, attrs = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });
  return element;
}

function appendFlagIndicator(x, y, options = {}) {
  const container = options.container || timelineSvg;
  if (!container) {
    return null;
  }
  const anchor = options.anchor || 'start';
  const baseline = options.baseline || 'middle';
  const indicator = createSvgElement('text', {
    x,
    y,
    class: 'flag-indicator',
    'text-anchor': anchor,
    'dominant-baseline': baseline
  });
  indicator.textContent = '!';
  container.appendChild(indicator);
  return indicator;
}

function escapeCsvValue(value) {
  if (value === null || value === undefined) {
    return '';
  }
  const stringValue = String(value);
  if (stringValue.length === 0) {
    return '';
  }
  if (
    stringValue.includes('"') ||
    stringValue.includes(CSV_DELIMITER) ||
    /[\r\n]/.test(stringValue)
  ) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function formatWeekdaysForExport(weekdays) {
  if (!Array.isArray(weekdays) || !weekdays.length) {
    return '';
  }
  return weekdays.join(',');
}

function booleanToCsv(flag) {
  return flag ? 'Да' : 'Нет';
}

function formatFrequencyUnitForExport(unit) {
  switch (unit) {
    case 'perDay':
      return 'раз в день';
    case 'perWeek':
      return 'раз в неделю';
    default:
      return unit || '';
  }
}

function formatTypeForExport(type) {
  return EXPORT_TYPE_LABELS[type] || type || '';
}

function getExportRowTimestamp(row) {
  if (!row) {
    return null;
  }
  const type = row.type;
  if (type === 'temperature' || type === 'neuro' || type === 'lab' || type === 'event' || type === 'surgery' || type === 'radiology') {
    const dateTime = parseDateTime(row.date, row.time);
    if (dateTime) {
      return dateTime.getTime();
    }
    const date = parseDate(row.date);
    if (date) {
      return date.getTime();
    }
  }
  if (row.startDate) {
    const start = parseDate(row.startDate);
    if (start) {
      return start.getTime();
    }
  }
  if (row.courseStartDate) {
    const courseStart = parseDate(row.courseStartDate);
    if (courseStart) {
      return courseStart.getTime();
    }
  }
  if (row.endDate) {
    const end = parseDate(row.endDate);
    if (end) {
      return end.getTime();
    }
  }
  if (row.courseEndDate) {
    const courseEnd = parseDate(row.courseEndDate);
    if (courseEnd) {
      return courseEnd.getTime();
    }
  }
  return null;
}

function compareExportRows(a, b) {
  const orderA = EXPORT_TYPE_ORDER.has(a.type) ? EXPORT_TYPE_ORDER.get(a.type) : Number.MAX_SAFE_INTEGER;
  const orderB = EXPORT_TYPE_ORDER.has(b.type) ? EXPORT_TYPE_ORDER.get(b.type) : Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) {
    return orderA - orderB;
  }

  const timeA = getExportRowTimestamp(a);
  const timeB = getExportRowTimestamp(b);
  const hasTimeA = timeA !== null && Number.isFinite(timeA);
  const hasTimeB = timeB !== null && Number.isFinite(timeB);

  if (hasTimeA && hasTimeB && timeA !== timeB) {
    return timeA - timeB;
  }
  if (hasTimeA && !hasTimeB) {
    return -1;
  }
  if (!hasTimeA && hasTimeB) {
    return 1;
  }

  const labelA = (a.medicationName || a.title || a.status || a.testType || '').toLowerCase();
  const labelB = (b.medicationName || b.title || b.status || b.testType || '').toLowerCase();
  if (labelA && labelB && labelA !== labelB) {
    return labelA.localeCompare(labelB, 'ru');
  }
  return 0;
}

function buildExportMetadataRow() {
  const metadata = {
    version: DATA_EXPORT_VERSION,
    trackVisibility: Array.from(trackVisibility.entries()),
    parameterType: parameterSelect ? parameterSelect.value : '',
    layout: state.layout ? normalizeLayoutState(state.layout) : null,
    generatedAt: new Date().toISOString()
  };

  return {
    type: '__meta__',
    id: '',
    parentId: '',
    date: '',
    time: '',
    startDate: '',
    endDate: '',
    value: DATA_EXPORT_VERSION,
    title: '',
    status: '',
    comment: JSON.stringify(metadata),
    testType: '',
    result: '',
    manipulationType: '',
    interventions: '',
    complications: '',
    medicationName: '',
    dosage: '',
    note: '',
    frequencyCount: '',
    frequencyUnit: '',
    weekdays: '',
    courseComment: '',
    courseStartDate: '',
    courseEndDate: '',
    chartLabelOverride: '',
    chartSummaryOverride: '',
    chartHeightOverride: '',
    chartWidthOverride: '',
    chartOffsetY: '',
    chartFontScale: '',
    flagged: '',
    enabled: 'Да'
  };
}

function buildExportRows() {
  const rows = [];

  state.temps.forEach((item) => {
    rows.push({
      type: 'temperature',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: item.value !== undefined ? item.value : '',
      title: '',
      status: '',
      comment: item.comment || '',
      testType: '',
      result: '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: item.chartWidthOverride || '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.neuro.forEach((item) => {
    rows.push({
      type: 'neuro',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: '',
      startDate: '',
      endDate: '',
      value: '',
      title: '',
      status: item.status || '',
      comment: item.comment || '',
      testType: '',
      result: '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: item.chartWidthOverride || '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.liver.forEach((item) => {
    rows.push({
      type: 'liver',
      id: item.id || '',
      parentId: '',
      date: '',
      time: '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      value: '',
      title: '',
      status: item.status || '',
      comment: '',
      testType: '',
      result: '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.labDiagnostics.forEach((item) => {
    rows.push({
      type: 'lab',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: '',
      title: '',
      status: '',
      comment: item.result || '',
      testType: item.testType || '',
      result: item.result || '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: item.chartWidthOverride || '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.surgery.forEach((item) => {
    rows.push({
      type: 'surgery',
      parameterId: item.parameterId || '',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: '',
      title: '',
      status: '',
      comment: item.comment || '',
      testType: '',
      result: '',
      manipulationType: '',
      interventions: '',
      complications: Array.isArray(item.complications) ? item.complications.join(LIST_DELIMITER) : '',
      procedureType: item.procedureType || '',
      side: item.side || '',
      lobeSegments: item.lobeSegments || '',
      access: item.access || '',
      indication: item.indication || '',
      indicationOther: item.indicationOther || '',
      complicationOther: item.complicationOther || '',
      volumeEvacuated: item.volumeEvacuated || '',
      drainageType: item.drainageType || '',
      localization: item.localization || '',
      goal: item.goal || '',
      stagesCount: item.stagesCount || '',
      projection: '',
      conclusion: '',
      dynamics: '',
      contrast: '',
      cavitySizeMm: '',
      infiltration: '',
      dissemination: '',
      pleuralEffusion: '',
      pleuralEffusionVolume: '',
      findingSourceBleed: '',
      recommendation: '',
      area: '',
      effusion: '',
      effusionVolume: '',
      septations: '',
      hyperfixationSummary: '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartLabelOverride: item.chartLabelOverride || '',
      chartSummaryOverride: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.radiology.forEach((item) => {
    rows.push({
      type: 'radiology',
      parameterId: item.parameterId || '',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: '',
      title: '',
      status: '',
      comment: item.comment || '',
      testType: '',
      result: '',
      manipulationType: '',
      interventions: '',
      complications: '',
      procedureType: '',
      side: '',
      lobeSegments: '',
      access: '',
      indication: '',
      indicationOther: '',
      complicationOther: '',
      volumeEvacuated: '',
      drainageType: '',
      localization: '',
      goal: '',
      stagesCount: '',
      projection: item.projection || '',
      conclusion: item.conclusion || '',
      dynamics: item.dynamics || '',
      contrast: item.contrast || '',
      cavitySizeMm: item.cavitySizeMm || '',
      infiltration: item.infiltration || '',
      dissemination: item.dissemination || '',
      pleuralEffusion: item.pleuralEffusion || '',
      pleuralEffusionVolume: item.pleuralEffusionVolume || '',
      findingSourceBleed: item.findingSourceBleed || '',
      recommendation: item.recommendation || '',
      area: item.area || '',
      effusion: item.effusion || '',
      effusionVolume: item.effusionVolume || '',
      septations: item.septations || '',
      hyperfixationSummary: item.hyperfixationSummary || '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartLabelOverride: item.chartLabelOverride || '',
      chartSummaryOverride: '',
      chartHeightOverride: '',
      chartWidthOverride: '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.events.forEach((item) => {
    rows.push({
      type: 'event',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: '',
      title: item.title || '',
      status: '',
      comment: item.comment || '',
      testType: '',
      result: '',
      medicationName: '',
      dosage: '',
      note: '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartLabelOverride: item.chartLabelOverride || '',
      chartSummaryOverride: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: item.chartWidthOverride || '',
      chartOffsetY: '',
      chartFontScale: item.chartFontScale || '',
      iconKey: item.iconKey || '',
      iconOffsetX:
        item.iconOffset && Number.isFinite(item.iconOffset.x) ? item.iconOffset.x : '',
      iconOffsetY:
        item.iconOffset && Number.isFinite(item.iconOffset.y) ? item.iconOffset.y : '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.supportiveTherapy.forEach((item) => {
    rows.push({
      type: 'support',
      id: item.id || '',
      parentId: '',
      date: '',
      time: '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      value: '',
      title: '',
      status: '',
      comment: item.note || '',
      testType: '',
      result: '',
      medicationName: item.name || '',
      dosage: item.dosage || '',
      note: item.note || '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: '',
      chartOffsetY: item.chartOffsetY !== undefined ? item.chartOffsetY : '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.endoscopy.forEach((item) => {
    const exportProcedures = formatEndoscopyProceduresForExport(item.procedures);
    rows.push({
      type: 'endoscopy',
      id: item.id || '',
      parentId: '',
      date: item.date || '',
      time: item.time || '',
      startDate: '',
      endDate: '',
      value: '',
      title: '',
      status: '',
      comment: item.comment || '',
      testType: '',
      result: '',
      manipulationType: exportProcedures.typeLabelList,
      interventions: exportProcedures.actionList,
      complications: exportProcedures.complicationList,
      medicationName: '',
      dosage: '',
      note: item.comment || '',
      frequencyCount: '',
      frequencyUnit: '',
      weekdays: '',
      courseComment: '',
      courseStartDate: '',
      courseEndDate: '',
      chartLabelOverride: '',
      chartSummaryOverride: item.chartSummaryOverride || '',
      chartHeightOverride: item.chartHeightOverride || '',
      chartWidthOverride: item.chartWidthOverride || '',
      chartOffsetY: item.chartOffsetY !== undefined ? item.chartOffsetY : '',
      chartFontScale: item.chartFontScale || '',
      iconKey: '',
      iconOffsetX: '',
      iconOffsetY: '',
      flagged: Boolean(item.isFlagged),
      enabled: true
    });
  });

  state.therapy.forEach((course) => {
    if (!Array.isArray(course.medications) || !course.medications.length) {
      return;
    }
    course.medications.forEach((medication) => {
      rows.push({
        type: 'therapy',
        id: medication.id || '',
        parentId: course.id || '',
        date: '',
        time: '',
        startDate: medication.startDate || course.startDate || '',
        endDate: medication.endDate || course.endDate || '',
        value: '',
        title: '',
        status: '',
        comment: '',
        testType: '',
        result: '',
        medicationName: medication.name || '',
        dosage: medication.dosage || '',
        note: medication.note || '',
        frequencyCount:
          medication.frequencyCount !== undefined && medication.frequencyCount !== null
            ? medication.frequencyCount
            : '',
        frequencyUnit: medication.frequencyUnit || '',
        weekdays: formatWeekdaysForExport(
          medication.frequencyUnit === 'perWeek'
            ? normalizeWeekdays(medication.weekdays, medication.frequencyCount)
            : []
        ),
        courseComment: course.comment || '',
        courseStartDate: course.startDate || '',
        courseEndDate: course.endDate || '',
        chartLabelOverride: medication.chartLabelOverride || '',
        chartSummaryOverride: '',
        chartHeightOverride: medication.chartHeightOverride || '',
        chartWidthOverride: '',
        chartOffsetY: medication.chartOffsetY !== undefined ? medication.chartOffsetY : '',
        chartFontScale: medication.chartFontScale || '',
        iconKey: '',
        iconOffsetX: '',
        iconOffsetY: '',
        flagged: Boolean(course.isFlagged),
        enabled: true
      });
    });
  });

  rows.sort(compareExportRows);
  rows.push(buildExportMetadataRow());
  return rows;
}

function buildCsvContent(rows) {
  const lines = [];
  lines.push(DATA_EXPORT_HEADERS.join(CSV_DELIMITER));
  rows.forEach((row) => {
    const values = DATA_EXPORT_FIELDS.map(({ key }) => {
      switch (key) {
        case 'type':
          return formatTypeForExport(row.type);
        case 'parameterId':
          return formatParameterForExport(row.parameterId);
        case 'flagged':
        case 'enabled':
          return booleanToCsv(row[key] !== undefined ? row[key] : true);
        case 'frequencyUnit':
          return formatFrequencyUnitForExport(row[key]);
        default:
          return row[key] ?? '';
      }
    }).map((value) => escapeCsvValue(value));
    lines.push(values.join(CSV_DELIMITER));
  });
  return `\uFEFF${lines.join('\r\n')}`;
}

function parseCsv(text) {
  if (!text) {
    return [];
  }
  const rows = [];
  let current = '';
  let insideQuotes = false;
  const input = text.replace(/^\uFEFF/, '');
  const pushValue = (row) => {
    row.push(current);
    current = '';
  };
  const pushRow = (row) => {
    rows.push(row);
  };
  let row = [];
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (char === '"') {
      if (insideQuotes && input[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }
    if (!insideQuotes && char === CSV_DELIMITER) {
      pushValue(row);
      continue;
    }
    if (!insideQuotes && (char === '\n' || char === '\r')) {
      if (char === '\r' && input[i + 1] === '\n') {
        i += 1;
      }
      pushValue(row);
      pushRow(row);
      row = [];
      continue;
    }
    current += char;
  }
  pushValue(row);
  pushRow(row);
  return rows;
}

function parseCsvBoolean(value) {
  const normalized = String(value || '')
    .trim()
    .toLowerCase();
  return ['1', 'true', 'да', 'yes', 'y'].includes(normalized);
}

function parseCsvFrequencyUnit(value) {
  const normalized = String(value || '')
    .trim()
    .toLowerCase();
  if (!normalized) return '';
  if (['perday', 'в день', 'раз в день', '1/день', 'ежедневно'].includes(normalized)) {
    return 'perDay';
  }
  if (['perweek', 'в неделю', 'раз в неделю', 'еженедельно'].includes(normalized)) {
    return 'perWeek';
  }
  return normalized;
}

function parseCsvNumber(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function parseCsvFontScale(value) {
  const parsed = parseCsvNumber(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return clampChartFontScale(parsed);
}

function parseCsvWeekdays(value) {
  if (!value) {
    return [];
  }
  return value
    .split(/[,;\s]+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .map((part) => Number(part))
    .filter((num) => Number.isInteger(num) && num >= 0 && num < WEEKDAY_LABELS.length);
}

function sanitizeFrequencyUnit(value) {
  return value === 'perDay' || value === 'perWeek' ? value : '';
}

function parseDelimitedList(value) {
  if (!value) {
    return [];
  }
  return value
    .split(LIST_DELIMITER)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

function normalizeEntryDates(entry) {
  const next = { ...entry };
  ['date', 'startDate', 'endDate', 'courseStartDate', 'courseEndDate'].forEach((field) => {
    if (next[field]) {
      const normalized = normalizeDateString(next[field]);
      next[field] = normalized || '';
    }
  });
  return next;
}

function normalizeImportedType(rawType) {
  const cleaned = String(rawType || '')
    .trim()
    .toLowerCase();
  if (!cleaned) return '';
  const collapsed = cleaned.replace(/\s+/g, ' ');
  if (IMPORT_TYPE_LABELS.has(collapsed)) {
    return IMPORT_TYPE_LABELS.get(collapsed);
  }
  if (IMPORT_TYPE_SYNONYMS.has(collapsed)) {
    return IMPORT_TYPE_SYNONYMS.get(collapsed);
  }
  return collapsed;
}

function importDataFromCsv(text) {
  const parsed = parseCsv(text);
  if (!parsed.length) {
    throw new Error('Файл не содержит данных.');
  }

  const headerRow = parsed[0].map((cell) => String(cell || '').trim());
  const missingHeaders = DATA_EXPORT_HEADERS.filter(
    (header) => !OPTIONAL_IMPORT_HEADERS.has(header) && !headerRow.includes(header)
  );
  if (missingHeaders.length) {
    throw new Error(`Отсутствуют столбцы: ${missingHeaders.join(', ')}`);
  }

  const headerIndex = new Map();
  headerRow.forEach((header, index) => {
    headerIndex.set(header, index);
  });

  const entries = parsed
    .slice(1)
    .map((row) => {
      const entry = {};
      DATA_EXPORT_FIELDS.forEach(({ key, label }) => {
        const columnIndex = headerIndex.get(label);
        entry[key] = columnIndex !== undefined && row[columnIndex] !== undefined ? row[columnIndex].trim() : '';
      });
      return normalizeEntryDates(entry);
    })
    .filter((entry) => entry.type && entry.type.trim().length > 0);

  const nextState = {
    temps: [],
    therapy: [],
    supportiveTherapy: [],
    endoscopy: [],
    neuro: [],
    liver: [],
    labDiagnostics: [],
    surgery: [],
    radiology: [],
    events: []
  };

  const therapyCourses = new Map();
  const metadataEntries = [];
  const skippedRows = [];

  entries.forEach((entry, index) => {
    const rawType = entry.type.trim();
    const normalizedType = normalizeImportedType(rawType);
    const isEnabled = entry.enabled ? parseCsvBoolean(entry.enabled) : true;
    if (!isEnabled && normalizedType !== '__meta__') {
      return;
    }
    if (!normalizedType) {
      skippedRows.push({ row: index + 2, reason: 'Не удалось определить тип' });
      return;
    }
    const type = normalizedType;
    switch (type) {
      case '__meta__':
        metadataEntries.push(entry);
        break;
      case 'temperature': {
        if (!entry.date || !entry.value) {
          skippedRows.push({ row: index + 2, reason: 'Температура без даты или значения' });
          break;
        }
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const chartWidthOverride = parseCsvNumber(entry.chartWidthOverride);
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        nextState.temps.push({
          id: nextId('temp'),
          date: entry.date,
          time: entry.time || '',
          value: entry.value,
          comment: entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged),
          ...(chartFontScale !== null ? { chartFontScale } : {}),
          ...(Number.isFinite(chartWidthOverride) && chartWidthOverride > 0
            ? { chartWidthOverride: Math.round(chartWidthOverride) }
            : {}),
          ...(Number.isFinite(chartHeightOverride) && chartHeightOverride > 0
            ? { chartHeightOverride: Math.round(chartHeightOverride) }
            : {})
        });
        break;
      }
      case 'neuro': {
        if (!entry.date || !entry.status) {
          skippedRows.push({ row: index + 2, reason: 'НС без даты или описания' });
          break;
        }
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const chartWidthOverride = parseCsvNumber(entry.chartWidthOverride);
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        nextState.neuro.push({
          id: nextId('neuro'),
          date: entry.date,
          status: entry.status,
          comment: entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged),
          ...(chartFontScale !== null ? { chartFontScale } : {}),
          ...(Number.isFinite(chartWidthOverride) && chartWidthOverride > 0
            ? { chartWidthOverride: Math.round(chartWidthOverride) }
            : {}),
          ...(Number.isFinite(chartHeightOverride) && chartHeightOverride > 0
            ? { chartHeightOverride: Math.round(chartHeightOverride) }
            : {})
        });
        break;
      }
      case 'liver': {
        if (!entry.startDate || !entry.status) {
          skippedRows.push({ row: index + 2, reason: 'ЛПП без даты начала или описания' });
          break;
        }
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        nextState.liver.push({
          id: nextId('liver'),
          startDate: entry.startDate,
          endDate: entry.endDate || '',
          status: entry.status,
          isFlagged: parseCsvBoolean(entry.flagged),
          ...(chartFontScale !== null ? { chartFontScale } : {})
        });
        break;
      }
      case 'lab': {
        if (!entry.date || !entry.testType) {
          skippedRows.push({ row: index + 2, reason: 'Лабораторный анализ без даты или типа' });
          break;
        }
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const chartWidthOverride = parseCsvNumber(entry.chartWidthOverride);
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        nextState.labDiagnostics.push({
          id: nextId('lab'),
          date: entry.date,
          time: entry.time || '',
          testType: entry.testType,
          result: entry.result || entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged),
          ...(chartFontScale !== null ? { chartFontScale } : {}),
          ...(Number.isFinite(chartWidthOverride) && chartWidthOverride > 0
            ? { chartWidthOverride: Math.round(chartWidthOverride) }
            : {}),
          ...(Number.isFinite(chartHeightOverride) && chartHeightOverride > 0
            ? { chartHeightOverride: Math.round(chartHeightOverride) }
            : {})
        });
        break;
      }
      case 'surgery': {
        if (!entry.date) {
          skippedRows.push({ row: index + 2, reason: 'Хирургия без даты' });
          break;
        }
        const parameterId = parseParameterForImport(entry.parameterId) || 'surgery_pleura';
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const surgeryEntry = {
          id: nextId('surgery'),
          parameterId,
          date: entry.date,
          time: entry.time || '',
          procedureType: entry.procedureType || '',
          side: entry.side || '',
          lobeSegments: entry.lobeSegments || '',
          access: entry.access || '',
          indication: entry.indication || '',
          indicationOther: entry.indicationOther || '',
          complications: parseDelimitedList(entry.complications),
          complicationOther: entry.complicationOther || '',
          volumeEvacuated: entry.volumeEvacuated || '',
          drainageType: entry.drainageType || '',
          localization: entry.localization || '',
          goal: entry.goal || '',
          stagesCount: entry.stagesCount || '',
          comment: entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged)
        };
        if (chartFontScale !== null) {
          surgeryEntry.chartFontScale = chartFontScale;
        }
        nextState.surgery.push(surgeryEntry);
        break;
      }
      case 'radiology': {
        if (!entry.date) {
          skippedRows.push({ row: index + 2, reason: 'Рентгенология без даты' });
          break;
        }
        const parameterId = parseParameterForImport(entry.parameterId) || 'rad_cxr';
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const radiologyEntry = {
          id: nextId('radiology'),
          parameterId,
          date: entry.date,
          time: entry.time || '',
          projection: entry.projection || '',
          conclusion: entry.conclusion || '',
          dynamics: entry.dynamics || '',
          contrast: entry.contrast || '',
          cavitySizeMm: entry.cavitySizeMm || '',
          infiltration: entry.infiltration || '',
          dissemination: entry.dissemination || '',
          pleuralEffusion: entry.pleuralEffusion || '',
          pleuralEffusionVolume: entry.pleuralEffusionVolume || '',
          findingSourceBleed: entry.findingSourceBleed || '',
          recommendation: entry.recommendation || '',
          area: entry.area || '',
          effusion: entry.effusion || '',
          effusionVolume: entry.effusionVolume || '',
          septations: entry.septations || '',
          hyperfixationSummary: entry.hyperfixationSummary || '',
          comment: entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged)
        };
        if (chartFontScale !== null) {
          radiologyEntry.chartFontScale = chartFontScale;
        }
        nextState.radiology.push(radiologyEntry);
        break;
      }
      case 'event': {
        if (!entry.date || !entry.title) {
          skippedRows.push({ row: index + 2, reason: 'Событие без даты или названия' });
          break;
        }
        const chartLabelOverride = (entry.chartLabelOverride || '').trim();
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const chartWidthOverride = parseCsvNumber(entry.chartWidthOverride);
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        const iconKey = (entry.iconKey || '').trim();
        const iconOffsetX = parseCsvNumber(entry.iconOffsetX);
        const iconOffsetY = parseCsvNumber(entry.iconOffsetY);
        const eventEntry = {
          id: nextId('event'),
          date: entry.date,
          time: entry.time || '',
          title: entry.title,
          comment: entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged)
        };
        if (chartLabelOverride) {
          eventEntry.chartLabelOverride = chartLabelOverride;
        }
        if (chartFontScale !== null) {
          eventEntry.chartFontScale = chartFontScale;
        }
        if (Number.isFinite(chartWidthOverride) && chartWidthOverride > 0) {
          eventEntry.chartWidthOverride = Math.round(chartWidthOverride);
        }
        if (Number.isFinite(chartHeightOverride) && chartHeightOverride > 0) {
          eventEntry.chartHeightOverride = Math.round(chartHeightOverride);
        }
        if (iconKey && findEventIcon(iconKey)) {
          eventEntry.iconKey = iconKey;
        }
        if (Number.isFinite(iconOffsetX) || Number.isFinite(iconOffsetY)) {
          const offset = normalizeIconOffset({ x: iconOffsetX ?? 0, y: iconOffsetY ?? 0 });
          eventEntry.iconOffset = offset;
        }
        nextState.events.push(eventEntry);
        break;
      }
      case 'therapy': {
        if (!entry.medicationName) {
          skippedRows.push({ row: index + 2, reason: 'Терапия без названия препарата' });
          break;
        }
        const flagged = parseCsvBoolean(entry.flagged);
        const courseStart = entry.courseStartDate || entry.startDate || '';
        const courseEnd = entry.courseEndDate || entry.endDate || '';
        const courseKey = entry.parentId || `${courseStart}|${courseEnd}|${entry.courseComment || ''}` || `course-${index}`;
        let course = therapyCourses.get(courseKey);
        if (!course) {
          course = {
            id: nextId('therapy'),
            startDate: courseStart,
            endDate: courseEnd,
            comment: entry.courseComment || '',
            isFlagged: flagged,
            medications: []
          };
          therapyCourses.set(courseKey, course);
        } else {
          if (!course.startDate && courseStart) {
            course.startDate = courseStart;
          }
          if (!course.endDate && courseEnd) {
            course.endDate = courseEnd;
          }
          if (!course.comment && entry.courseComment) {
            course.comment = entry.courseComment;
          }
          course.isFlagged = course.isFlagged || flagged;
        }

        const frequencyUnit = sanitizeFrequencyUnit(parseCsvFrequencyUnit(entry.frequencyUnit));
        const frequencyCount = parseCsvNumber(entry.frequencyCount);
        const weekdays = frequencyUnit === 'perWeek' ? parseCsvWeekdays(entry.weekdays) : [];

        const chartLabelOverride = (entry.chartLabelOverride || '').trim();
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        const chartOffset = parseCsvNumber(entry.chartOffsetY);
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const medicationEntry = {
          id: nextId('med'),
          name: entry.medicationName,
          dosage: entry.dosage || '',
          note: entry.note || '',
          startDate: entry.startDate || '',
          endDate: entry.endDate || '',
          frequencyCount: Number.isFinite(frequencyCount) ? Math.max(0, Math.round(frequencyCount)) : '',
          frequencyUnit,
          weekdays: frequencyUnit === 'perWeek' ? normalizeWeekdays(weekdays, frequencyCount || weekdays.length) : []
        };
        if (chartLabelOverride) {
          medicationEntry.chartLabelOverride = chartLabelOverride;
        }
        if (Number.isFinite(chartHeightOverride) && chartHeightOverride > 0) {
          medicationEntry.chartHeightOverride = Math.round(chartHeightOverride);
        }
        if (Number.isFinite(chartOffset)) {
          medicationEntry.chartOffsetY = Math.round(chartOffset);
        }
        if (chartFontScale !== null) {
          medicationEntry.chartFontScale = chartFontScale;
        }
        course.medications.push(medicationEntry);
        break;
      }
      case 'support': {
        if (!entry.startDate || (!entry.medicationName && !entry.title)) {
          skippedRows.push({ row: index + 2, reason: 'Терапия сопровождения без дат или названия' });
          break;
        }
        const heightOverride = parseCsvNumber(entry.chartHeightOverride);
        const offsetOverride = parseCsvNumber(entry.chartOffsetY);
        const fontScale = parseCsvFontScale(entry.chartFontScale);
        const supportEntry = {
          id: nextId('support'),
          startDate: entry.startDate,
          endDate: entry.endDate || '',
          name: entry.medicationName || entry.title || '',
          dosage: entry.dosage || '',
          note: entry.note || entry.comment || '',
          isFlagged: parseCsvBoolean(entry.flagged)
        };
        if (Number.isFinite(heightOverride) && heightOverride > 0) {
          supportEntry.chartHeightOverride = Math.round(heightOverride);
        }
        if (Number.isFinite(offsetOverride)) {
          supportEntry.chartOffsetY = Math.round(offsetOverride);
        }
        if (fontScale !== null) {
          supportEntry.chartFontScale = fontScale;
        }
        nextState.supportiveTherapy.push(supportEntry);
        break;
      }
      case 'endoscopy': {
        if (!entry.date) {
          skippedRows.push({ row: index + 2, reason: 'Эндоскопия без даты' });
          break;
        }
        const parsedProcedures = parseEndoscopyProceduresFromStrings(
          entry.manipulationType,
          entry.interventions,
          entry.complications
        ).map((procedure) => ({ ...procedure, isFlagged: parseCsvBoolean(entry.flagged) }));

        if (!parsedProcedures.length) {
          skippedRows.push({ row: index + 2, reason: 'Эндоскопия без выбранных действий' });
          break;
        }

        const flagged = parseCsvBoolean(entry.flagged);
        const chartSummaryOverride = (entry.chartSummaryOverride || '').trim();
        const chartHeightOverride = parseCsvNumber(entry.chartHeightOverride);
        const chartWidthOverride = parseCsvNumber(entry.chartWidthOverride);
        const chartOffset = parseCsvNumber(entry.chartOffsetY);
        const chartFontScale = parseCsvFontScale(entry.chartFontScale);
        const endoscopyEntry = {
          id: nextId('endo'),
          date: entry.date,
          time: entry.time || '',
          procedures: normalizeEndoscopyProcedures(parsedProcedures),
          comment: entry.comment || '',
          isFlagged: flagged || parsedProcedures.some((procedure) => procedure.isFlagged)
        };
        if (chartSummaryOverride) {
          endoscopyEntry.chartSummaryOverride = chartSummaryOverride;
        }
        if (Number.isFinite(chartHeightOverride) && chartHeightOverride > 0) {
          endoscopyEntry.chartHeightOverride = Math.round(chartHeightOverride);
        }
        if (Number.isFinite(chartWidthOverride) && chartWidthOverride > 0) {
          endoscopyEntry.chartWidthOverride = Math.round(chartWidthOverride);
        }
        if (Number.isFinite(chartOffset)) {
          endoscopyEntry.chartOffsetY = Math.round(chartOffset);
        }
        if (chartFontScale !== null) {
          endoscopyEntry.chartFontScale = chartFontScale;
        }
        nextState.endoscopy.push(endoscopyEntry);
        break;
      }
      default:
        skippedRows.push({ row: index + 2, reason: `Неизвестный тип: ${rawType}` });
        break;
    }
  });

  nextState.therapy = Array.from(therapyCourses.values()).filter((course) => Array.isArray(course.medications) && course.medications.length);

  let importedVisibility = null;
  let importedParameterType = '';
  let importedLayout = null;

  for (let i = metadataEntries.length - 1; i >= 0; i -= 1) {
    const entry = metadataEntries[i];
    const payload = entry.comment || entry.note || '';
    if (!payload) {
      continue;
    }
    try {
      const meta = JSON.parse(payload);
      if (meta && meta.trackVisibility && Array.isArray(meta.trackVisibility)) {
        importedVisibility = meta.trackVisibility;
      }
      if (meta && typeof meta.parameterType === 'string') {
        importedParameterType = meta.parameterType;
      }
      if (meta && meta.layout) {
        importedLayout = meta.layout;
      }
      if (importedVisibility && importedParameterType && importedLayout) {
        break;
      }
    } catch (error) {
      // ignore malformed metadata rows
    }
  }

  return {
    state: nextState,
    trackVisibility: importedVisibility,
    parameterType: importedParameterType,
    layout: importedLayout,
    skippedRows
  };
}

function applyImportedState(nextState, options = {}) {
  if (!nextState) {
    return;
  }

  state.temps = Array.isArray(nextState.temps) ? nextState.temps : [];
  state.therapy = Array.isArray(nextState.therapy) ? nextState.therapy : [];
  state.supportiveTherapy = Array.isArray(nextState.supportiveTherapy)
    ? nextState.supportiveTherapy
    : [];
  state.endoscopy = Array.isArray(nextState.endoscopy) ? nextState.endoscopy : [];
  state.neuro = Array.isArray(nextState.neuro) ? nextState.neuro : [];
  state.liver = Array.isArray(nextState.liver) ? nextState.liver : [];
  state.labDiagnostics = Array.isArray(nextState.labDiagnostics) ? nextState.labDiagnostics : [];
  state.surgery = Array.isArray(nextState.surgery) ? nextState.surgery : [];
  state.radiology = Array.isArray(nextState.radiology) ? nextState.radiology : [];
  state.events = Array.isArray(nextState.events) ? nextState.events : [];
  const importedLayout = options.layout || nextState.layout || state.layout || {};
  state.layout = normalizeLayoutState(importedLayout);
  syncStepXFromLayout();
  updateLayoutSettingsDisplay();
  state.timelineDates = [];
  therapyDraft = createEmptyTherapyDraft();

  clearSelection();

  const importedVisibility = options.trackVisibility;
  if (importedVisibility && importedVisibility.length) {
    applyTrackVisibilitySnapshot(importedVisibility, { fallbackToData: true });
  } else {
    rebuildTrackVisibilityFromState(state);
  }

  syncIdCounterWithState(state);

  renderTimeline();

  let targetType = typeof options.parameterType === 'string' ? options.parameterType : '';
  const targetConfig = getParameterConfig(targetType);
  const targetTrackKey = targetConfig ? targetConfig.trackKey : targetType;
  if (!targetType || !isTrackVisible(targetTrackKey)) {
    targetType = ensureActiveParameterSelection();
  }
  if (parameterSelect) {
    syncDirectionForParameter(targetType || parameterSelect.value);
  }
  renderDynamicFields(parameterSelect ? parameterSelect.value : targetType);

  if (Array.isArray(options.skippedRows) && options.skippedRows.length) {
    const message = options.skippedRows
      .map((entry) => `Строка ${entry.row}: ${entry.reason}`)
      .join('\n');
    alert(`Некоторые строки пропущены:\n${message}`);
  }
}

function handleExportData() {
  closeToolbarMenu();
  hideTooltip(true);
  closeInlineEditor();
  try {
    const rows = buildExportRows();
    const csvContent = buildCsvContent(rows);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const objectUrl = URL.createObjectURL(blob);
    triggerDownload(objectUrl, DATA_EXPORT_FILENAME);
    window.setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 0);
  } catch (error) {
    console.error('Data export failed', error);
    alert('Не удалось выгрузить данные. Попробуйте ещё раз.');
  }
}

function handleImportButtonClick() {
  closeToolbarMenu();
  if (!importFileInput) {
    return;
  }
  hideTooltip(true);
  closeInlineEditor();
  importFileInput.value = '';
  importFileInput.click();
}

function handleImportFileChange(event) {
  const input = event?.currentTarget || importFileInput;
  const file = input && input.files ? input.files[0] : null;
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const text = typeof reader.result === 'string' ? reader.result : '';
      const importResult = importDataFromCsv(text);
      if (!importResult || !importResult.state) {
        throw new Error('Файл не содержит распознаваемых данных.');
      }
      pushHistoryState();
      applyImportedState(importResult.state, {
        trackVisibility: importResult.trackVisibility,
        parameterType: importResult.parameterType,
        layout: importResult.layout,
        skippedRows: importResult.skippedRows
      });
      updateUndoButtonState();
      alert('Данные успешно загружены.');
    } catch (error) {
      console.error('Data import failed', error);
      alert(error instanceof Error ? error.message : 'Не удалось загрузить данные. Проверьте файл и повторите попытку.');
    } finally {
      if (importFileInput) {
        importFileInput.value = '';
      }
    }
  };
  reader.onerror = () => {
    console.error('File read error', reader.error);
    alert('Не удалось прочитать файл. Попробуйте снова.');
    if (importFileInput) {
      importFileInput.value = '';
    }
  };
  reader.readAsText(file, 'utf-8');
}

function handleFormSubmit(event) {
  event.preventDefault();
  const parameterId = parameterSelect.value;
  const parameterConfig = getParameterConfig(parameterId);
  const type = parameterConfig ? parameterConfig.trackKey : parameterId;
  const formKind = parameterConfig ? parameterConfig.formKind : parameterId;
  const data = collectFormData(parameterId);
  if (!data) return;

  if (type === 'liver' && data.endDate && parseDate(data.endDate) < parseDate(data.startDate)) {
    alert('Дата окончания не может быть раньше даты начала');
    return;
  }

  if (type === 'support' && data.endDate && parseDate(data.endDate) < parseDate(data.startDate)) {
    alert('Дата окончания не может быть раньше даты начала');
    return;
  }

  pushHistoryState();

  const isEditing = Boolean(editContext && editContext.type === type);

  if (isEditing) {
    switch (type) {
      case 'temperature': {
        const target = state.temps.find((item) => item.id === editContext.id);
        if (target) {
          target.date = data.date;
          target.time = data.time;
          target.value = data.value;
          target.comment = data.comment;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'therapy': {
        const courseIndex = state.therapy.findIndex((item) => item.id === editContext.courseId);
        if (courseIndex !== -1) {
          const previousCourse = state.therapy[courseIndex];
          const existingOverrides = new Map(
            (previousCourse.medications || []).map((med) => {
              const key = med.id || `${previousCourse.id}-${med.name}`;
              return [key, med.chartLabelOverride];
            })
          );
          const updatedMedications = Array.isArray(data.medications)
            ? data.medications.map((medication) => {
                const key = medication.id || `${previousCourse.id}-${medication.name}`;
                const override = existingOverrides.get(key);
                const nextMed = { ...medication };
                if (override && typeof override === 'string' && override.trim()) {
                  nextMed.chartLabelOverride = override.trim();
                }
                return nextMed;
              })
            : [];
          state.therapy[courseIndex] = {
            ...previousCourse,
            startDate: data.startDate,
            endDate: data.endDate || '',
            comment: data.comment || '',
            isFlagged: Boolean(data.isFlagged),
            medications: updatedMedications
          };
        }
        break;
      }
      case 'support': {
        const target = state.supportiveTherapy.find((item) => item.id === editContext.id);
        if (target) {
          target.startDate = data.startDate;
          target.endDate = data.endDate || '';
          target.name = data.name;
          target.dosage = data.dosage || '';
          target.note = data.note || '';
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'neuro': {
        const target = state.neuro.find((item) => item.id === editContext.id);
        if (target) {
          target.date = data.date;
          target.status = data.status;
          target.comment = data.comment;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'liver': {
        const target = state.liver.find((item) => item.id === editContext.id);
        if (target) {
          target.startDate = data.startDate;
          target.endDate = data.endDate || '';
          target.status = data.status;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'lab': {
        const target = state.labDiagnostics.find((item) => item.id === editContext.id);
        if (target) {
          target.date = data.date;
          target.time = data.time;
          target.testType = data.testType;
          target.result = data.result;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'surgery': {
        const target = state.surgery.find((item) => item.id === editContext.id);
        if (target) {
          target.parameterId = parameterId;
          Object.assign(target, data);
        }
        break;
      }
      case 'radiology': {
        const target = state.radiology.find((item) => item.id === editContext.id);
        if (target) {
          target.parameterId = parameterId;
          Object.assign(target, data);
        }
        break;
      }
      case 'event': {
        const target = state.events.find((item) => item.id === editContext.id);
        if (target) {
          target.date = data.date;
          target.time = data.time;
          target.title = data.title;
          target.comment = data.comment;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      case 'endoscopy': {
        const target = state.endoscopy.find((item) => item.id === editContext.id);
        if (target) {
          target.date = data.date;
          target.time = data.time;
          target.procedures = cloneEndoscopyProcedures(data.procedures);
          target.comment = data.comment;
          target.isFlagged = Boolean(data.isFlagged);
        }
        break;
      }
      default:
        break;
    }
  } else {
    switch (type) {
      case 'temperature':
        state.temps.push({
          id: nextId('temp'),
          date: data.date,
          time: data.time,
          value: data.value,
          comment: data.comment,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'therapy': {
        const courseId = nextId('therapy');
        const medications = Array.isArray(data.medications) ? data.medications.map((med) => ({ ...med })) : [];
        state.therapy.push({
          id: courseId,
          startDate: data.startDate,
          endDate: data.endDate || '',
          medications,
          comment: data.comment,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      }
      case 'neuro':
        state.neuro.push({
          id: nextId('neuro'),
          date: data.date,
          status: data.status,
          comment: data.comment,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'liver':
        state.liver.push({
          id: nextId('liver'),
          startDate: data.startDate,
          endDate: data.endDate || '',
          status: data.status,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'lab':
        state.labDiagnostics.push({
          id: nextId('lab'),
          date: data.date,
          time: data.time,
          testType: data.testType,
          result: data.result,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'surgery':
        state.surgery.push({
          id: nextId('surgery'),
          parameterId,
          ...data
        });
        break;
      case 'radiology':
        state.radiology.push({
          id: nextId('radiology'),
          parameterId,
          ...data
        });
        break;
      case 'event':
        state.events.push({
          id: nextId('event'),
          date: data.date,
          time: data.time,
          title: data.title,
          comment: data.comment,
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'support':
        state.supportiveTherapy.push({
          id: nextId('support'),
          startDate: data.startDate,
          endDate: data.endDate || '',
          name: data.name,
          dosage: data.dosage || '',
          note: data.note || '',
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      case 'endoscopy':
        state.endoscopy.push({
          id: nextId('endo'),
          date: data.date,
          time: data.time || '',
          procedures: cloneEndoscopyProcedures(data.procedures),
          comment: data.comment || '',
          isFlagged: Boolean(data.isFlagged)
        });
        break;
      default:
        break;
    }
  }

  clearSelection();
  renderTimeline();
  renderDynamicFields(formKind);
}

function handleClearAll() {
  if (!confirm('Очистить все данные таймлайна?')) return;
  pushHistoryState();
  state.temps = [];
  state.therapy = [];
  state.supportiveTherapy = [];
  state.endoscopy = [];
  state.neuro = [];
  state.liver = [];
  state.labDiagnostics = [];
  state.surgery = [];
  state.radiology = [];
  state.events = [];
  state.timelineDates = [];
  activeDetailPayload = null;
  clearSelection();
  rebuildTrackVisibilityFromState(state);
  syncIdCounterWithState(state);
  renderTimeline();
  const nextType = ensureActiveParameterSelection();
  if (parameterSelect) {
    syncDirectionForParameter(nextType || '');
  }
  renderDynamicFields(parameterSelect ? parameterSelect.value : nextType);
  showDetails(null);
}

function deleteEntity(context) {
  if (!context || !context.type) {
    return false;
  }
  switch (context.type) {
    case 'temperature': {
      const index = state.temps.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.temps.splice(index, 1);
      return true;
    }
    case 'therapy': {
      const { courseId, medicationId } = context;
      if (!courseId || !medicationId) return false;
      const courseIndex = state.therapy.findIndex((item) => item.id === courseId);
      if (courseIndex === -1) return false;
      const course = state.therapy[courseIndex];
      if (!Array.isArray(course.medications)) {
        return false;
      }
      const medicationIndex = course.medications.findIndex((med) => med.id === medicationId);
      if (medicationIndex === -1) return false;
      course.medications.splice(medicationIndex, 1);
      if (!course.medications.length) {
        state.therapy.splice(courseIndex, 1);
      } else {
        updateTherapyCourseBounds(course);
      }
      return true;
    }
    case 'support': {
      const index = state.supportiveTherapy.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.supportiveTherapy.splice(index, 1);
      return true;
    }
    case 'endoscopy': {
      const index = state.endoscopy.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.endoscopy.splice(index, 1);
      return true;
    }
    case 'neuro': {
      const index = state.neuro.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.neuro.splice(index, 1);
      return true;
    }
    case 'liver': {
      const index = state.liver.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.liver.splice(index, 1);
      return true;
    }
    case 'lab': {
      const index = state.labDiagnostics.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.labDiagnostics.splice(index, 1);
      return true;
    }
    case 'surgery': {
      const index = state.surgery.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.surgery.splice(index, 1);
      return true;
    }
    case 'radiology': {
      const index = state.radiology.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.radiology.splice(index, 1);
      return true;
    }
    case 'event': {
      const index = state.events.findIndex((item) => item.id === context.id);
      if (index === -1) return false;
      state.events.splice(index, 1);
      return true;
    }
    default:
      return false;
  }
}

function handleDeleteSelected() {
  if (!deleteContext) {
    return;
  }
  if (!confirm('Удалить выбранный элемент?')) {
    return;
  }
  pushHistoryState();
  const removed = deleteEntity(deleteContext);
  if (!removed) {
    if (historyStack.length) {
      historyStack.pop();
      updateUndoButtonState();
    }
    return;
  }
  activeDetailPayload = null;
  clearSelection();
  renderTimeline();
  const currentType = parameterSelect ? parameterSelect.value : '';
  renderDynamicFields(currentType);
}

function handleUndoAction() {
  if (!historyStack.length) {
    return;
  }
  hideTooltip(true);
  closeInlineEditor();
  const snapshot = historyStack.pop();
  restoreStateSnapshot(snapshot);
  updateUndoButtonState();
}

async function exportSvgAsPng(svgElement) {
  if (!svgElement) {
    throw new Error('SVG element is not available');
  }

  await waitForFonts();
  ensureSvgStyles(svgElement);
  applySvgFontScale(svgElement);

  const rect = svgElement.getBoundingClientRect();
  const width = Math.max(
    Number(svgElement.getAttribute('width')) || 0,
    svgElement.scrollWidth || 0,
    rect.width || 0
  );
  const height = Math.max(
    Number(svgElement.getAttribute('height')) || 0,
    svgElement.scrollHeight || 0,
    rect.height || 0
  );

  const clone = svgElement.cloneNode(true);
  ensureSvgStyles(clone);
  applySvgFontScale(clone);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  clone.setAttribute('width', width);
  clone.setAttribute('height', height);
  clone.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(clone);
  const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
  const image = await loadImage(svgDataUrl);
  const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1;
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(width * scale);
  canvas.height = Math.ceil(height * scale);
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Canvas context not available');
  }

  context.setTransform(scale, 0, 0, scale, 0, 0);
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    if (canvas.toBlob) {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({ blob, width, height });
          } else {
            reject(new Error('Экспорт вернул пустой файл'));
          }
        },
        'image/png'
      );
    } else {
      try {
        const dataUrl = canvas.toDataURL('image/png');
        resolve({ dataUrl, width, height });
      } catch (error) {
        reject(error);
      }
    }
  });
}

async function handleDownload() {
  closeToolbarMenu();
  const originalLabel = downloadButton.textContent;
  downloadButton.disabled = true;
  downloadButton.textContent = 'Сохранение…';
  hideTooltip(true);
  closeInlineEditor();

  try {
    const result = await exportSvgAsPng(timelineSvg);
    if (!result) {
      throw new Error('Экспорт не вернул данных');
    }

    if (result.blob) {
      const objectUrl = URL.createObjectURL(result.blob);
      triggerDownload(objectUrl, PREVIEW_FILENAME);
      const previewShown = showPreview(objectUrl, { isObjectUrl: true, filename: PREVIEW_FILENAME });
      if (!previewShown) {
        URL.revokeObjectURL(objectUrl);
      }
    } else if (result.dataUrl) {
      triggerDownload(result.dataUrl, PREVIEW_FILENAME);
      showPreview(result.dataUrl, { isObjectUrl: false, filename: PREVIEW_FILENAME });
    } else {
      throw new Error('Не удалось сформировать PNG');
    }
  } catch (error) {
    console.error('PNG export failed', error);
    alert('Не удалось сохранить изображение. Попробуйте ещё раз.');
  } finally {
    downloadButton.disabled = false;
    downloadButton.textContent = originalLabel;
  }
}

function showPreview(resourceUrl, options = {}) {
  if (!previewModal || !previewImage || !previewDownloadLink || !resourceUrl) {
    return false;
  }

  cleanupPreviewResource();
  previewResourceUrl = resourceUrl;
  previewResourceIsObjectUrl = Boolean(options.isObjectUrl);
  const filename = options.filename || PREVIEW_FILENAME;

  previewImage.src = resourceUrl;
  previewDownloadLink.href = resourceUrl;
  previewDownloadLink.setAttribute('download', filename);
  previewModal.classList.add('is-visible');
  previewModal.setAttribute('aria-hidden', 'false');
  if (bodyElement) {
    bodyElement.style.overflow = 'hidden';
  }
  return true;
}

function closePreview() {
  if (!previewModal) return;

  previewModal.classList.remove('is-visible');
  previewModal.setAttribute('aria-hidden', 'true');
  if (bodyElement && !isSettingsModalOpen()) {
    bodyElement.style.overflow = '';
  }

  if (previewImage) {
    previewImage.removeAttribute('src');
  }
  if (previewDownloadLink) {
    previewDownloadLink.removeAttribute('href');
  }
  cleanupPreviewResource();
  hideTooltip(true);
  closeInlineEditor();
}

if (parameterSelect) {
  parameterSelect.addEventListener('change', () => {
    renderDynamicFields(parameterSelect.value);
  });
}

if (directionSelect) {
  directionSelect.addEventListener('change', () => {
    populateParameterSelect(directionSelect.value);
    const activeParam = ensureActiveParameterSelection();
    renderDynamicFields(activeParam);
  });
}

if (entryForm) {
  entryForm.addEventListener('submit', handleFormSubmit);
}

if (clearAllButton) {
  clearAllButton.addEventListener('click', handleClearAll);
}

if (deleteSelectedButton) {
  deleteSelectedButton.addEventListener('click', handleDeleteSelected);
}

if (detailFontDecrease) {
  detailFontDecrease.addEventListener('click', () => adjustFontForSelection(-CHART_FONT_STEP_PX));
}

if (detailFontIncrease) {
  detailFontIncrease.addEventListener('click', () => adjustFontForSelection(CHART_FONT_STEP_PX));
}

if (detailIconChoose) {
  detailIconChoose.addEventListener('click', () => {
    const id = detailIconChoose.dataset.eventId;
    if (id) {
      openIconPickerForEvent(id);
    }
  });
}

if (detailIconClear) {
  detailIconClear.addEventListener('click', () => {
    const id = detailIconClear.dataset.eventId;
    if (id) {
      clearEventIcon(id);
    }
  });
}

if (resetGraphButton) {
  resetGraphButton.addEventListener('click', handleResetGraph);
}

if (undoButton) {
  undoButton.addEventListener('click', handleUndoAction);
}

if (downloadButton) {
  downloadButton.addEventListener('click', handleDownload);
}

if (zoomInButton) {
  zoomInButton.addEventListener('click', () => adjustZoom(20));
}

if (zoomOutButton) {
  zoomOutButton.addEventListener('click', () => adjustZoom(-20));
}

if (toolbarMenuButton) {
  toolbarMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleToolbarMenu();
  });
}

document.addEventListener('click', (event) => {
  if (activeIconActionMenu && !activeIconActionMenu.contains(event.target)) {
    hideIconActionMenu();
  }
});

if (iconPickerApply) {
  iconPickerApply.addEventListener('click', applyIconSelection);
}

if (iconPickerModal) {
  const dismissors = iconPickerModal.querySelectorAll('[data-icon-dismiss]');
  dismissors.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      closeIconPicker();
    });
  });
}

if (openSettingsButton) {
  openSettingsButton.addEventListener('click', (event) => {
    event.preventDefault();
    openSettingsModal();
  });
}

if (fontDecreaseButton) {
  fontDecreaseButton.addEventListener('click', () => adjustFontSize(-1));
}

if (fontIncreaseButton) {
  fontIncreaseButton.addEventListener('click', () => adjustFontSize(1));
}

if (layoutStepXInput) {
  layoutStepXInput.addEventListener('input', handleLayoutControlInput);
}
if (layoutTrackGapInput) {
  layoutTrackGapInput.addEventListener('input', handleLayoutControlInput);
}
if (layoutGroupGapInput) {
  layoutGroupGapInput.addEventListener('input', handleLayoutControlInput);
}

if (settingsForm) {
  settingsForm.addEventListener('change', handleSettingsFormChange);
}

if (settingsModal) {
  settingsModal.addEventListener('click', (event) => {
    if (event.target && event.target.hasAttribute('data-settings-dismiss')) {
      event.preventDefault();
      closeSettingsModal();
    }
  });
}

if (chartScrollContainer) {
  chartScrollContainer.addEventListener('mousedown', (event) => {
    if (!panContext.spaceMode || event.button !== 0) {
      return;
    }
    event.preventDefault();
    hideTooltip(true);
    closeInlineEditor();
    startPan(event);
  });
}

if (exportDataButton) {
  exportDataButton.addEventListener('click', handleExportData);
}

if (importDataButton) {
  importDataButton.addEventListener('click', handleImportButtonClick);
}
if (importFileInput) {
  importFileInput.addEventListener('change', handleImportFileChange);
}

if (parameterVisibilityTrigger) {
  parameterVisibilityTrigger.addEventListener('click', (event) => {
    event.preventDefault();
    toggleParameterVisibilityDropdown();
  });
}

document.addEventListener('click', handleDocumentClickForVisibility);

if (chartViewport) {
  chartViewport.addEventListener('scroll', () => {
    hideTooltip(true);
    closeInlineEditor();
  });
}

window.addEventListener('resize', () => {
  hideTooltip(true);
  closeInlineEditor();
});
window.addEventListener(
  'scroll',
  () => {
    hideTooltip(true);
    closeInlineEditor();
  },
  true
);

timelineSvg.addEventListener('click', (event) => {
  if (suppressClick) {
    suppressClick = false;
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (!event.target.closest('.is-clickable')) {
    clearSelection();
  }
});

if (previewModal) {
  previewModal.addEventListener('click', (event) => {
    if (event.target.matches('[data-preview-close]')) {
      event.preventDefault();
      closePreview();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !event.repeat && !isEditableElement(event.target)) {
    event.preventDefault();
    if (!panContext.spaceMode) {
      setSpacePanMode(true);
    }
    return;
  }
  if (event.key === 'Escape') {
    let handled = false;
    if (isSettingsModalOpen()) {
      closeSettingsModal();
      handled = true;
    }
    if (previewModal && previewModal.classList.contains('is-visible')) {
      closePreview();
      handled = true;
    }
    if (isVisibilityDropdownOpen) {
      closeParameterVisibilityDropdown();
      handled = true;
    }
    if (isToolbarMenuOpen) {
      closeToolbarMenu();
      handled = true;
    }
    if (inlineEditorElement) {
      closeInlineEditor();
      handled = true;
    }
    if (handled) {
      event.stopPropagation();
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    setSpacePanMode(false);
  }
});

window.addEventListener('blur', () => {
  setSpacePanMode(false);
});

buildParameterCatalogIndex();
populateDirectionSelect();
populateParameterSelect(directionSelect ? directionSelect.value : DIRECTIONS[0]?.id);
syncIdCounterWithState(state);
updateUndoButtonState();
initializeTrackToggles();
syncStepXFromLayout();
updateLayoutSettingsDisplay();
applyDisplayPreferences();
const initialParam = ensureActiveParameterSelection();
syncDirectionForParameter(initialParam);
renderDynamicFields(parameterSelect ? parameterSelect.value : initialParam);
console.log(
  'INIT',
  state.temps.length,
  state.therapy.length,
  state.endoscopy.length,
  state.labDiagnostics.length,
  state.events.length
);
renderTimeline();
console.log(
  'SVG',
  document.querySelectorAll('#timeline circle').length,
  document.querySelectorAll('#timeline rect').length
);
showDetails(null);
