import Transaction from "./Transaction"
import Logo from '../assets/logo/logo-transparent-png.png'




const Dashboard = () => {
  return (
    <>
      <div className="dashboard_wrapper">
        <div className="top_section">
          <div className="name_section">
            <div className="client_name">
              <h3><span style={{color: 'red'}}>Hello,</span> Sandeep Varma Mantena</h3>
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
            <h2 style={{color : 'red', fontWeight : 'bold', margin : '5px'}}>Recent Transactions</h2>
          </div>
          <div className="transaction_wrapper">
            <Transaction
              date = {'Dec 25'}
              image = {Logo}
              group = {'Birthday'}
              transaction = {'Received'}
              amount = {'20'}
            />
            <Transaction
              date = {'Dec 18'}
              image = {Logo}
              group = {'Party'}
              transaction = {'Received'}
              amount = {'50'}
            />
            <Transaction
              date = {'Nov 20'}
              image = {Logo}
              group = {'Travel'}
              transaction = {'Settled'}
              amount = {'100'}
            />
            <Transaction
              date = {'Dec 18'}
              image = {Logo}
              group = {'Party'}
              transaction = {'Received'}
              amount = {'50'}
            />
            <Transaction
              date = {'Nov 20'}
              image = {Logo}
              group = {'Travel'}
              transaction = {'Settled'}
              amount = {'100'}
            />
            <Transaction
              date = {'Dec 18'}
              image = {Logo}
              group = {'Party'}
              transaction = {'Received'}
              amount = {'50'}
            />
            <Transaction
              date = {'Nov 20'}
              image = {Logo}
              group = {'Travel'}
              transaction = {'Settled'}
              amount = {'100'}
            />
            <Transaction
              date = {'Dec 18'}
              image = {Logo}
              group = {'Party'}
              transaction = {'Received'}
              amount = {'50'}
            />
            <Transaction
              date = {'Nov 20'}
              image = {Logo}
              group = {'Travel'}
              transaction = {'Settled'}
              amount = {'100'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
