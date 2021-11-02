import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerServices from '../../services/CustomerServices';
import Navbar from '../sidebar/Navbar';
import '../../css/dashboard.css';
import '../../css/Cards.css';
import img from '../../images/home1.jpg';
import img2 from '../../images/home2.jpg';
import img3 from '../../images/home3.jpg';
import img4 from '../../images/home4.jpg';
import img5 from '../../images/home5.jpg';
import CardItem from './CardItem';

export default class CustomerDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: '',
            costumer: null,
        }
    }
    
    componentDidMount() {
        CustomerServices.getCurrentCostumer().then(res => {
            console.log(res);
            this.setState({costumer: res.data})
            

        });

    }

    render() {
        return (
            

        
            <div>
                <Navbar />
                <br />
                <p className='text-right'><i className="fa fa-user" aria-hidden="true"></i> Logged as : {this.state?.costumer?.citizenCardId}</p>

                <h2 className="text-center">YOUR DASHBOARD</h2>
                <div className="container">
                </div>
                <div className="">
                    
                </div> 


                    <div className='cards'>
                    <h1> Home's Energy Board</h1>
                    <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src={img}
                
                    text='Save Electrcity Save Earth'
                    label='Home1'
                     path='/services'
                    />
                    <CardItem
                    src={img2}
                    text='Save Energy Save Life'
                    label='Home2'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={img3}
                    text='Save Energy for Brigther Future'
                    label='Home3'
                    path='/services'
                    />
                    <CardItem
                    src={img4}
                    text='Sustainable & Renewable Energy'
                    label='Home4'
                    path='/products'
                    />
                    <CardItem
                    src={img5}
                    text='Solar Energy'
                    label='Home5'
                    path='/sign-up'
                    />
                </ul>
                </div>
            </div>
            </div>





     </div>


                   






        )

        



    }
}

