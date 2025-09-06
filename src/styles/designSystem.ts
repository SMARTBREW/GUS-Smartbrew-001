export const DESIGN_SYSTEM = {
  typography: {
    heroTitle: "text-4xl sm:text-5xl lg:text-6xl font-normal mb-6",
    sectionTitle: "text-4xl sm:text-5xl lg:text-6xl font-normal mb-6", 
    subsectionTitle: "text-2xl sm:text-3xl font-normal text-gray-800 mb-4 text-center",
    cardTitle: "text-xl sm:text-2xl font-normal text-gray-800 mb-4",
    bodyText: "text-lg text-gray-600 leading-relaxed",
    subtitleText: "text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light",
    statsNumber: "text-3xl sm:text-4xl font-normal text-gray-800 mb-2",
    statsLabel: "text-gray-600",
  },
  colors: {
    primary: "text-red-600",
    primaryBg: "bg-red-600",
    primaryHover: "hover:bg-red-700",
    primaryGradient: "from-red-600 to-red-700",
    primaryLight: "bg-red-100",
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-700", 
    textMuted: "text-gray-600",
    bgWhite: "bg-white",
    bgGray: "bg-gray-50",
    bgDark: "bg-gray-800",
  },
  spacing: {
    sectionPadding: "py-12",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    cardPadding: "p-8",
    cardPaddingSmall: "p-6",
    marginBottom: "mb-12",
    marginBottomSmall: "mb-6",
  },
  effects: {
    shadow: "shadow",
    shadowLg: "shadow-lg",
    shadowSm: "shadow-sm",
    rounded: "rounded-2xl",
    roundedSmall: "rounded-xl",
    transition: "transition-all duration-200",
    hover: "hover:shadow-lg hover:-translate-y-1",
  },
  layout: {
    gridGap: "gap-8",
    gridGapSmall: "gap-6",
    flexSpace: "space-y-6",
    flexSpaceSmall: "space-y-4",
  }
} as const;

export const getConsistentStyles = {
  heroSection: () => `${DESIGN_SYSTEM.spacing.sectionPadding} ${DESIGN_SYSTEM.colors.bgWhite}`,
  sectionContainer: () => DESIGN_SYSTEM.spacing.container,
  card: (variant: 'default' | 'highlighted' = 'default') => {
    const base = `${DESIGN_SYSTEM.effects.rounded} ${DESIGN_SYSTEM.spacing.cardPadding} ${DESIGN_SYSTEM.effects.shadow} ${DESIGN_SYSTEM.effects.transition}`;
    const variantStyles = {
      default: `${DESIGN_SYSTEM.colors.bgWhite} ${DESIGN_SYSTEM.effects.hover}`,
      highlighted: `${DESIGN_SYSTEM.colors.bgGray} ${DESIGN_SYSTEM.effects.hover}`,
    };
    return `${base} ${variantStyles[variant]}`;
  },
  statsCard: () => `text-center`,
  iconContainer: () => `w-12 h-12 ${DESIGN_SYSTEM.colors.primaryLight} rounded-full flex items-center justify-center`,
};
