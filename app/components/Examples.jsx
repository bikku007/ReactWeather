var React = require('react');

// var Examples = React.createClass({
//   render : function(){
//     return (
//       <h3>Example component</h3>
//     );
//   }
// });
var {Link} = require('react-router');

var Examples = () =>{
  return (
    <div>
      <h1 className='text-center page-title'>Example</h1>
      <p>Here are a few example location to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Bangalore'>Bangalore</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai</Link>
        </li>
        <li>
          <Link to='/?location=Berhampur'>Berhampur</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
