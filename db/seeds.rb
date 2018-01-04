# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "demoUser", email: "demoUser@demo.com", password: "password")
user2 = User.create(username: "john", email: "john@mail.com", password: "password")

category1 = Category.create(
  category_name: 'Arts'
)

category2 = Category.create(
  category_name: 'Music'
)

category3 = Category.create(
  category_name: 'Games'
)

category4 = Category.create(
  category_name: 'Design & Tech'
)

category5 = Category.create(
  category_name: 'Food & Craft'
)

category6 = Category.create(
  category_name: 'Publishing'
)

category7 = Category.create(
  category_name: 'Film'
)

category8 = Category.create(
  category_name: 'Comics & Illustration'
)
