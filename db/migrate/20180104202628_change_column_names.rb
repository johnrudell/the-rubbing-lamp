class ChangeColumnNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :username, :name
    rename_column :users, :user_img_url, :img_url

    rename_column :categories, :category_name, :name
  end
end
