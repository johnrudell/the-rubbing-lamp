json.set! @backing.id do
  json.extract! @backing, :id, :amount, :reward_id, :backer_id
end

json.reward do
  json.set! @backing
end
