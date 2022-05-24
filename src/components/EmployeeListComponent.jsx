import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeListComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);

    }


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        });
    }

    editEmployee(id){
        this.props.history.push(`/update_employee/${id}`);
    }

    addEmployee(){
        this.props.history.push('/add_employee');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
               
                    <button className="btn btn-primary btn-sm mb-2" onClick={this.addEmployee}>Add Employee</button>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm" onClick={() => this.editEmployee(employee.id)}>Edit</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeListComponent;