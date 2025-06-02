const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


function displayCourses(filter = 'All') {
    const container = document.getElementById("courseList");
    container.innerHTML = '';


    const filtered = courses.filter(course => {
        return filter === 'All' || course.subject === filter;
    });


    const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);


    filtered.forEach(course => {
        const btn = document.createElement('button');
        btn.textContent = `${course.subject} ${course.number}`;
        btn.classList.add('course-btn');
        btn.id = `${courses.indexOf(course)}` //Index as ID
        if (course.completed) {
            btn.classList.add('completed');
        } else {
            btn.classList.add('incomplete');
        }
        container.appendChild(btn);
    });

    const creditDisplay = document.createElement('p');
    creditDisplay.classList.add('credits');
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    container.appendChild(creditDisplay);
}

document.addEventListener('DOMContentLoaded', () => {
    displayCourses();

    document.getElementById('btnAll').addEventListener('click', () => displayCourses('All'));
    document.getElementById('btnCSE').addEventListener('click', () => displayCourses('CSE'));
    document.getElementById('btnWDD').addEventListener('click', () => displayCourses('WDD'));
});

const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

const modalSubject = document.querySelector("#modalSubject");
const modalTitle = document.querySelector("#modalTitle");
const modalCredits = document.querySelector("#modalCredits");
const modalDescription = document.querySelector("#modalDescription");
const modalTechnology = document.querySelector("#modalTechnology")

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

document.getElementById("courseList").addEventListener("click", (x) => {
    const courseId = x.target.id;

    if (courseId) {
        const course = courses[courseId];

        modalSubject.textContent = course.subject;
        modalTitle.textContent = `${course.subject} ${course.number} - ${course.title}`;
        modalCredits.textContent = `Credits: ${course.credits}`;
        modalCertificate.textContent = `Certificate: ${course.certificate}`;
        modalDescription.textContent = course.description;
        modalTechnology.textContent = `Technologies: ${course.technology.join(', ')}`;

        dialogBox.showModal();
    }
});