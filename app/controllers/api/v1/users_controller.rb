class Api::V1::UsersController < Api::V1::ResourcesController
  def schedules
    render_json current_user.schedules, status: 200
  end

  def user_schedules
    render_json current_user.user_schedules, status: 200
  end

  def places
    render_json current_user.places, status: 200
  end
end
