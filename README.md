
# StarkMart Frontend

This is the frontend for StarkMart, a modern e-commerce web application. Built with React, Redux Toolkit, and Tailwind CSS, it provides a seamless shopping experience with authentication, product browsing, cart, checkout, and Stripe payments.

---

## Features

- Modern, responsive UI with Tailwind CSS
- State management with Redux Toolkit
- Authentication and protected routes
- Product listing, filtering, and details
- Shopping cart and checkout flow
- Stripe payment integration
- Admin dashboard for managing products, orders, and users

---

## Tech Stack

- React.js (Create React App)
- Redux Toolkit
- React Router
- Tailwind CSS
- Stripe.js
- React Toastify

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Setup

1. Navigate to the frontend folder:
	```
	cd Frontend
	```
2. Install dependencies:
	```
	npm install
	```
3. Start the React app:
	```
	npm start
	```
	The app will run on `http://localhost:3000` and proxy API requests to the backend.

---

## Scripts

- `npm start` — Start React development server
- `npm run build` — Build for production
- `npm test` — Run tests

---

## Folder Structure

```
src/
  app/            # Redux store, constants
  features/       # Redux slices & API logic (auth, cart, product, order, user)
  pages/          # Main pages (Home, Login, Cart, Checkout, etc.)
  common/         # Shared UI components
  navbar/         # Navigation bar
  Images/         # Static images
public/           # Static files
tailwind.config.js
```

---

## API Integration

The frontend expects the backend API to be running (see backend repo for setup). API endpoints are proxied via `http://localhost:8080` by default.

---

## License

This project is licensed under the ISC License.
