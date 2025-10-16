import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Sparkles } from 'lucide-react';
import { TemplateGeneratorInputs } from '@/types/template';

interface TemplateGeneratorFormProps {
  onGenerate: (inputs: TemplateGeneratorInputs) => void;
  isLoading: boolean;
}

const TEMPLATE_TYPES = [
  { value: 'social-post', label: 'Social Media Post (1080×1080)', size: '1:1' },
  { value: 'instagram-story', label: 'Instagram Story (1080×1920)', size: '9:16' },
  { value: 'presentation', label: 'Presentation Slide (1920×1080)', size: '16:9' },
  { value: 'flyer', label: 'Marketing Flyer (8.5×11")', size: 'A4' },
  { value: 'business-card', label: 'Business Card (3.5×2")', size: 'Card' }
];

const DESIGN_TONES = [
  { value: 'professional', label: 'Professional & Clean', description: 'Corporate, trustworthy, structured' },
  { value: 'creative', label: 'Creative & Artistic', description: 'Innovative, expressive, unique' },
  { value: 'minimalist', label: 'Minimalist & Modern', description: 'Simple, elegant, focused' },
  { value: 'bold', label: 'Bold & Energetic', description: 'Dynamic, impactful, attention-grabbing' },
  { value: 'elegant', label: 'Elegant & Sophisticated', description: 'Refined, luxurious, polished' }
];

const COLOR_SCHEMES = [
  { value: 'brand', label: 'Use My Brand Colors', description: 'Custom brand palette' },
  { value: 'warm', label: 'Warm Palette', description: 'Reds, oranges, yellows' },
  { value: 'cool', label: 'Cool Palette', description: 'Blues, greens, purples' },
  { value: 'neutral', label: 'Neutral Palette', description: 'Grays, beiges, whites' },
  { value: 'vibrant', label: 'Vibrant Palette', description: 'Bright, saturated colors' }
];

const DEFAULT_BRAND_COLORS = ['#2563eb', '#dc2626', '#059669'];

export function TemplateGeneratorForm({ onGenerate, isLoading }: TemplateGeneratorFormProps) {
  const [inputs, setInputs] = useState<TemplateGeneratorInputs>({
    templateName: '',
    targetAudience: '',
    templateType: 'social-post',
    designTone: 'professional',
    colorScheme: 'neutral',
    brandColors: DEFAULT_BRAND_COLORS
  });

  const [errors, setErrors] = useState<Partial<TemplateGeneratorInputs>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<TemplateGeneratorInputs> = {};
    
    if (!inputs.templateName.trim()) {
      newErrors.templateName = 'Template name is required';
    }
    
    if (!inputs.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audience is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onGenerate(inputs);
    }
  };

  const updateBrandColor = (index: number, color: string) => {
    const newColors = [...(inputs.brandColors || DEFAULT_BRAND_COLORS)];
    newColors[index] = color;
    setInputs({ ...inputs, brandColors: newColors });
  };

  const selectedTemplateType = TEMPLATE_TYPES.find(t => t.value === inputs.templateType);
  const selectedTone = DESIGN_TONES.find(t => t.value === inputs.designTone);
  const selectedColorScheme = COLOR_SCHEMES.find(c => c.value === inputs.colorScheme);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          AI Template Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Create professional templates with AI-powered design intelligence
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Template Name */}
          <div className="space-y-2">
            <Label htmlFor="templateName">Template Name *</Label>
            <Input
              id="templateName"
              value={inputs.templateName}
              onChange={(e) => setInputs({ ...inputs, templateName: e.target.value })}
              placeholder="e.g., Modern Business Presentation"
              className={errors.templateName ? 'border-red-500' : ''}
            />
            {errors.templateName && (
              <p className="text-sm text-red-500">{errors.templateName}</p>
            )}
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience *</Label>
            <Textarea
              id="targetAudience"
              value={inputs.targetAudience}
              onChange={(e) => setInputs({ ...inputs, targetAudience: e.target.value })}
              placeholder="e.g., Tech startups, entrepreneurs, SaaS companies..."
              rows={3}
              className={errors.targetAudience ? 'border-red-500' : ''}
            />
            {errors.targetAudience && (
              <p className="text-sm text-red-500">{errors.targetAudience}</p>
            )}
          </div>

          {/* Template Type */}
          <div className="space-y-2">
            <Label>Template Type</Label>
            <Select value={inputs.templateType} onValueChange={(value: any) => setInputs({ ...inputs, templateType: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TEMPLATE_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex justify-between items-center w-full">
                      <span>{type.label}</span>
                      <Badge variant="secondary" className="ml-2">{type.size}</Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedTemplateType && (
              <p className="text-sm text-muted-foreground">
                Dimensions: {selectedTemplateType.size}
              </p>
            )}
          </div>

          {/* Design Tone */}
          <div className="space-y-2">
            <Label>Design Tone</Label>
            <Select value={inputs.designTone} onValueChange={(value: any) => setInputs({ ...inputs, designTone: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DESIGN_TONES.map((tone) => (
                  <SelectItem key={tone.value} value={tone.value}>
                    <div>
                      <div className="font-medium">{tone.label}</div>
                      <div className="text-sm text-muted-foreground">{tone.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedTone && (
              <p className="text-sm text-muted-foreground">
                {selectedTone.description}
              </p>
            )}
          </div>

          {/* Color Scheme */}
          <div className="space-y-2">
            <Label>Color Scheme</Label>
            <Select value={inputs.colorScheme} onValueChange={(value: any) => setInputs({ ...inputs, colorScheme: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COLOR_SCHEMES.map((scheme) => (
                  <SelectItem key={scheme.value} value={scheme.value}>
                    <div>
                      <div className="font-medium">{scheme.label}</div>
                      <div className="text-sm text-muted-foreground">{scheme.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedColorScheme && (
              <p className="text-sm text-muted-foreground">
                {selectedColorScheme.description}
              </p>
            )}
          </div>

          {/* Brand Colors (Conditional) */}
          {inputs.colorScheme === 'brand' && (
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Brand Colors
              </Label>
              <div className="flex gap-3">
                {(inputs.brandColors || DEFAULT_BRAND_COLORS).map((color, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => updateBrandColor(index, e.target.value)}
                      className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
                    />
                    <span className="text-xs text-muted-foreground">
                      {color.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generate Button */}
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Generating Template...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Template
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}