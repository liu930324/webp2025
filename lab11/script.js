const changeText = event => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了";
};

const styleArgument = {
  color: 'red',
  fontSize: '100px',
  fontWeight: 'bold' };


function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("h1", { style: styleArgument, onClick: changeText }, "hello CGU!!")));




}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));