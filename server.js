
const inquirer = require('inquirer');


// Import and require mysql2
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the books_db database.`)
);


function serve() {
  inquirer
    .prompt([

      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View All Employees', 'Add Employee', 'View All Role', 'Add Role', 'View All Department', 'Add Department', 'Quit'],
      },

    ])
    .then((response) => {
      if (response.action === 'View All Department') {
        db.query('SELECT * FROM department;', function (err, results) {
          console.table(results);
          serve();
        })
      } else if (response.action === 'View All Employees') {
        db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.name AS Department, salary.amount AS Salary, manager.name AS Manager FROM employees JOIN roles ON employees.roles=roles.id JOIN department ON roles.department=department.id JOIN salary ON roles.salary=salary.id JOIN manager ON employees.manager=manager.id;', function (err, results) {
          console.table(results);
          serve();
        })
      } else if (response.action === 'View All Role') {
        db.query('SELECT roles.title, department.name AS Department, salary.amount AS Salary FROM roles JOIN department ON roles.department=department.id JOIN salary ON roles.salary=salary.id;', function (err, results) {
          console.table(results);
          serve();
        })
      } else if (response.action === 'Add Employee') {
        inquirer.prompt([
          {
            type: 'input',
            message: 'please specify first_name',
            name: 'fn',
          },
          {
            type: 'input',
            message: 'please specify last_name',
            name: 'ln',
          },
          {
            type: 'input',
            message: 'please specify role',
            name: 'role',
          },
          {
            type: 'input',
            message: 'please specify manager',
            name: 'manager',
          },
        ])
          .then((response) => {
            db.query('INSERT INTO employees (first_name, last_name, roles, manager) VALUES("'+`${response.fn}`+'","'+`${response.ln}`+'","'+`${response.role}`+'","'+`${response.manager}`+'");', function (err, employees) {
              console.table(employees);
              serve();
            })
          })
      } else if (response.action === 'Add Role') {
        inquirer.prompt([
          {
            type: 'input',
            message: 'what is role title?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'what is role department',
            name: 'department',
          },
          {
            type: 'input',
            message: 'what is role salary?',
            name: 'salary',
          },
        ])
          .then((response) => {
            db.query('INSERT INTO roles VALUES (response.role,response.department,response.salary);', function (err, results) {
              console.table(results);
              serve();
            })
          })} else if (response.action === 'Add Department') {
            db.query('SELECT roles.title, department.name AS Department, salary.amount AS Salary FROM roles JOIN department ON roles.department=department.id JOIN salary ON roles.salary=salary.id;', function (err, results) {
              console.table(results);
              serve();
            })
          } else {
            db.query('SELECT roles.title, department.name AS Department, salary.amount AS Salary FROM roles JOIN department ON roles.department=department.id JOIN salary ON roles.salary=salary.id;', function (err, results) {
              console.table(results);
              serve();
            })
          }
      })
    

}

serve();

