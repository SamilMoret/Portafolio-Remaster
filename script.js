
document.querySelector('#SUS').addEventListener('click', () => {
  document.querySelector('#Cabb').classList.toggle('show');
})

function validatedEmail(e) {
  let field = e.target;
  let fieldValue = field.value;

  if (fieldValue.search('@') == -1) { 
      displayError("Email não válido", field);
  
  }  else {
        clearError(field);
  }

   field.classList.remove("not-validated");
   checkEnalbleSubmit();  
  }

  function validatedNotEmpty (e) {
      let field = e.target;
      let fieldValue = field.value;

      if (fieldValue == "") {
           displayError("Campo não pode ser vazio", field);

      }  else {
            clearError(field);
      }
  
  field.classList.remove("not-validated");
  checkEnalbleSubmit();
  
  }
  
  function displayError(message, field) {
      clearError(field)
      field.classList.add("is-invalid");
      let error = document.createElement("small");
      error.style.color = "red";
      error.classList.add("error-message");
      error.textContent = message;
      field.parentElement.appendChild(error);
  }

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySelector('.error-message');
    if (error) {
        container.removeChild(error);
    }
    field.classList.remove("is-invalid");
}

function checkEnalbleSubmit() {
  let form = document.querySelector('#form');
  let notValidated = form.querySelectorAll('.not-validated');
  let errors = form.querySelectorAll('.is-ivalid');

  if (errors.length == 0 && notValidated.length == 0) {
    enableSubmit();
  } else {
    disableSubmit()
  }
}

function enableSubmit() {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type-submit]')

    submit.disabled = false;
}

function disableSubmit() {
  let form = document.querySelector('#form');
  let submit = form.querySelector('type-submit');


  submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add('not-validated'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener('keyup', validatedEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener('keyup', validatedNotEmpty)); 


let sendButton = document.getElementById("send-button");
const form = document.getElementById("form");

sendButton.addEventListener("click", function (e) {
    e.preventDefault();
    sendButton.value = "Enviando";
    const serviceID = 'service_uk3asta';
    const templateID = 'template_fbhum3u';
 
    emailjs.sendForm(serviceID, templateID, form)
     .then(() => {
       sendButton.value = 'Send Email';
       alert('Menssagem enviado com sucesso! :D');
     }, (err) => {
       sendButton.value = 'Send Email';
       alert(JSON.stringify(err));
     });

});

