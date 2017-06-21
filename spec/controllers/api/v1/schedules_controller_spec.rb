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
end
