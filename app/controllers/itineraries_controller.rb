class ItinerariesController < ApplicationController
  def index
    if search_params
      @itineraries = Itinerary.where(search_params)
    else
      @itineraries = Itinerary.all
    end
    respond_to do |format|
      format.js {
      }
      format.json { render json: {status: 'OK'} }
      format.html {}
    end
  end
  private
  def search_params
    if params[:search_params]
      search_params_js = params[:search_params].permit(:name, :hikingDistance)
      Hash.new.tap do |hash|
        search_params_js.each_pair do |key, value|
          field_name = key.underscore
          type = Itinerary.columns.select{|c| c.name == field_name}.first.type
          value = if type == :decimal || type == :float
            value.to_f
          elsif type == :integer
            value.to_i
          else
            value
          end
          hash[field_name] = value
        end
      end
    end
  end
end
