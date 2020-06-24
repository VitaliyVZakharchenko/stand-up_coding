const handleClick = (event) => {
    if (event.target.classList.contains('list-item')) {
        console.log(event.target.textContent);
    }
};

document.querySelector('.list').addEventListener('click', handleClick);