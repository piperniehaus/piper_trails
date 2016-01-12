Itineraries = React.createClass({
  getInitialState: function(){
    return {
      itineraries: this.props.itineraries,
      search_params: {}
    }
  },
  onChange: function(){

  },
  getSearchResults: function(data){
    var name = event.target.name
    var value = event.target.value
    var searchParams = this.state.searchParams
    searchParams[name] = value
    this.setState(searchParams: searchParams)
    var messageData = { search_params: searchParams }
    $.ajax({
      method: 'GET',
      url: '/itineraries',
      dataType: 'json',
      data: messageData,
      cache: false,
      success: function(data){
        alert("success")
        this.setState({ itineraries: data })
      }
    })

  },
  render: function(){
    var rows = this.state.itineraries.map(function(itinerary){
      return(
        <Itinerary itinerary={ itinerary } key={ itinerary.id } />
      )
    })
    return (
      <div>
        <h1>Itineraries</h1>
        <SearchForm handleChange={ this.getSearchResults } search_params={ this.state.search_params } />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hiking Distance</th>
            </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    )
  }
});
