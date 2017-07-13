AppSchema = GraphQL::Schema.define do
  query(Types::QueryType)

  rescue_from ActiveRecord::RecordNotFound do
    "Not Found"
  end
end
