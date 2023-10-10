import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as tipsAPI from "../../utilities/tips-api"

export default function TipsForm () {
    const [newTip,setNewTip] =useState({})
    const navigate=useNavigate()

    async function handleSubmit (evt) {
        evt.preventDefault()

        try {
            tipsAPI.createTips(newTip)
            setNewTip({location:'',length:0,notes:'',date:new Date(),})
            navigate("/")
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
                    <button type="submit">Add Tip</button>
                </form>
        </div>
    )
}