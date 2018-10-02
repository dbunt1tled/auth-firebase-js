const auth = new Auth();
const user = User.getInstance();
const ui = new HomeUi();
const projects = new Projects();
const btnLogout = document.querySelector('#logout');
const projectsContainers = document.querySelector('.project-list-wrapper');
auth.getUser()
    .then(authUser => {
        if (authUser) {
            user.setUser(Auth.mapData(authUser));
            ui.setUserNavbar(user.getUser());
        } else {

        }
    });
projects.getAllProjects()
    .then(projectsObj => {
        ui.generateProjectCards(projectsObj);
    })
    .catch( er=> console.log(er))

projectsContainers.addEventListener('click', function (e) {
    if(e.target.classList.contains('projectDeleteBtn') && e.target.dataset.id) {
        projects.deleteProject(e.target.dataset.id).then( status =>{
            if(status) {
                projects.getAllProjects()
                    .then(projectsObj => {
                        ui.generateProjectCards(projectsObj);
                    })
                    .catch( er=> console.log(er))
            }
        }).catch(error => {
            console.log(error);
        });
    }
});

btnLogout.addEventListener('click', function (e) {
   e.preventDefault();
   let status = auth.logout();
   status.then(state => {
       if(state){
           window.location = 'login.html';
       }
   }).catch(error => {
       console.log(error);
   });
});