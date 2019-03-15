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

// mapStateToProps is called everytime the store state changes
// it is used for selecting the part of the data from the store 
// that the connected component needs
const mapStatetoProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

// The connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it 
// needs from the store, and the functions it can use to dispatch actions to the store.
// It does not modify the component class passed to it; instead, it returns a new, 
// connected component class that wraps the component you passed in.
export default connect(mapStatetoProps, { fetchSmurf, selectSmurf })(Smurfs);

// mapStateToProps and mapDispatchToProps deals with Redux store’s state and dispatch,
// state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps 
// functions as the first argument.