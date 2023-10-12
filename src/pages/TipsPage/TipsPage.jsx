import * as tipsAPI from "../../utilities/tips-api"
import { useEffect, useState } from "react";
import TipCard from "../../components/TipCard/TipCard";
import './TipsPage.css';

export default function TipsPage() {
      const [tips, setTips] = useState([])

      useEffect(function (){
        (async function() {
          const allTips = await tipsAPI.getAll()
          setTips(allTips)
        })()
      }, [])
      
    const tipsList = tips.map((tip,idx) => <TipCard tip={tip} tips={tips} setTips={setTips} key={idx} />)    

  return (
    <main className="TipsPage">
    <>
      <h1>Mommy's Little Travel Treasures</h1>
      {tips.length ? tipsList : "No Tips Yet"}
    
    </>
    </main>
    
  );
}






