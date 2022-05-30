import React from 'react';
 import '../App.css';
export default class PureComponent extends React.PureComponent{
render(){
	return <>
	<h3>Pure Component :</h3>;
	<p>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.</p>
	</>
}
}
