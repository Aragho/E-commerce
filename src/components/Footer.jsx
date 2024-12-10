import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-200 h-auto py-12">
      <div className="bg-black min-h-32 max-w-[1000px] mx-auto rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left mb-6 md:mb-0">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
          <form className="flex flex-col items-center md:items-start space-y-4 w-full md:w-auto">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-full max-w-xs"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-lg mt-4 md:mt-0"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-6 text-gray-800">
        <div className="w-full md:w-auto mb-6">
          <header>
            <h1 className="text-2xl font-bold">SHOP.CO</h1>
            <p className="text-sm mt-2 w-64">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
          </header>
        </div>

        <div className="w-full md:w-auto mb-6">
          <h2 className="text-lg font-semibold">Company</h2>
          <ul className="mt-2 space-y-1">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6">
          <h2 className="text-lg font-semibold">Help</h2>
          <ul className="mt-2 space-y-1">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6">
          <h2 className="text-lg font-semibold">FAQ</h2>
          <ul className="mt-2 space-y-1">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payment</li>
          </ul>
        </div>

        <div className="w-full md:w-auto mb-6">
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-2 space-y-1">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 w-[80%] mx-auto my-4">
        <h6>Shop.co © 2000-2023, All Rights Reserved</h6>

      </div>
    </div>
  )
}
