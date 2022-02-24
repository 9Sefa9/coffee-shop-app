import { Button, Card } from 'react-bootstrap';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import './Home.stylesheet.css';
const Home = () => {
    const handleBuyButton = () =>{
        //Something like that for shipping cart ???
        localStorage.setItem("cart",{"A":1});
    }
    return(
    <>
    <main>
        <h1>Popular Drinks</h1>
            <section className="section-container"> 
                <article>
                    <Card className="card">
                        <Card.Body className="card-body" data-price="20€">
                            <Button className="buy-button" onClick={handleBuyButton}><AiOutlinePlusCircle size={35} /></Button>
                            <Card.Img className="card-image" variant="top" src='https://www.westend61.de/images/0000686126pw/cappuccino-with-milk-froth-heart-AIF000041.jpg' />
                            <Card.Text className="card-text">Cappuccino</Card.Text>
                        </Card.Body>
                    </Card>
                </article>
                <article>
                    <Card className="card">
                        <Card.Body className="card-body" data-price="20€">
                            <Button className="buy-button"><AiOutlinePlusCircle size={35} /></Button>
                            <Card.Img className="card-image" variant="top" src='https://thumbs.dreamstime.com/b/cup-black-coffee-spilled-coffee-beans-coffee-break-64001994.jpg' />
                            <Card.Text className="card-text">
                                Black
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
                <article>
                    <Card className="card">
                        <Card.Body className="card-body" data-price="20€">
                            <Button className="buy-button"><AiOutlinePlusCircle size={35} /></Button>
                            <Card.Img className="card-image" variant="top" src='https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=' />
                            <Card.Text className="card-text">
                               Espresso
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
                <article>
                    <Card className="card">
                        <Card.Body className="card-body" data-price="20€" >
                            <Button className="buy-button"><AiOutlinePlusCircle size={35} /></Button>
                            <Card.Img className="card-image" variant="top" src='https://media.istockphoto.com/photos/cortado-coffee-with-coffee-beans-next-to-it-traditional-coffee-in-picture-id1355995290?k=20&m=1355995290&s=612x612&w=0&h=_CjQJ4KRckVlmrcZdEFNmt8Di_HLYTqZfzAa75DJ-J0=' />
                            <Card.Text className="card-text" >
                               Cortado
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
         </section>
    </main>
    </>
    );
}
export default Home;