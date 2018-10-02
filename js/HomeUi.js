class HomeUi {
    constructor () {
        this.navProfileUser = document.querySelector('.navProfileUser');
        this.navUserName = document.querySelector('#navUserName');
        this.projectContainer = document.querySelector('.projects-section .container .row');
    }
    setUserNavbar(user) {
        this.navProfileUser.style.display = 'block';
        this.navUserName.textContent = user.email;
    }
    generateProjectCards(projects) {
        this.projectContainer.innerHTML = '';
        if(projects.length){
            projects.forEach(project => {
                this.projectContainer.insertAdjacentHTML('afterbegin', HomeUi.projectCardTemplate(project));
            });
        }else{
            HomeUi.projectEmptyTemplate();
        }
    }
    static projectEmptyTemplate() {
        return `<div class="alert alert-danger">Empty Project List</div>`;
    }
    static projectCardTemplate (project) {
        return `
                 <div class="col-4 mx-auto mt-3">
                    <div class="card p-0" style="width: 18rem">
                            ${project.img ? `<img class="card-img-top" alt="Image Project" src="${project.img}">`: '' }
                        <div class="card-body p-0">
                            <div class="card-header">${project.category}</div>
                            <div class="card-block p-2">
                                <p class="card-text">${project.description}</p>
                                <a href="#" class="btn btn-primary" data-id="${project.id}">Edit</a>
                                <a href="#" class="btn btn-danger projectDeleteBtn" data-id="${project.id}">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}