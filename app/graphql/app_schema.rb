AppSchema = GraphQL::Schema.define do
  query Types::QueryType
  mutation Types::MutationType

  rescue_from ActiveRecord::RecordNotFound do
    "Not Found"
  end
end
