import React from 'react'
import '../css/projectcards.css'

class ProjectCard extends React.Component  {
  

    render () {
        return(
                <div className="card">          
                    <img className="card-img-top"src={this.props.project.image} alt="Mynd"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.project.name}</h5>
                        <p className="card-text">{this.props.project.description}</p>
                        <a href="#" className="btn btn-primary mr-2 ">Code?</a>
                        <a href="#" className="btn btn-primary">Demo?</a>
                    </div>
                </div>
      
        );
    }
}

export default ProjectCard