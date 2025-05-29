const spotlights =
[{
    "name": "Pippy McGinnis",
    "address": "95 Goodland Center",
    "phone": "145-961-6302",
    "website": "http://naver.com",
    "image": "https://picsum.photos/200/300?random=0",
    "membership": 1,
    "email": "sample@email.com"
}, {
    "name": "Filip Stroyan",
    "address": "11 Carpenter Parkway",
    "phone": "310-904-3044",
    "website": "http://discuz.net",
    "image": "https://picsum.photos/200/300?random=1",
    "membership": 1,
    "email": "sample@email.com"
}, {
    "name": "Ced Clinton",
    "address": "2 Porter Pass",
    "phone": "781-859-9326",
    "website": "https://va.gov",
    "image": "https://picsum.photos/200/300?random=2",
    "membership": 2,
    "email": "sample@email.com"
}]

function displaySpotlights() {
    const spots = document.querySelectorAll(".spotlights div");

    spotlights.forEach((member, i) => {
        spots[i].innerHTML =`
            <h3>${member.name}</h3>
            <div class="spot-content">
                <img src="${member.image}" alt="${member.name} logo" loading="lazy">
            <div class="spot-info">
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>
            </div>
        `
    })
}

document.addEventListener("DOMContentLoaded", displaySpotlights)