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
        <figure className="overflow-hidden">
          <Image
            className="transition-transform duration-300 group-hover:scale-110"
            height={400}
            width={400}
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-700">{news.category}</p>
          <h2 className="card-title font-bold  group-hover:text-red-700">
            {news.title}
          </h2>
          <p>{news.description}</p>
          <div className="text-gray-500">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
