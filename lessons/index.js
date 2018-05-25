import React from "react";
import ReactDOM from "react-dom";

// Bootstrap dependencies
window.$ = window.jQuery = require('jquery') // required for bootstrap
window.Popper = require('popper.js') // required for tooltip, popup...
require('bootstrap')

import './index.scss' // include bootstrap css file with own modifications

// tooltip and popover require javascript side modification to enable them (new in Bootstrap 4)
// use tooltip and popover components everywhere
$(function (){
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})


const Index = () => {
  const lessons = (window.__DATA__ || {}).lessons || [];

  return (
    <div className="index">
      <header className="index-header">
      </header>
      <div className="container">
    <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" 
    data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
  </div>
      <table
        className="index-lessonsTable"
        cellSpacing={0}
        cellPadding={0}
      >
        <tbody>
          {lessons.map((lesson, index) => (
            <tr key={index}>
              <td className="index-lessonNumber">{lesson.number}</td>
              <td className="index-lecture">
                {lesson.lecture ? (
                  <a
                    href={lesson.lecture}
                    title={`${lesson.name} lecture`}
                  >
                    {lesson.name}
                  </a>
                ) : (
                  lesson.name
                )}
              </td>
              <td className="index-exercise">
                {lesson.exercise && (
                  <a
                    href={lesson.exercise}
                    title={`${lesson.name} exercise`}
                  >
                    exercise
                  </a>
                )}
              </td>
              <td className="index-solution">
                {lesson.solution && (
                  <a
                    href={lesson.solution}
                    title={`${lesson.name} solution`}
                  >
                    solution
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("app"));