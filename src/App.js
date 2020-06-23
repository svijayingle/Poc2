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

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  add_user_Handler=()=>{
    fetch("https://reqres.in/api/users",{
      method : 'POST',
      headers :{
        "content-type": "application/json"
      },
      body :{
        first_name : "Vijay",
        email : "ingle@johndeere.com"
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
