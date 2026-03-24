
const subjects = [
  {
    name: "Mathematics",
    grade: "Grades 8–12",
    tutor: "Nicole",
    image: "images/math.webp"
  },
  {
    name: "Science",
    grade: "Grades 9–12",
    tutor: "Nicole",
    image: "images/science.webp"
  }
];

const subjectList = document.querySelector("#subjectList");

function displaySubjects(items) {
  if (!subjectList) return;

  subjectList.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <h3>${item.name}</h3>
      <p>${item.grade}</p>
      <p>Tutor: ${item.tutor}</p>
    </div>
  `).join("");
}

displaySubjects(subjects);

const form = document.querySelector("#enrollForm");
const confirmation = document.querySelector("#confirmation");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const student = form.student.value;
    const subject = form.subject.value;

    const enrollment = {
      student,
      subject,
      timestamp: new Date().toLocaleString()
    };

    localStorage.setItem("educonnectEnrollment", JSON.stringify(enrollment));

 confirmation.textContent = `Thank you, ${student}. Your interest in ${subject} tutoring has been saved.`;
    form.reset();
  });
}
