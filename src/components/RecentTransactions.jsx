import Logo from '../assets/logo/logo-transparent-png.png'
import Transaction from "./Transaction"


const RecentTransactions = (props) => {
  return (
    <>
        <div className="transactions_wrapper">
          <div className="transaction_month">
            <h2 style={{color : 'red', fontWeight : 'bold', margin : '5px'}}>{props.month}</h2>
          </div>
          <div className="transactions">
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
          </div>
        </div>
    </>
  )
}

export default RecentTransactions
