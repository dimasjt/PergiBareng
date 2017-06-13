Rails.application.routes.draw do
  devise_for :users
  root "pages#index"

  namespace :api, defaults: { format: :json } do
  end

  get "*path", to: "pages#index"
end
