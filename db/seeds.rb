Day.delete_all

24.times do |i|
  Day.find_or_create_by!(number: i + 1) do |day|
    day.content_type = 'text'
    day.content = "<h1>#{i + 1} Décembre</h1>"
  end
end
