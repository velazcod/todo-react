var TodoList = React.createClass({
  render: function() {
    var todoNodes = this.props.data.map(function (todo) {
      return (
        <TodoItem todo={todo} />
      );
    });
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
});
