export function translateMargin(csMargin) {
  const split = csMargin.split(",");
  return (
    split[1] + "px " + split[2] + "px " + split[3] + "px " + split[0] + "px"
  );
}
