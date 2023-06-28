INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO salary (amount)
VALUES ("80000"),
       ("100000"),
       ("120000"),
       ("125000"),
       ("150000"),
       ("160000"),
       ("190000"),
       ("250000");


INSERT INTO roles (title, department, salary)
VALUES ("Sales Lead", 1, 2),
       ("Salesperson", 1, 1),
       ("Lead Engineer", 2, 5),
       ("Software Engineer", 2, 3),
       ("Account Manager", 3, 6),
       ("Accountant", 3, 4),
       ("Legal Team Lead", 4, 8),
       ("Lawyer", 4, 7);

       INSERT INTO manager (name)
VALUES ("John Doe"),
       ("Ashley Rodriguez"),
       ("Kunal Singh"),
       ("Sarah Lourd"),
       ("Null");

       INSERT INTO employees (first_name, last_name, roles, manager)
VALUES ("John", "Doe", 1, 5),
       ("Mike", "Chan", 2, 1),
       ("Ashley","Rodriguez", 3, 5),
       ("Kevin","Tupik", 4, 2),
       ("Kunal","Singh", 5, 5),
       ("Malia","Brown", 6, 3),
       ("Sarah","Lourd", 7, 5),
       ("Tom", "Allen", 8, 4);
      