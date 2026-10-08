import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css"; // kahini kore niye aste hoy

interface Headlines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=20");
  const data = await res.json();

  console.log("Marquee", data);

  const headlines: Headlines[] = data.data;

  console.log("Headlines", headlines);

  return (
    <div className="bg-red-700 text-white mt-3 sticky top-0 z-50">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-800 py-1.5 font-bold px-8">সর্বশেষ</div>

        <MarqueeText className="py-1.5" direction="right" duration={10}>
          {headlines.map((h) => (
            <span key={h.id}>
              <Link className=" hover:underline" href={`/news/${h.id}`}>
                <span>{h.title}</span>
              </Link>
              <span className="mx-4">•</span>
            </span>
          ))}
        </MarqueeText>
        <div className="bg-red-00 py-1.5 font-bold px-8"></div>
      </div>
    </div>
  );
};

export default Marquee;
