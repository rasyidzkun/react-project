async function getData() {
  try {
    const response = await fetch(`https://randomuser.me/api?results=50`);
    const { results } = await response.json();

    const userResults = results.map((user) => ({
      name: user.name.first,
      lastName: user.name.last,
      state: user.location.state,
      country: user.location.country,
      img: user.picture.large,
    }));

    return userResults;
  } catch (error) {
    return error;
  }
}

export default getData;
