export default function Contact() {
    const contact = [
        {
            href: "https://www.instagram.com/takano154/",
            title: "Instagram",
        },
        {
            href: "https://www.tiktok.com/@bukansiapasiapa969?_t=ZS-8yLwRPiHF84&_r=1",
            title: "Tiktok",
        },
        {
            href: "tel:6283848433289",
            title: "Whatsapp",
        }
    ]
    return (
    <section id="Contact" className="bg-transparent text-center">
      <h1 className="text-3xl text-purple-100">Contact me in</h1>
      <br />
      <br />
      <div className="flex flex-col gap-6 items-center">
        {contact.map((c, i) => (
          <div key={i} className="bg-transparent rounded-xl shadow p-4 w-96 flex flex-col items-center hover:-translate-y-1 transition shadow-blue-50">
            <a href={c.href} target="_blank" className="text-white text-lg hover:text-violet-400 transition">
              {c.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}