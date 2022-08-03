import logo from "./logo.svg";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SvgSprite from "./utils/SvgSpriteLoader";
import { Layout } from "antd";
import { Container } from "./components/common";
import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Landing from "./containers/Landing";
import "./App.less";

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";

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
                <Route exact path="/" component={Landing} />
              </Switch>
            </Router>
          </Container>
        </Content>
      <Footer />
    </>
  );
}

export default App;
