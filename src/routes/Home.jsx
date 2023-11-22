import { } from 'react'
import '../css/home.css';


function Home() {


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Bloco da Esquerda (Imagem, Título e Parágrafo) */}
          <div className="col-md-7">
            <img
              src="src/img/ia.jpg"
              alt="Descrição da Imagem"
              className="img-fluid"
              />
            <div className="row">
              <div className="col-md-5 mt-5">
                <h1>DermaTech</h1>
              </div>
              <div className="col-md-7 mt-5 d-flex flex-column ">
              <p style={{borderLeft: "1px solid black", paddingLeft: "20px"}}>
                O aplicativo utiliza IA para analisar imagens da pele, capturadas por celulares, oferecendo avaliações preliminares de problemas dermatológicos. Integra um sistema de mapeamento de clínicas para facilitar consultas especializadas.
                </p>

                <button type="button" class="btn btn-outline-dark  align-self-end">Mais Informações</button>
              </div>
            </div>
          </div>

          {/* Bloco da Direita (Texto) */}
          <div className="col-md-5">
            <h3>O que é a solução?</h3>
            <p>
              O aplicativo utilizará a câmera do celular para capturar imagens da pele, que serão analisadas por algoritmos de inteligência artificial. Com base nessa análise, o aplicativo oferecerá aos usuários uma avaliação preliminar de possíveis problemas dermatológicos, proporcionando uma opção acessível para monitorar e detectar condições de pele por meio de um dispositivo conveniente e de uso cotidiano.
            </p>

            <h3>O que ela fará?</h3>
            <p>
              o aplicativo fornecerá uma avaliação preliminar indicando possíveis condições de pele. Além disso, integrará um sistema de mapeamento de clínicas dermatológicas para facilitar o agendamento de consultas especializadas.
            </p>

            <h3>Como funcionará?</h3>
            <p>

              O aplicativo funcionará permitindo que os usuários capturem imagens da pele por meio da câmera do celular. Essas imagens serão processadas por algoritmos de inteligência artificial, os quais identificarão padrões e características relacionados a problemas dermatológicos. Com base nessa análise, o aplicativo fornecerá aos usuários uma avaliação preliminar de possíveis condições de pele.

            </p>
          </div>



        </div>
      </div>

      <div className='container bloco2'>
        <h1 className='pb-5'>Vantagens</h1>
        <div className='row'>
          <div className='col-md-4'>
            <div className="d-flex align-items-center">

              <figure>
                <img src="src/img/diagnostico.png" alt="Descrição da Imagem" className="imgs img-fluid rounded" />
              </figure>

              <div className="">
                <h1 className='m-2'>01</h1>
                <h5 className='m-2'>Detecção Precoce.</h5>
                <p className='m-2'> Contribui para a detecção precoce de problemas dermatológicos.</p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="d-flex align-items-center">

              <figure>
                <img src="src/img/conscientizacao.png" alt="Descrição da Imagem" className="imgs img-fluid rounded" />
              </figure>

              <div className="ml-3">
                <h1 className='m-2'>02</h1>
                <h5 className='m-2'>Conscientização.</h5>
                <p className='m-2'> Promove a conscientização sobre a importância da saúde da pele.</p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="d-flex align-items-center">

              <figure>
                <img src="src/img/acessibilidade.png" alt="Descrição da Imagem" className="imgs img-fluid rounded" />
              </figure>

              <div className="ml-3">
                <h1 className='m-2'>03</h1>
                <h5 className='m-2'>Acessibilidade.</h5>
                <p className='m-2'>Torna a análise de problemas de pele mais acessível para todos..</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home