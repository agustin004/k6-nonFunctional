import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
    stages: [
        {duration: '10s', target: '10'},
        {duration: '10s', target: '10'},
        {duration: '20s', target: '20'},
        {duration: '10s', target: '0'},
    ],
    thresholds: {http_req_duration: ['p(95)<300']}
};

// export default function () {
//     const url = 'https://httpbin.test.k6.io/post';
//     let response = http.post(url, 'Hello world!')
//     console.log(response.json())

// }

export default function () {
    http.get('http://test.k6.io/')
}