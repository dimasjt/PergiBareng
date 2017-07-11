class Api::V1::UsersController < Api::V1::ResourcesController
  def schedules
    @schedules = current_user.schedules
    render_json @schedules, status: 200
  end

  def user_schedules
    @user_schedules = current_user.user_schedules
    render_json @user_schedules, status: 200
  end
end
