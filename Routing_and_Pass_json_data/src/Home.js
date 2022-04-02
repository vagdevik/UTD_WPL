import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Videos from './VideosList';



class Home extends Component {
    
      state = {
        availableOnly: false,
        videos:[], 
        searchTerm:''  
      }

      componentDidMount(){

        fetch('videos.json', {
          headers : { 
            'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( (data) => {
            this.setState({ videos: data })
        })
        .catch(console.log)
      }

      handleAvailChange(availableOnly) {
        console.log(" ^^^ "+!availableOnly);
        console.log("**: "+this.state.availableOnly+" ## "+!this.state.availableOnly);
        this.setState({availableOnly: !this.state.availableOnly})
      }

      

      render () {
         return (
          <div>
            <input type="text" placeholder="Movie title search" onChange={(e)=>{this.setState({searchTerm:(e.target.value)})}}/>
            <input type="checkbox" onChange={(e)=>{this.setState({availableOnly: !this.state.availableOnly})}}/>
              Only show available videos
            <Videos videosData={this.state.videos} availableOnly={this.state.availableOnly} searchTerm={this.state.searchTerm}/>
          </div> 
        );
 
      }
}

export default Home;