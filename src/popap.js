import React from 'react';
import ReactDOM from 'react-dom';
import Setting from './component/setting_page';
import storage from './storage';
var count = false;
var move_button = true;

//функция которая отрисовывает пустое окно popap и примает функцию-контекст для
//для отрисовки его в пустом popap.
function window_popap(func) {

    var elem_from_dom = document.getElementsByClassName("common_block");

    var new_elem_div = document.createElement('div');
    var container = document.createElement('div');
    var new_span_close_popap = document.createElement('span');

    new_span_close_popap.innerHTML = "закрыть";

    new_elem_div.classList.add("popap");
    new_span_close_popap.classList.add("close_popap");
    container.classList.add("container");

    container.appendChild(func());
    new_elem_div.appendChild(container);
    new_elem_div.appendChild(new_span_close_popap);

    count || elem_from_dom[0].appendChild(new_elem_div);

    count = true;

    new_span_close_popap.addEventListener("click", function() {
      elem_from_dom[0].removeChild(new_elem_div);
      count = false;
    });

}

// функция-контекст которая предается в качестве контекста в пустой popap
function add_text_context() {

   var p = document.createElement("p");
   p.innerHTML = "У Вас установленная стабильная версия приложения";
   p.classList.add("text_popap");

   return p;

}

// функция-контекст которая предается в качестве контекста в пустой popap
function add_color_context() {

  var div = document.createElement("div");

  var arr = ["Изменить цвет в актив",
             "Сменить тему",
             "Отключить свайп",
             "Смена шрифта"];

  var arr_name_attr = ["first", "second", "three", "four"];

  for(var i = 0;i < 4;i++) {
  var div_left = document.createElement("div");
  var div_right = document.createElement("div");
  var span_one = document.createElement("span");

  span_one.innerHTML = arr[i];

  div.classList.add("container_div");
  div_left.classList.add("div_left");
  div_right.classList.add("div_right");

  div_left.appendChild(span_one);
  div_right.appendChild(move_flag(arr_name_attr[i]));


  div.appendChild(div_left);
  div.appendChild(div_right);
  }

  return div;

}



//функция-контекст для отрисовки движения кнопки
function move_flag(attr) {

  var elem = document.createElement("div");
  var div_one = document.createElement("div");
  var div_two = document.createElement("div");

 //каждому прекдючателю задаем атрибут-идентификатор
  div_two.setAttribute("id", attr);

  elem.classList.add("common_move");
  div_one.classList.add("div_one");
  div_two.classList.add("div_two");

  if (div_two.getAttribute("id") == "first") {

     div_two.style.left = storage.getItem("first");

  }else if (div_two.getAttribute("id") == "second") {

     div_two.style.left = storage.getItem("second");

  }
   else if (div_two.getAttribute("id") == "three") {

      div_two.style.left = storage.getItem("three");

   }else if (div_two.getAttribute("id") == "four") {

      div_two.style.left = storage.getItem("four");

   }

  move(div_two);

  elem.appendChild(div_one);
  elem.appendChild(div_two);

  return elem;

}

//на каждый переключатель устанавливаем событие и в storage сохраняем результат
function move(each_elem) {

  each_elem.addEventListener("click", function() {

       if(this.getAttribute("id") == "first") {

         if(move_button) {

           storage.setItem("first", "20px");
           storage.setItem("background_global", "rgba(0, 0, 20, 0.8)");
           storage.setItem("color_text", "white");

           this.style.left = storage.getItem("first");

           move_button = false;
        }else {

           storage.setItem("first", "0px");

           var obj = storage.remove();
           obj.background_global = "none";

           this.style.left = storage.getItem("first");

           move_button = true;
       }

       }else if (this.getAttribute("id") == "second") {

         if(move_button) {

           storage.setItem("second", "20px");

           this.style.left = storage.getItem("second");

           move_button = false;
         }else {

           storage.setItem("second", "0px");

           this.style.left = storage.getItem("second");

           move_button = true;
        }

       }else if (this.getAttribute("id") == "three") {

          if(move_button) {

           storage.setItem("three", "20px");

           this.style.left = storage.getItem("three");

           move_button = false;
         }else {

           storage.setItem("three", "0px");

           this.style.left = storage.getItem("three");

           move_button = true;
         }

       }else if (this.getAttribute("id") == "four") {

         if(move_button) {

           storage.setItem("four", "20px");
           storage.setItem("font_style",  "italic");

           this.style.left = storage.getItem("four", "20px");

           move_button = false;
        }else {

           storage.setItem("four", "0px");
           storage.setItem("font_style", "normal");

           this.style.left = storage.getItem("four");

           move_button = true;
        }
       }

  });

}

function main_setting() {

  var p = document.createElement("p");
  p.innerHTML = "Очень скоро";
  p.classList.add("text_popap");

  return p;


}



//В методы объекта colos передаем функции-контекст для всплываещего окна.
var colos = {

    show_popap: function() {

        window_popap(add_text_context);

    },

    color_panel: function() {

       window_popap(add_color_context);

    },

    main_setting: function() {

       window_popap(main_setting);

    }

}

export default colos;
