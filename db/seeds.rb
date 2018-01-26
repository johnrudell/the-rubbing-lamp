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
Reward.destroy_all
Backing.destroy_all

# Users
user1 = User.create(username: "demoUser", email: "demoUser@demo.com", password: "password")
user2 = User.create(username: "john", email: "john@mail.com", password: "password")

# Categories
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

# Projects
project1 = Project.create(
  title: 'Space Dance',
  short_blurb: 'Dance the night away in space',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user1.id,
  funding_goal: 10000,
  deadline: "03/01/2018",
  funding_raised: 6000,
  category_id: category1.id,
  image: 'https://img00.deviantart.net/daea/i/2010/145/9/8/space_dance_by_diamantsoft.jpg'
)

project2 = Project.create(
  title: 'Lau\'s Masters',
  short_blurb: 'Help me!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user2.id,
  funding_goal: 24000,
  deadline: "01/03/2018",
  funding_raised: 1500,
  category_id: category4.id,
  image: 'https://s-i.huffpost.com/gen/3277092/images/n-GRADUATION-CEREMONY-628x314.jpg'
)

project3 = Project.create(
  title: 'Simon\'s future',
  short_blurb: 'I\'m going places',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user2.id,
  funding_goal: 100000,
  deadline: "20/01/2018",
  funding_raised: 0,
  category_id: category3.id,
  image: 'https://i.ytimg.com/vi/c1ABm9QRQzg/maxresdefault.jpg'
)

project4 = Project.create(
  title: 'Runners of Everdale',
  short_blurb: 'Let\'s build a community of runners with events and outings weekly',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user2.id,
  funding_goal: 150,
  deadline: "12/01/2018",
  funding_raised: 2,
  category_id: category5.id,
  image: 'http://netdoctor.cdnds.net/17/20/980x490/landscape-1495031594-two-women-running-along-road.jpg'
)

project5 = Project.create(
  title: 'Snow Hearts',
  short_blurb: 'Discover sustainable snowballs in the shape of hearts',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user1.id,
  funding_goal: 3000,
  deadline: "24/02/2018",
  funding_raised: 2600,
  category_id: category1.id,
  image: 'http://netdoctor.cdnds.net/17/02/980x490/landscape-1484214717-heart-shaped-snowball.jpg'
)

project6 = Project.create(
  title: 'Paint Me Now',
  short_blurb: 'Help me create art',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user1.id,
  funding_goal: 30000,
  deadline: "2/1/2018",
  funding_raised: 35000,
  category_id: category1.id,
  image: 'https://img00.deviantart.net/8736/i/2012/171/8/0/paint_me_by_aheathphoto-d548ekg.jpg'
)

project6 = Project.create(
  title: 'Origami Heaven',
  short_blurb: 'Creating a community of paper artists',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  author_id: user1.id,
  funding_goal: 8000,
  deadline: "24/5/2018",
  funding_raised: 8100,
  category_id: category1.id,
  image: 'https://i.ytimg.com/vi/4jYOOk-cJj0/maxresdefault.jpg'
)

# Rewards
reward1 = Reward.create(
  amount: 100,
  title: 'Space shoes',
  description: 'Wear these shoes and you\'ll defy gravity',
  project_id: project1.id
)

reward2 = Reward.create(
  amount: 500,
  title: 'A month of classes',
  description: 'Free classes to explore the possibilities of space dance',
  project_id: project1.id
)

reward3 = Reward.create(
  amount: 1000,
  title: '1k',
  description: 'I am in your debt!',
  project_id: project2.id
)

# Backings
backing1 = Backing.create(reward_id: reward1.id, backer_id: user1.id, amount: 100)
backing2 = Backing.create(reward_id: reward1.id, backer_id: user2.id, amount: 150)
backing3 = Backing.create(reward_id: reward2.id, backer_id: user1.id, amount: 500)
backing4 = Backing.create(reward_id: reward3.id, backer_id: user1.id, amount: 500)
backing5 = Backing.create(reward_id: reward3.id, backer_id: user2.id, amount: 1000)
