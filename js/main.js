let headerUl = document.getElementById('header-ul');
let headerIcon = document.getElementById('header-icon');
let headerLi = document.getElementsByClassName('header-li');
headerIcon.onclick = function () {

    if (headerUl.style.display === 'none') {
        headerUl.style.display = 'flex';

    } else if (headerUl.style.display === 'flex') {
        headerUl.style.display = 'none';
    } else {
        headerUl.style.display = 'flex';
    }


}
headerLi.onclick = function () {
    this.classList.toggle('active');
}