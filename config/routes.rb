Rails.application.routes.draw do
  root "pages#index"

  devise_for :users, only: []

  namespace :api, defaults: { format: :json } do
    devise_scope :user do
      post "register", to: "users/registrations#create"
      post "login", to: "users/sessions#create"
    end

    namespace :v1 do
    end
  end

  get "*path", to: "pages#index"
end
