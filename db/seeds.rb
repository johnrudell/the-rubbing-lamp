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
  description: 'Imagine dance in space. Crazy, right? Now this is what dance is all about... Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture. Dance can be categorized and described by its choreography, by its repertoire of movements, or by its historical period or place of origin.
An important distinction is to be drawn between the contexts of theatrical and participatory dance, although these two categories are not always completely separate; both may have special functions, whether social, ceremonial, competitive, erotic, martial, or sacred/liturgical. Other forms of human movement are sometimes said to have a dance-like quality, including martial arts, gymnastics, cheerleading, figure skating, synchronized swimming, marching bands, and many other forms of athletics.',
  author_id: user1.id,
  funding_goal: 10000,
  deadline: "03/01/2018",
  funding_raised: 0,
  category_id: category1.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/space.jpg'
)

project2 = Project.create(
  title: 'Lau\'s Masters',
  short_blurb: 'Help me!',
  description: 'Grad school is in my future. If not, maybe Law school. Who knows, but you can help me. Many universities award graduate degrees; a graduate school is not necessarily a separate institution. While the term "graduate school" is typical in the United States and often used elsewhere (e.g. Canada), "postgraduate education" is also used in English-speaking countries (Australia, Canada, Ireland, India, Bangladesh, New Zealand, Pakistan and the UK) to refer to the spectrum of education beyond a bachelor\'s degree. Those attending graduate schools are called "graduate students" (in both American and British English), or often in British English as "postgraduate students" and, colloquially, "postgraduates" and "postgrads". Degrees awarded to graduate students include master\'s degrees, doctoral degrees, and other postgraduate qualifications such as graduate certificates and professional degrees.',
  author_id: user2.id,
  funding_goal: 24000,
  deadline: "01/03/2018",
  funding_raised: 0,
  category_id: category4.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/graduation.jpg'
)

project3 = Project.create(
  title: 'Simon\'s future',
  short_blurb: 'I\'m going places',
  description: 'My future is going to be about astrology! Fund my horoscope. Astrology is the study of the movements and relative positions of celestial objects as a means for divining information about human affairs and terrestrial events. Astrology has been dated to at least the 2nd millennium BCE, and has its roots in calendrical systems used to predict seasonal shifts and to interpret celestial cycles as signs of divine communications. Many cultures have attached importance to astronomical events, and some – such as the Indians, Chinese, and Maya – developed elaborate systems for predicting terrestrial events from celestial observations. Western astrology, one of the oldest astrological systems still in use, can trace its roots to 19th–17th century BCE Mesopotamia, from which it spread to Ancient Greece, Rome, the Arab world and eventually Central and Western Europe. Contemporary Western astrology is often associated with systems of horoscopes that purport to explain aspects of a person\'s personality and predict significant events in their lives based on the positions of celestial objects; the majority of professional astrologers rely on such systems',
  author_id: user2.id,
  funding_goal: 100000,
  deadline: "20/01/2018",
  funding_raised: 0,
  category_id: category3.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/simon.jpg'
)

project4 = Project.create(
  title: 'Unity Running',
  short_blurb: 'My vision is creating a unity and pairing runners with other runners',
  description: 'Run together and as one so we can overcome anything! Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions[1]). This is in contrast to walking, where one foot is always in contact with the ground, the legs are kept mostly straight and the center of gravity vaults over the stance leg or legs in an inverted pendulum fashion. A characteristic feature of a running body from the viewpoint of spring-mass mechanics is that changes in kinetic and potential energy within a stride occur simultaneously, with energy storage accomplished by springy tendons and passive muscle elasticity.[3] The term running can refer to any of a variety of speeds ranging from jogging to sprinting.',
  author_id: user2.id,
  funding_goal: 150,
  deadline: "12/01/2018",
  funding_raised: 0,
  category_id: category5.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/running.jpg'
)

