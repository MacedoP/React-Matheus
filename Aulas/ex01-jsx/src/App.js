import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SeyMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';



function App() {
 
  const url = 'https://via.placeholder.com/150'
  const nome= "Lurdes"

  return (
    <div className="App">
      <Pessoa
        foto={url}
        nome="Francisco" 
        idade="28"
        profissao="Programador"
      />
      <SeyMyName nome="Francisco"/>
      <SeyMyName nome="Abilho"/>
      <SeyMyName nome={nome}/>
      <p>Olá {nome}</p>
     <h1>Alterando o JSX</h1>
     <p>Meu primeiro App no React</p>
    
    <p>Contagem: { 2 + 2 }</p>
    <img src={url} alt=""/>
    <HelloWord />
      
    </div>
  );
}

export default App;
