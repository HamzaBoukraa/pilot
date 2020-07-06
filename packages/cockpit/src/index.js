import { applySpec } from 'ramda'
import balance from './balance'
import bulkAnticipations from './bulkAnticipations'
import business from './business'
import paymentLinks from './paymentLinks'
import proxy from './proxy'
import user from './user'
import company from './company'
import invites from './invites'
import recipient from './recipient'
import transactions from './transactions'
import withdraw from './withdraw'

const cockpit = applySpec({
  balance,
  bulkAnticipations,
  business,
  transactions,
  user,
  company,
  invites,
  paymentLinks,
  recipient,
  withdraw,
})

export default proxy(cockpit)
