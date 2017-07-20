Types::AuthType = GraphQL::InputObjectType.define do
  name "AuthType"

  argument :email, !types.String
  argument :password, !types.String
end
