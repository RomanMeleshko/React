import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import img from './three.png';
import './App.css';
import Home from './component/home';

const login = "roman.meleshko1@gmail.com";
const password = 123456;

 class Global extends React.Component {

//преходим на строницу Home при удачном login и password
  home = () => {

    var login_user = document.getElementsByClassName('login');
    var password_user = document.getElementsByClassName('password');

    var log = login_user[0].getAttribute('value');
    var pass = password_user[0].getAttribute('value');

    if(log == login && pass == password) {
    ReactDOM.render(<Home />, document.getElementById('global'));
    var global = document.getElementById('global');
    global.style.background = "#ffffff";

    app_button_on_home();
    }
  }

   render () {
       return (

          <div id="global">
             <p className="text_header"> КП "Городводоканал"</p>
             <img src={img} alt="image" width="100px" height="100px"/>
             <p className="enter">Ввойти в личный кабинет</p>
             <input className="login" value="roman.meleshko1@gmail.com"></input>
             <input class="password" value="123456"></input>
             <button onClick={this.home} className="button">ВХОД</button>
          </div>

       );

     }
  }

  function app_button_on_home() {

    var elem = document.getElementById("global");
    var style_global = getComputedStyle(elem);

  //  var elem_button = document.getElementById("lic_button");
  //  elem_button.style.width = (parseInt(style_global.width) / 3 + "px");
  //  elem_button.style.height = (parseInt(style_global.height) / 6 + "px");

  }



 export default Global;
