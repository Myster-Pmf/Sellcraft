import React, { useState } from 'react';
import { 
  Smartphone, 
  Monitor, 
  ShoppingCart, 
  Plus, 
  Eye, 
  Edit3,
  Image as ImageIcon
} from 'lucide-react';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('desktop');
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    { name: 'Premium T-Shirt', price: '৳850', image: '/src/assets/tshirt.jpg' },
    { name: 'Casual Jeans', price: '৳1,200', image: '/src/assets/jeans.jpeg' },
    { name: 'Sports Shoes', price: '৳2,500', image: '/src/assets/shoes.jpeg' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See SellCraft in
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our intuitive store builder and see how easy it is to create your online presence
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-2 flex">
              <button
                onClick={() => setActiveTab('desktop')}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'desktop' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Monitor className="w-5 h-5 mr-2" />
                Desktop View
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'mobile' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-white rounded px-4 py-1 text-sm text-gray-600 max-w-xs mx-auto">
                      sellcraft.com/dashboard
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Store Builder</h3>
                    
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800">Products</h4>
                      <button className="bg-emerald-500 text-white px-3 py-1 rounded-md text-sm hover:bg-emerald-600 transition-colors">
                        <Plus className="w-4 h-4 inline mr-1" />
                        Add Product
                      </button>
                    </div>

                    {products.map((product, index) => (
                      <div 
                        key={index}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedProduct === index 
                            ? 'border-indigo-300 bg-indigo-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedProduct(index)}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-600">{product.price}</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-indigo-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-indigo-600">
                            <Edit3 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden mx-auto ${
                activeTab === 'mobile' ? 'max-w-sm' : 'w-full'
              }`}>
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">My Fashion Store</h3>
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <p className="text-indigo-100 mt-2">Premium clothing for everyone</p>
                </div>

                <div className="p-6">
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <img 
                      src={products[selectedProduct].image} 
                      alt={products[selectedProduct].name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-bold text-gray-900 mb-2">{products[selectedProduct].name}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">{products[selectedProduct].price}</span>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className={`grid ${activeTab === 'mobile' ? 'grid-cols-2' : 'grid-cols-3'} gap-4`}>
                    {products.map((product, index) => (
                      <div 
                        key={index}
                        className={`bg-gray-50 rounded-lg p-3 cursor-pointer transition-all hover:shadow-md ${
                          selectedProduct === index ? 'ring-2 ring-indigo-500' : ''
                        }`}
                        onClick={() => setSelectedProduct(index)}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-24 object-cover rounded-md mb-2"
                        />
                        <div className="text-sm font-medium text-gray-900 truncate">{product.name}</div>
                        <div className="text-sm text-indigo-600 font-semibold">{product.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Demo;