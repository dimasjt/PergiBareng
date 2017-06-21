class AddProfileToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :name, :string
    add_column :users, :birthdate, :string
    add_column :users, :gender, :integer, default: 0
    add_column :users, :city, :string
  end
end
