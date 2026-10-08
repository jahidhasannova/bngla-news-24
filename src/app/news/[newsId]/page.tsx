import Image from "next/image";
import { notFound } from "next/navigation";

interface BodyItem {
  type: "image" | "text" | "subheading";
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  credit?: string;
  text?: string;
}

const NewsDetailspage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();
  const News = data?.data;

  if (!News) {
    notFound();
  }

  const date = News.firstPublished
    ? new Date(News.firstPublished).toLocaleString("bn-BD", {
        dateStyle: "full",
        timeStyle: "short",
      })
    : "তারিখ পাওয়া যায়নি";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold leading-tight text-center">
          {News.title}
        </h1>

        <p className="mt-4 text-center text-gray-500 border-t pt-4">
          {News.byline?.[0]?.name || "অজানা লেখক"} · {date} ·{" "}
          {News.wordCount || 0} শব্দ
        </p>

        <p className="mt-6 text-xl leading-8 text-gray-600 text-center">
          {News.description?.blocks?.[0]?.text || ""}
        </p>

        <div className="mt-8">
          {News.body?.map((item: BodyItem, index: number) => {
            if (item.type === "image" && item.url) {
              return (
                <figure key={index} className="my-8">
                  <Image
                    src={item.url}
                    alt={item.caption || News.title}
                    width={item.width || 800}
                    height={item.height || 500}
                    className="w-full h-auto rounded-xl"
                  />

                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500">
                      {item.caption}
                    </figcaption>
                  )}

                  {item.credit && (
                    <p className="text-xs text-gray-400 mt-1">
                      {item.credit}
                    </p>
                  )}
                </figure>
              );
            }

            if (item.type === "subheading") {
              return (
                <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                  {item.text}
                </h2>
              );
            }

            if (item.type === "text") {
              return (
                <p
                  key={index}
                  className="text-lg leading-9 text-gray-800 mb-6"
                >
                  {item.text}
                </p>
              );
            }

            return null;
          })}
        </div>

        <div className="mt-10 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            {News.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gray-100 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailspage;