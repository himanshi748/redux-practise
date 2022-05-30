import React from 'react';

var newData = {
   data: ' A higher-order function is one which either a) takes a function as an argument or b) returns a function.',
}

var MyHOC = ComposedComponent => class extends React.Component {
   componentDidMount() {
      this.setState({
         data: newData.data
      });
   }
   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
   }
};
class MyComponent extends React.Component {
   render() {
      return (
         <div>
         <h1>React Pure component and HOC</h1>
         <hr/>
         <h3>Higher Order Component :</h3>
            <p>{this.props.data}</p>
         </div>
      )
   }
}

export default MyHOC(MyComponent);