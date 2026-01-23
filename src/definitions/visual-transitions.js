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
  ],
  preview: [
    {
      title: 'Transition',
      titleMs: 'Peralihan',
      description: 'Smooth property changes',
      descriptionMs: 'Perubahan properti yang lancar',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all">transition:all</button>
</div>`,
      highlightValue: 'transition:all'
    }
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
  ],
  preview: [
    {
      title: 'Duration',
      titleMs: 'Tempoh',
      description: 'Control transition speed',
      descriptionMs: 'Kawal kelajuan peralihan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:fast hover:scale:110">fast</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all duration:slow hover:scale:110">slow</button>
</div>`,
      highlightValue: 'duration:slow'
    }
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
  ],
  preview: [
    {
      title: 'Timing Function',
      titleMs: 'Fungsi Masa',
      description: 'Control acceleration curve',
      descriptionMs: 'Kawal lengkung pecutan',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in hover:scale:110">ease:in</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:out hover:scale:110">ease:out</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all ease:in-out hover:scale:110">ease:in-out</button>
</div>`,
      highlightValue: 'ease:out'
    }
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
  ],
  preview: [
    {
      title: 'Transition Delay',
      titleMs: 'Kelewatan Peralihan',
      description: 'Delay before transition starts',
      descriptionMs: 'Kelewatan sebelum peralihan bermula',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:instant hover:scale:110">instant</button>
  <button space="p:small" visual="bg:primary text:white rounded:small transition:all delay:slow hover:scale:110">slow</button>
</div>`,
      highlightValue: 'delay:slow'
    }
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
  ],
  preview: [
    {
      title: 'Built-in Animations',
      titleMs: 'Animasi Terbina Dalam',
      description: 'Ready-to-use animations',
      descriptionMs: 'Animasi sedia guna',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin">spin</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse">pulse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce">bounce</div>
</div>`,
      highlightValue: 'animate:spin'
    }
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
  ],
  preview: [
    {
      title: 'Animation Duration',
      titleMs: 'Tempoh Animasi',
      description: 'Control animation speed',
      descriptionMs: 'Kawal kelajuan animasi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:fast">fast</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-duration:slow">slow</div>
</div>`,
      highlightValue: 'animation-duration:slow'
    }
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
  ],
  preview: [
    {
      title: 'Animation Delay',
      titleMs: 'Kelewatan Animasi',
      description: 'Delay before animation starts',
      descriptionMs: 'Kelewatan sebelum animasi bermula',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:instant">instant</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:pulse animation-delay:slow">slow</div>
</div>`,
      highlightValue: 'animation-delay:slow'
    }
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
  ],
  preview: [
    {
      title: 'Animation Iteration',
      titleMs: 'Ulangan Animasi',
      description: 'Control number of loops',
      descriptionMs: 'Kawal bilangan gelung',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1">once</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:infinite">infinite</div>
</div>`,
      highlightValue: 'animation-iteration:infinite'
    }
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
  ],
  preview: [
    {
      title: 'Animation Direction',
      titleMs: 'Arah Animasi',
      description: 'Control playback direction',
      descriptionMs: 'Kawal arah main balik',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:normal">normal</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:reverse">reverse</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-direction:alternate">alternate</div>
</div>`,
      highlightValue: 'animation-direction:alternate'
    }
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
  ],
  preview: [
    {
      title: 'Animation Fill',
      titleMs: 'Pengisian Animasi',
      description: 'Control state before/after animation. "forwards" keeps the final state, "none" returns to original.',
      descriptionMs: 'Kawal keadaan sebelum/selepas animasi. "forwards" kekalkan keadaan akhir, "none" kembali kepada asal.',
      html: `<div layout="flex col" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <p visual="text-size:small text:neutral-600 dark:text:neutral-400">Hover to replay animation:</p>
  <div layout="flex" space="g:medium">
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">none (returns)</span>
      <div space="p:small" visual="bg:primary text:white rounded:small animate:bounce animation-iteration:1 animation-fill:none hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">forwards (stays)</span>
      <div space="p:small" visual="bg:success text:white rounded:small animate:bounce animation-iteration:1 animation-fill:forwards hover:animate:bounce">⬆</div>
    </div>
    <div layout="flex col" space="g:tiny">
      <span visual="text-size:tiny text:neutral-500">both</span>
      <div space="p:small" visual="bg:warning text:white rounded:small animate:bounce animation-iteration:1 animation-fill:both hover:animate:bounce">⬆</div>
    </div>
  </div>
</div>`,
      highlightValue: 'animation-fill:forwards'
    }
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
  ],
  preview: [
    {
      title: 'Animation Play State',
      titleMs: 'Keadaan Main Animasi',
      description: 'Pause or resume animations',
      descriptionMs: 'Jeda atau sambung animasi',
      html: `<div layout="flex" space="g:medium p:medium" visual="bg:neutral-100 dark:bg:neutral-900 rounded:medium">
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:running">running</div>
  <div space="p:small" visual="bg:primary text:white rounded:small animate:spin animation-play:paused">paused</div>
</div>`,
      highlightValue: 'animation-play:paused'
    }
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
