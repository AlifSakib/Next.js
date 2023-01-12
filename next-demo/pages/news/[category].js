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
  console.log(context);
  const { params } = context;
  console.log(params);
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      news: data,
      category,
    },
  };
}
