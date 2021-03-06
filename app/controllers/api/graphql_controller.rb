class Api::GraphqlController < Api::ApiController
  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    result = AppSchema.execute(query, variables: variables, context: context)
    render json: result
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def context
    {
      current_user: current_user,
      files: params[:files].empty? ? [] : params[:files]
    }
  end
end
