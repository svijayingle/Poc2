import React, { Component } from 'react';
import './Operations.css';
import { render } from '@testing-library/react';
import Select from 'react-select';
import e from './abc.js';

class Operations extends Component {

    constructor(props) {
        super(props);
      
    }
    
    render() {
        return <option value={this.props.val}>{this.props.key}</option>;
    }

}
export default Option;

