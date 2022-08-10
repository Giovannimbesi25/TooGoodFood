//READ FILE PORT NUMBER
fetch('port.txt')
    .then(response => response.text())
    .then(myPort => {
        var url = 'http://localhost:' + myPort + '/login';
        console.log(url)
        var input = document.getElementById('loginBtn');

        input.addEventListener('click', function(e) {
            var email = document.getElementById('emailLogin').value;
            console.log(email);
            var pass = document.getElementById('passLogin').value;
            console.log(pass)
            console.log('Tutto preso')
            if (pass.length > 0 && email.length > 0) {

                const data = {
                    email: email,
                    pass: pass,
                }
                console.log(data)

                console.log('Perfetto puoi andare')

                fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ data })
                    })
                    .then(res => res.json())
                    .then(response => {

                        Swal.fire({
                            title: response['message'],
                            icon: 'info',
                            confirmButtonText: 'OK',
                            customClass: 'myAlert'
                        }).then((result) => {
                            if (response['message'] === 'Welcome Boss!')
                                window.location.href = 'http://localhost:' + myPort + '/adminHome';
                            else
                                window.location.reload();
                        })


                    });
            } else {
                Swal.fire({
                    title: 'Some fields are empty!',
                    customClass: 'myAlert'
                });
            }


        });
    });