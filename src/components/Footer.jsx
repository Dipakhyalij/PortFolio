import React from 'react'
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
 <div className="max-w-7xl mx-auto px-4 text-center space-y-4">

        {/* Top line */}
        <p className="text-sm text-gray-300">
           © 2026 | Made with ❤️ using React 
        </p>

        {/* Creator name */}
        <h2 className="text-xl font-semibold tracking-wide">
          Created By Dipak Hyalij. All Rights Reserved.
        </h2>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-xl text-indigo-300">
          <a href="https://wa.me/918799975679" className="hover:text-white transition">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/dipak-patil-3b6435253/" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/deep_patil_5/" className="hover:text-white transition">
            <FaInstagram />
          </a>
        </div>

      </div>


  )
}

export default Footer