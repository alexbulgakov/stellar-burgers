import styles from './ingredient-details.module.css';

function IngredientDetails({ ingredient }) {
  return (
    <div className={`${styles.ingredientDetails} ml-10 mr-10`}>
      <img
        alt={`${ingredient.type}`}
        className={styles.img}
        src={ingredient.image}
      />
      <p className="text text_type_main-medium mt-4"> {ingredient.name}</p>
      <div className={`${styles.nutritionFacts} mt-8 mb-15`}>
        <p
          className={`${styles.nutritionFact} text text_type_main-default text_color_inactive`}
        >
          {'Calories,kcal'}
          <br />
          {ingredient.calories}
        </p>

        <p
          className={`${styles.nutritionFact} text text_type_main-default text_color_inactive ml-5`}
        >
          {'Proteins,g'}
          <br />
          {ingredient.proteins}
        </p>
        <p
          className={`${styles.nutritionFact} text text_type_main-default text_color_inactive ml-5`}
        >
          {'Fat,g'}
          <br />
          {ingredient.fat}
        </p>
        <p
          className={`${styles.nutritionFact} text text_type_main-default text_color_inactive ml-5`}
        >
          {'Carbohydrates,g'}
          <br />
          {ingredient.carbohydrates}
        </p>
      </div>
    </div>
  );
}

export default IngredientDetails;
