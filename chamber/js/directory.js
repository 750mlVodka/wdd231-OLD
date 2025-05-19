    async function getMembers() {
        try {
            const response = await fetch('data/members.json');
            const members = await response.json();

        displayMembers(members);
        } catch (error) {
            console.error('Error loading members data:', error);
        }
    }

    function displayMembers(members) {
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <div class="membership-${member.membership}"><p><strong>Level: </strong> ${getMembershipName(member.membership)}</p></div>
        `;

            directory.appendChild(card);
        });
    }

    function getMembershipName(level) {
        if (level === 3) return "Gold";
        if (level === 2) return "Silver";
        if (level === 1) return "Member";
        return "Guest";
    }

    getMembers();
