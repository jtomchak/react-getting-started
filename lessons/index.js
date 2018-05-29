import React from "react";
import ReactDOM from "react-dom";
import "./utils/bootstrap-add";

const Index = () => {
  const lessons = (window.__DATA__ || {}).lessons || [];

  return (
    <div className="index">
      <header className="index-header">React Getting Started</header>
      <div className="container">
        <table className="index-lessonsTable" cellSpacing={0} cellPadding={0}>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={index}>
                <td className="index-lessonNumber">{lesson.number}</td>
                <td className="index-lecture">
                  {lesson.lecture ? (
                    <a href={lesson.lecture} title={`${lesson.name} lecture`}>
                      {lesson.name}
                    </a>
                  ) : (
                    lesson.name
                  )}
                </td>
                <td className="index-exercise">
                  {lesson.exercise && (
                    <a href={lesson.exercise} title={`${lesson.name} exercise`}>
                      exercise
                    </a>
                  )}
                </td>
                <td className="index-solution">
                  {lesson.solution && (
                    <a href={lesson.solution} title={`${lesson.name} solution`}>
                      solution
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
