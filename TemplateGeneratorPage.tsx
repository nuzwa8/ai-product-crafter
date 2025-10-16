import React, { useState } from 'react';
import { TemplateGeneratorForm } from '@/components/template-generator/TemplateGeneratorForm';
import { TemplateOutputPanel } from '@/components/template-generator/TemplateOutputPanel';
import { LoadingProgress } from '@/components/template-generator/LoadingProgress';
import { EmptyState } from '@/components/template-generator/EmptyState';
import { generateTemplate } from '@/lib/template-generator';
import { TemplateGeneratorInputs, GeneratedTemplate } from '@/types/template';
import { useToast } from '@/hooks/use-toast';

export function TemplateGeneratorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [template, setTemplate] = useState<GeneratedTemplate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (inputs: TemplateGeneratorInputs) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedTemplate = await generateTemplate(inputs);
      setTemplate(generatedTemplate);
      
      toast({
        title: "Template Generated! ✨",
        description: "Your AI-powered template is ready for download.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate template';
      setError(errorMessage);
      
      toast({
        title: "Generation Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
    setTemplate(null);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Template Generator</h1>
        <p className="text-muted-foreground">
          Create stunning, professional templates with artificial intelligence.
          Perfect for social media, presentations, marketing materials, and more.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
        {/* Left Panel - Form */}
        <div className="h-full">
          <TemplateGeneratorForm 
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
        </div>
        
        {/* Right Panel - Output */}
        <div className="h-full">
          {isLoading ? (
            <LoadingProgress />
          ) : error ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-red-500 text-lg font-medium">Generation Failed</div>
                <p className="text-muted-foreground">{error}</p>
                <button 
                  onClick={handleRetry}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : template ? (
            <TemplateOutputPanel template={template} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}