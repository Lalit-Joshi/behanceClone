import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.scss';
import ListingCards from '../Global/listingCards';

import { allProjects } from '../../action/projects';

class Home extends Component{
  componentWillMount(){
    if(this.props.projectsData.length === 0){
      this.props.allProjects();
    }
  }
  render(){
    return(
      <div className="home">
        <div className="container">
          <div className="row">
            {this.props.projectsData.map(edge =>
              <div className="grid_5" key={edge.id}>
                <ListingCards data={edge} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
      projectsData: state.projects.projects
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    allProjects: () =>{
      dispatch(allProjects());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
