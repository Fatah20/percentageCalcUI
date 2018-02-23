export default function getBaseUrl() {
  // const inDevelopment = window.localStorage.hostname = 'localhost';
   //return inDevelopment ? 'http://localhost:3001/' : 'https://percentagecalc.herokuapp.com/';
 
   return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://percentagecalc.herokuapp.com/';
 }
 
 function getQueryStringParameterByName(name, url){
   if(!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&"); //eslint-disable-line no-useless-escape
   var regex = new RegExp("[?&]" + name + "(=([^$#]*)\&|#|$)"), //eslint-disable-line no-useless-escape
   results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return'';
   return decodeURIComponent(results[2].replace(/\+/g, " " ));
 
 }
 