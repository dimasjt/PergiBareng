# == Schema Information
#
# Table name: places
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  latitude    :decimal(10, 6)
#  longitude   :decimal(10, 6)
#  address     :text
#  image       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  slug        :string
#
# Indexes
#
#  index_places_on_slug     (slug) UNIQUE
#  index_places_on_user_id  (user_id)
#

class Place < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: %i[slugged finders]

  mount_uploader :image, ImageUploader

  include HasApi

  belongs_to :user
  has_many :schedules

  validates :name, :description, :address, presence: true

  def self.index_api_attributes
    %w[id name description image slug]
  end

  def self.show_api_attributes
    index_api_attributes + %w[latitude longitude address created_at]
  end

  def self.nested_api_attributes
    index_api_attributes
  end

  private

  def slug_candidates
    [
      :name,
      [:name, :id]
    ]
  end
end
