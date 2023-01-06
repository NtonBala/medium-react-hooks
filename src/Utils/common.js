export const range = (start, end) =>
  [...Array(end - start + 1).keys()].map(el => el + start)
