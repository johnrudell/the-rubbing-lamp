class Reward < ApplicationRecord
  validates :amount, numericality: true
  validates :title, :description, :amount, :project, :delivery_date, presence: true

  belongs_to :project, inverse_of: :rewards
  has_many :backings
  has_many :backers,
    through: :backings,
    source: :backer
end
