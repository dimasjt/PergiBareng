Types::PlaceType = GraphQL::ObjectType.define do
  name "Place"

  field :id, types.ID
  field :name, types.String
  field :description, types.String
  field :address, types.String
  field :slug, types.String
  field :latitude, types.Float
  field :longitude, types.Float
  field :image, Types::ImageType

  field :schedules do
    type types[Types::ScheduleType]
    argument :size, types.Int, default_value: 10
    resolve ->(place, args, ctx) do
      place.schedules.limit(args[:size])
    end
  end
end
