// 🎨 DESIGN HERE: AI response bubble
import { COLORS, FONTS } from '../constants.js';

export function AIBubble({ text, accent = 'green', type = 'normal' }) {
  const accentColor = accent === 'gold' ? COLORS.gold : COLORS.primary;
  return (
    <div style={{
      background: 'rgba(255,255,255,0.65)',
      borderRadius: 18,
      padding: 16,
      border: '1px solid rgba(255,255,255,0.75)',
      borderLeft: `4px solid ${accentColor}`,
      marginBottom: 16,
      marginTop: 8,
    }}>
      {type === 'science' && (
        <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.primary, letterSpacing: 1.2, marginBottom: 6 }}>
          🧠 SCIENCE NOTE
        </div>
      )}
      {type === 'normal' && (
        <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.primary, letterSpacing: 1.2, marginBottom: 6 }}>
          🐦 LONY
        </div>
      )}
      <div style={{ fontSize: 14, color: COLORS.textMid, fontFamily: FONTS.body, lineHeight: 1.85 }}>
        {text}
      </div>
    </div>
  );
}
