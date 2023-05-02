import { Div,} from "./style.home";
import Cards from '../Cards';
import Cards2 from '../Cards2';
import Header from '../Header/Navbar'

function App() {
  return (
    <>
    <Div>
    <section>
     <Header/>
     <main>
      <h1>Descubra os melhores destinos de viagem do mundo! </h1>
      <h5>Nós reunimos as informações mais completas sobre os destinos mais incríveis do mundo para ajudá-lo a planejar a viagem dos seus sonhos.</h5>
      <h5>Explore praias paradisíacas, cidades históricas, destinos exóticos e muito mais. Encontre as melhores acomodações, restaurantes, atividades e atrações em cada destino para aproveitar ao máximo sua viagem.</h5>
      <h5>Nossa equipe de especialistas em viagens está pronta para ajudá-lo em cada etapa do processo, desde o planejamento até a reserva. Então, comece a explorar nosso site e descubra o mundo em toda a sua glória. A aventura aguarda!</h5>
      <h4>Principais pontos turísticos:</h4>

     </main>

     <div className='Cards'>
     <Cards className='Cards'></Cards>
     <Cards2 className='Cards'></Cards2>
     <Cards className='Cards'></Cards>
     <Cards sclassName='Cards'></Cards>
     </div>
     
     </section>
     </Div>
    </>
    
  );
}

export default App;
