# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  short_blurb        :string           not null
#  description        :text             not null
#  funding_goal       :integer          not null
#  deadline           :datetime         not null
#  funding_raised     :integer          not null
#  author_id          :integer          not null
#  category_id        :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :image, :short_blurb, :description, :funding_goal, :deadline, :funding_raised, :author_id, :category_id, presence: true
  validates :funding_goal, numericality: { greater_than_or_equal_to: 100 }

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :category

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :rewards,
    dependent: :destroy,
    inverse_of: :project

  has_many :backings,
    through: :rewards,
    source: :backings

  # has_many :backers,
  #   through: :backings,
  #   source: :user
end
