Rails.application.routes.draw do
  root "pages#index"

  # devise_for :users, controllers: {
  #   registrations: "api/users/registrations",
  #   sessions: "api/users/sessions"
  # }

  devise_scope :user do
    post "/api/login", to: "api/users/sessions#create"
    post "/api/register", to: "api/users/registrations#create"
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
    end
  end

  get "*path", to: "pages#index"
end
