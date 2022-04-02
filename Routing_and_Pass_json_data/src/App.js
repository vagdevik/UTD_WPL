import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Videos from './VideosList';
import Home from './Home';
import VideoDetails from './VideoDetails';


class App extends Component {

      render () {
         return (
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" element={<Home />} /> 
                <Route path="/videos/:id" element={<VideoDetails />} /> 
              </Switch>
            </div>
          </Router>
        );
 
      }
}

export default App;