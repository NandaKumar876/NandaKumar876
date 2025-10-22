import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiEye, FiStar } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.sizes || product.sizes.length === 0) {
      toast.error('This product is currently out of stock');
      return;
    }

    const result = await addToCart(
      product._id,
      product.sizes[0].size, // Default to first available size
      product.colors[0] || 'Default', // Default to first available color
      1
    );

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // You could implement a quick view modal here
    toast.success('Quick view feature coming soon!');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success('Added to wishlist!');
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="sneaker-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/products/${product._id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[selectedImage]?.url || product.images[0]?.url}
            alt={product.images[selectedImage]?.alt || product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discountPercentage}%
            </div>
          )}

          {/* Action Buttons */}
          <div className={`absolute top-2 right-2 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <button
              onClick={handleWishlist}
              className="p-2 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 rounded-full shadow-lg transition-colors duration-200"
            >
              <FiHeart className="w-4 h-4" />
            </button>
            <button
              onClick={handleQuickView}
              className="p-2 bg-white/90 hover:bg-white text-gray-700 hover:text-primary-600 rounded-full shadow-lg transition-colors duration-200"
            >
              <FiEye className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Add to Cart Button */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FiShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">
            {product.brand}
          </p>
          
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex space-x-1 mb-2">
              {product.colors.slice(0, 4).map((color, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-gray-900 scale-110'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-gray-500 self-center">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.sizes.slice(0, 4).map((sizeOption, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded ${
                    sizeOption.stock > 0
                      ? 'bg-gray-100 text-gray-700'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {sizeOption.size}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;