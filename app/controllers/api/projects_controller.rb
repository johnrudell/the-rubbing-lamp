class Api::ProjectsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy!

    render :show
  end

  private

  def project_params
    params.require(:project).permit(:id, :title, :image, :short_blurb, :description, :funding_goal, :deadline, :funding_raised, :author_id, :category_id)
  end
end
