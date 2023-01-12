function ArticleListByCategory({ news, category }) {
  return (
    <>
      <h1>Showing news for category {category}</h1>
      {news.map((n) => {
        return (
          <div key={n.id}>
            <h2>
              {n.id} {n.title}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Alif"]);
  console.log(params);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  console.log(`Pre-rendering News Articles for category ${category}`);

  return {
    props: {
      news: data,
      category,
    },
  };
}
