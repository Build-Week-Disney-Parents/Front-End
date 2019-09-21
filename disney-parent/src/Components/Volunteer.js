import React from 'react';
import SwitchUser from './SwitchUser';



function Volunteer() {
    return (
        <div>
            <SwitchUser />
            <form>
                <input type="text" placeholder='Type of service'/>
            </form>
        </div>
    )
}

export default Volunteer