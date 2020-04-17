import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigacija from "./Navigation";
import logo from './logo.png';

class Story extends Component {

    render(){
        let links =[
            {label: 'Дома', link:"/home"},
            {label: 'Организации', link:"/organizations"},
            {label: 'Животни приказни', link:"/stories", active: true},
            {label: 'За нас', link:"/forUs"},
            {label: 'Најави се', link:"/login"},
            {label: 'Регистрирај се', link:"/register"},
        ];
        return (

            <div className="container">
                <Navigacija links={links} logo={logo}/>
                <div className="stories">
                </div>
                <div className="card">
                    <img className="card-img-top" src="" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" className="btn btn-warning"><i className="fa fa-heart"></i></a>
                        </div>
                </div>
            </div>
        );
    }

}
export default Story;
