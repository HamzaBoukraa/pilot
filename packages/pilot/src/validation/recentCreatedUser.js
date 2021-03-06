import moment from 'moment-timezone'
import {
  anyPass,
  complement,
  pathOr,
} from 'ramda'

const userCreatedLessThan30DaysAgo = ({ user }) => {
  const createdAtDaysDiff = moment().diff(user.date_created, 'days')
  return createdAtDaysDiff < 30
}

const companyNotTransacted = complement(pathOr(true, ['company', 'alreadyTransacted']))

const isRecentlyCreatedUser = anyPass([
  companyNotTransacted,
  userCreatedLessThan30DaysAgo,
])

export default isRecentlyCreatedUser
