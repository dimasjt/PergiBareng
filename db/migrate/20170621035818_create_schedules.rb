class CreateSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :schedules do |t|
      t.integer :user_id
      t.integer :place_id
      t.text :meetup
      t.datetime :start_date
      t.datetime :end_date
      t.integer :max_users, default: 0
      t.integer :days, default: 0
      t.integer :price, default: 0
      t.integer :status, default: 0

      t.timestamps
    end
    add_index :schedules, :user_id
    add_index :schedules, :place_id
  end
end
