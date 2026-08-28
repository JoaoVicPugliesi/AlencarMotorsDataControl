function find_employee (id, employees) {
    const employee = employees.find((e) => Number(e.id) == Number(id));
    if(!employee) return;
    return employee;
}

export default find_employee;