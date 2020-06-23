import React ,{Component} from 'react';
import './Operations.css';
import { render } from '@testing-library/react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



class Operations extends Component{

    constructor(props) {
        super(props);
        this.state = {
            regionOptions : [
                'Region-one', 'Region-two', 'Region-three'
            ],
            keys :[
                'key-1','key-2','key-3','key-4'
            ]  
        };
    }
    
    render(){
        const regionOptions_defaultOption = this.state.regionOptions[0];
        const key_defaultOption = this.state.keys[0];
        return(

            <div className='Operations'>
                <Dropdown className='my-drop-down' options={this.state.regionOptions} onChange={this._onSelect} value={regionOptions_defaultOption} placeholder="Select an option" />
                <br></br>
                <Dropdown className='my-drop-down' options={this.state.keys} onChange={this._onSelect} value={key_defaultOption} placeholder="Select an option" />
            </div>
        )
    }

}
export default Operations;

