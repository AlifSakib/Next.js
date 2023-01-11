import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next Js Pre Rendering</h1>
      <Link href="/users">All Users</Link>
      <Link href="/posts">Posts</Link>
    </>
  );
}
export default Home;
