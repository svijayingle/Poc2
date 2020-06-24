import React ,{Component} from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Header from './Components/Header/Header'
import Operations from './Components/Operations/Operations'
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      add_user:false
    };
  }

    render()
    {
        return (
          <div className="App">
            <Header></Header>
            <Operations></Operations>
          </div>
        );
   }
}

export default App;
