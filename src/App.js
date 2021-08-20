import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/Main";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Navbar />
        </Header>
        <MainContent>
        <Switch>
            <Route exact path={["/", "/home"]} component={Main} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Redirect to="/home" />
         </Switch>
        </MainContent>
        <Footer><p>Copyright @{new Date().getFullYear()} Movie App</p></Footer>
      </Container>
    </BrowserRouter>
  );
};

export default App;
const Container = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 0.1fr 1.5fr 0.1fr;
grid-template-areas:
  "nav nav nav nav"
  "main main main main"
  "footer footer footer footer";
text-align: center;
transition: all 0.25s ease-in-out;
@media (max-width: 550px) {
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 3.4fr 0.4fr;
  grid-template-areas:
    "nav"
    "main"
    "footer";
}
color: white;
`;
const Header = styled.nav`
background: #3a3a55;
grid-area: nav;
background-image: linear-gradient(to right, #001e42 0%, #a71d8e);
`;

const MainContent = styled.main`
background: #1f2128;
color: white;
grid-area: main;
`;

const Footer = styled.footer`
background: #ff9637;
grid-area: footer;
`;
