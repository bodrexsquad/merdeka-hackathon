class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user?, :except => [:index, :post_to_fb]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end
  
  def post_to_fb
    
    @auth = session[:user_auth]
    
    

  end

end
