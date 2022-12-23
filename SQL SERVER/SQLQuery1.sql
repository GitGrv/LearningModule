CREATE TABLE employee_info (
	empID INTEGER PRIMARY KEY,
	empName VARCHAR(20) NOT NULL,
	empSalary DECIMAL(10,2) NOT NULL,
	job VARCHAR(20),
	phone INT UNIQUE,
	deptId INTEGER NOT NULL
);

CREATE TABLE department_info(
	deptId INT NOT NULL,
	deptname VARCHAR(20) NOT NULL,
	deptLocation VARCHAR(50)
);

/*
ALTER TABLE employee_info DROP COLUMN phone;
ALTER TABLE employee_info ADD phone VARCHAR(255) UNIQUE;
delete from employee_info where empID=02;
*/

INSERT INTO employee_info VALUES(01,'Gaurav',40000.00,'Software Developer',1001,'9760824519');
INSERT INTO employee_info VALUES(02,'Jhon',20000.00,'System Designer',1002,'0987654321');
INSERT INTO employee_info (empName,empSalary,deptId,empID) VALUES('Sumit','30000',0987,06);


SELECT * from employee_info;
SELECT empName,job FROM employee_info; 
SELECT empName FROM employee_info WHERE empID=06;

UPDATE employee_info SET empSalary=empSalary+1000;
UPDATE employee_info SET job = 'tester' where empName='sumit';
UPDATE employee_info SET phone='234567823',empName='Harneet' where empID=06;

DELETE FROM employee_info where empID=6;
DELETE FROM employee_info;

SELECT * FROM employee_info ORDER BY empName DESC;
SELECT * FROM employee_info ORDER BY phone;
SELECT * FROM employee_info ORDER BY empID DESC;

SELECT empName,job FROM employee_info WHERE empID=1;
UPDATE employee_info SET empSalary=empSalary+2000 WHERE empName='gaurav';
DELETE FROM employee_info WHERE empID=6;

SELECT SUM(empSalary) FROM employee_info;
SELECT AVG(empSalary) FROM employee_info;
SELECT COUNT(empName) FROM employee_info;
SELECT MIN(empSalary) FROM employee_info;
SELECT MAX(empSalary) FROM employee_info; /* return max salary */
SELECT * from employee_info where empSalary= (Select max(empSalary) from employee_info); /* max salary employee info */
select max(empSalary) from employee_info where empSalary<(select max(empSalary) from employee_info); /* return 2nd highest salary */
select * from employee_info where empSalary = (select max(empSalary) from employee_info where empSalary<(select max(empSalary) from employee_info)); /* return 2nd highest employee salary info */


SELECT ABS(-100);
SELECT CEILING(23.10);
SELECT FLOOR(22.94);
SELECT SIGN(23),SIGN(-20),SIGN(0);
SELECT SQUARE(9);
SELECT SQRT(81);
SELECT PI();
SELECT SIN(90),COS(30),TAN(45);
SELECT EXP(2);
SELECT SQRT(empSalary) from employee_info;
SELECT empName,SQUARE(empID) from employee_info;


SELECT empName,LEN(empName) from employee_info;
SELECT empName,UPPER(empName) from employee_info;
SELECT empName,LOWER(empName) from employee_info;
SELECT LTRIM('       hello'),RTRIM('hello    ');
SELECT empName,SUBSTRING(empName,3,5) FROM employee_info;
SELECT REPLACE(empName,'e','x') FROM employee_info;
SELECT REPLICATE ('hello',3);


SELECT * FROM employee_info WHERE phone='9760824519' AND empName='gaurav';
SELECT * from employee_info WHERE phone='9760824519' OR empName='harneet';
SELECT * FROM employee_info WHERE NOT empName = 'harneet';


SELECT GETDATE() as today,CURRENT_TIMESTAMP as today,SYSDATETIME() as today;
SELECT DATENAME(MONTH,GETDATE()) AS 'MONTH', DATENAME(DAY,CURRENT_TIMESTAMP) as 'day';
SELECT DATEDIFF(YEAR,'NOVEMBER 25 1999', CURRENT_TIMESTAMP) as 'age in years';
SELECT DATEDIFF(MONTH,'NOVEMBER 25 1999', 'NOVEMBER 25 2022') as 'age in months';
SELECT DATEADD(YEAR, 100, CURRENT_TIMESTAMP) as '100 year from now';
SELECT DATEADD(MONTH, 100, CURRENT_TIMESTAMP) as '100 month from now';


insert into employee_info values(3,'scott',25000.00,'AI ML', 1001,'8756473829');
SELECT empName FROM employee_info GROUP BY empName;
SELECT empName,SUM(empSalary) FROM employee_info GROUP BY empName;
SELECT * from employee_info;	
SELECT deptID,MIN(empSalary) FROM employee_info GROUP BY deptId;
SELECT deptId,AVG(empSalary) FROM employee_info GROUP BY deptId;


