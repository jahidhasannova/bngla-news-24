import Image from "next/image";
import Link from "next/link";

interface INewCard {
  title: string;
  id: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string | null;
}

const NewsCard = ({ news }: { news: INewCard }) => {
  console.log(news);

  const date = new Date(news.firstPublished ?? "").toLocaleString("bn-BD", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <Link href={`/news/${news.id}`}>
      <div className="flex gap-3 card bg-base-100 shadow-sm group">
        <figure className="overflow-hidden w-28 h-24 sm:w-40 sm:h-auto shrink-0">
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            height={400}
            width={400}
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>

        <div className="card-body p-3 sm:p-6">
          <p className="text-red-700 text-sm">{news.category}</p>

          <h2 className="font-bold text-base sm:text-xl group-hover:text-red-700">
            {news.title}
          </h2>

          <p className="hidden sm:block">{news.description}</p>

          <div className="text-xs sm:text-base text-gray-500">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;