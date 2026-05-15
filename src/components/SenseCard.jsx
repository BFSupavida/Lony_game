// 🎨 DESIGN HERE: Grounding sense display card
import { COLORS, FONTS } from '../constants.js';

export function SenseCard({ sense }) {
  return (
    <div style={{
      background: sense.bg,
      borderRadius: 20,
      padding: '18px 16px',
      border: `1.5px solid ${sense.color}44`,
      marginBottom: 16,
      textAlign: 'center',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    }}>
      <div style={{ fontSize: 40, marginBottom: 4 }}>{sense.icon}</div>
      <div style={{ fontSize: 42, fontWeight: 900, color: sense.color, lineHeight: 1 }}>{sense.num}</div>
      <div style={{ fontSize: 16, fontWeight: 800, color: COLORS.textDark, marginBottom: 6, fontFamily: FONTS.heading }}>
        สิ่งที่{sense.sense}
      </div>
      <div style={{ fontSize: 14, color: COLORS.textMid, fontFamily: FONTS.body, lineHeight: 1.7 }}>
        {sense.prompt}
      </div>
      <div style={{ fontSize: 11, color: COLORS.textMuted, fontStyle: 'italic', marginTop: 4 }}>
        💭 {sense.guide}
      </div>
    </div>
  );
}
