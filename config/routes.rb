Rails.application.routes.draw do
  root "pages#index"

  devise_for :users, only: []

  namespace :api, defaults: { format: :json } do
    devise_scope :user do
      post "register", to: "users/registrations#create"
      post "login", to: "users/sessions#create"
      get "confirmations", to: "users/confirmations#show"
    end

    namespace :v1 do
      resources :places, except: [:new, :edit] do
        resources :schedules, only: :create
      end
    end
  end

  get "*path", to: "pages#index"
end
