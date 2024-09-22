import Logo from '../assets/logo/logo-transparent-png.png'


const Transaction = (props) => {
  return (
    <>
        <div className="transaction_main">
            <div className="date_of_transaction">
                <p>{props.date}</p>
            </div>
            <div className="group_image">
                <img src={props.image} alt="" style={{width : '100px', marginTop : '10px'}}/>
            </div>
            <div className="group_name">
                <p>{props.group}</p>
            </div>
            <div className="money_transaction">
                <p>{props.transaction === "Received" ? <p>Received</p> : <p>Settled</p>}</p>
                <p> - </p>
                <p><span style={{color: 'red'}}>$</span>{props.amount}</p>
            </div>
        </div>
    </>
  )
}

export default Transaction
