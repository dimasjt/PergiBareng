Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation root"

  field :register, function: Functions::Register.new
end
