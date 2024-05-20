Rails.application.routes.draw do
  resources :projects
  root "rylanbaun#index"

  get "/rylanbaun", to: "rylanbaun#index"
end
