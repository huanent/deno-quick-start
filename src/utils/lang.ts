export const delay = (time: number) => {
  return new Promise((r) => setTimeout(r, time));
};
