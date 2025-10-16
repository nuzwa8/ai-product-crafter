# Integration Guide: Module 2 - AI Template Generator

## Step-by-Step Integration

### 1. Prerequisites Check

Ensure your existing project has:
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui components
- React Router DOM

### 2. Install New Dependencies

```bash
# Core template generation dependencies
npm install fabric@5.3.0 jspdf@2.5.1 html2canvas@1.4.1 chroma-js@2.4.2

# TypeScript definitions
npm install --save-dev @types/fabric @types/chroma-js
```

### 3. File Integration Checklist

#### Core Components ✅
- [ ] `src/components/template-generator/TemplateGeneratorPage.tsx`
- [ ] `src/components/template-generator/TemplateGeneratorForm.tsx`
- [ ] `src/components/template-generator/TemplateOutputPanel.tsx`
- [ ] `src/components/template-generator/LoadingProgress.tsx`
- [ ] `src/components/template-generator/EmptyState.tsx`

#### Types & Utilities ✅
- [ ] `src/types/template.ts`
- [ ] `src/lib/template-generator.ts`
- [ ] `src/lib/design-utils.ts`
- [ ] `src/lib/utils.ts` (update existing)
- [ ] `src/hooks/custom-hooks.ts`

#### Layout Updates ✅
- [ ] `src/components/layout/AppLayout.tsx`
- [ ] `src/components/layout/Sidebar.tsx` (update navigation)
- [ ] `src/App.tsx` (add new route)

#### Package Configuration ✅
- [ ] `package.json` (update dependencies)

### 4. Route Integration

Add to your `App.tsx`:

```tsx
import { TemplateGeneratorPage } from "@/components/template-generator/TemplateGeneratorPage";

// In your Routes component:
<Route path="/template-generator" element={<TemplateGeneratorPage />} />
```

### 5. Navigation Update

In your sidebar navigation, update Module 2:

```tsx
// Change from:
{
  name: "Template Pack Spec Writer",
  href: "/spec-writer",
  available: false  // Coming soon
}

// To:
{
  name: "AI Template Generator",
  href: "/template-generator", 
  icon: Sparkles,
  description: "Generate professional templates with AI",
  available: true  // Now active!
}
```

### 6. Testing Integration

#### Basic Functionality Test
1. Navigate to `/template-generator`
2. Fill out the form with test data
3. Click "Generate Template"
4. Verify loading states appear
5. Confirm template is generated
6. Test download functionality

#### Mobile Responsiveness Test
1. Test on mobile viewport
2. Verify form is usable
3. Check template preview scaling
4. Confirm downloads work on mobile

### 7. Common Integration Issues

#### Issue: Canvas not working
**Solution**: Ensure Canvas API polyfills if needed
```tsx
// Add to index.html if needed
<script src="https://cdn.jsdelivr.net/npm/canvas-polyfill@0.1.0/canvas.js"></script>
```

#### Issue: Type errors
**Solution**: Add fabric types to tsconfig.json
```json
{
  "compilerOptions": {
    "types": ["fabric"]
  }
}
```

#### Issue: Build errors
**Solution**: Update Vite config for fabric
```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['fabric']
  }
});
```

### 8. Environment-Specific Setup

#### Development
```bash
npm run dev
# Navigate to http://localhost:5173/template-generator
```

#### Production Build
```bash
npm run build
# Verify bundle size increase is acceptable
```

#### Lovable.dev Deployment
1. Commit all files to GitHub
2. Open Lovable.dev project
3. Changes should auto-sync
4. Test in preview mode

### 9. Performance Optimization

#### Code Splitting
```tsx
// Lazy load the template generator
const TemplateGeneratorPage = lazy(() => 
  import('@/components/template-generator/TemplateGeneratorPage')
);
```

#### Bundle Analysis
```bash
# Analyze bundle impact
npm run build
npm run analyze
```

### 10. Quality Assurance

#### Functional Testing
- [ ] All template types generate correctly
- [ ] All design tones produce different results
- [ ] Color schemes work as expected
- [ ] Downloads work in all formats
- [ ] Variations are visually distinct
- [ ] Error handling works properly

#### Cross-browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile Testing
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Touch interactions work
- [ ] Downloads work on mobile

### 11. Rollback Plan

If issues arise:

1. **Remove new route** from App.tsx
2. **Revert sidebar** to show "Coming Soon"
3. **Comment out imports** in main files
4. **Keep files** for future fixing

### 12. Support & Maintenance

#### Monitoring
- Check user feedback on template quality
- Monitor generation success rates
- Track download completion rates
- Watch for browser compatibility issues

#### Updates
- Regularly update fabric.js for security
- Monitor Canvas API changes
- Update color palettes based on trends
- Add new template types based on user requests

---

## Ready for Production! 🚀

Once integrated, Module 2 will provide users with a powerful AI-driven template generation tool that creates professional, downloadable templates in seconds.

**Questions?** Check the troubleshooting section or create an issue in the repository.