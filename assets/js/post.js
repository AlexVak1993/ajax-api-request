async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error((await response).status);

  return await response.json();
};

const postBody = {
  title: 'Title custom text',
  body: 'lorem lorem text, my text',
  userId: 1,
}
postData('https://jsonplaceholder.typicode.com/posts', postBody)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));