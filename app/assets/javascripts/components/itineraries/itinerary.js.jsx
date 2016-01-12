Itinerary = React.createClass({
  render: function(){
    return(
      <tr>
        <td>
          { this.props.itinerary.name }
        </td>
        <td>
          { this.props.itinerary.hiking_distance }
        </td>
      </tr>
    )
  }
});
