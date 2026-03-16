# 24 Karat Bakery - Project Technical Overview

## 🥯 Project Vision
24 Karat Bakery is a modern React-based frontend designed to provide a premium, interactive experience for a community-powered bakery in Chicago. It serves as a "headless" layer on top of a WordPress/WooCommerce backend.

## 🛠️ Tech Stack
- **Frontend**: React 19 (using Vite for fast development and builds).
- **Styling**: Vanilla CSS (focused on custom animations and premium aesthetics).
- **E-commerce**: WooCommerce (WordPress) handles the checkout, payments (Stripe), and backend operations.

## 🏗️ Architecture & Component Logic
The application is primarily managed within `src/App.jsx`, which uses a state-driven approach to switch between two main views:

### 1. Home View (`view === 'home'`)
- **Hero**: Atmospheric intro with a call to action.
- **Story & About**: Sections detailing the bakery's mission and co-op model.
- **Ownership (Section 2)**: An interactive widget where users can select membership tiers (Community, Gold, Founding) based on the number of shares.
- **Carousel**: A seamless infinite scroll of bakery images.
- **Waitlist/Contact**: Forms for community engagement and inquiries.

### 2. Menu View (`view === 'menu'`)
- Triggered by `?view=menu` in the URL or the `#now-in-season` hash.
- **Product Grid**: Displays various categories of products (Bakery, Pantry, Merch, Bundles).
- **Interactive Ordering**: Uses a `redirectToCheckout` helper to bridge the React frontend with the WooCommerce checkout flow.

## 🔗 WordPress/WooCommerce Integration
- **Direct Checkout**: The React app skips the "Cart" page on the frontend and redirects users directly to the WooCommerce checkout via URL parameters: `/checkout/?add-to-cart=[ID]&quantity=[QTY]`.
- **Product Mapping**: Product IDs are hardcoded within `App.jsx` components (e.g., `1931` for Pastry Box).
- **Visual Branding**: Custom CSS is injected into WordPress to ensure the "look and feel" remains consistent throughout the payment process.

## 📂 Key Files & Directories
- `src/App.jsx`: The core logic, view management, and all UI components.
- `src/App.css`: Extensive styling for the entire application, including animations and responsive layouts.
- `src/assets/`: Contains images categorized by their use (Carousel, Store Page, etc.).
- `PROJECT_CONTEXT.md`: High-level strategic overview and goals.

## 🚀 Future Roadmap
1. **Frontend-Backend Sync**: Improving the bridge between React actions and WooCommerce state.
2. **Responsive Refining**: Ensuring the complex product grids and carousels are pixel-perfect on all devices.
3. **Checkout Customization**: Further styling of the Stripe/WooCommerce elements for a seamless user journey.
