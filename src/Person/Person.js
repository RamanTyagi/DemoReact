import React from 'react';

function Person(props)
{

  return(
    <div>
<h1 onClick={props.click}>I'm {props.name} and I am {props.age} years old!</h1>
<p>{props.children}</p>
<input type="text" onChange={props.change} value={props.name} />
    </div>
  );
}
export default Person;
