export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees = allEmployees.concat(report.allEmployees[department]);
    }
  }
  return allEmployees[Symbol.iterator]();
}
