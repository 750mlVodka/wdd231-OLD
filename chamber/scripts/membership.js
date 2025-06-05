const dialogBox = document.querySelector("#dialogBox");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeButton = document.querySelector("#closeButton");

const benefits = {
    np: {
        title: "NP Membership Benefits",
        description: "Perfect for non-profits. Basic directory listing."
    },
    bronze: {
        title: "Bronze Membership Benefits",
        description: "Includes training access and event invites."
    },
    silver: {
        title: "Silver Membership Benefits",
        description: "Includes all Bronze benefits + special events."
    },
    gold: {
        title: "Gold Membership Benefits",
        description: "Includes all Silver benefits + homepage spotlight."
    }
};

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

document.getElementById("membership-cards").addEventListener("click", (x) => {
    const card = x.target.closest(".membership-card");
    if (!card) return;

    const level = card.getAttribute("id");
    const benefit = benefits[level];

    if (benefit) {
        modalTitle.textContent = benefit.title;
        modalDescription.textContent = benefit.description;
        dialogBox.showModal();
    }
});
