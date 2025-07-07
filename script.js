document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  /**
   * Função para mostrar uma seção específica e esconder as outras.
   * @param {string} sectionId - O ID da seção a ser exibida.
   */
  function showSection(sectionId) {
    contentSections.forEach((section) => {
      if (section.id === sectionId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    navLinks.forEach((link) => {
      if (link.dataset.section === sectionId) {
        link.classList.add("active-nav");
        o;
      } else {
        link.classList.remove("active-nav");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = event.target.dataset.section;
      showSection(sectionId);
    });
  });

  const initialHash = window.location.hash.substring(1); // Remove o '#'
  if (initialHash && document.getElementById(initialHash)) {
    showSection(initialHash);
  } else {
    showSection("sobre-mim");
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Previne o envio padrão do formulário

      const messageBox = document.createElement("div");
      messageBox.classList.add("message-box");
      messageBox.textContent =
        "Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)";

      messageBox.style.cssText = `
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
                padding: 15px;
                margin-top: 20px;
                border-radius: 8px;
                text-align: center;
                font-weight: bold;
                animation: fadeOut 5s forwards; /* Animação para desaparecer */
            `;

      const style = document.createElement("style");
      style.innerHTML = `
                @keyframes fadeOut {
                    0% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { opacity: 0; display: none; }
                }
            `;
      document.head.appendChild(style);

      contactForm.parentNode.insertBefore(messageBox, contactForm);

      contactForm.reset();

      setTimeout(() => {
        if (messageBox.parentNode) {
          messageBox.parentNode.removeChild(messageBox);
        }
      }, 5000);
    });
  }
});
