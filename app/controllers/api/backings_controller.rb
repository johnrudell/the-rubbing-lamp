class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)

    if @backing.save(backing_params)
      render json: @backing
    else
      render json: @backing.errors.full_messages, status: 442
    end
  end

  def backing_params
    params.require(:backing).permit(:amount, :backer_id, :reward_id)
  end
end
