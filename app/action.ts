"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/order=popularity`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
