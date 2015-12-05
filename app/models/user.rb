class User < ActiveRecord::Base

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      if auth['info']
         user.name = auth['info']['name'] || ""
      end
    end
  end
  
  def publish_to_wall(message, link)
    return nil if fb_token.nil?
    graph = Koala::Facebook::API.new(fb_token)
    graph.put_connections("me", "feed", message: message, link: link, picture: 'https://merdeka-hack-khanh2907.c9users.io/fb_blurb.png')
  end
  
  def self.publish_to_all(message, link)
    User.all.each do |u|
      unless u.fb_token.nil?
        u.publish_to_wall(message, link)
      end
    end
  end

end
