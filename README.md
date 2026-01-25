# Mobile-First Website

A minimal Next.js website that displays differently on mobile vs desktop/tablet.

## Structure

### Mobile (< 768px)
- Full-screen layout using `100dvh`
- Content displayed directly, no mockup
- No scrolling (overflow: hidden)

### Desktop/Tablet (>= 768px)
- iPhone mockup centered on dark background
- Same content displayed inside iPhone screen
- No scrolling (overflow: hidden)

## Files

### `/app/page.tsx`
**Main content file** - Edit this to change the website content.

The content is duplicated in two sections:
- `.mobile-wrapper` - Visible on mobile
- `.desktop-wrapper` - Visible on desktop (inside iPhone mockup)

**To edit content:** Update the text inside both sections:
- `<h1 className="title">Welcome</h1>` - Main title
- `<p className="subtitle">...</p>` - Subtitle
- `<button className="button">...</button>` - Button

### `/app/globals.css`
**Stylesheet** - Contains all CSS including:
- Scroll prevention (overflow: hidden)
- Mobile/desktop responsive behavior
- iPhone mockup styling (CSS-only, no images)
- Content styles

### `/app/layout.tsx`
**Root layout** - Minimal Next.js layout with viewport settings.

## Key Features

- ✅ Uses `100dvh` instead of `100vh` for mobile browser compatibility
- ✅ CSS-only responsive behavior (no JavaScript detection)
- ✅ Completely prevents scrolling
- ✅ Pixel-perfect iPhone mockup created with CSS
- ✅ Same content in both mobile and desktop views

## Testing

1. **Mobile view:** Resize browser window to < 768px width
2. **Desktop view:** Resize browser window to >= 768px width

## Customization

### Change breakpoint
Edit the media query in `globals.css`:
```css
@media (min-width: 768px) { ... }
```

### Change iPhone size
Edit `.iphone-mockup` dimensions in `globals.css`:
```css
.iphone-mockup {
  width: 375px;  /* Change this */
  height: 812px; /* Change this */
}
```

### Change background color
Edit `.desktop-wrapper` background in `globals.css`:
```css
.desktop-wrapper {
  background: #1a1a1a; /* Change this */
}
```
