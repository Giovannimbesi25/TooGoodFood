navbar = document.querySelector('.header .flex .navbar');



document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    profile.classList.remove('active');
}



profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    navbar.classList.remove('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    profile.classList.remove('active');
}

function loader() {
    document.querySelector('.loader').style.display = 'none';
}


function fadeOut() {
    setInterval(loader, 1000);
}


const urlLogout = 'https://localhost:5000/logout';
logout = document.querySelector('.header .flex .profile .flex .delete-btn')

logout.onclick = () => {
    // let x = confirm("Are you sure you want to leave?")
    // if (x)
    //     fetch(urlLogout);
    Swal.fire({
        title: 'Logout?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: "myAlert"
    }).then((result) => {
        if (result.isConfirmed)
            window.location.href = "logout"
    });
}



window.onload = fadeOut;