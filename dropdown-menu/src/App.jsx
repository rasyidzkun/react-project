import { useState, useEffect } from "react";
import Select from "react-select";
import getData from "./api";

const App = () => {
  const [data, setData] = useState([]);
  const [userSelect, setUserSelect] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getData());
    };

    fetchAPI();
  }, []);

  return (
    <>
      <Select onChange={(e) => setUserSelect(e.value)} options={data} />
      <h1>{userSelect}</h1>
    </>
  );
};

export default App;
