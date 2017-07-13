Mutations::Register = GraphQL::Relay::Mutation.define do
  name "Register"
  return_field :user, Types::UserType

  RegisterInput = GraphQL::InputObjectType.define do
    name "User params"
    input_field :email, !types.String
    input_field :password, !types.String
  end

  input_field :user, !types[!RegisterInput]

  resolve ->(obj, args, ctx) {
    User.create(args[:user])
  }
end
