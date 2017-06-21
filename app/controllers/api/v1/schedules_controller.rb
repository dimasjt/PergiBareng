class Api::V1::SchedulesController < Api::V1::ResourcesController
  before_action :authenticate_user_from_token!, only: :create
  before_action :set_place

  def index
    @resources = @place.schedules
    super
  end

  def create
    @schedule = @place.schedules.new(create_schedule_params.merge(user: current_user))

    if @schedule.save
      render_json json_show(@schedule), flash: "Schedule created.", status: 201
    else
      render_json json_errors(@schedule), status: 422
    end
  end

  private

  def set_place
    @place = Place.friendly.find(params[:place_id])
  end

  def create_schedule_params
    params
      .require(:schedule)
      .permit(:meetup, :start_date, :end_date, :max_users, :price)
  end
end
