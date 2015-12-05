class EntitiesController < ApplicationController
  def index
    render json: Entity.all.pluck(:name).to_json
  end
end
