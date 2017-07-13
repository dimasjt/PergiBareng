Types::PlaceType = GraphQL::ObjectType.define do
  name "Place"

  field :id, types.ID
  field :name, types.String
  field :description, types.String
  field :address, types.String
  field :slug, types.String
  field :latitude, types.Int
  field :longitude, types.Int
  field :image, Types::ImageType
end
