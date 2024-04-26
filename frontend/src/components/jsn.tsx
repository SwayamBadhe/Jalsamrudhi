import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

// Define the Jsn component
const Jsn = () => {
    // Define state variables for articles, loading, and error
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch articles from the backend
    const fetchArticles = async () => {
        try {
            // Fetch articles from your backend API endpoint
            const response = await fetch('YOUR_BACKEND_API_URL/articles');
            if (!response.ok) {
                throw new Error('Failed to fetch articles');
            }
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            // Handle error
            setError(error);
        } finally {
            // Set loading to false once fetching is complete
            setLoading(false);
        }
    };

    // Use the useEffect hook to fetch articles when the component mounts
    useEffect(() => {
        fetchArticles();
    }, []);

    // Render the Jsn component
    return (
        <div>
            <Typography variant="h4" sx={{
                display: 'flex',
                width: '743px',
                height: '208px',
                flexDirection: 'column',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#000',
                fontFamily: '"DM Serif Display"',
                fontSize: '96px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '125%', /* 120px */
                letterSpacing: '13.44px',
                marginLeft: '25%',}}>JSN Articles</Typography>

            {/* Show a loading message if the data is still being fetched */}
            {loading && <p>Loading articles...</p>}

            {/* Show an error message if there was an error fetching data */}
            {error && <p>Error: {error.message}</p>}

            {/* Render articles if data is loaded successfully */}
            {!loading && !error && (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Jsn;
