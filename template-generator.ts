import { TemplateGeneratorInputs, GeneratedTemplate, DesignRules, ColorPalette, Typography, TemplateDimensions } from '@/types/template';

// Canvas-based template generation
export async function generateTemplate(inputs: TemplateGeneratorInputs): Promise<GeneratedTemplate> {
  // Simulate realistic generation time
  await new Promise(resolve => setTimeout(resolve, 3000 + Math.random() * 2000));
  
  try {
    // Get template dimensions
    const dimensions = getTemplateDimensions(inputs.templateType);
    
    // Generate design strategy
    const designRules = getDesignRules(inputs.designTone);
    const colorPalette = generateColorPalette(inputs.colorScheme, inputs.brandColors);
    const typography = getTypography(inputs.designTone);
    
    // Create canvas
    const canvas = createCanvas(dimensions);
    const ctx = canvas.getContext('2d')!;
    
    // Generate base template
    await renderTemplate(ctx, dimensions, designRules, colorPalette, typography, inputs);
    
    // Generate variations
    const variations = await generateVariations(ctx, dimensions, designRules, colorPalette, typography, inputs);
    
    // Create download URLs
    const downloads = generateDownloadUrls(canvas, inputs.templateName);
    
    const template: GeneratedTemplate = {
      id: generateId(),
      preview: canvas.toDataURL('image/png', 1.0),
      metadata: {
        name: inputs.templateName,
        dimensions,
        type: inputs.templateType,
        tone: inputs.designTone,
        colors: Object.values(colorPalette),
        fonts: Object.values(typography),
        generatedAt: new Date()
      },
      downloads,
      variations,
      editableElements: {
        texts: [],
        shapes: [],
        colors: Object.values(colorPalette)
      }
    };
    
    return template;
  } catch (error) {
    console.error('Template generation failed:', error);
    throw new Error('Failed to generate template. Please try again.');
  }
}

function createCanvas(dimensions: TemplateDimensions): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;
  return canvas;
}

async function renderTemplate(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  // Clear canvas
  ctx.clearRect(0, 0, dimensions.width, dimensions.height);
  
  // Background
  ctx.fillStyle = colorPalette.background;
  ctx.fillRect(0, 0, dimensions.width, dimensions.height);
  
  // Add design elements based on template type
  switch (inputs.templateType) {
    case 'social-post':
      await renderSocialPost(ctx, dimensions, designRules, colorPalette, typography, inputs);
      break;
    case 'instagram-story':
      await renderInstagramStory(ctx, dimensions, designRules, colorPalette, typography, inputs);
      break;
    case 'presentation':
      await renderPresentation(ctx, dimensions, designRules, colorPalette, typography, inputs);
      break;
    case 'flyer':
      await renderFlyer(ctx, dimensions, designRules, colorPalette, typography, inputs);
      break;
    case 'business-card':
      await renderBusinessCard(ctx, dimensions, designRules, colorPalette, typography, inputs);
      break;
  }
}

