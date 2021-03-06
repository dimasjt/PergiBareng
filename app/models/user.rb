# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  avatar                 :string
#  name                   :string
#  birthdate              :string
#  gender                 :integer          default("other")
#  city                   :string
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#

class User < ApplicationRecord
  GENDER = %w[other male female].freeze
  BIRTHDATE_REGEX = %r(\d{2}\/\d{2}\/\d{4})

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :lockable

  mount_uploader :avatar, ImageUploader

  has_many :places, dependent: :destroy
  has_many :schedules, dependent: :destroy
  has_many :user_schedules, dependent: :nullify
  has_many :joined_schedules, through: :user_schedules, source: "schedule"

  enum gender: GENDER

  validates :name, :birthdate, :gender, :city, presence: true, on: :update
  validates :birthdate, format: { with: BIRTHDATE_REGEX }, on: :update

  def self.secret_token
    ENV["JWT_SECRET"]
  end

  def self.authenticate(token)
    decoded = JWT.decode(token, User.secret_token).try(:first)
    User.find(decoded["id"])
  rescue JWT::DecodeError
    nil
  end

  def token_attribute
    attributes.select { |key| %w[id email].include? key }
  end

  def auth_token
    JWT.encode(token_attribute, User.secret_token)
  end

  def hidden_email
    email.first + "*" * 10 + email.last
  end
end
