import React from 'react'

const Card = ({ food }) => {
    const componentListItem = food.components.map(oneComponent => <li>{oneComponent}</li>) 

    return (
        <div className='card'>

            <h3>{food.name}</h3>
            <div>
                <p>Menu Description: {food.menuDescription}</p>
                <p>Served at: {food.meal}</p>
                <p>Listed Under: {food.category}</p><br />
                <p>Components: </p>
                <ul>
                    {componentListItem}
                </ul>

                {/* <p>{food.components}</p><br /> */}

                <p>Allergens: {food.allergens}</p>
                <p>Tableside Description: {food.tableside}</p>
                <p>Notes: {food.notes}</p>
            </div>



        </div>
    )
}

export default Card