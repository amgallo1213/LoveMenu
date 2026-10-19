import React, { useState, useEffect } from 'react'
import Card from './Card'
import DrinkCard from './DrinkCard'


const MenuMain = ({ foods, drinks }) => {
    const [filteredFoods, setFilteredFoods] = useState([])
    const [ filteredDrinks, setFilteredDrinks ] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState("")
    

    useEffect(() => {
        setFilteredFoods(foods)
        setFilteredDrinks(drinks)
    }, [])

    useEffect(() => {
        const query = searchQuery.toLowerCase()
        const foodResult = foods.filter(
            (food) =>
                food.name.toLowerCase().includes(query) ||
                food.category.toLowerCase().includes(query)      
        )

        setFilteredFoods(
            category
                ? foodResult.filter((food) => food.category === category ) 
                : foodResult
        )
    }, [searchQuery, category])

    const clearSearch = () => {
        setSearchQuery("")
        setCategory("")

    }

    return (
        <div>



            <section className='search-select-container'>
                <input
                    className='search-input'
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div>

                    <select
                        className='select'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>All Categories</option>
                        {[...new Set(foods.map((food) => food.category))].map(
                            (cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            )
                        )}
                    </select>
                
                    <button className="button" onClick={clearSearch}>Clear Search</button>
                </div>

            </section>

            <section>
                {

                    filteredFoods.map((food, id) => (

                        <Card key={id} food={food} />
                    ))
                }


          {/* {
            filteredDrinks.map((drink, index) => (
              <DrinkCard key={index} drink={drink} />
            ))
          } */}
            </section>



        </div>
    )
}

export default MenuMain