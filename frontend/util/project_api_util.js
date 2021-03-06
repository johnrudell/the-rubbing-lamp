export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects',
  });
};

export const fetchProject = id => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`,
  });
};

export const createProject = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/projects',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const updateProject = project => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.get("project[id]")}`,
    processData: false,
    contentType: false,
    data: project
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`,
  });
};
