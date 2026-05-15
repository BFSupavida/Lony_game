// 🎨 DESIGN HERE: Card style, background, border, shadow
import { COLORS, SHAPE, SHADOW } from '../constants.js';

export function GlassCard({ children, style = {} }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: 390,
      // 🎨 เปลี่ยน background ของ card ที่นี่
      background: COLORS.bgCard,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: SHAPE.cardRadius,
      border: `1.5px solid ${COLORS.bgCardBorder}`,
      padding: '24px 22px',
      boxSizing: 'border-box',
      boxShadow: SHADOW.card,
      ...style,
    }}>
      {children}
    </div>
  );
}
