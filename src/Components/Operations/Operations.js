import React ,{Component} from 'react';
import './Operations.css';
import { render } from '@testing-library/react';
import Select from 'react-select';
import e from './abc.js';

const defState = {
    regionOptions: [
        { value: 0, label: 'Region-one' },
        { value: 1, label: 'Region-two' }
    ],
    lables: [
        { value: 0, label: 'Alerts' },
        { value: 1, label: 'Lables' },
        { value: 2, label: 'Lables-1' }
    ],
    keys: [
        [
            [{ value: 0, label: 'R-1-l-1-key-1' }, { value: 1, label: 'R-1-l-1-key-2' }, { value: 2, label: 'R-1-l-1-key-3' }],
            [{ value: 0, label: 'R-1-l-2-key-1' }, { value: 1, label: 'R-1-l-2-key-2' }, { value: 2, label: 'R-1-l-2-key-3' }],
            [{ value: 0, label: 'R-1-l-3-key-1' }, { value: 1, label: 'R-1-l-3-key-2' }, { value: 2, label: 'R-1-l-3-key-3' }]
        ],
        [
            [{ value: 0, label: 'R-2-l-1-key-1' }, { value: 1, label: 'R-2-l-1-key-2' }, { value: 2, label: 'R-2-l-1-key-3' }],
            [{ value: 0, label: 'R-2-l-2-key-1' }, { value: 1, label: 'R-2-l-2-key-2' }, { value: 2, label: 'R-2-l-2-key-3' }],
            [{ value: 0, label: 'R-2-l-3-key-1' }, { value: 1, label: 'R-2-l-3-key-2' }, { value: 2, label: 'R-2-l-3-key-3' }]
        ]

    ],
    selectedOptionRegion: '',
    selectedOptionLable: '',
    selectedOptionKey: '',
    selectedOptionValue: '',
    isChanged: 0
};
class Operations extends Component{

    constructor(props) {
        super(props);
   
        this.state = defState;
    }
    handleChangeRegion = selectedOptionRegion => {
        this.setState({ selectedOptionRegion:selectedOptionRegion,
            selectedOptionKey:'',
            selectedOptionLable:''
         });
        console.log(`Region selected:`, selectedOptionRegion);
      };

    handleChangeLables = selectedOptionLable => {
    this.setState({ selectedOptionLable:selectedOptionLable,
                    selectedOptionKey:''
         });
    console.log(`Lable selected:`, selectedOptionLable);
    };

    handleChangeKey = selectedOptionKey => {
        this.setState({ selectedOptionKey: selectedOptionKey});
    console.log(`Key selected:`, selectedOptionKey);
    };

    HandleSubmit = Obj => {
           //Handle Changes for future Purposes
        console.log("HANdled SUbmit");
        this.setState(defState);
    }

    HandleValueChange = selectabc => {
        this.setState({
            selectedOptionKey : selectabc,
            isChanged: 1
        })
    };

    render() {
        console.log(e)
        var showLables = (this.state.selectedOptionRegion==='')? false:true;
        var showkeys = (this.state.selectedOptionLable==='')? false:true;
        var editOption = (this.state.selectedOptionKey==='')? false:true;
        let optionsss = e.alerts.map((obj, index) => {
            return {
                label: obj.key,
                value: obj.val,
                key: index
            }
        });
        return(

            <div className='Operationsclass'>
                    <label>Select Region :</label>
                    <Select 
                        className = {'my-drop-down'}
                        placeholder={'Region '}
                        value={this.state.selectedOptionegion}
                        onChange={this.handleChangeRegion}
                        options={this.state.regionOptions}
                    />
                
                { (showLables) ? 
                <div className = {'my-drop-down'}>
                        <label>Select Lable :</label>
                        <Select 
                            placeholder={'Lables'}
                            value={this.state.selectedOptionLables}
                            onChange={this.handleChangeLables}
                            options={this.state.lables}/>
                </div> : null
                }
               
                { (showkeys) ? 
                <div className = {'my-drop-down'}>
                    <label>Select Key :</label>
                    <Select 
                        placeholder={'keys'}
                            value={this.state.selectedOptionKey}
                            onChange={this.handleChangeKey}
                            options={optionsss}
                    />                  
                </div> : null
                }
                { (editOption) ? 
                <div className={'my-drop-down'}>
                    <label>Edit Options :</label>
                        <textarea
                            className={'form-control'}
                            value={this.state.selectedOptionKey.value}
                            onChange={this.HandleValueChange}
                        > </textarea>
                        <br></br>
                        <form onSubmit={this.HandleSubmit}>
                        <input type="submit" className={'btn btn-success'}
                            style={{ visibility: this.state.isChanged === 1 ? 'visible' : 'hidden' }}
                            ></input>
                            </form>
                </div> : null
                }
            </div>
        )
    }

}
export default Operations;

