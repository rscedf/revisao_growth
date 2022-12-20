import { useEffect, useState } from 'react'
import Link from 'next/link'

import Input from '../src/components/input/input'

export default function useEffectPage() {
  const [userList, setUserList] = useState([])
  const [name, setName] = useState([''])

  const handleForm = (event) => {
    event.preventDefault()
    setUserList([...userList, { name }])
    setName('')
  }

  useEffect(() => {
    console.log('Página inicializada')
  }, [])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await request.json()
      setUserList(data)
    }
    fetchData()
    return function saveData() {
      console.log('Save Data')
    }
  }, [])

  useEffect(() => {
    console.log('lista modificada')
  }, [userList])
  console.log(userList)

  return (
    <div>
      {userList.map((user, pos) => (
        <div key={`user-${pos}`}>{user.name}</div>
      ))}
      <form onSubmit={handleForm}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <div>
        <Link href="/">Salvar tudo</Link>
      </div>
    </div>
  )
}
