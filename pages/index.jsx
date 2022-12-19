import { useState } from 'react'

import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLabelClick = () => {
    console.log('clicou aqui')
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('email: ', email, 'senha: ', password)
  }

  const handleChangeInput = (event, onChange) => {
    onChange(event.target.value)
  }
  return (
    <>
      <Title onClick={handleLabelClick}>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => handleChangeInput(e, setEmail)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => handleChangeInput(e, setPassword)}
        />
        <Button type="submit">Botao dentro form</Button>
      </form>
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}
