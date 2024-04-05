class Employee {
    constructor(
        public name: string,
        public salary: number,
        public position: string,
        public department: string,
        public email: string = "n/a",
        public age: number = -1
    ) {}
}

class Department {
    private employees: Employee[] = [];

    constructor(public name: string) {}

    public addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    public getAverageSalary(): number {
        const totalSalary = this.employees.reduce((acc, curr) => acc + curr.salary, 0);
        return totalSalary / this.employees.length;
    }

    public getEmployees(): Employee[] {
        return this.employees.sort((a, b) => b.salary - a.salary);
    }
}

class CompanyRoster {
    private departments: Map<string, Department> = new Map<string, Department>();

    public addEmployeeFromInput(input: string): void {
        const tokens = input.split(", ");
        const name = tokens[0];
        const salary = parseFloat(tokens[1]);
        const position = tokens[2];
        const department = tokens[3];
        const email = tokens.length > 4 ? tokens[4] : "n/a";
        const age = tokens.length > 5 ? parseInt(tokens[5]) : -1;

        const employee = new Employee(name, salary, position, department, email, age);
        if (!this.departments.has(department)) {
            this.departments.set(department, new Department(department));
        }
        this.departments.get(department)!.addEmployee(employee);
    }

    public printDepartmentWithHighestAverageSalary(): void {
        let highestAverageSalaryDepartment = Array.from(this.departments.values())
            .sort((a, b) => b.getAverageSalary() - a.getAverageSalary())[0];

        console.log(`Highest Average Salary: ${highestAverageSalaryDepartment.name}`);
        highestAverageSalaryDepartment.getEmployees().forEach(emp => {
            console.log(`${emp.name} ${emp.salary.toFixed(2)} ${emp.email} ${emp.age}`);
        });
    }
}

const companyRoster = new CompanyRoster();
companyRoster.addEmployeeFromInput("John Doe, 3500, Manager, Human Resources, john.doe@example.com, 30");
companyRoster.addEmployeeFromInput("Jane Smith, 3200, Technical Lead, IT, jane.smith@example.com, 28");
companyRoster.addEmployeeFromInput("Mary Johnson, 3050, Software Engineer, IT");
companyRoster.addEmployeeFromInput("James Brown, 3000, Benefits Coordinator, Human Resources, jb@example.com");
companyRoster.printDepartmentWithHighestAverageSalary();
