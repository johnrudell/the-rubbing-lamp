class Api::ProjectsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])
    @project = Project.new(project_params)
    @project.author = current_user

    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find(params[:id])
    params[:project][:rewards_attributes] = JSON.parse(params[:project][:rewards_attributes])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = current_user.projects.find(params[:id])
    @project.destroy!

    render :show
  end

  private
  def project_params
    params.require(:project).permit(
      :id, :title, :image, :short_blurb, :description, :funding_goal,
      :deadline, :funding_raised, :author_id, :category_id,
      rewards_attributes: [:title, :description, :amount, :delivery_date]
    )
  end
end
