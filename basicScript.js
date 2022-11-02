import http from 'k6/http';
import { sleep } from 'k6';

// Init
export const options = {
  vus: 5,
  duration: '10s',
};

// Vu Script
export default function () {
  let res = http.get('http://test.k6.io/');
  console.log(res.status)
  sleep(1);
}