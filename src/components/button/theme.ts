export default {
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg outline-1 outline-offset-2 focus:outline',
    variantSize: {
      base: {
        SM: 'px-4 py-1.5 text-sm leading-5',
        MD: 'px-6 py-2.5 text-sm leading-5',
        LG: 'px-8 py-4 text-lg leading-7',
      },
      GHOST: {
        SM: 'px-4-1px py-1.5-1px border',
        MD: 'px-6-1px py-2.5-1px border',
        LG: 'px-8-1px py-4-1px border',
      },
    },
    icon: {
      base: 'fill-current',
      size: {
        SM: 'w-4 h-4',
        MD: 'w-4 h-4',
        LG: 'w-7 h-7',
      },
      iconStart: {
        size: {
          SM: '-ml-1 mr-1',
          MD: '-ml-2 mr-2',
          LG: '-ml-3 mr-3',
        },
      },
      iconEnd: {
        size: {
          SM: 'ml-1 -mr-1',
          MD: 'ml-2 -mr-2',
          LG: 'ml-3 -mr-3',
        },
      },
    },
  },
  buttonIcon: {
    base: 'inline-block rounded-full outline-1 outline-offset-2 focus:outline',
    icon: {
      base: 'fill-current inline-block align-top',
      size: {
        SM: 'w-5 h-5',
        MD: 'w-6 h-6',
        LG: 'w-9 h-9',
      },
    },
    variantSize: {
      base: {
        SM: 'p-1.5',
        MD: 'p-2',
        LG: 'p-3',
      },
      GHOST: {
        SM: 'p-1.5-1px border',
        MD: 'p-2-1px border',
        LG: 'p-3-1px border',
      },
    },
  },
  modeVariantTone: {
    LIGHT: {
      SOLID: {
        PRIMARY:
          'bg-primary-500 hover:bg-primary-600 text-white outline-primary-500',
        NEUTRAL:
          'bg-neutral-700 hover:bg-neutral-900 text-white outline-neutral-800',
        CRITICAL:
          'bg-critical-500 hover:bg-critical-600 text-white outline-critical-500',
        WARNING:
          'bg-warning-500 hover:bg-warning-600 text-white outline-warning-500',
        SUCCESS:
          'bg-success-600 hover:bg-success-700 text-white outline-success-600',
        INFORMATIVE:
          'bg-informative-500 hover:bg-informative-600 text-white outline-informative-500',
        disabled: 'bg-neutral-800/[0.16] text-neutral-800/[0.36]',
      },
      GHOST: {
        PRIMARY:
          'hover:bg-primary-500/10 focus:bg-primary-500/10 border-primary-500 focus:border-transparent text-primary-500 outline-primary-500',
        NEUTRAL:
          'hover:bg-neutral-500/10 focus:bg-neutral-500/10 border-neutral-700 focus:border-transparent text-neutral-700 outline-neutral-700',
        CRITICAL:
          'hover:bg-critical-500/10 focus:bg-critical-500/10 border-critical-500 focus:border-transparent text-critical-500 outline-critical-500',
        WARNING:
          'hover:bg-warning-500/10 focus:bg-warning-500/10 border-warning-600 focus:border-transparent text-warning-600 outline-warning-600',
        SUCCESS:
          'hover:bg-success-500/10 focus:bg-success-500/10 border-success-600 focus:border-transparent text-success-600 outline-success-600',
        INFORMATIVE:
          'hover:bg-informative-500/10 focus:bg-informative-500/10 border-informative-500 focus:border-transparent text-informative-500 outline-informative-500',
        disabled: 'border-neutral-800/[0.36] text-neutral-800/[0.36]',
      },
      TRANSPARENT: {
        PRIMARY:
          'hover:bg-primary-500/10 text-primary-500 focus:outline-primary-500',
        NEUTRAL:
          'hover:bg-neutral-500/10 text-neutral-700 focus:outline-neutral-700',
        CRITICAL:
          'hover:bg-critical-500/10 text-critical-500 focus:outline-critical-500',
        WARNING:
          'hover:bg-warning-500/10 text-warning-600 focus:outline-warning-600',
        SUCCESS:
          'hover:bg-success-500/10 text-success-600 focus:outline-success-600',
        INFORMATIVE:
          'hover:bg-informative-500/10 text-informative-500 focus:outline-informative-500',
        disabled: 'text-neutral-800/[0.36]',
      },
    },
    DARK: {
      SOLID: {
        PRIMARY:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        NEUTRAL:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        CRITICAL:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        WARNING:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        SUCCESS:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        INFORMATIVE:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        disabled: 'bg-white/[0.26] text-white/[0.36]',
      },
      GHOST: {
        PRIMARY:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        NEUTRAL:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        CRITICAL:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        WARNING:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        SUCCESS:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        INFORMATIVE:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        disabled: 'border-white/[0.36] text-white/[0.36]',
      },
      TRANSPARENT: {
        PRIMARY: 'hover:bg-white/10 text-white focus:outline-white',
        NEUTRAL: 'hover:bg-white/10 text-white focus:outline-white',
        CRITICAL: 'hover:bg-white/10 text-white focus:outline-white',
        WARNING: 'hover:bg-white/10 text-white focus:outline-white',
        SUCCESS: 'hover:bg-white/10 text-white focus:outline-white',
        INFORMATIVE: 'hover:bg-white/10 text-white focus:outline-white',
        disabled: 'text-white/[0.36]',
      },
    },
  },
}
