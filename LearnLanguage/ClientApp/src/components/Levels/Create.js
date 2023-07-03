import React, { useState } from 'react';
import axios from 'axios';

function Create() {
    const [level, setLevel] = useState({
        name: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:44463/api/Levels', level);

            if (response.status === 201) {
                // Level created successfully
                const data = response.data;
                console.log('Level created:', data);
            } else {
                // Error occurred while creating the level
                console.error('Error creating level:', response.data);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleChange = (e) => {
        setLevel({ ...level, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Create Level</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={level.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;
