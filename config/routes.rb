Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/api/graphql"
  end

  root "pages#index"

  devise_for :users, only: [:confirmations]

  namespace :api, defaults: { format: :json } do
    post "/graphql", to: "graphql#execute"
  end

  get "*path", to: "pages#index"
end
