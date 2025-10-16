import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, FileImage, FileText, Image, Printer, Eye, Palette } from 'lucide-react';
import { GeneratedTemplate } from '@/types/template';
import { useToast } from '@/hooks/use-toast';

interface TemplateOutputPanelProps {
  template: GeneratedTemplate;
}

export function TemplateOutputPanel({ template }: TemplateOutputPanelProps) {
  const { toast } = useToast();
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [activeTab, setActiveTab] = useState('preview');

  const handleDownload = async (format: string, downloadData: any) => {
    try {
      // Create blob from data URL
      const response = await fetch(downloadData.url);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = downloadData.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Download Started",
        description: `${format.toUpperCase()} file is downloading...`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the file.",
        variant: "destructive",
      });
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(template, null, 2));
      toast({
        title: "Copied!",
        description: "Template data copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const currentTemplate = selectedVariation === 0 ? template : {
    ...template,
    preview: template.variations[selectedVariation - 1]?.preview || template.preview
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-green-600" />
            Generated Template
          </div>
          <Badge variant="secondary">
            {template.metadata.dimensions.width}×{template.metadata.dimensions.height}
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="variations">Variations</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="space-y-4">
            {/* Main Template Preview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <img
                src={currentTemplate.preview}
                alt={template.metadata.name}
                className="w-full max-h-96 object-contain rounded-lg border bg-white shadow-sm"
              />
            </div>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={() => handleDownload('png', template.downloads.png)}
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                PNG (High Quality)
              </Button>
              <Button 
                onClick={() => handleDownload('svg', template.downloads.svg)}
                variant="outline" 
                className="w-full"
              >
                <FileImage className="w-4 h-4 mr-2" />
                SVG (Editable)
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="variations" className="space-y-4">
            {/* Original Template */}
            <div 
              className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${
                selectedVariation === 0 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedVariation(0)}
            >
              <img
                src={template.preview}
                alt="Original"
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-sm font-medium text-center">Original</p>
            </div>
            
            {/* Variations Grid */}
            <div className="grid grid-cols-2 gap-3">
              {template.variations.map((variation, index) => (
                <div
                  key={variation.id}
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedVariation === index + 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedVariation(index + 1)}
                >
                  <img
                    src={variation.preview}
                    alt={variation.name}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p className="text-sm font-medium text-center">{variation.name}</p>
                  <div className="flex justify-center gap-1 mt-2">
                    {variation.colorScheme.slice(0, 3).map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-3 h-3 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="space-y-4">
            {/* Template Metadata */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Template Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-medium">{template.metadata.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium">{template.metadata.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Dimensions</p>
                    <p className="font-medium">
                      {template.metadata.dimensions.width}×{template.metadata.dimensions.height}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Generated</p>
                    <p className="font-medium">
                      {template.metadata.generatedAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Color Palette */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {template.metadata.colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-12 h-12 rounded-lg border-2 border-gray-200 mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs text-muted-foreground">
                        {color.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {template.metadata.fonts.map((font, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {index === 0 ? 'Heading' : index === 1 ? 'Body' : 'Accent'}
                      </span>
                      <span className="font-medium" style={{ fontFamily: font }}>
                        {font}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Download Section */}
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-lg">Download Options</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={() => handleDownload('jpg', template.downloads.jpg)}
              variant="outline" 
              className="w-full"
            >
              <Image className="w-4 h-4 mr-2" />
              JPG (Small Size)
            </Button>
            <Button 
              onClick={() => handleDownload('pdf', template.downloads.pdf)}
              variant="outline" 
              className="w-full"
            >
              <Printer className="w-4 h-4 mr-2" />
              PDF (Print Ready)
            </Button>
          </div>
          
          {/* Copy JSON */}
          <Button 
            onClick={handleCopyToClipboard}
            variant="ghost" 
            className="w-full"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Template Data (JSON)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}