// 🎨 DESIGN HERE: Progress indicator
import { COLORS, STEPS } from '../constants.js';
export { STEPS } from '../constants.js';

export function ProgressDots({ current }) {
  const idx = STEPS.findIndex(s => s.id === current);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 18 }}>
      {STEPS.map((s, i) => (
        <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: i < 4 ? 1 : 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
            background: i <= idx ? COLORS.primary : 'rgba(255,255,255,0.6)',
            border: `2px solid ${i <= idx ? COLORS.primary : 'rgba(255,255,255,0.8)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
            boxShadow: i === idx ? `0 0 0 4px rgba(45,106,79,0.25)` : 'none',
            transition: 'all 0.3s',
          }}>
            {i < idx
              ? <span style={{ color: 'white', fontWeight: 900, fontSize: 10 }}>✓</span>
              : <span style={{ filter: i > idx ? 'grayscale(1) opacity(0.5)' : 'none' }}>{s.icon}</span>
            }
          </div>
          {i < 4 && (
            <div style={{
              flex: 1, height: 2,
              background: i < idx ? COLORS.primary : 'rgba(255,255,255,0.5)',
              transition: 'background 0.3s',
            }} />
          )}
        </div>
      ))}
    </div>
  );
}
