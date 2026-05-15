# 🎨 Lony App — Design Guide

## โครงสร้างไฟล์

```
src/
├── constants.js          ← 🎨 Design tokens (สี, font, ขนาด) — แก้ที่นี่ก่อน
├── api.js                ← AI prompts — แก้ tone ของ Lony
├── hooks.js              ← App state & timers — ไม่ต้องแก้
├── App.jsx               ← Flow & logic — ไม่ต้องแก้
├── index.css             ← Global styles & animations
└── components/
    ├── Shell.jsx         ← 🎨 Background + Header + Logo
    ├── GlassCard.jsx     ← 🎨 Card container
    ├── PrimaryButton.jsx ← 🎨 ปุ่มหลัก (เขียว)
    ├── GhostButton.jsx   ← 🎨 ปุ่มรอง
    ├── Badge.jsx         ← 🎨 Label tags
    ├── ProgressDots.jsx  ← 🎨 Progress indicator
    ├── AIBubble.jsx      ← 🎨 AI response bubble
    ├── SenseCard.jsx     ← 🎨 Grounding sense card
    └── ActionCard.jsx    ← 🎨 Micro action card
```

## วิธีเปลี่ยน Design

### 1. เปลี่ยนสีทั้งแอป
แก้ `constants.js` → `COLORS` object

### 2. เปลี่ยน Font
```js
// constants.js
export const FONTS = {
  logo:    "'Nickainley One', cursive",  // ← ใส่ชื่อ font ที่ต้องการ
  heading: "'Banburi', sans-serif",
  body:    "'Noto Sans Thai', sans-serif",
};
```
แล้วเพิ่ม @import ใน `index.html`

### 3. เปลี่ยน Background
```jsx
// Shell.jsx
// Uncomment บรรทัดนี้ แล้วใส่รูปของคุณ:
<img src="/public/bd_homepage.jpg" style={{ position:'fixed', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }} />
```

### 4. เพิ่ม Logo / Mascot SVG
```jsx
// Shell.jsx — แทนที่ข้อความ "Lony" ด้วย SVG
<svg>...</svg>  {/* ← นก Lony SVG */}
```

### 5. เปลี่ยน Card style
```jsx
// GlassCard.jsx
background: 'rgba(255,255,255,0.52)',  // ← เปลี่ยน opacity
backdropFilter: 'blur(20px)',           // ← เปลี่ยน blur
borderRadius: 24,                       // ← เปลี่ยน corner radius
```

## Setup

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build → dist/
```

## Deploy (Vercel)
```bash
npm i -g vercel
vercel             # follow prompts
```

## API Key
แอปใช้ Anthropic API โดยอัตโนมัติผ่าน Claude.ai
ถ้า deploy เอง ต้องเพิ่ม proxy server หรือใช้ environment variable

