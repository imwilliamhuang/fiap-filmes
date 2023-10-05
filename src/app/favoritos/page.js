import CardFilme from '@/components/CardFilme'
import NavBar from '@/components/NavBar';
import Titulo from '@/components/Titulo.jsx'

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjlmODMyOTk4NTlkMjI5NzAyMDc0ZThmNzBjZTYzOSIsInN1YiI6IjY0ZjFjNTRiNzdkMjNiMDBjYjg2N2I1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PrsXYCtMWbsKUIykSHasLVTst65JfULUqT1Yyr04Auw'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/20382636/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {

  //mock
  const  filmes = await carregarDados()  

  return ( //JSX
    <>
      <NavBar />

      <Titulo>Favoritos</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

    </>
  )
}
