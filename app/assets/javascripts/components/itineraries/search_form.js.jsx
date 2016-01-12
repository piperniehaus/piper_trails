SearchForm = React.createClass({
  getInitialState: function(){
    return this.props.search_params
  },
  render: function(){
    return(
      <div>
        <SearchTextField id="search-name" name="name" label="Name" value ={ this.state.name } handleChange={ this.props.handleChange }/>
        <SearchTextField id="search-hiking-distance" name="hikingDistance" label="Hiking Distance" value ={ this.state.hikingDistance } handleChange={ this.props.handleChange }/>
      </div>
    )
  }
});
