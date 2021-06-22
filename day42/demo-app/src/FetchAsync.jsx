import {useEffect, useState} from "react";

function FetchAsync() {
    const [activitySuggestion, setActivitySuggestion] = useState(null);
   
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return setActivitySuggestion(data);
            
        } catch(err) {
            console.log(err);
        }
        
    }
   
    useEffect(() => {
      const url = 'https://www.boredapi.com/api/activity';
      fetchData(url);
    }, []);

    if(activitySuggestion === null){
        return (
            <h2>Loading data...</h2>
        );
    }
   
    console.log(activitySuggestion);
    return (
      <div className="activityContainer">
        <span>{activitySuggestion.activity}</span>
      </div>
    );
  }
   
  export default FetchAsync;