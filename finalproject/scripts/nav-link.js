const navs = [{
        Text: ' Home ',
        Url: 'index.html',
        Class: ' Home ',
        Alt: ' Click here to view the home link '
    },
    {
        Text: ' Contact ',
        Url: ' contact.html',
        Class: ' contact',
        Alt: ' Click Here to visit Contact Link '
    },
    {
        Text: ' Calendar ',
        Url: ' calendar.html',
        Class: ' calendar ',
        Alt: ' Click here to visit Calendar Link '
    }
];


const navBarMarkup = `
${navs.map(nav => 
    `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join('')}</li>
`;

document.querySelector('ul').innerHTML = navBarMarkup

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function() {
    toggleNav();
})