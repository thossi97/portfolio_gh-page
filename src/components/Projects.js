import React from 'react';
import ProjectCard from './ProjectCard';
import axios from 'axios';

class Projects extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            projects: [],
            isFetching: true
          }
    }
    componentDidMount(){
        axios.get('https://thorsteinn-portfolio.herokuapp.com/projects/')
        .then(res => {
            const projects = res.data.results;
            console.log(projects)
            this.setState({ projects: projects,
                            isFetching: true });
        })
        .catch(err => {
            console.error('Error', err)
          });
          
    }




    render(){

        return (
           
            <div className="container-fluid" id="projects">
                <h2 className="text-center mb-3" >Verkefni</h2>
                <div className="row">  
                        {
                            this.state.isFetching ? <h4 >Loading...</h4>
                            :
                            this.state.projects.map(project => 
                                <div className="col-sm-4 mb-3">
                                    <ProjectCard project={project}/> 
                                </div>)
                        }    
                    </div>
                    
                </div>
           
        )
    }
}

export default Projects