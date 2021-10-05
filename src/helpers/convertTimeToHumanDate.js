export const convertTimeToHumanDate = (msdate) => {
  return new Date(msdate * 1000).toGMTString().slice(0,3);
}