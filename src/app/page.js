import CardFilme from '@/components/CardFilme'
import NavBar from '@/components/NavBar'
import Titulo from '@/components/Titulo.jsx'

async function carregarDados() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=e29f83299859d229702074e8f70ce639&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

  //mock
  const  filmes = await carregarDados()  

  return ( //JSX
    <>
      <NavBar />

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>

    </>
  )
}
