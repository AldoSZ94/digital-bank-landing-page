import { articles } from "../../data/latestArticles";

export const LatestArticles = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto w-9/10 max-w-300">
        <h2 className="mb-5 text-center text-3xl text-blue-950">
          Latest Articles
        </h2>
        <div className="grid gap-9 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-md bg-white"
            >
              <img
                className="h-50 w-full object-cover"
                src={article.imgUrl}
                alt={article.alt}
              />
              <div className="flex flex-col gap-2 p-6">
                <p className="text-sm">{article.author}</p>
                <h3>
                  <a
                    className="text-blue-950 transition hover:text-green-500"
                    href={article.href}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="leading-snug tracking-tight">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
