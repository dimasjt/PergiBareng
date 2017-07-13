Types::ImageType = GraphQL::ObjectType.define do
  name "ImageType"

  # TODO refactor me
  field :thumb, types.String do
    resolve ->(obj, args, ctx) { obj.thumb.url }
  end

  field :medium, types.String do
    resolve ->(obj, args, ctx) { obj.medium.url }
  end

  field :large, types.String do
    resolve ->(obj, args, ctx) { obj.large.url }
  end

  field :original, types.String do
    resolve ->(obj, args, ctx) { obj.url }
  end
end
