import React from 'react'
import Threeprops from './Threeprops'
import WorkSection from './WorkSection'
import StartingSection from './StartingSection'
import Carouselc from './Carouselc'

const MainContent = () => {
    return (
        <div>
            <StartingSection />
            <WorkSection />
            <Threeprops />
            <Carouselc />
            {/* <EndingSection /> */}
        </div>
    )
}

export default MainContent
