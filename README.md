# Omni Seq - Enterprise Cybersecurity Solutions

A modern, responsive website for Omni Seq Pvt. Ltd., showcasing enterprise-grade cybersecurity and IT infrastructure solutions.

## 🌐 Live Site

**Production URL:** [https://omniseq.com.np](https://omniseq.com.np)  
**GitHub Pages:** [https://omniseq.github.io/omniWeb](https://omniseq.github.io/omniWeb)

## ✨ Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive UI** - Mouse-responsive background effects and smooth animations
- **Performance Optimized** - Fast loading with optimized assets and lazy loading
- **SEO Friendly** - Comprehensive meta tags, Open Graph, and semantic HTML
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Modern Stack** - Vue.js 3, Handlebars.js, and vanilla JavaScript
- **Smooth Scrolling** - Enhanced navigation with smooth section transitions

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Omni-seQ/omniWeb.git
   cd omniWeb
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server -p 8000
     
     # PHP
     php -S localhost:8000
     ```

3. **Access locally**
   - Open `http://localhost:8000` in your browser

### No Build Process Required

This is a static website with no build step. All files are ready to deploy as-is.

## 📁 Project Structure

```
omniWeb/
├── index.html          # Main HTML file
├── main.js            # Vue.js application and JavaScript logic
├── templates.js       # Handlebars templates and data
├── styles.css         # All styles and responsive design
├── CNAME              # Custom domain configuration
├── .nojekyll          # Disable Jekyll processing for GitHub Pages
└── README.md          # This file
```

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework for reactive UI
- **Handlebars.js** - Templating engine for dynamic content
- **Vanilla JavaScript** - Modern ES6+ features
- **CSS3** - Custom properties, animations, and responsive design
- **HTML5** - Semantic markup and accessibility features

## 📦 Dependencies

All dependencies are loaded via CDN (no package manager required):

- Vue.js 3 (Production build)
- Handlebars.js (Latest)

## 🎨 Customization

### Updating Content

1. **Services** - Edit `templates.js` → `servicesData`
2. **Industries** - Edit `templates.js` → `industriesData`
3. **Footer Links** - Edit `templates.js` → `footerData`
4. **Company Info** - Edit `index.html` directly

### Styling

- All styles are in `styles.css`
- CSS custom properties (variables) are defined in `:root`
- Dark mode support via `prefers-color-scheme`

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
  --color-primary: #21808d;
  --color-background: #fcfcf9;
  /* ... more variables */
}
```

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Branch `main`, Folder `/ (root)`
   - Save

2. **Custom Domain** (Optional)
   - Add your domain in GitHub Pages settings
   - Ensure `CNAME` file contains your domain
   - Configure DNS records:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `omniseq.github.io`

3. **Deploy**
   - Push to `main` branch
   - GitHub Pages automatically deploys

### Other Hosting Options

- **Netlify** - Drag and drop the folder
- **Vercel** - Connect GitHub repository
- **Cloudflare Pages** - Connect GitHub repository
- **Any static hosting** - Upload all files to root directory

## 🔧 Configuration

### Custom Domain Setup

1. Create `CNAME` file with your domain:
   ```
   omniseq.com.np
   ```

2. Configure DNS:
   - Add CNAME record pointing to `username.github.io`
   - Or use A records for apex domain

### Environment Variables

No environment variables needed - this is a fully static site.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Optimizations**:
  - Deferred script loading
  - Optimized animations with `will-change`
  - Lazy loading with Intersection Observer
  - Throttled scroll handlers
  - Preconnect for external resources

## 🔒 Security

- No external API calls
- No user data collection
- HTTPS required for production
- Content Security Policy ready

## 📝 License

Copyright © 2024 Omni Seq Pvt. Ltd. All rights reserved.

## 👥 Contact

- **Email**: info@omniseq.com.np
- **Phone**: +9779806056119
- **Location**: Lalitpur, Nepal
- **Website**: https://omniseq.com.np

## 🤝 Contributing

This is a private company website. For issues or suggestions, please contact the development team.

## 📄 Changelog

### Version 1.0.0 (2024-12-24)
- Initial production release
- Fixed all navigation links
- Added interactive mouse-responsive background
- Optimized fonts and performance
- Added comprehensive SEO meta tags
- Enhanced accessibility features
- Mobile-responsive design improvements

---

**Built with ❤️ by Omni Seq Development Team**

