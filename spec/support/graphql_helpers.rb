module GraphQLHelpers
  def execute(query)
    AppSchema.execute(query)
  end
end
