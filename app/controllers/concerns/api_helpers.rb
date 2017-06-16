module ApiHelpers
  extend ActiveSupport::Concern

  included do
    helper_method :render_errors
  end

  # { errors: [], flash: "" }
  def json_errors(object)
    {
      errors: object.errors.messages,
      flash: object.errors.full_messages.try(:first)
    }
  end

  def render_json(object, **options)
    if options[:flash]
      object.merge!(flash: options[:flash], errors: [options[:flash]])
    end

    render json: object, status: options[:status] || 200
  end
end
