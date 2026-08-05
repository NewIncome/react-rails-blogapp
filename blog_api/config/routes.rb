# frozen_string_literal: true

Rails.application.routes.draw do
  # API routes should be in /api/v1
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end

# ===---  Routes of namespace :api { namespace :v1 { resources :posts } }  ---===
#             Prefix  Verb    URI Pattern                  Controller#Action
#       api_v1_posts  GET     /api/v1/posts(.:format)      api/v1/posts#index
#                     POST    /api/v1/posts(.:format)      api/v1/posts#create
#        api_v1_post  GET     /api/v1/posts/:id(.:format)  api/v1/posts#show
#                     PATCH   /api/v1/posts/:id(.:format)  api/v1/posts#update
#                     PUT     /api/v1/posts/:id(.:format)  api/v1/posts#update
#                     DELETE  /api/v1/posts/:id(.:format)  api/v1/posts#destroy
# rails_health_check  GET     /up(.:format)                rails/health#show