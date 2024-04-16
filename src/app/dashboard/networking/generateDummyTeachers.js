const generateDummyTeachers = (count) => {
  const firstNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];
  const courses = ["Mathematics", "English Literature", "Physics", "Chemistry", "Biology", "History", "Computer Science", "Art", "Music", "Physical Education"];
  const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

  const teachers = [];
  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const course = courses[Math.floor(Math.random() * courses.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    teachers.push({
      id: i,
      name: `${firstName} ${lastName}`,
      course,
      location,
      numStudents: Math.floor(Math.random() * 100),
      numFollowers: Math.floor(Math.random() * 100),
      numFollowing: Math.floor(Math.random() * 100),
    });
  }
  return teachers;
};

export default generateDummyTeachers;
