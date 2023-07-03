import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Create({ levels, setLevels }) {
  

    const [level, setLevel] = useState({
        name: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:44463/api/Levels', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(level)
            });

            if (response.ok) {
                // Level created successfully
                const data = await response.json();
                console.log('Level created:', data);
                navigate('/levels');
                // Güncellenen seviyeleri ayarla
                setLevels([...levels, data]);
             
              
            } else {
                // Error occurred while creating the level
                const errorData = await response.json();
                console.error('Error creating level:', errorData);
                if (errorData.errors && errorData.errors.Subjects) {
                    const subjectErrors = errorData.errors.Subjects;
                    console.error('Subject validation errors:', subjectErrors);
                    // Hataları uygun şekilde işleyebilirsiniz
                }
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
                <button  type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;
