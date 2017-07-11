require "rails_helper"

RSpec.describe Api::V1::SchedulesController, type: :controller do
  describe "POST #create" do
    let(:user) { create(:user) }
    let(:place) { create(:place) }
    let(:schedule_params) { { schedule: attributes_for(:schedule) } }

    subject { post :create, params: schedule_params.merge(place_id: place.id) }

    it "create success" do
      authorize(user)
      expect(subject.status).to eq(201)
      expect(subject.body).to include_json(
        schedule: { price: 200_000, max_users: 4 }
      )
    end

    it "unauthorized return 401" do
      expect(subject.status).to eq(401)
    end

    it "return 422 when invalid params" do
      schedule_params[:schedule] = { meetup: "" }
      authorize(user)
      expect(subject.status).to eq(422)
    end
  end

  describe "GET #index" do
    let(:schedules) { create_list(:schedule, 3) }
    let(:schedule) { schedules.first }

    subject { get :index, params: { place_id: schedule.place.id } }

    it "return all schedules by place" do
      parsed_schedule = json_parsed(subject.body)[:schedules]
      expect(subject.status).to eq(200)
      expect(parsed_schedule.length).to eq(1)
      expect(subject.body).to include_json(
        schedules: [schedule.to_api_data(:show)]
      )
    end
  end

  describe "POST #join" do
    let(:place) { create(:place) }
    let(:schedule) { create(:schedule, place: place) }
    let(:user) { create(:user) }

    it "create user schedule" do
      auth_post user, :join, params: { place_id: place.id, id: schedule.id }
      expect(response.status).to eq(201)
      expect(response.body).to include_json(
        flash: "Joined the schedule"
      )
      expect(UserSchedule.count).to eq(1)
    end

    context "invalid" do
      subject { auth_post user, :join, params: { place_id: @schedule.place_id, id: @schedule.id } }

      it "own schedule" do
        @schedule = create(:schedule, user: user)
        expect(UserSchedule.count).to eq(0)
        expect(subject.status).to eq(422)
      end

      it "already join" do
        @schedule = create(:schedule, user_schedules: create_list(:user_schedule, 1, user: user))
        expect(subject.status).to eq(422)
      end

      it "limit max_users" do
        @schedule = create(:schedule, max_users: 1, user_schedules: create_list(:user_schedule, 1))
        expect(subject.status).to eq(422)
      end
    end
  end

  describe "#unjoin" do
    let!(:user) { create(:user) }
    let!(:user_schedule) { create(:user_schedule, user: user) }

    it "should destroy user_schedule" do
      expect {
        auth_delete user, :unjoin, params: { place_id: user_schedule.place.id, id: user_schedule.schedule.id }
      }.to change {
        UserSchedule.count
      }.from(1).to(0)
    end

    it "should return 404" do
      auth_delete user, :unjoin, params: { place_id: user_schedule.place.id, id: 99_999 }
      expect(response.status).to eq(404)
    end
  end
end
