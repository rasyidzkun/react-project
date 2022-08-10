const fetchUser = async () => {
  const response = await fetch(`https://randomuser.me/api/?results=20`);
  const { results } = await response.json();

  const modifiedResults = results.map((user) => ({
    name: user.name.first,
    state: user.location.state,
    country: user.location.country,
    email: user.email,
  }));

  return modifiedResults;
};

export default fetchUser;
