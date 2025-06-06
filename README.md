# GTA Landing Page

A stunning, animated landing page inspired by Grand Theft Auto with smooth GSAP animations and parallax effects. Features a cinematic splash screen with mask reveal animation and interactive mouse-following parallax.

## 🎮 Features

- **Cinematic Splash Screen**: SVG mask animation with "VI" text reveal
- **Smooth Transitions**: GSAP-powered animations with custom easing
- **Parallax Effects**: Mouse-controlled parallax layers for immersive experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, gaming-inspired interface with gradient overlays
- **Interactive Elements**: Hover effects and smooth state transitions

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **GSAP** - Professional animation library
- **@gsap/react** - GSAP React integration
- **Tailwind CSS** - Utility-first CSS framework
- **RemixIcon** - Icon library for UI elements

## 🎨 Animation Breakdown

### Splash Screen Animation
- **SVG Mask Reveal**: Text "VI" rotates and scales to reveal background
- **Timeline Duration**: 4 seconds total
- **Easing**: Power4.easeInOut → Expo.easeInOut

### Main Content Animation
- **Staggered Entrance**: All elements animate in with offset delays
- **Parallax Layers**: Different movement speeds for depth
- **Mouse Interaction**: Real-time parallax based on cursor position

### CSS Classes & Animations
```css
.main { transform: rotate(-10deg) scale(1.7) }  /* Initial state */
.sky { scale: 1.5, rotate: -20deg }             /* Sky layer */
.bg { scale: 1.8, rotate: -3deg }               /* Background layer */
.character { scale: 1.2, rotate: -5deg }        /* Character positioning */
```

## 🎯 Key Components

### State Management
```javascript
const [showContent, setShowContent] = useState(false);
```

### GSAP Integration
- **useGSAP Hook**: Proper React integration with cleanup
- **Timeline Control**: Sequential animations with precise timing
- **Dynamic Updates**: Real-time animation progress tracking

### Responsive Design
- **Mobile-first**: Tailwind classes with responsive breakpoints
- **Flexible Layout**: CSS Grid and Flexbox for complex layouts
- **Scalable Typography**: Responsive text sizing

## 📱 Responsive Breakpoints

- **Mobile**: Base styles (320px+)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## 🎪 Animation Performance

- **GPU Acceleration**: Transform properties for smooth animations
- **Efficient Updates**: GSAP's optimized rendering engine
- **Memory Management**: Proper cleanup with `this.kill()`

---

## 🤔 Some Questions & Answers

### **1. Explain the splash screen animation sequence.**

**Answer**: The splash screen uses an SVG mask animation with a two-part timeline:
1. **Rotation Phase**: The "VI" text rotates 10 degrees over 2 seconds using `Power4.easeInOut`
2. **Scale & Fade**: Simultaneously scales to 10x and fades to opacity 0 using `Expo.easeInOut`
3. **Progress Tracking**: Uses `onUpdate` callback to detect 90% completion, then removes the splash screen and shows main content

```javascript
tl.to(".vi-mask-group", { rotate: 10, duration: 2 })
  .to(".vi-mask-group", { 
    scale: 10, 
    opacity: 0,
    onUpdate: function() {
      if (this.progress() >= 0.9) {
        setShowContent(true);
        this.kill();
      }
    }
  });
```

### **2. How does the parallax effect work?**

**Answer**: The parallax is implemented using mouse move events with different movement multipliers:
- **Text**: Moves at 0.4x speed (`xMove * 0.4`)
- **Sky**: Moves at 1x speed (`xMove`)
- **Background**: Moves at 1.7x speed (`xMove * 1.7`)

This creates depth by making background elements move faster than foreground elements. The `xMove` is calculated as: `(e.clientX / window.innerWidth - 0.5) * 40`

### **3. Why use `useGSAP` instead of `useEffect`?**

**Answer**: `useGSAP` provides several advantages:
- **Automatic Cleanup**: Handles GSAP animation cleanup on unmount
- **Context Integration**: Better integration with GSAP's context system
- **Performance**: Optimized for GSAP's animation lifecycle
- **Dependency Handling**: Proper re-triggering when dependencies change

### **4. Explain the responsive design strategy.**

**Answer**: The project uses a mobile-first approach with Tailwind CSS:
- **Base styles**: Target mobile devices (320px+)
- **Progressive enhancement**: `md:` (768px+) and `lg:` (1024px+) prefixes
- **Flexible units**: Uses `rem`, `vh`, and percentages for scalability
- **Container queries**: Max-width containers with responsive padding

### **5. How would you optimize this for better performance?**

**Answer**: Several optimization strategies:
- **Image optimization**: Use WebP format, lazy loading, and responsive images
- **Code splitting**: Dynamic imports for GSAP plugins
- **Animation optimization**: Use `will-change` property, prefer transform/opacity
- **Memory management**: Proper cleanup of event listeners and GSAP instances
- **Bundle optimization**: Tree-shaking unused GSAP modules

### **6. What's the purpose of the SVG mask technique?**

**Answer**: SVG masking creates a sophisticated reveal effect:
- **Non-destructive**: Doesn't modify the original image
- **Smooth transitions**: Vector-based scaling remains crisp
- **Creative control**: Complex shapes and text can be used as masks
- **Performance**: GPU-accelerated rendering

### **7. How would you add more interactive elements?**

**Answer**: Potential enhancements:
- **Scroll-triggered animations**: Using GSAP ScrollTrigger
- **3D transforms**: Adding perspective and rotateX/Y
- **Particle effects**: Canvas-based background elements
- **Sound integration**: Audio triggers with Web Audio API
- **Touch gestures**: Mobile swipe interactions

### **8. Explain the animation timing and easing choices.**

**Answer**: 
- **Power4.easeInOut**: Smooth, cinematic start for rotation
- **Expo.easeInOut**: Dramatic, game-like scaling effect
- **Staggered delays**: `-1.8`, `-.8` seconds create flowing sequence
- **2-second duration**: Balances impact with user patience

### **9. How would you handle browser compatibility?**

**Answer**:
- **GSAP fallbacks**: GSAP handles most cross-browser issues
- **CSS feature detection**: Use `@supports` for advanced features
- **Polyfills**: For older browsers (Intersection Observer, etc.)
- **Progressive enhancement**: Core content works without animations

### **10. What testing strategy would you implement?**

**Answer**:
- **Unit tests**: React Testing Library for component behavior
- **Animation tests**: GSAP timeline completion and state changes
- **Visual regression**: Screenshot testing for animation frames
- **Performance tests**: FPS monitoring and memory usage
- **Accessibility**: Screen reader compatibility and reduced motion preferences

---

## 🔧 Development Notes

- Images should be optimized for web (WebP recommended)
- GSAP requires proper licensing for commercial use
- Consider implementing `prefers-reduced-motion` for accessibility
- Use Chrome DevTools Performance tab to monitor animation performance

