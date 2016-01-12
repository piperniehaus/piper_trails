class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.string :name
      t.decimal :hiking_distance
      t.integer :trailhead_id

      t.timestamps
    end
  end
end
