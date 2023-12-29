const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

function emailSend(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gianlucaidili1@gmail.com",
        Password : "DF8673A72A2407FC5EB20346BBC7C544A824",
        To : 'gianlucaidili94@gmail.com',
        From : "gianlucaidili1@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}

window.addEventListener('scroll', function() {
    var imgWapp = document.getElementById('imgWapp');
    var footer = document.querySelector('footer');
  
    var imgWappRect = imgWapp.getBoundingClientRect();
    var footerRect = footer.getBoundingClientRect();
  
    if (imgWappRect.bottom > footerRect.top) {
      // L'elemento img-wapp è sopra il footer, nascondilo
      imgWapp.classList.add('hidden');
    } else {
      // L'elemento img-wapp non è sopra il footer, mostra
      imgWapp.classList.remove('hidden');
    }
  });