
// document.addEventListener("DOMContentLoaded", function () {
//     const filterButtons = document.querySelectorAll(".portfolio-list ul li");
//     const cards = document.querySelectorAll(".cards");

//     console.log(filterButtons);
//     console.log(cards);

//     filterButtons.forEach((btn) => {
//         btn.addEventListener("click", () => {

//             filterButtons.forEach((b) => b.classList.remove("active"));
//             btn.classList.add("active");

//             const filterValue = btn.getAttribute("data-name");

//             cards.forEach((card) => {
//                 const cardCategory = card.querySelector(".portfoli_card").getAttribute("data-name");

//                 if (filterValue === "all" || cardCategory === filterValue) {
//                     card.style.display = "block";
//                 } else {
//                     card.style.display = "none";
//                 }
//             });
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".portfolio-list ul li");
    const cards = document.querySelectorAll(".portfolio_section2 .cards");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {

            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-name").toLowerCase();

            cards.forEach((card) => {
                const cardCategory = card.querySelector(".portfoli_card").getAttribute("data-name").toLowerCase();

                if (filterValue === "all" || cardCategory === filterValue) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });
});
