# _plugins/shuffle.rb
module Jekyll
  module ShuffleFilter
    def shuffle(array)
      array.shuffle
    end
  end
end

Liquid::Template.register_filter(Jekyll::ShuffleFilter)


# {% assign shuffled_array = page.clients | shuffle %}
# {% for i in shuffled_array limit:4 %}
#   <p>{{ i }}</p>
# {% endfor %}