var TodoList = React.createClass({
  render: function() {
    var todoNodes = this.props.data.map(function (todo) {
      return (
        <TodoItem key={todo.id} todo={todo} />
      );
    });
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
});
