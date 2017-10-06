class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {visibility: false};
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {visibility: !prevState.visibility}
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && <p>Hey. These are some details you can now see!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   details: 'Hey. These are some details you can now see!',
//   toggle: false
// }

// const onDetailsToggle = () => {
//   app.toggle = !app.toggle;
//   renderApp();
// }

// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onDetailsToggle}>
//         {app.toggle ? 'Hide Details' : 'Show details'}
//       </button>
//       {app.toggle && <p>{app.details}</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// }

// renderApp();