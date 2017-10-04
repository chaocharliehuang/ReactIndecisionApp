'use strict';

var app = {
  title: 'Visibility Toggle',
  details: 'Hey. These are some details you can now see!',
  toggle: false
};

var onDetailsToggle = function onDetailsToggle() {
  app.toggle = !app.toggle;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onDetailsToggle },
      app.toggle ? 'Hide Details' : 'Show details'
    ),
    app.toggle && React.createElement(
      'p',
      null,
      app.details
    )
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
