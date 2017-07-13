class Functions::RequestPlace < GraphQL::Function
  PlaceInput = GraphQL::InputObjectType.define do
    name "RequestPlace"

    argument :name, !types.String
    argument :description, !types.String
    argument :address, !types.String
    argument :latitude, !types.String
    argument :longitude, !types.String
  end

  argument :place, !PlaceInput

  type Types::PlaceType

  def call(obj, args, ctx)
    Place.create!(args[:place])
  end
end
