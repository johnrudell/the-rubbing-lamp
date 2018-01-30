class Reward < ApplicationRecord
  validates :amount, numericality: true
  validates :title, :description, :amount, :project, :delivery_date, presence: true

  belongs_to :project, inverse_of: :rewards
  has_many :backings
  has_many :backers,
    through: :backings,
    source: :backer

  def total_backings
    amounts = []

    backings.each do |backing|
      amounts << backing.amount
    end

    amounts.inject(0) { |sum, amt| sum + amt }
  end

end
