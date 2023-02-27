import $api from "../api";


export const getCharacters = async () => {
  let response = [];
  let i = 1;
  while (i <= 42) {
    let get = await $api.get("character/?page=" + i);
    get.data.results.forEach((a: any) => {
      response.push(a)
    });
    i++
  }
  return response
}
// export const getCharacters = async () => {
//   const { data } = await $api.get("character/");
//   return data;
// };

export const getCharacter = async (id: string) => {
  const { data } = await $api.get(`character/${id}`);
  return data;
};
