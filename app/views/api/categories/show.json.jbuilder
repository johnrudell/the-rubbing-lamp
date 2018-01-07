json.category do
  json.partial! 'api/categories/category', category: @category
end

json.projects do
  json.array! @category.projects, partial: 'api/projects/project', as: :project
end
