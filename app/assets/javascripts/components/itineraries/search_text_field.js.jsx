SearchTextField = React.createClass({
  render: function(){
    return (
      <div className="form-group">
        <label htmlFor={ this.props.id }>{ this.props.label }</label>
        <input type="text" id={ this.props.id } name={ this.props.name } value={ this.props.value } onChange={ this.props.handleChange }></input>
      </div>
    )
  }
});
