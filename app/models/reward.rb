class Reward < ApplicationRecord
  validates :amount, numericality: true
  validates :title, :description, :amount, :project_id, presence: true

  belongs_to :project, inverse_of: :rewards
  has_many :backings
  has_many :backers,
    through: :backings,
    source: :backer
end
