Types::ScheduleType = GraphQL::ObjectType.define do
  name "ScheduleType"

  field :id, types.ID
  field :meetup, types.String
  field :price, types.Int
  # NOTE Refactor this
  field :start_date, types.Int do
    resolve ->(schedule, args, ctx) { schedule.start_date.utc.to_i }
  end
  field :end_date, types.Int do
    resolve ->(schedule, args, ctx) { schedule.end_date.utc.to_i }
  end
  field :max_users, types.Int
  field :days, types.Int
  field :status, types.String
end
