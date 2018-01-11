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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
