const unitsWeight: Array<string> = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg',]
const checkUnitWeightExist = (unit: string): boolean => {
  return unitsWeight.includes(unit)
}
const convertWeight = (value: number, bUnit: string, cUnit: string): number => {
  if (!checkUnitWeightExist(bUnit) || !checkUnitWeightExist(cUnit)) {
    throw new Error("Unit does not exist")
  }
  const bUnitIndex = units.indexOf(bUnit);
  const cUnitIndex = units.indexOf(cUnit);

  return value * Math.pow(10, bUnitIndex - cUnitIndex)
}