# Project Context: 24 Karat Bakery

## 🍞 Overview
This project involves building a fast, modern React-based frontend (using Vite) that acts as a sleek landing page and interactive menu, layered on top of a traditional WordPress/WooCommerce site for "24 Karat Bakery". 

The primary goal is to provide a highly interactive user interface using React, while relying on WordPress/WooCommerce as the e-commerce engine for handling the actual checkout and backend operations.

## 🏗️ Architecture & Structure
- **Frontend (`vite-app`)**: A standalone React application built with Vite. It handles the user-facing interface, including the hero section, image carousels, the main landing page, and a separate "Menu / Store" view. This repository contains the frontend code.
- **Backend (WordPress/WooCommerce)**: Serves as the robust e-commerce engine. Custom themes and plugins are used to map the React frontend into the WordPress ecosystem and handle the business logic.

## 🔑 Key Technical Details
- **View Management**: The React app dynamically renders different sections (Navbar, Hero, Product Grid, etc.) based on the current view state (Home vs. Menu) and URL parameters/hashes.
- **Styling Strategy**: 
  - Vanilla CSS (`App.css`, `index.css`) is used to style the React components. 
  - A major technical requirement is **visual continuity**. Custom CSS has been (and continues to be) injected into the WordPress WooCommerce checkout pages to guarantee a cohesive visual brand experience from the React app all the way through the Stripe payment process.
- **Assets**: Product images, bakery logos, and custom fonts are stored directly within the React `public/` and `src/assets/` directories.

## 🔄 Recent Priorities & Work Completed
- **Separation of Views**: Refined the structure to distinctly separate the "Home" landing experience from the detailed "Menu" product catalog.
- **Checkout Styling**: Extensively styled the WooCommerce checkout and Stripe elements in WordPress to perfectly match the React app’s modern aesthetic.
- **Git Initialization**: Initialized and synced this standalone `vite-app` repository to GitHub.

## 🤖 Note for the Incoming AI Agent
When you resume work on this project, your immediate focus will likely revolve around the following areas:
1. **Frontend-Backend Integration**: Bridging actions in the Vite frontend (like adding to cart) with the WordPress checkout flow.
2. **UI/UX Polish**: Refining the layout and responsive design within the React app, ensuring all product images and carousels render smoothly.
3. **WooCommerce Syncing**: Ensuring seamless user flows from interacting with a product in the React app to finalizing their purchase in WooCommerce via Stripe.
4. **Style Alignment**: Continuing to write custom CSS overrides for WooCommerce or Stripe elements to preserve the site's rich aesthetic.

**Always remember to prioritize a visually stunning and cohesive design across both the React and WordPress boundaries.**
