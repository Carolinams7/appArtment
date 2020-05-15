import React from 'react';
import householdData from '../utils/householdData';
import { Link } from 'react-router-dom';


function HomeScreen(props){
    return(
       
        <div>
             <div classNameName="profile-info">
                <h2>Hi! = User</h2>
                    <p>You currently belong to:</p>
                        <ul classNameName="households">
                             { householdData.households.map(household => 
                                 <li>
                                    <div classNameName="houselhold">
                                        <Link to='/household'>{household.name}</Link>
                                    </div>
                                </li>)
}
                        </ul>
            </div>
 
        <div classNameName="join">
            <h3>Feeling FOMO?</h3>
            <form>
            <label>Join your roommates:</label>
            <input type="text" id="hname" name="hname" placeholder="Household name"/>
            <br/>
            <input type="submit" value="Join" classNameName="btn btn-warning"/>
        </form>
        <br/>
        <hr/>
    </div>

    <div classNameName="create">
        <form>
            <label>Create your own: </label>
            <input type="text" id="hname" name="hname" placeholder="Marcella St"/>
            <br/>
            <label>Add members:</label>
            <input type="text" id="hmember" name="hmember" placeholder="Emails here"/>
            <br/>
            <input type="submit" value="Create" classNameName="btn btn-warning"/>
            <br/>
        </form>
    </div>

    <footer className="footer">
       <img src="./images/bless.png" alt="slogan" width="200" height="20"></img>
   </footer>
   </div>
    )
}

export default HomeScreen;