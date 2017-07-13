class Functions::JoinSchedule < GraphQL::Function
  argument :schedule_id, !types.ID

  type Types::ScheduleType

  def call(obj, args, ctx)
    schedule = Schedule.find(args[:schedule_id])

    ctx[:current_user].user_schedules.create(schedule: schedule)
    schedule
  end
end
