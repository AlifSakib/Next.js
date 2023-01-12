function NewsArticleList({ news }) {
  console.log(news);
  return (
    <div>
      {news.map((n) => {
        return (
          <div>
            <h2>
              {n.id} {n.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
