require 'rails_helper'

RSpec.describe Api::V1::PlacesController, type: :controller do

  describe "GET #show" do
    let (:place) { create(:place) }

    it "returns http success" do
      get :show, params: { id: place.id }
      expect(response).to have_http_status(:success)
    end

    it "returns success" do
      get :show, params: { id: place.slug }
      expect(response).to have_http_status(:success)
    end

    it "should return place attributes" do
      get :show, params: { id: place.slug }
      expect(response.body).to include_json(
        place: {
          id: place.id,
          name: place.name,
          address: place.address
        }
      )
    end

    it "returns not found" do
      get :show, params: { id: 10000 }
      expect(response).to have_http_status(404)
      expect(response.body).to include_json(
        flash: "Record not found"
      )
    end
  end

end
