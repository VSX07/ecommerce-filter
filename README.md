# 🛒 E-Commerce Product Multi-Filter Sidebar

A full-stack e-commerce product filtering application built using **React**, **Node.js**, and **Express**. The application allows users to browse products and dynamically filter them by category, price range, and minimum rating, along with sorting options.

---

## 🚀 Features

- 📂 Filter products by category
- 💰 Filter products by minimum and maximum price
- ⭐ Filter products by minimum rating
- 🔄 Sort products by:
  - Price: Low to High
  - Price: High to Low
  - Top Rated First
- ⚡ Instant filtering without page reload
- 🔁 Reset all filters
- 📦 Responsive product grid
- ❌ "No Products Found" screen when no products match the selected filters

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- CORS

---

## 📁 Project Structure

```
ecommerce-filter
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── SortDropdown.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── server
    ├── controllers
    │   └── productController.js
    │
    ├── data
    │   └── products.js
    │
    ├── routes
    │   └── productRoutes.js
    │
    ├── utils
    │   └── filterProducts.js
    │
    ├── app.js
    ├── server.js
    └── package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-filter.git
```

```bash
cd ecommerce-filter
```

---

## Backend Setup

```bash
cd server
```

Install dependencies

```bash
npm install
```

Run the backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:3000
```

---

## Frontend Setup

Open another terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## API Endpoint

### Get Products

```
GET /products
```

### Filter by Category

```
GET /products?category=Electronics
```

### Filter by Rating

```
GET /products?rating=4
```

### Filter by Price

```
GET /products?minPrice=1000&maxPrice=5000
```

### Sort Products

```
GET /products?sort=priceLow
```

```
GET /products?sort=priceHigh
```

```
GET /products?sort=topRated
```

### Combine Filters

```
GET /products?category=Electronics&rating=4&minPrice=10000&maxPrice=80000&sort=priceLow
```

---

## 🧠 Backend Logic

The filtering logic is implemented on the server side.

The backend performs:

- Category Filtering
- Price Range Filtering
- Minimum Rating Filtering
- Sorting
- Returns only matching products

This keeps the frontend focused only on presentation and user interactions.

---

## 📸 Application Workflow

```
User Changes Filter

        │

        ▼

React Updates State

        │

        ▼

Axios API Request

        │

        ▼

Express Backend

        │

        ▼

Filter Products

(Category + Price + Rating)

        │

        ▼

Sort Products

        │

        ▼

Return Filtered Data

        │

        ▼

Render Product Cards
```

---

## 🎯 Future Improvements

- Product Search
- Pagination
- MongoDB Database Integration
- Authentication
- Wishlist
- Shopping Cart
- Responsive Mobile UI
- Dual Range Slider
- Dark Mode

---

## 👨‍💻 Author

**Vivek Singh**

GitHub:[https://github.com/VSX07/ecommerce-filter/tree/main]

---

## 📄 License

This project is developed for learning purposes and coding assessment.
