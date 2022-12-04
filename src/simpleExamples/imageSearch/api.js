import axios from "axios";

export const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ApzxTb9hhlnqUL59Q8Rm6NbrZ8YiDrWPv4OE-toK_00",
    },
    params: {
      query: term,
    },
  });

  console.log("response", response);
  return response.data.results;
};
