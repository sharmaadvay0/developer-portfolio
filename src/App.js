import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "animate.css/animate.css";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#3E78B2",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
