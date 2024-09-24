import RecentTransactions from "./RecentTransactions"

const Recent = () => {
  return (
    <>
        <RecentTransactions
          month = {'December'}
        />
        <RecentTransactions
          month = {'November'}
        />
        <RecentTransactions
          month = {'October'}
        />
    </>
  )
}

export default Recent
