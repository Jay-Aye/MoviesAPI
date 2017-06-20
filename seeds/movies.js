const Movie = require('../models/movie')

Movie.create([
  {
    title: 'Wonder Woman',
    yearReleased: 2017,
    description: 'Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny.'
  },
  {
    title: 'Lock, Stock and Two Smoking Barrels',
    yearReleased: 1998,
    description: 'A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.'
  },
  {
    title: 'Snatch',
    yearReleased: 2000,
    description: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.'
  },
  {
    title: 'Two Hands',
    yearReleased: 1999,
    description: 'A 19 year old (Heath Ledger) finds himself in debt to a local gangster (Bryan Brown) when some gang loot disappears and sets him on the run from thugs.'
  }
])
