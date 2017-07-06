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

  describe "POST #create" do
    let(:user) { create(:user) }

    subject { post :create, params: { place: @place_attrs } }

    it "unauthorized" do
      expect(subject.status).to eq(401)
    end

    context "authorized" do
      before(:each) { authorize(user) }

      it "create place" do
        @place_attrs = attributes_for(:place)
        expect(subject.status).to eq(201)
        expect(Place.count).to eq(1)
      end

      it "return errors" do
        @place_attrs = { place: {} }
        expect(subject.status).to eq(422)
      end
    end
  end
end
