import React, {Component} from 'react';
import Todolist from './Todolist';


let indexno;

class Home extends React.Component {
    constructor(e) {
        super(e);
        this.state = {
            value: "",
            todolist: [],
            editmode: false,
        }

        this.todo = this.todo.bind(this);
        this.list = this.list.bind(this);
        this.deletitem = this.deletitem.bind(this);
        this.editdata = this.editdata.bind(this);
        this.canceldata = this.canceldata.bind(this);
        this.donetodo = this.donetodo.bind(this);
        
    }

    todo(e) {
        this.setState({ value: e.target.value });
    }
    list() {
        if (this.state.value != "") {
            if (this.state.editmode) {
                const val = this.state.todolist.map((value, i) => {
                    if (i == indexno) {
                        return this.state.value;
                    } else {
                        return value;
                    }
                })
                this.setState({ todolist: val})
                this.setState({ editmode: false });
            } else {
                this.setState({
                    todolist: [...this.state.todolist, this.state.value],
                    }
                );
            }
            this.setState({ value: "" });
        }
    }
    deletitem(id) {
        const val = this.state.todolist.filter((inpuval, index) => {
                return index !== id;
            })
        
        this.setState({todolist: val})
    }

    editdata(id) {
        const val =  this.state.todolist.filter((inpuval, index) => {
                if (index == id) {
                    indexno = index;
                }
                return index == id;
            })
        
        this.setState({value: val})
        this.setState({ editmode: true });
    }


    donetodo() {
        return "";
    }

    canceldata() {
        this.setState({ value: "" });
        this.setState({ editmode: false });
    }

    render() {

        return (
            <section>
                <div className="screen">
                    <h2 className="text-center">ToDo List</h2>
                    <div className="w-100 py-4 position-relative">
                        <input type="text" placeholder="Type ToDo List" className="todoinput" onChange={this.todo} value={this.state.value} />
                        {this.state.editmode ? (<button className='btn cancel' onClick={this.canceldata}>Cancel</button>) : ''}
                        <button className='ms-3 plus' onClick={this.list}><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div className="w-100">
                        <ol className='p-0'>
                        {this.state.todolist.length > 0 ? (this.state.todolist.map((inputval, index) => {
                                return <Todolist
                                    text={inputval}
                                    id={index}
                                    key={index}
                                    onSelect={this.deletitem}
                                    onEdit={this.editdata}
                                    onDone={this.donetodo}
                                />;
                            })) : (<h6 className='text-center'>No Item Found</h6>)}
                        </ol>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;