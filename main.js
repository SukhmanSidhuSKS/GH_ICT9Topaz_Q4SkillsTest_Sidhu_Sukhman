// login authentication
function password() {
    let pass = document.getElementById('password').value;
    let user = document.getElementById('username').value;
    const btn = document.getElementById('btn');


    if (user === 'sks44' && pass === '44444444') {
        window.alert('access granted! welcome back, skibiditoilet69');
        window.location.replace = "notebooks.html"; } 
    else {
        window.alert('wrong username/password. ' + clickCount + ' attempts left.'); }
    }
// button click count
    let clickCount = 3;

    btn.addEventListener('click', () => {
        clickCount--;

        if (clickCount == -1 ) {
            btn.disabled = true;
        }
    });
