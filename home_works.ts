class School {
  directions: string[] = [];

  addDirection(direction: string) {
    this.directions.push(direction);
  }
}

class Direction {
  levels: number[] = [];

  get name(): string {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  constructor(name: string) {
    this.name = name;
  }

  addLevel(level: number) {
    this.levels.push(level);
  }
}

class Level {
  groups: number[] = [];

  constructor(name: string, program: string) {
    this.name = name;
    this.program = program;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  get program(): string {
    return this.program;
  }

  set program(newProgram) {
    this.program = newProgram;
  }

  addGroup(group: number) {
    this.groups.push(group);
  }
}

class Group {
  _students: string[] = [];
  directionName: string;
  levelName: string;

  get students(): any {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: string) {
    this._students.push(student);
  }

  showPerformance(): string[] {
    const sortedStudents = this.students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades = {};
  attendance: number[] = [];
  firstName: string;
  lastName: string;
  birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number) {
    this.grades[subject] = grade;
  }

  markAttendance(present: number) {
    this.attendance.push(present);
  }

  
  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
