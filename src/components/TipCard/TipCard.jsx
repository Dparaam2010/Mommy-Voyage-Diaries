// import * as tipsAPI from "../../utilities/tips-api"

export default function TipCard ({ tip,tips,setTips,key }){
    const date = new Date(tip.createdAt).toLocaleString()

    return((
    <div className="TipCard">
      Created on: {date} <br />
      Location: {tip.location} <br />
      length of Trip: {tip.length} <br />
      Tips for other Moms: {tip.notes} <br />
      Date of Trip: {tip.date} <br />
    </div>
))}