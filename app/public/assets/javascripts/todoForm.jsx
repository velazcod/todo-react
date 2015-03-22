var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = React.findDOMNode(this.refs.todoText).value.trim();
    if (!todoText) { return; }
    this.props.onNewTodo({text: todoText});
    React.findDOMNode(this.refs.todoText).value = '';
    return;
  },
  render: function() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What needs to be done?" ref="todoText" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
