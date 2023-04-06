import React, { Component} from "react";

let indexno;

class Todolist extends React.Component {

    constructor(e) {
        super(e);
        this.state = {
            line: false,
        }
    }

    render() {
        return (<>
            <div className="d-flex justify-contant-between">
                <li className="d-flex align-items-center">
                    <button className="me-3 bg-white text-primary  done-icon todo" onClick={() => { this.setState({ line: !this.state.line }) }}>
                    {this.state.line ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-regular fa-circle-check"></i>}
                    </button>
                    {this.state.line ? <del>{this.props.text}</del> : this.props.text}

                </li>
                <div className="d-flex align-items-center">
                    <button className="me-2 bg-white text-black  todo" onClick={() => this.props.onEdit(this.props.id)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="bg-white text-danger  todo" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { indexno = this.props.id }}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    <div className="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                 <h4>Have You Delet this Item?</h4>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { this.props.onSelect(indexno) }}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>)
    }
}

export default Todolist;