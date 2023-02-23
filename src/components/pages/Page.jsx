import React from 'react'
import JsonData from '../../JsonData';
import Graf from '../molecules/Graf';
import Navmenu from '../molecules/Navmenu'
import Progresbar from '../molecules/Progresbar';
import Comparition from '../organisms/Comparition';
import Members from '../organisms/members';
import SlibarContent from '../organisms/SlibarContent';


const Page = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-1 mt-4  '>
                        <SlibarContent/>

                    </div>
        
                    <div className='col-sm-11 '>
                    <div className='row'>
                    <Navmenu />
                    <JsonData />
                    <div className='row m-auto'>
                        <div className='col-sm-11m-auto '>

                    <Graf />
                        </div>
                    </div>
                    
                    <div className="col-sm-6">

                        <Members />
                        {/* <Comparition/> */}

                    </div>
                    <div className='col-sm-6'>

                        <Comparition />

                    </div>

                </div>
                    </div>
              
                </div>
            </div>

        </>
    )
}

export default Page