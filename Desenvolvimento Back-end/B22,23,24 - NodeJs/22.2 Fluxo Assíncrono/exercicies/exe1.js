async function mathForm(one, two, three) {
  if (
    typeof one !== "number" ||
    typeof two !== "number" ||
    typeof three !== "number") throw new Error("Informe apenas números")
  const result = (one + two) * three
  if (result < 50) throw new Error("Valor muito baixo")
  else {
    console.log(result);
  }
}
async function main() {
  try {
    /* await mathForm() */

  }
  catch (error) {
    console.log(error.message);
  }

}
/* main(); */

module.exports = {
  function: mathForm,
}