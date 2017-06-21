# == Schema Information
#
# Table name: schedules
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  place_id   :integer
#  meetup     :text
#  start_date :datetime
#  end_date   :datetime
#  max_users  :integer          default(0)
#  days       :integer          default(0)
#  price      :integer          default(0)
#  status     :integer          default("pending")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_schedules_on_place_id  (place_id)
#  index_schedules_on_user_id   (user_id)
#

class Schedule < ApplicationRecord
  include HasApi

  STATUS = %w(pending available full ongoing completed)

  belongs_to :user
  belongs_to :place

  before_save :set_days

  enum status: STATUS

  validates :user_id, :place_id, :meetup, :start_date, :end_date, presence: true

  def self.show_api_attributes
    %w(id meetup days price status max_users start_date end_date)
  end

  def self.index_api_attributes
    show_api_attributes
  end

  private

  def set_days
    self.days = (end_date.to_date - start_date.to_date).floor
  end
end
