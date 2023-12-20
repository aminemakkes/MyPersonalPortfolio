    document.addEventListener('DOMContentLoaded', function () {
        var contactForm = document.getElementById('contact-form');

        contactForm.addEventListener('input', function (event) {
            validateField(event.target);
        });

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var fields = ['nom', 'prenom', 'email', 'telephone', 'reclamation'];
            var isValid = true;

            fields.forEach(function (field) {
                var inputElement = document.getElementById(field);
                isValid = validateField(inputElement) && isValid;
            });

            if (isValid) {
                alert('Formulaire soumis avec succès!');
            } else {
                alert('Veuillez remplir correctement tous les champs du formulaire.');
            }
        });

        function validateField(inputElement) {
            var value = inputElement.value.trim();
            var isValid = true;
            var errorMessage = '';

            switch (inputElement.id) {
                case 'nom':
                case 'prenom':
                    isValid = value.length >= 3 && /^[a-zA-Z ]+$/.test(value);
                    errorMessage = 'Le champ doit contenir au moins 3 caractères et ne doit pas contenir de chiffres ou de symboles.';
                    break;
                case 'telephone':
                    isValid = /^\d+$/.test(value);
                    errorMessage = 'Le champ ne doit contenir que des chiffres.';
                    break;
                case 'email':
                    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    errorMessage = 'Veuillez entrer une adresse e-mail valide.';
                    break;
            }

            var errorElement = document.getElementById(inputElement.id + '-error');
            if (errorElement) {
                errorElement.parentNode.removeChild(errorElement);
            }

            if (!isValid) {
                var errorMessageElement = document.createElement('div');
                errorMessageElement.id = inputElement.id + '-error';
                errorMessageElement.className = 'error-message';
                errorMessageElement.textContent = errorMessage;
                inputElement.parentNode.appendChild(errorMessageElement);
            }

            return isValid;
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        // ...
    
        var downloadButton = document.getElementById('download-button');
        downloadButton.addEventListener('click', function () {
            var cvPhoto = document.querySelector('.cv-photo');
            var a = document.createElement('a');
            a.href = cvPhoto.src;
            a.download = 'CV.pdf';
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    
        // ...
    });
    