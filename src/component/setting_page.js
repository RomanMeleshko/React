import React from 'react';
import ReactDOM from 'react-dom';
import popap from '../popap';
import Home from './home';
import storage from '../storage';

class Setting extends React.Component {

//показавает всплывающее окно с информацией о версии
 info_version = () => {

   popap.show_popap();

 }

 //показывает всплывающее окно для изменения цвета
 color_panel = () => {

   popap.color_panel();

 }

 main_setting = () => {

   popap.main_setting();

 }

 //кнопка для возврата на страницу Home
 back = () => {

   ReactDOM.render(<Home />, document.getElementById('global'));

 }

 isProm = () => {

      setTimeout(function(){

      //  var elem_common_text = document.getElementsByClassName("common_text");
      //  elem_common_text[0].style.color = storage.getItem("color_text");

      }, 0.1);

 }


  render () {
    return (

       <div class="common_block">
        <div class="head_line_setting">
          <span>Настройки</span>
        </div>
        <div class="common_text">
          <div onClick={this.info_version}>
            <span>Информация о версии</span>
            <span>версия 2.0.9 </span>
          </div>
          <div onClick={this.color_panel}>
            <span>Цветовая панель</span>
            <span>выбор основного цвета в проложении</span>
          </div>
          <div onClick={this.main_setting}>
            <span>Основные настройки</span>
            <span>конфигурация и стиль</span>
          </div>
          {this.isProm()}
        </div>
        <div class="container_button">
         <button onClick={this.back} id="button_back">back</button>
         </div>
        </div>


    );
  }

}

export default Setting;
