import { gql } from "react-apollo"

export const getPlace = gql`
  query place {
    place(slug: "the-daffodil-sky") {
      id
      name
      description
      image {
        large
      }
      schedules {
        id
        meetup
        start_date
        end_date
        max_users
        price
      }
    }
  }
`