project5 = Project.create(
  title: 'Snow Hearts',
  short_blurb: 'Discover sustainable snowballs in the shape of hearts',
  description: 'Snow hearts are different. They\'re unique. They\'re amazing. They\'re just what you need! Snow refers to forms of ice crystals that precipitate from the atmosphere (usually from clouds) and undergo changes on the Earth\'s surface. It pertains to frozen crystalline water throughout its life cycle, starting when, under suitable conditions, the ice crystals form in the atmosphere, increase to millimeter size, precipitate and accumulate on surfaces, then metamorphose in place, and ultimately melt, slide or sublimate away. Snowstorms organize and develop by feeding on sources of atmospheric moisture and cold air. Snowflakes nucleate around particles in the atmosphere by attracting supercooled water droplets, which freeze in hexagonal-shaped crystals. Snowflakes take on a variety of shapes, basic among these are platelets, needles, columns and rime. As snow accumulates into a snowpack, it may blow into drifts. Over time, accumulated snow metamorphoses, by sintering, sublimation and freeze-thaw. Where the climate is cold enough for year-to-year accumulation, a glacier may form. Otherwise, snow typically melts seasonally, causing runoff into streams and rivers and recharging groundwater.',
  author_id: user1.id,
  funding_goal: 3000,
  deadline: "24/02/2018",
  funding_raised: 0,
  category_id: category1.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/snow-heart.jpg'
)

project6 = Project.create(
  title: 'Paint Me Now',
  short_blurb: 'Help me create art',
  description: 'Paint me. Paint you. This is what paint is. In 2001 and 2004, South African archeologists reported finds in Blombos Cave of a 100,000-year-old human-made ochre-based mixture that could have been used like paint.[1][2] Further excavation in the same cave resulted in the 2011 report of a complete toolkit for grinding pigments and making a primitive paint-like substance.[2][3] Cave paintings drawn with red or yellow ochre, hematite, manganese oxide, and charcoal may have been made by early Homo sapiens as long as 40,000 years ago.

Ancient colored walls at Dendera, Egypt, which were exposed for years to the elements, still possess their brilliant color, as vivid as when they were painted about 2,000 years ago. The Egyptians mixed their colors with a gummy substance, and applied them separately from each other without any blending or mixture. They appear to have used six colors: white, black, blue, red, yellow, and green. They first covered the area entirely with white, then traced the design in black, leaving out the lights of the ground color. They used minium for red, and generally of a dark tinge.

Pliny mentions some painted ceilings in his day in the town of Ardea, which had been done prior to the foundation of Rome. He expresses great surprise and admiration at their freshness, after the lapse of so many centuries.

Paint was made with the yolk of eggs and therefore, the substance would harden and adhere to the surface it was applied to. Pigment was made from plants, sand, and different soils. Most paints used either oil or water as a base (the diluent, solvent or vehicle for the pigment).
',
  author_id: user1.id,
  funding_goal: 30000,
  deadline: "2/1/2018",
  funding_raised: 0,
  category_id: category1.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/paint.jpg'
)

project7 = Project.create(
  title: 'Origami Heaven',
  short_blurb: 'I want to open up a business of passionate origami artists',
  description: 'This is more than a business. This is for paper artists passionate about bringing the craft into everyone\'s homes. The art of making paper from pulp originated in China in the year 102A.D. Paper then became more available to the masses. The secret of making paper was kept in China for several hundred years and finally made its way through Korea and into Japan. A Buddhist monk is said to have carried this secret .The introduction of paper making to Japan several hundred years later coincided with the development of their religion and soon became part of the lives of its people. Colors and silk threads were added and origami was held in high esteem. Gifts were decorated with "noshi." Noshi had particular fold patterns depending on the gift.
In Japan, at one time origami was taught in schools but today, children are generally taught origami at home. Holidays are celebrated with colorful origami decorations made by the family. On children\'s day (formerly boy\'s day), children make colorful carp: a fish that swims upstream, against the current. This symbolizes strength. During the summer, Tanabata, The Star Festival is celebrated. Live bamboo branches are decorated with origami stars and other paper decorations in a manner which brings to mind a decorated Christmas tree',
  author_id: user1.id,
  funding_goal: 8000,
  deadline: "24/5/2018",
  funding_raised: 0,
  category_id: category1.id,
  image: 'https://s3.amazonaws.com/the-rubbing-lamp-pro/seeds/origami.jpg'
)

