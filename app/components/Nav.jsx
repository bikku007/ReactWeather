var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <h2>NAV component</h2>
//         <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>Get Weather component</IndexLink>
//         <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>About</Link>
//         <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = () => {
  return (
    <div>
      <h2>NAV component</h2>
      <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>Get Weather component</IndexLink>
      <Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>About</Link>
      <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold',fontColor:'Green'}}>Examples</Link>
    </div>
  );
}

module.exports = Nav;
