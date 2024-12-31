"use client";
import { useState } from "react";

export default function VipSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="relative bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white py-20"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
        Join Our VIP Program and Unlock Tailored Benefits Just for You        </h2>
        <p className="text-lg md:text-xl mb-12">
        Join Our VIP Program and Indulge in a Customized Shopping Experience with VIP-Only Offers and Early Drops.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-yellow-400">
              <i className="fas fa-gift"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Exclusive Discounts</h3>
            <p>Enjoy Special VIP Discounts on an Ever-Changing Selection of Products.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-blue-400">
              <i className="fas fa-star"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Early Access</h3>
            <p>Shop the Latest Collections and Limited-Edition Releases Before Anyone Else</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
            <div className="mb-6 text-4xl text-pink-400">
              <i className="fas fa-user-secret"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Made-for-You Service</h3>
            <p>Get Expert Product Suggestions and a Shopping Experience Tailored to Your Preferences.</p>
          </div>

          {showMore && (
            <>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-green-400">
                  <i className="fas fa-crown"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Assistance"</h3>
                <p>Receive Fast-Track Support from Our Exclusive Priority Service Team..</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-red-400">
                  <i className="fas fa-box-open"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
                <p>VIP Members Enjoy Free Shipping on Every Single Order.</p>
              </div>

              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl text-center">
                <div className="mb-6 text-4xl text-purple-400">
                  <i className="fas fa-gem"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">Exclusive Gifts</h3>
                <p>Get Treated Like a VIP with Special Gifts and Rewards All Year Long.</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
