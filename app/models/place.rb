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

  searchkick locations: [:location]

  belongs_to :user
  has_many :schedules

  validates :name, :description, :address, presence: true

  def seach_data
    {
      id: id,
      name: name,
      description: description,
      location: { lat: latitude, lon: longitude },
      user_id: user_id
    }
  end

  private

  def slug_candidates
    [
      :name,
      [:name, :id]
    ]
  end
end
