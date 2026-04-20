let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    
    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all the fields");
        return;
    }

    let employee = {  
        name: name,
        id: empId,
        salary: salary,
        department: dept,
    };


    employees.push(employee);
    alert("Employee added successfully");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees added yet</h3>";
        return;
    }
    let output = "<h3>Employee Details</h3>";
    employees.forEach((emp) => {
        output += `<p><strong>Name:</strong> ${emp.name}</p>`;
        output += `<p><strong>Employee ID:</strong> ${emp.id}</p>`;
        output += `<p><strong>Salary:</strong> ₹${emp.salary.toLocaleString()}</p>`;
        output += `<p><strong>Department:</strong> ${emp.department}</p>`;
        output += `<hr>`;
    });
    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter((emp) => emp.salary > 50000);
    if (filtered.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees with salary > 50,000</h3>";
        return;
    }
    let output = "<h3>Employees with salary greater than 50,000</h3>";
    filtered.forEach((emp) => {
        output += `<p><strong>Name:</strong> ${emp.name}</p>`;
        output += `<p><strong>Employee ID:</strong> ${emp.id}</p>`;
        output += `<p><strong>Salary:</strong> ₹${emp.salary.toLocaleString()}</p>`;
        output += `<p><strong>Department:</strong> ${emp.department}</p>`;
        output += `<hr>`;
    });
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    if (employees.length === 0) {
        document.getElementById("total").innerHTML = "<h3>No employees</h3>";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("total").innerHTML = `<h3>Total Salary Payout: ₹${total.toLocaleString()}</h3>`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees Available</h3>";
        return;  // Fixed: Added return
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let average = total / employees.length;
    document.getElementById("output").innerHTML = `<h3>Average Salary: ₹${average.toLocaleString('en-IN', {maximumFractionDigits: 0})}</h3>`;
}

function countDepartments() {
    let departments = prompt("Enter the department Name: ");
    if (!departments) return;
    let count = employees.filter((emp) => 
        emp.department.toLowerCase() === departments.toLowerCase()  // Fixed: Case insensitive
    ).length;
    document.getElementById("output").innerHTML = `<h3>Number of Employees in <em>${departments}</em> is <strong>${count}</strong></h3>`;
}
