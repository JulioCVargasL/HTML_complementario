export async function usuarios() {

  let user = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let list = await user.json();
  return list;
}

export async function post(id) {

  let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  let list = await post.json();
  return list;
}

// https://jsonplaceholder.typicode.com/guide/