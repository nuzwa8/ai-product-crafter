export const mockData = {
  finder: [
    {
      useCase: "Digital planning printables for busy professionals",
      marketOpportunity: "High demand, medium competition - excellent opportunity",
      suggestedPricing: "$15-25 AUD",
      contentPillars: ["productivity", "organization", "work-life balance", "goal setting"],
      seoKeywords: ["printable planner", "digital organizer", "productivity planner", "goal tracker"],
      mockupStyles: ["minimalist", "corporate", "colorful", "modern"],
      competitorAnalysis: "Top sellers focus on simplicity and instant download value"
    },
    {
      useCase: "Social media templates for small business owners",
      marketOpportunity: "Very high demand, high competition - differentiation needed",
      suggestedPricing: "$19-35 AUD",
      contentPillars: ["social media marketing", "branding", "content creation", "engagement"],
      seoKeywords: ["instagram templates", "social media bundle", "canva templates", "story templates"],
      mockupStyles: ["bold", "trendy", "professional", "vibrant"],
      competitorAnalysis: "Success comes from platform-specific optimization and trend alignment"
    }
  ],
  
  'spec-writer': [
    {
      productTitle: "Ultimate Productivity Planner Bundle",
      description: "A comprehensive planning system designed for ambitious professionals who want to maximize their productivity and achieve their goals with clarity and purpose.",
      specifications: {
        pageCount: 45,
        format: "PDF + PNG files",
        size: "A4 & US Letter compatible",
        colorScheme: "Neutral grays with teal accents",
        printable: "Yes - home or professional printing"
      },
      includesItems: [
        "Monthly planner (12 pages)",
        "Weekly spreads (52 pages)",
        "Goal tracker with milestones",
        "Habit tracker with streaks",
        "Notes and reflection pages",
        "Quarterly review templates"
      ],
      technicalDetails: {
        fileSize: "Approx. 25MB",
        compatibility: "iPad, tablets, desktop, printable",
        softwareRequired: "PDF reader or note-taking app (GoodNotes, Notability, etc.)"
      }
    }
  ],
  
  specwriter: [
    {
      grid: '12-column grid with 20px gutters',
      margins: {
        top: '60px',
        right: '40px',
        bottom: '60px',
        left: '40px'
      },
      safeZones: {
        header: '80px from top',
        footer: '80px from bottom',
        sides: '60px from left and right edges'
      },
      fonts: {
        primary: 'Montserrat Bold',
        secondary: 'Open Sans Regular',
        freeAlts: ['Poppins', 'Inter', 'Roboto', 'Lato']
      },
      palette: ['#0891b2', '#0e7490', '#164e63', '#f0fdfa', '#ccfbf1', '#1e293b'],
      components: ['Header banner', 'Text block with icon', 'Two-column layout', 'Image placeholder', 'Footer with social icons', 'Call-to-action button'],
      patterns: {
        cover: 'Bold headline with gradient overlay, subtitle in lighter weight, hero image with 40% opacity',
        inner: 'Consistent header bar, body content in 2-column grid, imagery on left, text on right'
      },
      exportPresets: ['PDF Print (300 DPI)', 'PDF Digital (72 DPI)', 'PNG Transparent', 'JPG High Quality'],
      checklist: [
        'Set up 12-column grid with 20px gutters',
        'Apply margins and safe zones',
        'Import or create font pairings',
        'Apply color palette to brand kit',
        'Create reusable component templates',
        'Design cover page following pattern',
        'Design 3-5 inner page variations',
        'Test all export presets',
        'Review alignment and spacing',
        'Final quality check'
      ]
    },
    {
      grid: '16-column grid with 16px gutters',
      margins: {
        top: '50px',
        right: '50px',
        bottom: '50px',
        left: '50px'
      },
      safeZones: {
        header: '70px from top',
        footer: '70px from bottom',
        sides: '50px from left and right edges'
      },
      fonts: {
        primary: 'Playfair Display Bold',
        secondary: 'Lato Light',
        freeAlts: ['Libre Baskerville', 'Crimson Text', 'Merriweather', 'Source Sans Pro']
      },
      palette: ['#f59e0b', '#d97706', '#92400e', '#fffbeb', '#fef3c7', '#1f2937'],
      components: ['Elegant header frame', 'Quote block with decorative elements', 'Three-column grid', 'Image gallery layout', 'Signature footer', 'Decorative dividers'],
      patterns: {
        cover: 'Centered elegant typography, decorative frame elements, subtle background texture',
        inner: 'Header with decorative line, asymmetric layout, pull quotes in accent color'
      },
      exportPresets: ['PDF Print (300 DPI)', 'PDF Digital (150 DPI)', 'PNG High-Res', 'Canva Template'],
      checklist: [
        'Configure 16-column grid system',
        'Define elegant margins and spacing',
        'Load serif and sans-serif font pairing',
        'Create warm color palette swatches',
        'Build decorative component library',
        'Design sophisticated cover layout',
        'Create 4-6 inner page templates',
        'Add decorative elements and dividers',
        'Test export settings',
        'Final elegance review'
      ]
    },
    {
      grid: 'Golden ratio grid (1:1.618)',
      margins: {
        top: '72px',
        right: '45px',
        bottom: '72px',
        left: '45px'
      },
      safeZones: {
        header: '90px from top',
        footer: '90px from bottom',
        sides: '65px from left and right edges'
      },
      fonts: {
        primary: 'Raleway ExtraBold',
        secondary: 'Nunito Sans Regular',
        freeAlts: ['Quicksand', 'Jost', 'Space Grotesk', 'DM Sans']
      },
      palette: ['#8b5cf6', '#7c3aed', '#5b21b6', '#faf5ff', '#e9d5ff', '#171717'],
      components: ['Modern header stack', 'Card component with shadow', 'Icon + text combo', 'Progress bar element', 'Rounded CTA button', 'Stats display grid'],
      patterns: {
        cover: 'Modern bold typography, geometric shapes, vibrant gradient backgrounds',
        inner: 'Card-based layouts, generous white space, icons for visual interest'
      },
      exportPresets: ['PDF Digital (72 DPI)', 'PNG Social Media', 'JPG Compressed', 'SVG Vector'],
      checklist: [
        'Apply golden ratio grid proportions',
        'Set harmonious margins using ratio',
        'Install modern geometric fonts',
        'Create vibrant purple-based palette',
        'Build modern UI component set',
        'Design bold geometric cover',
        'Create clean inner page layouts',
        'Add modern icons and shapes',
        'Optimize for digital viewing',
        'Test across devices'
      ]
    },
    {
      grid: 'Modular grid (6x6 modules)',
      margins: {
        top: '80px',
        right: '60px',
        bottom: '80px',
        left: '60px'
      },
      safeZones: {
        header: '100px from top',
        footer: '100px from bottom',
        sides: '80px from left and right edges'
      },
      fonts: {
        primary: 'Bebas Neue Bold',
        secondary: 'Archivo Regular',
        freeAlts: ['Anton', 'Oswald', 'Fjalla One', 'Work Sans']
      },
      palette: ['#dc2626', '#991b1b', '#450a0a', '#fef2f2', '#fecaca', '#0f172a'],
      components: ['Bold header block', 'Impact statement box', 'Image with text overlay', 'Numbered list component', 'Bold CTA banner', 'Social proof badges'],
      patterns: {
        cover: 'High contrast, large bold headlines, striking imagery, minimal text',
        inner: 'Module-based layout, bold headlines, high-impact visuals, clear hierarchy'
      },
      exportPresets: ['PDF Print High-Res (300 DPI)', 'PNG Presentation', 'JPG Social Posts', 'PDF Interactive'],
      checklist: [
        'Set up 6x6 modular grid system',
        'Apply bold margins and spacing',
        'Configure impact font combination',
        'Create high-contrast red palette',
        'Build bold component library',
        'Design high-impact cover',
        'Create strong inner layouts',
        'Add impact elements',
        'Test print quality',
        'Final impact review'
      ]
    }
  ],
  
  'bulk-csv': [
    {
      totalRows: 30,
      columns: ["Title", "Description", "Tags", "Price", "Category"],
      previewRows: [
        {
          title: "Minimalist Budget Tracker",
          description: "Clean, simple budget planning template for tracking monthly expenses and income with ease",
          tags: "budget,finance,planner,minimalist",
          price: "$8",
          category: "Finance"
        },
        {
          title: "Daily Habit Tracker",
          description: "Build better habits with this comprehensive tracking system featuring 30-day challenges",
          tags: "habits,productivity,self-improvement,tracker",
          price: "$12",
          category: "Productivity"
        },
        {
          title: "Meal Planning Bundle",
          description: "Complete meal planning system with grocery lists, recipe cards, and nutrition tracking",
          tags: "meal-planning,nutrition,health,cooking",
          price: "$15",
          category: "Health & Wellness"
        }
      ],
      downloadFormat: "CSV",
      estimatedValue: "$300+ in content"
    }
  ],
  
  'listing-kit': [
    {
      title: "Professional Productivity Bundle - Digital Planners & Templates",
      subtitle: "Transform your productivity with our complete planning system",
      description: "Get organized and achieve your goals with this comprehensive digital planning bundle designed specifically for busy professionals and entrepreneurs. This all-in-one system includes everything you need to plan your days, track your habits, and reach your biggest goals.",
      keyFeatures: [
        "✨ Instant Digital Download",
        "🖨️ Print at Home or Use Digitally",
        "📱 Multiple Format Options (PDF, PNG)",
        "🎨 Beautiful, Professional Design",
        "🔄 Lifetime Access + Free Updates"
      ],
      bulletPoints: [
        "✅ 50+ professionally designed templates",
        "✅ Works with GoodNotes, Notability & print",
        "✅ Lifetime access with free future updates",
        "✅ 30-day money-back guarantee",
        "✅ Commercial use license included"
      ],
      seoTags: [
        "digital planner",
        "productivity templates",
        "goal tracker",
        "printable planner",
        "notion templates",
        "organization system"
      ],
      platformOptimized: "Etsy, Gumroad, Shopify"
    }
  ],
  
  'pod-briefs': [
    {
      productType: "T-shirt",
      designConcept: "Motivational quote with minimalist typography",
      targetAudience: "Young professionals, entrepreneurs, and self-improvement enthusiasts aged 25-40",
      designBrief: "Clean, modern design featuring 'Progress Over Perfection' in elegant sans-serif font with subtle geometric accent element",
      colorOptions: ["Black", "Navy", "Forest Green", "Heather Gray", "White"],
      printSpecs: {
        placement: "Center chest",
        size: "10x8 inches",
        technique: "DTG or Screen Print",
        resolution: "300 DPI minimum"
      },
      mockupSuggestions: [
        "Lifestyle shot with laptop/coffee",
        "Flat lay with accessories",
        "Action shot in workspace"
      ],
      pricingStrategy: "$22-28 retail price point"
    }
  ],
  
  'lead-magnet': [
    {
      magnetTitle: "The Ultimate Productivity Checklist for Busy Entrepreneurs",
      subtitle: "10 Daily Habits That Will Transform Your Business",
      deliveryFormat: "PDF Checklist + Bonus Video Tutorial",
      outline: [
        "🌅 Morning routine optimization (5 habits)",
        "📊 Priority matrix framework",
        "⏰ Time-blocking strategies that actually work",
        "⚡ Energy management tips for peak performance",
        "🌙 Evening reflection protocol",
        "📱 Digital minimalism practices",
        "🎯 Goal-setting framework"
      ],
      optinCopy: "Get the exact checklist used by 6-figure entrepreneurs to maximize their daily productivity and achieve more in less time.",
      emailSequence: [
        "Day 0: Welcome + Immediate Delivery",
        "Day 2: Implementation Tips & Quick Wins",
        "Day 4: Success Stories from Users",
        "Day 7: Next Steps & Upgrade Path"
      ],
      conversionTips: "Use urgency, social proof, and clear benefit statements"
    }
  ],
  
  'brand-kit': [
    {
      brandName: "Productivity Pro",
      brandPersonality: "Modern, Clean, Trustworthy, Empowering",
      colorPalette: {
        primary: "#0891b2",
        secondary: "#64748b",
        accent: "#f59e0b",
        neutral: "#f8fafc",
        dark: "#0f172a"
      },
      typography: {
        heading: "Inter Bold",
        body: "Inter Regular",
        accent: "Inter SemiBold"
      },
      voiceTone: [
        "Professional yet approachable",
        "Encouraging and supportive",
        "Clear and actionable",
        "Solution-focused",
        "Authentic and relatable"
      ],
      visualStyle: "Clean lines, generous white space, subtle shadows, rounded corners (8px), modern gradient accents",
      logoDirection: "Abstract symbol combining 'P' letterform with upward arrow/growth element",
      applicationExamples: {
        socialMedia: "Consistent use of brand colors with 60-30-10 rule",
        website: "Minimalist layout with strategic use of accent color for CTAs",
        printMaterials: "Professional and clean with ample breathing room"
      }
    }
  ],
  
  'delivery-pack': [
    {
      welcomeEmail: `Hi there! 👋

Thank you so much for your purchase! I'm thrilled to have you as a customer.

Your digital products are ready for download. Here's everything you need to get started right away...`,
      downloadInstructions: `📥 How to Access Your Files:

1. Check your email for the download link (it should arrive within 2 minutes)
2. Click the link to access your files
3. Download all files to your device
4. Unzip if necessary and start using right away!

💡 Pro Tip: Save the download link - you can access your files anytime.`,
      refundPolicy: "30-day satisfaction guarantee - If you're not completely happy with your purchase, simply email us for a full refund. No questions asked.",
      supportContact: "support@coachproai.com",
      faqSection: [
        {
          q: "How do I download my files?",
          a: "Check your email for the download link sent immediately after purchase. Click the link and download all files to your device."
        },
        {
          q: "What software do I need?",
          a: "Our templates work with popular apps like GoodNotes, Notability, or any PDF reader. You can also print them at home!"
        },
        {
          q: "Can I get a refund?",
          a: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, just email us for a full refund."
        },
        {
          q: "Do I need special design skills?",
          a: "Not at all! Everything is ready to use immediately. Just download and start using."
        },
        {
          q: "Can I use these for commercial purposes?",
          a: "Yes, your purchase includes a commercial use license. Create unlimited projects for yourself or clients."
        }
      ],
      bonusContent: "🎁 Exclusive Bonus: Join our private Facebook community for monthly template updates, productivity tips, and connect with other users!",
      followUpSequence: [
        "Day 3: How are you enjoying your purchase?",
        "Day 7: Quick tips to get the most value",
        "Day 14: Share your experience (request testimonial)",
        "Day 30: Exclusive offer for repeat customers"
      ]
    }
  ]
};

export const simulateGeneration = (moduleType: string, formData: any): Promise<any> => {
  const delays: Record<string, number> = {
    'finder': 1500,
    'spec-writer': 2000,
    'specwriter': 2000,
    'bulk-csv': 3000,
    'listing-kit': 1800,
    'pod-briefs': 1200,
    'lead-magnet': 2200,
    'brand-kit': 2500,
    'delivery-pack': 1000
  };

  const delay = delays[moduleType] + Math.random() * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      const data = mockData[moduleType as keyof typeof mockData];
      const result = Array.isArray(data) 
        ? data[Math.floor(Math.random() * data.length)]
        : data[0];
      resolve(result);
    }, delay);
  });
};
