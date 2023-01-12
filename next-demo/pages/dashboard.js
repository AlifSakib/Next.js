import { useEffect, useState } from "react";

function dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashBoardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashBoardData();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h2>DashBoard</h2>
      <p>Posts : {dashboardData.posts}</p>
      <p>Likes : {dashboardData.likes}</p>
    </div>
  );
}

export default dashboard;
