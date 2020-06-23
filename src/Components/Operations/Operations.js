import React ,{Component} from 'react';
import './Operations.css';
import { render } from '@testing-library/react';
import Select from 'react-select';


class Operations extends Component{

    constructor(props) {
        super(props);
        this.state = {
            regionOptions : [
                { value: 0, label: 'Region-one' },
                { value: 1, label: 'Region-two' },
                { value: 2, label: 'Region-three' },
            ],
            keys :[
                    [
                        {value: 0,label: 'Region-one-key-1'},{value: 1,label: 'Region-one-key-2'},{value: 2,label: 'Region-one-key-3'},{value: 3,label: 'Region-one-key-4'}
                    ],
                    [
                        {value: 0,label: 'Region-two-key-1'},{value: 1,label: 'Region-two-key-2'},{value: 2,label: 'Region-two-key-3'},{value: 3,label: 'Region-two-key-4'}
                    ],
                    [
                        {value: 0,label: 'Region-three-key-1'},{value: 1,label: 'Region-three-key-2'},{value: 2,label: 'Region-three-key-3'},{value: 3,label: 'Region-three-key-4'}
                    ]

            ],
            selectedOptionRegion : '' ,
            selectedOptionKey : ''
        };
    }
    handleChangeRegion = selectedOptionRegion => {
        this.setState({ selectedOptionRegion:selectedOptionRegion,
            selectedOptionKey:''
         });
        console.log(`Option selected:`, selectedOptionRegion);
      };
    handleChangeKey = selectedOptionKey=> {
    this.setState({ selectedOptionKey });
    console.log(`Option selected:`, selectedOptionKey);
    };
    render(){
        return(

            <div className='Operations'>
                <Select 
                    className = {'my-drop-down'}
                    value={this.state.selectedOptionegion}
                    onChange={this.handleChangeRegion}
                    options={this.state.regionOptions}
                />
                <Select 
                    className = {'my-drop-down'}
                    value={this.state.selectedOptionKey}
                    onChange={this.handleChangeKey}
                    options={this.state.keys[this.state.selectedOptionRegion.value]}
                />
            </div>
        )
    }

}
export default Operations;

