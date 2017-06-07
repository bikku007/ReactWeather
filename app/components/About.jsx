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
      <h1 className='text-center'>About</h1>
      <p>This is a weather application built on React. Hello Subham!!!</p>
    </div>

  );
}

module.exports = About;
