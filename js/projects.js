// Init Firebase
const db = Firebase.getInstance().getDB();

class Projects {
    async getAllProjects() {
        const projects = [];
        await db.collection("projects").get().then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
                let project = Object.assign(doc.data(), {id: doc.id})
                return projects.push(project);
            });
        });
        return projects;
    }

    async deleteProject(id) {
        return await db.collection("projects").doc(id).delete().then(() => {
            return Promise.resolve(true)
        }).catch(error => {
            return Promise.reject(error)
        });
    }
}