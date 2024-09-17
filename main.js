function job(name, description, skill, salary, img, detail) {
  return {
    name: name,
    description: description,
    skill: skill,
    salary: salary,
    img: img,
    detail: detail
  };
}

var job1 = job("Développeur Full Stack", "Looking for full stack developer with experience in JavaScript and Node.js", "JavaScript, Node.js, React", "3000$", 'https://www.amigoscode.com/assets/thumbnails/courses/full-stack-professional.webp');

var job2 = job("Développeur Front-End", "Seeking front-end developer for an innovative tech company", "HTML, CSS, JavaScript", "2800$", 'https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwhh1lpihw7h587pb2iuc.png');

var job3 = job("Développeur Back-End", "Looking for a back-end developer with strong skills in Python and Django", "Python, Django, SQL", "3200$", 'https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477');

var job4 = job("Développeur Mobile", "Hiring mobile developer to work on iOS and Android apps", "Swift, Kotlin, React Native", "2700$", 'https://www.codeur.com/blog/wp-content/uploads/2020/12/developpement-mobile.jpg');

var job5 = job("Ingénieur DevOps", "Seeking DevOps engineer to manage deployment and CI/CD pipelines", "Docker, Kubernetes, Jenkins", "3500$", 'https://static.opswat.com/uploads/images/devops-vs-devsecops-1.png');

var job6 = job("Développeur UI/UX", "Looking for a UI/UX developer to design intuitive user interfaces", "Figma, Adobe XD, HTML/CSS", "2900$", 'https://sourcemediakw.com/wp-content/uploads/2023/04/UIUX.png');

var job7 = job("Analyste Programmeur", "Hiring analyst programmer for developing and maintaining software applications", "Java, C#, SQL", "2600$", 'https://www.digitalschool.paris/sites/default/files/Architecte%20d%27information_2121x1414.jpg');

var job8 = job("Consultant en Technologie", "Seeking technology consultant to provide expert advice on IT solutions", "Consulting, IT Strategy, Business Analysis", "3200$", 'https://www.pwc.com/content/dam/pwc/cz/cs/assets/technology_consulting_header_iStock-943067460.jpg');

var job9 = job("Développeur de Jeux Vidéo", "Looking for game developer to work on exciting new projects", "Unity, C#, Unreal Engine", "3100$", 'https://gamingcampus.fr/wp-content/webp-express/webp-images/uploads/2021/01/Thumbnail-studios-de-jv.jpg.webp');

var job10 = job("Architecte Logiciel", "Hiring software architect to design and oversee complex software systems", "Architecture, Design Patterns, Java", "3400$", 'https://desklab.fr/wp-content/uploads/2021/03/meilleur_logiciel_architecture.png');


var data = [job1, job2, job3,job4,job5,job6,job7,job8,job9,job10];


data.map((job, index) => {
  $("#container").append(`
    <div class='job' id='job${index}'>
      <button class='remove' data-jobid='job${index}'>remove job</button>
      <h2 class='tt'>${job.name}</h2>
      <h4 class='desk'>${job.description}</h4>
      <h4 class='skill'>${job.skill}</h4>
      <h4 class='salary'>${job.salary}</h4>
      <img class='img' src=${job.img} />
      <a class='detail' href="${job.detail}">More Detail</a>
    </div>
  `);
});


$('.skill, .desk, .salary, .detail').hide();

$('.img').on('click', function () {
  const jobIndex = $(this).parent().attr('id');
  $(`#${jobIndex} .desk, #${jobIndex} .skill, #${jobIndex} .salary, #${jobIndex} .detail`).toggle();
});

$('.remove').on('click', function () {
  const jobId = $(this).data('jobid');
  $(`#${jobId}`).remove();
});
