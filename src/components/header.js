import '../styles/header.css';



const header = () => {
    return (

        <>
        <div className='h-mainContainer'>

            <div className='h-subContainer'>
                <div>
                    <div className='h-icon'>
                    <img src={require('../Images/headerIcon.png')} />
                    </div>
                </div>
                <div className='h-content'>
                    <div> Savings Account-i </div>
                    <div className='h-subcontent'> RM1,000,000.00 </div>
                </div>

                <div className='h-icon2'>
                    <img src={require('../Images/acc.png')} />
                </div>

                <div className='h-icon3'>
                 <img src={require('../Images/notification.png')} />
                </div>
            </div>

        </div>

        </>
    )
}
export default header;