import Link from "next/link";

function postList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default postList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
