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
          <TodoItemDelete clickHandler={this.removeItem} /> {this.props.todo.text}
        </div>
      );
    } else {
      return (
        <span />
      );
    }
  }
});
