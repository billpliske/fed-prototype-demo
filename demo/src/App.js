import React, { Component } from "react";
import {
  Menu,
  HedThumbs,
  Ad,
  SectionSubhead,
  SectionLead,
  Taboola,
  Footer,
  PhotoCaption,
  ShareFeedback
} from "@uxfed/ux-prototype-lib";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <Menu section="sports" />
        <SectionSubhead sectionColor="news" name="News Headlines" />
        <SectionLead />
        <Wrapper>
          <HedThumbs section="news" number="3" />
          <Ad />
          <HedThumbs section="news" number="5" />
          <PhotoCaption />
          <ShareFeedback />
          <Taboola />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

const Wrapper = styled.div`
  padding: 20px;
  font-family: "Unify Sans", sans-serif;
`;

export default App;
