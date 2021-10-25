const dataFromApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log("error=>", error);
  }
};

// console.log(dataFromApi().then((response)=>console.log(response)))
// --------------------------------------------------------------

// Ejercicio 1

const vuelta1 = () => {
  const firstFunction = setTimeout(() => console.log("Juan"), 10);
  console.log("Mario");
  console.log("Martin");
};
const vuelta2 = () => {
  console.log("Juan");
  const fistFunctionV2 = setTimeout(() => console.log("Mario"), 10);
  console.log("Martin");
};

const vuelta3 = () => {
  const fistFunctionV3 = setTimeout(() => {
    console.log("Juan")
    console.log("Mario")
  }, 0);
  console.log("Martin");
};

const vuelta4 = () => {
  const fistFunctionV4 = setTimeout(() => console.log("Juan"), 10);
  console.log("Mario");
  const secondFunctionV4 = setTimeout(() => console.log("Martin"), 15);
};

vuelta4()

// Ejercicio 2
const cuentaAtras = (number) => {
  if (number <0) return;
  console.log(number);
  return cuentaAtras(number - 1);
};
// cuentaAtras(45)

const temporizador = (second) => {
  setTimeout(() => {
    if (second < 0) return;

    console.log(second);

    temporizador(second - 1);
  }, 1000);
};
// temporizador(10);
