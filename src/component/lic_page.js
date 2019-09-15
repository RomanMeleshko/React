import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import storage from '../storage';
const text = "<<<";

class Lic extends React.Component {

  back = () => {

   // ReactDOM.render(<Home />, document.getElementById('global'));
   // var global = document.getElementById('global');
   // global.style.background = "#ffffff";

 }

 foo = () => {

   var arr_person = this.props.arr_info_person;

   var arr = arr_person.map(function(elem) {


      return ( <div class="common_user">

               <span id="lic_rah">{elem.lic_rah}</span><br />
               <span id="name">{elem.name}</span><br />
               <span id="loft">{elem.addres}</span>
               <span id="loft">{elem.kil_osib}</span>
               <span id="loft">{elem.type_rozrah}</span>
               <span id="loft">{elem.service_one}</span>
               <span id="loft">{elem.service_two}</span>

             </div>

           );

   });

   this.setBackground(arr.length);

   return arr;
 }

 setBackground = (mas) => {

   // setTimeout(function(){
   //
   //   for(var i = 0;i < mas;i++) {
   //     var elem_common_text = document.getElementsByClassName("common_user");
   //     elem_common_text[i].style.backgroundColor = storage.getItem("background_global");
   //
   //   }
   //
   // }, 0.1);


 }


   render () {

     return (

         <div id="all_info_lic_rah">

           {this.foo()}
           {this.setBackground()}

         </div>

     );
   }

}


export default Lic;
