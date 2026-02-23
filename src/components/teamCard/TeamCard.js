import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({
  image,
  name,
  title,
  email,
  phone,
  facebook,
  linkedin,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-11/12 max-w-xs sm:w-64 h-[380px] sm:h-[420px] 
      [perspective:1000px] cursor-pointer mx-auto mb-6"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transition-transform 
        transform-gpu [transform-style:preserve-3d] 
        ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden 
          border border-white/30 shadow-lg 
          [backface-visibility:hidden]"
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl"></div>

          <div className="relative flex flex-col items-center justify-start w-full h-full p-6">
            <img
              src={image}
              alt={name}
              className="w-56 h-56 rounded-full object-cover mt-4 mb-4 
              border-4 border-white/40 shadow-md"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold font-serif mt-5 text-gray-900">
              {name}
            </h3>
            <p className="text-gray-800 font-serif">{title}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden 
          border border-white/30 shadow-lg 
          [transform:rotateY(180deg)] 
          [backface-visibility:hidden]"
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl"></div>

          <div className="relative flex flex-col items-center justify-center w-full h-full p-6">
            <p className="text-gray-900 font-serif mb-2">{email}</p>
            <p className="text-gray-900 font-serif mb-4">{phone}</p>

            <div className="flex gap-4 mt-2">
              <a
                href={facebook}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
