class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.string :short_blurb, null: false
      t.text :description, null: false
      t.integer :funding_goal, null: false
      t.datetime :deadline, null: false
      t.integer :funding_raised, null: false
      t.integer :author_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
    add_index :projects, :title, unique: true
    add_index :projects, :author_id
    add_index :projects, :category_id
  end
end
