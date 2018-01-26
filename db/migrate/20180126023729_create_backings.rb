class CreateBackings < ActiveRecord::Migration[5.1]
  def change
    create_table :backings do |t|
      t.integer :amount, null: false
      t.integer :reward_id, null: false
      t.integer :backer_id, null: false

      t.timestamps
    end
  end
end
