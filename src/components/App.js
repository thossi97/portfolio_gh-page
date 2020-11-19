import React from 'react';
import Navigation from './Navigation';
import Projects from './Projects'
import About from './About'
import '../css/common.css'


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showProjects: true,
      showCv: false
    }

    
    //this.showProjects = this.showProjects.bind(this);
    //this.showCv = this.showCv.bind(this);
  }
  
  /*showProjects() {
    this.setState({ showProjects: true,
                    showCv: false });

  }
  showCv() {
    this.setState({ showCv: true,
                    showProjects: false });

  }
  */
  render (){
    //const { showProjects, showCv } = this.state;
    return (
      
    <div className="app">
      <div className="navigtion">
      <Navigation />
      </div>
      
      <About/>
      <div className="container mt-5">
        <Projects/>
      </div>
     {/* 
      <Navigation showProjects={this.showProjects} 
              showCv={this.showCv}
     <div className="container">
        {showProjects && <Projects/>}
        {showCv && <Cv/>}
      </div>
    
    </div>
    <div className="container">
      <Router>
        <Switch>
          <Route path="/cv">
            <Cv/>
          </Route>
          <Route path="/">
            <Projects/>
          </Route>
        </Switch>
      </Router>*/}
    </div>
  


    )
  }
}

export default App;
