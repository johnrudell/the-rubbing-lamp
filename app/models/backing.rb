# == Schema Information
#
# Table name: backings
#
#  id         :integer          not null, primary key
#  backer_id  :integer          not null
#  reward_id  :integer          not null
#  amount     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Backing < ApplicationRecord
  validates :amount, :backer_id, :reward_id, presence: true

  belongs_to :reward
  belongs_to :backer,
    foreign_key: :backer_id,
    class_name: :User
end
