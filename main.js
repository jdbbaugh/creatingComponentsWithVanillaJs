const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


let divContainer = document.querySelector("#container");


const elementMadness = (...props) => {
    return `<${props[2]} class="${props[1]} ${props[3]}">${props[0]}</${props[2]}>`
}


const student = (...props) => `
    <div id="student">
        ${elementMadness(props[0], props[1], "h1", 'xx-large')}
        ${elementMadness(props[2], "section--padded bordered dashed", 'section')}
        ${elementMadness(props[3], "pushRight", 'aside')}
    </div>
`

for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
        divContainer.innerHTML += student(students[i].name, 'passing', students[i].class, students[i].info);
    } else {
        divContainer.innerHTML += student(students[i].name, 'failing', students[i].class, students[i].info);
    }
     
};








