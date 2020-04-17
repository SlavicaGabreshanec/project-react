import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigacija from "./Navigation";
import logo from './logo.png';
import Footer from "./Footer";


export default class MakingStory extends Component {

    render() {

        let links =[
            {label: 'Дома', link:"/home"},
            {label: 'Организации', link:"/organizations"},
            {label: 'Животни приказни', link:"/stories"},
            {label: 'За нас', link:"/forUs"},
            {label: 'Најави се', link:"/login" },
            {label: 'Регистрирај се', link:"/register", active: true},

        ];

        return (
            <div className="container">
                <Navigacija links={links} logo={logo}/>
                <form>
                    <div className="form-group fg">
                        <h1 className="nas">Креирај животна приказна</h1>
                       <div className="divovi">
                        <label htmlFor="exampleFormControlFile1">Изберете слика</label>
                           <input type="file" className="form-control-file " />
                       </div>
                        <div className="divovi">
                            <label htmlFor="formGroupExampleInput">Наслов</label>
                            <input type="text" className="form-control" placeholder="Внесете наслов"/>
                        </div>
                        <div className="divovi">
                            <label htmlFor="exampleFormControlTextarea1">Опис на ситуацијата</label>
                            <textarea className="form-control"  rows="8"></textarea>
                        </div>

                        <div className="divovi">
                            <label htmlFor="formGroupExampleInput2">Жиро сметки</label>
                            <input type="text" className="form-control" placeholder="Внесете жиро сметки"/>
                        </div>
                        <div className="divovi">
                            <label htmlFor="formGroupExampleInput2">Контакт број</label>
                            <input type="text" className="form-control" placeholder="Контакт број"/>
                        </div>

                    </div>

                </form>
                <Footer/>
            </div>




        );
    }
}


