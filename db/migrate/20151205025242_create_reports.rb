class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :entity
      t.string :locations
      t.text :reason
      t.date :date_of_incident
      t.float :cost
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
