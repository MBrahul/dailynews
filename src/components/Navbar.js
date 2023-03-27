import React, { Component} from 'react'
import {
    Link
} from "react-router-dom";



export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          category:"General"
        };
      }
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} fixed-top`} >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">DailyNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://localhost:3000" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       {this.state.category}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/general" onClick={()=>this.setState({category:"General"})}>General</Link></li>
                                        <li><Link className="dropdown-item" to="/business" onClick={()=>this.setState({category:"Business"})} >Business</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment" onClick={()=>this.setState({category:"Entertainment"})}>Entertainment</Link></li>

                                       
                                        <li><Link className="dropdown-item" to="/health" onClick={()=>this.setState({category:"Health"})}>Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science" onClick={()=>this.setState({category:"Science"})}>Science</Link></li>

                                        <li><Link className="dropdown-item" to="/sports" onClick={()=>this.setState({category:"Sports"})}>Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology" onClick={()=>this.setState({category:"Technology"})}>Technology</Link></li>
                                    </ul>
                                </li>

                            </ul>
                             <div className="form-check form-switch" style={this.props.checkBoxStyle}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.props.handleMood} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > Dark-Mood</label>
                        </div>

                        </div>
                    
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar