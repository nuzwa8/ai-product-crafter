import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  FileText,
  Table,
  Package,
  Shirt,
  Magnet,
  Palette,
  Truck,
  Sparkles,
  Menu,
  X
} from "lucide-react";

const navigation = [
  {
    name: "Template Finder",
    href: "/template-finder",
    icon: Search,
    description: "Find winning template opportunities",
    available: true
  },
  {
    name: "AI Template Generator",
    href: "/template-generator", 
    icon: Sparkles,
    description: "Generate professional templates with AI",
    available: true
  },
  {
    name: "Bulk CSV Generator",
    href: "/bulk-csv",
    icon: Table,
    description: "Generate bulk content data",
    available: false
  },
  {
    name: "Listing Kit",
    href: "/listing-kit",
    icon: Package,
    description: "Create compelling product listings",
    available: false
  },
  {
    name: "POD Briefs",
    href: "/pod-briefs",
    icon: Shirt,
    description: "Print-on-demand design briefs",
    available: false
  },
  {
    name: "Lead Magnet Creator",
    href: "/lead-magnet",
    icon: Magnet,
    description: "Design irresistible lead magnets",
    available: false
  },
  {
    name: "Brand Kit Generator",
    href: "/brand-kit",
    icon: Palette,
    description: "Complete brand identity packages",
    available: false
  },
  {
    name: "Delivery Pack",
    href: "/delivery-pack",
    icon: Truck,
    description: "Customer delivery templates",
    available: false
  }
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-sm leading-none">
              Digital Products Generator Pro
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              Created by coachproai
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-2 py-4">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <div key={item.name}>
                {item.available ? (
                  <Link to={item.href} onClick={() => setIsMobileOpen(false)}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start h-auto p-3 text-left",
                        isActive && "bg-blue-50 text-blue-700 border-blue-200"
                      )}
                    >
                      <Icon className={cn(
                        "h-4 w-4 mr-3 flex-shrink-0",
                        isActive ? "text-blue-600" : "text-gray-500"
                      )} />
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">
                          {item.description}
                        </span>
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    disabled
                    className="w-full justify-start h-auto p-3 text-left opacity-50 cursor-not-allowed"
                  >
                    <Icon className="h-4 w-4 mr-3 flex-shrink-0 text-gray-400" />
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </span>
                    </div>
                  </Button>
                )}
                
                {index === 1 && <Separator className="my-3" />}
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4">
        <div className="text-xs text-muted-foreground text-center">
          <p>Digital Products Generator Pro</p>
          <p className="mt-1">Powered by AI • v1.0.0</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={cn(
        "lg:hidden fixed left-0 top-0 z-40 h-full w-80 bg-background border-r transform transition-transform duration-200 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div className={cn(
        "hidden lg:flex lg:flex-col lg:w-80 lg:border-r lg:bg-background",
        className
      )}>
        <SidebarContent />
      </div>
    </>
  );
}