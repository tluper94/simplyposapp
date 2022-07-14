export const padding = (top, right, bottom, left) => {
  return {
    paddingTop: top,
    paddingRight: right ? right : top,
    paddingBottom: bottom ? bottom : top,
    paddingLeft: left ? left : right ? right : top
  };
};
