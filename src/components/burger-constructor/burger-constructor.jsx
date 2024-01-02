import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
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
        <section className={`${styles.burgerConstructor} mt-25 ml-10`}>
            <div className='ml-8 mb-4'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${topBun.name} (top)`}
                    price={topBun.price}
                    thumbnail={topBun.image}
                />
            </div>

            <div className={styles.movableIngredients}>
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
            <div className='ml-8 mt-4'>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bottomBun.name} (bottom)`}
                    price={bottomBun.price}
                    thumbnail={bottomBun.image}
                />
            </div>

            <div className={`${styles.checkout} mt-10 mr-4`}>
                <div className={`${styles.price} mr-10`}>
                    <p className="text text_type_digits-medium mr-1">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="medium">
                    Place an order
                </Button>
            </div>
        </section>
    );
}

export default BurgerConstructor;