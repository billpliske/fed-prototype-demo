import React, { Component } from "react";
import { Menu, HedThumbs } from "@uxfed/ux-prototype-lib";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <Menu section="money" />
        <Wrapper>
          <HedThumbs section="news" number="4" />
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
