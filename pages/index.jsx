import Title from '../src/components/title/title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const handleLabelClick = () => {
    console.log('clicou aqui')
  }
  const handleSubmitForm = (event) => {
    event.preventDefault()
    console.log('handle submit form')    
  }
  const handleChangeInput = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
      <Title>Formulário de login</Title>
      <label onClick={handleLabelClick}>Voltar a página...</label>
      <form onSubmit={handleSubmitForm}>
        <Input type="email" placeholder="Digite seu email" onChange = {handleChangeInput} />
        <Input type="password" placeholder="Digite sua senha" onChange = {handleChangeInput} />
        <Button type="submit">Botao dentro form</Button>
      </form>
      <label>Label Teste</label>
      <button>Button</button>
    </>
  )
}
