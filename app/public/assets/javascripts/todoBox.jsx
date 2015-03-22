var TodoBox = React.createClass({
  handleNewTodo: function(todo) {
    var todos = this.state.data;
    var newTodos = todos.concat([todo]);
    this.setState({data: newTodos});
  },
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="todoBox">
        <h1>Todo</h1>
        <TodoList data={this.state.data} />
        <TodoForm onNewTodo={this.handleNewTodo} />
      </div>
    );
  }
});
