require "httparty"
require "json"
require "nokogiri"
require "csv"

puts 'REMEMBER: You need to set SESSION_TOKEN in order to login as admin to access many-works'

def fetch_urls(accumulator)
  url = "http://www.redbubble.com/many-works/show?&works=#{accumulator.join(',')}"
  result = HTTParty.get(url, cookies: {session_token: ENV["SESSION_TOKEN"], "_rb_session4" => ENV["RB_SESSION4"]})
  doc = Nokogiri::HTML.parse(result)
  image_urls = doc.css(".product-grid-cell a img").map{|img| img.attr("src") }
  puts image_urls.join("\n")
end

#work_ids = ARGV.join(",")
ff_works = CSV.read(ARGV[0], headers:true)
accumulator = [];
ff_works.each_with_index do |ff_work, index|
  accumulator << ff_work['work_id']
  if index % 100 == 0
    fetch_urls(accumulator)
    accumulator = []
  end
end
exit 0

#url = "http://www.redbubble.com/many-works/show?style=mens&product=t-shirt&works=#{work_ids}"
#url="http://www.redbubble.com/many-works/show?&works=11088301,10325079,2970467,12899154,13160807,14042351,11993101,13112835,12279173,13502980,10266656,12267533,12257789,12918867,10278940,13832566,15917480,13468204,11520926,10435061,7507630,14457134,14250388,11866710,14605329,10647548,11980078,6329046,12214255,14612794,12623737,12403259,11761182,12262904,10577159,13343975,13322420,13190314,14860865,15418280,12893408,10163053,12062314,13730546,11857786,15153415,12794639,12041467,13095050,8859474"
result = HTTParty.get(url, cookies: {session_token: ENV["SESSION_TOKEN"], "_rb_session4" => ENV["RB_SESSION4"]})
doc = Nokogiri::HTML.parse(result)
image_urls = doc.css(".product-grid-cell a img").map{|img| img.attr("src") }

puts image_urls

work_ids.split(",").each_with_index{|work_id, index|
  File.open("#{index}.jpg", "wb") do |f|
    f.binmode
    f.write(HTTParty.get(image_urls[index]).parsed_response)
  end
}
