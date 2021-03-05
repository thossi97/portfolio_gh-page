import React from 'react'
import '../css/projectcards.css'

class ProjectCard extends React.Component  {
  

    render () {
        let a = this.props.project.image
        let demo; 
        if (this.props.project.demo){
            demo = <a href={this.props.project.url} className="btn btn-primary">Demo</a>
        } 
        else {
            demo = <a href={this.props.project.git} className="btn btn-secondary  disabled">Demo</a>
        }
        return(
            
                <div className="card">          
                    <img className="card-img-top"src={this.props.project.image} alt="Mynd"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.project.name}</h5>
                        <p className="card-text">{this.props.project.description}</p>
                        <a href={this.props.project.git} className="btn btn-primary mr-2 ">Git</a>

                        {demo}
                    </div>
                </div>
      
        );
    }
}

export default ProjectCard