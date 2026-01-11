/**
 * SenangStart CSS - Transition & Animation Utility Definitions
 * Transition properties, duration, timing, delay, and animations
 */

// ======================
// TRANSITION PROPERTY
// ======================

export const transitionProperty = {
  name: 'transition-property',
  property: 'visual',
  syntax: 'visual="transition:[value]"',
  description: 'Set transition properties',
  descriptionMs: 'Tetapkan properti peralihan',
  category: 'visual',
  values: [
    { value: 'none', css: 'transition-property: none;', description: 'No transition', descriptionMs: 'Tiada peralihan' },
    { value: 'all', css: 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'All properties', descriptionMs: 'Semua properti' },
    { value: 'colors', css: 'transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Color properties', descriptionMs: 'Properti warna' },
    { value: 'opacity', css: 'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Opacity only', descriptionMs: 'Kelegapan sahaja' },
    { value: 'shadow', css: 'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Shadow only', descriptionMs: 'Bayang sahaja' },
    { value: 'transform', css: 'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;', description: 'Transform only', descriptionMs: 'Transformasi sahaja' }
  ],
  examples: [
    { code: '<button visual="transition:all hover:bg:primary">Smooth hover</button>', description: 'Smooth transition' }
  ]
};

// ======================
// TRANSITION DURATION
// ======================

export const transitionDuration = {
  name: 'transition-duration',
  property: 'visual',
  syntax: 'visual="duration:[value]"',
  description: 'Set transition duration',
  descriptionMs: 'Tetapkan tempoh peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'transition-duration: 75ms;', description: '75ms', descriptionMs: '75ms' },
    { value: 'quick', css: 'transition-duration: 100ms;', description: '100ms', descriptionMs: '100ms' },
    { value: 'fast', css: 'transition-duration: 150ms;', description: '150ms', descriptionMs: '150ms' },
    { value: 'normal', css: 'transition-duration: 200ms;', description: '200ms', descriptionMs: '200ms' },
    { value: 'slow', css: 'transition-duration: 300ms;', description: '300ms', descriptionMs: '300ms' },
    { value: 'slower', css: 'transition-duration: 500ms;', description: '500ms', descriptionMs: '500ms' },
    { value: 'lazy', css: 'transition-duration: 700ms;', description: '700ms', descriptionMs: '700ms' }
  ],
  examples: [
    { code: '<div visual="transition:all duration:slow">Slow transition</div>', description: 'Slow duration' }
  ]
};

// ======================
// TRANSITION TIMING
// ======================

export const transitionTiming = {
  name: 'transition-timing',
  property: 'visual',
  syntax: 'visual="ease:[value]"',
  description: 'Set transition timing function',
  descriptionMs: 'Tetapkan fungsi masa peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'linear', css: 'transition-timing-function: linear;', description: 'Linear timing', descriptionMs: 'Masa linear' },
    { value: 'in', css: 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);', description: 'Ease in', descriptionMs: 'Memasuki mudah' },
    { value: 'out', css: 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);', description: 'Ease out', descriptionMs: 'Keluar mudah' },
    { value: 'in-out', css: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);', description: 'Ease in-out', descriptionMs: 'Masuk-keluar mudah' }
  ],
  examples: [
    { code: '<div visual="transition:all ease:out">Ease out effect</div>', description: 'Ease out timing' }
  ]
};

// ======================
// TRANSITION DELAY
// ======================

