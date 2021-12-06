import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Container from './components/layout/Container';

import Home from './components/pages/Home';
import Edit from './components/pages/Edit';
import Create from './components/pages/Create';
import Search from './components/pages/Search';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
      <Switch>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/edit/:id" component={Edit}>
          <Edit />
        </Route>
      </Switch>
      </Container>
    </Router>
  );
}

export default App;
