ZippelLabs Website Technical Specification
Component Inventory
shadcn/ui Components (Built-in)
Button - Primary and secondary CTAs
Card - Content cards, resource cards
NavigationMenu - Header navigation
Separator - Visual dividers
Custom Components
Header - Fixed navigation with logo and links
Subnav - Sticky section navigation
Hero - Main headline section
LogoCloud - Trusted by logos
ChallengeCards - Service offerings
StatsSection - Animated counters
Testimonial - Quote display
ResourceGrid - Article cards
CTASection - Call to action
Footer - Multi-column footer
Animation Components
FadeIn - Scroll-triggered fade animation wrapper
CountUp - Animated number counter
Animation Implementation Table
Table
Copy
Animation	Library	Implementation Approach	Complexity
Page load fade	Framer Motion	AnimatePresence on mount	Low
Scroll reveal	Framer Motion	useInView + motion.div	Medium
Stagger children	Framer Motion	staggerChildren in variants	Medium
Button hover	Tailwind CSS	hover: classes	Low
Card hover lift	Tailwind CSS	hover:shadow-lg transition	Low
Stats count up	Custom hook	useCountUp with requestAnimationFrame	Medium
Smooth scroll	CSS	scroll-behavior: smooth	Low
Nav active state	React state	useState + scroll listener	Low
Animation Library Choices
Primary: Framer Motion
Best React integration
Declarative API
Built-in scroll animations with useInView
Stagger support
AnimatePresence for mount/unmount
Secondary: Tailwind CSS Transitions
Simple hover states
Color transitions
Transform transitions
Project File Structure
Copy
app/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── Header.tsx
│   │   ├── Subnav.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── Challenges.tsx
│   │   ├── Expertise.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Resources.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useCountUp.ts
│   ├── components/
│   │   └── FadeIn.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
│   └── images/
├── index.html
└── package.json
Dependencies
JSON
Copy
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  }
}
Responsive Breakpoints
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
Performance Considerations
Use will-change on animated elements
Lazy load images below fold
Use CSS transforms instead of layout properties
Implement reduced-motion media query support