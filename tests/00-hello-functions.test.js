import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import { Title, MyFirstComponent } from "./solution";

describe("<Title />", () => {
    let props;
    let wrapper;
    const title = () => {
      return shallow(<Title {...props} />)
    };

    //reset shallow wrapper and props before each test
  beforeEach(() => {
    props = {
      color: undefined,
      title: undefined
    };
    wrapper = undefined;
  });

  //Component Tests Here
  it("renders without exploding", () => {
      wrapper = title();
      expect(wrapper, "Component does not return JSX markup correctly. Check your function returns only a single element. Remember it can have as many child elements as you need.").to.have.length(1);
  })

  it("displays the correct title props", () => {
      props.title = 'Hello World';
      wrapper = title();
      expect(wrapper.find('h1').text(), "Prop title value passed in, does not match rendered text of h1 element").to.equal('Hello World');
  })

  it("displays the correct color props", () => {
      props.color = 'red';
      wrapper = title();
      expect(wrapper.find('h1').prop('style'), "Prop color value passed in, does not match rendered color style of h1 element").to.eql({'color': 'red'});
  })
  
});

describe("<MyFirstComponent />", () => {
  let wrapper;
  const myFirstComponent = () => shallow(<MyFirstComponent />)

  beforeEach(() => {
    wrapper = undefined;
  })

  it("renders without exploding", () => {
    wrapper = myFirstComponent();
    expect(wrapper, "Component does not return JSX markup correctly. Check your function returns only a single element. Remember it can have as many child elements as you need.").to.have.length(1);
  });

  it("renders 3 <Title /> components", () => {
    wrapper = myFirstComponent();
    expect(wrapper.find(Title), "Should have 3 separate 'Title' components rendered and returned wrapped inside a div tag").to.have.length(3);
  })
})
