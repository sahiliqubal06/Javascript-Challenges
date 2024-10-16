// Implement an async function to fetch data from an API and handle errors using try/catch.
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Request failed:" + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);
