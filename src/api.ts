export async function getReviews() {
  const response = await fetch(
    "https://learn.codeit.kr/1636/film-reviews?limit=41"
  );
  const body = await response.json();
  return body;
}
