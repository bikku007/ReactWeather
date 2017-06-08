var React = require('react');

// var WeatherMessage = React.createClass({
//   render : function(){
//     var location = this.props.location;
//     var temp = this.props.temp;
//     return (
//       <h3>It's {temp}* at {location}</h3>
//     );
//   }
// });

var WeatherMessage = ({location, temp}) => {
  //var {location, temp} = props;
  return (
    <h3 className='text-center'>It's {temp}* at {location}</h3>
  );
}

module.exports = WeatherMessage;
