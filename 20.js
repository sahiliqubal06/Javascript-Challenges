// Implement a try catch block to handle an error that occurs during API data fetching

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:" + error);
  }
}

fetchData();
