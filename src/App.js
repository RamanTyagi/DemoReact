import React, {useState} from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const App = () => {
const [persons,setPersons] = useState(
  {
  persons:[
  {   name:"Max", age:"28"  , id:"01"      },
  {   name:"Manu" , age:"29" , id:"02"      },
  {   name:"Stephanie" , age:"27", id:"03"  },
  ],
  otherstate: "Hello Hunny Bunny!",
  flag: false
  }
)
const style = {
  backgroundColor: 'green',
  color: 'white',
  font:'inherit',
  border:'1px solid blue',
  padding: '8px',
  cursor: 'pointer',
':hover' : {
  backgroundColor:'lightgreen',
  color:'black',
}
}
const togglename = () => {
  const f=persons.flag;
setPersons({
  persons:[
  {   name:"Max", age:"28"  , id:"01"      },
  {   name:"Manu" , age:"29" , id:"02"      },
  {   name:"Stephanie" , age:"27", id:"03"  },
  ],
  flag: !f,
})
}
const deletePerson = (personIndex) => {
//const pk = persons.persons.slice();
const pk = [...persons.persons];
pk.splice(personIndex,1);
setPersons({
  persons:pk,
  flag:true,
})

}
const changeNameHandler = (event,id) => {
const personIndex = persons.persons.findIndex(p => {
  return id===p.id;
});

const person = {
  ...persons.persons[personIndex],
};

person.name = event.target.value;
const per = [...persons.persons];
per[personIndex] = person;
setPersons({
  persons:per,
  flag: true,
})
}

let ps = null;
if(persons.flag)
{

  ps = (
    <div>
    {
      persons.persons.map((person,index) => {
    return(
  <Person style={style} click={() => deletePerson(index)} change={(event) => changeNameHandler(event,person.id)} name={person.name} age={person.age} key={index} id={person.id} />
);

    })
  }

    </div>
  );
  style.backgroundColor = "red";
  style[':hover'] = {
    backgroundColor:'salmon',
    color:'black',
  };
}
let classes = [];
if(persons.persons.length<=2)
{
  classes.push('red');
}
if(persons.persons.length<=1)
{
  classes.push('bold');
}
    return (

      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={togglename}>Toggle Name</button>
        {ps}
  </div>

    );
  }

export default App;
