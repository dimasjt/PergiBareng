module HasApi
  extend ActiveSupport::Concern

  module ClassMethods
    def to_api_data(version = :index, nested_namespace = nil)
      exposed_attributes = send(class_method_name(version))
      all.to_a.map do |o|
        hash_api(o, exposed_attributes, nested_namespace)
      end
    end

    def class_method_name(version)
      [version, "api_attributes"].compact.join("_")
    end

    def hash_api(resource, exposed_attributes, nested_namespace)
      Hash[*exposed_attributes.flat_map do |a|
        value = resource.send(a)
        [key_name(a), api_value(value, nested_namespace)]
      end]
    end

    def key_name attr
      attr.to_s.sub(/_api_attribute.*$/, "")
    end

    def api_attributes
      unless @api_attributes
        @api_attributes = column_names.map(&:to_sym)
        @api_attributes.delete(:id) if @api_attributes.include? :uid
      end
      @api_attributes
    end

    def index_api_attributes
      api_attributes
    end

    def nested_api_attributes
      index_api_attributes
    end

    def image_nested(value)
      keys = ImageUploader.versions.keys
      Hash[*keys.map do |key|
        [key, value.send(key).url]
      end.push([:original, value.url]).flatten(1)]
    end

    def api_value(value, nested_namespace = nil)
      if value.instance_of? ImageUploader
        image_nested(value)
      elsif value.respond_to?(:to_api_data) && !value.is_a?(Array)
        value.to_api_data(nested_namespace || :nested)
      else
        value
      end
    end
  end

  def to_api_data(version = nil, nested_namespace = nil)
    exposed_attributes = self.class.send(self.class.class_method_name(version))
    self.class.hash_api(self, exposed_attributes, nested_namespace)
  end
end
