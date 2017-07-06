class Api::V1::PlacesController < Api::V1::ResourcesController
  skip_before_action :authenticate_user!, only: %w[index show]

  def create
    @place = current_user.places.new(place_params)

    if @place.save
      render_json(json_show(@place), flash: "Success created place", status: 201)
    else
      render_json(json_errors(@place), status: 422)
    end
  end

  def update
    respond_to do |format|
      if @place.update(place_params)
        format.html { redirect_to @place, notice: 'Place was successfully updated.' }
        format.json { render :show, status: :ok, location: @place }
      else
        format.html { render :edit }
        format.json { render json: @place.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @place.destroy
    respond_to do |format|
      format.html { redirect_to api_v1_places_url, notice: 'Place was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_place
      @place = Place.find(params[:id])
    end

    def place_params
      params.fetch(:place, {}).permit(:name, :description, :image, :address, :latitude, :longitude)
    end
end
