// 🎨 DESIGN HERE: Ghost/secondary button
import { COLORS, FONTS } from '../constants.js';

export function GhostButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        padding: '12px 0',
        borderRadius: 50,
        marginTop: 10,
        background: 'rgba(255,255,255,0.35)',
        border: '1.5px solid rgba(255,255,255,0.7)',
        color: COLORS.textDark,
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: FONTS.body,
      }}
    >
      {children}
    </button>
  );
}
