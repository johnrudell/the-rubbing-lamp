Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :categories, only: [:index, :show]
    resources :projects, except: [:edit, :new] do
      resources :backings, only: [:create]
    end
  end

end
