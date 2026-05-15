// ══════════════════════════════════════════════════════
// LONY APP — CUSTOM HOOKS
// ══════════════════════════════════════════════════════
import { useState, useEffect, useRef } from 'react';

// ── Timer hook ────────────────────────────────────────
export function useTimer(running) {
  const [elapsed, setElapsed] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      clearInterval(ref.current);
    }
    return () => clearInterval(ref.current);
  }, [running]);

  const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// ── Countdown hook ────────────────────────────────────
export function useCountdown(startValue, active, onComplete) {
  const [count, setCount] = useState(startValue);
  const ref = useRef(null);

  useEffect(() => {
    if (!active) {
      setCount(startValue);
      return;
    }
    setCount(startValue);
    let c = startValue;
    ref.current = setInterval(() => {
      c--;
      setCount(c);
      if (c <= 0) {
        clearInterval(ref.current);
        onComplete?.();
      }
    }, 1000);
    return () => clearInterval(ref.current);
  }, [active]);

  return count;
}

// ── App state hook ────────────────────────────────────
export function useLonyApp() {
  const [phase, setPhase] = useState('start');
  const [openingText, setOpeningText] = useState('');
  const [groundingText, setGroundingText] = useState('');
  const [closingText, setClosingText] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);

  // Grounding
  const [senseStep, setSenseStep] = useState(0);
  const [answers, setAnswers] = useState(['', '', '', '', '']);
  const [currentAnswer, setCurrentAnswer] = useState('');

  // Micro action
  const [selectedAction, setSelectedAction] = useState(null);

  // Compassion
  const [mindfulStep, setMindfulStep] = useState('sit');
  const [sitActive, setSitActive] = useState(false);
  const [pauseActive, setPauseActive] = useState(false);
  const [compassionDone, setCompassionDone] = useState(false);
  const [lonelyLocation, setLonelyLocation] = useState('');
  const [lonelyDescription, setLonelyDescription] = useState('');

  const reset = () => {
    setPhase('start');
    setOpeningText(''); setGroundingText(''); setClosingText('');
    setLoadingAI(false);
    setSenseStep(0); setAnswers(['', '', '', '', '']); setCurrentAnswer('');
    setSelectedAction(null);
    setMindfulStep('sit'); setSitActive(false); setPauseActive(false);
    setCompassionDone(false); setLonelyLocation(''); setLonelyDescription('');
  };

  return {
    // State
    phase, setPhase,
    openingText, setOpeningText,
    groundingText, setGroundingText,
    closingText, setClosingText,
    loadingAI, setLoadingAI,
    senseStep, setSenseStep,
    answers, setAnswers,
    currentAnswer, setCurrentAnswer,
    selectedAction, setSelectedAction,
    mindfulStep, setMindfulStep,
    sitActive, setSitActive,
    pauseActive, setPauseActive,
    compassionDone, setCompassionDone,
    lonelyLocation, setLonelyLocation,
    lonelyDescription, setLonelyDescription,
    reset,
  };
}
