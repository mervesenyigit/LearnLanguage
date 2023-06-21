import React, { useState, useEffect } from 'react';

const LevelItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {
        fetch(`ìtem/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    })
    return (

        <main>
            {
                (items != null) ? items.map((items) => <h3>{items.tit}</h3>)
            }
          <div>


            </div>

        </main>
    )
}