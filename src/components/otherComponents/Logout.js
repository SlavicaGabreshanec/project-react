import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigacija from "./Navigation";
import logo from './logo.png';


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.routeChange = this.routeChange.bind(this);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,

        };

    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit= event => {
        event.preventDefault();
        const {email, password} = this.state
    }
    routeChange() {
        let path = `login`;
        this.props.history.push(path);

    }



    render() {

        let links =[
            {label: 'Дома', link:"/home"},
            {label: 'Организации', link:"/organizations"},
            {label: 'Животни приказни', link:"/stories"},
            {label: 'Кликни и донирај', link:"/click"},
            {label: 'За нас', link:"/forUs"},
            {label: 'Најави се', link:"/login", active: true, flags:false},

        ];

        return (
            <div className="container">
                <Navigacija clickLogOut={this.routeChange.bind(this)} isLoggedIn={this.state.isLoggedIn} links={links} logo={logo}/>

                <div className="Login">
                    <div className="forma">
                        <form onSubmit={this.handleSubmit}>
                            <p className="naslov">Најави се</p>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    placeholder = "E-mail"
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Лозинка</ControlLabel>
                                <FormControl
                                    placeholder = "Лозинка"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                onClick={ this.routeChange}

                            >
                                {this.state.isLoggedIn ? "Одјави се" : "Најави се"}
                            </Button>

                        </form>
                    </div>
                </div>
            </div>




        );
    }
}


