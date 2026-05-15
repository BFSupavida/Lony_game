// ══════════════════════════════════════════════════════
// LONY APP — DESIGN TOKENS
// แก้ตรงนี้เพื่อเปลี่ยน visual ทั้งแอปได้เลย
// ══════════════════════════════════════════════════════

// ── COLORS ──────────────────────────────────────────
export const COLORS = {
  // Primary — เปลี่ยนได้ตาม brand
  primary:      '#2D6A4F',   // ปุ่มหลัก, badge
  primaryMid:   '#40916C',   // hover state
  primaryLight: '#74C69D',   // border, accent
  primaryPale:  '#D8F3DC',   // background card light

  // Accent
  gold:         '#F4C430',   // นก, highlight
  goldDark:     '#C8941A',   // นก wing detail

  // Text
  textDark:     '#4A3000',   // หัวข้อหลัก
  textMid:      '#7A5C1E',   // body text
  textMuted:    '#5A4A2A',   // muted text

  // Background
  bgMain:       '#A8D8EA',   // sky background
  bgCard:       'rgba(255,255,255,0.52)',  // glass card
  bgCardBorder: 'rgba(255,255,255,0.78)', // card border

  // Dark overlay (for countdown screens)
  dark:         'rgba(20,20,50,0.82)',
  darkText:     '#FFFDE7',

  // Utility
  white:        '#FFFFFF',
  cream:        '#FFFDE7',
};

// ── TYPOGRAPHY ──────────────────────────────────────
export const FONTS = {
  // เปลี่ยน font ที่นี่ได้เลย
  logo:   "'Noto Serif Thai', serif",          // ← เปลี่ยนเป็น Nickainley ถ้ามี
  heading: "'Noto Serif Thai', serif",
  body:    "'Noto Sans Thai', sans-serif",
  mono:    "'Noto Sans Thai', sans-serif",
};

