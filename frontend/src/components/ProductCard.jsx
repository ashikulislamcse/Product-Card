import React from "react";
import image1 from "../assets/watch.jpeg";
import image2 from "../assets/camera.jpeg";
import image3 from "../assets/Shoe.jpeg";
import Star from '../assets/Star.png'
import Heart from '../assets/Love.png'
import Cart from '../assets/Cart.png'
const ProductCard = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center">
      {/* Cart 1 */}
      <div className="w-60 p-2 bg-white rounded-xl transform trasition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 md:mt-0">
        <img
          src={image1}
          alt="Watch"
          className="h-40 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2">Watch</h2>
          <span className="text-xl font-semibold">৳. 1200 Taka</span>
          <div className="flex items-center gap-2">
            <span className="text-sm line-through opacity-75">
              ৳. 1500 Taka
            </span>
            <span className="font-bold text-sm p-2 bg-amber-300 rounded-s-2xl text-gray-600">
              Save 10%
            </span>
          </div>
          <div className="flex items-center mt-2 gap-1">
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 mt-2 mb-2">Timepiece, wristwear, clock, accessory, analog, digital, strap, luxury, stylish, functional.</p>
        </div>
        <div className="flex items-center justify-center mb-2 gap-2">
          <button className="px-3 py-1 rounded-lg bg-blue-400 hover:bg-blue-500 cursor-pointer font-semibold">Buy Now</button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Cart} alt="" className="w-6"/></button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Heart} alt="" className="w-6"/></button>
        </div>
      </div>
      {/* Cart 2 */}
      <div className="w-60 p-2 bg-white rounded-xl transform trasition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 md:mt-0">
        <img
          src={image2}
          alt="Watch"
          className="h-40 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2">Watch</h2>
          <span className="text-xl font-semibold">৳. 55000 Taka</span>
          <div className="flex items-center gap-2">
            <span className="text-sm line-through opacity-75">
              ৳. 70000 Taka
            </span>
            <span className="font-bold text-sm p-2 bg-amber-300 rounded-s-2xl text-gray-600">
              Save 10%
            </span>
          </div>
          <div className="flex items-center mt-2 gap-1">
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 mt-2 mb-2">Timepiece, wristwear, clock, accessory, analog, digital, strap, luxury, stylish, functional.</p>
        </div>
        <div className="flex items-center justify-center mb-2 gap-2">
          <button className="px-3 py-1 rounded-lg bg-blue-400 hover:bg-blue-500 cursor-pointer font-semibold">Buy Now</button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Cart} alt="" className="w-6"/></button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Heart} alt="" className="w-6"/></button>
        </div>
      </div>
      {/* Cart 3 */}
      <div className="w-60 p-2 bg-white rounded-xl transform trasition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 md:mt-0">
        <img
          src={image3}
          alt="Watch"
          className="h-40 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2">Watch</h2>
          <span className="text-xl font-semibold">৳. 2500 Taka</span>
          <div className="flex items-center gap-2">
            <span className="text-sm line-through opacity-75">
              ৳. 3100 Taka
            </span>
            <span className="font-bold text-sm p-2 bg-amber-300 rounded-s-2xl text-gray-600">
              Save 10%
            </span>
          </div>
          <div className="flex items-center mt-2 gap-1">
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <img src={Star} alt="" className="w-5"/>
            <p className="font-bold text-xs text-gray-700">Best Ratings</p>
          </div>
          <p className="text-sm text-gray-600 mt-2 mb-2">Timepiece, wristwear, clock, accessory, analog, digital, strap, luxury, stylish, functional.</p>
        </div>
        <div className="flex items-center justify-center mb-2 gap-2">
          <button className="px-3 py-1 rounded-lg bg-blue-400 hover:bg-blue-500 cursor-pointer font-semibold">Buy Now</button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Cart} alt="" className="w-6"/></button>
          <button className="px-3 py-1 rounded-lg bg-gray-400 hover:bg-gray-500 cursor-pointer"><img src={Heart} alt="" className="w-6"/></button>
        </div>
      </div>
      {/* Cart 4 */}
    </div>
  );
};

export default ProductCard;