export const transitionDelay = {
  name: 'transition-delay',
  property: 'visual',
  syntax: 'visual="delay:[value]"',
  description: 'Set transition delay',
  descriptionMs: 'Tetapkan kelewatan peralihan',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'transition-delay: 75ms;', description: '75ms delay', descriptionMs: 'Kelewatan 75ms' },
    { value: 'quick', css: 'transition-delay: 100ms;', description: '100ms delay', descriptionMs: 'Kelewatan 100ms' },
    { value: 'fast', css: 'transition-delay: 150ms;', description: '150ms delay', descriptionMs: 'Kelewatan 150ms' },
    { value: 'normal', css: 'transition-delay: 200ms;', description: '200ms delay', descriptionMs: 'Kelewatan 200ms' },
    { value: 'slow', css: 'transition-delay: 300ms;', description: '300ms delay', descriptionMs: 'Kelewatan 300ms' }
  ],
  examples: [
    { code: '<div visual="transition:all delay:slow">Delayed transition</div>', description: 'Delayed start' }
  ]
};

// ======================
// ANIMATION
// ======================

export const animation = {
  name: 'animation-builtin',
  property: 'visual',
  syntax: 'visual="animate:[value]"',
  description: 'Apply built-in animations',
  descriptionMs: 'Terapkan animasi terbina dalam',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'none', css: 'animation: none;', description: 'No animation', descriptionMs: 'Tiada animasi' },
    { value: 'spin', css: 'animation: spin 1s linear infinite;', description: 'Spinning', descriptionMs: 'Berpusing' },
    { value: 'ping', css: 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;', description: 'Ping effect', descriptionMs: 'Kesan ping' },
    { value: 'pulse', css: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;', description: 'Pulsing', descriptionMs: 'Berdenyut' },
    { value: 'bounce', css: 'animation: bounce 1s infinite;', description: 'Bouncing', descriptionMs: 'Melantun' }
  ],
  examples: [
    { code: '<div visual="animate:spin">Loading...</div>', description: 'Spinning loader' }
  ]
};

// ======================
// ANIMATION DURATION
// ======================

export const animationDuration = {
  name: 'animation-duration',
  property: 'visual',
  syntax: 'visual="animation-duration:[value]"',
  description: 'Set animation duration',
  descriptionMs: 'Tetapkan tempoh animasi',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'animation-duration: 75ms;', description: '75ms', descriptionMs: '75ms' },
    { value: 'quick', css: 'animation-duration: 100ms;', description: '100ms', descriptionMs: '100ms' },
    { value: 'fast', css: 'animation-duration: 150ms;', description: '150ms', descriptionMs: '150ms' },
    { value: 'normal', css: 'animation-duration: 200ms;', description: '200ms', descriptionMs: '200ms' },
    { value: 'slow', css: 'animation-duration: 300ms;', description: '300ms', descriptionMs: '300ms' },
    { value: 'slower', css: 'animation-duration: 500ms;', description: '500ms', descriptionMs: '500ms' },
    { value: 'lazy', css: 'animation-duration: 700ms;', description: '700ms', descriptionMs: '700ms' }
  ],
  examples: [
    { code: '<div visual="animate:spin animation-duration:slow">Slow spin</div>', description: 'Slow animation' }
  ]
};

// ======================
// ANIMATION DELAY
// ======================

