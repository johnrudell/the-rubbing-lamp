class AddDeliveryToRewards < ActiveRecord::Migration[5.1]
  def change
    add_column :rewards, :delivery_date, :date
  end
end
