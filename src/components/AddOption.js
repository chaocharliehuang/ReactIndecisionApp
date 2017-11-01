import React from 'react';

export default class AddOption extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }

  state = {error: undefined};

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.optionText.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error}));
    if (!error) {
      e.target.elements.optionText.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionText" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}