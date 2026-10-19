import React, { useState, useEffect } from 'react'
import Card from './Card'


const MenuMain = ({ foods }) => {
    const [filteredFoods, setFilteredFoods] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        setFilteredFoods(foods)
    }, [])

    useEffect(() => {
        const query = searchQuery.toLowerCase()
        const result = foods.filter(
            (food) =>
                food.name.toLowerCase().includes(query) ||
                food.category.toLowerCase().includes(query)
        )

        setFilteredFoods(
            category
                ? result.filter((food) => food.category === category)
                : result
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

                    <button onClick={clearSearch}>Clear Search</button>
                </div>

            </section>

            <section>
                {

                    filteredFoods.map((food, id) => (

                        <Card key={id} food={food} />
                    ))
                }
            </section>



        </div>
    )
}

export default MenuMain