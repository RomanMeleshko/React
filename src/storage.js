//локальное хранилище
var obj = {};

var storage = {

   setItem: function(key, value) {

      obj[key] = value;
   },
   getItem: function(key) {
     return obj[key];
   },

   remove: function() {

     return obj;
   }

}
export default storage;
