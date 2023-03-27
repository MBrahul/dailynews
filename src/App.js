// this project uses class based components *********************





import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state ={
     mode:'light',

     checkBoxStyle:{
      color:'black'
     },
     
    newsStyle:{
       
    },

    newItemStyle:{

    },
    progress:10
  }

handleMood =()=>{
  if(this.state.mode==='dark'){
    this.setState({
      mode:'light',
     
      checkBoxStyle:{
      color:'black'
      }
    });
    document.body.style.backgroundColor = 'white'
  }
  else{
    this.setState({
      mode:'dark',
     
      checkBoxStyle:{
        color:'white'
        }
    });
    document.body.style.backgroundColor = 'grey';
  }
}
setProgress =(progress)=>{
  this.setState({
    progress:progress
  })
}


  render() {
    return (
      <div>
        <Router>
        <Navbar mode={this.state.mode} handleMood={this.handleMood} checkBoxStyle={this.state.checkBoxStyle} />
        <LoadingBar
        color='red'
        progress={this.state.progress}
        
      />

       <Routes>
       
       <Route exact path='/' element={ <News setProgress ={this.setProgress} key={'general'}  mode={this.state.mode}/>}/>
       <Route exact path='/business' element={ <News setProgress ={this.setProgress} key={ 'business'} category = 'business'  mode={this.state.mode}/>}/>
       <Route exact path='/sports' element={ <News setProgress ={this.setProgress} key={'sports'} category = 'sports'  mode={this.state.mode}/>}/>
       <Route exact path='/health' element={ <News setProgress ={this.setProgress} key={'health'} category = 'health'  mode={this.state.mode}/>}/>
       <Route exact path='/science' element={ <News setProgress ={this.setProgress} key={'science'} category = 'science'  mode={this.state.mode} />}/>
       <Route exact path='/technology' element={ <News setProgress ={this.setProgress} key={'technology' } category = 'technology'  mode={this.state.mode}/>}/>
       <Route exact path='/general' element={ <News setProgress ={this.setProgress} key={'general'} category = 'general'  mode={this.state.mode} />}/>
       <Route exact path='/entertainment' element={ <News setProgress ={this.setProgress} key={'entertainment'} category = 'general'  mode={this.state.mode} />}/>
       

       </Routes>


        </Router>
        
      </div>
    )
  }
}

