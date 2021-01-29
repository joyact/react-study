import axios from 'axios';

// api 호출해서 데이터를 반환하는 함수
export async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/'
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
