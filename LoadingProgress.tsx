import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sparkles, Palette, Type, Layout, Download } from 'lucide-react';

const GENERATION_STEPS = [
  {
    id: 1,
    message: "Analyzing your requirements...",
    duration: 800,
    icon: Sparkles
  },
  {
    id: 2, 
    message: "Selecting optimal layout...",
    duration: 1000,
    icon: Layout
  },
  {
    id: 3,
    message: "Applying color psychology...",
    duration: 700,
    icon: Palette
  },
  {
    id: 4,
    message: "Generating typography...",
    duration: 600,
    icon: Type
  },
  {
    id: 5,
    message: "Creating design elements...",
    duration: 900,
    icon: Sparkles
  },
  {
    id: 6,
    message: "Finalizing template...",
    duration: 500,
    icon: Download
  }
];

export function LoadingProgress() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep < GENERATION_STEPS.length) {
      const step = GENERATION_STEPS[currentStep];
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setProgress(((currentStep + 1) / GENERATION_STEPS.length) * 100);
      }, step.duration);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const currentStepData = GENERATION_STEPS[currentStep] || GENERATION_STEPS[GENERATION_STEPS.length - 1];
  const IconComponent = currentStepData.icon;

  return (
    <Card className="h-full flex items-center justify-center">
      <CardContent className="text-center space-y-6 py-12">
        {/* Animated Icon */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        {/* Current Step Message */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">
            {currentStepData.message}
          </h3>
          <p className="text-sm text-muted-foreground">
            Step {Math.min(currentStep + 1, GENERATION_STEPS.length)} of {GENERATION_STEPS.length}
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-sm mx-auto space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {Math.round(progress)}% complete
          </p>
        </div>
        
        {/* Steps List */}
        <div className="space-y-2 max-w-sm mx-auto">
          {GENERATION_STEPS.map((step, index) => {
            const StepIcon = step.icon;
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div 
                key={step.id}
                className={`flex items-center gap-3 text-sm ${
                  isCompleted ? 'text-green-600' : 
                  isCurrent ? 'text-blue-600' : 
                  'text-gray-400'
                }`}
              >
                <StepIcon className={`w-4 h-4 ${
                  isCompleted ? 'text-green-600' : 
                  isCurrent ? 'text-blue-600' : 
                  'text-gray-400'
                }`} />
                <span className={isCompleted ? 'line-through' : ''}>
                  {step.message}
                </span>
                {isCompleted && (
                  <span className="text-green-600 text-xs">✓</span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Fun Fact */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg max-w-sm mx-auto">
          <p className="text-xs text-blue-800">
            💡 <strong>Did you know?</strong> Our AI analyzes thousands of design principles 
            to create templates that follow color psychology and typography best practices.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}