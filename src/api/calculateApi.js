import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getCalc(numbers, id) {
  return post(id, numbers);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function post(url, numbers) {
  return fetch(baseUrl + url, {
    method: 'POST',
    mode: 'cors', 
    redirect: 'follow', 
    referrer: 'no-referrer', 
    body: JSON.stringify(numbers), 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
  }).then(onSuccess, onError);
}

function onSuccess(response) {
  console.log("The call was success");
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}