export const animationDelay = {
  name: 'animation-delay',
  property: 'visual',
  syntax: 'visual="animation-delay:[value]"',
  description: 'Set animation delay',
  descriptionMs: 'Tetapkan kelewatan animasi',
  category: 'visual',
  supportsArbitrary: true,
  values: [
    { value: 'instant', css: 'animation-delay: 75ms;', description: '75ms delay', descriptionMs: 'Kelewatan 75ms' },
    { value: 'quick', css: 'animation-delay: 100ms;', description: '100ms delay', descriptionMs: 'Kelewatan 100ms' },
    { value: 'fast', css: 'animation-delay: 150ms;', description: '150ms delay', descriptionMs: 'Kelewatan 150ms' },
    { value: 'normal', css: 'animation-delay: 200ms;', description: '200ms delay', descriptionMs: 'Kelewatan 200ms' },
    { value: 'slow', css: 'animation-delay: 300ms;', description: '300ms delay', descriptionMs: 'Kelewatan 300ms' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-delay:slow">Delayed bounce</div>', description: 'Delayed animation' }
  ]
};

// ======================
// ANIMATION ITERATION
// ======================

export const animationIteration = {
  name: 'animation-iteration',
  property: 'visual',
  syntax: 'visual="animation-iteration:[value]"',
  description: 'Set animation iteration count',
  descriptionMs: 'Tetapkan bilangan ulangan animasi',
  category: 'visual',
  dynamic: true,
  values: [
    { value: '1', css: 'animation-iteration-count: 1;', description: 'Once', descriptionMs: 'Sekali' },
    { value: 'infinite', css: 'animation-iteration-count: infinite;', description: 'Forever', descriptionMs: 'Selamanya' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-iteration:1">Bounce once</div>', description: 'Single iteration' }
  ]
};

// ======================
// ANIMATION DIRECTION
// ======================

export const animationDirection = {
  name: 'animation-direction',
  property: 'visual',
  syntax: 'visual="animation-direction:[value]"',
  description: 'Set animation direction',
  descriptionMs: 'Tetapkan arah animasi',
  category: 'visual',
  values: [
    { value: 'normal', css: 'animation-direction: normal;', description: 'Normal direction', descriptionMs: 'Arah normal' },
    { value: 'reverse', css: 'animation-direction: reverse;', description: 'Reverse direction', descriptionMs: 'Arah terbalik' },
    { value: 'alternate', css: 'animation-direction: alternate;', description: 'Alternate direction', descriptionMs: 'Arah berselang' },
    { value: 'alternate-reverse', css: 'animation-direction: alternate-reverse;', description: 'Alternate reverse', descriptionMs: 'Berselang terbalik' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-direction:alternate">Alternating</div>', description: 'Alternate direction' }
  ]
};

// ======================
// ANIMATION FILL MODE
// ======================

export const animationFill = {
  name: 'animation-fill',
  property: 'visual',
  syntax: 'visual="animation-fill:[value]"',
  description: 'Set animation fill mode',
  descriptionMs: 'Tetapkan mod pengisian animasi',
  category: 'visual',
  values: [
    { value: 'none', css: 'animation-fill-mode: none;', description: 'No fill', descriptionMs: 'Tiada pengisian' },
    { value: 'forwards', css: 'animation-fill-mode: forwards;', description: 'Keep end state', descriptionMs: 'Kekalkan keadaan akhir' },
    { value: 'backwards', css: 'animation-fill-mode: backwards;', description: 'Apply start state', descriptionMs: 'Terapkan keadaan mula' },
    { value: 'both', css: 'animation-fill-mode: both;', description: 'Both directions', descriptionMs: 'Kedua-dua arah' }
  ],
  examples: [
    { code: '<div visual="animate:bounce animation-fill:forwards">Stays at end</div>', description: 'Keep final position' }
  ]
};

// ======================
// ANIMATION PLAY STATE
// ======================

export const animationPlay = {
  name: 'animation-play',
  property: 'visual',
  syntax: 'visual="animation-play:[value]"',
  description: 'Control animation play state',
  descriptionMs: 'Kawal keadaan main animasi',
  category: 'visual',
  values: [
    { value: 'running', css: 'animation-play-state: running;', description: 'Animation running', descriptionMs: 'Animasi berjalan' },
    { value: 'paused', css: 'animation-play-state: paused;', description: 'Animation paused', descriptionMs: 'Animasi dijeda' }
  ],
  examples: [
    { code: '<div visual="animate:spin hover:animation-play:paused">Pause on hover</div>', description: 'Pause on hover' }
  ]
};

// Export all transition/animation definitions
export const transitionDefinitions = {
  transitionProperty,
  transitionDuration,
  transitionTiming,
  transitionDelay,
  animation,
  animationDuration,
  animationDelay,
  animationIteration,
  animationDirection,
  animationFill,
  animationPlay
};

export default transitionDefinitions;
