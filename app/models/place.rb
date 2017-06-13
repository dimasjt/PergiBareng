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
#

class Place < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :name, :description, :address, presence: true
end
