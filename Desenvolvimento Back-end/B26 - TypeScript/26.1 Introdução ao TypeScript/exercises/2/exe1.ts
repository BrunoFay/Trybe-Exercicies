const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
const checkUnitExist = (unit: string): boolean => {
  return units.includes(unit);
}
const convert = (value: number, bUnit: string, cUnit: string): number => {
  if (!checkUnitExist(bUnit)) throw new Error("Unit does not exist");
  if (!checkUnitExist(cUnit)) throw new Error("Unit does not exist");
  const bUnitIndex = units.indexOf(bUnit);
  const cUnitIndex = units.indexOf(cUnit);
  return value * Math.pow(10, cUnitIndex - bUnitIndex);
}