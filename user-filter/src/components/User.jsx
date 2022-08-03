import { useEffect, useState } from "react";
import getData from "../api/getData";
import "./user.css";

function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      setData(await getData());
      setLoading(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className="app">
      <header>
        <h4 className="title">Live User Filter</h4>
        <small className="sub-title">Search by name and/or country</small>
        <input
          type="text"
          className="filter"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </header>

      {loading ? <p className="loading">Loading...</p> : ""}

      <ul className="user-list">
        {data
          .filter((user) => {
            if (searchText === "") {
              return user;
            } else if (
              user.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return user;
            } else if (
              user.country.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user, index) => {
            return (
              <li key={index}>
                <img src={user.img} alt={user.className} />
                <div className="user-info">
                  <h4>
                    {user.name} {user.lastName}
                  </h4>
                  <p>
                    {user.state}, {user.country}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default User;
