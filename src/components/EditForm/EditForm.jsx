import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as tipsAPI from "../../utilities/tips-api"
import './EditForm.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TipsForm () {
    const [newTip,setNewTip] =useState({})
    const navigate=useNavigate()
    const params=useParams()
    useEffect(function(){
        async function getTip(){
            const tip=await tipsAPI.getTip(params.id)
            tip.date=tip.date.split('T')[0];
            setNewTip(tip)
        }
        getTip()
    },[])
    async function handleSubmit (evt) {
        evt.preventDefault()

        try {
            console.log(newTip, params.id)
            tipsAPI.editTips(newTip, params.id)
            navigate("/tips")
        }catch(err){
            console.log(err);
        }
    }
    function handleChange (evt) {
        const updateTip={...newTip,[evt.target.name]:evt.target.value}
        setNewTip(updateTip)
    }    
    return (
        <div className="TipsForm">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>
                        Location:
                    </label>
                    <input type="text" name="location" value={newTip.location} onChange={handleChange} required />
                    <label>
                        Days Spent on Trip:
                    </label>
                    <input type="Number" name="length" value={newTip.length} onChange={handleChange} required />
                    <label>
                        Tips For Other Moms:
                    </label>
                    <input type="text" name="notes" value={newTip.notes} onChange={handleChange} required />
                    <label>
                        Date:
                    </label>
                    <input type="date" name="date" value={newTip.date} onChange={handleChange} required />
                    <button type="submit">Edit Tip</button>
                </form>
        </div>
    )
}