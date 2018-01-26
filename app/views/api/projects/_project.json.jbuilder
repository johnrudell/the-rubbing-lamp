json.extract! project,  :id,
                        :title,
                        :description,
                        :funding_goal,
                        :deadline,
                        :funding_raised,
                        :author_id,
                        :category_id,
                        :author,
                        :category,
                        :created_at

json.shortBlurb project.short_blurb
json.imageUrl asset_path(project.image.url)
json.id project.id

json.rewards project.rewards do |reward|
  json.extract! reward, :id,
                        :title,
                        :description,
                        :amount,
                        :backings,
                        :backers,
                        :project
end
