import "../css/styles.css";

const sayHello = () => {
  console.log("hello!");
};

const getPost = async (index) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return data.json();
};