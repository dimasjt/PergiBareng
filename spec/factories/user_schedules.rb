# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user_schedule do
    association :user, factory: :user
    association :schedule, factory: :schedule
  end
end
