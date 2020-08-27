const btns = document.querySelectorAll('.btn');
// console.log(btn1);

btns.forEach(btn => {

    btn.addEventListener('click', handleBtnClick)
});

function handleBtnClick(event) {
    console.log(event.target.innerText);
};