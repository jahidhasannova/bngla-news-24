import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IotherSection {
  title: string;
  curationId: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    firstPublished: string | null;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;

  console.log("Home section data", section);

  const mainNews = section[0].articles;

  const otherSection: IotherSection[] = section.slice(1);

  console.log("Section", otherSection);

  return (
    <div>
      <div className="grid grid-cols-3 mt-5 max-w-7xl mx-auto gap-5">
        {/* news section */}
        <div className="grid col-span-2">
          <MainNews news={mainNews}></MainNews>

          <div className="mt-10">
            {otherSection.map((os) => (
              <div className="py=1" key={os.curationId}>
                <h1 className="text-xl font-bold border-b-3 border-red-700 mt-5 ">
                  {os.title}
                </h1>
                <div className="grid grid-cols-3 mt-3 gap-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*most read section */}
        <div className="grid col-span-1">
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
}
