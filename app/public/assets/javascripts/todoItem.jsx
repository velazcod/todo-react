var TodoItem = React.createClass({
  render: function() {
    return (
      <div className="todo">
        {this.props.todo}
      </div>
    );
  }
});
