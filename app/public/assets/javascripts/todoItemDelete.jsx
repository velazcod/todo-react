var TodoItemDelete = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.clickHandler}>x</button>
    );
  }
});
