import { useState, useEffect } from "react";
import fetchUser from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchUser());
    };

    fetchAPI();
  }, []);

  const searchName = (e) => {
    setSearchTerm(e.target.value.toLowerCase().trim());
  };

  return (
    <div className="App">
      <h1>Random User</h1>
      <div className="searching">
        <label>Search : </label>
        <input type="text" placeholder="Input name" onChange={searchName} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((user) => {
              return searchTerm === ""
                ? user
                : user.name.toLowerCase().includes(searchTerm)
                ? user
                : null;
            })
            .map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.state}</td>
                  <td>{user.country}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
