import useSwr from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <div>
      <h2>DashBoard</h2>
      <p>Posts : {data.posts}</p>
      <p>Likes : {data.likes}</p>
    </div>
  );
}

export default DashboardSWR;
