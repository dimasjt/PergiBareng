class Functions::Register < GraphQL::Function
  argument :user, !Types::AuthType

  type Types::UserType

  def call(obj, args, ctx)
    User.create!(args[:user].to_h)
  end
end
