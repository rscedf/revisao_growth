import useFetch from '../src/hooks/useFetch'

export default function CustomHookPage() {
  const [data, loading] = useFetch('http://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h4> Exemplo Hook customizado </h4>
      {loading && <p>Carregando...</p>}
      {data?.map(({ id, name }) => (
        <div key={`item -${id}`}> {name} </div>
      ))}
    </div>
  )
}
