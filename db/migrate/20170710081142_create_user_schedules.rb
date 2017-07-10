class CreateUserSchedules < ActiveRecord::Migration[5.1]
  def change
    create_table :user_schedules do |t|
      t.belongs_to :user
      t.belongs_to :schedule

      t.timestamps
    end
  end
end
