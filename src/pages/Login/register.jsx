// src/components/Register.js
import React, { useState } from 'react'
import { supabase } from './client'


const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      setMessage('Erro ao registrar usuário. Por favor, verifique suas informações e tente novamente.')
      return
    }

    const { user } = data

    const { data: userProfile, error: profileError } = await supabase
      .from('perfis')
      .insert([
        { 
          id: user.id, 
          first_name: firstName, 
          last_name: lastName, 
          email: email,
          // Adicionando a senha criptografada ao perfil
          senha: password
        }
      ])

    if (profileError) {
      setMessage('Erro ao salvar perfil no banco de dados. Por favor, tente novamente.')
    } else {
      setMessage('Usuário registrado com sucesso')
    }
  }

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Seu Nome:"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Seu Sobrenome:"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Crie um Email Festfy"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Crie uma Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Register
