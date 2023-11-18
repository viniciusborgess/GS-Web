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
              <div className="col-md-7 mt-5 d-flex flex-column">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptas error iure ducimus amet labore facilis! Quia hic libero similique ea totam, quo repellendus fugit ut veniam mollitia eligendi numquam.
                </p>

                <button type="button" class="btn btn-outline-dark rounded-2 align-self-end">Mais Informações</button>
              </div>
            </div>
          </div>

          {/* Bloco da Direita (Texto) */}
          <div className="col-md-5">
            <h3>O que é a solução?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente eveniet nemo similique veritatis facere autem! Harum blanditiis nostrum eius architecto dolor repellendus cumque deleniti saepe nemo sint at impedit, tempore animi sapiente cupiditate
            </p>

            <h3>O que é a solução?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente eveniet nemo similique veritatis facere autem! Harum blanditiis nostrum eius architecto dolor repellendus cumque deleniti saepe nemo sint at impedit, tempore animi sapiente cupiditate
            </p>

            <h3>O que é a solução?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente eveniet nemo similique veritatis facere autem! Harum blanditiis nostrum eius architecto dolor repellendus cumque deleniti saepe nemo sint at impedit, tempore animi sapiente cupiditate quia debitis corporis delectus nulla! Accusamus, fugiat quasi eos quod blanditiis aspernatur eveniet tenetur. Maxime corrupti nulla dignissimos obcaecati laudantium exercitationem dolor tempora harum, architecto natusa harum, architecto natus.

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