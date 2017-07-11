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

  def json_show(object)
    { controller_name.singularize => object.to_api_data(:show) }
  end

  def object_json(object)
    if object.try(:id).present?
      { object.class.name.underscore => object.to_api_data(:show) }
    elsif !object.is_a? Hash
      { object.name.underscore.pluralize => object.to_api_data(:index) }
    else
      object
    end
  end

  def render_json(object, **options)
    if options[:flash]
      object[:flash] = options[:flash]

      if options[:status] >= 400
        object[:errors] = [options[:flash]]
      end
    end

    render json: object_json(object), status: options[:status] || 200
  end
end
