import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Palette, Layout, FileImage } from 'lucide-react';

export function EmptyState() {
  return (
    <Card className="h-full flex items-center justify-center">
      <CardContent className="text-center space-y-6 py-12">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
          <Sparkles className="w-12 h-12 text-blue-600" />
        </div>
        
        {/* Main Message */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Ready to Create Amazing Templates?
          </h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Fill out the form on the left to generate professional templates 
            powered by artificial intelligence.
          </p>
        </div>
        
        {/* Features List */}
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto text-left">
          <div className="flex items-start gap-3">
            <Layout className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Smart Layouts</h4>
              <p className="text-xs text-muted-foreground">
                AI-generated layouts optimized for your content type
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Palette className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Color Psychology</h4>
              <p className="text-xs text-muted-foreground">
                Colors chosen to match your brand tone and audience
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <FileImage className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Multiple Formats</h4>
              <p className="text-xs text-muted-foreground">
                Download as PNG, SVG, JPG, or PDF for any use case
              </p>
            </div>
          </div>
        </div>
        
        {/* Quick Tips */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg max-w-sm mx-auto">
          <h4 className="font-medium text-sm mb-2">💡 Pro Tips:</h4>
          <ul className="text-xs text-muted-foreground space-y-1 text-left">
            <li>• Be specific about your target audience</li>
            <li>• Choose colors that match your brand</li>
            <li>• Select the right template type for your content</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}