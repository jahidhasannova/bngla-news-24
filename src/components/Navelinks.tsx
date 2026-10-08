import ActiveNavLink from "./ActiveNavLink";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navelinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();

  console.log("Navelinks running data", data);

  const navs: Navs[] = data.data;

  console.log("Navelinks navs", navs);

  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="flex justify-center gap-3 sm:gap-5 mt-2 px-4 overflow-x-auto whitespace-nowrap">
      <ActiveNavLink href="/">হোম</ActiveNavLink>

      {filteredNavs.map((n) => (
        <ActiveNavLink key={n.slug} href={`/category/${n.slug}`}>
          {n.title}
        </ActiveNavLink>
      ))}
    </div>
  );
};

export default Navelinks;