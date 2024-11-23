let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Amir N</a>
              <p>I’m Amir Naar, a Freelance Developer with a background in Bioinformatics, specializing in Back-End development.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:amir.naar.pro@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                amir.naar.pro@gmail.com</a></span>
            </div>
            <div style="margin-top:5%;" class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>

                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li><a href="about.html">About Me</a></li>
              </ul>
            </div>
            <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/amir-naar"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a><br>
              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a><br> -->
              <a href=""> <img src="./img/Twitter.png" alt="twitter"></a><br>
              <a href="https://github.com/amirn003"><img src="./img/GitHub.png" alt="github"></a>

            </div>
          </div>
        </div>
      </div>

    </footer>
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);

let isTranslated = false;

const originalText = {
  hi: document.querySelector('.hi').textContent,
  myName: document.querySelector('.my-name').innerHTML,
  slogun: document.querySelector('.slogun').textContent,
  homeBtn: document.querySelector('.homeBtn').textContent,
  projectSectionH2: document.querySelector('.poject-section h2').textContent,
  projectSectionPara: document.querySelector('.poject-section .para').textContent,
  projectLinks: Array.from(document.querySelectorAll('.project-grid .layer a:nth-child(2)')).map(link => link.textContent),
  servicesH2: document.querySelector('#services-provided h2').textContent,
  servicesPara: document.querySelector('#services-provided .para').textContent
};

document.getElementById('translateButton').addEventListener('click', function() {
  if (isTranslated) {
    // location.reload();
    // Switch back to English
    document.querySelector('.hi').textContent = originalText.hi;
    document.querySelector('.my-name').innerHTML = originalText.myName;
    document.querySelector('.slogun').textContent = originalText.slogun;
    document.querySelector('.homeBtn').textContent = originalText.homeBtn;
    document.querySelector('.poject-section h2').textContent = originalText.projectSectionH2;
    document.querySelector('.poject-section .para').textContent = originalText.projectSectionPara;
    document.querySelectorAll('.project-grid .layer a:nth-child(2)').forEach((link, index) => {
      link.textContent = originalText.projectLinks[index];
    });
    document.querySelector('#services-provided h2').textContent = originalText.servicesH2;
    document.querySelector('#services-provided .para').textContent = originalText.servicesPara;

    isTranslated = false;
  } else {
    // INTRODUCTION
    document.querySelector('.hi').textContent = 'Bonjour !👋'
    document.querySelector('.my-name').innerHTML = 'Je suis <span>Amir Naar</span>';
    document.querySelector('.slogun').textContent = "J'aide les particuliers et les entreprises à créer des sites Web uniques qui se démarquent et ont un impact durable.";
    document.querySelector('.homeBtn').textContent = 'Créons un site Web exceptionel !';


    // PROJECTS
    document.querySelector('.poject-section h2').textContent = 'PROJETS REALISES';
    document.querySelector('.poject-section .para').textContent = "J'ai une appétence par la construction de sites Web évolutifs, la création de solutions efficaces et l'apprentissage continue de nouvelles technologies.";
    document.querySelectorAll('.project-grid .layer a:nth-child(2)').forEach(function(link, index) {
      const translations = [
          'Wiki En Direct',
          'SpeechDetection En Direct',
          'MovieSearcher En Direct',
          'CountdownClock En Direct'
      ];
      link.textContent = translations[index];
    });

    // SERVICES
    document.querySelector('#services-provided h2').textContent = 'LES SERVICES QUE JE FOURNIS';
    document.querySelector('#services-provided .para').textContent = "Le but n'est pas de construire un site Web. Le but est de répondre à vos besoins.";

    isTranslated = true;
  }
});
