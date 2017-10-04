const app = {
  title: 'Visibility Toggle',
  details: 'Hey. These are some details you can now see!',
  toggle: false
}

const onDetailsToggle = () => {
  app.toggle = !app.toggle;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onDetailsToggle}>
        {app.toggle ? 'Hide Details' : 'Show details'}
      </button>
      {app.toggle && <p>{app.details}</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
}

renderApp();