import logo from "./logo.svg";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SvgSprite from "./utils/SvgSpriteLoader";
import { Layout } from "antd";
import { Container } from "./components/common";
import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import ProjectDetails from "./containers/ProjectDetails";
import "./App.less";

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";
import CustomizeCBD from "./containers/CustomizeCBDs";
import ConfigureLock from "./containers/ConfigureLock";
import ReviewCBD from "./containers/ReviewCBDs";
import CreatedBCD from "./containers/CreatedBCD";

const { Content } = Layout;

function App() {
  return (
    <>
      <SvgSprite url={svgFile} />
      <NavigationBar />
      <Content className="main-content">
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={ProjectDetails} />
              <Route
                exact
                path="/configure-programmable"
                component={ConfigureLock}
              />
              <Route exact path="/customize-cbd" component={CustomizeCBD} />
              <Route exact path="/review-cbd" component={ReviewCBD} />
              <Route exact path="/created-cbd" component={CreatedBCD} />
            </Switch>
          </Router>
        </Container>
      </Content>
      <Footer />
    </>
  );
}

export default App;
