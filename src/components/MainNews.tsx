import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  //console.log("Main Nwes", news)

  const [firstNews, ...otherNews] = news; //news[0]

  const date = new Date().toLocaleString("bn-BD", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // const otherNews = news.slice(1)
  // console.log("Othges News",otherNews)

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5">
      {/* Main news */}
      <Link href={`/news/${firstNews.id}`} className="w-full md:w-110">
        <div className="card bg-base-100 w-full shadow-sm group">
          <figure className="overflow-hidden">
            <Image
              className="w-full transition-transform duration-300 group-hover:scale-110"
              height={600}
              width={600}
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
            />
          </figure>

          <div className="card-body p-4 sm:p-6">
            <p className="text-red-700">{firstNews.category}</p>

            <h2 className="card-title text-lg sm:text-xl font-bold group-hover:text-red-700">
              {firstNews.title}
            </h2>

            <p className="text-sm sm:text-base">{firstNews.description}</p>

            <div className="text-sm sm:text-base text-gray-500">{date}</div>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>

      {/* Othes News */}

      <div className="card bg-base-100 w-full md:w-96 shadow-sm p-4">
        {otherNews.slice(0, 5).map((on) => (
          <div key={on.id}>
            <div className="text-red-700 mt-3">{on.category}</div>

            <Link href={`/news/${on.id}`}>
              <h2 className="font-bold text-sm sm:text-base border-b border-gray-300 hover:text-green-500">
                {on.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;