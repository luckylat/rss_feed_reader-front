import axios from 'axios';

const API_URL = 'localhost:8080/rss';

export const Getter = () => new Promise((resolve, reject) => {
  
  axios.get(API_URL)
    .then((res) => {
      resolve(res);
      return;
    })
    .catch((e) => reject(e));
});

export const Poster = (URL: string) => new Promise((resolve, reject) => {
  axios.post(API_URL,URL).then((res) => {
    resolve(res);
    return;
  }).catch((e) => reject(e));
})