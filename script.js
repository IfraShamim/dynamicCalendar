const currentDate = document.querySelector("#currentDate"),
    daysTag = document.querySelector("#days"),
    prevNextIcon = document.querySelectorAll("#icons span i");
// Getting New Date , Current year & Month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDate(),// Getting First Date Of Month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Getting Last Date Of Month
        lastDayofMonth = new Date(currYear, currMonth, 0).getDate(), // Getting Last Day Of Month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Getting Last Date Of previous Month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of next month first days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;

    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icons => {
    icons.addEventListener("click", () => {//adding click event on both icons
        // if click icon is previous icon then decreament current month by 1 else increament it by 1
        currMonth = icons.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month & pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        }
        else {
            date = new Date();
        }
        renderCalendar();
    })
});