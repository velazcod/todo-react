var TodoItem = React.createClass({
  getInitialState: function() {
      return {
          visible: true
      };
  },
  removeItem: function() {
      this.setState({ visible: false });
  },
  render: function() {
    if (this.state.visible) {
      return (
        <div className="todo">
          {this.props.todo.text} <TodoItemDelete clickHandler={this.removeItem} />
        </div>
      );
    } else {
      return (
        <span />
      );
    }
  }
});
