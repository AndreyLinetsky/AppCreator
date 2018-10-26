export function mapPixabuyResponseToImageUrls(response) {
  return response.hits.map(({ webformatURL }) => webformatURL);
}

export function mapColorsServerResponseToAppColors(colors) {
  const { first: backgroundColor, second: color } = colors;
  return {
    backgroundColor,
    color
  };
}
