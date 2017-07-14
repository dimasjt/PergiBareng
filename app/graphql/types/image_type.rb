Types::ImageType = GraphQL::ObjectType.define do
  name "ImageType"

  %i[thumb medium large original].each do |version|
    field version, types.String do
      resolve ->(obj, args, ctx) {
        version == :original ? obj.url : obj.send(version).url
      }
    end
  end
end
