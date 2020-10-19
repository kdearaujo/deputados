import React, {useState, useEffect} from 'react'
import './App.css'

export default function App(){
  useEffect(()=>{
    obterDeputados()
  },[])//Quando array vazio, executa uma vez no carregamento

  const [deputados, setDeputados] = useState([])

  async function obterDeputados(){
    let url = 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome'
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data.dados)
      setDeputados(data.dados)
    })
    .catch(function (error){
      console.error(`Houve um erro: ${error}`)
    })
  }

  const listaDeputados = deputados.map((deputado)=>
  <tr key={deputado.id}>
    <td>{deputado.id}</td>
    <td><a href={`mailto:${deputado.email}`}>{deputado.nome}</a></td>
    <td>{deputado.siglaPartido}</td>
    <td>{deputado.SiglaUf}</td>
    <td><img src={deputado.urlFoto} alt={deputado.nome} title={deputado.nome}/></td>
  </tr>
  )

  return(
  <div className="principal">
    <h1>Relação dos Deputados</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Partido</th>
          <th>Estado</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        {listaDeputados}
      </tbody>
      </table>  
  </div>
  )
}