import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '1s',
  };

export default function() {
    const res = http.get('https://reqres.in/api/users/2');
    check(res, { 
        'status was 200': (r) => r.status == 200,
        'email': (r) => r.json().data.email == 'janet.weaver@reqres.in',
    })
    console.log(res.json().data.email)
    
    
};

