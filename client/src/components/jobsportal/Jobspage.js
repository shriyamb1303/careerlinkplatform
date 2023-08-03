import React from 'react'
import { jobArray } from './JobRolesarray'
import './jobsp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSuitcase, faBookmark, faShareNodes, faMoneyBill,
    faClock,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

const Jobspage = () => {
    return (
        <div className='job-main d-flex flex-column justify-content-between align-items-center container-fluid'>
            {jobArray.map((job) => (
                <section className='job-section'>

                    <div className="job-role-name d-flex">
                        <div className="company-name d-flex align-items-center">
                            <FontAwesomeIcon icon={faSuitcase} style={{ color: 'grey' }} />
                            <div className="names-role">
                                <h3>
                                    {job.companyRole}
                                </h3>
                                <p>
                                    {job.companyName}
                                </p>
                            </div>
                        </div>
                        <div className="job-bookmark d-flex justify-content-center">
                            <FontAwesomeIcon icon={faBookmark} />
                            <FontAwesomeIcon icon={faShareNodes} />
                        </div>
                    </div>

                    <div className="job-skills d-flex justify-content-between">
                        {job.skillsRequired.map(skill => (
                            <p>{skill}</p>
                        ))}
                    </div>

                    <div className="job-details-info d-flex justify-content-between">
                        <div className="stipend">
                            <section className='d-flex'>
                                <FontAwesomeIcon icon={faMoneyBill} />
                                <h5>Stipend per month</h5>
                            </section>
                            <p>{job.stipendPerMonth}</p>
                        </div>
                        <div className="job-duration">
                            <section className='d-flex'>
                                <FontAwesomeIcon icon={faClock} />
                                <h5>Duration</h5>
                            </section>
                            <p>{job.duration}</p>
                        </div>
                        <div className="job-location">
                            <section className='d-flex'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <h5>Office Location</h5>
                            </section>
                            <p>{job.officeLocation}</p>
                        </div>
                    </div>

                </section>
            ))}
        </div>
    )
}

export default Jobspage
