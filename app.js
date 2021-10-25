const dataFromApi=async()=>{
    try{
        const response=await fetch(
            "https://jsonplaceholder.typicode.com/todds/1");
        const jsonResponse=await response.json();

        return jsonResponse;
    }catch (error){
        console.log("error=>", error)
    }
}

console.log(dataFromApi)