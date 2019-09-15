import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import data from '../current_info_person';
const text = "back";

class Balance extends React.Component {

  back = () => {

    ReactDOM.render(<Home />, document.getElementById('global'));

  }

  show_name_data = () => {

    return (

        <div>
          <span>Индификатор счетчика</span>
          <hr />
          <span>Название счетчика</span><br />
          <hr />
          <span>Номер счетчика</span><br />
          <hr />
          <span>Установка счетчика</span><br />
          <hr />
          <span>Марка счетчика</span>
        </div>

    );


  }

  show_info_data = () => {

    var info = this.props.info_person;

    var lic_rah = document.getElementById("lic_rah_abonent");

    var result_info_obj;

    var result = data.map(function(elem) {
      for(var key in elem) {
        if(+elem[key] == +lic_rah.innerHTML) {
          result_info_obj = isProm(elem);
        }
      }
    });

    return ( <div>
              <span>{result_info_obj.num}</span>
              <hr />
              <span class="info_service">{result_info_obj.name_lich}</span><br />
              <hr />
              <span class="info_service">{result_info_obj.num_lich}</span><br />
              <hr />
              <span class="info_service">{result_info_obj.ustanovka_lich}</span><br />
              <hr />
              <span class="info_service">{result_info_obj.marka_lich}</span>
            </div> );


  }




  render () {

    return (

             <div class="common_info">
              <div class="info_lich">
                <div class="left_container">
                  {this.show_name_data()}
                </div>
                <div class="right_container">
                   {this.show_info_data()}
                </div>
              </div>

              <div class="container_button">
               <button onClick={this.back} id="button_back">back</button>
               </div>

               </div>

    );

  }

}
function isProm(obj) {

   for(var key in obj) {
     if(key == "lich") {
       return obj[key];
     }
   }

}


export default Balance;
