import React from 'react';
import SingleDetail from '../utils/SingleDetail';
const InstantDriverDetails = (props) => {
const auth = JSON.parse(sessionStorage.getItem("auth"));
    
    return (
         <div className='flex mt-10 md:p-6 relative border-2 border-custom-grey w-full'>
            <h4 className="p-3 bg-white text-lg md:text-3xl font-medium absolute left-0  top-[-29px]">Instant Driver Details</h4>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full'>
                <SingleDetail
                    label='License ID'
                    details={props.state.license_id}
                />
                <SingleDetail
                    label='NIN'
                    details={auth.license_class}
                />
                <SingleDetail
                    label='Application Type'
                    details={auth.application_type}
                />
                <SingleDetail
                    label='Vehicle Type'
                    details={props.state.vehicle_type}
                />
                <SingleDetail
                    label='Country of issue'
                    details={props.state.country_of_issue}
                />
                <SingleDetail
                    label='Joined'
                    details={props.state.joined} />

                <SingleDetail
                    label='Last Renewal'
                    details={auth.issue_date}
                />
                <SingleDetail
                    label='Next Renewal'
                    details={auth.expiry_date}

                />
            </div>
        </div>
    )
}

export default InstantDriverDetails
