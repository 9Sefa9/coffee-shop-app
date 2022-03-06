import './Home.stylesheet.css';
import { Button, Card, Toast } from 'react-bootstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { addItem } from '../Cart/Cart.redux';
import { useContext, useState } from 'react';
import coffeeloveContext from '../../context/coffeelove.context';
//import CartSlice,{addItem} from '../Cart/Cart.redux.js';

const Home = () => {

    const contextValue = useContext(coffeeloveContext);
    const [toast, setToast] = useState({ notify: false, lastAddedItem: null });
    const buyButtonHandler = (event, item) => {
        event.preventDefault();
        /*<Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>*/
        contextValue.cartDispatch(addItem(item));
        setToast({ notify: true, lastAddedItem: item });
    }
    return (
        <>
            <main>
                <h1>Popular Drinks</h1>
                <section className="section-container">
                    <article>
                        <Card className="card">
                            <Card.Body className="card-body" data-price="20€" onClick={(e) => {
                                buyButtonHandler(e,
                                    {
                                        id: 0,
                                        img: 'https://www.westend61.de/images/0000686126pw/cappuccino-with-milk-froth-heart-AIF000041.jpg',
                                        price: '20',
                                        quantity: 1
                                    }
                                )
                            }}>
                                <Button className="buy-button"><AiOutlinePlusCircle size={35} /></Button>
                                <Card.Img className="card-image" variant="top" src='https://www.westend61.de/images/0000686126pw/cappuccino-with-milk-froth-heart-AIF000041.jpg' />
                                <Card.Text className="card-text">Cappuccino</Card.Text>
                            </Card.Body>
                        </Card>
                    </article>
                    <article>
                        <Card className="card">
                            <Card.Body className="card-body" data-price="25€" onClick={(e) => {
                                buyButtonHandler(e,
                                    {
                                        id: 1,
                                        img: 'https://thumbs.dreamstime.com/b/cup-black-coffee-spilled-coffee-beans-coffee-break-64001994.jpg',
                                        price: '25',
                                        quantity: 1
                                    }
                                )
                            }}>
                                <Button className="buy-button"><AiOutlinePlusCircle size={35} /></Button>
                                <Card.Img className="card-image" variant="top" src='https://thumbs.dreamstime.com/b/cup-black-coffee-spilled-coffee-beans-coffee-break-64001994.jpg' />
                                <Card.Text className="card-text">Black</Card.Text>
                            </Card.Body>
                        </Card>
                    </article>
                    <article>
                        <Card className="card">
                            <Card.Body className="card-body" data-price="30€">
                                <Button className="buy-button" onClick={buyButtonHandler}><AiOutlinePlusCircle size={35} /></Button>
                                <Card.Img className="card-image" variant="top" src='https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?k=20&m=1177900338&s=612x612&w=0&h=rwLAoPzPiKdSbcdBFs4-TTt5O1Qpe0EFVY5KRqRPKmI=' />
                                <Card.Text className="card-text">Espresso</Card.Text>
                            </Card.Body>
                        </Card>
                    </article>
                    <article>
                        <Card className="card">
                            <Card.Body className="card-body" data-price="20€" >
                                <Button className="buy-button" onClick={buyButtonHandler}><AiOutlinePlusCircle size={35} /></Button>
                                <Card.Img className="card-image" variant="top" src='https://media.istockphoto.com/photos/cortado-coffee-with-coffee-beans-next-to-it-traditional-coffee-in-picture-id1355995290?k=20&m=1355995290&s=612x612&w=0&h=_CjQJ4KRckVlmrcZdEFNmt8Di_HLYTqZfzAa75DJ-J0=' />
                                <Card.Text className="card-text">Cortado</Card.Text>
                            </Card.Body>
                        </Card>
                    </article>
                </section>
                <Toast className="toast-item-notification" autohide show={toast.notify} onClose={() => { setToast({ ...toast, notify: false }) }}>
                    <Toast.Header>
                        <img
                            src={toast.lastAddedItem === null ? '' : toast.lastAddedItem.img}
                            alt=""
                            width={50}
                            height={50}
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>

            </main>
        </>
    );
}
export default Home;