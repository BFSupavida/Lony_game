// ══════════════════════════════════════════════════════
// LONY APP — MAIN APP COMPONENT
// ออกแบบ UI ได้อิสระใน components/ แต่ละไฟล์
// logic และ flow อยู่ที่นี่
// ══════════════════════════════════════════════════════
import { useEffect } from 'react';
import { useLonyApp, useTimer, useCountdown } from './hooks.js';
import { getOpeningMessage, getGroundingReflection, getClosingMessage } from './api.js';
import { SENSES, MICRO_ACTIONS, COMPASSION_PHRASES, BODY_LOCATIONS, EMOTION_DESCRIPTORS, MINDFUL_STEPS } from './constants.js';

// ── UI Components — แก้ไฟล์เหล่านี้เพื่อเปลี่ยน design ──
import { Shell }          from './components/Shell.jsx';
import { ProgressDots }   from './components/ProgressDots.jsx';
import { GlassCard }      from './components/GlassCard.jsx';
import { PrimaryButton }  from './components/PrimaryButton.jsx';
import { GhostButton }    from './components/GhostButton.jsx';
import { Badge }          from './components/Badge.jsx';
import { AIBubble }       from './components/AIBubble.jsx';
import { SenseCard }      from './components/SenseCard.jsx';
import { ActionCard }     from './components/ActionCard.jsx';

