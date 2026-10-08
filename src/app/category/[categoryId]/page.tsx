import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";

interface INews {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string | null;
}

const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();

  console.log("Category News", data);

  if (!data?.data) {
    notFound();
  }

  const categoryNews: INews[] = data.data;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl font-bold border-b-3 border-red-700 mt-5">
        {data.title}
      </h1>

      <div className="grid grid-cols-3 mt-4 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;