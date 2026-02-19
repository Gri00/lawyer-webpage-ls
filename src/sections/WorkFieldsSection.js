export default function WorkFieldsSection() {
  return (
    <section className="bg-black text-white py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-6" style={{ color: "#d6a13b" }}>
        Polja rada
      </h2>
      <p className="text-lg max-w-3xl mx-auto mb-10">
        Bavimo se različitim oblastima prava, uključujući:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 border border-gray-700 rounded-lg">
          Porodično pravo
        </div>
        <div className="p-6 border border-gray-700 rounded-lg">
          Građansko pravo
        </div>
        <div className="p-6 border border-gray-700 rounded-lg">
          Krivično pravo
        </div>
      </div>
    </section>
  );
}
