import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {
  const naavigate = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/Projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        naavigate("/projects", {state: { message: 'Projeto criado com sucesso!' }})
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.NewProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar um serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
}

export default NewProject;
