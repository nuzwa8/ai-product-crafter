import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { simulateGeneration } from '@/utils/mockData';
import { Sparkles, Copy, FileText, Palette, Grid3x3, Layout, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function SpecWriterModule() {
  const [formData, setFormData] = useState({
    packName: '',
    audience: '',
    tone: 'professional',
    grid: '12-column'
  });
  const [output, setOutput] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const result = await simulateGeneration('specwriter', formData);
      setOutput(result);
      toast.success('Template spec ready! 🎨');
    } catch (error) {
      toast.error('Oops! Something went wrong. Let\'s try that again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(output, null, 2));
    toast.success('Copied to clipboard ✅');
  };

  return (
    <div className="container mx-auto p-4 lg:p-8 max-w-7xl">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Spec Writer</h1>
        <p className="text-muted-foreground">Generate professional Canva template specifications and build guides</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form Panel */}
        <Card className="shadow-elevated animate-slide-in">
          <CardHeader>
            <CardTitle>Template Specifications</CardTitle>
            <CardDescription>Define your template pack requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="packName">Pack Name</Label>
              <Input
                id="packName"
                placeholder="e.g., Modern Business Templates"
                value={formData.packName}
                onChange={(e) => setFormData({ ...formData, packName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Textarea
                id="audience"
                placeholder="e.g., Small business owners, entrepreneurs, freelancers..."
                value={formData.audience}
                onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Tone</Label>
              <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="elegant">Elegant</SelectItem>
                  <SelectItem value="playful">Playful</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="grid">Grid Preference</Label>
              <Select value={formData.grid} onValueChange={(value) => setFormData({ ...formData, grid: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select grid" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12-column">12-column grid</SelectItem>
                  <SelectItem value="16-column">16-column grid</SelectItem>
                  <SelectItem value="golden-ratio">Golden ratio</SelectItem>
                  <SelectItem value="modular">Modular grid</SelectItem>
                  <SelectItem value="free-form">Free-form layout</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || !formData.packName || !formData.audience}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating specs...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Specifications
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="shadow-elevated animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Template Specifications</CardTitle>
                <CardDescription>Canva build guide</CardDescription>
              </div>
              {output && (
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <LoadingSpinner message="Crafting your template specifications..." />
            ) : output ? (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Grid3x3 className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Grid System</h3>
                  </div>
                  <p className="text-sm text-foreground/90">{output.grid}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Layout className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Margins</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-muted p-2 rounded">
                      <span className="text-muted-foreground">Top:</span> {output.margins.top}
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <span className="text-muted-foreground">Right:</span> {output.margins.right}
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <span className="text-muted-foreground">Bottom:</span> {output.margins.bottom}
                    </div>
                    <div className="bg-muted p-2 rounded">
                      <span className="text-muted-foreground">Left:</span> {output.margins.left}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Safe Zones</h3>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Header:</span> {output.safeZones.header}</p>
                    <p><span className="text-muted-foreground">Footer:</span> {output.safeZones.footer}</p>
                    <p><span className="text-muted-foreground">Sides:</span> {output.safeZones.sides}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Typography</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Primary:</span> {output.fonts.primary}</p>
                    <p><span className="font-medium">Secondary:</span> {output.fonts.secondary}</p>
                    <div>
                      <span className="font-medium">Free Alternatives:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {output.fonts.freeAlts.map((font: string, idx: number) => (
                          <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            {font}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Palette className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold">Color Palette</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {output.palette.map((color: string, idx: number) => (
                      <div key={idx} className="space-y-1">
                        <div 
                          className="h-12 rounded border border-border" 
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-xs text-center font-mono text-muted-foreground">{color}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Reusable Components</h3>
                  <div className="flex flex-wrap gap-2">
                    {output.components.map((component: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Design Patterns</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-muted p-3 rounded">
                      <p className="font-medium mb-1">Cover Page:</p>
                      <p className="text-muted-foreground">{output.patterns.cover}</p>
                    </div>
                    <div className="bg-muted p-3 rounded">
                      <p className="font-medium mb-1">Inner Pages:</p>
                      <p className="text-muted-foreground">{output.patterns.inner}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Export Presets</h3>
                  <div className="flex flex-wrap gap-2">
                    {output.exportPresets.map((preset: string, idx: number) => (
                      <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {preset}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Build Checklist</h3>
                  <div className="space-y-2">
                    {output.checklist.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground/40 mb-4" />
                <p className="text-sm text-muted-foreground">
                  Ready to create your template specifications?
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Fill in the form and click Generate
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
