export function mapPixabuyResponseToImageUrls(response) {
  return response.hits.map(({ webformatURL }) => webformatURL);
}
