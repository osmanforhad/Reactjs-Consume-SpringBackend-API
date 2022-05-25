import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/";

class EmployeeService {

    getEmployees() {
        return axios.get(API_URL + "employees");
    }

    addEmployee(employee) {
        return axios.post(API_URL + "create_employee", employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(API_URL + "employee/" + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(API_URL + "employee/" + employeeId, employee);
    }

}

export default new EmployeeService();