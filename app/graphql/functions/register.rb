class Functions::Register < GraphQL::Function
  argument :user, !Types::AuthType

  type Types::UserType

  def call(obj, args, ctx)
    User.create!(
      email: args[:user][:email],
      password: args[:user][:password]
    )
  end
end
