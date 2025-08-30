// Design System Constants for Perfect Consistency

export const DESIGN_SYSTEM = {
  // Typography
  typography: {
    // Hero titles (main page titles)
    heroTitle: "text-4xl sm:text-5xl lg:text-6xl font-normal mb-6",
    // Section titles (main sections)
    sectionTitle: "text-4xl sm:text-5xl lg:text-6xl font-normal mb-6", 
    // Subsection titles (smaller sections)
    subsectionTitle: "text-2xl sm:text-3xl font-normal text-gray-800 mb-4 text-center",
    // Card titles
    cardTitle: "text-xl sm:text-2xl font-normal text-gray-800 mb-4",
    // Body text (main content)
    bodyText: "text-lg text-gray-600 leading-relaxed",
    // Subtitle text (under heroes)
    subtitleText: "text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light",
    // Stats numbers
    statsNumber: "text-3xl sm:text-4xl font-normal text-gray-800 mb-2",
    // Stats labels
    statsLabel: "text-gray-600",
  },

  // Colors
  colors: {
    // Primary red (brand color)
    primary: "text-red-600",
    primaryBg: "bg-red-600",
    primaryHover: "hover:bg-red-700",
    primaryGradient: "from-red-600 to-red-700",
    primaryLight: "bg-red-100",
    
    // Text colors
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-700", 
    textMuted: "text-gray-600",
    
    // Background colors
    bgWhite: "bg-white",
    bgGray: "bg-gray-50",
    bgDark: "bg-gray-800",
  },

  // Spacing
  spacing: {
    // Section padding
    sectionPadding: "py-12",
    // Container max width
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    // Card padding
    cardPadding: "p-8",
    // Small card padding
    cardPaddingSmall: "p-6",
    // Margins
    marginBottom: "mb-12",
    marginBottomSmall: "mb-6",
  },

  // Effects
  effects: {
    // Shadows
    shadow: "shadow",
    shadowLg: "shadow-lg",
    shadowSm: "shadow-sm",
    
    // Borders
    rounded: "rounded-2xl",
    roundedSmall: "rounded-xl",
    
    // Transitions
    transition: "transition-all duration-200",
    hover: "hover:shadow-lg hover:-translate-y-1",
  },

  // Layout
  layout: {
    // Grid gaps
    gridGap: "gap-8",
    gridGapSmall: "gap-6",
    
    // Flex spacing
    flexSpace: "space-y-6",
    flexSpaceSmall: "space-y-4",
  }
} as const;

// Helper function to get consistent styling
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
