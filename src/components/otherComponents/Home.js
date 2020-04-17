import React, { Component } from 'react';
import Navigacija from "./Navigation";
import logo from './logo.png';
//import search from '../otherComponents/search.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Card from './Card';
import data from '../otherComponents/data/data';
import Login from "./Login";
import Footer from "./Footer";


class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            properties: data.properties,
            property: data.properties[2],
            isLoggedIn: false
        }
    }
    nextProperty = () =>{
        const newIndex = this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    prevProperty = () =>{
        const newIndex = this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    render(){
        let links =[
            {label: 'Дома', link:"/home", active: true},
            {label: 'Организации', link:"/organizations"},
            {label: 'Животни приказни', link:"/stories"},
            {label: 'За нас', link:"/forUs"},
            {label: 'Најави се', link:"/login"},
            {label: 'Регистрирај се', link:"/register"},
        ];
        const {properties,property} = this.state;

        return (

            <div className="container">

                <Navigacija links={links} logo={logo}/>

                <div className="slideShow">
                    <div className="center">

                        <button onClick={() => this.prevProperty()} disabled={property.index === 0} className="button button1">
                            Претходно
                        </button>

                        <button onClick={() => this.nextProperty()} disabled={property.index === 5} className="buttonn button2">
                            Следно>>
                        </button>
                    </div>
                    <section className="sectionStyle">
                        <h2 className="title">Погледнете ги настаните каде сè можете да донесете насмевка на некои лица:</h2>
                        <h1></h1>
                    </section>
                    <div className="col">
                        <div className={`cards-slider active-slide-${property.index}`}>
                            <div className="cards-slider-wrapper" style={{
                                //used negative because we want to go to left
                                'transform': `translateX(-${property.index*(100/properties.length)}%)`
                            }}>
                                {
                                    properties.map(property => <Card key={property._id} property={property}/>)
                                }

                            </div>
                        </div>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                <Footer/>
            </div>

        );
    }

}
export default Home;
