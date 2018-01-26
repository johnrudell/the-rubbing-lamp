export const createBacking = backing => {
  return $.ajax({
    method: 'POST',
    url: `api/projects/${backing.backer_id}/backings`,
    data: { backing }
  })
};
