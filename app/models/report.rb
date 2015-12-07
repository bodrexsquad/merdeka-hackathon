class Report < ActiveRecord::Base
    
    def summary
        "On <b>#{date_of_incident.nil? ? created_at.strftime('%a, %e %b %Y') : date_of_incident.strftime('%a, %e %b %Y')}</b> in <b>#{locations}</b>, I had to pay <b>#{cost} IDR</b> to <b>#{entity}</b> because <b>#{reason}</b>."
    end
    
    def fb_summary
        "Corruption in Indonesia. On #{date_of_incident.nil? ? created_at.strftime('%a, %e %b %Y') : date_of_incident.strftime('%a, %e %b %Y')} in #{locations}, someone had to pay $#{cost} IDR to #{entity} because #{reason}."
    end
    
end
