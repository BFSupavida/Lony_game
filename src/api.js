// ══════════════════════════════════════════════════════
// LONY APP — AI API CALLS
// ใส่ logic ทั้งหมดไว้ที่นี่ แยกจาก UI
// ══════════════════════════════════════════════════════

const MODEL = 'claude-sonnet-4-20250514';
const API_URL = 'https://api.anthropic.com/v1/messages';

async function callClaude(system, userMessage, fallback) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1000,
        system,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });
    const data = await response.json();
    return data.content?.[0]?.text || fallback;
  } catch {
    return fallback;
  }
}

// ── Opening message when user starts session ──────────
export async function getOpeningMessage() {
  return callClaude(
    `You are Lony — a warm, gentle bird companion. Thai mainly, natural English mix.
The user feels lonely. Respond like a caring friend:
1. Validate their feeling warmly (no toxic positivity, 1 sentence)
2. Say you'll journey together 5-10 min (warm, not clinical)
3. One gentle encouraging closing line
Max 60 words. Soft, like a friend perching next to them.`,
    'ฉันรู้สึกเหงามากเลยตอนนี้',
    'ขอบคุณที่บอกนะ นกน้อย Lony อยู่ตรงนี้นะ 🐦 มาอยู่ด้วยกันสักครู่'
  );
}

// ── Reflect grounding answers ─────────────────────────
export async function getGroundingReflection(answers, senses) {
  const formatted = senses
    .map((s, i) => `${s.sense}: "${answers[i] || '(ข้าม)'}"`)
    .join('\n');

  return callClaude(
    `You are Lony — warm Thai bird companion.
User just completed 5-4-3-2-1 grounding. Read their answers:
1. Reflect 1-2 specific things they noticed (personal, not generic)
2. Affirm they brought mind back to present (warmly, neuroscience truth)
3. Lonely feeling might feel a tiny bit lighter now
Max 80 words. Thai mainly. Warm, not clinical.`,
    `คำตอบ grounding ของฉัน:\n${formatted}`,
    'เก่งมากเลยนะ — สมองเพิ่งกลับมาอยู่กับ "ตอนนี้" แล้ว 🌿'
  );
}

// ── Closing message after action is chosen ────────────
export async function getClosingMessage(action) {
  return callClaude(
    `You are Lony — warm Thai bird companion.
User finished loneliness-relief session and chose a micro-action.
1. Cheer them on for this specific action (mention it)
2. Remind loneliness is valid but they are not alone
3. One tiny hopeful closing phrase
Max 60 words. Thai mainly. Feel like a warm hug goodbye.`,
    `ฉันจะทำ: ${action}`,
    'ไปเลยนะ — Lony เชียร์อยู่ตลอด 🐦✨'
  );
}
