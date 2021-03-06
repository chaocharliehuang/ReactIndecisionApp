class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {options: []};
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({options}));
      }
    } catch(e) { }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => (
      {
        options: prevState.options.filter((option) => option !== optionToRemove)
      }
    ));
  }
  
  handlePick() {
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  render() {
    const subtitle="Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            text={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.text}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.text);
        }}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {error: undefined};
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.optionText.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));
    if (!error) {
      e.target.elements.optionText.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionText" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));