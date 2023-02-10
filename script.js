const items = document.querySelectorAll('.menu .menu-bullet li');
const contents = document.querySelectorAll('.menu-details .details');

items.forEach((item, index) => {
    item.addEventListener("click",() =>{
        contents.forEach((content) => {
            content.style.display = "none";
        });
        contents[index].style.display = "block";
    })
})
