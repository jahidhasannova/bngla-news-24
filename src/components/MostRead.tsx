import Link from "next/link";

interface Imostread {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  console.log("Most read", data);

  const mosrRead: Imostread[] = data.data;

  return (
    <div className="card p-5 bg-base-100 w-full sm:w-100 h-fit shadow-sm border-gray-300 ml-0 sm:ml-5">
      <h1 className="text-xl font-bold text-red-700 mb-4">সর্বাধিক পঠিত</h1>

      <div className="grid gap-3">
        {mosrRead.map((mr, i) => (
          <div className="flex p-2 font-semibold gap-3" key={mr.id}>
            <p className="text-red-600 font-bold text-2xl">{i + 1}</p>

            <Link href={`/news/${mr.id}`}>
              <h2 className="font-bold hover:text-red-700">{mr.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;