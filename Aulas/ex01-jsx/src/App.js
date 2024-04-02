import logo from './logo.svg';
import './App.css';



function App() {
  const nome = "Macedo"

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <p>Olá {nome}</p>
     <h1>Alterando o JSX</h1>
     <p>Meu primeiro App no React</p>
    
    <p>Contagem: { 2 + 2 }</p>
    <img src={url} alt="">
      
    </img>
    </div>
  );
}

export default App;
