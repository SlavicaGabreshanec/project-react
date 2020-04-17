import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigacija from "./Navigation";
import logo from './logo.png';
import Footer from "./Footer";
import Slika1 from './65275636_400521130805723_6305736010344955904_n.jpg';

class ForUs extends Component{
    render(){
        let links =[
            {label: 'Дома', link:"/home"},
            {label: 'Организации', link:"/organizations"},
            {label: 'Животни приказни', link:"/stories"},
            {label: 'За нас', link:"/forUs"},
            {label: 'Најави се', link:"/login" },
            {label: 'Регистрирај се', link:"/register", active: true},

        ];
        return(
        <div className="container">
            <Navigacija links={links} logo={logo}/>

            <img src={Slika1} className="sli"/>

            <img src={Slika1} className="sli"/>
            <br/>
            <br/>

            <p>Ние сме две студентки на Факултетот за информатички науки и компјутерско инженерство - Скопје. Целта на нашиот проект е
            собирање на сите хумани луѓе на едно место како и на лицата кои имаат потреба од помош било да е за облека, за средства, за храна.
            </p>
            <p>Контакт информации:</p>
            <p> E-mail: slavica.gabresanec@students.finki.ukim.mk<br/>sofija.mihailova@students.finki.ukim.mk</p>
            <Footer/>
        </div>
    );
}


}
export default ForUs;