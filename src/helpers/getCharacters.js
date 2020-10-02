const getCharacters = async (user) => {

  try {
    const url = `https://rickandmortyapi.com/api/character/?name=${encodeURI(user)}&page=1`;
    const resp = await fetch(url);
    const {
      results
    } = await resp.json();

    const char = results.map(ele => {
      return {
        id: ele.id,
        name: ele.name,
        img: ele.image,
      }
    })
    return char;
  } catch (error) {
    return [];
  }
}

export default getCharacters;