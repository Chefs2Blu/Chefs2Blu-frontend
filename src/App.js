import logo from './logo.svg';
import './App.css';
import {Outlet, Link} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="navBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand alex" href="#">Chefs2Blu</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-link active"  to="/">Início</Link>
                    <Link className="nav-link" to="/receita"> Receitas </Link>
                    <Link className="nav-link" to="/chefs"> Chefs </Link>
                    <Link className="nav-link" to="/contato"> Contatos </Link>
                    </div>
                  </div>
                </div>
              </nav>
        </div>
        
    </header>
    <Outlet/>
    </div>
  );}



