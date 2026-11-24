/* ==========================================================
   THE LITTLE CUP CAFE - RECIPE DATA
   Everything on the recipes site comes from this file.
   Photos live in the recipe-photos folder.

   ADDING A NEW RECIPE
   1. Save the photo(s) in recipe-photos (e.g. recipe-photos/my-recipe.jpg).
   2. Copy any recipe block in RECIPES below, paste it at the TOP of the
      list (newest first) and change the words.
   3. "id" must be unique, lowercase, with hyphens (it becomes the web address).
   4. "sections" is the list of sections it appears in: "sweet", "dinner"
      and/or "baking-with-kids".
   5. Optional lines: "tip" (top tip box), "serves" (serving note),
      "duo" (one or two extra photos). Delete the line if you don't need it.
   6. In "ings" and "method", each group is ["Group heading", [ "item", "item" ]].
      Use "" for the heading if the recipe has no groups.
      In "after" (storage, notes and so on), each block is ["Heading", "text"].
      Add a third item, a list like [ "item", "item" ], to show bullet points
      under the text.

   CHANGING THE HOME SCREEN
   Edit FEATURED below. Put the "id" of up to 3 recipes, in the order you want.

   ADDING A NEW SECTION
   Add a block to SECTIONS (id, name, blurb), then use its id in a recipe's "sections".
   ========================================================== */

var SECTIONS = [
  { id: "sweet", name: "Sweet", blurb: "Cupcakes, loaves and other sweet bakes." },
  { id: "dinner", name: "Dinner", blurb: "Easy family meals, from quick soups to pasta." },
  { id: "baking-with-kids", name: "Baking with kids", blurb: "Simple bakes for little helpers. Mess is welcome." }
];

/* The 3 recipes shown on the home screen */
var FEATURED = [
  "vegetable-tortellini-in-brodo",
  "banana-nutella-swirl-bread",
  "baked-veggie-fritter-bites"
];

