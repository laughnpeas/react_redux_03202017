import * as React from "react";
import * as ReactDOM from "react-dom";

import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "../scss/styles.scss";

interface TodoListState {
    items?: string[];
}

class TodoList extends React.Component<void, TodoListState> {

  constructor(props: void) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me", "cool", "wow"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  public handleAdd() {
    const newItems = this.state.items.concat([
      prompt("Enter some text"),
    ]);
    this.setState({items: newItems});
  }

  public handleRemove(i: number) {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  public render() {

    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.querySelector("main"));

// fetch("http://localhost:3010/cars")
//     .then((res) => res.json())
//     .then((results) => console.log(results));
