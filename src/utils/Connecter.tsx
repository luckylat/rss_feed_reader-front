import axios from 'axios';

const Fetcher = (UserName: string) => new Promise((resolve, reject) => {
  const API_BASE_URL = 'localhost:8080/rss';
  const today = new Date().toLocaleDateString();
  const submission = new Set();
  let submitted = false;
  axios
    .get(API_BASE_URL)
    .then((res) => {
      
    })
    .catch((e) => reject(e));
});