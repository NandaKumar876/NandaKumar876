# SneakerShop - MERN Stack E-commerce Application

A modern, interactive sneaker shop built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring animated slideshows, responsive design, and a complete e-commerce experience.

## 🚀 Features

### Frontend (React + Tailwind CSS)
- **Animated Slideshow**: Interactive hero section with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Catalog**: Advanced filtering, sorting, and search functionality
- **Shopping Cart**: Full cart management with real-time updates
- **User Authentication**: Login/Register with JWT tokens
- **Product Details**: Detailed product pages with image galleries
- **Checkout Process**: Complete checkout flow with form validation
- **User Profile**: Account management and order history
- **Modern UI/UX**: Beautiful animations and micro-interactions

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Well-structured API endpoints
- **User Management**: Authentication and authorization
- **Product Management**: CRUD operations for products
- **Cart System**: Shopping cart functionality
- **Database Models**: Mongoose schemas for data management
- **Security**: Password hashing and JWT authentication

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Axios (HTTP client)
- React Hot Toast (notifications)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- JWT (authentication)
- Bcryptjs (password hashing)
- CORS (cross-origin requests)

## 📁 Project Structure

```
sneaker-shop-mern/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── auth.js
│   │   └── cart.js
│   ├── server.js
│   ├── seedData.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   ├── AnimatedSlideshow.js
│   │   │   └── ProductCard.js
│   │   ├── contexts/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── Cart.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Profile.js
│   │   │   └── Checkout.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sneaker-shop-mern
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   npm run install-server
   
   # Install frontend dependencies
   npm run install-client
   ```

3. **Set up environment variables**
   ```bash
   # Backend .env file
   MONGODB_URI=mongodb://localhost:27017/sneaker-shop
   JWT_SECRET=your-super-secret-jwt-key
   PORT=5000
   NODE_ENV=development
   ```

4. **Seed the database**
   ```bash
   cd backend
   node seedData.js
   ```

5. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately
   npm run server  # Backend on port 5000
   npm run client  # Frontend on port 3000
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎨 Key Features Explained

### Animated Slideshow
The hero section features a fully interactive slideshow with:
- Smooth fade transitions between slides
- Auto-play functionality with pause/play controls
- Navigation arrows and dot indicators
- Progress bar showing slide timing
- Responsive design for all screen sizes

### Product Management
- Advanced filtering by category, brand, price range
- Real-time search functionality
- Sorting options (price, rating, name, date)
- Grid and list view modes
- Pagination for large product catalogs

### Shopping Cart
- Add/remove items with quantity controls
- Real-time price calculations
- Persistent cart across sessions
- Size and color selection
- Quick add to cart from product cards

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Toast notifications for user feedback
- Responsive design for mobile and desktop
- Modern, clean interface design

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products with filtering
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile/:userId` - Get user profile
- `PUT /api/auth/profile/:userId` - Update user profile

### Cart
- `GET /api/cart/:userId` - Get user's cart
- `POST /api/cart/:userId/add` - Add item to cart
- `PUT /api/cart/:userId/update/:itemId` - Update cart item
- `DELETE /api/cart/:userId/remove/:itemId` - Remove cart item
- `DELETE /api/cart/:userId/clear` - Clear cart

## 🎯 Future Enhancements

- [ ] Payment integration (Stripe, PayPal)
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product image upload
- [ ] Advanced search with filters
- [ ] Social media integration
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Unsplash for providing high-quality product images
- React and Tailwind CSS communities for excellent documentation
- Framer Motion for smooth animations
- All open-source contributors who made this project possible

---

**Happy Shopping! 👟**