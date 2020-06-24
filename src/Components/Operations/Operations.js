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
                { value: 1, label: 'Region-two' }
            ],
            lables : [
                { value: 0, label: 'Alerts' },
                { value: 1, label: 'Lables' },
                { value: 2, label: 'Lables-1' }
            ] ,
            keys :[
                    [
                       [ {value: 0,label: 'R-1-l-1-key-1'},{value: 1,label: 'R-1-l-1-key-2'},{value: 2,label: 'R-1-l-1-key-3'}],
                       [{value: 0,label: 'R-1-l-2-key-1'},{value: 1,label: 'R-1-l-2-key-2'},{value: 2,label: 'R-1-l-2-key-3'}],
                       [{value: 0,label: 'R-1-l-3-key-1'},{value: 1,label: 'R-1-l-3-key-2'},{value: 2,label: 'R-1-l-3-key-3'}]
                    ],
                    [
                        [{value: 0,label: 'R-2-l-1-key-1'},{value: 1,label: 'R-2-l-1-key-2'},{value: 2,label: 'R-2-l-1-key-3'}],
                        [{value: 0,label: 'R-2-l-2-key-1'},{value: 1,label: 'R-2-l-2-key-2'},{value: 2,label: 'R-2-l-2-key-3'}],
                        [{value: 0,label: 'R-2-l-3-key-1'},{value: 1,label: 'R-2-l-3-key-2'},{value: 2,label: 'R-2-l-3-key-3'}]
                    ]

            ],
            selectedOptionRegion : '' ,
            selectedOptionLable :'',
            selectedOptionKey : ''
        };
    }
    handleChangeRegion = selectedOptionRegion => {
        this.setState({ selectedOptionRegion:selectedOptionRegion,
            selectedOptionKey:'',
            selectedOptionLable:''
         });
        console.log(`Region selected:`, selectedOptionRegion);
      };
    handleChangeLables = selectedOptionLable=> {
    this.setState({ selectedOptionLable:selectedOptionLable,
                    selectedOptionKey:''
         });
    console.log(`Lable selected:`, selectedOptionLable);
    };
    handleChangeKey = selectedOptionKey=> {
    this.setState({ selectedOptionKey:selectedOptionKey });
    console.log(`Key selected:`, selectedOptionKey);
    };
    render(){
        var showLables = (this.state.selectedOptionRegion=='')? false:true;
        var showkeys = (this.state.selectedOptionLable=='')? false:true;
     
        return(

            <div className='Operationsclass'>
                <Select 
                    className = {'my-drop-down'}
                    value={this.state.selectedOptionegion}
                    onChange={this.handleChangeRegion}
                    options={this.state.regionOptions}
                />
                { (showLables) ? 
                <Select 
                    className = {'my-drop-down'}
                    value={this.state.selectedOptionLables}
                    onChange={this.handleChangeLables}
                    options={this.state.lables}
                /> : null
                }
                { (showkeys) ? 
                <Select 
                    className = {'my-drop-down'}
                    value={this.state.selectedOptionKey}
                    onChange={this.handleChangeKey}
                    options={this.state.keys[this.state.selectedOptionRegion.value][this.state.selectedOptionLable.value]}
                /> : null
                }
            </div>
        )
    }

}
export default Operations;

