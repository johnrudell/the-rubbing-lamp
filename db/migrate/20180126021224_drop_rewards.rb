class DropRewards < ActiveRecord::Migration[5.1]
  def change
    drop_table :rewards
  end
end