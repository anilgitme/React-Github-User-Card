import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component{
  //states
   constructor(){
     super()
     this.state= {
       gitData: {},
       followers: []
     };
   }
  

  //fetching data from the github api for the current user in state
  componentDidMount(){
    axios.get('https://api.github.com/users/anilgitme')
    .then(res =>{
      console.log(res.data)
     this.setState({gitData: res.data})
    })
 .catch(err => console.log(err))
 axios.get('https://api.github.com/users/anilgitme/followers')
      .then(res=> {
        console.log(res);
        this.setState({followers : res.data})
      })
      .catch(err => console.log(err))
}



  

render() {
  
  return (
    <div className="App">
      <h1>Anil's Github Card</h1>
     <UserCard data={this.state.gitData} followers={this.state.followers} />
    </div>
  );
 }
}



export default App;
