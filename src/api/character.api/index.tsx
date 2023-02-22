import $api from "../api";

const getCharacter = async () => {
  let response = [];
  let i = 1;
  while (i <= 42) {
    let get = await $api.get("character/?page=" + i);
    get.data.results.forEach(i => {
      response.push(i)
    });
    i++
  }
  return response
}

export default getCharacter;