async function putData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });

  console.log(response);
  
  if (!response.ok) throw new Error((await response).status);

  return await response.json();
};

const putBody = {
  id: 1,
  title: 'Title new text',
  body: 'New text',
  userId: 1,
}
putData('https://jsonplaceholder.typicode.com/posts/1', putBody)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));