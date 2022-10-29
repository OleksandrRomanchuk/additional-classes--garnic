import { listOfStudents, homeworkResults } from "./data.js";

//------------------------------------------------
//---------------------- bind ----------------------
//------------------------------------------------
// const inventory = {
//    items: ['Knife', 'Gas mask'],
//    add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//    },
//    remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//    },
// };

// const invokeInventoryAction = function (itemName, action) {
//    console.log(`Invoking action on ${itemName}`);
//    action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//------------------------------------------------
//---------------------- call ----------------------
//------------------------------------------------
// const inventory = {
//    items: ['Knife', 'Gas mask'],
//    add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//    },
//    remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//    },
// };

// const invokeInventoryAction = function (itemName, action) {
//    console.log(`Invoking action on ${itemName}`);
//    console.log(this);
//    action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// // console.log(inventory.items); // ['Knife', 'Medkit']

//------------------------------------------------
//---------------------- apply ----------------------
//------------------------------------------------
// const inventory = {
//    items: ['Knife', 'Gas mask'],
//    add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//    },
//    remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//    },
// };

// const invokeInventoryAction = function (itemName, action) {
//    console.log(`Invoking action on ${itemName}`);
//    action.apply(this, [itemName]);
// };

// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.apply(inventory, ['Gas mask', inventory.remove]);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//------------------------------------------------
//---------------------- functions-constructors ----------------------
//------------------------------------------------
// const Student = function (name, email) {
//   const hwResults = [];

//   this.getName = function () {
//     return name;
//   };

//   this.getEmail = function () {
//     return email;
//   };

//   this.getHWResults = function () {
//     return hwResults;
//   };

//   this.addHWResult = function (topic, success) {
//     const result = { topic, success };
//     hwResults.push(result);
//   };
// };

// const studentAnastasia = new Student("Anastasia", "belkina23@mail.com");

// console.log(studentAnastasia.getName());
// console.log(studentAnastasia.getEmail());
// console.log(studentAnastasia.getHWResults());
// console.log(studentAnastasia.addHWResult("HTML/CSS", true));
// console.log(studentAnastasia.getHWResults());

// const FrontendLab = function (students, failedLimit) {
//   let failedHomeworksLimit = 0;
//   const studentList = [];

//   const newStudents = students.map(
//     ({ name, email }) => new Student(name, email)
//   );

//   this.printStudentsList = function () {
//     newStudents.map((student) => {
//       console.log(
//         "name: ",
//         student.getName(),
//         "email: ",
//         student.getEmail(),
//         student.getHWResults()
//       );
//     });
//   };

//   this.addHomeworkresults = function (studentsResult) {
//     newStudents.forEach((student) => {
//       studentsResult.results.forEach((result) => {
//         if (result.email === student.getEmail()) {
//           student.addHWResult(studentsResult.topic, result.success);
//         }
//       });
//     });
//   };

//   this.printStudentsEligibleForTest = function () {
//     newStudents.forEach((student) => {
//       student
//         .getHWResults()
//         .forEach(({ success }) =>
//           !success ? (failedHomeworksLimit += 1) : true
//         );

//       if (failedHomeworksLimit <= failedLimit) {
//         const goodStudent = {
//           name: student.getName(),
//           email: student.getEmail(),
//         };

//         studentList.push(goodStudent);
//       }

//       failedHomeworksLimit = 0;
//     });

//     return studentList;
//   };
// };

// const a = new FrontendLab(listOfStudents, 1);

// a.addHomeworkresults(homeworkResults[0]);
// a.addHomeworkresults(homeworkResults[1]);
// a.addHomeworkresults(homeworkResults[2]);
// a.addHomeworkresults(homeworkResults[3]);
// a.addHomeworkresults(homeworkResults[4]);
// console.table(a.printStudentsEligibleForTest());
// a.printStudentsList();

//------------------------------------------------
//---------------------- Classes ----------------------
//------------------------------------------------
// class Student {
//    #name;
//    #email;
//    #hwResults = [];

//    constructor(name, email) {
//       this.#name = name;
//       this.#email = email;
//    }

//    getName() {
//       return this.#name;
//    }

//    getEmail() {
//       return this.#email;
//    }

//    getHWResults() {
//       return this.#hwResults;
//    }

//    addHWResult(topic, succes) {
//       const result = { topic, succes };
//       this.#hwResults.push(result);
//    }
// }

// const studentAnastasia = new Student('Anastasia', 'belkina23@mail.com');

// console.log(studentAnastasia.getName());
// console.log(studentAnastasia.getEmail());
// console.log(studentAnastasia.getHWResults());
// console.log(studentAnastasia.addHWResult('HTML/CSS', true));
// console.log(studentAnastasia.getHWResults());
