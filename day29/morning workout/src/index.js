import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Celebrities from "./Celebrities/Celebrities";

ReactDOM.render(
  <React.StrictMode>
      <Celebrities
          url="http://www.cbp-exercises.test/day29/morning%20workout/api/"
      />
  </React.StrictMode>,
  document.getElementById('root')
);
