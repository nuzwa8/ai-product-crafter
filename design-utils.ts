import { TemplateDimensions, DesignRules, ColorPalette, Typography } from '@/types/template';

export function getTemplateDimensions(templateType: string): TemplateDimensions {
  const dimensions = {
    'social-post': { width: 1080, height: 1080 },
    'instagram-story': { width: 1080, height: 1920 },
    'presentation': { width: 1920, height: 1080 },
    'flyer': { width: 612, height: 792 }, // 8.5x11" at 72 DPI
    'business-card': { width: 252, height: 144 } // 3.5x2" at 72 DPI
  };
  
  return dimensions[templateType as keyof typeof dimensions] || dimensions['social-post'];
}

export function getDesignRules(designTone: string): DesignRules {
  const rules = {
    professional: {
      layout: 'grid-aligned',
      spacing: 'generous-padding',
      shapes: 'geometric-clean',
      hierarchy: 'clear-structure'
    },
    creative: {
      layout: 'asymmetrical-dynamic',
      spacing: 'varied-rhythm',
      shapes: 'organic-artistic', 
      hierarchy: 'expressive-flow'
    },
    minimalist: {
      layout: 'centered-balanced',
      spacing: 'maximum-whitespace',
      shapes: 'essential-only',
      hierarchy: 'subtle-elegant'
    },
    bold: {
      layout: 'impact-focused',
      spacing: 'tight-energetic',
      shapes: 'strong-geometric',
      hierarchy: 'dramatic-contrast'
    },
    elegant: {
      layout: 'refined-balanced',
      spacing: 'sophisticated-flow',
      shapes: 'graceful-curves',
      hierarchy: 'polished-structure'
    }
  };
  
  return rules[designTone as keyof typeof rules] || rules.professional;
}

export function generateColorPalette(colorScheme: string, brandColors?: string[]): ColorPalette {
  if (colorScheme === 'brand' && brandColors && brandColors.length > 0) {
    return {
      primary: brandColors[0],
      secondary: brandColors[1] || brandColors[0],
      accent: brandColors[2] || brandColors[0],
      background: '#ffffff',
      text: '#1f2937'
    };
  }
  
  const palettes = {
    warm: {
      primary: '#dc2626',
      secondary: '#f59e0b',
      accent: '#ff6b6b',
      background: '#fef7f0',
      text: '#7c2d12'
    },
    cool: {
      primary: '#2563eb',
      secondary: '#0891b2',
      accent: '#06b6d4',
      background: '#f0f9ff',
      text: '#1e3a8a'
    },
    neutral: {
      primary: '#374151',
      secondary: '#6b7280',
      accent: '#059669',
      background: '#ffffff',
      text: '#1f2937'
    },
    vibrant: {
      primary: '#e11d48',
      secondary: '#7c3aed',
      accent: '#f59e0b',
      background: '#fdf2f8',
      text: '#831843'
    }
  };
  
  return palettes[colorScheme as keyof typeof palettes] || palettes.neutral;
}

export function getTypography(designTone: string): Typography {
  const typography = {
    professional: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      accent: 'Inter, system-ui, sans-serif'
    },
    creative: {
      heading: 'Poppins, system-ui, sans-serif',
      body: 'Open Sans, system-ui, sans-serif',
      accent: 'Poppins, system-ui, sans-serif'
    },
    minimalist: {
      heading: 'Roboto, system-ui, sans-serif',
      body: 'Roboto, system-ui, sans-serif',
      accent: 'Roboto, system-ui, sans-serif'
    },
    bold: {
      heading: 'Montserrat, system-ui, sans-serif',
      body: 'Montserrat, system-ui, sans-serif',
      accent: 'Montserrat, system-ui, sans-serif'
    },
    elegant: {
      heading: 'Playfair Display, serif',
      body: 'Source Sans Pro, system-ui, sans-serif',
      accent: 'Playfair Display, serif'
    }
  };
  
  return typography[designTone as keyof typeof typography] || typography.professional;
}

export function generateDarkModeColors(basePalette: ColorPalette): ColorPalette {
  return {
    primary: '#f8fafc',
    secondary: '#e2e8f0',
    accent: basePalette.accent,
    background: '#0f172a',
    text: '#cbd5e1'
  };
}

export function generateVibrantColors(basePalette: ColorPalette): ColorPalette {
  return {
    primary: '#e11d48',
    secondary: '#f59e0b',
    accent: '#06b6d4',
    background: '#fef7f0',
    text: '#7c2d12'
  };
}

export function generateMonochromeColors(basePalette: ColorPalette): ColorPalette {
  return {
    primary: '#1f2937',
    secondary: '#4b5563',
    accent: '#9ca3af',
    background: '#ffffff',
    text: '#374151'
  };
}