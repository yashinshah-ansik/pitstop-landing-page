(function() {
    var form = document.querySelector('.signup-form');
    var msgs = document.querySelector('#signup-form-messages');
    var firstname = document.getElementById('field-firstname');
    var lastname = document.getElementById('field-lastname');
    var email = document.getElementById('field-email');
    var email_pattern = /^[^@]{1,64}@[^@]+$/;
    form.onsubmit = function() {
        var errors = [];
        if (firstname.value.length < 2 || firstname.value.length > 255) {
            errors.push('first name');
        }
        if (lastname.value.length < 2 || lastname.value.length > 255) {
            errors.push('last name');
        }
        if (email.value.length > 255 || !email_pattern.test(email.value)) {
            errors.push('email address');
        }
        if (errors.length) {
            msgs.className = 'signup-form-error';
            msgs.innerHTML = 'Please enter a valid ' + errors.join(', ') + '.';
            msgs.style.opacity = '1.0';
            return false;
        }
        msgs.style.opacity = '0.0';
        msgs.className = 'signup-form-info';
        msgs.innerHTML = 'Saving&hellip;';
        msgs.style.opacity = '1.0';

        var xhr = new XMLHttpRequest();
        var data = {
            "firstname": firstname.value.trim(),
            "lastname": lastname.value.trim(),
            "email": email.value.trim(),
            "created_at": {".sv": "timestamp"}
        };
        xhr.open('POST', 'https://pitstop-site.firebaseio.com/subscribers.json', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) {
                return;
            }
            if (!xhr.status && !xhr.responseText) {
                msgs.className = 'signup-form-error';
                msgs.innerHTML = 'Sorry, saving failed: client error.';
                return;
            }
            if (xhr.status !== 200) {
                msgs.className = 'signup-form-error';
                msgs.innerHTML = 'Sorry, saving failed: request error ' + xhr.status + ' ' + xhr.statusText + ' ' + xhr.responseText;
                return;
            }
            msgs.style.opacity = '0.0';
            window.setTimeout(function() {
                msgs.innerHTML = 'Thank you for registering.';
                msgs.style.opacity = '1.0';
            }, 500);
            firstname.disabled = true;
            lastname.disabled = true;
            email.disabled = true;
            document.querySelector('.signup-signup-btn').disabled = true;
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        return false;
    };
})();