export const TEXT = {
  h1:    { fontSize: 26, fontWeight: 900, color: COLORS.textDark, fontFamily: FONTS.heading, lineHeight: 1.3 },
  h2:    { fontSize: 18, fontWeight: 800, color: COLORS.textDark, fontFamily: FONTS.heading, lineHeight: 1.3 },
  body:  { fontSize: 14, color: COLORS.textMid,   fontFamily: FONTS.body, lineHeight: 1.85 },
  small: { fontSize: 11, color: COLORS.textMuted,  fontFamily: FONTS.body, lineHeight: 1.7 },
  label: { fontSize: 10, color: COLORS.primaryMid, fontFamily: FONTS.body, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' },
};

// ── SPACING & SHAPE ─────────────────────────────────
export const SHAPE = {
  cardRadius:   24,
  buttonRadius: 50,   // pill shape
  chipRadius:   20,
  inputRadius:  14,
  innerRadius:  16,
};

// ── SHADOWS ─────────────────────────────────────────
export const SHADOW = {
  card:   '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
  button: '0 4px 18px rgba(45,106,79,0.45)',
  sm:     '0 2px 8px rgba(0,0,0,0.08)',
};

// ══════════════════════════════════════════════════════
// CONTENT DATA
// ══════════════════════════════════════════════════════

// ── 5-4-3-2-1 GROUNDING SENSES ──────────────────────
export const SENSES = [
  {
    num: 5, sense: 'เห็น', icon: '👁️',
    color: '#2D6A4F', bg: 'rgba(216,243,220,0.92)',
    prompt: 'มองรอบๆ แล้วบอก 5 สิ่งที่เห็นอยู่ตอนนี้',
    hint: 'เช่น หน้าต่าง, แก้วน้ำ, ไฟบนเพดาน...',
    guide: 'แค่มองแล้วบอก ไม่ต้องคิดเยอะ',
  },
  {
    num: 4, sense: 'สัมผัส', icon: '🤲',
    color: '#40916C', bg: 'rgba(200,240,220,0.92)',
    prompt: 'แตะ 4 สิ่งรอบตัว บอกว่าแต่ละอย่างรู้สึกยังไง',
    hint: 'เช่น โต๊ะ-เรียบเย็น, เสื้อ-นุ่ม...',
    guide: 'กดนิ้วช้าๆ — ความรู้สึกนี้คือตอนนี้',
  },
  {
    num: 3, sense: 'ได้ยิน', icon: '👂',
    color: '#1B6CA8', bg: 'rgba(200,230,248,0.92)',
    prompt: 'หยุดฟัง แล้วบอก 3 เสียงที่ได้ยินอยู่',
    hint: 'เช่น เสียงลม, เสียงรถ, เสียงหายใจ...',
    guide: 'หลับตาสักครู่ ปล่อยให้หูนำ',
  },
  {
    num: 2, sense: 'กลิ่น', icon: '👃',
    color: '#7A5C1E', bg: 'rgba(248,240,210,0.92)',
    prompt: 'สูดหายใจ บอก 2 กลิ่นที่รู้สึกได้',
    hint: 'เช่น กลิ่นอากาศ, กลิ่นเสื้อตัวเอง...',
    guide: 'หายใจเข้าช้าๆ แค่สังเกต',
  },
  {
    num: 1, sense: 'รสชาติ', icon: '👅',
    color: '#A0522D', bg: 'rgba(248,225,210,0.92)',
    prompt: 'มีรสอะไรในปากตอนนี้?',
    hint: 'เช่น รสขม, หวานอ่อนๆ, หรือไม่มีรสเลย',
    guide: 'กลืนน้ำลายแล้วสังเกต',
  },
];

// ── MICRO ACTIONS ────────────────────────────────────
export const MICRO_ACTIONS = [
  { icon: '☕', action: 'ชงเครื่องดื่มอุ่นๆ สักแก้ว',           why: 'ความอบอุ่นกระตุ้น Insula — ลด loneliness signal', time: '3 นาที' },
  { icon: '🪟', action: 'เปิดหน้าต่าง มองออกไปข้างนอก 2 นาที',  why: 'Natural light reset Circadian rhythm + ลด Cortisol', time: '2 นาที' },
  { icon: '✍️', action: 'เขียน 3 สิ่งที่รู้สึกขอบคุณวันนี้',    why: 'Gratitude activate Medial PFC',                      time: '5 นาที' },
  { icon: '🚶', action: 'เดินช้าๆ ในบ้าน 10 ก้าว อย่างมีสติ',   why: 'Rhythmic movement sync Cerebellum',                  time: '2 นาที' },
  { icon: '🎵', action: 'เปิดเพลงที่ชอบ 1 เพลง ฟังจนจบ',        why: 'Music activate Nucleus Accumbens = Dopamine',        time: '4 นาที' },
  { icon: '🌿', action: 'จับหรือมองต้นไม้ใกล้ๆ สักครู่',         why: 'Biophilia response ลด Amygdala activation',          time: '2 นาที' },
];

// ── MINDFUL COMPASSION PHRASES ───────────────────────
export const COMPASSION_PHRASES = [
  'ตอนนี้ฉันรู้สึกเหงา — และมันโอเคนะ',
  'ความเหงาเป็นส่วนหนึ่งของการมีชีวิต',
  'ฉันไม่ได้โดดเดี่ยวอย่างที่คิด',
  'ฉันดูแลตัวเองได้ — ตอนนี้ก็กำลังทำอยู่',
];

// ── BODY LOCATION OPTIONS ────────────────────────────
export const BODY_LOCATIONS = [
  'อก / หัวใจ', 'คอ / ลำคอ', 'ท้อง',
  'ไหล่ / ต้นคอ', 'ทั่วร่างกาย', 'ไม่แน่ใจ',
];

// ── EMOTION DESCRIPTORS ──────────────────────────────
export const EMOTION_DESCRIPTORS = [
  'หนักอึ้ง', 'กลวง', 'แน่น', 'เย็น',
  'หม่น', 'กว้าง', 'เจ็บเบาๆ', 'แห้ง', 'ไหลอยู่',
];

// ── APP PHASES ───────────────────────────────────────
export const PHASES = {
  START:      'start',
  WELCOME:    'welcome',
  GROUNDING:  'grounding',
  COMPASSION: 'compassion',
  ACTION:     'action',
  DONE:       'done',
};

// ── PROGRESS STEPS ───────────────────────────────────
export const STEPS = [
  { id: 'welcome',    label: 'เริ่ม',       icon: '🌿' },
  { id: 'grounding',  label: 'Grounding',   icon: '👁' },
  { id: 'compassion', label: 'Compassion',  icon: '🤍' },
  { id: 'action',     label: 'Action',      icon: '✨' },
  { id: 'done',       label: 'จบ',          icon: '🐦' },
];

// ── MINDFUL SUB-STEPS ────────────────────────────────
export const MINDFUL_STEPS = ['sit', 'locate', 'describe', 'allow', 'reframe'];
