document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('content').innerHTML = `
        <p class="about-text">
            Fundada em 2016 em Pomerode, a POMERSEG é uma empresa dedicada a oferecer as melhores soluções em segurança eletrônica. Nosso compromisso é proteger nossos clientes com tecnologia de ponta e um atendimento personalizado. Com uma equipe altamente capacitada e equipamentos de última geração, garantimos a segurança de residências, empresas e instituições. Na POMERSEG, acreditamos que segurança é um direito de todos, e trabalhamos incansavelmente para proporcionar tranquilidade e confiança aos nossos clientes.
        </p>
    `;
});
