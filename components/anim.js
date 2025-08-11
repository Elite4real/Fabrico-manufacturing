// components/anim.js
export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.7,
};

export const fadeUp = (delay = 0, dist = 24) => ({
  initial: { opacity: 0, y: dist },
  whileInView: { opacity: 1, y: 0 },
  transition: { ...spring, delay },
  viewport: { once: true, amount: 0.3 },
});

export const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay },
  viewport: { once: true, amount: 0.3 },
});

export const stagger = (delayChildren = 0.1, staggerChildren = 0.08) => ({
  whileInView: { opacity: 1 },
  initial: { opacity: 1 },
  transition: { delayChildren, staggerChildren },
  viewport: { once: true, amount: 0.25 },
});

export const pop = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { ...spring },
  viewport: { once: true, amount: 0.3 },
};

export const floatY = (amp = 8, dur = 3) => ({
  animate: { y: [0, -amp, 0, amp, 0] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut" },
});
