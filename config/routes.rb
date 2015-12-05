Rails.application.routes.draw do
  get 'entities/index'

  resources :reports
  resources :users
  root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
  
  
  get 'fb/publish' => 'users#post_to_fb', :as => :fb_publish
  
  get 'entities' => 'entities#index', :as => :entities
end
