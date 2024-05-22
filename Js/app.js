document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('inicio');
    const welcome = document.getElementById('welcomeSec-Conteiner');
    const welcomeHeight = welcome.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > welcomeHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

window.onload = checkResolution;
window.onresize = checkResolution;

function checkResolution() {
  var screenWidth = window.innerWidth;
  var myDiv = document.getElementById('chatbot-body');
  
  if (screenWidth < 800) {
      myDiv.classList.remove('visible');
      myDiv.classList.add('hidden');
  } else {
      myDiv.classList.remove('hidden');
      myDiv.classList.add('visible');
  }
}

function toggleChat() {
  const chatBody = document.getElementById('chatbot-body');
  if (chatBody.classList.contains('hidden')) {
      chatBody.classList.remove('hidden');
      chatBody.classList.add('visible');
  } else {
      chatBody.classList.remove('visible');
      chatBody.classList.add('hidden');
  }
}


function transferToForm(description) {
    // Transferir la información al formulario
    document.getElementById('mensaje').value = `Estoy interesado en el plan "${description}". Tengo varias ideas para mi página y me gustaría discutirlas en detalle... `;
    
    // Opcional: Desplazarse hasta el formulario
    document.getElementById('contact-desc').scrollIntoView({ behavior: 'smooth' });
  }


  //función que se encarga de detectar los valores de la lista de idiomas
  function handleDropdownChange() {
    var selectElement = document.getElementById("opciones");
    var selectedValue = selectElement.value;
    changeLanguage(selectedValue);
}

  const textsToChange = document.querySelectorAll("[data-section]");
  //función que devuelve el valor de la lista
  async function changeLanguage(language){
    const requestJson = await fetch(`/Languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange)
      {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
      }

      console.log(texts["comoTrabajamos"]);
  }

    window.embeddedChatbotConfig = {
    chatbotId: "2JOdCymMabN1vCiyUg7ZO",
    domain: "www.chatbase.co"
    }
    src="https://www.chatbase.co/embed.min.js"
    chatbotId="2JOdCymMabN1vCiyUg7ZO"
    domain="www.chatbase.co"
    defer


   

  