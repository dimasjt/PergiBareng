module GraphQLHelpers
  def execute(query, variables: nil, context: nil)
    AppSchema.execute(query, variables: variables, context: context)
  end
end
