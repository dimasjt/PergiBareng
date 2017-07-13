Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :places do
    type types[Types::PlaceType]
    argument :recommended, types.Boolean
    resolve -> (obj, args, ctx) {
      Place.all
    }
  end

  field :place do
    type Types::PlaceType
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      Place.find args["id"]
    }
  end

  field :user do
    type Types::UserType
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      User.find args["id"]
    }
  end
end
