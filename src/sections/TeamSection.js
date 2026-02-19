export default function TeamSection() {
  return (
    <section className="bg-white text-black py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-6">Advokatski tim</h2>
      <p className="text-lg max-w-3xl mx-auto mb-10">
        Upoznajte naš tim stručnih advokata koji stoje iza svih pravnih rešenja.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 border border-gray-300 rounded-lg">
          Ime Prezime - Specijalnost
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          Ime Prezime - Specijalnost
        </div>
        <div className="p-6 border border-gray-300 rounded-lg">
          Ime Prezime - Specijalnost
        </div>
      </div>
    </section>
  );
}
