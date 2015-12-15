require "httparty"
require "json"
require "nokogiri"

work_ids = ARGV.join(",")
url = "http://www.redbubble.com/many-works/show?style=mens&product=t-shirt&works=#{work_ids}"
result = HTTParty.get(url, cookies: {session_token: ENV["SESSION_TOKEN"], "_rb_session4" => ENV["RB_SESSION4"]})
doc = Nokogiri::HTML.parse(result)
image_urls = doc.css(".product-grid-cell a img").map{|img| img.attr("src") }

work_ids.split(",").each_with_index{|work_id, index|
  File.open("#{index}.jpg", "wb") do |f|
    f.binmode
    f.write(HTTParty.get(image_urls[index]).parsed_response)
  end
}
