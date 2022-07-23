import axios from "axios";

let api = async function (q, num = 15, page = 1) {
  const token =
    "563492ad6f91700001000001ec67684dcb4d4868b7cf02b382e033f3"; /*take only token and save in token variable*/
  let res = await axios.get(
    `https://api.pexels.com/v1/search?query=${q}&page=${page}&per_page=${num}&orientation=landscape`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data;
};

let getPicById = async function (id) {
  const token =
    "563492ad6f91700001000001ec67684dcb4d4868b7cf02b382e033f3"; /*take only token and save in token variable*/
  let res = await axios.get(`https://api.pexels.com/v1/photos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
};

function sayHelo() {
  console.log("helo");
}
// module.export.api = api
export { api, getPicById, sayHelo };
