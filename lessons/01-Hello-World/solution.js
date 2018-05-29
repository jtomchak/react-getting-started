import React from 'react';
import ReactDOM from 'react-dom';

const MyTitle = props => {
    const style = {color: props.color}
    return (
        <div>
            <h1 style={style}>{props.title}</h1>
        </div>
    )
}

const MyFirstComponent = () => (
    <div>
        <MyTitle color="rebeccapurple" title="Hans Solo, A movie about stuff" />
        <MyTitle color='peru' title="Return of the Jedi"/>
        <MyTitle color='burlywood' title="A New Hope"/>
    </div>
)


ReactDOM.render(
  <MyFirstComponent />,
  document.getElementById("app")
);
