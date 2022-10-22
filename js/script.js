const light = document.getElementById('radioLight');
const dark = document.getElementById('radioDark');
let theme;
if (light.checked) {
    theme = light.value;
} else {
    theme = dark.value;
}

const body = document.querySelector('.body');
const promo = document.querySelector('.promo');
const footer = document.querySelector('.footer');

function themeSwitch() {
    if (theme == light.value) {
        body.classList.add('body--white');
        body.classList.remove('body--black');
        promo.classList.add('promo--white');
        promo.classList.remove('promo--black');
        footer.classList.add('footer--white');
        footer.classList.remove('footer--black');
    } else if (theme == dark.value) {
        body.classList.remove('body--white');
        body.classList.add('body--black');
        promo.classList.remove('promo--white');
        promo.classList.add('promo--black');
        footer.classList.remove('footer--white');
        footer.classList.add('footer--black');
    }
}

themeSwitch();

light.addEventListener('click', () => {
    theme = light.value;
});

dark.addEventListener('click', () => {
    theme = dark.value;
});

const save = document.getElementById('saveButton');
save.addEventListener('click', themeSwitch);

const select = document.querySelectorAll('.choice-item__select');
const block = document.querySelectorAll('.choice-item-block');

select.forEach((item, i) => {
    item.addEventListener('click', () => {
        item.classList.toggle('choice-item__select--focus');
        block[i].classList.toggle('choice-item-block--hide');
    });
});

let arr = [{"name": "Monday"}, {"name": "Fixed"}, {"name": "Starred Projects"}];
if (sessionStorage.length == 0) {
    sessionStorage.setItem('key', JSON.stringify(arr));
}
arr = JSON.parse(sessionStorage.getItem('key'));
arr.forEach((item, i) => {
    select[i].firstElementChild.innerHTML = `<div>${item.name}</div>`;
});

block.forEach((item, i) => {
    item.firstElementChild.style.borderTopLeftRadius = "6px";
    item.firstElementChild.style.borderTopRightRadius = "6px";
    item.lastElementChild.style.borderBottomLeftRadius = "6px";
    item.lastElementChild.style.borderBottomRightRadius = "6px";
    item.childNodes.forEach(elem => {
        elem.addEventListener('click', () => {
            arr[i].name = `${elem.innerHTML}`;
            sessionStorage.setItem('key', JSON.stringify(arr));
            select[i].firstElementChild.innerHTML = `<div>${elem.innerHTML}</div>`;
            select[i].classList.remove('choice-item__select--focus');
            item.classList.add('choice-item-block--hide');
        });
    });
});