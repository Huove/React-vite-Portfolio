import manga from "../assets/manga.jpg";
import bangar from "../assets/bangar.jpeg";
import anime from "../assets/anime.jpg";

export default function Hooby() {
    const hooby = [
        {
            img: manga,
            title: "Membaca Manga",
            desc: "aku suka baca manga terutama itu manga romance atau fantasy isekai"
        },
        {
            img: bangar,
            title: "Bermain Game",
            desc: "paling suka kalo meluang kan waktu dengan main game apalgi main game grinding kyk ZZZ atau HSR"
        },
        {
            img: anime,
            title: "Menonton Anime",
            desc: "sama kayak manga aku juga suka nonton anime romance, isekai, action, fantasy. Yahh mirip mirip lah sama manga"
        }
    ]
    return (
    <section  id="hobby" className="p-6">
      <h1 className="text-white text-3xl mb-6 pl-20">hobby</h1>
      <div className="flex flex-wrap gap-12 pl-20">
        {hooby.map((hooby, i) => (
          <div key={i} className="w-72 bg-transparent rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={hooby.img} alt={hooby.title} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-lg text-white mb-2">{hooby.title}</h3>
              <p className="text-white text-sm">{hooby.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}