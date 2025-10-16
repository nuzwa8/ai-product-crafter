export interface TemplateGeneratorInputs {
  templateName: string;
  targetAudience: string;
  templateType: 'social-post' | 'instagram-story' | 'presentation' | 'flyer' | 'business-card';
  designTone: 'professional' | 'creative' | 'minimalist' | 'bold' | 'elegant';
  colorScheme: 'brand' | 'warm' | 'cool' | 'neutral' | 'vibrant';
  brandColors?: string[];
}

export interface GeneratedTemplate {
  id: string;
  preview: string; // Base64 data URL
  metadata: {
    name: string;
    dimensions: { width: number; height: number };
    type: string;
    tone: string;
    colors: string[];
    fonts: string[];
    generatedAt: Date;
  };
  downloads: {
    png: {
      url: string;
      filename: string;
      size: string;
      quality: 'high' | 'medium';
    };
    jpg: {
      url: string;
      filename: string;
      size: string;
    };
    svg: {
      url: string;
      filename: string;
      editable: boolean;
    };
    pdf: {
      url: string;
      filename: string;
      printReady: boolean;
    };
  };
  variations: TemplateVariation[];
  editableElements: {
    texts: TextElement[];
    shapes: ShapeElement[];
    colors: string[];
  };
}

export interface TemplateVariation {
  id: string;
  preview: string;
  name: string;
  colorScheme: string[];
}

export interface TextElement {
  id: string;
  content: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  position: { x: number; y: number };
}

export interface ShapeElement {
  id: string;
  type: 'rectangle' | 'circle' | 'triangle';
  color: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface DesignRules {
  layout: string;
  spacing: string;
  shapes: string;
  hierarchy: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Typography {
  heading: string;
  body: string;
  accent: string;
}

export interface TemplateDimensions {
  width: number;
  height: number;
}