json.extract! category, :id, :name
json.project_ids category.projects.map(&:id)
