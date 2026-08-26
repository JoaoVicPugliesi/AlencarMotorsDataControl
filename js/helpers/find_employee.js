function find_employee (id, employees) {
    const employee = employees.find((e) => e.id == id);
    if(!employee) return;
    return employee;
}

export default find_employee;