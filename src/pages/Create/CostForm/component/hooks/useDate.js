

import moment from 'moment/moment'
import 'moment/locale/nl';
import React from 'react'

export const useDate = () => {

  const date = moment().locale('nl').format('DD-MMM-YY')

  return {date}

}
