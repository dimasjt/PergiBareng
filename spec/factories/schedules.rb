# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :schedule do
    association :user, factory: :user
    association :place, factory: :place

    meetup { Faker::Address.street_address }
    start_date { Time.zone.now + 3.days }
    end_date { Time.zone.now + 5.days }
    max_users 4
    price 200_000
  end
end
