
function request() {

   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
           console.log(xhr.responseText);
   }

   xhr.open('GET', './curren_info.json', false);

   xhr.send(null);

//  return;

}

export default request;
