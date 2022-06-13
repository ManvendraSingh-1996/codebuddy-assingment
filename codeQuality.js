// level {1/2/3}

// async function GET_daTA() {
//     let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let DATA = await r.json();
//     return DATA;
//   }

let url = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url).then(res=>res.json()).then(data=>console.log(data));