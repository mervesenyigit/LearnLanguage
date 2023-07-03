import React from 'react';
import { useNavigate } from 'react-router-dom';

function Delete({ levelId, setLevels, levels }) {
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        handleDelete(levelId, setLevels, levels);
    };
    async function handleDelete(levelId, setLevels, levels) {

        try { 
            const response = await fetch(`https://localhost:44463/api/Levels/${levelId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Level deleted');
                // Seviyeleri güncelle
                const updatedLevels = levels.filter((level) => level.id !== levelId);

                navigate('/levels');
                setLevels(updatedLevels);
            } else {
                const errorData = await response.json();
                console.error('Error deleting level:', errorData);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    return (
        <div>
            <button type="button" onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}




export default Delete;




export default Delete;
