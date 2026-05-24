# Kentank - Premium Water Tank Company Website

A modern, premium water tank manufacturing and distribution company website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Premium industrial design with glassmorphism effects and smooth animations
- **Responsive Design**: Mobile-first approach that works on all devices
- **WhatsApp Ordering**: Integrated WhatsApp checkout system for instant orders
- **Tank Calculator**: Interactive calculator to help customers choose the right tank size
- **Product Catalog**: Full product listing with categories (Vertical, Horizontal, Loft, Underground, Septic, Industrial)
- **Product Details**: Detailed product pages with specifications, gallery, and reviews
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML for better search rankings
- **Contact Form**: Functional contact form with validation
- **Delivery Coverage**: Visual representation of nationwide delivery across Kenya
- **Trust Elements**: Customer reviews, certifications, and guarantees
- **Floating WhatsApp Button**: Always-accessible WhatsApp chat button

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kentnk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
kentnk/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # Product detail page
│   │   │   └── page.tsx          # Products listing page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx       # Reusable button component
│       │   ├── Card.tsx         # Reusable card component
│       │   └── Modal.tsx        # Reusable modal component
│       ├── Footer.tsx           # Footer component
│       ├── FloatingWhatsApp.tsx # Floating WhatsApp button
│       ├── Navigation.tsx      # Navigation component
│       ├── TankCalculator.tsx   # Tank size calculator
│       └── WhatsAppOrderModal.tsx # WhatsApp order modal
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    900: '#0a1628',
    800: '#0f2744',
    700: '#1a3a5c',
  },
  orange: {
    500: '#f97316',
    600: '#ea580c',
  },
}
```

### WhatsApp Number

Update the WhatsApp number in the following files:
- `src/components/FloatingWhatsApp.tsx`
- `src/components/WhatsAppOrderModal.tsx`
- `src/app/contact/page.tsx`

Replace `254740272542` with your WhatsApp business number.

### Images

Replace placeholder images with your actual product images. Update image URLs in:
- `src/app/page.tsx` (Hero and featured products)
- `src/app/products/page.tsx` (Product catalog)
- `src/app/products/[id]/page.tsx` (Product gallery)
- `src/app/about/page.tsx` (About page images)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click Deploy

### Other Platforms

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## 📱 Pages

- **Home** (`/`): Hero section, stats, featured products, testimonials, CTA
- **Products** (`/products`): Product catalog with category filters
- **Product Detail** (`/products/[id]`): Individual product with specifications
- **About** (`/about`): Company history, mission, vision, certifications
- **Contact** (`/contact`): Contact form, map, delivery information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Button Component
Reusable button with variants: primary, secondary, outline, whatsapp

### Card Component
Animated card component with hover effects

### Modal Component
Accessible modal with backdrop blur and animations

### Tank Calculator
Interactive calculator that recommends tank sizes based on usage

### WhatsApp Order Modal
Form that captures customer details and redirects to WhatsApp

## 🌐 SEO

The website includes:
- Meta tags for title and description
- Open Graph tags for social sharing
- Semantic HTML structure
- Keywords for water tanks in Kenya

## 📞 Contact Information

Update contact details in:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

Built with ❤️ for Kentank Kenya
