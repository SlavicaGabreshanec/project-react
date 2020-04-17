import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Navigacija from "./Navigation";
import logo from './logo.png';
import MakingStory from "./MakingStory";
import Footer from "./Footer";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.routeChange = this.routeChange.bind(this);
        this.state = {
            name:"",
            surname: "",
            email: "",
            password: "",
            passwordcnt: "",
            isLoggedIn: false,
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.name.length > 0 && this.state.surname.length > 0;
    }
    validateForm1() {
        return this.state.isLoggedIn;
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
        this.state.isLoggedIn = true;
    }
    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }



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

                <div className="Login">
                    <div className="forma">
                        <form onSubmit={this.handleSubmit}>
                            <p className="naslov">Регистрирај се</p>
                            <FormGroup controlId="name" bsSize="large">
                                <ControlLabel>Име</ControlLabel>
                                <FormControl
                                    placeholder = "Име"
                                    autoFocus
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="surname" bsSize="large">
                                <ControlLabel>Презиме</ControlLabel>
                                <FormControl
                                    placeholder = "Презиме"
                                    type="email"
                                    value={this.state.surname}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    placeholder = "E-mail"
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
                            <FormGroup controlId="passwordcnt" bsSize="large">
                                <ControlLabel>Повторете Лозинка</ControlLabel>
                                <FormControl
                                    placeholder = "Повторете Лозинка"
                                    value={this.state.passwordcnt}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                onClick={ this.routeChange}>
                                Регистрирај се
                            </Button>


                        </form>
                    </div>
                </div>
                <Footer/>
            </div>




        );
    }
}


