import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça o seu pedido<br />que nós entregamos<br />pra você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha seu pedido e em poucos minutos<br />entregaremos na sua casa.
                    </h3>
                    <a href="order" className="home-btn-order" >FAZER PEDIDO</a>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )
}
export default Home;