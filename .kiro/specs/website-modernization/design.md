# Design Document

## Overview

Este documento detalha o design da modernização do website da Flux, convertendo de uma arquitetura baseada em Create React App + Material-UI + styled-components para uma arquitetura moderna usando Vite + Tailwind CSS + shadcn/ui + Radix UI. O design mantém toda a funcionalidade existente enquanto melhora significativamente a performance, experiência de desenvolvimento e consistência visual.

## Architecture

### Current Architecture
```
Create React App
├── React 19 + TypeScript
├── Material-UI (@mui/material)
├── styled-components
├── React Router DOM
└── Custom CSS variables
```

### Target Architecture
```
Vite
├── React 19 + JavaScript (JSX)
├── Tailwind CSS v4
├── shadcn/ui + Radix UI
├── React Router DOM
└── Custom CSS classes + Tailwind utilities
```

### Migration Strategy

1. **Build System Migration**: Replace Create React App with Vite for faster builds and better development experience
2. **Styling Migration**: Replace Material-UI and styled-components with Tailwind CSS and shadcn/ui components
3. **Language Migration**: Convert TypeScript files to JavaScript while maintaining functionality
4. **Component Migration**: Restructure components to follow the flux-website pattern

## Components and Interfaces

### Core Components Structure

```
src/
├── components/
│   └── ui/                    # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       └── ...
├── hooks/
│   └── use-mobile.js         # Mobile detection hook
├── lib/
│   └── utils.js              # Utility functions (cn, etc.)
├── assets/                   # Images and static assets
├── App.jsx                   # Main application component
├── App.css                   # Tailwind imports + custom styles
├── index.css                 # Base styles (empty or minimal)
└── main.jsx                  # Application entry point
```

### Component Migration Map

| Current Component | Target Implementation | Notes |
|-------------------|----------------------|-------|
| `Header.tsx` | Integrated into `App.jsx` | Single-page app with smooth scroll navigation |
| `Footer.tsx` | Integrated into `App.jsx` | Simplified footer with consistent styling |
| `Home.tsx` | Hero section in `App.jsx` | Combined with other sections |
| `Services.tsx` | Services section in `App.jsx` | Using Card components from shadcn/ui |
| `About.tsx` | About section in `App.jsx` | Restructured with better content organization |
| `Contact.tsx` | Contact section in `App.jsx` | Form using shadcn/ui Input and Textarea |

### UI Component System

#### Button Component
- Based on Radix UI primitives
- Variants: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon
- Custom styling with Tailwind classes

#### Card Component
- Flexible card system with Header, Content, Footer
- Glass effect styling for modern appearance
- Hover animations and transitions

#### Form Components
- Input and Textarea with consistent styling
- Focus states and validation styling
- Accessibility features built-in

### Styling System

#### Color Palette
```css
:root {
  --flux-dark: #2E2E2E;
  --flux-light: #ECEFF1;
  --flux-accent: #6A7885;
  
  --background: var(--flux-dark);
  --foreground: #FFFFFF;
  --primary: var(--flux-accent);
  --accent: var(--flux-accent);
  --muted: rgba(108, 120, 133, 0.15);
  --border: rgba(184, 197, 209, 0.2);
}
```

#### Typography
- Primary font: 'Manrope' (Google Fonts)
- Font classes: `.font-vinila` (bold headings), `.font-manrope` (body text)
- Responsive text sizing with Tailwind utilities

#### Custom Utility Classes
- `.text-gradient`: Gradient text effect for headings
- `.glass-effect`: Backdrop blur with transparency
- `.hover-lift`: Hover animation with transform and shadow
- `.btn-primary`: Custom button styling with gradients
- `.section-padding`: Consistent section spacing

## Data Models

### Form Data Model
```javascript
const formData = {
  name: '',      // User's full name
  email: '',     // User's email address
  message: ''    // User's message/inquiry
}
```

### Navigation State Model
```javascript
const navigationState = {
  isMenuOpen: false,           // Mobile menu toggle state
  activeSection: 'home'        // Current active section for navigation highlighting
}
```

### Application State
- No complex state management required
- Local component state using React hooks
- Form state managed with controlled components
- Navigation state for mobile menu and active section tracking

## Error Handling

### Build-time Error Handling
- Vite configuration with proper error reporting
- ESLint configuration for code quality
- Proper import/export validation

### Runtime Error Handling
- Form validation for required fields
- Graceful handling of missing assets
- Fallback states for failed operations

### User Experience Error Handling
- Form submission feedback
- Loading states for async operations
- Accessible error messages

## Testing Strategy

### Component Testing
- Test component rendering and basic functionality
- Verify form submission behavior
- Test responsive behavior and mobile menu
- Validate accessibility features

### Integration Testing
- Test navigation between sections
- Verify smooth scrolling functionality
- Test form integration with email client

### Visual Testing
- Compare visual output with current design
- Verify responsive design across breakpoints
- Test animations and transitions

### Performance Testing
- Bundle size comparison (before/after)
- Load time measurements
- Core Web Vitals assessment

## Migration Implementation Plan

### Phase 1: Project Setup
- Initialize new Vite project structure
- Configure Tailwind CSS v4
- Set up shadcn/ui components
- Configure build and development scripts

### Phase 2: Core Components
- Create main App.jsx with all sections
- Implement navigation and routing logic
- Set up responsive layout structure
- Configure custom styling system

### Phase 3: Content Migration
- Migrate Hero section content
- Convert Services section with new card components
- Restructure About section content
- Implement Contact form with new UI components

### Phase 4: Styling and Polish
- Apply custom CSS classes and animations
- Implement responsive design
- Add hover effects and transitions
- Optimize for accessibility

### Phase 5: Testing and Cleanup
- Test all functionality
- Remove old dependencies
- Clean up unused files
- Optimize bundle size

## Technical Considerations

### Performance Optimizations
- Vite's fast build system and HMR
- Tailwind CSS purging for smaller bundle size
- Optimized asset loading and caching
- Minimal JavaScript bundle with tree-shaking

### Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

### SEO Considerations
- Proper meta tags and descriptions
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design

### Browser Compatibility
- Modern browser support (ES2020+)
- Progressive enhancement approach
- Fallbacks for older browsers where necessary
- CSS Grid and Flexbox support

## Asset Management

### Image Assets
- Migrate existing images to `src/assets/` directory
- Optimize image formats and sizes
- Implement proper alt text for accessibility
- Use responsive image techniques where appropriate

### Font Loading
- Google Fonts integration for Manrope
- Font display optimization
- Fallback font stack

### Icon System
- Lucide React icons for consistent iconography
- SVG icons for scalability
- Proper icon sizing and accessibility