require "rails_helper"

RSpec.describe Place, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:address) }

  describe "graphql" do
    describe "get places" do
      let!(:places) { create_list(:place, 2) }
      let(:query_places) {
        %({
          places {
            id
          }
        })
      }

      it "return places" do
        result = execute(query_places)["data"]["places"]
        expect(result.count).to eq(2)
      end
    end

    describe "get place" do
      let(:schedules) { build_list(:schedule, 2) }
      let!(:place) { create(:place, schedules: schedules) }
      let(:query) {
        %({
          place(slug: "#{place.slug}") {
            id
            name
            description
            latitude
            longitude
            address
            image {
              original
              thumb
              medium
              large
            }
            schedules {
              id
              meetup
              max_users
              price
              start_date
              end_date
              days
              status
            }
          }
        })
      }

      it "return place" do
        result = execute(query)["data"]["place"].deep_symbolize_keys
        expect(result).to eq(
          id: place.id.to_s,
          name: place.name,
          description: place.description,
          latitude: place.latitude.to_f,
          longitude: place.longitude.to_f,
          address: place.address,
          image: {
            original: place.image.url,
            thumb: place.image.thumb.url,
            medium: place.image.medium.url,
            large: place.image.large.url
          },
          schedules: place.schedules.map do |s|
            {
              id: s.id.to_s,
              meetup: s.meetup,
              max_users: s.max_users,
              price: s.price,
              start_date: s.start_date.utc.to_i,
              end_date: s.end_date.utc.to_i,
              days: s.days,
              status: s.status
            }
          end
        )
      end
    end

    describe "create place" do
      let!(:user) { create(:user) }
      let(:mutation) {
        %(
          mutation requestPlace($place: PlaceInput) {
            requestPlace(place: $place) {
              id
              name
            }
          }
        )
      }
      let(:variables) { attributes_for(:place) }

      it "create place" do
        result = execute(mutation, context: [variables.delete(:image)], variables: { place: variables })
      end
    end
  end
end
