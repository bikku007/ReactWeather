var React = require('react');
//
// var About = React.createClass({
//   render : function(){
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) =>{
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to About Page!</p>
    </div>

  );
}

module.exports = About;
