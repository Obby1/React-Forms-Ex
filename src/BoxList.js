import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (box) => {
        setBoxes((boxes) => [...boxes, box]);
    };

    const removeBox = (id) => {
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));
    };

    return (
    <div>
        <NewBoxForm addBox={addBox} data-testid="new-box-form" />
        {boxes.map((box) => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
            data-testid="box"
        />
        ))}
    </div>
    );
}

export default BoxList;
