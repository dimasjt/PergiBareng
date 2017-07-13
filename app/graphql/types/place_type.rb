Types::PlaceType = GraphQL::ObjectType.define do
  name "Place"
  field :name, types.String
  field :description, types.String
end
