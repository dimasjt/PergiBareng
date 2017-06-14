# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password { "secr33t()" }
    confirmed_at Time.now
  end

  factory :user_credential, class: User do
    email { Faker::Internet.email }
    password { "secr33t()" }
  end
end
