function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            if (priority === 'high') {
                this.tasks.unshift({
                    id,
                    taskName,
                    priority
                })

            } else {
                this.tasks.push({
                    id,
                    taskName,
                    priority
                })
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask() {
            let highPriorityTask = this.tasks.shift();
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            return highPriorityTask
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
           
            let output = ''
            output += `Tasks, that need to be completed:`;
            if (this.tasks.length > 0) {
                output += '\n'
                output += this.tasks.map(task =>`${task.id}: ${task.taskName} - ${task.priority}`).join('\n')
            }
            return output
        }


    }


    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.experience = experience
            this.baseSalary += bonus
        }

        learn(years) {
            return experience + years
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += bonus
            this.experience = experience + 5
            this.priority = this.priority
        }
      changeTaskPriority(taskId) {
     this.tasks =   this.tasks.map( (task) => {
if(task.priority === 'low') {
    task.priority = 'high'
}else if (task.priority === 'high') {
    task.priority = 'low'
}
return task.priority
     });
      
       
    }
    
}
return {
    Developer,
    Junior,
    Senior
}
}






let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);