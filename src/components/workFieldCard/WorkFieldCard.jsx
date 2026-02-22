export default function WorkFieldCard({ title, image, description }) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg max-w-sm mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-2 left-2 flex items-center text-gray-100 font-serif font-bold text-sm z-10">
        <img
          src="/images/lines.svg"
          alt="Ikonica linije"
          className="w-7 h-7 mr-2"
        />
        <span>{title}</span>
      </div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 z-20">
        <h3 className="text-xl font-bold font-serif mb-2">{title}</h3>

        <div className="w-16 h-[1px] bg-[#d6a13b] mb-4"></div>

        <p className="text-sm font-serif">{description}</p>
      </div>
    </div>
  );
}
