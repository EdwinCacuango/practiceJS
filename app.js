const dataFromApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse = await response.json();
    return jsonResponse
  } catch (error) {
    console.log("error=>", error);
  }
};

console.log(dataFromApi().then((response)=>console.log(response)))
