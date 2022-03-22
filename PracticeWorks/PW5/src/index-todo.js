import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.items, text: '' };

    //If your functions don't require access to the state of your component, you don't need to bind them.

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }



  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: this.state.items.concat(newItem),
      text: ''
    });
  }

}

function TodoList(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id} >{item.text}  </li>
        ))}
      </ul>
    );
}

const TODO = [
  { id: "todo-0", text: "Eat", completed: true },
  { id: "todo-1", text: "Sleep", completed: true },
  { id: "todo-2", text: "Repeat", completed: true }
];

ReactDOM.render(
  <TodoApp items={ TODO }/>,
  document.getElementById('root')
);