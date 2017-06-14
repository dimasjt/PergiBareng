# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
  end

  factory :user_credential, class: User do
    email { Faker::Internet.email }
    password { "secr33t()" }
  end
end
