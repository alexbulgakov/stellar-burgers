import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import useWindowSize from '../hooks/useWindowSize';
import Checkout from '../checkout/checkout';

function BurgerConstructor({ data }) {
    const [width, height] = useWindowSize();

    const topBun = data.find((item) => {
        return (item._id === '60666c42cc7b410027a1a9b1');
    });

    const bottomBun = data.find((item) => {
        return (item._id === '60666c42cc7b410027a1a9b1');
    });

    const selectedIngredients = data.filter((item) => {
        return item.type === 'main' || item.type === 'sauce';
    });

    return (
        <section className={`${styles.burgerConstructor} pr-2 mt-25 ${width < 1248 ? 'ml-4' : 'ml-10'}`}>
            <div className={`${styles.bun} ml-8 mb-4`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${topBun.name} (top)`}
                    price={topBun.price}
                    thumbnail={topBun.image}
                />
            </div>

            <div className={`${styles.movableIngredients} pr-2`}>
                {selectedIngredients.map(ingredient => (
                    <div key={ingredient._id} className={styles.ingredient}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={ingredient.name}
                            price={ingredient.price}
                            thumbnail={ingredient.image}
                        />
                    </div>
                ))}
            </div>
            <div className={`${styles.bun} ml-8 mb-4 mt-4`}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bottomBun.name} (bottom)`}
                    price={bottomBun.price}
                    thumbnail={bottomBun.image}
                />
            </div>

            <Checkout text='Place an order' />
        </section>
    );
}

export default BurgerConstructor;