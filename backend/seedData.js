const mongoose = require('mongoose');
const Product = require('./models/Product');
const User = require('./models/User');

const sampleProducts = [
  {
    name: "Air Jordan 1 Retro High OG",
    brand: "Jordan",
    price: 170,
    originalPrice: 200,
    description: "The Air Jordan 1 Retro High OG is a classic basketball shoe that started it all. Featuring premium leather construction and the iconic Air Jordan silhouette.",
    images: [
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Air Jordan 1 Retro High OG" },
      { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Air Jordan 1 side view" }
    ],
    sizes: [
      { size: "7", stock: 5 },
      { size: "8", stock: 8 },
      { size: "9", stock: 12 },
      { size: "10", stock: 15 },
      { size: "11", stock: 10 },
      { size: "12", stock: 6 }
    ],
    colors: ["Black", "White", "Red"],
    category: "basketball",
    featured: true,
    rating: 4.8,
    reviewCount: 124,
    tags: ["basketball", "retro", "classic"]
  },
  {
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150,
    description: "The Nike Air Max 270 delivers visible cushioning under every step. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    images: [
      { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Nike Air Max 270" },
      { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Nike Air Max 270 side view" }
    ],
    sizes: [
      { size: "7", stock: 3 },
      { size: "8", stock: 7 },
      { size: "9", stock: 9 },
      { size: "10", stock: 11 },
      { size: "11", stock: 8 },
      { size: "12", stock: 4 }
    ],
    colors: ["White", "Black", "Blue"],
    category: "lifestyle",
    featured: true,
    rating: 4.6,
    reviewCount: 89,
    tags: ["lifestyle", "comfort", "casual"]
  },
  {
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 180,
    description: "The Adidas Ultraboost 22 features responsive Boost midsole technology and Primeknit+ upper for a comfortable, supportive fit. Perfect for running or everyday wear.",
    images: [
      { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Adidas Ultraboost 22" },
      { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Adidas Ultraboost 22 side view" }
    ],
    sizes: [
      { size: "7", stock: 4 },
      { size: "8", stock: 6 },
      { size: "9", stock: 10 },
      { size: "10", stock: 13 },
      { size: "11", stock: 9 },
      { size: "12", stock: 5 }
    ],
    colors: ["White", "Black", "Grey"],
    category: "running",
    featured: true,
    rating: 4.7,
    reviewCount: 156,
    tags: ["running", "boost", "performance"]
  },
  {
    name: "Converse Chuck Taylor All Star",
    brand: "Converse",
    price: 65,
    description: "The Converse Chuck Taylor All Star is a timeless classic. With its iconic design and versatile style, it's perfect for any occasion.",
    images: [
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Converse Chuck Taylor All Star" },
      { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Converse Chuck Taylor side view" }
    ],
    sizes: [
      { size: "7", stock: 8 },
      { size: "8", stock: 12 },
      { size: "9", stock: 15 },
      { size: "10", stock: 18 },
      { size: "11", stock: 14 },
      { size: "12", stock: 9 }
    ],
    colors: ["White", "Black", "Red", "Blue"],
    category: "lifestyle",
    featured: false,
    rating: 4.5,
    reviewCount: 203,
    tags: ["classic", "canvas", "casual"]
  },
  {
    name: "Vans Old Skool",
    brand: "Vans",
    price: 75,
    description: "The Vans Old Skool is a skateboarding classic. With its durable construction and iconic side stripe, it's perfect for both skating and street style.",
    images: [
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Vans Old Skool" },
      { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Vans Old Skool side view" }
    ],
    sizes: [
      { size: "7", stock: 6 },
      { size: "8", stock: 9 },
      { size: "9", stock: 11 },
      { size: "10", stock: 14 },
      { size: "11", stock: 10 },
      { size: "12", stock: 7 }
    ],
    colors: ["Black", "White", "Navy"],
    category: "skateboarding",
    featured: true,
    rating: 4.4,
    reviewCount: 98,
    tags: ["skateboarding", "durable", "street"]
  },
  {
    name: "Nike React Element 55",
    brand: "Nike",
    price: 130,
    description: "The Nike React Element 55 delivers lightweight, responsive cushioning. Its futuristic design and comfortable fit make it perfect for all-day wear.",
    images: [
      { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Nike React Element 55" },
      { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Nike React Element 55 side view" }
    ],
    sizes: [
      { size: "7", stock: 5 },
      { size: "8", stock: 8 },
      { size: "9", stock: 10 },
      { size: "10", stock: 12 },
      { size: "11", stock: 9 },
      { size: "12", stock: 6 }
    ],
    colors: ["White", "Black", "Grey"],
    category: "lifestyle",
    featured: false,
    rating: 4.3,
    reviewCount: 67,
    tags: ["react", "lightweight", "futuristic"]
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sneaker-shop');
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Inserted sample products');

    // Create a sample admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@sneakershop.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Created admin user');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase();