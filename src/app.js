class IndecisionApp extends React.Component {
  render() {
    const title="Indecision";
    const subtitle="Put your life in the hands of a computer";
    const options = ['thing1', 'thing2', 'thing3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option) => <Option key={option} text={option}/>)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));