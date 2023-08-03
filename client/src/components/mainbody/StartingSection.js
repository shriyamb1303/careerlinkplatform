import React from 'react'
import './style.css'
import './utilities.css'

const StartingSection = () => {
    return (
        <div>
            <section class="showcase">
                <div class="container grid">
                    <div class="showcase-text">
                        <h1>Unlock Your Career Potential: Find Your Perfect Match with CareerLink!</h1>
                        <p>CareerLink is your gateway to success, connecting top talents with world-class opportunities. Discover your dream job or internship today!</p>
                        <a class="btn btn-outline">Read More</a>
                    </div>

                    <div class="showcase-form card">
                        <h2>Your profile</h2>
                        <form>
                            <div class="form-control">
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div class="form-control">
                                <input type="text" name="company" placeholder="Company Name" required />
                            </div>
                            <div class="form-control">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <input type="submit" value="Send" class="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default StartingSection
