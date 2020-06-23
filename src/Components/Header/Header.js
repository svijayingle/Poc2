import React ,{Component} from 'react';
import './Header.css';
import logo from './logo.png'
import { render } from '@testing-library/react';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return(

            <div className='Header'>
                    <img src={logo} alt={"Logo"}></img>
            </div>
        )
    }

}
export default Header;