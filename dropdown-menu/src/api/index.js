const getData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/berry/");
  const result = await response.json();
  return result.results
    .map((data) => {
      return {
        label: data.name,
        value: data.name,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));
};

export default getData;
