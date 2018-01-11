# == Schema Information
#
# Table name: projects
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  short_blurb    :string           not null
#  description    :text             not null
#  funding_goal   :integer          not null
#  deadline       :datetime         not null
#  funding_raised :integer          not null
#  author_id      :integer          not null
#  category_id    :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Project < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :short_blurb, :description, :funding_goal, :deadline, :funding_raised, :author_id, :category_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :category

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # has_many :rewards, dependent: :destroy

  # has_many :backings

  # has_many :backers,
  #   through: :backings,
  #   source: :user
end
