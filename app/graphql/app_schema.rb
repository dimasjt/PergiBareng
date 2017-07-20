AppSchema = GraphQL::Schema.define do
  query Types::QueryType
  mutation Types::MutationType

  rescue_from ActiveRecord::RecordNotFound do
    "Not Found"
  end

  rescue_from ActiveRecord::RecordInvalid do |message|
    message.message
  end
end