SELECT deptID,MAX(empSalary) FROM employee_info GROUP BY deptId HAVING deptId=1001;
SELECT deptID,MIN(empSalary) FROM employee_info GROUP BY deptId HAVING deptId=1001;
SELECT deptID,AVG(empSalary) FROM employee_info GROUP BY deptId HAVING deptId=1001;
SELECT deptID,COUNT(empName) as 'names' FROM employee_info GROUP BY deptId HAVING deptId=1001; 
SELECT deptID,SUM(empSalary) FROM employee_info GROUP BY deptId HAVING SUM(empSalary) between 20000 AND 40000;

SELECT TOP 2 empName,empSalary,empID FROM employee_info ORDER BY empID desc;
SELECT TOP 3 empSalary,empName FROM employee_info ORDER BY empSalary desc;
SELECT TOP(3) empSalary,empName FROM employee_info ORDER BY empSalary;

USE Sample_DB;
SELECT * INTO employee_details FROM employee_DB.DBO.employee_info;
select * from employee_details;
USE employee_DB;



ALTER TABLE employee_info ADD empAddress VARCHAR(100);
UPDATE employee_info SET empAddress='Bageshwar' WHERE empID=1;
ALTER TABLE employee_info ADD Nationality VARCHAR(50) default 'indian' NOT NULL;
ALTER TABLE employee_info ADD projectID INTEGER   null;
ALTER TABLE employee_info ADD dummy1 varchar(50),dummy2 decimal(20,2),dummy3 integer;

ALTER TABLE employee_info DROP COLUMN dummy3;
ALTER TABLE employee_info DROP COLUMN dummy1,dummy2;
USE Sample_DB;
select * from employee_details;
DROP TABLE employee_details;
USE employee_DB;

select * from employee_info;
ALTER TABLE employee_info ALTER COLUMN projectID INTEGER;
update employee_info set projectID=null where empID=1;
ALTER TABLE employee_info ALTER COLUMN projectID DECIMAL(10,2);
update employee_info set projectID=1111.111 where empID=1;

SELECT deptId AS 'DEPARTMENT ID' FROM employee_info;
SELECT empName AS 'Employee Names', Nationality AS 'Employee Nationality' FROM employee_info;





CREATE DATABASE COMPANY_DB;
USE COMPANY_DB;

create table employee(
emp_id int not null,
emp_name varchar(50),
emp_salary decimal(10,2),
emp_deptid char(4)
);

select * from employee;

insert into employee values (1111,'steve',35000.00,'D1');
insert into employee values (1112,'adam',28000.00,'D2');
insert into employee values (1113,'john',50000.00,'D3');
insert into employee values (1114,'mike',45000.00,'D4');
insert into employee values (1115,'peter',60000.00,'D5');

insert into employee values (1115,'peter',60000.00,'D5');
delete from employee where emp_id=1115;
alter table employee add constraint myuniqueconstraint unique(emp_deptid);
alter table employee drop constraint myuniqueconstraint;
alter table employee alter column emp_deptid char(5) not null;


create table department(dept_id char(5) unique not null, dept_name varchar(50), dept_location varchar(50));
select * from department;

insert into department values('D1', 'development', 'california');
insert into department values('D2', 'marketing', 'mumbai');
insert into department values('D3', 'accounts', 'new york');
insert into department values('D4', 'management', 'sydney');
insert into department values('D6', 'security', 'japan');


select * from employee INNER JOIN department on employee.emp_deptid = department.dept_id;
select e.emp_id,e.emp_name,e.emp_salary,e.emp_deptid  from employee e inner join department d on e.emp_deptid=d.dept_id;

select * from employee left outer join department on employee.emp_deptid=department.dept_id;
select * from employee right outer join department on employee.emp_deptid=department.dept_id;

select * from employee full outer join department on employee.emp_deptid=department.dept_id;

select * from employee e left outer join department d on e.emp_deptid=d.dept_id;
select * from employee e right outer join department d on e.emp_deptid=d.dept_id;
use COMPANY_DB;

select * from employee full outer join department on employee.emp_deptid=department.dept_id;
select * from department full outer join employee on department.dept_id=employee.emp_deptid;

select emp_name,emp_salary from employee where emp_salary >(select emp_salary from employee where emp_name='mike');
select * from employee;
alter table employee drop constraint myuniqueconstraint;
update employee set emp_deptid='D2' where emp_name='mike'; 
select emp_name,emp_salary from employee where emp_salary > (select emp_salary from employee where emp_name='adam') AND emp_deptid = (select emp_deptid from employee where emp_name='adam'); 
select * from employee inner join department on employee.emp_deptid=department.dept_id AND department.dept_location='new york';

