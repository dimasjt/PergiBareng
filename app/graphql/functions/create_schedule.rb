class Functions::CreateSchedule < GraphQL::Function
  Types::CreateScheduleInput = GraphQL::InputObjectType.define do
    name "create schedule"

    argument :meetup, !types.String
    argument :max_users, !types.Int
    argument :start_date, !types.String
    argument :end_date, !types.String
    argument :price, !types.Int
  end

  argument :schedule, !Types::CreateScheduleInput
  argument :place_id, !types.ID

  type Types::ScheduleType

  def call(obj, args, ctx)
    if ctx[:current_user]
      place = Place.find(args[:place_id])

      place.schedules.create!(args[:schedule].to_h.merge(user: ctx[:current_user]))
    end
  end
end
