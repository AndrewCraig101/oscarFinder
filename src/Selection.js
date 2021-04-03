
// import { useState } from 'react';

     
const Selection = ({handleSubmit, handleChange, yearChoice}) => {    

        return (

                <form onSubmit={handleSubmit}>
                        <label htmlFor="movieYears">Give me winners from this year:</label>
                        
                        <select
                                name="movieYears"
                                id="movieYears"
                                value={yearChoice}
                                onChange={handleChange}>
                                
                                <option className="selection" value="placeholder" >Choose a year</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                        </select>
                                               
                                <button>Give me winners!</button>
                </form>
                
        )
}

export default Selection;


