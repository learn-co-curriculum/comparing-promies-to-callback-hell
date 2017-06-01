class CounterController < ApplicationController
  def show
    id = params[:id]
    sleep(0.1.second)
    render json: {number:id}
  end
end
