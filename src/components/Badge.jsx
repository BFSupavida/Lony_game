// 🎨 DESIGN HERE: Badge/label pill
import { COLORS, FONTS } from '../constants.js';

export function Badge({ children, color }) {
  return (
    <span style={{
      display: 'inline-block',
      background: color || COLORS.primary,
      color: 'white',
      borderRadius: 20,
      padding: '4px 14px',
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      fontFamily: FONTS.body,
      marginBottom: 14,
    }}>
      {children}
    </span>
  );
}
