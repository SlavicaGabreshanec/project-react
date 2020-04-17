import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Navigation.css';
import search from './search.png';
import {BrowserRouter as Router ,Link} from "react-router-dom";


class Navigacija extends Component {
    constructor(){
        super();

        this.state = {
            showForm: false,
            isLoggedIn: false
        };
    }

    showForm(){
        this.setState({
            showForm: !this.state.showForm
        });
    }


    render() {

        let searchForm = this.state.showForm ? (
                <form className="menu__search-form" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter"/>

                </form>
            ) : '';

        let linksMarkup = this.props.links.map((link, index) =>{
            let linkMarkup = link.active ? <Link className="menu__link menu__link--active" to={link.link}>{link.label}</Link> : <Link className="menu__link menu__link" to={link.link}>{link.label}</Link>;
            return (
                <li key={index} className="menu__list-item">

                    {linkMarkup}



                </li>
            );
        });


        return (
            //----------Navigation----------
            <nav className="menu">
                <h1 style={{
                    backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo"> </h1>
                <div className="menu--rigth">
                    <ul className="menu__list">
                        {linksMarkup}

                        <button onClick={this.showForm.bind(this)} style={{
                            backgroundImage: 'url(' + search + ')'
                        }} className="menu__search-button"> </button>


                    </ul>
                    {searchForm}

                </div>
            </nav>

        );
    }

}


export default Navigacija;