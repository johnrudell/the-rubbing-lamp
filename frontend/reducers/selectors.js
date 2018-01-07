import values from 'lodash/values';

export const selectCategories = state => values(state.entities.categories);
export const selectProjects = state => values(state.entities.projects);

export const selectCategoryProjects = (state, category) => {
  return category ? category.project_ids.map(id => state.entities.projects[id]) : [];
};

export const selectCategoryProject = (state, id) => {
  return state.entities.projects[id];
};
