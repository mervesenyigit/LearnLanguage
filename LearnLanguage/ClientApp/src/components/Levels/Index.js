import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Index() {
    const [levels, setLevels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch levels data from the API
        fetchLevels();
    }, []);

    const fetchLevels = async () => {
        try {
            const response = await axios.get('https://localhost:44463/api/Levels');
            setLevels(response.data);
            console.log(response.data);
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
                        <li>Levels</li>
                    {levels.map((level) => (
                        <li key={level.id}>{level.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Index;
