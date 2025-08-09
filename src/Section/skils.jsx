export default function Skils() {
    const skils = [
        {
            img: "public/Assets/pg.jpg",
            title: "Menggambar",
            desc: "bisa sedikit Menggambar tapi buat character anime aja yahh komik juga bisa lah dikit"
        },
        {
            img: "public/Assets/mahoraga.jpg",
            title: "Adaptasi",
            desc: "di lingkungan baru aku bisa lah beradaptasi dengan cepat tapi gk cepet cepet amat sih"
        }
    ]
    return (
    <section className="p-6">
      <h1 className="text-white text-3xl mb-6 pl-20">Skills</h1>
      <div className="flex flex-wrap gap-12 pl-20">
        {skils.map((skils, i) => (
          <div key={i} className="w-72 bg-transparent rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={skils.img} alt={skils.title} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-white mb-2">{skils.title}</h3>
              <p className="text-white text-sm">{skils.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}