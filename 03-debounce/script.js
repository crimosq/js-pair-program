function debounce(func, t) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this);
        }, t);
    };
}

function fn() {
    document.getElementById('body').style.backgroundColor="lightblue";
    setTimeout(() => {
        document.getElementById('body').style.backgroundColor="white";
    }, 2000)
}

const buttonClick = debounce(() => fn(), 3000);