async function renderSocialPost(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const { width, height } = dimensions;
  const padding = width * 0.08;
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colorPalette.background);
  gradient.addColorStop(1, adjustColorBrightness(colorPalette.background, -0.1));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Accent shape
  if (designRules.layout !== 'minimalist') {
    ctx.fillStyle = colorPalette.accent;
    ctx.globalAlpha = 0.7;
    
    if (inputs.designTone === 'professional') {
      // Rectangle accent
      ctx.fillRect(padding, padding, width - 2 * padding, height * 0.15);
    } else if (inputs.designTone === 'creative') {
      // Circle accent
      ctx.beginPath();
      ctx.arc(width * 0.8, height * 0.2, width * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.globalAlpha = 1;
  }
  
  // Main title
  ctx.fillStyle = colorPalette.primary;
  ctx.font = `bold ${width * 0.08}px ${typography.heading}`;
  ctx.textAlign = 'center';
  
  const titleY = designRules.layout === 'minimalist' ? height * 0.4 : height * 0.5;
  wrapText(ctx, inputs.templateName, width / 2, titleY, width - 2 * padding, width * 0.1);
  
  // Subtitle
  ctx.fillStyle = colorPalette.text;
  ctx.font = `${width * 0.04}px ${typography.body}`;
  const subtitleY = titleY + width * 0.15;
  wrapText(ctx, inputs.targetAudience, width / 2, subtitleY, width - 2 * padding, width * 0.05);
  
  // Brand element
  ctx.fillStyle = colorPalette.accent;
  ctx.font = `${width * 0.025}px ${typography.accent}`;
  ctx.textAlign = 'right';
  ctx.fillText('Created by CoachPro AI', width - padding, height - padding);
}

async function renderInstagramStory(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const { width, height } = dimensions;
  const padding = width * 0.08;
  
  // Background
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, colorPalette.primary);
  gradient.addColorStop(1, colorPalette.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Content area
  ctx.fillStyle = colorPalette.background;
  ctx.fillRect(padding, height * 0.2, width - 2 * padding, height * 0.6);
  
  // Title
  ctx.fillStyle = colorPalette.text;
  ctx.font = `bold ${width * 0.07}px ${typography.heading}`;
  ctx.textAlign = 'center';
  wrapText(ctx, inputs.templateName, width / 2, height * 0.4, width - 2 * padding, width * 0.08);
  
  // Description
  ctx.fillStyle = colorPalette.text;
  ctx.font = `${width * 0.04}px ${typography.body}`;
  wrapText(ctx, inputs.targetAudience, width / 2, height * 0.6, width - 4 * padding, width * 0.05);
}

async function renderPresentation(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const { width, height } = dimensions;
  const padding = width * 0.05;
  
  // Background
  ctx.fillStyle = colorPalette.background;
  ctx.fillRect(0, 0, width, height);
  
  // Header bar
  ctx.fillStyle = colorPalette.primary;
  ctx.fillRect(0, 0, width, height * 0.12);
  
  // Title
  ctx.fillStyle = colorPalette.background;
  ctx.font = `bold ${height * 0.05}px ${typography.heading}`;
  ctx.textAlign = 'left';
  ctx.fillText(inputs.templateName, padding, height * 0.08);
  
  // Content area
  ctx.fillStyle = colorPalette.text;
  ctx.font = `${height * 0.03}px ${typography.body}`;
  wrapText(ctx, inputs.targetAudience, padding, height * 0.25, width - 2 * padding, height * 0.04);
  
  // Accent elements
  ctx.fillStyle = colorPalette.accent;
  ctx.fillRect(padding, height * 0.5, width * 0.4, height * 0.02);
  ctx.fillRect(padding, height * 0.6, width * 0.3, height * 0.02);
}

async function renderFlyer(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const { width, height } = dimensions;
  const padding = width * 0.08;
  
  // Background
  ctx.fillStyle = colorPalette.background;
  ctx.fillRect(0, 0, width, height);
  
  // Header section
  ctx.fillStyle = colorPalette.primary;
  ctx.fillRect(0, 0, width, height * 0.25);
  
  // Title
  ctx.fillStyle = colorPalette.background;
  ctx.font = `bold ${width * 0.06}px ${typography.heading}`;
  ctx.textAlign = 'center';
  wrapText(ctx, inputs.templateName, width / 2, height * 0.15, width - 2 * padding, width * 0.07);
  
  // Body content
  ctx.fillStyle = colorPalette.text;
  ctx.font = `${width * 0.035}px ${typography.body}`;
  wrapText(ctx, inputs.targetAudience, width / 2, height * 0.5, width - 2 * padding, width * 0.04);
}

async function renderBusinessCard(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  colorPalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const { width, height } = dimensions;
  const padding = width * 0.08;
  
  // Background
  ctx.fillStyle = colorPalette.background;
  ctx.fillRect(0, 0, width, height);
  
  // Accent line
  ctx.fillStyle = colorPalette.accent;
  ctx.fillRect(0, 0, width, height * 0.15);
  
  // Company name
  ctx.fillStyle = colorPalette.primary;
  ctx.font = `bold ${height * 0.12}px ${typography.heading}`;
  ctx.textAlign = 'left';
  ctx.fillText(inputs.templateName, padding, height * 0.4);
  
  // Target audience as tagline
  ctx.fillStyle = colorPalette.text;
  ctx.font = `${height * 0.08}px ${typography.body}`;
  wrapText(ctx, inputs.targetAudience, padding, height * 0.65, width - 2 * padding, height * 0.09);
}

async function generateVariations(
  ctx: CanvasRenderingContext2D,
  dimensions: TemplateDimensions,
  designRules: DesignRules,
  basePalette: ColorPalette,
  typography: Typography,
  inputs: TemplateGeneratorInputs
) {
  const variations = [];
  
  // Color variations
  const colorVariations = [
    { name: 'Dark Mode', colors: generateDarkModeColors(basePalette) },
    { name: 'Vibrant', colors: generateVibrantColors(basePalette) },
    { name: 'Monochrome', colors: generateMonochromeColors(basePalette) }
  ];
  
  for (const variation of colorVariations) {
    const variationCanvas = createCanvas(dimensions);
    const variationCtx = variationCanvas.getContext('2d')!;
    
    await renderTemplate(variationCtx, dimensions, designRules, variation.colors, typography, inputs);
    
    variations.push({
      id: generateId(),
      name: variation.name,
      preview: variationCanvas.toDataURL('image/png', 0.8),
      colorScheme: Object.values(variation.colors)
    });
  }
  
  return variations;
}

function generateDownloadUrls(canvas: HTMLCanvasElement, templateName: string) {
  const filename = templateName.toLowerCase().replace(/\s+/g, '-');
  
  return {
    png: {
      url: canvas.toDataURL('image/png', 1.0),
      filename: `${filename}.png`,
      size: `${canvas.width}×${canvas.height}`,
      quality: 'high' as const
    },
    jpg: {
      url: canvas.toDataURL('image/jpeg', 0.9),
      filename: `${filename}.jpg`,
      size: `${canvas.width}×${canvas.height}`
    },
    svg: {
      url: generateSVGDataUrl(canvas),
      filename: `${filename}.svg`,
      editable: true
    },
    pdf: {
      url: generatePDFDataUrl(canvas),
      filename: `${filename}.pdf`,
      printReady: true
    }
  };
}

// Utility functions
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

function wrapText(
  ctx: CanvasRenderingContext2D, 
  text: string, 
  x: number, 
  y: number, 
  maxWidth: number, 
  lineHeight: number
) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  
  ctx.fillText(line, x, currentY);
}

function adjustColorBrightness(color: string, factor: number): string {
  // Simple color brightness adjustment
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const newR = Math.max(0, Math.min(255, r + (255 * factor)));
  const newG = Math.max(0, Math.min(255, g + (255 * factor)));
  const newB = Math.max(0, Math.min(255, b + (255 * factor)));
  
  return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
}

function generateSVGDataUrl(canvas: HTMLCanvasElement): string {
  // Simple SVG generation - in production, use a proper SVG library
  const svg = `<svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg">
  <image href="${canvas.toDataURL()}" width="${canvas.width}" height="${canvas.height}"/>
</svg>`;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

function generatePDFDataUrl(canvas: HTMLCanvasElement): string {
  // Simple PDF generation - in production, use jsPDF
  return canvas.toDataURL('image/png', 1.0);
}

export { getTemplateDimensions, getDesignRules, generateColorPalette, getTypography };
export { generateDarkModeColors, generateVibrantColors, generateMonochromeColors };