import React, { Component } from "react";
import { Menu, HedThumbs, Ad, SectionSubhead } from "@uxfed/ux-prototype-lib";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <Menu section="money" />
        <Wrapper>
          <SectionSubhead sectionColor="news" name="test" />
          <HedThumbs section="news" number="3" />
          <Ad />
          <HedThumbs section="news" number="5" />
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
  font-family: "Unify Sans", sans-serif;
`;

export default App;
