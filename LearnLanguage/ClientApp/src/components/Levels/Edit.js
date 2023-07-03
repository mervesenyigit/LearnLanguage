import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
    const { levelId } = useParams();
    const [level, setLevel] = useState({
        name: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing level data for editing
        const fetchLevel = async () => {
            try {
                const response = await fetch(`https://localhost:44463/api/Levels/${levelId}`);
                if (response.ok) {
                    const data = await response.json();
                    setLevel(data);
                } else {
                    console.error('Error fetching level:', response.statusText);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchLevel();
    }, [levelId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://localhost:44463/api/Levels/${levelId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(level),
            });

            if (response.ok) {
                // Level updated successfully
                navigate('/levels');
                console.log('Level updated:', level);
            } else {
                console.error('Error updating level:', response.statusText);
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
            <h2>Edit Level</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={level.name} onChange={handleChange} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Edit;
