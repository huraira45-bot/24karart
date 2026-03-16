# 24 Karat Bakery - Frontend

A premium, interactive React-based frontend for a community-powered bakery in Chicago.

## 🥯 Project Purpose
This application serves as a modern, interactive landing page and storefront that integrates seamlessly with a WordPress/WooCommerce backend for e-commerce operations.

## 🛠️ Tech Stack
- **Frontend**: React 19 + Vite
- **Styling**: Vanilla CSS (Custom animations & premium design)
- **E-commerce**: WooCommerce (WP) for checkout and payments

## 🏗️ Core Architecture
- **State-Driven Views**: Swaps between 'Home' and 'Menu' views via URL parameters and internal state.
- **Headless Checkout**: Redirects users directly to WooCommerce checkout with items selected in the React UI.
- **Interactive Ownership**: A custom widget for selecting membership tiers and shares.

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📂 Key Files
- `src/App.jsx`: Main logic, view management, and core UI components.
- `src/App.css`: Centralized styles and animations.
- `PROJECT_OVERVIEW.md`: Detailed technical architecture.
- `PROJECT_CONTEXT.md`: High-level strategic goals and roadmap.
