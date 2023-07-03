import React, { useState, useEffect } from 'react';

function Skills() {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await fetch('https://localhost:44463/api/Skills');
            if (response.ok) {
                const data = await response.json();
                setSkills(data);
            } else {
                console.error('Error fetching skills:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Skills</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.id}>{skill.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Skills;
