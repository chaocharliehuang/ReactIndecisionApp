const app = {
  title: 'Indecision App',
  subtitle: 'This is the subtitle',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const removeOptions = () => {
  app.options = [];
  renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()*app.options.length);
  const option = app.options[randomNum];
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button
        disabled={!app.options.length}
        onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeOptions}>Remove all</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();