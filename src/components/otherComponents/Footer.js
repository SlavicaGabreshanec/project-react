import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import data from "./data/data";

class Footer extends Component {
    render(){
        return (
            <footer className="footer text-center mb-0">
                <div className="container">
                    <p className="text-f">Јуни, 2019</p>
                    <span className="icons">
                        <a  href="http://www.facebook.com"><i  className="fa fa-facebook edno fa-3x" > </i></a>
                        <a href="http://www.twitter.com"><i className="fa fa-twitter edno fa-3x"> </i></a>
                        <a href="http://www.instagram.com"><i className="fa fa-instagram edno fa-3x"> </i></a>
                    </span>

                </div>
            </footer>
        );
    }

}
export default Footer;