# Rewards
reward1_1 = Reward.create(
  amount: 100,
  title: 'Space shoes',
  description: 'Wear these shoes and you\'ll defy gravity',
  delivery_date: '28/5/2018',
  project_id: project1.id
)

reward1_2 = Reward.create(
  amount: 500,
  title: 'A month of classes',
  description: 'Free classes to explore the possibilities of space dance',
  delivery_date: '28/5/2018',
  project_id: project1.id
)

reward2_1 = Reward.create(
  amount: 1000,
  title: '1k',
  description: 'I am in your debt!',
  delivery_date: '18/8/2018',
  project_id: project2.id
)

reward3_1 = Reward.create(
  amount: 100,
  title: 'Dinner',
  description: 'Let\'s go out for a night. My treat!',
  delivery_date: '18/9/2018',
  project_id: project3.id
)

reward3_2 = Reward.create(
  amount: 1000,
  title: 'Plant watering',
  description: 'I will water your plants for six months. I love watering my house plants, so it just brings me joy to do yours.',
  delivery_date: '18/9/2018',
  project_id: project3.id
)

reward4_1 = Reward.create(
  amount: 150,
  title: 'Unity shoes',
  description: 'You\'ll get these one of kind pairs of shoes that offer excellent bounce and feeling.',
  delivery_date: '4/4/2018',
  project_id: project4.id
)

reward5_1 = Reward.create(
  amount: 150,
  title: 'Snow heart kit',
  description: 'This snow heart kit provides you with our secret formula to create beautiful snow hearts. You will never get tired of them!',
  delivery_date: '4/7/2018',
  project_id: project5.id
)

reward5_2 = Reward.create(
  amount: 400,
  title: 'Snow heart kits for the whole family (4)',
  description: 'That\'s right. Four kits for the littles ones too. Have a grand snow heart fight filled with love. No one\'s getting hurt here.',
  delivery_date: '4/7/2018',
  project_id: project5.id
)

reward6_1 = Reward.create(
  amount: 100,
  title: 'Three pails of paint (red, green, and blue)',
  description: 'The essential colors to anyone\'s painting project.',
  delivery_date: '12/6/2018',
  project_id: project6.id
)

reward7_1 = Reward.create(
  amount: 100,
  title: '100 cranes',
  description: 'Simple, yet elegant. 900 more and you get a wish!',
  delivery_date: '16/5/2018',
  project_id: project7.id
)

reward7_2 = Reward.create(
  amount: 1000,
  title: '1000 cranes',
  description: 'That\'s it! You get a wish!',
  delivery_date: '16/5/2018',
  project_id: project7.id
)

reward7_3 = Reward.create(
  amount: 2000,
  title: 'Any origami creation you would like',
  description: 'That could mean a dragon built of modular origami. Or a lifesize you made from a single sheet of paper. You decide.',
  delivery_date: '16/5/2018',
  project_id: project7.id
)



# Backings
backing1 = Backing.create(reward_id: reward1_1.id, backer_id: user1.id, amount: 100)
backing2 = Backing.create(reward_id: reward1_1.id, backer_id: user2.id, amount: 150)
backing3 = Backing.create(reward_id: reward2_1.id, backer_id: user1.id, amount: 500)
backing4 = Backing.create(reward_id: reward2_1.id, backer_id: user1.id, amount: 500)
backing5 = Backing.create(reward_id: reward2_1.id, backer_id: user2.id, amount: 1000)
