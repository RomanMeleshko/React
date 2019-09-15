import React from 'react';
import ReactDOM from 'react-dom';
import Lic from './lic_page';
import Balance from './balanse_page';
import Setting from './setting_page';
import storage from '../storage';
import data from '../current_info_person';
var arr;
//import http from '../http_request';


class Home extends React.Component {

//преход на страницу по лицевым счетам
  lic_page = () => {

   //предаем массив данных по абонентам
   ReactDOM.render(<Lic arr_info_person={data}/>, document.getElementById('global'));


 // назначаем событие после индентификации элементов в DOM дереве в (lic_page)
  setTimeout(function(){

    var arr_elems = document.getElementsByClassName("common_user");



    //на полученный список из абонентов прикручиваем событие по клику для
    //определения абонента
    for(var i = 0;i < arr_elems.length;i++){
      arr_elems[i].addEventListener("click", function() {

       // получаем всех детей у кликнутого абонента
       var arr_elems = this;
       arr = arr_elems.childNodes;


       ReactDOM.render(<Home />, document.getElementById('global'));

       var lic_rah_abonent = document.getElementById("lic_rah_abonent");
       var name_abonent = document.getElementById("name_abonent");
       var addres_abonent = document.getElementById("addres_abonent");
       var kil_osib = document.getElementById("kil_person");
       var type_rozrah = document.getElementById("rozrah_person");
       var service_one = document.getElementById("one");
       var service_two = document.getElementById("two");



       //записываем в storage текущеие значения
       storage.setItem("lic_rah_abonent", arr[0].innerHTML);
       storage.setItem("name_abonent", arr[2].innerHTML);
       storage.setItem("addres_abonent", arr[4].innerHTML);
       storage.setItem("kil_person", arr[5].innerHTML);
       storage.setItem("rozrah_person", arr[6].innerHTML);
       storage.setItem("one", isProm(arr[7].innerHTML));
       storage.setItem("two", isCron(arr[8].innerHTML));


       lic_rah_abonent.innerHTML = storage.getItem("lic_rah_abonent");
       name_abonent.innerHTML = storage.getItem("name_abonent");
       addres_abonent.innerHTML = storage.getItem("addres_abonent");
       kil_osib.innerHTML = storage.getItem("kil_person");
       type_rozrah.innerHTML = storage.getItem("rozrah_person");

       service_one.innerHTML = storage.getItem("one");
       service_two.innerHTML = storage.getItem("two");

    });
   }


 }, 0.1);

  }

//переход на страницу по счетчикам
  balanse_page = () => {

    if(arr == null) return false;

   ReactDOM.render(<Balance info_person={arr}/>,document.getElementById('global'));

  }

//переход на страницу с настройками
  setting_page = () => {

    ReactDOM.render(<Setting />, document.getElementById('global'));

  }

//переход на страницу обратная связь
  callback_link = () => {

    alert("Очень скоро");

  }

//переход на страницу с оплатой
  payment = () => {

    alert("Очень скоро");

  }

  setSetting = () => {

    setTimeout(function(){

      var elem_header_info = document.getElementById("header_info");
      elem_header_info.style.fontStyle = storage.getItem("font_style");
      elem_header_info.style.backgroundColor = storage.getItem("background_global");

    }, 0.1);

  }

  render() {

    return (
      <div id="home_page">
       <div id="header_info">
         <div id="lic_ruch">
           {this.setSetting()}
            <span id="lic_rah_abonent">{storage.getItem("lic_rah_abonent") || data[0].lic_rah}</span><br></br>
            <span id="name_abonent">{storage.getItem("name_abonent") || data[0].name}</span><br></br>
            <span id="addres_abonent">{storage.getItem("addres_abonent") || data[0].addres}</span>
         </div>
         <hr/>
         <div id="kil_osib">
           <span>Колличество чел.</span>
           <p id="kil_person">{storage.getItem("kil_person") || data[0].kil_osib}</p>
         </div>
         <div id="type_rozrah">
           <span>Тип расчета</span>
           <p id="rozrah_person">{storage.getItem("rozrah_person") || data[0].type_rozrah}</p>
         </div>
         <hr/>

         <div id="service_one">
             <span id="count_1">Водоподача<br /></span>
             <p id="one">{storage.getItem("one") || data[0].service_one}</p>
         </div>
         <div id="service_two">
             <span id="count_2">Водоотвод<br /></span>
             <p id="two">{storage.getItem("two") || data[0].service_two}</p>
         </div>
         <hr/>

       </div>

      <div>
      <div id="position_button">
         <button id="style_button" onClick={this.lic_page}>Счета</button>
         <span id="text_under_button">списки счетов</span>
         </div>
         <div id="position_button">
          <button id="style_button" onClick={this.balanse_page}>Счетчики</button>
          <span id="text_under_button">счетчики</span>
          </div>
          <div id="position_button">
            <button id="style_button" onClick={this.setting_page}>Настройки</button>
             <span id="text_under_button">настройки</span>
            </div>
            <div id="position_button">
              <button id="style_button" onClick={this.callback_link}>Обратная связь</button>
               <span id="text_under_button">обратная связь</span>
              </div>
              <div id="position_button">
                <button id="style_button" onClick={this.payment}>Оплата</button>
                 <span id="text_under_button">оплата</span>
                </div>
     </div>
     </div>
    );
  }

}

//function app() {
//  var elem = document.getElementById("global");
//  var style = getComputedStyle(elem);
//  alert(parseInt(style.width) / 3);

//  var elem_button = document.getElementById("lic_button");
  //var style_button = getComputedStyle(elem_button);

//  elem_button.style.left = "20px";

//}

//функция принимает параметр и проверяеет его на число больше или менише 0.


function isProm(par) {

   var num = +par;

   if(num >= 0) {
      var span = document.createElement("span");
      var text = document.createTextNode("текущая задолженность");
      span.style.color = "red";
      span.style.fontSize = "11px";
      span.appendChild(text);

      var elemFromDom = document.getElementById("count_1");
      elemFromDom.appendChild(span);

     return num + " грн";

   }else {
       var span = document.createElement("span");
       var text = document.createTextNode("текущая переплата");
       span.style.color = "green";
       span.style.fontSize= "11px";
       span.appendChild(text);

       var elemFromDom = document.getElementById("count_1");
       elemFromDom.appendChild(span);

      return num + " грн";
   }

}

//функция принимает параметр и проверяеет его на число больше или менише 0.
 function isCron(par) {

    var num = +par;

   if(num >= 0) {
      var span = document.createElement("span");
      var text = document.createTextNode("текущая задолженность");
      span.style.color = "red";
      span.style.fontSize = "11px";
      span.appendChild(text);

      var elemFromDom = document.getElementById("count_2");
      elemFromDom.appendChild(span);

     return num + " грн";
   }else {
       var span = document.createElement("span");
       var text = document.createTextNode("текущая переплата");
       span.style.color = "green";
       span.style.fontSize= "11px";
       span.appendChild(text);

       var elemFromDom = document.getElementById("count_2");
       elemFromDom.appendChild(span);

      return num + " грн";
   }
 }

export default Home;
