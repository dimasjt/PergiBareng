Types::UserType = GraphQL::ObjectType.define do
  name "User"
  field :id, types.ID
  field :email, types.String do
    resolve ->(obj, args, ctx) {
      obj == [:current_user] ? obj.email : obj.hidden_email
    }
  end
  field :auth_token, types.String do
    resolve ->(obj, args, ctx) {
      obj == ctx[:current_user] ? obj.auth_token : nil
    }
  end
end
