// 🎨 DESIGN HERE: Primary button style
import { COLORS, SHAPE, SHADOW, FONTS } from '../constants.js';

export function PrimaryButton({ children, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%',
        padding: '15px 0',
        // 🎨 เปลี่ยนรูปร่างปุ่มที่นี่
        borderRadius: SHAPE.buttonRadius,
        background: disabled ? '#A0C4B0' : COLORS.primary,
        color: 'white',
        fontWeight: 800,
        fontSize: 15,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: FONTS.body,
        boxShadow: disabled ? 'none' : SHADOW.button,
        letterSpacing: 0.3,
        transition: 'all 0.2s',
        marginTop: 12,
      }}
    >
      {children}
    </button>
  );
}
