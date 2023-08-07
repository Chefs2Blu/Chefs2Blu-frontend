import './style-contato/contato.css';
import './style-contato/responsive.css';
import contato from './imgs/img-contato.jpg';

export default function Contato(){
    return(
        <div>
            <div className="background-main">
                <h1>Fale conosco</h1>
                <img src={contato}/>
            </div>
            <div className="formulario-main">
                <h2>Reclame aqui</h2>
                <form id="formularioContato">
        <label for="name">Nome: </label>
        <input
          type="text"
          id="inputNome"
          name="name"
          placeholder="Nadia Castro"
          required
          maxlength="30"
        />
        <label for="email">Email: </label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          placeholder="nadiacastro@email.com"
          required
          maxlength="50"
        />
        <label for="message" className="form-label">Comentário:</label>
        <textarea
          name="message"
          id="inputComentario"
          placeholder="Escreva seu comentário aqui!"
          cols="8"
          rows="5"
          required
          maxlength="100"
        ></textarea>
        <button type="submit" id="button">Enviar</button>
      </form>
    </div>
    <footer className="footer-contato">
      <div
        className="div-footer d-flex flex-wrap justify-content-between align-items-center"
      >
        <div className="col-md-4 d-flex align-items-center">
          <p>&copy; 2023 Chefs2Blu, Inc. Todos os direitos reservados.</p>
        </div>
        <ul className="nav col-md-2 justify-content-center list-unstyled d-flex">
          <li className="ms-3">
            <a href="#"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="ms-3">
            <a href="#"><i className="bi bi-facebook"></i></a>
          </li>
          <li className="ms-3">
            <a href="#"><i className="bi bi-youtube"></i></a>
          </li>
          <li className="ms-3">
            <a href="#"><i className="bi bi-tiktok"></i></a>
          </li>
        </ul>
      </div>
    </footer>
        </div>
    )
}