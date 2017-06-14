module ApiHelpers
  extend ActiveSupport::Concern

  included do
    helper_method :render_errors
  end

  # { errors: [], flash: [] }
  def render_errors(object)
    {
      errors: object.errors.messages,
      flash: object.errors.full_messages.try(:first)
    }
  end
end
