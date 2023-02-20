import React,{ useState, useEffect } from 'react';

function Tmdb({url}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseImageURL = "https://image.tmdb.org/t/p/w200/";

    useEffect(() => {
        async function fetchData () {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json.results.slice(0, 4)); //slice limte possible image
                // variable qui va aller chercher le reste des donnees
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[url]);

if (loading) {
    return <div>Chargement en cours ...</div>
}

if(error) {
    return <div> Erreur: {error.message}</div>
}
//return <pre>{JSON.stringify(data,null, 2)}</pre>

return (
<>
<div>   
    {data.map((movie) => (
        <div 
        key={movie.id} style={{ display: 'inline-block',marginRight:'16px' }}
        >          
        <h2>{movie.title}</h2>
        <p>Date de sortie: {movie.release_date}</p>          
        <img src={baseImageURL+movie.poster_path} alt="" />    
        // a changer ici movie.poster_path  pour mettre le bon champ de data    
        <p>{movie.overview}</p> 
        </div>
        ))}           
    </div>        
    </>    
    ); 
    
}
export default Tmdb; 