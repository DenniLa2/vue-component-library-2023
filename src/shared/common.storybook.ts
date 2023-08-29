import { booleans, colors, sizes } from '@/shared/constants.storybook.ts'
import { EIconColor, EIconSize } from '@/types/icon.types.ts'

export const defaultIconArgTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: colors,
  },
  size: {
    control: {
      type: 'inline-radio',
    },
    options: sizes,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    options: booleans,
  },
  height: {
    table: {
      disable: true,
    }
  },
  width: {
    table: {
      disable: true,
    }
  },
  direction: {
    table: {
      disable: true,
    }
  },
  type: {
    table: {
      disable: true,
    }
  },
}

export const defaultBgIconArgTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: colors,
  },
  badgeColor: {
    control: {
      type: 'select',
    },
    options: colors,
  },
  bgColor: {
    control: {
      type: 'select',
    },
    options: colors,
  },
  size: {
    control: {
      type: 'inline-radio',
    },
    options: sizes,
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    options: booleans,
  },
  height: {
    table: {
      disable: true,
    }
  },
  width: {
    table: {
      disable: true,
    }
  },
  direction: {
    table: {
      disable: true,
    }
  },
  type: {
    table: {
      disable: true,
    }
  },
}

export const defaultIconArgs = {
  color: EIconColor.primary,
  size: EIconSize.sm,
  disabled: false
}

export const defaultBgIconArgs = {
  color: EIconColor.primary,
  badgeColor: EIconColor.success,
  bgColor: undefined,
  size: EIconSize.mega,
  disabled: false
}