// 🎨 DESIGN HERE: Micro action selection card
import { COLORS, FONTS } from '../constants.js';

export function ActionCard({ action, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: selected ? 'rgba(216,243,220,0.92)' : 'rgba(255,255,255,0.65)',
        border: `1.5px solid ${selected ? COLORS.primary : 'rgba(255,255,255,0.72)'}`,
        borderRadius: 16,
        padding: '11px 14px',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        boxShadow: selected ? `0 3px 12px ${COLORS.primary}33` : 'none',
        transition: 'all 0.15s',
        marginBottom: 9,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ fontSize: 22, flexShrink: 0 }}>{action.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.textDark, marginBottom: 2, fontFamily: FONTS.heading }}>
            {action.action}
          </div>
          <div style={{ fontSize: 10, color: COLORS.textMuted, lineHeight: 1.5 }}>{action.why}</div>
        </div>
        <div style={{
          flexShrink: 0, background: COLORS.primary, color: 'white',
          borderRadius: 10, padding: '2px 8px', fontSize: 10, fontWeight: 700,
          fontFamily: FONTS.body, whiteSpace: 'nowrap',
        }}>
          {action.time}
        </div>
      </div>
    </button>
  );
}
