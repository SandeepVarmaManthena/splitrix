
const Dashboard = () => {
  return (
    <>
      <div className="dashboard_wrapper">
        <div className="top_section">
          <div className="name_section">
            <div className="client_name">
              <h3>Hello, Sandeep Varma</h3>
            </div>
            <div className="another_section">
              <div className="new_bill">
                <p><span style={{color: 'red', fontWeight : 'bold'}}>+</span> New Bill</p>
              </div>
              <div className="add_friends">
                <p><span style={{color: 'red', fontWeight : 'bold'}}>+</span> Add Friends</p>
              </div>
            </div>
          </div>
          <div className="amount_section">
            <div className="amount_owe">
              <p>Amount You Owe</p>
              <p>0<span style={{color: 'red'}}>$</span></p>
            </div>
            <div className="amount_owes_u">
              <p>Amount Owes You</p>
              <p>20<span style={{color: 'red'}}>$</span></p>
            </div>
          </div>
        </div>
        <div className="bottom_section">
          <div className="recent_transactions">
            <h2 style={{color : 'red', fontWeight : 'bold', margin : '0px'}}>Recent Transactions</h2>
          </div>
          <div className="transactions_wrapper">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
