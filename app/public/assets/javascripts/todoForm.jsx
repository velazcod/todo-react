function guid() {
  // crappy random numbers generation that looks like UUID
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = React.findDOMNode(this.refs.todoText).value.trim();
    if (!todoText) { return; }
    this.props.onNewTodo({id: guid(), text: todoText});
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
