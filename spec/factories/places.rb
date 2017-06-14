# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :place do
    ignore do
      image_path { Rails.root.join("spec", "fixtures", "images", "example1.jpg") }
      uploaded_image { Rack::Test::UploadedFile.new(image_path, "image/jpeg") }
    end

    name { Faker::Book.title }
    description { Faker::Lorem.paragraph(2) }
    latitude { Faker::Address.latitude }
    longitude { Faker::Address.latitude }
    address { Faker::Address.street_address }

    association :user, factory: :user
    image { uploaded_image }
  end
end
