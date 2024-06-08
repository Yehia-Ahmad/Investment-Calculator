import { Fragment } from "react"
import Header from "./components/header/header"
import InvestmentDescription from "./components/investmentDescription/investmentDescription"
import InvestmentDescriptionTable from "./components/investmentDescriptionTable/investmentDescriptionTable"

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <InvestmentDescription />
        <InvestmentDescriptionTable />
      </main>
    </Fragment>
  )
}

export default App