var RECIPES = [
  {
    "id": "baked-veggie-fritter-bites",
    "sections": [
      "dinner",
      "baking-with-kids"
    ],
    "title": "Baked Veggie Fritter Bites",
    "short": "Baked Veggie Fritter Bites",
    "dek": "Grate, squeeze, mix and bake: an easy fritter for whatever veg you have on hand.",
    "hero": "recipe-photos/baked-veggie-fritter-bites.jpg",
    "alt": "Tray of golden baked vegetable fritter bites resting on paper towel",
    "intro": [
      "Another messy toddler creation! This one may be overstimulating for kids with sensory sensitivities. Halfway through I realised my toddler doesn’t like sticky or grated veg, but he powered through and kept trying until we finished the recipe, even if we ended up with a lot of veg flicked across the kitchen in the meantime.",
      "Baking with a toddler is such a fundamental task for fine motor and general life skills. Cooking is so incredibly important, and it’s an easy time to slow down and spend it together."
    ],
    "duo": [
      [
        "recipe-photos/baked-veggie-fritter-bites-2.jpg",
        "Pumpkin, zucchini and peeled potatoes on a chopping board ready to be grated"
      ]
    ],
    "tip": "These are super simple to change to whatever you have on hand. Just remember to use 1 egg and 3 tablespoons of plain flour for every 2 cups of veg and cheese.",
    "name": "Baked Veggie Fritter Bites",
    "ings": [
      [
        "",
        [
          "2 cups grated veg and cheese of choice (see the combinations below, or just use what you have)",
          "1 egg",
          "3 tablespoons plain flour",
          "Salt, pepper and herbs of choice",
          "Extra virgin olive oil, for spraying, brushing or drizzling"
        ]
      ]
    ],
    "method": [
      [
        "Prep the veg",
        [
          "Grate your veg. Anything that can be grated with the skin on, such as zucchini or carrots, just needs a wash. You’ll keep a lot more nutrients this way. For things like potatoes, please peel first.",
          "Place the veg in a clean tea towel or paper towel and squeeze out the excess liquid."
        ]
      ],
      [
        "Mix",
        [
          "Place the veg in a bowl with your grated or crumbled cheese. Mix through the herbs, egg and flour until well combined into a sticky, firm mixture. It’s best to use your hands for this."
        ]
      ],
      [
        "Shape",
        [
          "On a lined tray, place even 1–2 tablespoon portions. If you wet your hands, you’ll find it easier to shape them into small, even snacks that can be easily held and eaten by little hands.",
          "These will not be pretty, because cooking with a toddler is messy!"
        ]
      ],
      [
        "Bake",
        [
          "Spray or brush the tops with oil. If you don’t have anything on hand, simply drizzle some extra virgin olive oil over the top.",
          "Bake in a preheated 200°C oven for 20–25 minutes, turning them over halfway, until golden on both sides.",
          "Remove from the oven and allow to cool on paper towel to remove any excess oil."
        ]
      ],
      [
        "Serve",
        [
          "Serve with hummus or another favourite dip or sauce, or simply enjoy them as they are."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "These keep in the fridge for 3 days. To freeze, place them on a tray for an hour so they don’t stick together, then transfer to airtight bags or containers. Reheat from frozen in the oven."
      ],
      [
        "Combinations to try",
        "If you’re after a set recipe, here are some of my favourite combinations. This time we used pumpkin, potato and zucchini with pepper, mixed herbs and some leftover light cheddar-style cheese, but use anything you have on hand.",
        [
          "Sweet potato, corn, spring onion and cheddar",
          "Zucchini, broccoli, peas and feta",
          "Carrot, potato, parsnip and herbs",
          "Pumpkin, spinach, mozzarella and Parmesan",
          "Potato, peas, pumpkin, Parmesan and zucchini",
          "Sweet potato, carrot, potato, zucchini and herbs"
        ]
      ],
      [
        "Make them crunchier",
        "For some extra crunch, swap the flour for breadcrumbs."
      ],
      [
        "Vegan option",
        "Use ⅓–½ cup chickpea flour and a few tablespoons of plant-based milk or water to bind your 2 cups of veg mix. Start with ⅓ cup and increase if you’re not finding your desired texture. Add the liquid slowly and mix after each addition until you have the desired consistency. Leave out the cheese or use a plant-based one."
      ]
    ]
  },
  {
    "id": "vegetable-tortellini-in-brodo",
    "sections": [
      "dinner"
    ],
    "title": "Vegetable-Filled Tortellini in Brodo",
    "short": "Vegetable-Filled Tortellini in Brodo",
    "dek": "The quickest meal you’ll ever make: small-diced veg, a light broth and tortellini.",
    "hero": "recipe-photos/vegetable-tortellini-in-brodo.jpg",
    "alt": "Bowl of tortellini in brodo with diced carrot, zucchini, tomato, celery and parsley",
    "intro": [
      "This is the quickest meal you’ll ever make, and it’s one we rely on for lunch several days a week. It’s quick, warm, filling and packed with veg.",
      "I’m just working with what I know my toddler will eat, so I use a big mix of small-diced vegetables in a light broth with tortellini. Change the veg to suit your family."
    ],
    "tip": "I use a prosciutto-filled tortellini because that’s what my toddler enjoys, but any will work fine. For a vegetarian option, choose spinach and ricotta or a cheese-filled one, and use vegetable stock.",
    "name": "Vegetable-Filled Tortellini in Brodo",
    "serves": "This recipe makes enough for a family of 4, so you’ll need to adjust it to suit your needs.",
    "ings": [
      [
        "Tortellini and stock",
        [
          "400–500g fresh tortellini (any filling)",
          "7–9 cups stock, powder or liquid (I use a 3:2:1 ratio of meat, chicken and vegetable stock; use all vegetable stock for a vegetarian version)",
          "Pepper, to taste"
        ]
      ],
      [
        "Vegetables",
        [
          "4 cups mixed vegetables, small diced (these are the ones I use, but feel free to do the same or choose your own)",
          "Potato, carrot, tomato, zucchini, pumpkin, cauliflower, savoy cabbage, borlotti beans, peas, green beans, onion, leek, celery, chard, spinach and parsley"
        ]
      ]
    ],
    "method": [
      [
        "Vegetables",
        [
          "Heat some oil in a large pan and sauté all the veg for a few minutes.",
          "Cover with the stock and bring to the boil. Cook for a few minutes to soften the veg."
        ]
      ],
      [
        "Tortellini",
        [
          "Add the tortellini and keep it at a boil. It only needs a few minutes, so follow the packet directions."
        ]
      ],
      [
        "Serve",
        [
          "Season with pepper and serve immediately."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "This one is best served and eaten straight away."
      ],
      [
        "Notes",
        "If you want to avoid cutting veg, you can definitely use frozen veg in exactly the same way. Change the ingredients to suit your needs, and use whatever veg your family will eat."
      ]
    ]
  },
  {
    "id": "pesto-pumpkin-pasta",
    "sections": [
      "dinner"
    ],
    "title": "Pesto Pumpkin Pasta: An Easy Meal to Suit the Whole Family",
    "short": "Pesto Pumpkin Pasta",
    "dek": "A toddler favourite that’s on the table in under 30 minutes.",
    "hero": "recipe-photos/pesto-pumpkin-pasta.jpg",
    "alt": "A bowl of strozzapreti pasta with pesto, pancetta and roasted pumpkin",
    "intro": [
      "This is one of my toddler’s favourites, and it takes no skill at all! The pumpkin and pesto work together to create a sweet yet salty flavour mix the whole family will love.",
      "It’s a meal in under 30 minutes that doesn’t break the bank, and there’s plenty of extra hidden veg thanks to the soffritto mix."
    ],
    "tip": "I use pancetta, however it isn’t widely available, so feel free to substitute guanciale or, as a last resort, bacon. Alternatively, leave it out and you’ve got a vegetarian version that is just as delicious.",
    "name": "Pesto Pumpkin Pasta",
    "serves": "This recipe makes 4 adult servings, so you’ll need to adjust it to suit your needs.",
    "ings": [
      [
        "Pasta and pumpkin",
        [
          "500g fresh or dried pasta (I’ve used strozzapreti, but it isn’t widely available outside of Italy, so use what you have on hand or choose a pasta that suits)",
          "300g pumpkin, diced (about 3 handfuls)",
          "Extra virgin olive oil",
          "Salt and pepper"
        ]
      ],
      [
        "Sauce",
        [
          "200g pancetta, diced",
          "1 brown onion, diced",
          "1 carrot, diced",
          "1 celery stalk, diced (these three make your soffritto)",
          "2–3 garlic cloves, diced or crushed, or a good tablespoon of jarred garlic (adjust to taste)",
          "1 container of fresh basil pesto, or 3 large tablespoons of jarred pesto, depending on what’s available at your local store",
          "100g Parmesan cheese, grated",
          "100ml thickened or cooking cream (optional, see notes)"
        ]
      ]
    ],
    "method": [
      [
        "Pumpkin",
        [
          "Lay the diced pumpkin on a baking tray, coat with extra virgin olive oil and pepper, and bake for about 20 minutes, or until soft and golden."
        ]
      ],
      [
        "Pasta",
        [
          "While the pumpkin is baking, boil a pot of salted water and cook your pasta as per the packet directions. Make your sauce in a separate pan."
        ]
      ],
      [
        "Sauce",
        [
          "Heat extra virgin olive oil in a pan over medium heat. Add the pancetta and cook for a few minutes to allow the fat time to render.",
          "Add your soffritto mix along with a good grind of pepper and continue cooking to soften the vegetables and render the pancetta. This will take 5–8 minutes in total. The pancetta fat will render and the pancetta will become crispy (guanciale cooks in a similar time frame, however bacon will cook a lot faster).",
          "Once the pancetta is crispy, add the garlic and stir through for no more than 30 seconds before the next step, as it will burn quickly.",
          "Add your pesto and allow a few minutes for it to become fragrant. This is when you can add the cream, if using, and continue cooking to thicken and reduce while you wait for your pasta. Without cream, set the sauce to the side until your pasta has finished cooking."
        ]
      ],
      [
        "Serve",
        [
          "Transfer the pasta straight into the sauce, allowing some pasta water to follow. Stir through the Parmesan and serve with the baked pumpkin on top."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "This one is best served and eaten straight away."
      ],
      [
        "Notes",
        "For an even creamier sauce base, stir through 100ml of thickened or cooking cream. Leave out the pancetta for a vegetarian version, and use whatever pasta you have in the pantry."
      ]
    ]
  },
  {
    "id": "banana-strawberry-swirl-bread",
    "sections": [
      "sweet",
      "baking-with-kids"
    ],
    "title": "Banana and Strawberry Swirl Bread: Toddler Hands and All the Mess",
    "short": "Banana and Strawberry Swirl Bread",
    "dek": "A moist, golden loaf with a ribbon of strawberry jam through the middle.",
    "hero": "recipe-photos/banana-strawberry-swirl-bread.jpg",
    "alt": "A banana and strawberry swirl loaf cut in half on a white board",
    "intro": [
      "This banana bread is made with toddler hands and all the mess! It’s a moist, golden loaf with a ribbon of strawberry jam swirled right through the middle."
    ],
    "duo": [
      [
        "recipe-photos/banana-strawberry-swirl-bread-2.jpg",
        "Slices of banana and strawberry swirl bread on a wooden board"
      ]
    ],
    "tip": "Make sure your jam is thick and real fruit, so it doesn’t add extra liquid to the bread.",
    "name": "Banana and Strawberry Swirl Bread",
    "ings": [
      [
        "Banana bread",
        [
          "4 ripe bananas",
          "125g butter, softened or melted",
          "150g brown sugar",
          "3 eggs",
          "75g plain yoghurt or sour cream",
          "Vanilla",
          "250g self-raising flour",
          "1 tsp baking powder"
        ]
      ],
      [
        "Swirl",
        [
          "5 tablespoons thick, real fruit strawberry jam"
        ]
      ]
    ],
    "method": [
      [
        "",
        [
          "Preheat the oven to 180°C, or 160°C fan forced.",
          "Peel and mash the bananas.",
          "In a separate bowl, cream the softened or melted butter with the sugar until thick and smooth.",
          "Add the eggs, yoghurt, vanilla and mashed bananas and mix through well.",
          "Add the flour and baking powder and fold through until just combined.",
          "Pour half of the mixture into a lined 2lb loaf tin (approximately 21 x 11cm). Swirl through the jam, then top with the remaining banana mixture.",
          "Bake for 30 minutes.",
          "Cover the loaf and bake for a further 30 minutes.",
          "Leave to cool in the tin for 2 hours.",
          "Remove from the tin and leave to cool fully before cutting and serving."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "Keeps for 5 days covered at room temperature. It can also be sliced and frozen for up to 3 months."
      ],
      [
        "Make it your own",
        "Experiment with different jam flavours. They’re all going to be amazing with the banana flavour."
      ]
    ]
  },
  {
    "id": "banana-nutella-swirl-bread",
    "sections": [
      "sweet",
      "baking-with-kids"
    ],
    "title": "Baking with a Toddler: Messy Hands, Big Skills and a Banana Nutella Swirl Bread",
    "short": "Banana Nutella Swirl Bread",
    "dek": "No fancy tools, just a bowl, a fork and a whisk. Made for curious little helpers.",
    "hero": "recipe-photos/banana-nutella-swirl-bread.jpg",
    "alt": "A banana Nutella swirl loaf cut in half to show the chocolate swirl",
    "intro": [
      "Learning kitchen skills is one of the most valuable things any person can pick up, and we all know how stressful (and messy) a small person in the kitchen can be. But ignore the mess, because it can be cleaned up. Ignore the extra egg that landed on the floor instead of in the bowl, because they’re learning a big skill and loving every minute of it, right up to the first taste of fresh banana Nutella bread.",
      "There are no fancy tools in this bake, just a bowl, a fork and a whisk. It’s the perfect recipe for curious, ready-to-help little hands."
    ],
    "duo": [
      [
        "recipe-photos/banana-nutella-swirl-bread-2.jpg",
        "A toddler’s hands mashing bananas in a glass bowl with a fork"
      ],
      [
        "recipe-photos/banana-nutella-swirl-bread-3.jpg",
        "Banana batter swirled with Nutella in a lined loaf tin"
      ]
    ],
    "name": "Banana Nutella Swirl Bread",
    "ings": [
      [
        "",
        [
          "4 ripe bananas",
          "3 eggs",
          "75g plain yoghurt or sour cream",
          "125g unsalted butter, melted",
          "150g brown sugar",
          "250g self-raising flour",
          "1 tsp baking powder",
          "200g Nutella"
        ]
      ]
    ],
    "method": [
      [
        "",
        [
          "Peel and mash the bananas until smooth. This is the perfect job for little hands with a fork.",
          "Add the eggs and yoghurt and mix until well combined.",
          "Melt the butter and stir in the sugar until dissolved. Add to the banana mixture and combine well.",
          "Mix the flour and baking powder together, then add to the wet ingredients. Mix only until combined. Do not overmix.",
          "Warm the Nutella slightly in the microwave so it’s easy to swirl.",
          "Line a 2lb loaf tin (approximately 23 x 13 cm) with baking paper. Pour in half the banana mixture.",
          "Dollop half the Nutella on top and swirl through with a skewer.",
          "Pour in the remaining banana mixture and repeat with the remaining Nutella, swirling again.",
          "Bake at 180°C (160°C fan-forced) for 60 to 70 minutes, until a skewer comes out clean.",
          "Cover with foil at the 30-minute mark to stop the top browning too much.",
          "Leave the bread in the tin to cool fully before slicing and serving."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "Keep covered at room temperature for up to 5 days. Alternatively, slice and freeze for up to 3 months, which makes a perfect grab-and-go snack."
      ]
    ]
  },
  {
    "id": "blueberry-lemon-cupcakes",
    "sections": [
      "sweet"
    ],
    "title": "Pretty in Pink: Fresh, Sweet and Zesty Blueberry and Lemon Cupcakes",
    "short": "Blueberry and Lemon Cupcakes",
    "dek": "Pantry staples, fresh blueberries and lemon. No fake flavouring, no added colours.",
    "hero": "recipe-photos/blueberry-lemon-cupcakes.jpg",
    "alt": "Blueberry and lemon cupcakes with pink buttercream on a wooden board",
    "intro": [
      "Wanting something fresh, zesty and sweet? This is your new go-to bake! With pantry staples, fresh blueberries and lemon, you can’t go wrong.",
      "There’s no fake flavouring and no added colours, and you’ll be sure to please the crowd."
    ],
    "tip": "The buttercream must be made with real block unsalted butter or it will not work. There is no substitute. If it’s coming up dry or isn’t mixing through fully, add a tablespoon of boiling water to help it warm up and come together.",
    "name": "Blueberry and Lemon Cupcakes",
    "ings": [
      [
        "Cupcakes",
        [
          "150g unsalted butter, at room temperature",
          "150g caster sugar",
          "3 eggs",
          "150g self-raising flour",
          "Zest of 1 lemon",
          "100g blueberries, washed and rolled through 1 tablespoon of plain flour"
        ]
      ],
      [
        "Blueberry coulis",
        [
          "200g blueberries, washed",
          "25g caster sugar",
          "1 tablespoon lemon juice"
        ]
      ],
      [
        "Buttercream",
        [
          "200g unsalted butter, at room temperature",
          "400g icing sugar",
          "3–4 tablespoons blueberry coulis"
        ]
      ],
      [
        "To decorate",
        [
          "Extra fresh blueberries",
          "A little extra lemon zest"
        ]
      ]
    ],
    "method": [
      [
        "",
        [
          "Preheat the oven to 180°C (160°C fan-forced) and line a 12-hole muffin tray with paper cases.",
          "Cream the butter and sugar together. This is easiest in a bench mixer or with electric beaters. You want it light and fluffy, and the sugar should dissolve into the butter.",
          "Add the eggs, self-raising flour and lemon zest and beat until smooth, about 30 seconds. Be careful not to overmix.",
          "Fold through the blueberries. The flour coating helps stop them sinking to the bottom of the batter.",
          "Spoon the mixture into the cases and bake for 20–22 minutes, or until a skewer comes out clean. Remove from the oven and immediately transfer to a cooling rack to prevent the bases going soggy."
        ]
      ],
      [
        "Coulis",
        [
          "While the cupcakes bake, add the blueberries, lemon juice and sugar to a small saucepan over low heat, mashing with a fork until the mixture softens. This will take a few minutes.",
          "Blend until smooth, then pass through a sieve to make sure it’s free of lumps. Leave to cool completely."
        ]
      ],
      [
        "Buttercream",
        [
          "Beat the room-temperature butter until smooth. Add the icing sugar and mix until fully incorporated. Slowly add the coulis one spoonful at a time, as you don’t want to soften the buttercream too much."
        ]
      ],
      [
        "Decorate",
        [
          "Once the cupcakes are completely cool, it’s time to decorate. Swirl the buttercream on top, drizzle over a spoonful of coulis, then finish with a few fresh blueberries and a sprinkle of lemon zest to really make them stand out."
        ]
      ]
    ],
    "after": [
      [
        "Storage",
        "These beauties will keep for 3 days, covered, at room temperature. Remove the fresh berries and they can be refrigerated, covered, for up to a week, or frozen for up to 3 months."
      ],
      [
        "Make it your own",
        "Why not put your own twist on this recipe and try different flavour combinations with raspberries or strawberries?"
      ]
    ]
  }
];
