async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (!response.ok) throw new Error((await response).status);

  return await response.json();
};

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));