export default function App() {
  const state = useLonyApp();
  const timer = useTimer(state.phase !== 'start');

  // Sit countdown (30s)
  const sitCount = useCountdown(30, state.sitActive, () => {
    state.setSitActive(false);
    state.setMindfulStep('locate');
  });

  // Neuroplasticity pause (15s)
  const pauseCount = useCountdown(15, state.pauseActive, () => {
    state.setPauseActive(false);
    state.setCompassionDone(true);
  });

  // ── Start session ──────────────────────────────────
  const startSession = async () => {
    state.setPhase('welcome');
    state.setLoadingAI(true);
    const text = await getOpeningMessage();
    state.setOpeningText(text);
    state.setLoadingAI(false);
  };

  // ── Next sense (grounding) ─────────────────────────
  const nextSense = async () => {
    const updated = [...state.answers];
    updated[state.senseStep] = state.currentAnswer;
    state.setAnswers(updated);
    state.setCurrentAnswer('');

    if (state.senseStep < 4) {
      state.setSenseStep(state.senseStep + 1);
    } else {
      // All senses done → get AI reflection
      state.setSenseStep(5);
      state.setLoadingAI(true);
      const text = await getGroundingReflection(updated, SENSES);
      state.setGroundingText(text);
      state.setLoadingAI(false);
    }
  };

  // ── Select micro action ────────────────────────────
  const selectAction = async (action) => {
    state.setSelectedAction(action);
    state.setLoadingAI(true);
    const text = await getClosingMessage(action.action);
    state.setClosingText(text);
    state.setLoadingAI(false);
    state.setPhase('done');
  };

  // ══════════════════════════════════════════════════
  // RENDER — แต่ละ phase
  // ══════════════════════════════════════════════════
  return (
    <Shell phase={state.phase}>

      {/* ── START ──────────────────────────────────── */}
      {state.phase === 'start' && (
        <GlassCard>
          <Badge>Lony - LONELINESS RELIEF</Badge>

          {/* 🎨 DESIGN ZONE: Logo + Mascot */}
          {/* <h1 className="lony-logo">Lony</h1> */}
          {/* ↑ ใส่รูปนก SVG หรือ mascot ตรงนี้ */}

          <br />  
          <h2 style={{ marginTop: 16, marginBottom: 8 }}>รู้สึกเหงาอยู่ใช่ไหม?</h2>
          <p style={{ marginBottom: 20 }}>
            นกน้อย Lony อยู่ตรงนี้นะ 🤍 มาทำ session
            5-10 นาที ทำให้ความรู้สึกดีขึ้นได้จริง ๆ
          </p>
                  <br />  



          {/* Science steps */}
          <div className="steps-box">
            <span className="label">🧠 3 STEPS · NEUROSCIENCE-BASED</span>
            {[
              { icon: '🌿', step: 'Somatic Grounding',  desc: ' นำสมองออกจาก threat mode' },
              { icon: '🤍', step: 'Self-Compassion',     desc: ' กระตุ้น Oxytocin pathway' },
              { icon: '✨', step: 'Micro Action',        desc: ' เปิด Dopamine reward loop' },
            ].map((s, i) => (
              <div key={i} className="step-row">
                <span>{s.icon}</span><strong>{s.step}</strong>
                <div>
                  <small>{s.desc}</small>
                </div>
              </div>
            ))}
          </div>

          <PrimaryButton onClick={startSession}>เริ่ม session เลย →</PrimaryButton>
          <small style={{ textAlign: 'center', display: 'block', marginTop: 10 }}>
            ข้อมูลทั้งหมดเป็นส่วนตัว 🔒
          </small>
        </GlassCard>
      )}

      {/* ── WELCOME ────────────────────────────────── */}
      {state.phase === 'welcome' && (
        <GlassCard>
          <ProgressDots current="welcome" />
          <div className="row-between">
            <Badge>STEP 1 OF 3</Badge>
            <span className="timer"> ⏱ {timer}</span>
          </div>

          {state.loadingAI
            ? <div className="loading-state">🐦 Lony กำลังพิมพ์...</div>
            : <AIBubble text={state.openingText} />
          }

          {!state.loadingAI && (
            <PrimaryButton onClick={() => state.setPhase('grounding')}>
              พร้อมแล้ว ไปต่อเลย 🌿
            </PrimaryButton>
          )}
        </GlassCard>
      )}

      {/* ── GROUNDING ──────────────────────────────── */}
      {state.phase === 'grounding' && (() => {
        const sense = SENSES[Math.min(state.senseStep, 4)];
        const isDone = state.senseStep === 5;

        return (
          <GlassCard>
            <ProgressDots current="grounding" />
            <div className="row-between">
              <Badge>5-4-3-2-1 GROUNDING</Badge>
              <span className="timer"> ⏱ {timer}</span>
            </div>

            {!isDone ? (
              <>
                {/* Progress dots */}
                <div className="sense-progress">
                  {SENSES.map((_, i) => (
                    <div key={i} className={`sense-dot ${i <= state.senseStep ? 'active' : ''}`}
                      style={{ background: i <= state.senseStep ? sense.color : undefined }} />
                  ))}
                </div>

                {/* 🎨 DESIGN ZONE: Sense card */}
                <SenseCard sense={sense} />

                <small>{sense.hint}</small>
                {/* <textarea
                  className="lony-textarea"
                  rows={2}
                  placeholder={sense.hint}
                  value={state.currentAnswer}
                  onChange={e => state.setCurrentAnswer(e.target.value)}
                /> */}

                <PrimaryButton onClick={nextSense}>
                  {state.senseStep < 4
                    ? `ถัดไป → (${SENSES[state.senseStep + 1]?.sense || ''})`
                    : 'จบ Grounding ✓'
                  }
                </PrimaryButton>
                <GhostButton onClick={() => { state.setCurrentAnswer(''); nextSense(); }}>
                  ข้ามอันนี้ได้เลย
                </GhostButton>
              </>
            ) : (
              <>
                <div className="center-content">
                  <div className="mascot-anim">🐦</div>
                  <h2>เยี่ยมมากเลย!</h2>
                  <small>สมองกลับมาอยู่กับ "ตอนนี้" แล้ว</small>
                </div>

                {state.loadingAI
                  ? <div className="loading-state">🌿 Lony กำลังรับรู้...</div>
                  : <AIBubble text={state.groundingText} accent="green" />
                }

                {!state.loadingAI && (
                  <PrimaryButton onClick={() => state.setPhase('compassion')}>
                    ไปขั้นต่อไป 🤍
                  </PrimaryButton>
                )}
              </>
            )}
          </GlassCard>
        );
      })()}

      {/* ── COMPASSION ─────────────────────────────── */}
      {state.phase === 'compassion' && (
        <GlassCard>
          <ProgressDots current="compassion" />
          <div className="row-between">
            <Badge>MINDFUL → COMPASSION</Badge>
            <span className="timer"> ⏱ {timer}</span>
          </div>

          {/* Sub-step progress */}
          <div className="sense-progress">
            {MINDFUL_STEPS.map((s, i) => (
              <div key={s} className={`sense-dot ${i <= MINDFUL_STEPS.indexOf(state.mindfulStep) ? 'active' : ''}`} />
            ))}
          </div>

          {/* SIT */}
          {state.mindfulStep === 'sit' && (
            <div>
              <h2>แค่นั่งกับมันก่อน 🌑</h2>
              <p>ไม่ต้องแก้ไข ไม่ต้องผลักออก แค่รับรู้ว่ามันอยู่ตรงนี้ (30 วิ)
              </p>
              {!state.sitActive && sitCount === 30 && (
                <PrimaryButton onClick={() => state.setSitActive(true)}>
                  เริ่มนั่งด้วยกัน 30 วิ
                </PrimaryButton>
              )}
              {state.sitActive && (
                <div className="countdown-display dark">
                  {/* <div className="countdown-orb">🌑</div> */}
                  <div className="countdown-orb"></div>
                  <div className="countdown-number">{sitCount}</div>
                  <small className="countdown-subtitle">แค่นั่งอยู่กับมัน</small>
                </div>
              )}
              {!state.sitActive && sitCount < 30 && (
                <>
                  <AIBubble text="นั่งกับความเหงาได้แล้ว — นี่คือ Mindful Awareness ✓" />
                  <PrimaryButton onClick={() => state.setMindfulStep('locate')}>
                    ถัดไป — ระบุตำแหน่ง 📍
                  </PrimaryButton>
                </>
              )}
            </div>
          )}

          {/* LOCATE */}
          {state.mindfulStep === 'locate' && (
            <div>
              <h2>ความเหงาอยู่ที่ไหนในร่างกาย? 📍</h2>
              <p>หลับตาสักครู่ สแกนร่างกายช้าๆ</p>
              <div className="grid-2">
                {BODY_LOCATIONS.map(loc => (
                  <button key={loc} className={`chip ${state.lonelyLocation === loc ? 'active' : ''}`}
                    onClick={() => state.setLonelyLocation(loc)}>{loc}</button>
                ))}
              </div>
              {state.lonelyLocation && (
                <AIBubble text={`📍 อยู่ที่ ${state.lonelyLocation}`} />
              )}
              <PrimaryButton disabled={!state.lonelyLocation}
                onClick={() => state.setMindfulStep('describe')}>
                ถัดไป — บรรยาย 🔍
              </PrimaryButton>
            </div>
          )}

          {/* DESCRIBE */}
          {state.mindfulStep === 'describe' && (
            <div>
              <h2>มันรู้สึกยังไง? 🔍</h2>
              <p>บรรยายเหมือนเป็นนักสังเกตการณ์</p>
              <div className="chip-wrap">
                {EMOTION_DESCRIPTORS.map(d => {
                  const sel = state.lonelyDescription.includes(d);
                  return (
                    <button key={d} className={`chip ${sel ? 'active' : ''}`}
                      onClick={() => {
                        if (sel) state.setLonelyDescription(state.lonelyDescription.replace(d + ', ', '').replace(d, '').trim());
                        else state.setLonelyDescription(p => p ? p + ', ' + d : d);
                      }}>{d}</button>
                  );
                })}
              </div>
              <textarea className="lony-textarea" rows={2}
                placeholder="หรือพิมพ์เองก็ได้..."
                value={state.lonelyDescription}
                onChange={e => state.setLonelyDescription(e.target.value)} />
              {state.lonelyDescription && (
                <AIBubble text={`🔍 ที่ ${state.lonelyLocation} รู้สึก ${state.lonelyDescription}`} />
              )}
              <PrimaryButton disabled={!state.lonelyDescription}
                onClick={() => state.setMindfulStep('allow')}>
                ถัดไป — อนุญาต 🕊️
              </PrimaryButton>
            </div>
          )}

          {/* ALLOW */}
          {state.mindfulStep === 'allow' && (
            <div>
              <h2>บอกกับความเหงาว่า... 🕊️</h2>
              <p>พูดในใจ — ไม่ต้องชอบมัน แค่ไม่ต่อสู้</p>
              <div className="allow-box dark">
                <div>🕊️</div>
                <p>"ฉันเห็นแกนะ ความเหงาที่{state.lonelyLocation} ที่รู้สึก{state.lonelyDescription}"</p>
                <p className="allow-phrase">"— และฉันอนุญาตให้แกอยู่ตรงนี้ได้"</p>
              </div>
              <PrimaryButton onClick={() => state.setMindfulStep('reframe')}>
                พูดแล้ว — ไปขั้นสุดท้าย 🤍
              </PrimaryButton>
            </div>
          )}

          {/* REFRAME */}
          {state.mindfulStep === 'reframe' && (
            <div>
              <div className="center-content">
                <div style={{ fontSize: 36 }}>🤲</div>
                <h2>วางมือบนหัวใจ</h2>
                <p>พูดในใจช้าๆ ทีละประโยค</p>
              </div>
              <div className="phrase-list">
                {COMPASSION_PHRASES.map((p, i) => (
                  <div key={i} className={`phrase-card ${i % 2 === 0 ? 'green' : 'cream'}`}>"{p}"</div>
                ))}
              </div>
              {!state.compassionDone && !state.pauseActive && (
                <PrimaryButton onClick={() => state.setPauseActive(true)}>
                  พูดครบแล้ว — ซึมซับ 15 วิ 🧠
                </PrimaryButton>
              )}
              {state.pauseActive && (
                <div className="countdown-display light">
                  <br />
                  <div className="countdown-number green">{pauseCount}</div>
                  <br />
                  <small>Neuroplasticity กำลังทำงาน 🧠</small>
                </div>
              )}
              {state.compassionDone && (
                <>
                  <AIBubble text="Mindful Awareness → Self-Compassion ลด Amygdala + เพิ่ม Oxytocin ~40% — Neff & Germer, 2013" type="science" />
                  <PrimaryButton onClick={() => state.setPhase('action')}>
                    ไปขั้นสุดท้าย ✨
                  </PrimaryButton>
                </>
              )}
            </div>
          )}
        </GlassCard>
      )}

      {/* ── ACTION ─────────────────────────────────── */}
      {state.phase === 'action' && (
        <GlassCard>
          <ProgressDots current="action" />
          <div className="row-between">
            <Badge>MICRO ACTION · DOPAMINE</Badge>
            <span className="timer"> ⏱ {timer}</span>
          </div>

          <div className="center-content">
            <div style={{ fontSize: 36 }}>✨</div>
            <h2>เลือก 1 อย่างทำตอนนี้</h2>
            <small>Micro-action เล็กๆ เปิด Dopamine reward loop</small>
          </div>

          <div className="action-list">
            {MICRO_ACTIONS.map((a, i) => (
              <ActionCard
                key={i}
                action={a}
                selected={state.selectedAction?.action === a.action}
                onClick={() => selectAction(a)}
              />
            ))}
          </div>

          {state.loadingAI && <div className="loading-state">✨ Lony กำลังส่งกำลังใจ...</div>}
        </GlassCard>
      )}

      {/* ── DONE ───────────────────────────────────── */}
      {state.phase === 'done' && (
        <GlassCard>
          <ProgressDots current="done" />

          <div className="center-content">
            <div className="mascot-anim">🐦</div>
            <h1>เสร็จแล้ว! 🌸</h1>
            <small>{timer} — session นี้ใช้เวลาแค่นี้เอง</small>
          </div>

          <div className="summary-box">
            <span className="label">✦ สิ่งที่คุณทำได้วันนี้</span>
            {[
              { icon: '🌿', text: '5-4-3-2-1 Grounding: นำสมองกลับสู่ปัจจุบัน' },
              { icon: '🌑', text: `Mindful Awareness: ที่ "${state.lonelyLocation || 'ร่างกาย'}" รู้สึก "${state.lonelyDescription || 'สังเกตได้'}"` },
              { icon: '🤍', text: 'Self-Compassion: กระตุ้น Oxytocin pathway' },
              { icon: '✨', text: `Micro Action: ${state.selectedAction?.action || ''}` },
            ].map((s, i) => (
              <div key={i} className="summary-row">
                <span>{s.icon}</span>
                <span>{s.text}</span>
              </div>
            ))}
          </div>

          {state.closingText && <AIBubble text={state.closingText} accent="gold" />}

          <PrimaryButton onClick={state.reset}>ทำ session ใหม่ →</PrimaryButton>
          <small style={{ textAlign: 'center', display: 'block', marginTop: 12 }}>
            ความเหงาผ่านไปได้นะ — คุณไม่ได้อยู่คนเดียว 🤍
          </small>
        </GlassCard>
      )}

    </Shell>
  );
}
