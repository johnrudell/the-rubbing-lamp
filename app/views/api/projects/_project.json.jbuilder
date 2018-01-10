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
json.img_url asset_path(project.image.url)
json.id project.id
