# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Project.destroy_all

user1 = User.create(username: "demoUser", email: "demoUser@demo.com", password: "password")
user2 = User.create(username: "john", email: "john@mail.com", password: "password")

category1 = Category.create(
  name: 'Arts'
)

category2 = Category.create(
  name: 'Music'
)

category3 = Category.create(
  name: 'Games'
)

category4 = Category.create(
  name: 'Design & Tech'
)

category5 = Category.create(
  name: 'Food & Craft'
)

category6 = Category.create(
  name: 'Publishing'
)

category7 = Category.create(
  name: 'Film'
)

category8 = Category.create(
  name: 'Comics & Illustration'
)

project1 = Project.create(
  title: 'Space Dance',
  short_blurb: 'Dance the night away in space',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user1.id,
  funding_goal: 10000,
  deadline: "3/1/2018",
  funding_raised: 5000,
  category_id: category1.id,
  img_url: 'https://img00.deviantart.net/daea/i/2010/145/9/8/space_dance_by_diamantsoft.jpg'
)

project2 = Project.create(
  title: 'Lau\'s Masters',
  short_blurb: 'Help me!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user2.id,
  funding_goal: 200000,
  deadline: "8/1/2018",
  funding_raised: 1000,
  category_id: category5.id,
  img_url: 'https://img00.deviantart.net/daea/i/2010/145/9/8/space_dance_by_diamantsoft.jpg'
)

project3 = Project.create(
  title: 'Simon\'s future',
  short_blurb: 'I\'m going places',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user2.id,
  funding_goal: 100000,
  deadline: "4/1/2018",
  funding_raised: 0,
  category_id: category5.id,
  img_url: 'https://img00.deviantart.net/daea/i/2010/145/9/8/space_dance_by_diamantsoft.jpg'
)
