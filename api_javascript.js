/////////////////////////////////////////////////////
///////////////////////// JSON //////////////////////
/////////////////////////////////////////////////////

// const bio = {
//   name: "Mahbubul Alam",
//   age: 23,
//   address: "Dhaka",
// };
// console.log(bio);
// // `["Dhaka", 34, true]`

// const bioJSONData = JSON.stringify(bio);
// console.log(bioJSONData);

// // JSON to Object convert
// const dd = JSON.parse(bioJSONData)
// console.log(dd);

// computerGalaxy = {
//   shopName: "Computer world Ltd.",
//   address: "Dhaka Nilkhate",
//   phone: "01648860240",
//   email: "lkjdsajisdij.com",
//   products: [
//     {id: 1, name: "Mouse", price: 140},
//     { id: 2, name: "Laptop", price: 140000},
//     {id: 3, name: "Gaming pc", price: 14000},
//     {id: 4, name: "Keyboard", price: 140},
//     {id: 5, name: "Speaker", price: 140},
//   ],
//   user: [
//     { id: 1, name: "Billal Hossain", productName: "Mouse", price: 120},
//     { id: 1, name: "Jamal Hossain", productName: "Keyboard", price: 120},
//     { id: 1, name: "Monir Hossain", productName: "Laptop", price: 120},
//     { id: 1, name: "Shofik Hossain", productName: "Mouse", price: 120},
//   ]
// }
// console.log(computerGalaxy);
// const computerGala = JSON.stringify(computerGalaxy);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function handleData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const userContainer = document.getElementById("user_container");
      for (let item of data) {
        console.log(item.username);
        let li = document.createElement("li");
        li.innerText = "user";
        userContainer.appendChild(li);
      }
    });
}
