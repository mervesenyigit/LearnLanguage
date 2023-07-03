import React, { useEffect, useState } from 'react';

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
            } else {
                console.error('Error fetching levels:', response.status);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching levels:', error);
            setIsLoading(false);
        }
    };

    const handleDelete = () => {
        fetchLevels(); // Fetch updated levels after deletion
    };

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    <li>Levels</li>
                    {levels.map((level) => (
                        <li key={level.id}>
                            {level.name}
                            <a href={`/levels/${level.id}`}>Edit</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Index;
