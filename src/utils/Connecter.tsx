import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';



export const Getter = () => new Promise((resolve, reject) => {
  
  axios.get('/rss/select')
    .then((res) => {
      resolve(res);
      return;
    })
    .catch((e) => reject(e));
});

export const Adder = (URL: string) => new Promise((resolve, reject) => {
  axios.post('/rss/insert',URL).then((res) => {
    resolve(res);
    return;
  }).catch((e) => reject(e));
})

export const Deleter = (URL: string) => new Promise((resolve, reject) => {
  axios.post('/rss/delete',URL).then((res) => {
    resolve(res);
    return;
  }).catch((e) => reject(e));
})