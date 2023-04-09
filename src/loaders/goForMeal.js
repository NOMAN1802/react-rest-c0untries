export const goForMeal = async () => {
    const foodsData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    const foods = await foodsData.json()
    return foods;
}
