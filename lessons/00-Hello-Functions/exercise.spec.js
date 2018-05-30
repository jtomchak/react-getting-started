import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";

import { Title, MyFirstComponent } from "./solution";

describe("Title Component", () => {
  let props;
  let mountedTitle;
  const title = () => {
    if (!mountedTitle) {
      mountedTitle = mount(<Title {...props} />);
    }
    return mountedTitle;
  };

  beforeEach(() => {
    props = {
      color: undefined,
      title: undefined
    };
    mountedTitle = undefined;
  });

  //Component Tests Here
  it("will always renders a div", () => {
    const divs = title().find("div");
    expect(divs.length).to.be.gt(0);
  });
});
