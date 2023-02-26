import './index.scss';
import axios from 'axios'


const ready = (): void => {
  // example
  // {
  //   "postId": 1,
  //   "id": 1,
  //   "name": "id labore ex et quam laborum",
  //   "email": "Eliseo@gardner.biz",
  //   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  // },

  interface IComments {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
  };
    
  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  const getData = async (url: string): Promise<IComments[]> => {
    const { data } = await axios(url);
    return data
  };

  getData(COMMENTS_URL)
  .then(data => {
    // console.log('data', data)
    data.forEach(item => console.log('ID:', item.id, 'Email:', item.email))
  })
  .catch(error => console.log('Error: '+ error.message))
}

document.addEventListener("DOMContentLoaded", ready);
