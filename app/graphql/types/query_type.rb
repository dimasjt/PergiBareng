Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :places do
    type types[Types::PlaceType]
    argument :recommended, types.Boolean
    argument :request, types.Boolean
    resolve ->(obj, args, ctx) {
      if ctx[:current_user] && args[:request]
        ctx[:current_user].places
      else
        Place.all
      end
    }
  end

  field :place do
    type Types::PlaceType
    argument :slug, !types.String
    resolve ->(obj, args, ctx) {
      Place.friendly.find args[:slug]
    }
  end

  field :schedules do
    type types[Types::ScheduleType]
    argument :request, types.Boolean
    resolve ->(obj, args, ctx) {
      if ctx[:current_user]
        if args[:request]
          ctx[:current_user].schedules
        else
          ctx[:current_user].joined_schedules
        end
      end
    }
  end

  field :user do
    type Types::UserType
    argument :id, !types.ID
    resolve ->(obj, args, ctx) {
      User.find args["id"]
    }
  end

  field :profile do
    type Types::UserType
    resolve ->(obj, args, ctx) {
      ctx[:current_user]
    }
  end
end
