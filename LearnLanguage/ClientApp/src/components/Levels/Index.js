import React, { useEffect, useState } from 'react';
import Delete from './Delete';

function Index() {
    const [levels, setLevels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch levels data from the API
        fetchLevels();
    }, []);

    const fetchLevels = async () => {
        try {
            const response = await fetch('https://localhost:44463/api/Levels');
            if (response.ok) {
                const data = await response.json();
                setLevels(data);
                console.log(data);
            } else {
                throw new Error('Error fetching levels');
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching levels:', error);
            setIsLoading(false);
        }
    };


    return (
        <div>
            <h2>Levels</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {levels.map((level) => (
                        <li key={level.id}>
                            {level.name}
                            <Delete
                                levelId={level.id}
                                setLevels={setLevels}
                                levels={levels}
                                
                            />
                            <a href={`/levels/${level.id}`}>Edit
                            </a>
                           
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Index;

