import React from 'react';
import PortfolioSlide from './components/Portfolio'
import ExperienceSlide from './components/Experience'
import Helmet from 'react-helmet';
import Navbar from 'react-bootstrap/Navbar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      projects: []
    };
  }

  componentDidMount() {
    fetch("http://192.168.68.111:5000/api/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
            <Helmet bodyAttributes={{style: 'background-color : #EAECEF'}}/>
            
  <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">
      <h1>DAVID GOLDING</h1>
    </Navbar.Brand>
  </Navbar>
            <ExperienceSlide/>
            <PortfolioSlide projects={this.state.projects}/>
            
          </div>
      );
    }
  }
}

export default App;
//EAECEF
//636179