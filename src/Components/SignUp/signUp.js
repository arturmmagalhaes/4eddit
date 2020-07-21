import React from "react";
import { useHistory } from 'react-router-dom'
import { useForm } from '../../Pages/SignUp/hook/useForm'
import { ContainerSignUp, FormConteiner } from './signUp_styles.js';
import ImageVector from "../../Global/image_vector/img-test-4.png"
import Axios from 'axios'



  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

export default function SignUpComponent () {
  const {form, onChange } = useForm({ username: "", email: "", password: ""})

  const history = useHistory()

  const handleInputChange = event => {
    const { name, value } = event.target

    onChange(name, value)
  }

  const handleFormValues = (event) => {
    event.preventDefault()
    registerUser()
    history.push("/login")
  }

  const registerUser = () => {
    Axios.post(`${baseUrl}/signup`, form)
    .then(response => {
      alert("Cadastrado Com Sucesso")
    })
    .catch(error => {
      console.log(error)
      alert("Algo Saiu Errado!")
    })
  }
  return (
    <ContainerSignUp>
      <img className="ImageBackground" src={ImageVector} />
      <FormConteiner onSubmit={handleFormValues}>
        <h1>Cadastrar</h1>
          <input 
            placeholder="Nome de Usuário"
            value={form.username}
            name="username"
            type="text"
            required
            onChange={handleInputChange}
          />
          <input 
            placeholder="Email"
            value={form.email}
            name="email"
            type="text"
            required
            onChange={handleInputChange}
          />
          <input 
            placeholder="Senha"
            value={form.password}
            name="password"
            type="text"
            required
            onChange={handleInputChange}
          />
          <button>Cadastrar</button>
      </FormConteiner>
    </ContainerSignUp>
  );
}