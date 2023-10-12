import * as tipsAPI from "../../utilities/tips-api"
import './TipCard.css';
import { useNavigate } from "react-router-dom";

export default function TipCard ({ tip,tips,setTips }){
    const date = new Date(tip.createdAt).toLocaleString()
    const navigate=useNavigate()
    async function handleDelete(tipId) {
        await tipsAPI.deleteTips(tipId);
        setTips(tips.filter(tip => tip._id !== tipId));
      }

      function handleEdit(tipId) {
        navigate(`/updatetips${tipId}`)
      
      }

    return((
    <div className="TipCard">
      Created on: {date} <br />
      Location: {tip.location} <br />
      length of Trip: {tip.length} <br />
      Tips for other Moms: {tip.notes} <br />
      Date of Trip: {tip.date} <br />
      <button type="submit" onClick={() => handleDelete(`${ tip._id }`)}>Delete</button>
      <button type="submit" onClick={() => handleEdit(`${ tip._id }`)}>Edit</button>
    </div>
))}