class Functions::Register < GraphQL::Function
  RegisterInput = GraphQL::InputObjectType.define do
    name "RegisterInput"

    argument :email, !types.String
    argument :password, !types.String
  end

  argument :user, !RegisterInput

  type Types::UserType

  def call(obj, args, ctx)
    User.create!(
      email: args[:user][:email],
      password: args[:user][:password]
    )
  end
end
