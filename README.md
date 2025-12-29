# Dra. Fabiana Da Silva - Professional Medical Website

A modern, responsive website for Dra. Fabiana Da Silva (my sister), a medical doctor specializing in general medicine with a focus on ear, nose, and throat conditions. Built with Next.js 16 and Tailwind CSS v4, featuring smooth animations, interactive elements, and a professional design.

## 🌟 Features

### Core Features
- **Professional Profile**: Complete medical professional profile with credentials, specialties, and contact information
- **Service Information**: Detailed information about consultation types (in-person and online), services, and pricing
- **Patient Testimonials**: Showcase of patient reviews and testimonials
- **Blog Preview**: Section for medical articles and health information
- **Contact Integration**: Multiple contact methods including WhatsApp and email

### Interactive Features
- **Floating WhatsApp Button**: 
  - Always-visible WhatsApp contact button with FAQ panel
  - 5 frequently asked questions with expandable answers
  - Direct WhatsApp link with pre-filled message
  - Sound notification and vibration effects on first user interaction
  - Smooth animations (pulse, float, shake)

- **Scroll Animations**: 
  - Fade-in and slide-up animations as sections enter viewport
  - Staggered delays for smooth visual flow
  - Intersection Observer-based performance

- **Hover Effects**:
  - Interactive buttons with scale and shadow effects
  - Card lift animations on hover
  - Smooth color transitions on links
  - Image zoom effects

### Design Features
- **Custom Brand Colors**: Purple/lilac color scheme throughout
- **Custom Scrollbar**: Brand-colored scrollbar (purple/lilac)
- **Professional Logo**: SVG logo with gradient design
- **Responsive Design**: Fully responsive layout for all devices
- **Smooth Scrolling**: Enhanced navigation experience

### Technical Features
- **Next.js 16**: Latest Next.js with App Router
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **TypeScript**: Type-safe development
- **Optimized Images**: Next.js Image component for performance
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **React**: 19.2.3
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/dra-fabiana-da-silva.git
cd dra-fabiana-da-silva
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Run the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Usage

### Development

```bash
# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linter
yarn lint
```

### Customization

#### Brand Colors
Edit brand colors in `src/app/globals.css`:
```css
--color-brand-light: #F9F5FF;
--color-brand: #7C3AED;
--color-brand-dark: #5B21B6;
--color-brand-soft: #E9D5FF;
--color-brand-accent: #A855F7;
```

#### Contact Information
Update contact details in `src/app/page.tsx`:
- Phone/WhatsApp number
- Email addresses
- Office address

#### FAQ Questions
Modify FAQ questions in `src/app/components/WhatsAppFloat.tsx`:
```typescript
const FAQ_QUESTIONS = [
  {
    question: "Your question?",
    answer: "Your answer.",
  },
];
```

#### Logo
Replace `public/logo.svg` with your custom logo.

## 📁 Project Structure

```
dra-fabiana-da-silva/
├── public/
│   ├── logo.svg              # Main logo
│   └── dra-fabiana-da-silva.jpg  # Doctor's photo
├── src/
│   └── app/
│       ├── components/
│       │   ├── ScrollAnimation.tsx    # Scroll animation component
│       │   └── WhatsAppFloat.tsx      # Floating WhatsApp button with FAQ
│       ├── globals.css                # Global styles and animations
│       ├── layout.tsx                 # Root layout with header/footer
│       └── page.tsx                   # Main page content
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Key Components

### ScrollAnimation
Reusable component for scroll-triggered animations using Intersection Observer API.

### WhatsAppFloat
Floating WhatsApp button with:
- FAQ panel with expandable questions
- Sound notification on first interaction
- Device vibration support
- Smooth animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is private and proprietary.

## 👤 Author

**Andrea Da Silva**
- Website: [https://andreaintech.github.io/web/](https://andreaintech.github.io/web/)
- Email: adasilvapdev@gmail.com

## 🙏 Acknowledgments

- Built with 💜 by [Andrea Da Silva](https://andreaintech.github.io/web/)
- Design inspired by modern medical professional websites
- Icons and graphics custom designed

---

**Note**: This is an informational website. It does not replace an in-person medical consultation or emergency services.
