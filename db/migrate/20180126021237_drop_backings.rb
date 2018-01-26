class DropBackings < ActiveRecord::Migration[5.1]
  def change
    drop_table :backings
  end
end
