import './style-receitas.css';

export default function Receipes(){
    return(
        <div>
             <main>
        <section class="receitas-inicial">
            <div class="receitas-inicial">
                <h1 class="title">RECEITAS</h1>
            </div> 
            <div class="receita-categoria">
                <button type="button" class="btn btn-secondary">Pratos Principais</button>
                <button type="button" class="btn btn-secondary">Sobremesas</button>
                <button type="button" class="btn btn-secondary">Bebidas</button>
            </div>
            <section class="receitas-content">
                <div class="receitas-img">
                    <div class="receita-item">
                        <img src="https://jpimg.com.br/uploads/2022/09/3-receitas-de-tortas-faceis-e-deliciosas-para-sobremesa.jpg" width="200px" alt=""/>
                        <button type="button" class="btn btn-secondary">Nome Receita</button>
                    </div>

                    <div class="receita-item">
                        <img src="https://jpimg.com.br/uploads/2022/09/3-receitas-de-tortas-faceis-e-deliciosas-para-sobremesa.jpg" width="200px" alt=""/>
                        <button type="button" class="btn btn-secondary">Nome Receita</button>
                    </div>

                    <div class="receita-item">
                        <img src="https://jpimg.com.br/uploads/2022/09/3-receitas-de-tortas-faceis-e-deliciosas-para-sobremesa.jpg" width="200px" alt=""/>
                        <button type="button" class="btn btn-secondary">Nome Receita</button>
                    </div>
                </div>
            </section>


        </section>
    </main>
        </div>
    )
}