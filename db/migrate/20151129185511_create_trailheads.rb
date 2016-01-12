class CreateTrailheads < ActiveRecord::Migration
  def change
    create_table :trailheads do |t|
      t.string :name

      t.timestamps
    end
  end
end
