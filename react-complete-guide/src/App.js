import React , { Component} from 'react';
// import Radium , {StyleRoot}from 'radium';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// const StyledButton = styled.button `
//       background-color: ${props => props.alt ? 'red' : 'green' };
//       color : white;
//       font:inherit;
//       border:1px solid blue;
//       padding:8px;
    
//       &:hover {
//         background-color:  ${props => props.alt ? 'salmon' : 'lightgreen' };
//         color:black  
//       }
//         `;

class App extends Component {
  
  state = {
    persons : [
      {id:' sdjkl1',name:'Max'},
      {id:'7rh7hj',name:'Aparna'},
      {id:'7rdf78',name:'Varada'}
    ],
    otherstate:'value',
    showPerson:false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Was Clicked");
  //   this.setState({persons:[
  //     {name:newName},
  //     {name:'Aparna Udayakumar'}
  //   ]})
  // }
  deletePersonHandler =(personIndex)=>{
    // const persons= this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id)=>{
    const personIndex =this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({},this.state.persons[personIndex]);
    
    person.name=event.target.value;

    const persons=[...this.state.persons];
    person[personIndex]=person;
    
    this.setState({persons: persons
    // [
    //   {name:'Max'},
    //   {name:event.target.value}
    // ]
  });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }
  render()
  {
    const style = {
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor :'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color:'black'
      }

    }
    let persons=null;
    if(this.state.showPerson){
      persons =(
        <div >
          {this.state.persons.map((person,index) => {
            return <Person 
            Click={() => this.deletePersonHandler(index)}
            name={person.name}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}
            />
          })}
        {/* <Person name={this.state.persons[0].name} Click={this.switchNameHandler.bind(this,'Max !')} >Welcome!</Person>
        <Person name={this.state.persons[1].name }changed={this.nameChangedHandler} >Hey</Person> */}
     </div> 

      );
      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // };
    }

    // let classes=['red','bold'].join(' '); //red bold 
    let classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    
    return (
      <div>
    <div className="App">
      
      <header className="App-header"> 
      
        <img src={logo} className="App-logo" alt="logo" />
        <h1 >Hey, Aparna!</h1>
        <p className={classes.join(' ')} > Welcome to React App</p>
       <StyledButton alt={this.state.showPerson}
        onClick={this.togglePersonHandler} >Toggle Person </StyledButton>
       {persons}
       </header>
     </div>
     </div>
  );
}
}

export default App;