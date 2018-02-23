import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


const baseUrl = getBaseUrl();

export function getCalc(numbers, id){
  
 return post(id, numbers);
  

  //return post(id, numbers);
 
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
} 

function post(url, numbers) {
  return fetch(baseUrl + url, {
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer', // *client
    body: JSON.stringify(numbers), // must match 'Content-Type' header
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
   
  }).then(onSuccess, onError);
} 

// Cant call func delete since it is reserved word.


function onSuccess(response) {
  console.log("The call was success");
   return response.json();
    
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
