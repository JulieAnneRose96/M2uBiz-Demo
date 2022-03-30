import '../styles/featuredServices.css';



const featuredServices = () => {
    return (

        <>
        <div className='FS-pageContainer'>

            <div className='FS-pageTitle'>
                <div className='FS-title'>
                    <div>Featured Services</div>
                    <div className='FS-title2'>See All</div>
                </div>
                <div className='FS-subtitle'>Selected to match your business needs</div>
            </div>

            <div className='FS-mainContainer'>
                <div className='FS-container'>
                    <div className='FS-image'>
                        <img src={require('../Images/Image.png')} />
                    </div>

                    <div className='FS-content'>
                        <div>Short and Long term working Capital</div> 
                    </div>

                    <div className='FS-button'>
                        <div>Learn More</div>
                    </div>
                </div>

                <div className='FS-container'>
                    <div className='FS-image'>
                        <img src={require('../Images/Image3.png')} />
                    </div>

                    <div className='FS-content'>
                        <div>Excess Cash? Here's how to Make it Grow</div> 
                    </div>

                    <div className='FS-button'>
                        <div>Learn More</div>
                    </div>
                </div>

                <div className='FS-container'>
                    <div className='FS-image'>
                        <img src={require('../Images/Image2.png')} />
                    </div>

                    <div className='FS-content'>
                        <div>Project and Assets Financing</div> 
                    </div>

                    <div className='FS-button'>
                        <div>Learn More</div>
                    </div>
                </div>

                <div className='FS-container'>
                    <div className='FS-image'>
                        <img src={require('../Images/Image1.png')} />
                    </div>

                    <div className='FS-content'>
                        <div>Payment Solutions for Retailers</div> 
                    </div>

                    <div className='FS-button'>
                        <div>Learn More</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default featuredServices;