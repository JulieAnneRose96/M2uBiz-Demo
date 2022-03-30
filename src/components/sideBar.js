import '../styles/sideBar.css';



const header = () => {
    return (

        <>
        <div className='SB-mainContainer'>
            <div className='SB-container' >
                <div className='logo'>
                    <img src={require('../Images/M2U-Biz-Logo_Yellow.png')} />
                </div>

                <div className='SB-subContainer'>
                    <div className='SB-context'> Canvas Valley </div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Approvals</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Bill Payment</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Scheduled Transaction</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Bulk Payment</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Request Payment</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>View Statements</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Business Dashboard</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Apply</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Investment</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Forex counter</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Inbox</div>
                </div>

                <div className='SB-subContainer2'>
                    <div  className='SB-context2'>Settings</div>
                </div>

            </div>

            

        </div>

        </>
    )
}
export default header;