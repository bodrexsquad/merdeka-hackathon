json.array!(@reports) do |report|
  json.extract! report, :id, :entity, :locations, :reason, :date_of_incident, :cost, :title, :description
  json.url report_url(report, format: :json)
end
