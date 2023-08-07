import React from 'react';
import './style-inicial.css';
import brigadeiro from './imgs/brigadeiro.jpg' ;
import pudim from './imgs/pudim.webp';
import chuva from './imgs/chuva.jpg';
import empada from './imgs/empada.png';
import lasanha from './imgs/lasanha.jpeg';
import moscow from './imgs/moscow.webp';
import quentao from './imgs/quentao.webp';
import face from './imgs/icons/face.png';
import insta from './imgs/icons/insta.png';
import tiktok from './imgs/icons/tktk.png';
import twitter from './imgs/icons/tt.png';

export default function Início(){
    return(
    <div>
        <main className="pb-1">
        <div className="carrosel">
          <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pudim} className="d-block w-100 " alt="Pudim de Leite Condensado"/>
                  <div className="carousel-caption  d-none d-md-block mb-5">
                    <h3>Pudim de Leite Condensado</h3>
                    <a href="#" className="btn rounded">Ver receita!</a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={quentao} className="d-block w-100 " alt="..."/>
                  <div className="carousel-caption d-none d-md-block mb-5">
                    <h3 >Quentão</h3>
                    <a href="#"  className="btn rounded">Ver receita!</a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={empada} className="d-block w-100 " alt="..."/>
                  <div className="carousel-caption d-none d-md-block mb-5">
                    <h3 >Empada de frango</h3>
                    <a href="#" className="btn rounded">Ver receita!</a>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
      </div>

      <div className="intro">
          <div className="container">
              <h3 className="open p-5 marrom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi excepturi laborum, explicabo recusandae suscipit facilis magnam cum dolore numquam deserunt est eius ad rem? Fuga nemo dolor quibusdam? Dolor!
              </h3>
          </div>
      </div>

      <div className="receitas">
          <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={brigadeiro} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Sobremesa</h5>
                  <a href="#" className="btn rounded">Veja todas sobremesas</a>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={lasanha} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Pratos Principais</h5>
                  <a href="#" className="btn rounded">Veja todos Pratos Principais</a>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={moscow} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Bebidas</h5>
                  <a href="#" className="btn rounded">Veja todas as Bebidas</a>
                </div>
              </div>
            </div>
          
            <a href="" className="btn-td rounded"><h5>Veja todas as Receitas!</h5></a>
      </div>
  </main>

  <footer >
      <div className="container text-center">
          <div className="row ">
          <div className="row col-6 mx-auto">
            <div className="col">
              <h5 >Contato</h5>
              <p>TEL: +00 (00) 00000-0000</p>
              <p>E-MAIL: chefstoblu@email.com</p>
            </div>
            <div className="col">
            </div>
            <div className="col d-flex flex-column">
              <span className="badge  mt-1"><img src={face} alt="facebook"/> <a href="">@Chefs2Blu</a></span>
              <span className="badge  mt-1"><img src={insta}  alt="instagram"/> <a href="">@Chefs2Blu</a></span>
              <span className="badge  mt-1"><img src={tiktok} alt="tiktok"/> <a href="">@Chefs2Blu</a></span>
              <span className="badge  mt-1"><img src={twitter}   alt="twitter"/> <a href="">@Chefs2Blu</a></span>
            </div>
          </div>
          </div>
        </div>
  </footer>
    </div>);
}