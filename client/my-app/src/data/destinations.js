const destinations = {
  munnar: {
    name: 'Munnar',
    state: 'Kerala',
    description: 'Munnar is a breathtaking hill station nestled in the Western Ghats of Kerala, famous for its sprawling tea plantations, misty mountains, and exotic wildlife.',
    bestTime: 'September to March',
    temperature: '15°C - 25°C',
    language: 'Malayalam',
    currency: 'INR',
    image:'https://images.unsplash.com/photo-1580818135730-ebd11086660b?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Eravikulam National Park', desc: 'Home to endangered Nilgiri Tahr and stunning Rajamala hills', emoji: '🦌', imgQuery: 'Eravikulam National Park Nilgiri Tahr Kerala' ,img:'https://images.unsplash.com/photo-1574423886860-a27bb1814f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJhdmlrdWxhbSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D'},
      { name: 'Top Station', desc: 'Highest point in Munnar with breathtaking valley views', emoji: '🏔️', imgQuery: 'Top Station Munnar valley viewpoint Kerala' ,img:'https://images.unsplash.com/photo-1766676664208-b55c705c933f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9wJTIwU3RhdGlvbiUyMGluJTIwbXVubmFyfGVufDB8fDB8fHww'},
      { name: 'Mattupetty Dam', desc: 'Scenic reservoir surrounded by lush tea gardens', emoji: '💧', imgQuery: 'Mattupetty Dam Munnar Kerala lake',img:'https://media.istockphoto.com/id/1149453772/photo/the-concrete-dam-is-a-multi-purpose-hydroelectric-dam-in-thailand.jpg?s=612x612&w=0&k=20&c=F_jvaaVB5A-w7WpeQdbSv-I_JfeJ3OUUNpaHsjNMQfs=' },
      { name: 'Tea Museum', desc: 'Learn the 150-year history of tea making in Munnar', emoji: '🍵', imgQuery: 'Munnar tea plantation museum Kerala',img:'https://media.istockphoto.com/id/1486650672/photo/tea-leaf-processing-factory-in-the-middle-of-rural-tea-farm.jpg?s=612x612&w=0&k=20&c=GyjQB8U2_BfnMZQSnW5OklVDZZKCCf3u7P8eCZwWMXI=' },
      { name: 'Attukad Waterfalls', desc: 'Beautiful cascading waterfalls hidden in the hills', emoji: '🌊', imgQuery: 'Attukad waterfall Munnar Kerala hills' ,img:'https://images.unsplash.com/photo-1664535752766-45ccce0f3548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXR0dWthZCUyMHdhdGVyZmFsbCUyME11bm5hcnxlbnwwfHwwfHx8MA%3D%3D'},
      { name: 'Anamudi Peak', desc: 'Highest peak in South India standing at 2695m', emoji: '⛰️', imgQuery: 'Anamudi peak Munnar Western Ghats Kerala',img:'https://media.istockphoto.com/id/2210190765/photo/morning-view-of-the-anamudi-peak-in-munnar-idukki-kerala-india.jpg?s=612x612&w=0&k=20&c=N3HCDfLLRkxn58TGH-9fr4J15ejA3U3aEkP-Wa2bFyE=' },
    ],
    hotels: [
      { name: 'Toroland Hill Resort', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.8', imgQuery: 'luxury hill resort Munnar Kerala mountains',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hXrpLdsvrD8ZMo274Z9w_dFYdcjYFwLymQ&s' },
      { name: 'Tea Valley Resort', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.5', imgQuery: 'tea estate resort Munnar Kerala',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyo8y4aBSvxAWBVkcQnorV7BeRx-ItehTKA&s' },
      { name: 'Green View Homestay', type: 'Budget', price: '₹1,200/night', rating: '⭐ 4.2', imgQuery: 'budget homestay Munnar Kerala green hills',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2xGgqbxn4nK8Iwy8Own2uxNp1evs4RJ31A&s' },
    ],
    food: [
      { name: 'Kerala Sadya', desc: 'Traditional feast served on banana leaf with 20+ dishes', emoji: '🍛', imgQuery: 'Kerala Sadya banana leaf traditional feast' ,img:'https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=DifbHjpQKU2p_-53a5w5kDvL3X-RPkP5eUqrK0Fud78='},
      { name: 'Appam & Stew', desc: 'Soft lacy rice pancakes with coconut milk stew', emoji: '🥘', imgQuery: 'Appam stew Kerala breakfast coconut',img:'https://media.istockphoto.com/id/1335388099/photo/appam-or-bread-or-pathal-with-chicken-curry-delicious-kerala-breakfast-dish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=LIaGXlktQhKV2FwqF997HJg1aYKXctJdAMeWhGd4HFI=' },
      { name: 'Puttu & Kadala', desc: 'Steamed rice cake with spicy black chickpea curry', emoji: '🫓', imgQuery: 'Puttu Kadala Kerala breakfast traditional',img:'https://media.istockphoto.com/id/1254797260/photo/raw-rice-puttu-with-bengal-gram-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=49gXn8-VCjt2n39tDdSPWpXp0dw9vjHv9sSVfhM8phI=' },
      { name: 'Karimeen Pollichathu', desc: 'Pearl spot fish wrapped in banana leaf and grilled', emoji: '🐟', imgQuery: 'Karimeen Pollichathu Kerala fish banana leaf',img:'https://i.pinimg.com/736x/1a/31/a1/1a31a156cbb55a2314a6de26927a0af6.jpg' },
      { name: 'Banana Chips', desc: 'Crispy Kerala style banana chips fried in coconut oil', emoji: '🍌', imgQuery: 'Kerala banana chips crispy snack',img:'https://i.ytimg.com/vi/M3GYTBPc-CM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCq5N_sHATeHX33Q6DHUmXVL7VxJA' },
      { name: 'Munnar Tea', desc: 'Fresh brewed mountain tea from local estates', emoji: '☕', imgQuery: 'fresh brewed tea cup Munnar Kerala plantation' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMngVcO8wJ4mpbsC7kROJzlfdekQJkrm0CQ&s'},
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Nearest airport: Cochin International (110 km)', time: '3 hrs drive from Kochi airport' },
        { mode: '🚂 Train', detail: 'Nearest stations: Aluva or Ernakulam Junction', time: '4 hrs by road after train' },
        { mode: '🚌 Bus', detail: 'KSRTC buses from Kochi, Coimbatore, Chennai', time: '4-5 hrs journey' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Most convenient option, available at town center' },
        { mode: '🛺 Auto', detail: 'Available for short distances within town' },
        { mode: '🚌 Local Bus', detail: 'Budget option connecting major tourist spots' },
        { mode: '🛵 Bike Rental', detail: 'Self-ride available from ₹500/day' },
      ]
    }
  },

  goa: {
    name: 'Goa',
    state: 'Goa',
    description: 'Goa is India\'s smallest state known for its stunning beaches, vibrant nightlife, Portuguese heritage, and delicious seafood.',
    bestTime: 'November to February',
    temperature: '20°C - 32°C',
    language: 'Konkani, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=80',
    places: [
      { name: 'Baga Beach', desc: 'Most popular beach with water sports and shacks', emoji: '🏖️', imgQuery: 'Baga Beach Goa India tourists water sports',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6XLTKjnotjJkZqZ0W8yDrcyuOIS026DQhg&s' },
      { name: 'Basilica of Bom Jesus', desc: 'UNESCO World Heritage 16th century church', emoji: '⛪', imgQuery: 'Basilica Bom Jesus Goa church heritage',img:'https://media.istockphoto.com/id/2265232146/photo/aerial-view-of-sanctuary-of-bom-jesus-do-monte-braga-potugal.webp?a=1&b=1&s=612x612&w=0&k=20&c=c0bFK9xl8WKpHy5ztaF-Ir-UKw0K98n4WRN_CP6g08c=' },
      { name: 'Dudhsagar Falls', desc: 'Magnificent 4-tier 600m waterfall in jungle', emoji: '🌊', imgQuery: 'Dudhsagar waterfall Goa train jungle',img:'https://media.istockphoto.com/id/509464385/photo/goa-waterfalls.webp?a=1&b=1&s=612x612&w=0&k=20&c=lY3U98mEpzeiADOodFE1KC_YKZNWlHUjTTdz0oPmm9I=' },
      { name: 'Fort Aguada', desc: '17th century Portuguese fort overlooking the sea', emoji: '🏰', imgQuery: 'Fort Aguada Goa Portuguese lighthouse sea',img:'https://images.unsplash.com/photo-1605591514039-5f8cdda13287?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Anjuna Flea Market', desc: 'Famous Wednesday market with local handicrafts', emoji: '🛍️', imgQuery: 'Anjuna flea market Goa shopping colorful' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG2SW-CLNwch0FjNdKCckyEJDWCMeCitoWg&s'},
      { name: 'Calangute Beach', desc: 'Queen of beaches — largest beach in North Goa', emoji: '🌅', imgQuery: 'Calangute beach Goa sunset north goa',img:'https://media.istockphoto.com/id/1353072377/photo/beach-in-goa-india.jpg?s=612x612&w=0&k=20&c=WGpaC9JxQH0tCMQqJtGPVih7dH3GVHodoArtGChXIKE=' },
    ],
    hotels: [
      { name: 'Beachfront Luxury Resort', type: 'Luxury', price: '₹15,000/night', rating: '⭐ 4.9', imgQuery: 'luxury beachfront resort Goa pool ocean' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ2WYA68rFaObva43VhNgd6LlvEI1HxWoCw&s'},
      { name: 'Coconut Grove Resort', type: 'Mid Range', price: '₹4,500/night', rating: '⭐ 4.4', imgQuery: 'mid range beach resort Goa coconut',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniG7mDBgwKbPSl-GtRc7A1bQruI5ulkkZsw&s' },
      { name: 'Beach Hostel', type: 'Budget', price: '₹800/night', rating: '⭐ 4.1', imgQuery: 'budget hostel Goa beach backpacker',img:'https://images.unsplash.com/photo-1701421016474-09b19faa9f77?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    food: [
      { name: 'Fish Curry Rice', desc: 'Goa\'s staple — spicy fish curry with red rice', emoji: '🍛', imgQuery: 'Goa fish curry rice traditional meal' ,img:'https://images.unsplash.com/photo-1661081090288-fd8ffc486dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpc2glMjBDdXJyeSUyMFJpY2UlMjBnb2F8ZW58MHx8MHx8fDA%3D'},
      { name: 'Prawn Balchão', desc: 'Tangy pickled prawn dish with Goan spices', emoji: '🦐', imgQuery: 'Prawn Balchao Goa seafood dish spicy' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bFUBIUUwaLrv7IyvXbDZbeKj7DceFmuqIQ&s'},
      { name: 'Bebinca', desc: 'Traditional Goan 16-layer coconut dessert', emoji: '🍮', imgQuery: 'Bebinca Goan dessert layered coconut cake',img:'https://media.istockphoto.com/id/1352250764/photo/bebinka-on-platter-close-up-bibik-a-national-dessert-in-goa-india-multi-layer-sweet-pudding.jpg?s=2048x2048&w=is&k=20&c=cD3FJaXhpLjJQGEHJ2vO6QGIlduu0GinxAa8niyXHOs=' },
      { name: 'Vindaloo', desc: 'Fiery Portuguese-Goan pork curry', emoji: '🥩', imgQuery: 'Vindaloo Goa pork curry spicy Portuguese' ,img:'https://media.istockphoto.com/id/1165894028/photo/indian-food-chicken-vindaloo-curry-over-basmati-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=PqYlvTj1_OY_D4ZAdPPLDEvTKAEPZEKtlUcSMn4c8LU='},
      { name: 'Xacuti', desc: 'Rich coconut and roasted spice chicken curry', emoji: '🍗', imgQuery: 'Xacuti Goa chicken coconut curry' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrTj68uXzA8YzPGHjfeKoiR7ctMyDkK46wQ&s'},
      { name: 'Feni', desc: 'Local cashew spirit — Goa\'s signature drink', emoji: '🍶', imgQuery: 'Feni cashew drink Goa local spirit bottle',img:'https://cdn.thegoavilla.com/static/img/articles/feni-in-goa.jpg' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Goa International Airport (Dabolim)', time: 'Direct flights from all major cities' },
        { mode: '🚂 Train', detail: 'Madgaon & Thivim railway stations', time: 'Well connected to Mumbai and Pune' },
        { mode: '🚌 Bus', detail: 'Luxury Volvo buses from Mumbai, Pune, Bangalore', time: '10-14 hrs overnight journey' },
      ],
      local: [
        { mode: '🛵 Scooter Rental', detail: 'Most popular — ₹300-400/day' },
        { mode: '🚕 Taxi/Ola', detail: 'Available but pricier for long distances' },
        { mode: '🚌 Kadamba Bus', detail: 'State buses connect major areas cheaply' },
        { mode: '🚲 Bicycle', detail: 'Eco-friendly option near beach areas' },
      ]
    }
  },

  jaipur: {
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'Jaipur, the Pink City of India, is the capital of Rajasthan known for its stunning forts, royal palaces, vibrant bazaars and rich Rajput heritage.',
    bestTime: 'October to March',
    temperature: '12°C - 30°C',
    language: 'Hindi, Rajasthani',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=80',
    places: [
      { name: 'Amber Fort', desc: 'Magnificent hilltop fort with stunning mirror palace', emoji: '🏰', imgQuery: 'Amber Fort Jaipur Rajasthan elephant ride' ,img:'https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Hawa Mahal', desc: 'Iconic Palace of Winds with 953 intricately carved windows', emoji: '🏯', imgQuery: 'Hawa Mahal Jaipur palace of winds pink city',img:'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'City Palace', desc: 'Royal palace complex in the heart of Jaipur', emoji: '👑', imgQuery: 'City Palace Jaipur royal Rajasthan museum',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUSLW8UgcULmq8GcUp7slRwM6KF_jRYMv2Q&s' },
      { name: 'Jantar Mantar', desc: 'UNESCO astronomical observatory built in 1724', emoji: '🔭', imgQuery: 'Jantar Mantar Jaipur astronomical observatory UNESCO',img:'https://images.unsplash.com/photo-1735369931195-84544e1d24ad?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Nahargarh Fort', desc: 'Best sunset viewpoint overlooking the pink city', emoji: '🌅', imgQuery: 'Nahargarh Fort Jaipur sunset viewpoint',img:'https://plus.unsplash.com/premium_photo-1697730392744-f02b027471b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Johari Bazaar', desc: 'Famous street market for gems, jewellery and textiles', emoji: '💎', imgQuery: 'Johari Bazaar Jaipur gems jewellery market' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsjLhhunhWjPCv4HVRrW820ltZ74twgSUTA&s'},
    ],
    hotels: [
      { name: 'Heritage Palace Hotel', type: 'Luxury', price: '₹25,000/night', rating: '⭐ 4.9', imgQuery: 'luxury heritage palace hotel Jaipur Rajasthan',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiID3QWa1D5spxvCcMj6fmE2HCxs-3_46JVg&s' },
      { name: 'Haveli Boutique Hotel', type: 'Mid Range', price: '₹6,000/night', rating: '⭐ 4.6', imgQuery: 'haveli boutique hotel Jaipur mid range' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwKg6kliTHi79ogj5EvN8e19EdADHQUOmqg&s'},
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹700/night', rating: '⭐ 4.3', imgQuery: 'budget guesthouse Jaipur backpacker hostel' ,img:'https://content.jdmagicbox.com/comp/jaipur/d3/0141px141.x141.170919173008.z5d3/catalogue/hotel-manbhar-amer-jaipur-hotels-rs-1001-to-rs-2000--cmfhnihqm4-250.jpg'},
    ],
    food: [
      { name: 'Dal Baati Churma', desc: 'Rajasthan\'s most iconic dish', emoji: '🥘', imgQuery: 'Dal Baati Churma Rajasthan traditional food' ,img:'https://media.istockphoto.com/id/1458973879/photo/rajasthani-traditional-cuisine-dal-baati.jpg?s=612x612&w=0&k=20&c=bBspCwj57CtdD0m66dZpNpNU_Dou3o7l1PscMUsijQc='},
      { name: 'Laal Maas', desc: 'Fiery red mutton curry with Mathania chillies', emoji: '🍖', imgQuery: 'Laal Maas Rajasthan mutton red curry',img:'https://media.istockphoto.com/id/2234618202/photo/lamb-curry-with-tomatoes-and-fiery-chili-traditional-indian-laal-maas-served-in-a-metal-dish.jpg?s=612x612&w=0&k=20&c=BdKfR9qJUDmZwXZhB2YXJZazaWr-55IH9rm4O_8aPBs=' },
      { name: 'Ghewar', desc: 'Traditional disc-shaped Rajasthani sweet', emoji: '🍯', imgQuery: 'Ghewar Rajasthani sweet dessert disc',img:'https://cdn.uengage.io/uploads/28289/image-QXLLQ6-1753161590.jpg' },
      { name: 'Pyaaz Kachori', desc: 'Crispy pastry stuffed with spiced onions', emoji: '🥟', imgQuery: 'Pyaaz Kachori Jaipur street food crispy',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGg85QXhqjw4JbhPbjvNx5D7Vr1X7BoLnFQ&s' },
      { name: 'Mawa Kachori', desc: 'Sweet kachori stuffed with dry fruits and khoya', emoji: '🍬', imgQuery: 'Mawa Kachori Jodhpur sweet Indian snack',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwyCLILK0dsWiJYWS81o7UjA0wUuT804sEQ&s' },
      { name: 'Lassi', desc: 'Thick creamy yogurt drink — best in Jaipur', emoji: '🥛', imgQuery: 'Lassi Jaipur thick creamy yogurt drink',img:'https://media.istockphoto.com/id/519583690/photo/indian-sweet-lassi-served-in-a-big-steel-glass.jpg?s=2048x2048&w=is&k=20&c=QXLBHKfxaY910f9CLL_I6KrMFB276W4O0bgPY1opmYM=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Jaipur International Airport (Sanganer)', time: 'Direct flights from Delhi, Mumbai' },
        { mode: '🚂 Train', detail: 'Jaipur Railway Station', time: '4.5 hrs from Delhi by Shatabdi' },
        { mode: '🚌 Bus', detail: 'RSRTC Volvo buses from Delhi, Agra, Jodhpur', time: '5-6 hrs from Delhi' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common — negotiate fare before boarding' },
        { mode: '🚕 Ola/Uber', detail: 'Reliable and available throughout the city' },
        { mode: '🚌 City Bus', detail: 'JCTSL buses cover all major tourist spots' },
        { mode: '🐘 Elephant Ride', detail: 'Traditional ride up to Amber Fort' },
      ]
    }
  },

  ladakh: {
    name: 'Ladakh',
    state: 'Jammu & Kashmir',
    description: 'Ladakh is a high-altitude desert region known as the "Land of High Passes", featuring dramatic landscapes, ancient monasteries, and crystal-clear lakes.',
    bestTime: 'June to September',
    temperature: '-20°C to 25°C',
    language: 'Ladakhi, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Pangong Tso Lake', desc: 'Stunning high-altitude lake stretching into Tibet at 4350m', emoji: '🏞️', imgQuery: 'Pangong Tso Lake Ladakh blue water mountains',img:'https://media.istockphoto.com/id/481386208/photo/mountains-and-rcoks-pangong-tso-leh-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qzwlFYZ6XD89XN7TeeU-JRDAeA8r_R7WH2wvCf0LXSU=' },
      { name: 'Thiksey Monastery', desc: '12-storey monastery resembling the Potala Palace', emoji: '🛕', imgQuery: 'Thiksey Monastery Ladakh Buddhist hilltop',img: 'https://plus.unsplash.com/premium_photo-1697729581969-2876ffa65897?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Nubra Valley', desc: 'Cold desert valley with sand dunes and Bactrian camels', emoji: '🐫', imgQuery: 'Nubra Valley Ladakh sand dunes camel', img:'https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Leh Palace', desc: '17th century nine-storey royal palace overlooking Leh', emoji: '🏰', imgQuery: 'Leh Palace Ladakh royal historic mountain' ,img:'https://plus.unsplash.com/premium_photo-1697729576092-3f0abf41aa1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Magnetic Hill', desc: 'Mysterious hill where vehicles appear to move uphill', emoji: '🧲', imgQuery: 'Magnetic Hill Ladakh road mystery' ,img:'https://images.unsplash.com/photo-1641319626759-cc9ea5b18107?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Khardung La Pass', desc: 'One of the world\'s highest motorable roads at 5359m', emoji: '🏔️', imgQuery: 'Khardung La Pass Ladakh high altitude snow road',img:'https://images.unsplash.com/photo-1636790132872-6319f4b378ad?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Luxury Mountain Resort', type: 'Luxury', price: '₹12,000/night', rating: '⭐ 4.8', imgQuery: 'luxury mountain resort Ladakh Leh hotel' ,img:'Luxury Mountain Resort'},
      { name: 'Boutique Guesthouse', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.5', imgQuery: 'boutique guesthouse Ladakh Leh mountain view',img:'https://media.istockphoto.com/id/872192044/photo/monastery-in-the-nubra-valley-in-ladakh-india.jpg?s=612x612&w=0&k=20&c=VEhvA4GtFyLcQF-kGKUpLyfdf6UGEfbxwr6TSEtlpD4=' },
      { name: 'Homestay with Locals', type: 'Budget', price: '₹1,000/night', rating: '⭐ 4.4', imgQuery: 'local homestay Ladakh village traditional',img:'https://media.istockphoto.com/id/2188131345/photo/a-house-with-a-green-roof-and-a-blue-door-spiti-valley-india.jpg?s=612x612&w=0&k=20&c=EQmldYjtvRENAfEyqErnM6PH0bFTM9PDv2u5tSBEzao=' },
    ],
    food: [
      { name: 'Thukpa', desc: 'Hearty Tibetan noodle soup — perfect for cold nights', emoji: '🍜', imgQuery: 'Thukpa Tibetan noodle soup bowl Ladakh',img:'https://images.unsplash.com/photo-1628410040883-c412c8d9a0f9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Momos', desc: 'Steamed or fried dumplings with meat or vegetable filling', emoji: '🥟', imgQuery: 'Momos steamed dumplings Ladakh Tibetan food' ,img:'https://media.istockphoto.com/id/1449519082/photo/uzbek-dumplings-called-chuchvara-asian-ravioli-with-minced-meat-pelmeni-gyoza-dim-sum-jiaozi.jpg?s=612x612&w=0&k=20&c=COc0OpgQaF1nVs6Z4DvJ_hwWKJO1CXHTmfZ6tcy35CY='},
      { name: 'Skyu', desc: 'Traditional Ladakhi pasta stew with root vegetables', emoji: '🥘', imgQuery: 'Skyu Ladakhi pasta stew traditional food',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkgenih7jQEdK6YJFYK7R1hOcnfo1NH0suA&s' },
      { name: 'Butter Tea', desc: 'Salty tea made with yak butter — local staple', emoji: '🧈', imgQuery: 'Butter tea yak Ladakh Tibetan salty drink',img:'https://media.istockphoto.com/id/478399729/photo/ladhaki-woman-serving-tea-with-milk-ladakh-india.jpg?s=612x612&w=0&k=20&c=BaXZbI71ZO1LGlzEZVzQYzhgSJlWmd8gQNclqbkR71g=' },
      { name: 'Tsampa', desc: 'Roasted barley flour — traditional Ladakhi food', emoji: '🌾', imgQuery: 'Tsampa roasted barley flour Ladakh Tibet',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XrwbSPj27vXvL38aEWk48kAjUjfuMJxK3g&s' },
      { name: 'Chang', desc: 'Local barley beer — traditional Ladakhi drink', emoji: '🍺', imgQuery: 'Chang barley beer Ladakh local drink',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrNU5YAtFNJgNfIr0-TUxhyr2xIVlYeiyQA&s' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Kushok Bakula Rimpochee Airport, Leh', time: 'Direct flights from Delhi and Srinagar' },
        { mode: '🚗 Road via Manali', detail: 'Manali-Leh Highway (474 km)', time: '2 days drive, open June-October' },
        { mode: '🚗 Road via Srinagar', detail: 'Srinagar-Leh Highway (434 km)', time: '2 days drive through scenic routes' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Fixed rate taxis for all tourist spots' },
        { mode: '🛵 Bike Rental', detail: 'Royal Enfield rentals from ₹1,500/day' },
        { mode: '🚌 Minibus', detail: 'Shared minibuses between Leh and villages' },
        { mode: '🚲 Bicycle', detail: 'Available for exploring Leh town' },
      ]
    }
  },

  varanasi: {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'Varanasi, the spiritual capital of India, is one of the world\'s oldest living cities on the banks of the Ganges — a city of temples, ghats, and eternal spirituality.',
    bestTime: 'October to March',
    temperature: '5°C - 40°C',
    language: 'Hindi, Bhojpuri',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Dashashwamedh Ghat', desc: 'Main ghat famous for spectacular Ganga Aarti every evening', emoji: '🪔', imgQuery: 'Dashashwamedh Ghat Ganga Aarti Varanasi evening ceremony',img:'https://images.unsplash.com/photo-1715193678341-31634700f56b?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Kashi Vishwanath Temple', desc: 'One of the most sacred Hindu temples dedicated to Lord Shiva', emoji: '🛕', imgQuery: 'Kashi Vishwanath Temple Varanasi Shiva golden',img:'https://plus.unsplash.com/premium_photo-1661963629241-52c812d5c7f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Manikarnika Ghat', desc: 'Sacred cremation ghat burning continuously for thousands of years', emoji: '🔥', imgQuery: 'Manikarnika Ghat Varanasi cremation sacred fire' ,img:'https://images.unsplash.com/photo-1706186931884-858ac183c82d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Sarnath', desc: 'Where Buddha gave his first sermon — major Buddhist pilgrimage', emoji: '☸️', imgQuery: 'Sarnath Buddhist stupa Varanasi pilgrimage Dhamek',img:'https://images.unsplash.com/photo-1652288156243-a7505dcaa0ec?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ramnagar Fort', desc: '18th century fort and museum across the Ganges', emoji: '🏰', imgQuery: 'Ramnagar Fort Varanasi Ganges river historic',img:'https://media.istockphoto.com/id/1655778127/photo/architecture-of-ramnagar-fort-on-the-banks-of-the-ganges-in-varanasi-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=fFBQ2EAU1fkg2u2vsYR43vVAhBmYdRR14DFFd_I9WbA=' },
      { name: 'Boat Ride on Ganges', desc: 'Sunrise boat ride past 88 ghats — most magical experience', emoji: '🚣', imgQuery: 'boat ride Ganges river Varanasi sunrise ghats' ,img:'https://images.unsplash.com/photo-1676503441333-9cbb4b168ffc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ],
    hotels: [
      { name: 'Heritage Ganges Hotel', type: 'Luxury', price: '₹10,000/night', rating: '⭐ 4.8', imgQuery: 'luxury heritage hotel Varanasi Ganges view',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrK3xp-ytbAhNjb3Tj5IKpvFddsqzQCZFbaA&s' },
      { name: 'Ghat View Hotel', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.4', imgQuery: 'ghat view hotel Varanasi mid range riverside',img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/662966382.jpg?k=fbe0d92516e264d83093e16f584d63a46ba8500bce5518dc0be16e754ba1a917&o=' },
      { name: 'Ashram Guesthouse', type: 'Budget', price: '₹600/night', rating: '⭐ 4.1', imgQuery: 'budget ashram guesthouse Varanasi backpacker',img:'https://images.unsplash.com/photo-1749522025403-7a8045ea03bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    food: [
      { name: 'Baati Chokha', desc: 'Baked wheat balls with mashed spiced vegetables', emoji: '🥘', imgQuery: 'Baati Chokha Varanasi Bihar traditional food',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSat7ZcYT5tppPquR7N3A5kIWkbYm1vUq-VKg&s' },
      { name: 'Kachori Sabzi', desc: 'Famous Varanasi breakfast — crispy kachori with curry', emoji: '🥟', imgQuery: 'Kachori Sabzi Varanasi street food breakfast',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4Qxh8cD4WEUpfPWc5Dve6SXL1ikeKuQH8Q&s' },
      { name: 'Malaiyo', desc: 'Frothy milk dessert — available only in winter mornings', emoji: '🍮', imgQuery: 'Malaiyo Varanasi winter frothy milk dessert' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1vZvrj93wEnZ9p0VZ1SLYotw7Q8HnR83mg&s'},
      { name: 'Thandai', desc: 'Cold milk drink with nuts and spices', emoji: '🥛', imgQuery: 'Thandai cold milk drink nuts spices Varanasi' ,img:'https://images.unsplash.com/photo-1616429266184-7455498d96db?q=80&w=1216&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Banarasi Paan', desc: 'Famous betel leaf preparation — a Varanasi tradition', emoji: '🌿', imgQuery: 'Banarasi Paan betel leaf Varanasi tradition' ,img:'https://c.ndtvimg.com/2023-04/8r43pee_paan_625x300_05_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886'},
      { name: 'Lassi', desc: 'Thick creamy yogurt drink from Blue Lassi shop', emoji: '🧃', imgQuery: 'Blue Lassi shop Varanasi thick creamy yogurt' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTtr4WVC9Fw6yT_8o6JzlKtWA2y4XMzy6yg&s'},
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Lal Bahadur Shastri Airport, Varanasi', time: 'Direct flights from Delhi, Mumbai' },
        { mode: '🚂 Train', detail: 'Varanasi Junction — very well connected', time: '8 hrs from Delhi by overnight train' },
        { mode: '🚌 Bus', detail: 'UP Roadways from Lucknow, Allahabad', time: '3-4 hrs from Lucknow' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common way to get around' },
        { mode: '🚲 Cycle Rickshaw', detail: 'Best for navigating narrow gali lanes' },
        { mode: '🚣 Boat', detail: 'Essential for exploring all 88 ghats' },
        { mode: '🚕 Ola/Uber', detail: 'Available but limited in old city areas' },
      ]
    }
  },

  rishikesh: {
    name: 'Rishikesh',
    state: 'Uttarakhand',
    description: 'Rishikesh is the Yoga Capital of the World nestled in the Himalayan foothills on the banks of the holy Ganges — a perfect blend of spirituality and adventure.',
    bestTime: 'September to November, February to May',
    temperature: '10°C - 35°C',
    language: 'Hindi, Garhwali',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    places: [
      { name: 'Laxman Jhula', desc: 'Iconic iron suspension bridge over the Ganges built in 1929', emoji: '🌉', imgQuery: 'Laxman Jhula suspension bridge Rishikesh Ganges' ,img:'https://images.unsplash.com/photo-1718383538820-524dd564fd06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Ram Jhula', desc: 'Famous hanging bridge connecting two ashrams', emoji: '🌁', imgQuery: 'Ram Jhula bridge Rishikesh Ganges ashram',img:'https://images.unsplash.com/photo-1718528565878-7fd7c72f5196?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Triveni Ghat', desc: 'Sacred ghat famous for evening Ganga Aarti ceremony', emoji: '🪔', imgQuery: 'Triveni Ghat Rishikesh Ganga Aarti evening' ,img:'https://images.unsplash.com/photo-1653390573042-9cc02b3039f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Beatles Ashram', desc: 'Abandoned ashram where The Beatles stayed in 1968', emoji: '🎸', imgQuery: 'Beatles Ashram Rishikesh abandoned graffiti art',img:'https://images.unsplash.com/photo-1609786234375-f3cd71b66f7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: ' Neer Garh Waterfall', desc: 'Beautiful waterfall 3km trek from Laxman Jhula', emoji: '🌊', imgQuery: 'Neer Garh waterfall Rishikesh trek Uttarakhand' ,img:'https://plus.unsplash.com/premium_photo-1664361480975-4c63828f5d88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'White Water Rafting', desc: 'Thrilling river rafting on Grade 3-4 rapids', emoji: '🚣', imgQuery: 'white water rafting Rishikesh Ganges rapids adventure',img:'https://images.unsplash.com/photo-1641584495089-5914d85d9bcc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Luxury Riverside Resort', type: 'Luxury', price: '₹9,000/night', rating: '⭐ 4.7', imgQuery: 'luxury riverside resort Rishikesh Ganges view',img:'https://media-cdn.tripadvisor.com/media/photo-s/0e/0d/31/ba/view-of-the-resort.jpg' },
      { name: 'Yoga Retreat Hotel', type: 'Mid Range', price: '₹2,500/night', rating: '⭐ 4.4', imgQuery: 'yoga retreat hotel Rishikesh meditation ashram',img:'https://www.ekamyogashala.com/landing-assets/assets/images/gallery-img-7.webp' },
      { name: 'Ashram Stay', type: 'Budget', price: '₹500/night', rating: '⭐ 4.2', imgQuery: 'ashram budget stay Rishikesh spiritual simple',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f8/a7/ed/sivananda-ashram-rishikesh.jpg?w=900&h=500&s=1' },
    ],
    food: [
      { name: 'Aloo Puri', desc: 'Classic North Indian breakfast with spiced potato curry', emoji: '🥘', imgQuery: 'Aloo Puri North Indian breakfast potato curry',img:'https://media.istockphoto.com/id/1155482601/photo/image-of-traditional-indian-breakfast-food-puri-with-spiced-potato-aloo-bhaji-puri-bhaji.webp?a=1&b=1&s=612x612&w=0&k=20&c=58CgHd-N2l1gzH3059M7uAwxY0dj9-VTjRxufTeyH6k=' },
      { name: 'Chole Bhature', desc: 'Fluffy fried bread with spicy chickpea curry', emoji: '🫓', imgQuery: 'Chole Bhature chickpea curry fried bread Indian' ,img:'https://media.istockphoto.com/id/1865859468/photo/chole-bathure.jpg?s=2048x2048&w=is&k=20&c=b2pCaTd93-yswSgd0gZuJzPEnjBoUjl6KWg27IiJmaY='},
      { name: 'Garhwali Thali', desc: 'Traditional Uttarakhand meal with local vegetables', emoji: '🍛', imgQuery: 'Garhwali Thali Uttarakhand traditional meal plate',img:'https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Rhododendron Juice', desc: 'Local Himalayan flower juice unique to the region', emoji: '🌸', imgQuery: 'Rhododendron juice Himalayan flower drink pink',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi22g7tdoKAIqejB1_eRMkPNJLWstJbz87w&s' },
      { name: 'Singori', desc: 'Traditional sweet wrapped in Maalu leaves', emoji: '🍬', imgQuery: 'Singori sweet Uttarakhand leaf wrapped traditional',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYrQw1ZO9-Pgcq9mrouxCaT2TLhSbm_RnBQ&s' },
      { name: 'Chai', desc: 'Ginger and tulsi tea from riverside cafes', emoji: '☕', imgQuery: 'masala chai ginger tulsi tea riverside cafe India' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopWrjk9CfIWPqKgLjTSQellET0lIFui3GuA&s'},
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Jolly Grant Airport, Dehradun (35 km)', time: '45 min drive from airport' },
        { mode: '🚂 Train', detail: 'Rishikesh Railway Station or Haridwar (25 km)', time: '5 hrs from Delhi by train' },
        { mode: '🚌 Bus', detail: 'UPSRTC buses from Delhi, Haridwar', time: '6-7 hrs from Delhi' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common for getting around town' },
        { mode: '🚕 Taxi', detail: 'Available for nearby treks and destinations' },
        { mode: '🚲 Bicycle', detail: 'Best way to explore along the Ganges' },
        { mode: '🚶 Walking', detail: 'Old town area best explored on foot' },
      ]
    }
  },

  coorg: {
    name: 'Coorg',
    state: 'Karnataka',
    description: 'Coorg, also known as Kodagu, is the Scotland of India — a lush hill station covered in coffee plantations, spice estates, and misty forests in the Western Ghats.',
    bestTime: 'October to March',
    temperature: '13°C - 28°C',
    language: 'Kodava, Kannada',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1661492359562-419ba0ebaece?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29vcmd8ZW58MHx8MHx8fDA%3D',
    places: [
      { name: 'Abbey Falls', desc: 'Stunning 70-foot waterfall surrounded by coffee estates', emoji: '🌊', imgQuery: 'Abbey Falls Coorg Karnataka waterfall coffee estate',img:'https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Raja\'s Seat', desc: 'Famous viewpoint where kings watched sunset over valleys', emoji: '🌅', imgQuery: 'Raja Seat Coorg viewpoint sunset valley Madikeri',img:'https://images.unsplash.com/photo-1630641628490-a13d2453b2ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Namdroling Monastery', desc: 'Stunning Golden Temple — largest Tibetan monastery in India', emoji: '🛕', imgQuery: 'Namdroling Monastery Golden Temple Coorg Tibetan',img:'https://images.unsplash.com/photo-1672658001522-cda1ac42ef3b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Dubare Elephant Camp', desc: 'Interact and bathe with elephants on Cauvery riverbank', emoji: '🐘', imgQuery: 'Dubare Elephant Camp Coorg Karnataka river bathe',img:'https://images.unsplash.com/photo-1695339060174-7bdca449f485?q=80&w=940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Talacauvery', desc: 'Origin of river Cauvery with sacred temple and hilltop views', emoji: '💧', imgQuery: 'Talacauvery Cauvery river origin Coorg temple',img:'https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Coffee Plantation Tour', desc: 'Walk through aromatic coffee and spice estates', emoji: '☕', imgQuery: 'coffee plantation tour Coorg Karnataka estate walk',img:'https://lakshmisharath.com/wp-content/uploads/2013/11/DSC_4543-001.jpg' },
    ],
    hotels: [
      { name: 'Luxury Plantation Resort', type: 'Luxury', price: '₹10,000/night', rating: '⭐ 4.8', imgQuery: 'luxury plantation resort Coorg coffee estate pool',img:'https://dec1osz9a7g7e.cloudfront.net/windflower-coorg-windflower-coorg-aboutandus01.jpg' },
      { name: 'Coffee Estate Stay', type: 'Mid Range', price: '₹4,000/night', rating: '⭐ 4.5', imgQuery: 'coffee estate stay Coorg mid range Karnataka' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q8Kt9M5qkBpSAzuFpJ-Fykm09_-50gKdKQ&s'},
      { name: 'Homestay in Hills', type: 'Budget', price: '₹1,500/night', rating: '⭐ 4.3', imgQuery: 'budget homestay Coorg hills Karnataka local' ,img:'https://images.unsplash.com/photo-1767086517920-97440bf91c2e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ],
    food: [
      { name: 'Pandi Curry', desc: 'Coorg\'s famous pork curry with Kachampuli vinegar', emoji: '🥩', imgQuery: 'Pandi Curry Coorg pork Kodava traditional food',img:'https://plus.unsplash.com/premium_photo-1723708871094-2c02cf5f5394?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Kadambuttu', desc: 'Steamed rice dumplings — traditional Kodava dish', emoji: '🫓', imgQuery: 'Kadambuttu steamed rice dumpling Coorg Kodava',img:'https://www.coorgtourisminfo.com/wp-content/uploads/2023/06/kadambuttu.jpg' },
      { name: 'Akki Rotti', desc: 'Crispy rice flour flatbread with coconut chutney', emoji: '🫓', imgQuery: 'Akki Rotti rice flatbread Karnataka coconut chutney',img:'https://media.sailusfood.com/wp-content/uploads/2013/03/akki-roti-coorgi-recipe.jpg' },
      { name: 'Coorg Honey', desc: 'Wild forest honey unique to Kodagu region', emoji: '🍯', imgQuery: 'wild forest honey Coorg Kodagu natural bottle',img:'https://plus.unsplash.com/premium_photo-1663957861996-8093b48a22e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Filter Coffee', desc: 'Freshly brewed South Indian filter coffee', emoji: '☕', imgQuery: 'South Indian filter coffee tumbler davara fresh',img:'https://images.unsplash.com/photo-1711011299088-369869d3aa06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Bamboo Shoot Curry', desc: 'Unique curry made with fresh bamboo shoots', emoji: '🎋', imgQuery: 'bamboo shoot curry Coorg Karnataka traditional dish',img:'https://media.istockphoto.com/id/1631391764/photo/chicken-and-bamboo-shoot-in-red-curry-food-preparation.webp?a=1&b=1&s=612x612&w=0&k=20&c=hY-998jrBlfmGh8uK6bKUPHsSwYV_WkzJdj5NZP35Ao=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Mangalore Airport (160 km) or Bangalore (260 km)', time: '3-4 hrs drive from either airport' },
        { mode: '🚂 Train', detail: 'Nearest station: Mysore (120 km)', time: '3 hrs drive from Mysore station' },
        { mode: '🚌 Bus', detail: 'KSRTC buses from Bangalore, Mysore, Mangalore', time: '5-6 hrs from Bangalore' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Best option — hire for full day sightseeing' },
        { mode: '🛵 Bike Rental', detail: 'Available in Madikeri town from ₹400/day' },
        { mode: '🚌 Local Bus', detail: 'Connects Madikeri to major villages' },
        { mode: '🚶 Walking', detail: 'Best for coffee estate and nature walks' },
      ]
    }
  },

  mysore: {
    name: 'Mysore',
    state: 'Karnataka',
    description: 'Mysore, the City of Palaces, is Karnataka\'s cultural capital famous for its magnificent Mysore Palace, silk sarees, sandalwood, and the grand Dasara festival.',
    bestTime: 'October to February',
    temperature: '15°C - 30°C',
    language: 'Kannada',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Mysore Palace', desc: 'India\'s most visited monument — stunning Indo-Saracenic palace', emoji: '🏰', imgQuery: 'Mysore Palace illuminated Karnataka royal Indo-Saracenic',img:'https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Chamundi Hills', desc: '1000-step climb to Sri Chamundeshwari Temple', emoji: '⛰️', imgQuery: 'Chamundi Hills Mysore temple steps Karnataka',img:'https://images.unsplash.com/photo-1557062975-96113e46608b?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Brindavan Gardens', desc: 'Beautiful terraced garden with illuminated musical fountain', emoji: '🌸', imgQuery: 'Brindavan Gardens Mysore fountain illuminated terraced',img:'https://images.unsplash.com/photo-1651349776781-7a8cf162a494?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mysore Zoo', desc: 'One of India\'s oldest and best maintained zoos', emoji: '🦁', imgQuery: 'Mysore Zoo animals oldest India Karnataka' ,img:'https://plus.unsplash.com/premium_photo-1664302779432-d8194b3c1220?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Devaraja Market', desc: 'Colorful traditional market for flowers, spices and silk', emoji: '🛍️', imgQuery: 'Devaraja Market Mysore flowers colorful traditional' ,img:'https://images.unsplash.com/photo-1603518944268-64850b9f1f1c?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'St. Philomena\'s Church', desc: 'Gothic style church built in 1936', emoji: '⛪', imgQuery: 'St Philomenas Church Mysore Gothic architecture',img:'https://images.unsplash.com/photo-1710255074250-43c6c63f8ca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Heritage Palace Hotel', type: 'Luxury', price: '₹9,000/night', rating: '⭐ 4.8', imgQuery: 'luxury heritage hotel Mysore palace Karnataka',img:'https://plus.unsplash.com/premium_photo-1697730494992-7d5a0c46ea52?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Boutique City Hotel', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.4', imgQuery: 'boutique hotel Mysore city mid range Karnataka',img:'https://images.unsplash.com/photo-1671683886944-6478e6c84cbc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹700/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Mysore backpacker hostel',img:'https://images.unsplash.com/photo-1530760861100-09843150d93c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVkZ2V0JTIwaG90ZWwlMjBteXNvcmV8ZW58MHx8MHx8fDA%3D' },
    ],
    food: [
      { name: 'Mysore Pak', desc: 'Famous ghee-based sweet invented in Mysore Palace kitchen', emoji: '🍮', imgQuery: 'Mysore Pak sweet ghee traditional Karnataka dessert',img:'https://images.unsplash.com/photo-1530760861100-09843150d93c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVkZ2V0JTIwaG90ZWwlMjBteXNvcmV8ZW58MHx8MHx8fDA%3D' },
      { name: 'Mysore Masala Dosa', desc: 'Crispy dosa with spicy red chutney inside', emoji: '🫓', imgQuery: 'Mysore Masala Dosa crispy red chutney South Indian',img:'https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: ' ', desc: 'Sweet flatbread stuffed with coconut and jaggery', emoji: '🍞', imgQuery: 'Obbattu sweet flatbread coconut jaggery Karnataka',img:'https://media.istockphoto.com/id/1489945739/photo/desi-breakfast-omelet-halwa-and-paratha-served-in-dish-isolated-on-background-top-view-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=lIl0jCeX7wX0FKpv_Gvwl4KpU5sT-CuNFzYIqfY62us=' },
      { name: 'Nanjangud Banana', desc: 'Famous GI-tagged banana unique to the region', emoji: '🍌', imgQuery: 'Nanjangud banana Karnataka GI tag unique',img:'https://media.istockphoto.com/id/1255671165/photo/fresh-fruit-banana-kapok.webp?a=1&b=1&s=612x612&w=0&k=20&c=XRw0YADTEBL6lycYL0x6lffteFprcm6OzefyMg3ioZg=' },
      { name: 'Kesari Bath', desc: 'Saffron semolina pudding — popular Mysore sweet', emoji: '🍮', imgQuery: 'Kesari Bath saffron semolina pudding South Indian sweet',img:'https://media.istockphoto.com/id/2229065351/photo/south-indian-dessert-rava-kesari-bath.webp?a=1&b=1&s=612x612&w=0&k=20&c=OP5tbuioEL4e7HlgANeM4uHMdCSwJAHXTQic7AG81R0=' },
      { name: 'Filter Coffee', desc: 'Authentic South Indian coffee in traditional tumbler', emoji: '☕', imgQuery: 'South Indian filter coffee tumbler traditional Mysore',img:'https://media.istockphoto.com/id/1589593378/photo/filter-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=LfgSpkAj_Av4ukZYyCrxwwYclclIaJNtbLTqVPKPCQw=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Mysore Airport (limited) or Bangalore (150 km)', time: '3 hrs from Bangalore by road' },
        { mode: '🚂 Train', detail: 'Mysore Junction — well connected to Bangalore', time: '2 hrs from Bangalore by Shatabdi' },
        { mode: '🚌 Bus', detail: 'KSRTC frequent buses from Bangalore', time: '3 hrs by Volvo bus' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common — metered autos available' },
        { mode: '🚕 Ola/Uber', detail: 'Widely available throughout the city' },
        { mode: '🚌 City Bus', detail: 'MCTD buses connect all major areas' },
        { mode: '🚲 Cycle Rental', detail: 'Available near railway station' },
      ]
    }
  },

  andaman: {
    name: 'Andaman',
    state: 'Andaman & Nicobar Islands',
    description: 'The Andaman Islands are a tropical paradise in the Bay of Bengal with pristine white beaches, crystal clear turquoise water, vibrant coral reefs and dense rainforests.',
    bestTime: 'October to May',
    temperature: '22°C - 32°C',
    language: 'Hindi, Bengali, Tamil',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
    places: [
      { name: 'Radhanagar Beach', desc: 'Asia\'s best beach — stunning white sand and turquoise water', emoji: '🏖️', imgQuery: 'Radhanagar Beach Andaman white sand turquoise water Havelock',img:'https://images.unsplash.com/photo-1732946801536-6c19e49a0caf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Cellular Jail', desc: 'Historic colonial prison — now a National Memorial', emoji: '🏛️', imgQuery: 'Cellular Jail Andaman Port Blair historic colonial',img:'https://images.unsplash.com/photo-1678810982243-2d309522e93e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Elephant Beach', desc: 'Best spot for snorkeling with vibrant coral reefs', emoji: '🤿', imgQuery: 'Elephant Beach Andaman snorkeling coral reef Havelock',img:'https://images.unsplash.com/photo-1727366616623-0c95a70b9056?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ross Island', desc: 'Ruins of former British administrative headquarters', emoji: '🏚️', imgQuery: 'Ross Island Andaman British ruins heritage',img:'https://plus.unsplash.com/premium_photo-1669052824052-c6484a8214b3?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Baratang Island', desc: 'Famous for limestone caves and mud volcanoes', emoji: '🌋', imgQuery: 'Baratang Island Andaman limestone caves mangrove' ,img:'https://plus.unsplash.com/premium_photo-1664303291529-8867054222f6?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Neil Island', desc: 'Quiet island paradise with natural rock formations', emoji: '🪸', imgQuery: 'Neil Island Andaman coral reef natural bridge quiet',img:'https://images.unsplash.com/photo-1758908296361-1674a2910420?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Beachfront Luxury Resort', type: 'Luxury', price: '₹18,000/night', rating: '⭐ 4.9', imgQuery: 'luxury beachfront resort Andaman Havelock ocean pool',img:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Island Resort', type: 'Mid Range', price: '₹5,000/night', rating: '⭐ 4.5', imgQuery: 'island resort Andaman mid range beach hut' ,img:'https://images.unsplash.com/photo-1768293722296-85af3bf19b28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Beach Guesthouse', type: 'Budget', price: '₹1,200/night', rating: '⭐ 4.2', imgQuery: 'budget beach guesthouse Andaman backpacker',img:'https://images.unsplash.com/photo-1551628313-a7ca01da735e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    food: [
      { name: 'Fresh Seafood', desc: 'Grilled fish, lobster and prawns straight from the ocean', emoji: '🦞', imgQuery: 'fresh grilled seafood lobster prawn Andaman beach',img:'https://plus.unsplash.com/premium_photo-1717345994192-f5bc10b61c09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Fish Curry', desc: 'Andamanese style coconut based fish curry', emoji: '🍛', imgQuery: 'Andaman fish curry coconut South Indian',img:'https://images.unsplash.com/photo-1626508035297-0cd27c397d67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Coconut Prawn Curry', desc: 'Fresh prawns cooked in coconut milk and spices', emoji: '🦐', imgQuery: 'coconut prawn curry Andaman seafood dish',img:'https://images.unsplash.com/photo-1594397107804-22dfcdef5a06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Coconut Water', desc: 'Fresh tender coconut — best drink on the islands', emoji: '🥥', imgQuery: 'fresh tender coconut water tropical island drink',img:'https://plus.unsplash.com/premium_photo-1680497044033-5dc96f699b81?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Red Snapper', desc: 'Grilled red snapper fish with local spices', emoji: '🐟', imgQuery: 'grilled red snapper fish Indian spices seafood',img:'https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Tuna Tikka', desc: 'Marinated tuna grilled on open fire', emoji: '🔥', imgQuery: 'tuna tikka grilled marinated seafood barbecue',img:'https://plus.unsplash.com/premium_photo-1695658518501-4de2a9def957?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Veer Savarkar Airport, Port Blair', time: 'Direct flights from Delhi, Chennai, Kolkata' },
        { mode: '🚢 Ship', detail: 'Ships from Chennai, Kolkata, Visakhapatnam', time: '50-60 hrs by sea — scenic experience' },
      ],
      local: [
        { mode: '⛴️ Ferry', detail: 'Government ferries connect all islands' },
        { mode: '🚕 Taxi', detail: 'Available in Port Blair for city travel' },
        { mode: '🛵 Bike Rental', detail: 'Best way to explore Havelock and Neil islands' },
        { mode: '🚌 Bus', detail: 'State buses available in Port Blair' },
      ]
    }
  },

  darjeeling: {
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Darjeeling, the Queen of the Hills, is famous worldwide for its tea gardens, the iconic Toy Train, stunning views of Kanchenjunga, and colonial era charm.',
    bestTime: 'March to May, September to November',
    temperature: '5°C - 25°C',
    language: 'Nepali, Bengali, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80',
    places: [
      { name: 'Tiger Hill', desc: 'Best sunrise viewpoint with Kanchenjunga and Everest visible', emoji: '🌄', imgQuery: 'Tiger Hill Darjeeling sunrise Kanchenjunga Everest view',img:'https://images.unsplash.com/photo-1590256518627-c9f8a6855185?q=80&w=1202&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Darjeeling Himalayan Railway', desc: 'UNESCO World Heritage Toy Train through the hills', emoji: '🚂', imgQuery: 'Darjeeling Himalayan Railway toy train UNESCO heritage hills',img:'https://plus.unsplash.com/premium_photo-1676050292088-94813fec172d?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Happy Valley Tea Estate', desc: 'Oldest tea garden open for public tours and tasting', emoji: '🍵', imgQuery: 'Happy Valley Tea Estate Darjeeling garden tour',img:'https://plus.unsplash.com/premium_photo-1692049123180-0c53f447a8e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Padmaja Naidu Zoo', desc: 'Famous for rare Red Pandas and Snow Leopards', emoji: '🐼', imgQuery: 'Red Panda Darjeeling zoo Himalayan snow leopard' ,img:'https://images.unsplash.com/photo-1672899204202-170f1194b7ee?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Batasia Loop', desc: 'Stunning spiral railway loop with war memorial', emoji: '🌀', imgQuery: 'Batasia Loop Darjeeling railway spiral war memorial' ,img:'https://images.unsplash.com/photo-1682862117032-4654a22081d4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Ghoom Monastery', desc: 'Oldest Tibetan monastery in Darjeeling built in 1850', emoji: '🛕', imgQuery: 'Ghoom Monastery Darjeeling Tibetan Buddhist oldest',img:'https://images.unsplash.com/photo-1674592746227-46b087ce7e9b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Heritage Colonial Hotel', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.8', imgQuery: 'luxury colonial heritage hotel Darjeeling mountain view',img:'https://images.unsplash.com/photo-1776405876570-63f340cec9e1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Hill View Boutique', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.5', imgQuery: 'hill view boutique hotel Darjeeling mid range',img:'https://media.istockphoto.com/id/2216992939/photo/aesthetic-religious-architecture-under-a-calm-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=xER1rPxDSRtfLWUNnYHvlTKXFu246v2se4KH3UNtA5E=' },
      { name: 'Budget Homestay', type: 'Budget', price: '₹900/night', rating: '⭐ 4.3', imgQuery: 'budget homestay Darjeeling local family hills',img:'https://images.unsplash.com/photo-1765419778376-e24f09e2377e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    food: [
      { name: 'Darjeeling Tea', desc: 'World\'s finest first flush tea — must try at source', emoji: '🍵', imgQuery: 'Darjeeling first flush tea cup garden fresh brew' ,img:'https://images.unsplash.com/photo-1640785428805-e8afa6c46008?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Momos', desc: 'Steamed dumplings with meat or veggie filling', emoji: '🥟', imgQuery: 'steamed momos dumplings Darjeeling Nepali food',img:'https://images.unsplash.com/photo-1738608084602-f9543952188e?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Thukpa', desc: 'Tibetan noodle soup perfect for cold evenings', emoji: '🍜', imgQuery: 'Thukpa Tibetan noodle soup Darjeeling cold evening',img:'https://media.istockphoto.com/id/2263127123/photo/fresh-keema-noodles-topped-with-minced-meat-and-vegetables-served-at-a-local-eatery-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=SifbLhFD49ztDnqewkQFhCWtZgLbLIsGFH0tu52A3rM=' },
      { name: 'Sel Roti', desc: 'Traditional Nepali ring-shaped sweet fried bread', emoji: '🍩', imgQuery: 'Sel Roti Nepali fried bread ring traditional sweet',img:'https://images.unsplash.com/photo-1600935926387-12d9b03066f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VsJTIwUm90aXxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Gundruk', desc: 'Fermented leafy green vegetable soup', emoji: '🥗', imgQuery: 'Gundruk fermented leafy vegetable soup Nepali food',img:'https://media.istockphoto.com/id/2194989246/photo/traditional-indonesian-boiled-papaya-leaves-in-a-wok.webp?a=1&b=1&s=612x612&w=0&k=20&c=wps9tdh2zxYTFegHAUZcHtBrNXzTTL0jjPiBySg387o=' },
      { name: 'Tongba', desc: 'Traditional millet beer served in bamboo mug', emoji: '🎋', imgQuery: 'Tongba millet beer bamboo mug Darjeeling Nepali drink',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1ppFevnNL4rqmk0f4Akee5we773QIDCtvA&s' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Bagdogra Airport (70 km from Darjeeling)', time: '2 hrs drive from airport' },
        { mode: '🚂 Train', detail: 'New Jalpaiguri (NJP) then Toy Train', time: '6-7 hrs from Kolkata to NJP' },
        { mode: '🚌 Bus', detail: 'Shared jeeps and buses from Siliguri', time: '3 hrs from Siliguri' },
      ],
      local: [
        { mode: '🚂 Toy Train', detail: 'UNESCO heritage train — magical experience' },
        { mode: '🚕 Shared Jeep', detail: 'Most common transport between spots' },
        { mode: '🚶 Walking', detail: 'Mall Road and town best explored on foot' },
        { mode: '🚕 Taxi', detail: 'Private taxis for full day tours' },
      ]
    }
  },

  udaipur: {
    name: 'Udaipur',
    state: 'Rajasthan',
    description: 'Udaipur, the City of Lakes, is Rajasthan\'s most romantic city known for its stunning lake palaces, beautiful ghats, and rich royal heritage.',
    bestTime: 'September to March',
    temperature: '10°C - 35°C',
    language: 'Hindi, Rajasthani',
    currency: 'INR',
    image: 'https://plus.unsplash.com/premium_photo-1661964079694-ccfaf7dc8028?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Lake Palace', desc: 'Stunning white marble palace floating on Lake Pichola', emoji: '🏰', imgQuery: 'Lake Palace Udaipur white marble Pichola floating hotel',img:'https://images.unsplash.com/photo-1695956353120-54ce5e91632b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'City Palace', desc: 'Largest palace complex in Rajasthan on Lake Pichola', emoji: '👑', imgQuery: 'City Palace Udaipur Rajasthan Lake Pichola royal',img:'https://images.unsplash.com/photo-1575994532957-773da2f83eb1?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Jagdish Temple', desc: '17th century temple with intricate stone carvings', emoji: '🛕', imgQuery: 'Jagdish Temple Udaipur stone carvings Hindu 17th century',img:'https://media.istockphoto.com/id/1175232127/photo/jagdish-temple-during-sunset-also-called-jagnath-temple-in-udaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=P09oxhcKeYkCSC653sCUT3FfGPf16O2j-7YtS3w1MPE=' },
      { name: 'Fateh Sagar Lake', desc: 'Beautiful artificial lake with island gardens', emoji: '🌊', imgQuery: 'Fateh Sagar Lake Udaipur boat island garden' ,img:'https://images.unsplash.com/photo-1656060524540-5dfe46313e70?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Saheliyon Ki Bari', desc: 'Garden of maids with fountains and marble elephants', emoji: '🌸', imgQuery: 'Saheliyon Ki Bari Udaipur garden fountain marble elephants',img:'https://images.unsplash.com/photo-1651306614297-9c1301ad460e?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Monsoon Palace', desc: 'Hilltop palace with panoramic city and lake views', emoji: '🌅', imgQuery: 'Monsoon Palace Udaipur hilltop sunset panoramic view',img:'https://images.unsplash.com/photo-1773730681917-746399eb20c7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Lake Palace Hotel', type: 'Luxury', price: '₹35,000/night', rating: '⭐ 5.0', imgQuery: 'Lake Palace Hotel Udaipur luxury floating marble',img:'https://images.unsplash.com/photo-1718797054890-e58742729f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFrZSUyMFBhbGFjZSUyMEhvdGVsJTIwVWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Haveli Lake View', type: 'Mid Range', price: '₹5,000/night', rating: '⭐ 4.6', imgQuery: 'haveli lake view hotel Udaipur mid range Rajasthan',img:'https://pix10.agoda.net/hotelImages/25922538/-1/474ef2ca6a046dcf00738797701a2988.jpg?ca=20&ce=0&s=414x232' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹800/night', rating: '⭐ 4.2', imgQuery: 'budget guesthouse Udaipur backpacker hostel lake',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7-CSMoh0U15T4qkMfx7W2ul0HVmZHvn1ow&s' },
    ],
    food: [
      { name: 'Dal Baati Churma', desc: 'Rajasthan\'s iconic dish with ghee-soaked wheat balls', emoji: '🥘', imgQuery: 'Dal Baati Churma Rajasthan ghee wheat traditional',img:'https://media.istockphoto.com/id/1431725955/photo/traditional-rajasthani-food-thali.jpg?s=2048x2048&w=is&k=20&c=BRWuXzX0Pmn36cIVctvpttf-fUAn_0iXxuJcEeg8ipQ=' },
      { name: 'Gatte Ki Sabzi', desc: 'Gram flour dumplings in tangy yogurt curry', emoji: '🍲', imgQuery: 'Gatte Ki Sabzi gram flour dumplings yogurt curry Rajasthan',img:'https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Malpua', desc: 'Sweet pancakes soaked in sugar syrup', emoji: '🥞', imgQuery: 'Malpua sweet pancake sugar syrup Indian dessert',img:'https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ker Sangri', desc: 'Traditional Rajasthani desert beans and berries dish', emoji: '🫘', imgQuery: 'Ker Sangri Rajasthan desert beans berries traditional',img:'https://www.whiskaffair.com/wp-content/uploads/2020/09/Ker-Sangri-2-3.jpg' },
      { name: 'Lassi', desc: 'Sweet or salty thick yogurt drink', emoji: '🥛', imgQuery: 'Lassi thick yogurt drink Rajasthan sweet salty',img:'https://images.unsplash.com/photo-1692620609860-be6717812f71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mirchi Bada', desc: 'Spicy chilli fritter — popular street snack', emoji: '🌶️', imgQuery: 'Mirchi Bada chilli fritter Rajasthan street food spicy' ,img:'https://manjulaskitchen.com/wp-content/uploads/mirchi_vada_chili_fritters.jpg'},
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Maharana Pratap Airport, Udaipur', time: 'Direct flights from Delhi, Mumbai, Jaipur' },
        { mode: '🚂 Train', detail: 'Udaipur City Railway Station', time: '12 hrs from Delhi, 8 hrs from Jaipur' },
        { mode: '🚌 Bus', detail: 'RSRTC buses from Jaipur, Jodhpur, Ahmedabad', time: '6-8 hrs from Jaipur' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most convenient for city sightseeing' },
        { mode: '⛵ Boat', detail: 'Essential for exploring Lake Pichola' },
        { mode: '🚕 Ola/Uber', detail: 'Available throughout the city' },
        { mode: '🛵 Bike Rental', detail: 'Great for exploring outskirts' },
      ]
    }
  },

  shimla: {
    name: 'Shimla',
    state: 'Himachal Pradesh',
    description: 'Shimla, the Queen of Hills, was the summer capital of British India. This charming hill station is known for its colonial architecture, toy train, and snow-capped peaks.',
    bestTime: 'March to June, December to January',
    temperature: '-5°C to 25°C',
    language: 'Hindi, Pahari',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80',
    places: [
      { name: 'The Ridge', desc: 'Large open space in heart of Shimla with mountain views', emoji: '🏔️', imgQuery: 'The Ridge Shimla mountain view colonial open space',img:'https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mall Road', desc: 'Colonial era shopping street — heart of Shimla', emoji: '🛍️', imgQuery: 'Mall Road Shimla colonial shopping street Himachal',img:'https://images.unsplash.com/photo-1682693690771-2afadb405bd6?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Jakhu Temple', desc: 'Ancient Hanuman temple atop highest peak in Shimla', emoji: '🛕', imgQuery: 'Jakhu Temple Shimla Hanuman hilltop monkey Himachal' ,img:'https://media.istockphoto.com/id/1047693366/photo/jakhoo-temple-shimla.webp?a=1&b=1&s=612x612&w=0&k=20&c=L8SBaAa5tHHaqb3OUSSt8RI9fr_RPfuZAZbA0Gp_buY='},
      { name: 'Kufri', desc: 'Snow sports hub with skiing and yak rides in winter', emoji: '⛷️', imgQuery: 'Kufri Shimla snow skiing yak ride winter Himachal' ,img:'https://hblimg.mmtcdn.com/content/hubble/img/shimla/mmt/activities/m_activities-shimla-kufri_l_400_640.jpg'},
      { name: 'Christ Church', desc: 'Second oldest church in North India built in 1857', emoji: '⛪', imgQuery: 'Christ Church Shimla colonial 1857 North India' ,img:'https://plus.unsplash.com/premium_photo-1733338807471-a68d0e6ba803?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Kalka-Shimla Toy Train', desc: 'UNESCO Heritage toy train through 102 tunnels', emoji: '🚂', imgQuery: 'Kalka Shimla toy train UNESCO heritage tunnel mountains' ,img:'https://media.istockphoto.com/id/2236894416/photo/kalka-shimla-railway-the-toy-train-in-himalaya.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZjlKCeKdiCVMJvCIwSktqLjC4yKk_hoVIygAnxayOs0='},
    ],
    hotels: [
      { name: 'Heritage Colonial Hotel', type: 'Luxury', price: '₹10,000/night', rating: '⭐ 4.8', imgQuery: 'luxury heritage colonial hotel Shimla mountain view',img:'https://plus.unsplash.com/premium_photo-1733342441106-96a5e23b2c9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mountain View Hotel', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.4', imgQuery: 'mountain view hotel Shimla mid range Himachal',img:'https://plus.unsplash.com/premium_photo-1697730350129-de0e9f2b1e82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Budget Hostel', type: 'Budget', price: '₹800/night', rating: '⭐ 4.1', imgQuery: 'budget hostel Shimla backpacker Himachal Pradesh',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/5b/bf/b4/a-charming-yellow-and.jpg?w=900&h=500&s=1' },
    ],
    food: [
      { name: 'Siddu', desc: 'Traditional Himachali steamed bread stuffed with poppy seeds', emoji: '🫓', imgQuery: 'Siddu Himachali steamed bread poppy seeds traditional',img:'https://plus.unsplash.com/premium_photo-1695297516740-6f9ceff51404?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2lkZHUlMjBIaW1hY2hhbGklMjBzdGVhbWVkJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D' },
      { name: 'Chha Gosht', desc: 'Marinated lamb curry cooked in yogurt and spices', emoji: '🍖', imgQuery: 'Chha Gosht lamb curry yogurt Himachal Pradesh' ,img:'https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Madra', desc: 'Chickpeas cooked in yogurt gravy — Himachali specialty', emoji: '🥘', imgQuery: 'Madra chickpeas yogurt gravy Himachal Pradesh Chamba',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgQfz4buz4Ac2X1yVppeW8mFMy8wNXbbZRQ&s' },
      { name: 'Babru', desc: 'Black gram stuffed kachori — local street food', emoji: '🥟', imgQuery: ' street food',img:'https://images.unsplash.com/photo-1683533678036-46ec6a0163d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFicnUlMjBibGFjayUyMGdyYW0lMjBzdHVmZmVkJTIwa2FjaG9yaSUyMFNoaW1sYXxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Aktori', desc: 'Buckwheat pancake — traditional hill food', emoji: '🥞', imgQuery: 'Aktori buckwheat pancake Himachal Pradesh hill food',img:'https://images.herzindagi.info/image/2023/Dec/aktori-himachali-dish-recipe.jpg' },
      { name: 'Rhododendron Juice', desc: 'Refreshing local juice made from hill flowers', emoji: '🌸', imgQuery: 'Rhododendron flower juice Himachal hills pink drink',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi22g7tdoKAIqejB1_eRMkPNJLWstJbz87w&s' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Shimla Airport (limited) or Chandigarh (120 km)', time: '3 hrs drive from Chandigarh' },
        { mode: '🚂 Train', detail: 'Kalka-Shimla UNESCO Toy Train from Kalka', time: '5 hrs scenic toy train journey' },
        { mode: '🚌 Bus', detail: 'HRTC buses from Delhi, Chandigarh', time: '9-10 hrs from Delhi' },
      ],
      local: [
        { mode: '🚶 Walking', detail: 'Mall Road and Ridge best explored on foot' },
        { mode: '🚕 Taxi', detail: 'Available for Kufri and outstation trips' },
        { mode: '🚌 Local Bus', detail: 'HRTC buses to nearby villages' },
        { mode: '🚡 Lift', detail: 'Shimla has a public elevator connecting levels' },
      ]
    }
  },

  manali: {
    name: 'Manali',
    state: 'Himachal Pradesh',
    description: 'Manali is a high altitude Himalayan resort town known for adventure sports, snow-capped peaks, ancient temples, and as the gateway to Leh-Ladakh.',
    bestTime: 'October to June',
    temperature: '-10°C to 25°C',
    language: 'Hindi, Kullu, Pahari',
    currency: 'INR',
    image: 'https://plus.unsplash.com/premium_photo-1661878942694-6adaa2ce8175?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Rohtang Pass', desc: 'High mountain pass at 3978m — snow and adventure', emoji: '🏔️', imgQuery: 'Rohtang Pass Manali snow mountain high altitude pass' ,img:'https://www.sahyogmantratours.com/images/blogs/rohtang-pass-20231007115721-1_crop.jpg'},
      { name: 'Solang Valley', desc: 'Adventure sports hub — skiing, zorbing, paragliding', emoji: '⛷️', imgQuery: 'Solang Valley Manali skiing paragliding snow adventure',img:'https://images.unsplash.com/photo-1713063968789-adf139c4a1eb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Hadimba Temple', desc: 'Ancient cave temple dedicated to Goddess Hadimba', emoji: '🛕', imgQuery: 'Hadimba Temple Manali ancient cave wood forest',img:'https://images.unsplash.com/photo-1654057355305-118675766449?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Old Manali', desc: 'Charming village with cafes, shops and hippie culture', emoji: '🏘️', imgQuery: 'Old Manali village cafe hippie culture backpacker',img:'https://images.unsplash.com/photo-1712255495820-23c2c2d05bd9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Beas River', desc: 'Popular spot for riverside camping and rafting', emoji: '🏕️', imgQuery: 'Beas River Manali camping rafting riverside Himachal',img:'https://images.unsplash.com/photo-1706177818542-bcd369cc1fad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Naggar Castle', desc: '15th century castle with stunning valley views', emoji: '🏰', imgQuery: 'Naggar Castle Manali 15th century valley view Himachal',img:'https://media.istockphoto.com/id/1139793573/photo/jagti-patt-temple.webp?a=1&b=1&s=612x612&w=0&k=20&c=9imKkY-2VTM-o9HEbmLh0uTOnPlXZPmOj-cQeJwXfSU=' },
    ],
    hotels: [
      { name: 'Snow Peak Resort', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.7', imgQuery: 'luxury snow peak resort Manali mountain view pool',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/34/f6/28/snow-peak-retreat.jpg?w=900&h=500&s=1' },
      { name: 'River View Hotel', type: 'Mid Range', price: '₹2,500/night', rating: '⭐ 4.4', imgQuery: 'river view hotel Manali Beas mid range Himachal' ,img:'https://images.unsplash.com/photo-1645605002450-9288cebb19fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cml2ZXIlMjB2aWV3JTIwaG90ZWwlMjBNYW5hbGklMjBCZWFzfGVufDB8fDB8fHww'},
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹700/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Manali backpacker hostel Himachal' ,img:'https://daahy6akrtcj2.cloudfront.net/hotelsmanali.co.in/logos/surbhi_hotel.jpg'},
    ],
    food: [
      { name: 'Siddu', desc: 'Steamed Himachali bread with walnut and poppy filling', emoji: '🫓', imgQuery: 'Siddu steamed bread walnut poppy Himachal traditional',img:'https://media.istockphoto.com/id/2281100084/photo/authentic-siddu-delicacy-from-himachal-pradesh-enjoyed-at-hilltop-viewpoint.webp?a=1&b=1&s=612x612&w=0&k=20&c=6pzqPd-4rkOtxoDZ-7NUsIFO8HH3lczJlwnptq9Ltg4=' },
      { name: 'Trout Fish', desc: 'Fresh river trout grilled or curried — local specialty', emoji: '🐟', imgQuery: 'rainbow trout fish grilled Manali river Himachal',img:'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJvdXQlMjBGaXNofGVufDB8fDB8fHww' },
      { name: 'Thukpa', desc: 'Hearty Tibetan noodle soup for cold mountain nights', emoji: '🍜', imgQuery: 'Thukpa noodle soup Tibetan Manali cold mountain',img:'https://media.istockphoto.com/id/978433374/photo/nepalese-noodle-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=cip65qhwVBwV4COwBmevBKW4beifBl0XhjVwzLRQsJg=' },
      { name: 'Momos', desc: 'Steamed dumplings with spicy chutney', emoji: '🥟', imgQuery: 'momos steamed dumplings spicy chutney Manali Himachal',img:'https://images.unsplash.com/photo-1664990035720-faac522df41f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Aktori', desc: 'Buckwheat pancake with local honey', emoji: '🥞', imgQuery: 'Aktori buckwheat pancake honey Himachal Pradesh food',img:'https://rakkh.com/patrika/wp-content/uploads/2022/03/Malpua-Pallavi-Jayaraman.jpg' },
      { name: 'Kullu Trout', desc: 'Freshly caught trout from Beas river cooked fresh', emoji: '🎣', imgQuery: 'Kullu trout fresh Beas river catch cook Manali',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchKe5Hj-XYPElNpgvOgDDD5ylrEJwY_ZNGw&s' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Bhuntar Airport (50 km) or Chandigarh (310 km)', time: '2 hrs from Bhuntar airport' },
        { mode: '🚌 Bus', detail: 'HRTC Volvo buses from Delhi and Chandigarh', time: '14 hrs overnight from Delhi' },
        { mode: '🚗 Self Drive', detail: 'Scenic drive via Chandigarh-Mandi highway', time: '12-14 hrs from Delhi' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Available for Rohtang, Solang and other spots' },
        { mode: '🛵 Bike Rental', detail: 'Royal Enfield from ₹1,200/day' },
        { mode: '🚌 Local Bus', detail: 'HRTC buses to nearby villages' },
        { mode: '🚶 Walking', detail: 'Old Manali and Mall Road best on foot' },
      ]
    }
  },

  agra: {
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Agra is home to one of the Seven Wonders of the World — the Taj Mahal. This historic city on the Yamuna river is full of Mughal era monuments and heritage.',
    bestTime: 'October to March',
    temperature: '5°C - 40°C',
    language: 'Hindi, Urdu',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=80',
    places: [
      { name: 'Taj Mahal', desc: 'UNESCO World Wonder — white marble mausoleum built by Shah Jahan', emoji: '🕌', imgQuery: 'Taj Mahal Agra white marble sunrise mausoleum Mughal',img:'https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Agra Fort', desc: 'UNESCO Heritage red sandstone fort — Mughal royal residence', emoji: '🏰', imgQuery: 'Agra Fort red sandstone UNESCO Mughal heritage' ,img:'https://images.unsplash.com/photo-1591018653367-9c01498b3320?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Fatehpur Sikri', desc: 'Abandoned Mughal capital 40km from Agra', emoji: '🏛️', imgQuery: 'Fatehpur Sikri abandoned Mughal capital UNESCO Agra' ,img:'https://images.unsplash.com/photo-1697644297524-ee2e2e098f37?q=80&w=1163&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Mehtab Bagh', desc: 'Best sunset view of Taj Mahal across Yamuna river', emoji: '🌅', imgQuery: 'Mehtab Bagh sunset Taj Mahal Yamuna river view',img:'https://images.unsplash.com/photo-1576135872771-b3205260262f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Itimad-ud-Daulah', desc: 'Baby Taj — first Mughal structure built entirely of marble', emoji: '🕍', imgQuery: 'Itimad ud Daulah Baby Taj Agra marble Mughal',img:'https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Kinari Bazaar', desc: 'Famous market for marble handicrafts and leather goods', emoji: '🛍️', imgQuery: 'Kinari Bazaar Agra marble handicrafts leather market' ,img:'https://cf-images.assettype.com/newslaundry%2Fimport%2F2019%2F03%2FFashion-in-Chadni-chowk-AI-1.jpg?auto=format&fit=fill&bg=000000&q=35&w=1200'},
    ],
    hotels: [
      { name: 'Taj View Luxury Hotel', type: 'Luxury', price: '₹20,000/night', rating: '⭐ 4.9', imgQuery: 'luxury hotel Agra Taj Mahal view five star',img:'https://cdn.sanity.io/images/ocl5w36p/ihcl_prod/e9aeef87d893a681aa81b428194aec019e4e4404-1280x1570.jpg' },
      { name: 'Heritage Boutique Hotel', type: 'Mid Range', price: '₹4,000/night', rating: '⭐ 4.5', imgQuery: 'heritage boutique hotel Agra mid range Mughal',img:'https://images.unsplash.com/photo-1698752822280-8a1b285a7709?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹700/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Agra backpacker hostel',img:'https://daahy6akrtcj2.cloudfront.net/hotelsinagra.org/logos/friends_paying_guest_house.jpg' },
    ],
    food: [
      { name: 'Petha', desc: 'Agra\'s most famous sweet — white pumpkin candy', emoji: '🍬', imgQuery: 'Petha Agra sweet white pumpkin candy famous',img:'https://cdn.britannica.com/06/183206-050-C624DC0D/Petha.jpg' },
      { name: 'Bedai & Jalebi', desc: 'Famous Agra breakfast combo', emoji: '🥞', imgQuery: 'Bedai Jalebi Agra breakfast fried dough traditional' ,img:'https://d34vm3j4h7f97z.cloudfront.net/original/3X/5/3/533e4369a8b1945dc644089100ed13ee8c4e55bc.jpeg'},
      { name: 'Mughlai Biryani', desc: 'Aromatic rice dish with tender meat and saffron', emoji: '🍛', imgQuery: 'Mughlai Biryani Agra saffron rice meat aromatic',img:'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Dalmoth', desc: 'Spicy fried lentil snack mix unique to Agra', emoji: '🥜', imgQuery: 'Dalmoth Agra spicy lentil fried snack mix',img:'https://media.istockphoto.com/id/496881119/photo/moong-daal-sprouts-chaat.webp?a=1&b=1&s=612x612&w=0&k=20&c=bDoIjvjt5e-7rL7_hUJHy6bjh9Juro4CUdRqJUDsDds=' },
      { name: 'Nihari', desc: 'Slow cooked meat stew eaten for breakfast', emoji: '🍲', imgQuery: 'Nihari slow cooked meat stew breakfast Indian Muslim',img:'https://images.unsplash.com/photo-1708782344071-c5382e27ef3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmloYXJpfGVufDB8fDB8fHww' },
      { name: 'Rewari', desc: 'Traditional sesame and jaggery sweet', emoji: '🍯', imgQuery: 'Rewari sesame jaggery sweet Agra traditional candy' ,img:'https://media.istockphoto.com/id/1293837858/photo/sesame-seed-cake-or-candy-peanuts-chikki-with-roasted-peanuts-for-the-celebration-of-festival.webp?a=1&b=1&s=612x612&w=0&k=20&c=fgaRGzqJM-RhG_2WWBnpV8yycvzbqvd9mhPHpW5o9Zc='},
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Agra Airport or Delhi IGI (200 km)', time: 'Better by train from Delhi' },
        { mode: '🚂 Train', detail: 'Agra Cantt Station — very well connected', time: '2 hrs from Delhi by Gatimaan Express' },
        { mode: '🚌 Bus', detail: 'Yamuna Expressway buses from Delhi', time: '3-4 hrs from Delhi' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common — fixed price boards available' },
        { mode: '🚕 Ola/Uber', detail: 'Widely available in Agra' },
        { mode: '🐪 Tonga', detail: 'Horse carriage near Taj Mahal — traditional' },
        { mode: '🚲 Cycle Rickshaw', detail: 'Best for navigating old city lanes' },
      ]
    }
  },

  amritsar: {
    name: 'Amritsar',
    state: 'Punjab',
    description: 'Amritsar is the spiritual and cultural heart of the Sikh faith, home to the magnificent Golden Temple. The city also carries deep historical significance from the freedom struggle.',
    bestTime: 'October to March',
    temperature: '2°C - 40°C',
    language: 'Punjabi, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1587899765642-3f8e3ea67852?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Golden Temple', desc: 'Holiest Sikh shrine covered in 750kg of pure gold', emoji: '✨', imgQuery: 'Golden Temple Amritsar Harmandir Sahib Sikh golden reflection',img:'https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Wagah Border', desc: 'Daily flag-lowering ceremony at India-Pakistan border', emoji: '🇮🇳', imgQuery: 'Wagah Border ceremony India Pakistan flag lowering Amritsar',img:'https://images.unsplash.com/photo-1659763344736-7ea8ed3d1f5e?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Jallianwala Bagh', desc: 'Memorial garden of 1919 British massacre', emoji: '🌹', imgQuery: 'Jallianwala Bagh Amritsar memorial garden 1919 massacre',img:'https://plus.unsplash.com/premium_photo-1697729441943-f1bffee0b432?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Partition Museum', desc: 'World\'s first museum dedicated to the 1947 Partition', emoji: '🏛️', imgQuery: 'Partition Museum Amritsar 1947 India Pakistan history',img:'https://images.unsplash.com/photo-1707068226685-27a15039f19b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Akal Takht', desc: 'Highest temporal seat of Sikh authority', emoji: '🛕', imgQuery: 'Akal Takht Amritsar Sikh authority Golden Temple complex' ,img:'https://media.istockphoto.com/id/1320933872/photo/gurdwara-shri-guru-singh-sabha-at-mussoorie-uttarakhand.webp?a=1&b=1&s=612x612&w=0&k=20&c=6wspjCv5QXUFCOa-5wq3cJvMDnvkvlUbx72zh0rbHmc='},
      { name: 'Hall Bazaar', desc: 'Famous market for Punjabi juttis, phulkari and sweets', emoji: '🛍️', imgQuery: 'Hall Bazaar Amritsar Punjab juttis phulkari market',img:'https://amritsartourism.org.in/images/tourist-places/hall-bazaar-amritsar/hall-bazaar-amritsar-holidays-closed-on-timings-amritsar-tourism.jpg.jpg' },
    ],
    hotels: [
      { name: 'Heritage Luxury Hotel', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.8', imgQuery: 'luxury heritage hotel Amritsar Golden Temple view Punjab' ,img:'https://media.istockphoto.com/id/2269479631/photo/beautiful-view-of-golden-temple-harmandir-sahib-in-amritsar-punjab-india-famous-indian-sikh.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hg7fpsqvvsnEG6NugWw0SwMjxcnAODIFruaHXUEJIns='},
      { name: 'Golden Temple View Hotel', type: 'Mid Range', price: '₹2,500/night', rating: '⭐ 4.5', imgQuery: 'Golden Temple view hotel Amritsar mid range Punjab',img:'https://pix10.agoda.net/hotelImages/60744066/0/51e0e35f0163e4227c1e64a6566a48cf.jpg?ce=0&s=414x232&ar=16x9' },
      { name: 'Gurudwara Sarai', type: 'Budget', price: 'Free/Donation', rating: '⭐ 4.9', imgQuery: 'Gurudwara Sarai free accommodation Sikh pilgrims Amritsar' ,img:'https://media.istockphoto.com/id/1019280392/photo/paunta-sahib-gurudwara.webp?a=1&b=1&s=612x612&w=0&k=20&c=NeNtEC7I06QcjVoQwN3T0Zs9K3vENyUB8XooF7sqljk='},
    ],
    food: [
      { name: 'Amritsari Kulcha', desc: 'Stuffed bread baked in tandoor — best in the world here', emoji: '🫓', imgQuery: 'Amritsari Kulcha tandoor bread stuffed Punjab famous',img:'https://media.istockphoto.com/id/2213535551/photo/amritsari-kulcha-is-a-crispy-flaky-stuffed-flatbread-from-punjab-filled-with-spiced-mashed.webp?a=1&b=1&s=612x612&w=0&k=20&c=MC8hR-e3tUBP1_IWRFu-_KbcIhpfJ-fgb3QTI_PKaF8=' },
      { name: 'Langar', desc: 'Free community meal at Golden Temple — simple and divine', emoji: '🍛', imgQuery: 'Langar Golden Temple free community meal Sikh',img:'https://images.unsplash.com/photo-1714525287722-71ffa49a1aa3?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Amritsari Fish', desc: 'Crispy fried fish in gram flour batter with ajwain', emoji: '🐟', imgQuery: 'Amritsari fish fry gram flour batter crispy Punjab',img:'https://media.istockphoto.com/id/1420212298/photo/amritsari-fried-fish-or-macchi-fry-served-in-a-dish-isolated-on-table-background-top-view-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=4ucQ0GhLSnQGHA1k_OsCN1FMTpsXnn_X8kgxfhDiZvU=' },
      { name: 'Lassi', desc: 'Thick creamy lassi served in earthen kulhad', emoji: '🥛', imgQuery: 'Punjab Lassi thick creamy kulhad earthen pot Amritsar',img:'https://images.unsplash.com/photo-1527406619566-0159590b8540?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Pinni', desc: 'Traditional Punjabi winter sweet made with wheat flour', emoji: '🍮', imgQuery: 'Pinni Punjabi sweet wheat flour ghee winter traditional' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD4WBEbnz40Hg39OWgy3XZzMJCWJQdagwVg&s'},
      { name: 'Chole Bhature', desc: 'Spicy chickpea curry with fluffy fried bread', emoji: '🥘', imgQuery: 'Chole Bhature Amritsar Punjab breakfast chickpea fried bread',img:'https://madhurasrecipe.com/wp-content/uploads/2025/09/MR-Chole-Bhature-featured.jpg' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Sri Guru Ram Dass Jee International Airport', time: 'Direct flights from Delhi, Mumbai, Bangalore' },
        { mode: '🚂 Train', detail: 'Amritsar Junction — well connected', time: '6 hrs from Delhi by Shatabdi' },
        { mode: '🚌 Bus', detail: 'PRTC buses from Delhi, Chandigarh, Jammu', time: '8-9 hrs from Delhi' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common — negotiate fare' },
        { mode: '🚕 Ola/Uber', detail: 'Available throughout the city' },
        { mode: '🚲 Cycle Rickshaw', detail: 'Best for Golden Temple area' },
        { mode: '🚶 Walking', detail: 'Old city and Golden Temple best on foot' },
      ]
    }
  },

  pondicherry: {
    name: 'Pondicherry',
    state: 'Tamil Nadu',
    description: 'Pondicherry is a former French colony with charming colonial streets, vibrant cafes, pristine beaches, and the famous Auroville community.',
    bestTime: 'October to March',
    temperature: '20°C - 35°C',
    language: 'Tamil, French, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=80',
    places: [
      { name: 'Promenade Beach', desc: 'Beautiful 1.5km beach boulevard along the Bay of Bengal', emoji: '🏖️', imgQuery: 'Promenade Beach Pondicherry boulevard Bay of Bengal walk',img:'https://images.unsplash.com/photo-1675084441420-714cfb8fe1aa?q=80&w=1260&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Auroville', desc: 'Experimental universal township with golden Matrimandir dome', emoji: '🌍', imgQuery: 'Auroville Matrimandir golden dome Pondicherry meditation',img:'https://images.unsplash.com/photo-1715794202088-84a7792062b0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'French Quarter White Town', desc: 'Charming colonial streets with yellow buildings and cafes', emoji: '🏘️', imgQuery: 'French Quarter White Town Pondicherry colonial yellow street cafe',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdy0qY2nQMcKCYHi-m0Ia5OAbhMKxxS7Ju6Q&s' },
      { name: 'Basilica of Sacred Heart', desc: 'Gothic style French church with stunning stained glass', emoji: '⛪', imgQuery: 'Basilica Sacred Heart Pondicherry Gothic French church stained glass' ,img:'https://images.unsplash.com/photo-1613391968040-aa4f4f20a995?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Manakula Vinayagar Temple', desc: 'Famous Ganesh temple in the heart of French Quarter', emoji: '🛕', imgQuery: 'Manakula Vinayagar Temple Pondicherry Ganesh elephant',img:'https://media.istockphoto.com/id/1187913371/photo/the-roof-of-sri-maha-mariamman-devasthanam-hindu-temple-on-the-island-of-langkawi-andaman-sea.jpg?s=612x612&w=0&k=20&c=3QGnxgjsjPVYMelWYm8SOICCD02vMCxMc6PpY0dCVhg=' },
      { name: 'Paradise Beach', desc: 'Secluded pristine beach accessible only by boat', emoji: '🌊', imgQuery: 'Paradise Beach Pondicherry secluded pristine boat access',img:'https://images.unsplash.com/photo-1624257146471-78ea613e1649?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'French Heritage Boutique', type: 'Luxury', price: '₹12,000/night', rating: '⭐ 4.9', imgQuery: 'French heritage luxury boutique hotel Pondicherry colonial',img:'https://images.unsplash.com/photo-1656435733294-7d90b972f4b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Beach View Hotel', type: 'Mid Range', price: '₹4,000/night', rating: '⭐ 4.5', imgQuery: 'beach view hotel Pondicherry mid range sea facing',img:'https://images.unsplash.com/photo-1672401231510-1365539ffc81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ashram Guesthouse', type: 'Budget', price: '₹1,000/night', rating: '⭐ 4.3', imgQuery: 'ashram guesthouse budget Pondicherry spiritual stay' ,img:'https://media.istockphoto.com/id/649528574/photo/south-goan-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=WCkw5PUIyKImDUlodWuYUZX_R41HliQVptQ1i6sZOH8='},
    ],
    food: [
      { name: 'French Crepes', desc: 'Authentic French crepes from White Town bakeries', emoji: '🥞', imgQuery: 'French crepes Pondicherry bakery White Town authentic' ,img:'https://plus.unsplash.com/premium_photo-1699381554033-1388debd2a11?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Pondicherry Fish Curry', desc: 'Local Tamil style fish curry with rice', emoji: '🐟', imgQuery: 'Pondicherry fish curry Tamil style rice coconut',img:'https://images.unsplash.com/photo-1654863404432-cac67587e25d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Baguette & Croissant', desc: 'Fresh French bakery items unique to Pondicherry', emoji: '🥐', imgQuery: 'baguette croissant French bakery Pondicherry fresh' },
      { name: 'Dosai', desc: 'Crispy South Indian rice crepe with chutneys', emoji: '🫓', imgQuery: 'Dosai crispy South Indian rice crepe chutney sambar',img:'https://images.unsplash.com/photo-1743517894265-c86ab035adef?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Filter Coffee', desc: 'Authentic South Indian coffee in traditional style', emoji: '☕', imgQuery: 'South Indian filter coffee tumbler traditional Pondicherry',img:'https://plus.unsplash.com/premium_photo-1674931348670-68936350ed55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Bouillabaisse', desc: 'French seafood stew adapted with Indian spices', emoji: '🍲', imgQuery: 'Bouillabaisse French seafood stew Pondicherry Indian fusion',img:'https://images.unsplash.com/photo-1621174438159-6a9a82405498?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Pondicherry Airport (limited) or Chennai (150 km)', time: '3 hrs drive from Chennai airport' },
        { mode: '🚂 Train', detail: 'Pondicherry Railway Station', time: '3.5 hrs from Chennai by train' },
        { mode: '🚌 Bus', detail: 'TNSTC and private buses from Chennai, Bangalore', time: '3 hrs from Chennai' },
      ],
      local: [
        { mode: '🛵 Scooter Rental', detail: 'Most popular — ₹300-400/day' },
        { mode: '🚲 Bicycle', detail: 'Best for French Quarter — eco-friendly' },
        { mode: '🛺 Auto Rickshaw', detail: 'Available throughout the city' },
        { mode: '🚶 Walking', detail: 'White Town best explored on foot' },
      ]
    }
  },

  hampi: {
    name: 'Hampi',
    state: 'Karnataka',
    description: 'Hampi is a UNESCO World Heritage Site and the former capital of the Vijayanagara Empire with stunning boulder-strewn landscapes and ancient ruins.',
    bestTime: 'October to February',
    temperature: '15°C - 38°C',
    language: 'Kannada, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Virupaksha Temple', desc: 'Living temple in use since 7th century', emoji: '🛕', imgQuery: 'Virupaksha Temple Hampi Karnataka ancient living 7th century',img:'https://images.unsplash.com/photo-1681488774739-f98a6bd17acb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Vittala Temple', desc: 'Famous for stone chariot and musical pillars', emoji: '🎵', imgQuery: 'Vittala Temple Hampi stone chariot musical pillars UNESCO',img:'https://images.unsplash.com/photo-1636909529633-233d12c547e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Elephant Stables', desc: 'Magnificent 15th century stables for royal elephants', emoji: '🐘', imgQuery: 'Elephant Stables Hampi Vijayanagara 15th century royal',img:'https://images.unsplash.com/photo-1618245758463-6019b79bde27?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Matanga Hill', desc: 'Best sunrise point with panoramic ruins view', emoji: '🌄', imgQuery: 'Matanga Hill Hampi sunrise panoramic ruins boulders view',img:'https://media.istockphoto.com/id/2254667827/photo/aerial-views-of-table-top-mountain-toowoomba.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zi4Oyq_vIQ0TnHg71S9jxN4A6cKuTEMdJoihR8GM-_4=' },
      { name: 'Tungabhadra River', desc: 'Coracle rides on the sacred river through boulders', emoji: '🚣', imgQuery: 'Tungabhadra River Hampi coracle basket boat boulders' ,img:'https://images.unsplash.com/photo-1651510781839-c3561bc34862?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Lotus Mahal', desc: 'Elegant lotus-shaped two-storey royal pavilion', emoji: '🌸', imgQuery: 'Lotus Mahal Hampi royal pavilion lotus shape Vijayanagara',img:'https://images.unsplash.com/photo-1681488774760-14992348f7b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Heritage Stone Resort', type: 'Luxury', price: '₹6,000/night', rating: '⭐ 4.7', imgQuery: 'luxury heritage resort Hampi stone ruins view Karnataka',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5c/0c/f4/heritage-resort-hampi.jpg?w=1200&h=-1&s=1' },
      { name: 'Riverside Guesthouse', type: 'Mid Range', price: '₹2,000/night', rating: '⭐ 4.4', imgQuery: 'riverside guesthouse Hampi Tungabhadra mid range',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-gbZcikYTctFAkNNTgJdjThOjg4-DnXTvQ&s' },
      { name: 'Backpacker Hostel', type: 'Budget', price: '₹500/night', rating: '⭐ 4.2', imgQuery: 'backpacker hostel Hampi budget ruins view Karnataka',img:'https://images.getaroom-cdn.com/image/upload/s--a4lj5jk---/c_limit,e_improve,fl_lossy.immutable_cache,h_460,q_auto:good,w_460/v1770207895/69061b717c69126dad3a0d0a8c8c57cfd512efc1?_a=BACAEuEv&atc=e7cd1cfa' },
    ],
    food: [
      { name: 'Jolada Rotti', desc: 'Sorghum flatbread — staple of North Karnataka', emoji: '🫓', imgQuery: 'Jolada Rotti sorghum flatbread North Karnataka traditional' ,img:'https://media.istockphoto.com/id/1411061655/photo/delicious-kerala-style-breakfast-dish-pathal-or-pathiri-or-appam-with-chicken-curry-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=stz4b6YtBwCY4Cszz9WRZpqaWmPoXscN3y0m94xSBrw='},
      { name: 'Bisi Bele Bath', desc: 'Hot lentil rice dish with vegetables and spices', emoji: '🍛', imgQuery: 'Bisi Bele Bath Karnataka lentil rice hot vegetables',img:'https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Banana Lassi', desc: 'Famous at Hampi cafes along the river', emoji: '🍌', imgQuery: 'banana lassi Hampi cafe riverside drink popular' ,img:'https://media.istockphoto.com/id/863924998/photo/banana-smoothie-with-oats.webp?a=1&b=1&s=612x612&w=0&k=20&c=N9f6TxOcU-O_riBoAJlvAdZNxN5VmEd20MuPB762UaQ='},
      { name: 'Ennegayi', desc: 'Stuffed brinjal curry in peanut and sesame gravy', emoji: '🫑', imgQuery: 'Ennegayi stuffed brinjal peanut sesame Karnataka curry' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oK9LnYApccAr-bdnFCn5E2r74xnlC6_3dg&s'},
      { name: 'Fresh Lime Soda', desc: 'Refreshing drink essential in Hampi\'s heat', emoji: '🍋', imgQuery: 'fresh lime soda India summer refreshing drink' ,img:'https://images.unsplash.com/photo-1536972990510-2ecb9d60ac4e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Israeli Food', desc: 'Hampi cafes serving falafel and hummus', emoji: '🧆', imgQuery: 'falafel hummus cafe Hampi Israeli food backpacker',img:'https://images.unsplash.com/photo-1620041328526-d0cf044a0739?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Hubli Airport (160 km) or Bangalore (350 km)', time: '4 hrs from Hubli airport' },
        { mode: '🚂 Train', detail: 'Hospet Junction (13 km from Hampi)', time: '9 hrs from Bangalore to Hospet' },
        { mode: '🚌 Bus', detail: 'Buses from Bangalore and Hubli to Hospet', time: '8-9 hrs from Bangalore' },
      ],
      local: [
        { mode: '🛵 Bike Rental', detail: 'Best way to explore ruins — ₹300/day' },
        { mode: '🚲 Bicycle', detail: 'Great for short distances between temples' },
        { mode: '🚶 Walking', detail: 'Central area best explored on foot' },
        { mode: '🚣 Coracle', detail: 'Unique basket boat to cross Tungabhadra river' },
      ]
    }
  },

  ooty: {
    name: 'Ooty',
    state: 'Tamil Nadu',
    description: 'Ooty, the Queen of Hill Stations, is a charming Nilgiri hill station known for its tea gardens, botanical gardens, pleasant weather and the famous Nilgiri Mountain Railway.',
    bestTime: 'April to June, September to November',
    temperature: '5°C - 25°C',
    language: 'Tamil, Kannada, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1660918738010-295b09857f93?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Ooty Lake', desc: 'Artificial lake built in 1825 with boating facilities', emoji: '🚣', imgQuery: 'Ooty Lake boating 1825 Tamil Nadu Nilgiris hills',img:'https://images.unsplash.com/photo-1619020933389-e96f49742bce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Government Botanical Garden', desc: '55-acre UNESCO heritage garden with 650+ plant species', emoji: '🌿', imgQuery: 'Ooty Botanical Garden UNESCO heritage plants flowers Tamil Nadu',img:'https://images.unsplash.com/photo-1764351776318-cb3c051de89b?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Nilgiri Mountain Railway', desc: 'UNESCO Heritage toy train through breathtaking hills', emoji: '🚂', imgQuery: 'Nilgiri Mountain Railway toy train UNESCO Ooty hills green' ,img:'https://plus.unsplash.com/premium_photo-1750500613035-ab5c3517e708?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Doddabetta Peak', desc: 'Highest peak in Nilgiris at 2637m', emoji: '🏔️', imgQuery: 'Doddabetta Peak Ooty Nilgiris highest Tamil Nadu viewpoint' ,img:'https://images.unsplash.com/photo-1711553188400-13eeb32a1a51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Tea Factory Tour', desc: 'Learn how Nilgiri tea is processed', emoji: '🍵', imgQuery: 'Nilgiri tea factory tour Ooty processing Tamil Nadu' ,img:'https://blogger.googleusercontent.com/img/a/AVvXsEhCQdlmyrUSg2bQEFeAlXzzR7DxiXubblvDKQVcVxBwDjv0mD72by6s-5oJLEloPR_H2JUGx0m9_loRK1twGFfnd2xoqbobB3FHtcW3JhvOyyBK0aJL3jYsW79UwI8hhVOrYAi1qJ04NLQ9RLnPKUmwJwnblzJhV1xhE8mZIQV-XrGR4qrxvDA8FBPoYw=s16000-rw'},
      { name: 'Pykara Lake & Falls', desc: 'Scenic lake and waterfalls 20km from Ooty', emoji: '🌊', imgQuery: 'Pykara Lake waterfall Ooty Tamil Nadu scenic' ,img:'https://media.istockphoto.com/id/537044905/photo/pykara-river-and-lake-near-ooty.jpg?s=612x612&w=0&k=20&c=NkLXtBInErhAxeiH35HgNj4WE7LYFFWba7N-aY5VgF8='},
    ],
    hotels: [
      { name: 'Heritage Tea Estate Hotel', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.8', imgQuery: 'luxury tea estate heritage hotel Ooty Nilgiris view',img:'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1517567132/natureresorts.jpg' },
      { name: 'Hill View Resort', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.4', imgQuery: 'hill view resort Ooty mid range Tamil Nadu',img:'https://images.unsplash.com/photo-1663911240934-c352569e3f57?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹800/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Ooty backpacker Tamil Nadu hills',img:'https://images.unsplash.com/photo-1744311971549-9c529b60b98a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    food: [
      { name: 'Nilgiri Tea', desc: 'World famous blue mountain tea — must try at source', emoji: '🍵', imgQuery: 'Nilgiri blue mountain tea Ooty fresh brew cup',img:'https://images.unsplash.com/photo-1547825407-2d060104b7f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ooty Varkey', desc: 'Traditional layered biscuit — famous local sweet', emoji: '🍪', imgQuery: 'Ooty Varkey layered biscuit traditional sweet famous',img:'https://buya1chips.com/cdn/shop/files/Ooty_Special_Varkey_45.jpg?crop=center&height=1200&v=1770962417&width=1200' },
      { name: 'Chocolate', desc: 'Homemade Ooty chocolates — best souvenirs', emoji: '🍫', imgQuery: 'Ooty homemade chocolate shop souvenir Tamil Nadu',img:'https://plus.unsplash.com/premium_photo-1661883148009-34750fe09941?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Idli Sambar', desc: 'Fluffy steamed rice cakes with lentil vegetable soup', emoji: '🫓', imgQuery: 'Idli Sambar South Indian breakfast steamed rice cakes' ,img:'https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Carrot Halwa', desc: 'Sweet made from fresh Nilgiri carrots and milk', emoji: '🥕', imgQuery: 'carrot halwa Nilgiri fresh carrots milk Indian sweet',img:'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Fresh Strawberries', desc: 'Grown in Ooty farms — best during season', emoji: '🍓', imgQuery: 'fresh strawberries Ooty farm Tamil Nadu Nilgiris',img:'https://images.unsplash.com/photo-1591271300850-22d6784e0a7f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Coimbatore Airport (90 km) or Bangalore (295 km)', time: '3 hrs from Coimbatore' },
        { mode: '🚂 Train', detail: 'Nilgiri Mountain Railway from Mettupalayam', time: '5 hrs scenic train — book early!' },
        { mode: '🚌 Bus', detail: 'TNSTC buses from Coimbatore, Mysore, Bangalore', time: '3 hrs from Coimbatore' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Best for visiting Doddabetta and Pykara' },
        { mode: '🛺 Auto Rickshaw', detail: 'Available for town sightseeing' },
        { mode: '🚌 Local Bus', detail: 'Connects Ooty to nearby hill villages' },
        { mode: '🚲 Bicycle', detail: 'Good for exploring town and tea estates' },
      ]
    }
  },

  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'Mumbai, the City of Dreams, is India\'s financial capital and entertainment hub with colonial architecture, Bollywood, street food, and the iconic Gateway of India.',
    bestTime: 'November to February',
    temperature: '17°C - 35°C',
    language: 'Marathi, Hindi, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1600&q=80',
    places: [
      { name: 'Gateway of India', desc: 'Iconic 1924 arch monument overlooking the Arabian Sea', emoji: '🏛️', imgQuery: 'Gateway of India Mumbai 1924 arch monument Arabian Sea',img:'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Marine Drive', desc: 'Stunning 3.5km seaside boulevard — Queen\'s Necklace at night', emoji: '🌊', imgQuery: 'Marine Drive Mumbai night Queen Necklace seaside boulevard',img:'https://images.unsplash.com/photo-1682414593649-c3e4024a7995?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Elephanta Caves', desc: 'UNESCO Heritage cave temples on island in Mumbai harbour', emoji: '🗿', imgQuery: 'Elephanta Caves Mumbai island UNESCO cave temple Shiva',img:'https://plus.unsplash.com/premium_photo-1697729588485-6c238cf3ab2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Chhatrapati Shivaji Terminus', desc: 'UNESCO Victorian Gothic railway station built in 1887', emoji: '🚂', imgQuery: 'Chhatrapati Shivaji Terminus Mumbai Victorian Gothic UNESCO railway',img:'https://images.unsplash.com/photo-1710838106550-ac9cf85a2bc7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Dharavi', desc: 'Asia\'s largest slum — fascinating guided tours available', emoji: '🏘️', imgQuery: 'Dharavi Mumbai slum tour Asia largest community',img:'https://images.unsplash.com/photo-1725122902462-ccbf3aa4d79c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Juhu Beach', desc: 'Famous beach known for street food and Bollywood', emoji: '🏖️', imgQuery: 'Juhu Beach Mumbai sunset street food Bollywood famous',img:'https://images.unsplash.com/photo-1710144481132-b1702639d4e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Luxury Sea View Hotel', type: 'Luxury', price: '₹20,000/night', rating: '⭐ 4.9', imgQuery: 'luxury five star sea view hotel Mumbai Arabian Sea',img:'https://images.unsplash.com/photo-1718515743530-9371a9389096?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Business Hotel', type: 'Mid Range', price: '₹5,000/night', rating: '⭐ 4.4', imgQuery: 'business hotel Mumbai mid range city view',img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/654034545.jpg?k=9f64fe7518a6a46753a80d593d64560c387852d70105a49423d49a161c25a515&o=' },
      { name: 'Budget Hostel', type: 'Budget', price: '₹700/night', rating: '⭐ 4.1', imgQuery: 'budget hostel Mumbai backpacker Colaba' ,img:'https://images.unsplash.com/photo-1748347568872-52e16a577b41?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ],
    food: [
      { name: 'Vada Pav', desc: 'Mumbai\'s favourite street food — spicy potato fritter in bun', emoji: '🍔', imgQuery: 'Vada Pav Mumbai street food spicy potato fritter bun',img:'https://images.unsplash.com/photo-1769030905851-c0e0a4fe5c51?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Pav Bhaji', desc: 'Spiced mashed vegetable curry with buttered bread rolls', emoji: '🍞', imgQuery: 'Pav Bhaji Mumbai street food mashed vegetables butter',img:'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Bombay Sandwich', desc: 'Chutney sandwich with potato, cucumber, tomato', emoji: '🥪', imgQuery: 'Bombay Sandwich Mumbai chutney potato cucumber tomato',img:'https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Keema Pav', desc: 'Spiced minced meat with soft bread rolls', emoji: '🥩', imgQuery: 'Keema Pav Mumbai minced meat spiced bread' ,img:'https://images.unsplash.com/photo-1619193099710-e54f2e2f1b28?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Bhel Puri', desc: 'Crispy puffed rice chaat with tamarind and chutneys', emoji: '🥗', imgQuery: 'Bhel Puri Mumbai beach chaat puffed rice tamarind',img:'https://images.unsplash.com/photo-1777732785406-f18022cbac1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Cutting Chai', desc: 'Half cup strong spiced tea — Mumbai\'s signature drink', emoji: '☕', imgQuery: 'Cutting Chai Mumbai half cup spiced tea street',img:'https://images.unsplash.com/photo-1683533698971-dcc5e19cb0f1?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Chhatrapati Shivaji International Airport', time: 'India\'s busiest airport' },
        { mode: '🚂 Train', detail: 'Mumbai Central, Dadar, LTT stations', time: 'Connected to all major Indian cities' },
        { mode: '🚌 Bus', detail: 'MSRTC from Pune, Goa, Nashik', time: '3 hrs from Pune' },
      ],
      local: [
        { mode: '🚂 Local Train', detail: 'Lifeline of Mumbai — fastest way to travel' },
        { mode: '🚕 Kaali Peeli Taxi', detail: 'Iconic black and yellow metered taxis' },
        { mode: '🛺 Auto Rickshaw', detail: 'Available in suburbs only' },
        { mode: '🚌 BEST Bus', detail: 'City bus network covering all areas' },
      ]
    }
  },

  delhi: {
    name: 'Delhi',
    state: 'Delhi',
    description: 'Delhi, India\'s capital, is where ancient history meets modern India. From Mughal monuments to colonial buildings to ultra-modern malls — Delhi has it all.',
    bestTime: 'October to March',
    temperature: '2°C - 45°C',
    language: 'Hindi, English, Punjabi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80',
    places: [
      { name: 'Red Fort', desc: 'UNESCO Heritage Mughal fort — India\'s most iconic monument', emoji: '🏰', imgQuery: 'Red Fort Delhi UNESCO Mughal heritage Lal Qila',img:'https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Qutub Minar', desc: 'UNESCO World Heritage 73m tall minaret built in 1193', emoji: '🗼', imgQuery: 'Qutub Minar Delhi UNESCO minaret 1193 tall heritage',img:'https://images.unsplash.com/photo-1663229203856-8a363f07d881?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'India Gate', desc: 'War memorial and beloved picnic spot for Delhiites', emoji: '🏛️', imgQuery: 'India Gate Delhi war memorial evening lights Rajpath',img:'https://images.unsplash.com/photo-1678966432189-d58296e45ad2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Humayun\'s Tomb', desc: 'UNESCO Heritage Mughal garden tomb', emoji: '🕌', imgQuery: 'Humayun Tomb Delhi UNESCO Mughal garden heritage',img:'https://images.unsplash.com/photo-1609670289875-590e8ec05c88?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Chandni Chowk', desc: 'Oldest and busiest market in Delhi with 1500+ years history', emoji: '🛍️', imgQuery: 'Chandni Chowk Delhi oldest market busy crowded food',img:'https://images.unsplash.com/photo-1638415270042-aefde8ea6856?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Lotus Temple', desc: 'Stunning lotus-shaped Bahai House of Worship', emoji: '🌸', imgQuery: 'Lotus Temple Delhi Bahai House Worship lotus shape white',img:'https://images.unsplash.com/photo-1668971786470-441d20a8fdca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Five Star Luxury Hotel', type: 'Luxury', price: '₹15,000/night', rating: '⭐ 4.9', imgQuery: 'five star luxury hotel Delhi Connaught Place pool',img:'https://images.unsplash.com/photo-1705583688474-719ba69f2955?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Connaught Place Hotel', type: 'Mid Range', price: '₹4,000/night', rating: '⭐ 4.5', imgQuery: 'Connaught Place hotel Delhi mid range city center',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/40/ba/3c/connaught-place.jpg?w=900&h=500&s=1' },
      { name: 'Budget Hostel', type: 'Budget', price: '₹600/night', rating: '⭐ 4.1', imgQuery: 'budget hostel Delhi Paharganj backpacker cheap',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f3/fb/a1/room.jpg?w=900&h=500&s=1' },
    ],
    food: [
      { name: 'Chole Bhature', desc: 'Delhi\'s most loved breakfast — chickpea curry with fried bread', emoji: '🥘', imgQuery: 'Chole Bhature Delhi breakfast chickpea curry fried bread street' ,img:'https://media.istockphoto.com/id/1328524499/photo/katlambe-chole.webp?a=1&b=1&s=612x612&w=0&k=20&c=EPCKvlLn-1WeHHL_KL-60mkMjuD6p3BvI17YA8bfrC0='},
      { name: 'Butter Chicken', desc: 'Invented in Delhi — creamy tomato based chicken curry', emoji: '🍗', imgQuery: 'Butter Chicken Delhi original creamy tomato curry famous' ,img:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Paranthe Wali Gali', desc: 'Famous lane for stuffed flatbreads in Chandni Chowk', emoji: '🫓', imgQuery: 'Paranthe Wali Gali Chandni Chowk Delhi stuffed flatbread famous',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Matar_wala_Parantha.jpg/250px-Matar_wala_Parantha.jpg' },
      { name: 'Chaat', desc: 'Tangy crispy snacks — Delhi chaat is unmatched in India', emoji: '🥗', imgQuery: 'Delhi Chaat Aloo Tikki Papdi tangy crispy street food',img:'https://images.unsplash.com/photo-1653850280260-aa3b9e00b230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hhYXR8ZW58MHx8MHx8fDA%3D' },
      { name: 'Nihari', desc: 'Slow cooked mutton stew from Old Delhi — must try', emoji: '🍲', imgQuery: 'Nihari Old Delhi slow cooked mutton stew Jama Masjid',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgd1EZWvu7an41mJI5JpEbqtifaQWuO_5-Q&s' },
      { name: 'Jalebi', desc: 'Crispy orange syrup-soaked spirals from Old Delhi shops', emoji: '🍬', imgQuery: 'Jalebi Old Delhi crispy orange syrup spiral sweet fresh',img:'https://images.unsplash.com/photo-1778448806852-db6a837fa98f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Indira Gandhi International Airport', time: 'India\'s biggest international hub' },
        { mode: '🚂 Train', detail: 'New Delhi, Hazrat Nizamuddin, Old Delhi stations', time: 'Connected to every corner of India' },
        { mode: '🚌 Bus', detail: 'ISBT Kashmere Gate — buses to entire North India', time: 'Buses to Agra, Jaipur, Shimla' },
      ],
      local: [
        { mode: '🚇 Delhi Metro', detail: 'Best way to travel — 390+ km network' },
        { mode: '🛺 Auto Rickshaw', detail: 'Metered autos available everywhere' },
        { mode: '🚕 Ola/Uber', detail: 'Widely available and affordable' },
        { mode: '🚌 DTC Bus', detail: 'Extensive city bus network' },
      ]
    }
  },

  hyderabad: {
    name: 'Hyderabad',
    state: 'Telangana',
    description: 'Hyderabad, the City of Pearls, is known for its rich Nizami culture, magnificent monuments, world famous biryani, and as a major IT hub.',
    bestTime: 'October to February',
    temperature: '14°C - 40°C',
    language: 'Telugu, Urdu, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1688658475871-cbb49a044f42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Charminar', desc: 'Iconic 1591 monument with 4 minarets — symbol of Hyderabad', emoji: '🕌', imgQuery: 'Charminar Hyderabad 1591 four minarets symbol monument',img:'https://images.unsplash.com/photo-1741545979534-02f59c742730?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Golconda Fort', desc: 'Magnificent 16th century fort with incredible acoustics', emoji: '🏰', imgQuery: 'Golconda Fort Hyderabad 16th century acoustics Qutb Shahi',img:'https://plus.unsplash.com/premium_photo-1694475128245-999b1ae8a44e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Hussain Sagar Lake', desc: 'Huge heart-shaped lake with Buddha statue on island', emoji: '☮️', imgQuery: 'Hussain Sagar Lake Hyderabad Buddha statue island heart shaped',img:'https://images.unsplash.com/photo-1712422813106-dfb845a8a7ed?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ramoji Film City', desc: 'World\'s largest film studio complex — Guinness record', emoji: '🎬', imgQuery: 'Ramoji Film City Hyderabad world largest studio Guinness',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoQpN4tTMjMnAhgKl6R86jaDN4n4IESnZKw&s' },
      { name: 'Laad Bazaar', desc: 'Famous bangle market near Charminar with 200+ shops', emoji: '💍', imgQuery: 'Laad Bazaar Hyderabad bangles Charminar colorful market',img:'https://images.unsplash.com/photo-1609056615012-27c81a0df7b0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Birla Mandir', desc: 'Stunning white marble temple on a rocky hill', emoji: '🛕', imgQuery: 'Birla Mandir Hyderabad white marble temple rocky hill',img:'https://plus.unsplash.com/premium_photo-1697730326674-74b6c70509f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Luxury Business Hotel', type: 'Luxury', price: '₹10,000/night', rating: '⭐ 4.8', imgQuery: 'luxury five star hotel Hyderabad Banjara Hills pool',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdn0LySQ87KW3mNVvS-Jt5LDg4nl089lL-A&s' },
      { name: 'Heritage Hotel', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.5', imgQuery: 'heritage hotel Hyderabad mid range Nizami decor',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWK6IraCFQB3z-ESHcENiwFUH9RPv8mQLQA&s' },
      { name: 'Budget Stay', type: 'Budget', price: '₹700/night', rating: '⭐ 4.1', imgQuery: 'budget hotel Hyderabad cheap backpacker hostel',img:'https://pix10.agoda.net/hotelImages/36964834/-1/32ad047b62e264c581bb430d913faf69.jpg?ce=0&s=702x392' },
    ],
    food: [
      { name: 'Hyderabadi Biryani', desc: 'World\'s most famous biryani — dum cooked with saffron', emoji: '🍛', imgQuery: 'Hyderabadi Biryani dum cooked saffron rice meat famous' ,img:'https://images.unsplash.com/photo-1691171047312-d809eccef46d?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Haleem', desc: 'Slow cooked meat and lentil stew — Hyderabad specialty', emoji: '🥘', imgQuery: 'Haleem Hyderabad slow cooked meat lentil stew Ramadan',img:'https://media.istockphoto.com/id/2212302518/photo/bangladeshi-traditional-shahi-haleem-with-ingredients-rice-flour-various-seeds-flour-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=TtET7ut2AlOqkoyqhQW7TlT29Mpr98edUV58Lyt0S70=' },
      { name: 'Qubani ka Meetha', desc: 'Traditional Hyderabadi apricot dessert with cream', emoji: '🍮', imgQuery: 'Qubani ka Meetha Hyderabad apricot dessert cream traditional',img:'https://media.istockphoto.com/id/1277144032/photo/ready-to-eat-traditional-turkish-dessert-asure.webp?a=1&b=1&s=612x612&w=0&k=20&c=bnOegCd0MA_ygqu8f3ZU_2Oz_vwMdYHgvwhs6RqVlLg=' },
      { name: 'Irani Chai', desc: 'Thick creamy tea from Irani cafes — Hyderabad tradition', emoji: '☕', imgQuery: 'Irani Chai Hyderabad thick creamy tea Irani cafe tradition',img:'https://content.jdmagicbox.com/v2/comp/hyderabad/z3/040pxx40.xx40.180719113539.w5z3/catalogue/irani-chai-punjagutta-hyderabad-tea-stalls-7EnqdmnJYL.jpg' },
      { name: 'Osmania Biscuit', desc: 'Famous buttery biscuit from Hyderabadi bakeries', emoji: '🍪', imgQuery: 'Osmania Biscuit Hyderabad buttery bakery famous traditional',img:'https://images.unsplash.com/photo-1565021510234-27b6d168bba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3NtYW5pYSUyMEJpc2N1aXR8ZW58MHx8MHx8fDA%3D' },
      { name: 'Double ka Meetha', desc: 'Bread pudding soaked in milk and saffron', emoji: '🍞', imgQuery: 'Double ka Meetha Hyderabad bread pudding saffron milk dessert',img:'https://media.istockphoto.com/id/1398738894/photo/shahi-tukda-or-shahi-toast-also-known-as-double-ka-meetha-is-a-rich-indian-dessert-made-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=XnPfgp6Afinumq1ziHPRRktekmevr30KMduxgZaHEF0=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Rajiv Gandhi International Airport', time: 'Well connected internationally' },
        { mode: '🚂 Train', detail: 'Secunderabad and Kacheguda stations', time: '10 hrs from Delhi, 12 hrs from Mumbai' },
        { mode: '🚌 Bus', detail: 'TSRTC buses from Bangalore, Chennai, Mumbai', time: '8 hrs from Bangalore' },
      ],
      local: [
        { mode: '🚇 Hyderabad Metro', detail: 'Fast and efficient 3-line metro network' },
        { mode: '🛺 Auto Rickshaw', detail: 'Most common — metered autos available' },
        { mode: '🚕 Ola/Uber', detail: 'Widely available and affordable' },
        { mode: '🚌 TSRTC Bus', detail: 'City buses covering all areas' },
      ]
    }
  },

  kolkata: {
    name: 'Kolkata',
    state: 'West Bengal',
    description: 'Kolkata, the City of Joy, is India\'s cultural capital — famous for colonial architecture, tram cars, intellectual heritage, Durga Puja festivals and incredible street food.',
    bestTime: 'October to February',
    temperature: '10°C - 40°C',
    language: 'Bengali, Hindi, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Victoria Memorial', desc: 'Magnificent white marble monument built for Queen Victoria', emoji: '🏛️', imgQuery: 'Victoria Memorial Kolkata white marble Queen Victoria monument',img:'https://images.unsplash.com/photo-1682582036641-91dfe7b66ba6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly river', emoji: '🌉', imgQuery: 'Howrah Bridge Kolkata cantilever Hooghly river iconic',img:'https://images.unsplash.com/photo-1650874210541-c17a49a01a19?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Dakshineswar Temple', desc: 'Famous Kali temple associated with Ramakrishna Paramahamsa', emoji: '🛕', imgQuery: 'Dakshineswar Temple Kolkata Kali Hooghly river Ramakrishna' ,img:'https://images.unsplash.com/photo-1647443670050-b108739e1e60?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'College Street', desc: 'World\'s largest second-hand book market', emoji: '📚', imgQuery: 'College Street Kolkata book market second hand largest world',img:'https://images.unsplash.com/photo-1706038416148-59f92ceeedb2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Park Street', desc: 'Entertainment hub with restaurants, pubs and colonial buildings', emoji: '🎭', imgQuery: 'Park Street Kolkata entertainment restaurant colonial evening',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi68YJorzKEWYE7RKCOiv3VxOIogW88_R7zQ&s' },
      { name: 'Sundarbans', desc: 'UNESCO Heritage mangrove forest — home of Royal Bengal Tiger', emoji: '🐅', imgQuery: 'Sundarbans mangrove forest Royal Bengal Tiger UNESCO West Bengal',img:'https://plus.unsplash.com/premium_photo-1719955783013-218981c48c89?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    hotels: [
      { name: 'Heritage Grand Hotel', type: 'Luxury', price: '₹10,000/night', rating: '⭐ 4.8', imgQuery: 'luxury heritage grand hotel Kolkata colonial five star' ,img:'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701171150375566-ecf173de210411e49e1c36cfdd80c293.jpg'},
      { name: 'Park Street Hotel', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.4', imgQuery: 'Park Street hotel Kolkata mid range city center',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pyJZKprRlJsjME495_68puDIRSTru7ozFA&s' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹600/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Kolkata backpacker hostel cheap',img:'https://media.istockphoto.com/id/1759787704/photo/jorasanko-thakurbari-is-located-in-kolkata-west-bengal-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=y4uXe6pWMW1CDWx1V2Arq2fHhmmj6yCPQ4yg2aELz_4=' },
    ],
    food: [
      { name: 'Kolkata Biryani', desc: 'Unique biryani with potato — different from Hyderabadi', emoji: '🍛', imgQuery: 'Kolkata Biryani potato rice unique Bengali style',img:'https://media.istockphoto.com/id/1412194258/photo/kolkata-style-mutton-biryani-with-potato-and-egg-served-on-clay-plate-and-banana-leaf-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=fezwQ2e4-Yh-5BXa8iUw4HzF6cB7HyFws-YaNNbPVC8=' },
      { name: 'Rosogolla', desc: 'Soft spongy cottage cheese balls in sugar syrup', emoji: '🍡', imgQuery: 'Rosogolla Kolkata Bengali sweet cottage cheese sugar syrup',img:'https://images.unsplash.com/photo-1710354473051-5c33cc333406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Kathi Roll', desc: 'Kolkata\'s invention — spiced meat wrapped in flaky paratha', emoji: '🌯', imgQuery: 'Kathi Roll Kolkata spiced meat paratha wrap street food',img:'https://media.istockphoto.com/id/1400256468/photo/mix-vegetable-kathi-roll.webp?a=1&b=1&s=612x612&w=0&k=20&c=lEAqXmWXQJeaY_1dbah56qRGmRx2EukJ2u-skGVYCZ0=' },
      { name: 'Phuchka', desc: 'Kolkata\'s version of pani puri — tangier and spicier', emoji: '🫙', imgQuery: 'Phuchka Kolkata pani puri tangy spicy street food',img:'https://images.unsplash.com/photo-1649140041688-0f75446e707e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mishti Doi', desc: 'Sweet fermented yogurt — iconic Bengali dessert', emoji: '🍮', imgQuery: 'Mishti Doi sweet fermented yogurt Bengali dessert earthen pot' ,img:'https://media.istockphoto.com/id/959398128/photo/mishti-doi-fermented-sweet-yogurt.webp?a=1&b=1&s=612x612&w=0&k=20&c=5kVE95pWimLkTs1VzedEx4ApXBovkM1GT_drWP3jHqg='},
      { name: 'Macher Jhol', desc: 'Light Bengali fish curry with mustard and turmeric', emoji: '🐟', imgQuery: 'Macher Jhol Bengali fish curry mustard turmeric light',img:'https://media.istockphoto.com/id/1711550551/photo/tasty-asian-fish-curry-seasoned-with-turmeric-garlic-onions-and-grated-ginger-and-indian.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z9CK_1AMJQWm5kILEbGUoEJ6jpB8EwPD3lF8w8xutaw=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Netaji Subhas Chandra Bose International Airport', time: 'Well connected to all Indian and Asian cities' },
        { mode: '🚂 Train', detail: 'Howrah and Sealdah — major railway hubs', time: '17 hrs from Delhi, 26 hrs from Mumbai' },
        { mode: '🚌 Bus', detail: 'Buses from Bhubaneswar, Patna, Siliguri', time: '6 hrs from Bhubaneswar' },
      ],
      local: [
        { mode: '🚇 Kolkata Metro', detail: 'India\'s first metro — still a joy to ride' },
        { mode: '🚃 Tram', detail: 'India\'s only remaining tram network!' },
        { mode: '🛺 Yellow Taxi', detail: 'Iconic Kolkata Ambassador taxis' },
        { mode: '🚲 Cycle Rickshaw', detail: 'Available in narrower lanes of old city' },
      ]
    }
  },

  jodhpur: {
    name: 'Jodhpur',
    state: 'Rajasthan',
    description: 'Jodhpur, the Blue City of India, is dominated by the magnificent Mehrangarh Fort. The city\'s blue-painted houses create a stunning skyline visible for miles around.',
    bestTime: 'October to March',
    temperature: '8°C - 42°C',
    language: 'Hindi, Rajasthani, Marwari',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    places: [
      { name: 'Mehrangarh Fort', desc: 'Massive hilltop fort rising 150m above the blue city', emoji: '🏰', imgQuery: 'Mehrangarh Fort Jodhpur blue city hilltop massive Rajasthan',img:'https://images.unsplash.com/photo-1580389672842-9755d100d18e?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Jaswant Thada', desc: 'Beautiful white marble cenotaph near Mehrangarh', emoji: '🕌', imgQuery: 'Jaswant Thada Jodhpur white marble cenotaph Rajasthan' ,img:'https://images.unsplash.com/photo-1647946411130-b6b35df52974?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Umaid Bhawan Palace', desc: '20th century palace — part hotel part museum', emoji: '👑', imgQuery: 'Umaid Bhawan Palace Jodhpur 20th century hotel museum',img:'https://images.unsplash.com/photo-1504194947363-2f14d9e0e445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VW1haWQlMjBCaGF3YW4lMjBQYWxhY2V8ZW58MHx8MHx8fDA%3D' },
      { name: 'Clock Tower Sardar Market', desc: 'Bustling market for spices, textiles and handicrafts', emoji: '🛍️', imgQuery: 'Clock Tower Sardar Market Jodhpur spices textiles handicrafts',img:'https://media.istockphoto.com/id/2178459825/photo/panoramic-view-from-top-famous-sardar-market-and-ghanta-ghar-clock-tower-with-mehrangarh-fort.jpg?s=612x612&w=0&k=20&c=xoaC5tjLUSy97EtdjI7AlvAf2VXv5mUnDXeWrpDhDK0=' },
      { name: 'Mandore Gardens', desc: 'Historic garden with cenotaphs of Jodhpur rulers', emoji: '🌸', imgQuery: 'Mandore Gardens Jodhpur cenotaphs historic Rajasthan' ,img:'https://media.istockphoto.com/id/2173346580/photo/the-royal-cenotaph-and-temples-in-mandore-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=zRR4zQgdvfom8ryr4Qaz_nVL1w6ZlL1RDTPzX1-Em64='},
      { name: 'Blue City Walk', desc: 'Walking tour through the iconic blue-painted old city lanes', emoji: '🔵', imgQuery: 'Blue City Jodhpur blue painted houses old city aerial view' ,img:'https://images.unsplash.com/photo-1649497539295-ff89b0639669?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ],
    hotels: [
      { name: 'Heritage Fort Hotel', type: 'Luxury', price: '₹12,000/night', rating: '⭐ 4.9', imgQuery: 'luxury heritage fort hotel Jodhpur blue city view',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PyAklut7xyxYZNTgHkynt_i-k9pis6kfHQ&s' },
      { name: 'Blue City Haveli', type: 'Mid Range', price: '₹3,500/night', rating: '⭐ 4.5', imgQuery: 'haveli hotel Jodhpur blue city mid range Rajasthan' ,img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/275400716.jpg?k=8e90a7b019422c29caa67a6f4faff934ca28d3666e3b93082a63f7b7ac08735a&o='},
      { name: 'Budget Hostel', type: 'Budget', price: '₹600/night', rating: '⭐ 4.2', imgQuery: 'budget hostel Jodhpur backpacker blue city Rajasthan' ,img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/183429635.jpg?k=d284e900b5c8e461f94c8b95e0d7a736395c379a130fcc3faec3c217d0b0bbd6&o='},
    ],
    food: [
      { name: 'Dal Baati Churma', desc: 'Rajasthan\'s most iconic dish cooked over wood fire', emoji: '🥘', imgQuery: 'Dal Baati Churma Rajasthan wood fire traditional iconic',img:'https://media.istockphoto.com/id/1183984443/photo/shallow-depth-of-feild-shot-with-dal-baati-churma-and-other-elements-of-a-perfect-rajasthani.webp?a=1&b=1&s=612x612&w=0&k=20&c=KIuuvuM3L3katT9LmNipP2rIgPAFLy798ROHxpRYqJs=' },
      { name: 'Mirchi Bada', desc: 'Jodhpur\'s famous large chilli fritter — must try', emoji: '🌶️', imgQuery: 'Mirchi Bada Jodhpur large chilli fritter street food famous',img:'https://images.unsplash.com/photo-1611850351931-be566839b998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWlyY2hpJTIwQmFkYXxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Mawa Kachori', desc: 'Sweet deep-fried pastry with khoya filling', emoji: '🍬', imgQuery: 'Mawa Kachori Jodhpur sweet fried pastry khoya Rajasthan',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqmduCqCAMLm0BsIuM0kZ4_uCE3cC83RsEw&s' },
      { name: 'Makhaniya Lassi', desc: 'Thick creamy yogurt drink topped with butter', emoji: '🥛', imgQuery: 'Makhaniya Lassi Jodhpur thick creamy yogurt butter drink',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKaIbUIYBfsmdZoEeHw_O3cEDbT9ljB5JTA&s' },
      { name: 'Gatte ki Khichdi', desc: 'Gram flour dumplings cooked with rice and spices', emoji: '🍛', imgQuery: 'Gatte ki Khichdi Rajasthan gram flour dumplings rice',img:'https://images.unsplash.com/photo-1653850280260-aa3b9e00b230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R2F0dGUlMjBraSUyMEtoaWNoZGl8ZW58MHx8MHx8fDA%3D' },
      { name: 'Laal Maas', desc: 'Fiery red mutton curry with Rajasthani chillies', emoji: '🍖', imgQuery: 'Laal Maas Rajasthan fiery red mutton curry chilli',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyiNwIw190Sru-p6HPnus9ZW-6ovBzBGCyw&s' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Jodhpur Airport — connected to Delhi, Mumbai, Jaipur', time: 'Direct flights from major cities' },
        { mode: '🚂 Train', detail: 'Jodhpur Junction — well connected', time: '10 hrs from Delhi, 6 hrs from Jaipur' },
        { mode: '🚌 Bus', detail: 'RSRTC buses from Jaipur, Udaipur, Ajmer', time: '5-6 hrs from Jaipur' },
      ],
      local: [
        { mode: '🛺 Auto Rickshaw', detail: 'Most common around the fort area' },
        { mode: '🚕 Ola/Uber', detail: 'Available in main city areas' },
        { mode: '🐪 Camel Ride', detail: 'Traditional camel cart rides near fort' },
        { mode: '🚲 Cycle', detail: 'Great for exploring blue city lanes' },
      ]
    }
  },

  spiti: {
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    description: 'Spiti Valley is a cold desert mountain valley in the Himalayas known as the "Middle Land" — one of the most remote and surreal landscapes on earth.',
    bestTime: 'June to September',
    temperature: '-30°C to 20°C',
    language: 'Spitian, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1600&q=80',
    places: [
      { name: 'Key Monastery', desc: 'Largest monastery in Spiti perched dramatically on a hilltop', emoji: '🛕', imgQuery: 'Key Monastery Spiti hilltop dramatic Himachal Pradesh Buddhist',img:'https://images.unsplash.com/photo-1746093846930-ab89242b9fb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2V5JTIwTW9uYXN0ZXJ5JTIwc3BpdGl8ZW58MHx8MHx8fDA%3D' },
      { name: 'Chandratal Lake', desc: 'Moon Lake at 4300m — one of the most beautiful lakes in India', emoji: '🌙', imgQuery: 'Chandratal Lake moon lake Spiti 4300m Himachal blue',img:'https://plus.unsplash.com/premium_photo-1697729476736-18a05381123f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhbmRyYXRhbCUyMExha2UlMjBzcGl0aXxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Dhankar Village', desc: 'Precariously perched village with 1000-year-old monastery', emoji: '🏘️', imgQuery: 'Dhankar Village Spiti cliff 1000 year old monastery ancient',img:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Dhankar_Village.jpg' },
      { name: 'Hikkim Post Office', desc: 'World\'s highest post office at 4400m', emoji: '📮', imgQuery: 'Hikkim Post Office world highest 4400m Spiti postcard',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0vWwTP8R-moSmnq_vCmLI8yyxr4-Kqnkwuv8PLcciA&s=10' },
      { name: 'Kibber Village', desc: 'One of the world\'s highest inhabited villages at 4205m', emoji: '🏔️', imgQuery: 'Kibber Village Spiti highest inhabited 4205m Himachal',img:'https://media.istockphoto.com/id/1147142062/photo/sunrise-in-himalayan-village-on-mountain-rock-in-spiti-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=nmx1gnp4nZdHi4eklqLkJYkAb2KBZkZ9rrTMYwGHvBg=' },
      { name: 'Pin Valley', desc: 'National park home to Snow Leopard and Siberian Ibex', emoji: '🐆', imgQuery: 'Pin Valley National Park Spiti snow leopard ibex Himachal',img:'https://images.unsplash.com/photo-1639776021103-48be5fbf6094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGluJTIwVmFsbGV5fGVufDB8fDB8fHww' },
    ],
    hotels: [
      { name: 'Eco Luxury Camp', type: 'Luxury', price: '₹6,000/night', rating: '⭐ 4.7', imgQuery: 'eco luxury camp Spiti valley tent mountain view Himachal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3LWRRXS3Hl151G4jICoCuxlQ6_sQxMMDF6xQ0AQe6w&s' },
      { name: 'Guesthouse in Kaza', type: 'Mid Range', price: '₹1,500/night', rating: '⭐ 4.4', imgQuery: 'guesthouse Kaza Spiti valley mid range Himachal Pradesh',img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/656025072.jpg?k=ce6b79b0b9314490070bc747b9ac3de19672fd4b047771e241fc989a26bc582a&o=' },
      { name: 'Homestay with Locals', type: 'Budget', price: '₹600/night', rating: '⭐ 4.5', imgQuery: 'local homestay Spiti valley traditional Himachal budget',img:'https://www.homestaysofindia.com/wp-content/uploads/2022/04/Mudh-Homestay2-Spiti.jpg' },
    ],
    food: [
      { name: 'Thukpa', desc: 'Tibetan noodle soup — essential for cold Spiti nights', emoji: '🍜', imgQuery: 'Thukpa Tibetan noodle soup Spiti Himachal cold night',img:'https://media.istockphoto.com/id/2269256679/photo/thukpa-tibetan-noodle-soup-in-pokhara-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=y1e_gNyxfCH_m7fZ1lf2YSUODO-6sTAIODnpESJ1Uv8=' },
      { name: 'Momos', desc: 'Steamed dumplings — best eaten at 4000m altitude!', emoji: '🥟', imgQuery: 'steamed momos dumplings Spiti Himachal Tibetan altitude',img:'https://images.unsplash.com/photo-1664990035720-faac522df41f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Butter Tea', desc: 'Salty yak butter tea — keeps you warm and hydrated', emoji: '🧈', imgQuery: 'yak butter tea salty Spiti Tibetan warm Himachal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRsz6-0WYvpK5jJYHa0WZ9c0o57jQv68Ccw&s' },
      { name: 'Tsampa', desc: 'Roasted barley flour — traditional staple food', emoji: '🌾', imgQuery: 'Tsampa roasted barley flour Spiti Tibet traditional staple',img:'https://i0.wp.com/www.yowangdu.com/wp-content/uploads/2020/01/Pa.jpg?resize=800%2C450&ssl=1' },
      { name: 'Chhang', desc: 'Locally brewed barley beer — warming on cold nights', emoji: '🍺', imgQuery: 'Chhang barley beer local brew Spiti Himachal cold night' ,img:'https://media.istockphoto.com/id/874616684/photo/barley-in-a-table-beside-a-glass-of-beer.webp?a=1&b=1&s=612x612&w=0&k=20&c=U6UD0uupjtxw8bNFt_sPF3l5bapN9yFyuxM_Fvot524='},
      { name: 'Sepen', desc: 'Local chilli sauce made from Spiti dry chillies', emoji: '🌶️', imgQuery: 'Sepen chilli sauce Spiti dry chillies local condiment',img:'https://m.media-amazon.com/images/I/718IsqJTcWL.jpg' },
    ],
    transport: {
      reach: [
        { mode: '🚗 Road via Manali', detail: 'Manali-Kaza route via Kunzum Pass', time: '2 day drive from Manali — open June-Oct' },
        { mode: '🚗 Road via Shimla', detail: 'Shimla-Kaza via Kinnaur Valley', time: '2 day drive from Shimla' },
        { mode: '🚌 Bus', detail: 'HRTC buses from Shimla and Manali to Kaza', time: '2 days — book in advance' },
      ],
      local: [
        { mode: '🚕 Shared Taxi', detail: 'Jeeps connect villages within Spiti' },
        { mode: '🛵 Bike Rental', detail: 'Royal Enfield from Manali — epic experience' },
        { mode: '🚶 Trekking', detail: 'Many villages only accessible by foot' },
        { mode: '🚗 Self Drive', detail: '4WD vehicle strongly recommended' },
      ]
    }
  },

  mahabaleshwar: {
    name: 'Mahabaleshwar',
    state: 'Maharashtra',
    description: 'Mahabaleshwar is a scenic hill station in the Sahyadri mountains known for its strawberries, lush green valleys, multiple viewpoints, and the origin of Krishna river.',
    bestTime: 'October to June',
    temperature: '5°C - 28°C',
    language: 'Marathi, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1579609424835-16beba97e3c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFoYWJhbGVzaHdhcnxlbnwwfHwwfHx8MA%3D%3D',
    places: [
      { name: 'Arthur\'s Seat', desc: 'Queen of all viewpoints — stunning views over Koyna valley', emoji: '🌅', imgQuery: 'Arthur Seat Mahabaleshwar viewpoint Koyna valley Maharashtra',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfaF2bdUELpJgxbqzzLCw2W5VsAV4ah4ITfnQd2snAjdkGEO8NfypfA8&s=10' },
      { name: 'Venna Lake', desc: 'Scenic lake with boating, horse riding and street food', emoji: '🚣', imgQuery: 'Venna Lake Mahabaleshwar boating horse riding Maharashtra' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1QvLN13FiQxu9CFUUmSYxMRaY4TkpmhVJHghaBzuvw&s=10'},
      { name: 'Pratapgad Fort', desc: 'Historic Maratha fort where Shivaji defeated Afzal Khan', emoji: '🏰', imgQuery: 'Pratapgad Fort Mahabaleshwar Shivaji Maratha historic Maharashtra' },
      { name: 'Elephant\'s Head Point', desc: 'Viewpoint shaped like elephant\'s head with valley views', emoji: '🐘', imgQuery: 'Elephant Head Point Mahabaleshwar viewpoint valley Maharashtra',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJ4eX3glIIfSkqNl5HVfMqV7eCAI8rF5npQlC5oLsGA&s=10' },
      { name: 'Strawberry Farms', desc: 'Pick fresh strawberries directly from the farm', emoji: '🍓', imgQuery: 'Strawberry Farm Mahabaleshwar pick fresh Maharashtra famous',img:'https://media.istockphoto.com/id/1371021290/photo/strawberry-field-on-fruit-farm-fresh-ripe-organic-strawberry-background-harvesting-of-fresh.webp?a=1&b=1&s=612x612&w=0&k=20&c=aoiwqLsed_1NDjJ4OFrcnJjvODAv-IBD_uOvYZB3XEY=' },
      { name: 'Old Mahabaleshwar', desc: 'Krishna-Panchganga temple and origin of 5 rivers', emoji: '💧', imgQuery: 'Old Mahabaleshwar Krishna temple 5 rivers origin Maharashtra',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE52sKsQzabkC5upjPLMHVFsu-jDLCQXFw2Inpt7PiXA&s=10' },
    ],
    hotels: [
      { name: 'Valley View Resort', type: 'Luxury', price: '₹8,000/night', rating: '⭐ 4.7', imgQuery: 'luxury valley view resort Mahabaleshwar Maharashtra pool',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBcJaGEjxMvAtimGdY783ltQz5QPPAjD7_IsbOPq83Q&s=10' },
      { name: 'Hill Station Hotel', type: 'Mid Range', price: '₹3,000/night', rating: '⭐ 4.4', imgQuery: 'hill station hotel Mahabaleshwar mid range Maharashtra',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CJ3kD4lkVSwLKgKH_7GXi3nVjxLaBMLHuTgqsLcqNA&s' },
      { name: 'Budget Lodge', type: 'Budget', price: '₹800/night', rating: '⭐ 4.0', imgQuery: 'budget lodge Mahabaleshwar cheap backpacker Maharashtra',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGA2NkanOTJSZRGcYoC0IrJFBCLjw_G-BeEV6fkFZ6Jw&s=10' },
    ],
    food: [
      { name: 'Fresh Strawberries', desc: 'World-famous Mahabaleshwar strawberries — must buy!', emoji: '🍓', imgQuery: 'fresh strawberries Mahabaleshwar famous Maharashtra red ripe',img:'https://plus.unsplash.com/premium_photo-1675731118661-15dc54c11130?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJlc2glMjBTdHJhd2JlcnJpZXN8ZW58MHx8MHx8fDA%3D' },
      { name: 'Corn on the Cob', desc: 'Roasted corn with lime and spice at every corner', emoji: '🌽', imgQuery: 'roasted corn cob lime spice Maharashtra street food hill' ,img:'https://media.istockphoto.com/id/1264078821/photo/grilled-sweet-corn-with-lime-and-salt.webp?a=1&b=1&s=612x612&w=0&k=20&c=9QbkD6FnnioEot7ThZLRuzFdLWo1aZ6dAiAT97Ui9E0='},
      { name: 'Strawberry Cream', desc: 'Fresh cream with local strawberries — iconic combo', emoji: '🍦', imgQuery: 'strawberry cream Mahabaleshwar fresh local famous dessert',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbbHlGAG3pXz52uiYU71ZqPnI11Anm73obgAsaxFueg&s=10' },
      { name: 'Chikki', desc: 'Peanut and jaggery brittle — famous Mahabaleshwar souvenir', emoji: '🍯', imgQuery: 'Chikki peanut jaggery brittle Mahabaleshwar souvenir Maharashtra' ,img:'https://images.unsplash.com/photo-1682528565154-8e44ebd757e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpa2tpfGVufDB8fDB8fHww'},
      { name: 'Kanda Bhaji', desc: 'Crispy onion fritters perfect for the cool weather', emoji: '🧅', imgQuery: 'Kanda Bhaji crispy onion fritters Maharashtra monsoon tea' ,img:'https://media.istockphoto.com/id/1637748175/photo/holding-indian-street-food-kanda-bhaji-dish-favourite-indian-snack-in-monsoon-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=yBvRSZcYuBmP7Ipc3LEu_RsC4-MzPMazUZqB0IU7ay4='},
      { name: 'Mapro Products', desc: 'Famous local brand — strawberry jam, crush and squash', emoji: '🫙', imgQuery: 'Mapro strawberry jam crush products Mahabaleshwar famous brand',img:'https://media.istockphoto.com/id/1161298079/photo/a-set-of-natural-cosmetics-of-body-care-on-shelf-soap-cream-jar-shampoo-conditioner-shower.webp?a=1&b=1&s=612x612&w=0&k=20&c=a4JxaB5WK-jkl0HgOcPDjEnUAGGf1j8z9LDZA9fWB-Y=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Pune Airport (120 km) or Mumbai (270 km)', time: '3 hrs from Pune, 5 hrs from Mumbai' },
        { mode: '🚂 Train', detail: 'Wathar Station (60 km) then taxi', time: '4 hrs from Mumbai to Wathar' },
        { mode: '🚌 Bus', detail: 'MSRTC buses from Pune and Mumbai', time: '4 hrs from Pune' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Best for all viewpoint tours — hire for full day' },
        { mode: '🛵 Bike Rental', detail: 'Available in town from ₹300/day' },
        { mode: '🐎 Horse Ride', detail: 'Traditional horse rides to viewpoints' },
        { mode: '🚶 Walking', detail: 'Mall Road and market best on foot' },
      ]
    }
  },

  kodaikanal: {
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    description: 'Kodaikanal, the Princess of Hill Stations, is a charming town in the Palani Hills known for its star-shaped lake, pristine forests, and fresh mountain air.',
    bestTime: 'April to June, September to November',
    temperature: '8°C - 20°C',
    language: 'Tamil, English',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1699676124997-cf7a09898c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29kYWlrYW5hbCUyMDRrfGVufDB8fDB8fHww',
    places: [
      { name: 'Kodaikanal Lake', desc: 'Star-shaped artificial lake built in 1863', emoji: '⭐', imgQuery: 'Kodaikanal Lake star shaped boating Tamil Nadu Palani Hills',img:'https://images.unsplash.com/photo-1619020933389-e96f49742bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29kYWlrYW5hbCUyMGxha2V8ZW58MHx8MHx8fDA%3D' },
      { name: 'Coaker\'s Walk', desc: '1km promenade with spectacular valley and plains views', emoji: '🌄', imgQuery: 'Coakers Walk Kodaikanal promenade valley view Tamil Nadu',img:'https://media.istockphoto.com/id/1294286377/photo/a-view-of-the-shropshire-countryside.webp?a=1&b=1&s=612x612&w=0&k=20&c=NChXctQo77g92TnkSodZP8KtW2CvWg9zKiofoQrF8EE=' },
      { name: 'Pillar Rocks', desc: 'Three giant granite pillars rising 400 feet from valley', emoji: '🪨', imgQuery: 'Pillar Rocks Kodaikanal granite 400 feet valley Tamil Nadu',img:'https://images.unsplash.com/photo-1692792284356-f80113facd09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Bryant Park', desc: 'Beautiful botanical garden maintained since 1908', emoji: '🌸', imgQuery: 'Bryant Park Kodaikanal botanical garden 1908 flowers Tamil Nadu',img:'https://images.unsplash.com/photo-1704079347678-49250723fa6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJ5YW50JTIwUGFyayUyMGtvZGFpa2FuYWx8ZW58MHx8MHx8fDA%3D' },
      { name: 'Berijam Lake', desc: 'Pristine lake in dense shola forest — permit required', emoji: '🌿', imgQuery: 'Berijam Lake Kodaikanal shola forest pristine permit Tamil Nadu',img:'https://images.unsplash.com/photo-1551357140-c61c4f40224e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVyaWphbSUyMExha2UlMjBrb2RhaWthbmFsfGVufDB8fDB8fHww' },
      { name: 'Dolphin\'s Nose', desc: 'Dramatic rocky viewpoint resembling dolphin\'s nose', emoji: '🐬', imgQuery: 'Dolphins Nose Kodaikanal rocky viewpoint cliff Tamil Nadu',img:'https://images.unsplash.com/photo-1649738800857-277c4b8761c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RG9scGhpbidzJTIwTm9zZSUyMGtvZGFpa2FuYWx8ZW58MHx8MHx8fDA%3D' },
    ],
    hotels: [
      { name: 'Lake View Resort', type: 'Luxury', price: '₹7,000/night', rating: '⭐ 4.7', imgQuery: 'luxury lake view resort Kodaikanal Tamil Nadu hill station' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiYoMby-xt3qnV4YVejKkuZjq0f1gF7Uyzw5VVY2SSg&s'},
      { name: 'Hill Top Hotel', type: 'Mid Range', price: '₹2,500/night', rating: '⭐ 4.4', imgQuery: 'hill top hotel Kodaikanal mid range Tamil Nadu',img:'https://images.unsplash.com/photo-1747078364060-46e98dbc8912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbCUyMHRvcCUyMGhvdGVsJTIwS29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Budget Homestay', type: 'Budget', price: '₹700/night', rating: '⭐ 4.2', imgQuery: 'budget homestay Kodaikanal backpacker Tamil Nadu hills',img:'https://images.unsplash.com/photo-1706612558892-b25680675a03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXN0YXklMjBLb2RhaWthbmFsJTIwYmFja3BhY2tlcnxlbnwwfHwwfHx8MA%3D%3D' },
    ],
    food: [
      { name: 'Kodai Chocolate', desc: 'Homemade chocolates — most famous souvenir from Kodai', emoji: '🍫', imgQuery: 'Kodaikanal homemade chocolate shop souvenir Tamil Nadu famous',img:'https://media.istockphoto.com/id/2250471704/photo/different-tasty-chocolate-bars-on-beige-background-flat-lay.webp?a=1&b=1&s=612x612&w=0&k=20&c=j7rDzDGIku2EAI8vSH9gaAw0YTmCImPCz5SWc4YEqt8=' },
      { name: 'Eucalyptus Honey', desc: 'Wild forest honey from local beekeepers', emoji: '🍯', imgQuery: 'eucalyptus wild honey Kodaikanal forest beekeeper Tamil Nadu' ,img:'https://images.unsplash.com/photo-1694457331480-b709d8496b1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXVjYWx5cHR1cyUyMHdpbGQlMjBob25leXxlbnwwfHwwfHx8MA%3D%3D'},
      { name: 'Dosa', desc: 'Crispy South Indian rice crepe with coconut chutney', emoji: '🫓', imgQuery: 'crispy dosa South Indian coconut chutney sambar breakfast' ,img:'https://images.unsplash.com/photo-1643268972535-a2b100ff3632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D'},
      { name: 'Homemade Cheese', desc: 'Local artisanal cheese made by Kodai families', emoji: '🧀', imgQuery: 'homemade artisanal cheese Kodaikanal local family Tamil Nadu',img:'https://images.unsplash.com/photo-1558221693-89a565d7ecd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZW1hZGUlMjBhcnRpc2FuYWwlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D' },
      { name: 'Fresh Pear & Plum', desc: 'Local hill fruits best during season', emoji: '🍐', imgQuery: 'fresh pear plum Kodaikanal hill fruits seasonal Tamil Nadu',img:'https://images.unsplash.com/photo-1753361721819-166a4fa4b74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZyZXNoJTIwUGVhciUyMCUyNiUyMFBsdW0nfGVufDB8fDB8fHww' },
      { name: 'Filter Coffee', desc: 'Aromatic South Indian filter coffee in misty weather', emoji: '☕', imgQuery: 'filter coffee South Indian misty hill station Kodaikanal',img:'https://media.istockphoto.com/id/1589593378/photo/filter-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=LfgSpkAj_Av4ukZYyCrxwwYclclIaJNtbLTqVPKPCQw=' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Madurai Airport (120 km) or Coimbatore (175 km)', time: '3-4 hrs drive from either airport' },
        { mode: '🚂 Train', detail: 'Kodai Road Station (80 km) then bus/taxi', time: '4 hrs from Chennai to Kodai Road' },
        { mode: '🚌 Bus', detail: 'TNSTC buses from Madurai, Chennai, Bangalore', time: '4 hrs from Madurai' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Available for all viewpoints and sightseeing' },
        { mode: '🛵 Bike Rental', detail: 'Available from ₹300/day near lake' },
        { mode: '🚲 Bicycle', detail: 'Best for lake cycling — very popular activity' },
        { mode: '🐎 Horse Ride', detail: 'Available near the lake area' },
      ]
    }
  },

  ranthambore: {
    name: 'Ranthambore',
    state: 'Rajasthan',
    description: 'Ranthambore National Park is one of India\'s finest wildlife reserves and the best place to spot the Royal Bengal Tiger in the wild.',
    bestTime: 'October to June',
    temperature: '3°C - 45°C',
    language: 'Hindi, Rajasthani',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1600&q=80',
    places: [
      { name: 'Tiger Safari', desc: 'Jeep and canter safaris in search of Royal Bengal Tigers', emoji: '🐅', imgQuery: 'Tiger Safari Ranthambore Royal Bengal Tiger jeep jungle',img:'https://images.unsplash.com/photo-1771922366300-3d6005c21f1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Ranthambore Fort', desc: 'UNESCO Heritage 10th century fort inside the national park', emoji: '🏰', imgQuery: 'Ranthambore Fort UNESCO 10th century jungle national park',img:'https://plus.unsplash.com/premium_photo-1697729790981-cdf4d9b7a6cc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Padam Lake', desc: 'Scenic lake inside the park where tigers come to drink', emoji: '🌊', imgQuery: 'Padam Lake Ranthambore tiger water drinking wildlife' ,img:'https://media.istockphoto.com/id/1326036598/photo/serene-morning-on-lake-padma-talao-ranthambore-national-park-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fls8P8M9EOWB6TSIQAxhR-Et3ZYW2-NNTE-EU8oqTfQ='},
      { name: 'Trinetra Ganesh Temple', desc: 'Ancient Ganesh temple inside the fort', emoji: '🛕', imgQuery: 'Trinetra Ganesh Temple Ranthambore fort ancient auspicious' ,img:'https://images.unsplash.com/photo-1567878673047-0451c851056e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJpbmV0cmElMjBHYW5lc2glMjBUZW1wbGV8ZW58MHx8MHx8fDA%3D'},
      { name: 'Kachida Valley', desc: 'Zone 10 famous for leopards and sloth bears', emoji: '🐆', imgQuery: 'Kachida Valley Ranthambore leopard sloth bear zone 10',img:'https://media.istockphoto.com/id/2151369179/photo/panoramic-or-scenic-outside-view-of-old-ranthambore-fort-situated-on-hill-or-mountain.webp?a=1&b=1&s=612x612&w=0&k=20&c=HNQ1p8OpeF25Af3h4CcM53pFiaQs1WpH4G3TbSUxzAU=' },
      { name: 'Raj Bagh Ruins', desc: 'Atmospheric hunting lodge ruins inside the jungle', emoji: '🏚️', imgQuery: 'Raj Bagh ruins Ranthambore hunting lodge jungle atmospheric',img:'https://media.istockphoto.com/id/2149099548/photo/forest-and-old-hunting-palace-in-ranthambore-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ql3Fh2yT9SkZOXoMnU8WevvwepzpOKqSl86JY8H56bQ=' },
    ],
    hotels: [
      { name: 'Luxury Jungle Resort', type: 'Luxury', price: '₹20,000/night', rating: '⭐ 4.9', imgQuery: 'luxury jungle resort Ranthambore tiger safari pool',img:'https://images.unsplash.com/photo-1696171884624-96d08401853b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwanVuZ2xlJTIwcmVzb3J0JTIwUmFudGhhbWJvcmUlMjB0aWdlciUyMHNhZmFyaSUyMHBvb2x8ZW58MHx8MHx8fDA%3D' },
      { name: 'Wildlife Camp', type: 'Mid Range', price: '₹6,000/night', rating: '⭐ 4.6', imgQuery: 'wildlife camp Ranthambore tent mid range safari',img:'https://plus.unsplash.com/premium_photo-1719610048566-070afdcfc7aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGxpZmUlMjBjYW1wJTIwUmFudGhhbWJvcmUlMjB0ZW50fGVufDB8fDB8fHww' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹1,200/night', rating: '⭐ 4.2', imgQuery: 'budget guesthouse Ranthambore Sawai Madhopur cheap',img:'https://images.unsplash.com/photo-1711737475915-0c94b6d79f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Vlc3Rob3VzZSUyMFJhbnRoYW1ib3JlJTIwU2F3YWklMjBNYWRob3B1cnxlbnwwfHwwfHx8MA%3D%3D' },
    ],
    food: [
      { name: 'Dal Baati Churma', desc: 'Traditional Rajasthani meal at jungle camps', emoji: '🥘', imgQuery: 'Dal Baati Churma Rajasthan jungle camp traditional food',img:'https://media.istockphoto.com/id/1431725955/photo/traditional-rajasthani-food-thali.webp?a=1&b=1&s=612x612&w=0&k=20&c=RHQ-amOmmX17nvX5W8fJQkg0OUlzm2_AeV7pn418zLU=' },
      { name: 'Jungle Breakfast', desc: 'Early morning safari breakfast with chai and snacks', emoji: '🌅', imgQuery: 'jungle breakfast safari early morning chai snacks outdoor',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLQy9A_2L1EWqfipNGzHGEmxI0oS--hDsx4iaX_FV7A&s=10' },
      { name: 'Laal Maas', desc: 'Spicy Rajasthani mutton curry cooked over wood fire', emoji: '🍖', imgQuery: 'Laal Maas Rajasthan mutton curry wood fire camp',img:'https://media.istockphoto.com/id/1186138956/photo/jungli-laal-maas-a-famous-dish-from-rajasthan-fiery-hot-mutton-dish-close-up-horizontal.webp?a=1&b=1&s=612x612&w=0&k=20&c=rFvmQ2OJ3pLVUm3Jxyj7dTk0-NGogE7t1EPmoXwg4OA=' },
      { name: 'Bajra Roti', desc: 'Millet flatbread — traditional Rajasthani staple', emoji: '🫓', imgQuery: 'Bajra Roti millet flatbread Rajasthan traditional staple food',img:'https://media.istockphoto.com/id/1742037419/photo/healthy-food-bajra-roti-or-bakra-bhakri-is-ready-to-eat.webp?a=1&b=1&s=612x612&w=0&k=20&c=pN-RnldrG2tNIRNr3FFJvzQJUYu8wnKQwrE2RdBqjB4=' },
      { name: 'Rajasthani Thali', desc: 'Complete meal with multiple dishes and dessert', emoji: '🍛', imgQuery: 'Rajasthani Thali complete meal multiple dishes traditional' ,img:'https://media.istockphoto.com/id/1040749178/photo/thali-meal-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=xx7nRIm-kWAPx8nc4mmcEsULYuztwBXITVskt690ibs='},
      { name: 'Masala Chai', desc: 'Spiced tea at the camp after safari', emoji: '☕', imgQuery: 'masala chai spiced tea camp after safari morning',img:'https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFzYWxhJTIwQ2hhaXxlbnwwfHwwfHx8MA%3D%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Jaipur Airport (180 km) or Delhi (400 km)', time: '3.5 hrs from Jaipur' },
        { mode: '🚂 Train', detail: 'Sawai Madhopur Junction (13 km from park)', time: '4 hrs from Jaipur, 5 hrs from Agra' },
        { mode: '🚌 Bus', detail: 'Buses from Jaipur, Agra, Kota', time: '4-5 hrs from Jaipur' },
      ],
      local: [
        { mode: '🚗 Safari Jeep', detail: 'Must book in advance — only 6 people per jeep' },
        { mode: '🚌 Canter', detail: 'Larger vehicle — 20 people, more affordable' },
        { mode: '🚕 Taxi', detail: 'Available from Sawai Madhopur to resorts' },
        { mode: '🛵 Bike', detail: 'For exploring town area only' },
      ]
    }
  },

  kutch: {
    name: 'Kutch',
    state: 'Gujarat',
    description: 'Kutch is home to the world\'s largest salt desert — the Rann of Kutch. During Rann Utsav, the white salt flats under a full moon create an otherworldly magical landscape.',
    bestTime: 'November to February (Rann Utsav)',
    temperature: '5°C - 40°C',
    language: 'Gujarati, Kutchi, Hindi',
    currency: 'INR',
    image: 'https://images.unsplash.com/photo-1670406312373-6d4d1776e4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3V0Y2h8ZW58MHx8MHx8fDA%3D',
    places: [
      { name: 'White Rann', desc: 'Vast white salt desert — most surreal landscape in India', emoji: '🌕', imgQuery: 'White Rann Kutch salt desert surreal full moon Gujarat',img:'White Rann Kutch salt desert ' },
      { name: 'Kala Dungar', desc: 'Highest point in Kutch with panoramic Rann views', emoji: '⛰️', imgQuery: 'Kala Dungar Kutch highest point panoramic Rann view Gujarat',img:'https://media.istockphoto.com/id/1202202826/photo/rest-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ju5t1ZbwtkrELDpG9QVD0JeKlhOakbFUmYvSJzpejk8=' },
      { name: 'Dholavira', desc: 'UNESCO Heritage Harappan archaeological site', emoji: '🏛️', imgQuery: 'Dholavira UNESCO Harappan archaeological site Kutch Gujarat',img:'https://images.unsplash.com/photo-1708147399191-b8961ac41795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGhvbGF2aXJhfGVufDB8fDB8fHww' },
      { name: 'Mandvi Beach', desc: 'Pristine beach with shipbuilding yards and windmills', emoji: '🏖️', imgQuery: 'Mandvi Beach Kutch shipbuilding windmill pristine Gujarat',img:'https://plus.unsplash.com/premium_photo-1664117436813-d33dfaa96c2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Bhuj', desc: 'Historic capital city with palace and museum', emoji: '🏯', imgQuery: 'Bhuj Kutch historic city palace museum Gujarat' ,img:'https://images.unsplash.com/photo-1760192985754-91c563c2f763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Craft Villages', desc: 'Traditional villages famous for embroidery and handicrafts', emoji: '🧵', imgQuery: 'Kutch craft village embroidery handicraft Gujarat traditional',img:'https://media.istockphoto.com/id/1300336043/photo/art-embroidery-decorations-kutch-art-beautiful-view-of-embroider.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zj4JmU8OzTQVw0MgNGw-fFp1w8EARg9fuaUHiajD26w=' },
    ],
    hotels: [
      { name: 'Luxury Rann Resort', type: 'Luxury', price: '₹15,000/night', rating: '⭐ 4.8', imgQuery: 'luxury Rann resort Kutch Gujarat tent white desert',img:'https://media.istockphoto.com/id/996054686/photo/tent-city-dhordho-rann-of-kutch.jpg?s=612x612&w=0&k=20&c=P-RptxXk8uIGj1_OOv1jkqAIMgzrlYQnCwafW2VlIww=' },
      { name: 'Heritage Tent City', type: 'Mid Range', price: '₹5,000/night', rating: '⭐ 4.5', imgQuery: 'heritage tent city Rann Utsav Kutch mid range Gujarat',img:'https://images.unsplash.com/photo-1523131082769-56577f690b57?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Budget Guesthouse', type: 'Budget', price: '₹1,000/night', rating: '⭐ 4.1', imgQuery: 'budget guesthouse Bhuj Kutch Gujarat cheap stay' ,img:'https://media.istockphoto.com/id/1359573591/photo/bunga.webp?a=1&b=1&s=612x612&w=0&k=20&c=zcZHgkxveZ3h-h9aJEkpi_BdISIJSkIN9JSN1aN0U2U='},
    ],
    food: [
      { name: 'Kutchi Dabeli', desc: 'Spiced potato filling in bun with pomegranate and peanuts', emoji: '🍔', imgQuery: 'Kutchi Dabeli spiced potato bun pomegranate peanut Gujarat',img:'https://media.istockphoto.com/id/1637748174/photo/holding-indian-street-food-dabeli-kutchi-dabeli-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=eCzjH05FcxGjGr5Jf95zruL-39mrUkD3DkctUZN74wM=' },
      { name: 'Dhokla', desc: 'Steamed fermented chickpea flour savory cake', emoji: '🟨', imgQuery: 'Dhokla steamed chickpea flour savory cake Gujarat traditional' ,img:'https://images.unsplash.com/photo-1714799263291-272975db795a?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      { name: 'Bajra Rotla', desc: 'Millet flatbread with ghee — staple of Kutch', emoji: '🫓', imgQuery: 'Bajra Rotla millet flatbread ghee Kutch Gujarat staple',img:'https://images.unsplash.com/photo-1718874635150-85070e62fcf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Khichdi Kadhi', desc: 'Rice and lentil porridge with yogurt curry', emoji: '🍲', imgQuery: 'Khichdi Kadhi Gujarat rice lentil porridge yogurt curry',img:'https://media.istockphoto.com/id/928363488/photo/vegetarian-curry-gujarati-kadhi-with-chickpea-and-yogurt.webp?a=1&b=1&s=612x612&w=0&k=20&c=gkq7srJkP5uI8BWstDRGWPz1xhaIurnegav0a9HTwOc=' },
      { name: 'Mithi Sev', desc: 'Sweet vermicelli — traditional Kutchi dessert', emoji: '🍮', imgQuery: 'Mithi Sev sweet vermicelli Kutchi dessert traditional Gujarat' ,img:'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWl0aGklMjBTZXYlMjBzd2VldCUyMHZlcm1pY2VsbGklMjBLdXRjaGklMjBkZXNzZXJ0fGVufDB8fDB8fHww'},
      { name: 'Chaas', desc: 'Thin spiced buttermilk — refreshing in Kutch heat', emoji: '🥛', imgQuery: 'Chaas spiced buttermilk Gujarat refreshing summer drink thin',img:'https://images.unsplash.com/photo-1658333389103-5cfad6203e0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hhYXN8ZW58MHx8MHx8fDA%3D' },
    ],
    transport: {
      reach: [
        { mode: '✈️ Flight', detail: 'Bhuj Airport — connected to Mumbai and Ahmedabad', time: '1.5 hrs from Mumbai by flight' },
        { mode: '🚂 Train', detail: 'Bhuj Railway Station from Ahmedabad', time: '8 hrs from Ahmedabad by train' },
        { mode: '🚌 Bus', detail: 'GSRTC buses from Ahmedabad, Rajkot', time: '7-8 hrs from Ahmedabad' },
      ],
      local: [
        { mode: '🚕 Taxi', detail: 'Best for Rann and craft village tours' },
        { mode: '🚗 Self Drive', detail: 'Rental cars available in Bhuj' },
        { mode: '🐪 Camel Ride', detail: 'Experience the Rann on camelback' },
        { mode: '🚌 Local Bus', detail: 'Connects Bhuj to nearby villages' },
      ]
    }
  },
};

export default destinations;