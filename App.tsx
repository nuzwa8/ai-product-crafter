import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { TemplateFinder } from "@/components/template-finder/TemplateFinder";
import { TemplateGeneratorPage } from "@/components/template-generator/TemplateGeneratorPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/template-finder" replace />} />
            <Route path="/template-finder" element={<TemplateFinder />} />
            <Route path="/template-generator" element={<TemplateGeneratorPage />} />
            {/* Coming Soon routes */}
            <Route path="/bulk-csv" element={<ComingSoon module="Bulk CSV Generator" />} />
            <Route path="/listing-kit" element={<ComingSoon module="Listing Kit" />} />
            <Route path="/pod-briefs" element={<ComingSoon module="POD Briefs" />} />
            <Route path="/lead-magnet" element={<ComingSoon module="Lead Magnet" />} />
            <Route path="/brand-kit" element={<ComingSoon module="Brand Kit" />} />
            <Route path="/delivery-pack" element={<ComingSoon module="Delivery Pack" />} />
          </Routes>
        </AppLayout>
        <Toaster />
      </div>
    </Router>
  );
}

// Temporary Coming Soon component
function ComingSoon({ module }: { module: string }) {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{module}</h1>
        <p className="text-muted-foreground">This module is coming soon!</p>
        <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">🚧</span>
        </div>
      </div>
    </div>
  );
}

export default App;