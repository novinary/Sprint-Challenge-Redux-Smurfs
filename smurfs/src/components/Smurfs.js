import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions'
import { selectSmurf } from '../actions'

class Smurfs extends Component {
    componentDidMount() {
        this.props.fetchSmurf();
    }

    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul>
                    {this.props.smurfs.map((smurf) => {
                        return (
                         <div 
                                className={smurf.selected ? "selected-smurf smurf" : "smurf"}
                                onClick = {() => 
                                this.props.selectSmurf(smurf.id) }
                                key={smurf.name}
                            >
                                <h3>{smurf.name}</h3>
                                <strong>{smurf.height} tall</strong>
                                <p>{smurf.age} smurf years old</p>                
                            </div >  
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStatetoProps, { fetchSmurf, selectSmurf })(Smurfs);