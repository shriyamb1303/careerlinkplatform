import React from 'react'
import './worksection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faCrown } from '@fortawesome/free-solid-svg-icons'

const WorkSection = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center main-work" style={{
            display: 'flex',
            margin: '40px 0px 30px',
        }}>
            <h3 style={{ color: '#0a2d94', margin: '4rem 0px', fontWeight: '500' }}>HOW IT WORKS</h3>
            <div className='d-flex align-itmes-center justify-content-center word-wrapper' style={{
                margin: '0px 112px',
                padding: '0px 15px',
                width: '930px',
                height: '735px',
            }}>
                <div className="wrap-one">
                    <h2>
                        Create your free <br />Candidate Profile
                    </h2>
                    <span>
                        Answer a few questions about yourself - it takes less than 5 minutes.
                    </span>
                    <p>
                        <FontAwesomeIcon icon={faTrophy} />What is your biggest achievement?
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCrown} />What does your ideal opportunity look like?
                    </p>
                </div>
                <div className="wrap-two">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WorkSection
