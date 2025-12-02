
//login popup
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    
    if (overlay.style.display === 'flex') {
        popup.classList.remove('show');
        setTimeout(() => overlay.style.display = 'none', 300);
    } else {
        overlay.style.display = 'flex';
        setTimeout(() => popup.classList.add('show'), 50);
    }
}

//android sidepanel button
function openNav() {
    document.getElementById("mySidepanel").style.display = "block";
    document.getElementById("mySidepanel").style.width = "220px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.display = "none";
}

function closeNavOnClick() {
    closeNav();
}

function closeNavOnClick() {
    closeNav();
    document.getElementById("mysidepanel").style.width = "0";

}
