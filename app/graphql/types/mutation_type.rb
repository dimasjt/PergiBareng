Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation root"

  field :register, function: Functions::Register.new
  field :login, function: Functions::Login.new

  field :requestPlace, function: Functions::RequestPlace.new
  field :joinSchedule, function: Functions::JoinSchedule.new
end
