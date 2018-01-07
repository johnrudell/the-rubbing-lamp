json.extract! project,  :id,
                        :title,
                        :short_blurb,
                        :description,
                        :funding_goal,
                        :deadline,
                        :funding_raised,
                        :author_id,
                        :category_id,
                        :author,
                        :category,
                        :created_at
json.img_url asset_path(project.img_url)
json.id project.id
