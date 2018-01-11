class RemoveImgNameFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :img_url
  end
end
