import React, { useState, useEffect } from 'react'
import Card from './Card'

const MenuMain = ({ foods }) => {
    const [filteredFoods, setFilteredFoods] = useState([])

    useEffect(() => {
        setFilteredFoods(foods)
    }, [])



    return (
        <div>
            {
            filteredFoods.map((food, index) => (
                <Card key={index} food={food}/>
            ))
        }

            {/* {filteredFoods.map(
                (
                    { name, menuDescription, meal, category, components: { componentName, ingredients } }, index
                ) => {
                    return (
                        <Card key={index} food={filteredFoods} />
                    )
                }
            )
            } */}
        </div>
    )
}

export default MenuMain