const inquirer = require('inquirer');
const fs = require('fs');

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
         type: 'list',
         name: 'question',
         message: 'What would you like to do?',
         choices: ['View All Employees', 'View All Employees by Department', 'View All Employees by Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager']
        }
    ])
};

questions()