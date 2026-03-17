/* Moth Quest - Point & Click Game Engine */
(function(){

  const scenes = {
    office1: {
      id: 'office1',
      name: 'Office 1',
      image: 'Office 1.jpg',
      hotspots: [
        {
      id: 'approach-door',
      x: 46, y: 43, w: 9, h: 40,
      arrow: true,               // tells JS to render an arrow image
      src: 'arrowup.svg',  // path to the arrowup image
      action: { type: 'changeScene', target: 'office2' }
    }
       
      ]
    },
office2: {
  id: 'office2',
  name: 'Office 2',
  image: 'Office 2.jpg',
  hotspots: [
    {
      id: 'arrowright',
      x: 85, y: 45, w: 15, h: 15,
      arrow: true,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'left1' }
    },
    {
      id: 'lampleft',
      x: 23, y: 12, w: 8, h: 20,
      imgSrc: 'question.png',
      action: { type: 'changeScene', target: 'lampleft' }
    },
    {
      id: 'lampright',
      x: 69, y: 12, w: 8, h: 20,
      imgSrc: 'question.png',
      action: { type: 'changeScene', target: 'lampright' }
    },
    {
      id: 'arrowup-office3',
      x: 45, y: 42, w: 9, h: 60,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'office3' }
    },
    {
      id: 'arrowleft',
      x: 1, y: 45, w: 15, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'plantsleft1' }
    }
  ]
},

     plantsleft1: {
      id: 'plantsleft1',
      name: 'Plants Left 1',
      image: 'PlantsLeft1.jpg',
      hotspots: [
        {
 
  x: 47, y: 22, w: 15, h: 25,
  imgSrc: 'question.png', // new image
  action: { type: 'changeScene', target: 'plantsleft2' }
        }
      ]
    },
  
       plantsleft2: {
      id: 'plantsleft2',
      name: 'Plants Left 2',
      image: 'PlantsLeft2.jpg',
      hotspots: [
        {
 
  x: 55, y: 25, w: 17, h: 25,
  imgSrc: 'question.png', // new image
  action: { type: 'changeScene', target: 'plantsleft3' }
        }
      ]
    },

        plantsleft3: {
      id: 'plantsleft3',
      name: 'Plants Left 3',
      image: 'PlantsLeft3.jpg',
      hotspots: [
        {
 
  x: 47, y: 22, w: 15, h: 25,
  imgSrc: 'question.png', // new image
  action: { type: 'changeScene', target: 'plantsleftclose' }
        }
      ]
    },

       plantsleftclose: {
      id: 'plantsleftclose',
      name: 'Plants Left Close',
      image: 'PlantsLeftClose.jpg',
      hotspots: [
        
 
  
      ]
    },

 lampleft: {
      id: 'lampleft',
      name: 'Lamp Left',
      image: 'Lamp Left.jpg',
      hotspots: [
        {
  id: 'lampleft-hotspot',
  x: 47, y: 12, w: 15, h: 25,
  imgSrc: 'question.png', // new image
  action: { type: 'changeScene', target: 'lampleftclose' }
        }
      ]
    },

     lampleftclose: {
      id: 'lampleftclose',
      name: 'Lamp Left Close',
      image: 'Lamp Left Close.jpg',
      hotspots: [
         
      ]
    },
  lampright: {
      id: 'lampright',
      name: 'Lamp Right',
      image: 'Lamp Right.jpg',
      hotspots: [
         {
        x: 47, y: 12, w: 15, h: 25,
        imgSrc: 'question.png', // new image
        action: { type: 'changeScene', target: 'lamprightclose' }
      }
         
      ]
    },

   lamprightclose: {
    id: 'lamprightclose',
    name: 'Lamp Right Close',
    image: 'Lamp Right Close.jpg',
    hotspots: [
     
    ]
  },
  office3: {
      id: 'office3',
      name: 'Office 3',
      image: 'Office 3.jpg',
      hotspots: [
  {
  id: 'zoom-record',
  x: 43, y: 34, w: 15, h: 30,
  imgSrc: 'question.png', // path to your image
  action: { type: 'changeScene', target: 'record1' }
}

       
      ]
    },

  record1: {
      id: 'record1',
      name: 'Record 1',
      image: 'Record 1.jpg',
      hotspots: [
       
        {
  id: 'listen-music',
  x: 31.25, y: 12.5, w: 36, h: 75,
  imgSrc: 'music.png',
  action: { 
    type: 'link',
    url: 'https://mallgothmoths.bandcamp.com/',
    target: '_blank'
  }
        }
       
      ]
    },

      left1: {
      id: 'left1',
      name: 'Left 1',
      image: 'Left 1.jpg',
      hotspots: [
       
      {
      id: 'arrowdown',
      x: 45, y: 63, w: 10, h: 15,
      arrow: true,
      src: 'arrowdown.svg',
      action: { type: 'changeScene', target: 'plantleftleft' }
    },

      {
      id: 'arrowleft',
      x: 65, y: 55, w: 5, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'around1' }
    },
      {
      id: 'arrowleft',
      x: 5, y: 55, w: 8, h: 15,
      src: 'arrowleft.svg',
      arrow: true,
      action: { type: 'changeScene', target: 'office2' }
    },
      
      ]
    },

    plantleftleft: {
      id: 'plantleftleft',
      name: 'Plant Left Left',
      image: 'plantleftleft.jpg',
      hotspots: [
       
{
  id: 'zoom-plant',
  x: 20, y: 5, w: 20, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'plantleftleftclose' }
}

      
      ]
    },

    plantleftleftclose: {
  id: 'plantleftleftclose',
  name: 'Plant Left Left Close',
  image: 'plantleftleftclose.jpg',
  hotspots: [
    {
  id: 'more-zoom-plant',
  x: 30, y: 25, w: 30, h: 40,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'plantleftleftcloser' }
}

  ]
},

    plantleftleftcloser: {
  id: 'plantleftleftcloser',
  name: 'Plant Left Left Closer',
  image: 'plantleftleftcloser.jpg',
  hotspots: [
  ]
},
around1: {
  id: 'around1',
  name: 'Around 1',
  image: 'Around 1.jpg',
  hotspots: [
   {
      id: 'arrowup',
      x: 50, y: 55, w: 5, h: 15,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'around2' }
    },
    {
      id: 'arrowright',
      arrow: true,
      x: 90, y: 55, w: 8, h: 15,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'door2' }
    },
     {
      id: 'arrowleft',
      x: 5, y: 55, w: 8, h: 15,
      src: 'arrowleft.svg',
      arrow: true,
      action: { type: 'changeScene', target: 'left1' }
    },
  ]
},

around2: {
  id: 'around2',
  name: 'Around 2',
  image: 'Around 2.jpg',
  hotspots: [
 {
  x: 25, y: 30, w: 30, h: 30,  // adjust position & size
  imgSrc: 'question.png',  // the image to show
  action: { type: 'changeScene', target: 'vendingmachine' }
},

{
      id: 'arrowleft',
      x: 55, y: 40, w: 5, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'otheroffice' }
    },

       {
      id: 'arrowup',
      x: 80, y: 45, w: 5, h: 15,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'gate' }
    },
  
 
  ]
},

gate: {
  id: 'gate',
  name: 'Gate',
  image: 'Gate.jpg',
  hotspots: [
{
  x: 33, y: 28, w: 30, h: 30,  // adjust position & size
  imgSrc: 'question.png',  // the image to show
  action: { type: 'changeScene', target: 'gatecloseup' }
}, 

  {
      id: 'arrowright',
      x: 90, y: 50, w: 7, h: 15,
      arrow: true,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'roomsgeneral' }
    },

     {
      id: 'arrowleft',
      x: 3, y: 50, w: 7, h: 15,
      src: 'arrowleft.svg',
      arrow: true,
      action: { type: 'changeScene', target: 'around2' }
    },
  ]
},

roomsgeneral: {
  id: 'roomsgeneral',
  name: 'Rooms General',
  image: 'RoomsGeneral.jpg',
  hotspots: [
{
  x: 35, y: 44, w: 20, h: 30,  // adjust position & size
  imgSrc: 'question.png',  // the image to show
  action: { type: 'changeScene', target: 'spookyhall' }
}, 


 {
      id: 'arrowleft',
      x: 3, y: 50, w: 7, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'gate' }
    },
  
  ]
},

spookyhall: {
  id: 'spookyhall',
  name: 'Spooky Hall',
  image: 'Spooky Hall.jpg',
  hotspots: [
{
  x: 48, y: 1, w: 10, h: 30,  // adjust position & size
  imgSrc: 'question.png',  // the image to show
  action: { type: 'changeScene', target: 'spookyhallup' }
}, 

 {
      id: 'arrowup',
      x: 48, y: 50, w: 10, h: 15,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'afterspookyhallleft' }
    },
  
  ]
},

spookyhallup: {
  id: 'spookyhallup',
  name: 'Spooky Hall Up',
  image: 'Spooky Hall Up.jpg',
  hotspots: [
{
  x: 73, y: 1, w: 5, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'spookyhallupclose' }
}, 

 
  
  ]
},

spookyhallupclose: {
  id: 'spookyhallupclose',
  name: 'Spooky Hall Up Close',
  image: 'Spooky Hall Up Close.jpg',
},

afterspookyhallleft: {
  id: 'afterspookyhallleft',
  name: 'After Spooky Hall Left',
  image: 'after spooky hall left.jpg',
  hotspots: [
 {
      id: 'arrowright',
      arrow: true,
      x: 87, y: 50, w: 10, h: 15,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'spookyhallgoingback' }
    }, 
  
  {
  x: 59.5, y: 24, w: 10, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'room4' }
}, ]
},

room4: {
  id: 'room4',
  name: 'Room 4',
  image: 'room 4.jpg',
},

spookyhallgoingback: {
  id: 'spookyhallgoingback',
  name: 'Spooky Hall Going Back',
  image: 'spooky hall going back.jpg',
  hotspots: [
 {
      id: 'arrowright',
      arrow: true,
      x: 88, y: 50, w: 10, h: 15,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'afterspookyhallright' }
    }, 
  
  {
      id: 'arrowleft',
      x: 2, y: 50, w: 10, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'afterspookyhallleft' }
    },
    {
      id: 'arrowup',
      x: 50, y: 45, w: 10, h: 15,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'roomsgeneral' }
    }, ]
},

afterspookyhallright: {
  id: 'afterspookyhallright',
  name: 'After Spooky Hall Right',
  image: 'after spooky hall right.jpg',
  hotspots: [
 {
      id: 'arrowleft',
      x: 2, y: 50, w: 10, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'spookyhallgoingback' }
    }, 
  
  {
  x: 37, y: 40, w: 10, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'oldwindowcloseup' }
}, ]
},

oldwindowcloseup: {
  id: 'oldwindowcloseup',
  name: 'Old Window Closeup',
  image: 'old window closeup.jpg',
  hotspots: [
{
  x: 28, y: 55, w: 15, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'entrance' }
},   ]
},

entrance: {
  id: 'entrance',
  name: 'Entrance',
  image: 'entrance.jpg',
  hotspots: [
{
  x: 27, y: 63, w: 15, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'leftroom1' }
}, 
{
  x: 87, y: 45, w: 17, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'afterentranceright' }
},   ]
},

leftroom1: {
  id: 'leftroom1',
  name: 'Left Room 1',
  image: 'leftroom1.jpg',
  hotspots: [
     {
      id: 'arrowleft',
      x: 3, y: 40, w: 10, h: 20,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'leftroom2' }
    }, 
    {
      id: 'arrowdown',
      x: 50, y: 75, w: 10, h: 20,
      arrow: true,
      src: 'arrowdown.svg',
      action: { type: 'changeScene', target: 'entrance' }
    }, 
 ]
},

leftroom2: {
  id: 'leftroom2',
  name: 'Left Room 2',
  image: 'leftroom2.jpg',
  hotspots: [
     {
      id: 'arrowright',
      arrow: true,
      x: 87, y: 40, w: 10, h: 20,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'leftroom1' }
    }, 
    {
  x: 36, y: 56, w: 15, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'leftroom2detail' }
}, 
 ]
},

leftroom2detail: {
  id: 'leftroom2detail',
  name: 'Left Room 2 Detail',
  image: 'leftroom2detail.jpg',
},

afterentranceright: {
  id: 'afterentranceright',
  name: 'After Entrance Right',
  image: 'after entrance right.jpg',
  hotspots: [
{
      id: 'arrowdown',
      x: 50, y: 80, w: 10, h: 15,
      arrow: true,
      src: 'arrowdown.svg',
      action: { type: 'changeScene', target: 'hole' }
    }, 
  {
      id: 'arrowup',
      x: 71, y: 40, w: 15, h: 30,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'crawlroom' }
    },  
   {
      id: 'arrowleft',
      x: 3, y: 40, w: 10, h: 20,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'entrance' }
    }, ]
},

hole: {
  id: 'hole',
  name: 'Hole',
  image: 'hole.jpg',
  hotspots: [
{
  x: 15, y: 45, w: 15, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'holecloseup' }
}, 
 ]
},

crawlroom: {
  id: 'crawlroom',
  name: 'Crawl Room',
  image: 'crawl room.jpg',
  hotspots: [
    {
      id: 'arrowdown',
      x: 50, y: 80, w: 10, h: 15,
      arrow: true,
      src: 'arrowdown.svg',
      action: { type: 'changeScene', target: 'afterentranceright' }
    }, 
    {
      id: 'arrowup',
      x: 50, y: 5, w: 10, h: 15,
      arrow: true,
      src: 'arrowup.svg',
      action: { type: 'changeScene', target: 'crawlroomup' }
    }, 
 ]
},

crawlroomup: {
  id: 'crawlroomup',
  name: 'Crawl Room Up',
  image: 'crawl room up.jpg',
  hotspots: [
     {
      id: 'arrowdown',
      x: 50, y: 80, w: 10, h: 15,
      arrow: true,
      src: 'arrowdown.svg',
      action: { type: 'changeScene', target: 'crawlroom' }
    }, 
 ]
},

holecloseup: {
  id: 'holecloseup',
  name: 'Hole Closeup',
  image: 'holecloseup.jpg',
},



gatecloseup: {
  id: 'gatecloseup',
  name: 'Gate Closeup',
  image: 'gatecloseup.jpg',
},

otheroffice: {
  id: 'otheroffice',
  name: 'Other Office',
  image: 'Other Office.jpg',
  hotspots: [
 {
  x: 14, y: 3, w: 30, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'horseshoe3' }
},  ]
},

horseshoe3: {
  id: 'horseshoe3',
  name: 'Horseshoe 3',
  image: 'Horseshoe 3.jpg',
},


vendingmachine: {
  id: 'vendingmachine',
  name: 'Vending Machine',
  image: 'Vending Machine.jpg',
  hotspots: [
{
  x: 32, y: 35, w: 30, h: 30, 
  imgSrc: 'question.png', 
  action: { type: 'changeScene', target: 'vendingdoor' }
},   ]
},

vendingdoor: {
  id: 'vendingdoor',
  name: 'Vending Door',
  image: 'Vending Door.jpg',
  hotspots: [
{
  x: 37, y: 35, w: 30, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'vendingdooropen' }
},  ]
},

vendingdooropen: {
  id: 'vendingdooropen',
  name: 'Vending Door Open',
  image: 'Vending Door Open.jpg',
 
},

door2: {
  id: 'door2',
  name: 'Door 2',
  image: 'Door 2.jpg',
  hotspots: [
   {
      id: 'arrowleft',
      x: 3, y: 50, w: 7, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'door3' }
    },
     {
  x: 5, y: 7, w: 20, h: 30,
  imgSrc: 'question.png',
  action: { type: 'changeScene', target: 'window3' }
},

   ]
},

window3: {
  id: 'window3',
  name: 'Window 3',
  image: 'Window 3.jpg',
  hotspots: [
   
  {
      id: 'arrowleft',
      x: 3, y: 50, w: 7, h: 15,
      arrow: true,
      src: 'arrowleft.svg',
      action: { type: 'changeScene', target: 'window3close' }
    },

   ]
},

window3close: {
  id: 'window3close',
  name: 'Window 3 Close',
  image: 'Window 3.1.jpg',
  hotspots: [
   
     {
  x: 22, y: 20, w: 20, h: 30,
  imgSrc: 'question.png', 
  action: { type: 'changeScene', target: 'window3detail' }
},
{
      id: 'arrowright',
      arrow: true,
      x: 90, y: 50, w: 7, h: 15,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'window3' }
    },

   ]
},

window3detail: {
  id: 'window3detail',
  name: 'Window 3 Detail',
  image: 'Window 3.1.1.jpg',
 
},

door3: {
  id: 'door3',
  name: 'Door 3',
  image: 'Door 3.jpg',
  hotspots: [
 {
      id: 'arrowright',
      x: 90, y: 50, w: 7, h: 15,
      arrow: true,
      src: 'arrowright.png',
      action: { type: 'changeScene', target: 'door2' }
    },
  
  {
  id: 'mailbox',
  x: 5, y: 60, w: 20, h: 30, 
  imgSrc: 'question.png', 
  action: { type: 'changeScene', target: 'mailbox' }
}
]
},

mailbox: {
  id: 'mailbox',
  name: 'Mailbox',
  image: 'mailbox.jpg',
  hotspots: [
   {
  id: 'mailboxcloseup',
  x: 40, y: 40, w: 20, h: 30,  
  imgSrc: 'question.png',  
  action: { type: 'changeScene', target: 'mailboxcloseup' }
}

   ]
},

mailboxcloseup: {
  id: 'mailboxcloseup',
  name: 'Mailbox Closeup',
  image: 'mailbox closeup.jpg',
  hotspots: [
   {
  x: 15, y: 5, w: 20, h: 30, 
  imgSrc: 'question.png', 
  action: { type: 'changeScene', target: 'mailboxsurprise' }
}

   ]
},

mailboxsurprise: {
  id: 'mailboxsurprise',
  name: 'Mailbox Surprise',
  image: 'mailbox surprise.jpg',

}
  };

  let currentSceneId = 'office1';
  
  let sceneHistory = [];


  function $(id) { return document.getElementById(id); }

  function init() {
    renderScene();
    setupEventHandlers();
  }

  function renderScene() {
    const scene = scenes[currentSceneId];
    const sceneImg = $('scene');
    const hotspots = $('hotspots');
    const backBtn = $('back-btn');

    if (!scene) {
      console.error('Scene not found:', currentSceneId);
      return;
    }

  
// Scenes where back button should NOT appear
const noBackScenes = [
  'office1',
  'afterspookyhallleft',
  'afterspookyhallright',
  'gate',
  'spookyhallgoingback',
  'roomsgeneral',
  'door3',
  'around1',
  'left1',
  'window3close',
  'afterentranceright',
  'leftroom2',
  'leftroom1',
  'crawlroomup',
  'crawlroom',
];

// Show or hide scene image
if (currentSceneId === 'office1') {
  sceneImg.style.display = 'none';
} else {
  sceneImg.style.display = 'block';
  sceneImg.src = scene.image;
  sceneImg.alt = scene.name;
}

// Show or hide Back button
if (backBtn) {
  if (noBackScenes.includes(currentSceneId)) {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'block';
  }
}

hotspots.innerHTML = '';

scene.hotspots.forEach(h => {
  const btn = document.createElement('button');
  btn.className = 'hotspot';

  btn.style.background = 'none';
  btn.style.border = 'none';
  btn.style.padding = '0';

  // Render arrows
  if (h.arrow) {
    const img = document.createElement('img');
    img.src = h.src;
    img.classList.add('arrow-img');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    btn.appendChild(img);
  }

  // Render question/music icons
  if (h.imgSrc) {
    const img = document.createElement('img');
    img.src = h.imgSrc;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    btn.appendChild(img);
  }

  btn.style.left = h.x + '%';
  btn.style.top = h.y + '%';
  btn.style.width = h.w + '%';
  btn.style.height = h.h + '%';
  btn.title = h.id;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    handleHotspotClick(h);
  });

  hotspots.appendChild(btn);
});

// --- NEW: Render characters for this scene ---
  updateSceneCharacters(currentSceneId);

    function handleHotspotClick(hotspot) {
      const action = hotspot.action;
      if (hotspot.action.type === 'link') {
        window.open(hotspot.action.url, hotspot.action.target || '_self');
      }

      if (action.type === 'changeScene') {
        sceneHistory.push(currentSceneId); // store where we were
        currentSceneId = action.target;
        renderScene();
      } else if (action.type === 'message') {
        alert(action.text);
      }
    }
  }

  function setupEventHandlers() {
    const enterBtn = document.getElementById('enter-btn');
    const backBtn = document.getElementById('back-btn');
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const game = document.getElementById('game');
    const rotateOverlay = document.getElementById('rotate-overlay');

    if (enterBtn) {
      enterBtn.addEventListener('click', function() {
        if (menu) menu.style.display = 'none';
        if (game) game.style.display = 'block';
      });
    }
if (menuBtn) {
  menuBtn.addEventListener('click', function() {
    if (game) game.style.display = 'none';
    if (menu) menu.style.display = 'flex';

    // Reset game position
    currentSceneId = 'office1';
    sceneHistory = [];
    renderScene();
  });
}

if (backBtn) {
  backBtn.addEventListener('click', function() {

    // Old Window Closeup → After Spooky Hall Right
if (currentSceneId === 'oldwindowcloseup') {
  currentSceneId = 'afterspookyhallright';
  renderScene();
  return;
}
if (currentSceneId === 'office2') {
  currentSceneId = 'office1';
  renderScene();
  return;
}

       // Entrance → Old Window Closeup
    if (currentSceneId === 'entrance') {
      currentSceneId = 'oldwindowcloseup';
      renderScene();
      return;
    }
    // Window 3 always goes to Door 2
    if (currentSceneId === 'window3') {
      currentSceneId = 'door2';
      renderScene();
      return;
    }
if (
  currentSceneId === 'door2' || 
  currentSceneId === 'door3' ||
  currentSceneId === 'around2'
) {
  currentSceneId = 'around1'; 
  renderScene();
  return;
}

    // Default go-back behavior
    if (sceneHistory.length > 0) {
      currentSceneId = sceneHistory.pop();
      renderScene();
    }
  });
}

    // Handle orientation changes
    function updateOrientationOverlay() {
      if (rotateOverlay) {
        if (window.innerHeight > window.innerWidth) {
          rotateOverlay.style.display = 'flex';
        } else {
          rotateOverlay.style.display = 'none';
        }
      }
    }

    window.addEventListener('orientationchange', updateOrientationOverlay);
    window.addEventListener('resize', updateOrientationOverlay);
    updateOrientationOverlay();
  }

  window.addEventListener('load', init);
})();

document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.getElementById('about-btn');
  const howtoBtn = document.getElementById('howto-btn');
  const aboutPage = document.getElementById('about-page');
  const howtoPage = document.getElementById('howto-page');
  const aboutBackBtn = document.getElementById('about-back-btn');
  const howtoBackBtn = document.getElementById('howto-back-btn');
  const menu = document.getElementById('menu');
  const mothMusicBtn = document.getElementById('mothmusic-btn');

  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      menu.style.display = 'none';
      aboutPage.style.display = 'flex';
    });
  }

  if (mothMusicBtn) {
  mothMusicBtn.addEventListener('click', () => {
    window.open('https://mallgothmoths.bandcamp.com/', '_blank');
  });
}

  if (howtoBtn) {
    howtoBtn.addEventListener('click', () => {
      menu.style.display = 'none';
      howtoPage.style.display = 'flex';
    });
  }

  if (aboutBackBtn) {
    aboutBackBtn.addEventListener('click', () => {
      aboutPage.style.display = 'none';
      menu.style.display = 'flex';
    });
  }

  if (howtoBackBtn) {
    howtoBackBtn.addEventListener('click', () => {
      howtoPage.style.display = 'none';
      menu.style.display = 'flex';
    });
  }
});

const characters = [
  {
    id: 'froghat',
    src: 'froghat.svg',
    width: '30%',
    height: '45%',
    top: '15%',
    left: '45%',
    scenes: ['lampleftclose'],
    action: {
      type: 'message',
      texts: [
        'Welcome to Moth Quest, adventurer!',
        'Still here? Nice.',
        'You smell like a lamp.',
        'Oogly Boogly!',
      ],
    },
    messageIndex: 0, 
  },
  {
    id: 'angryguy',
    src: 'angryguy.svg',
    width: '30%', 
    height: '45%',
    top: '22%', 
    left: '39%',
    scenes: ['plantsleftclose'],
    action: {
      type: 'message',
      texts: [
        'Get off my lawn!',
        'I said SCRAM!',
        'Are you still here?!',
        '...fine. You can stay.'
      ]
    },
    messageIndex: 0,  },
    {
    id: 'moth',
    src: 'moth.svg',
    width: '30%', 
    height: '51%',
    top: '22%', 
    left: '39%',
    scenes: ['mailboxsurprise'],
action: {
      type: 'message',
      texts: [
        'Yoohoo! A visitor!',
        'Welcome to the mailbox, friend.',
        'This is my home, you know. I live here now.',
        'My favorite food is...well, mail, I guess? I eat mail.',
      ]
    },
    messageIndex: 0,   },
    {
    id: 'evilrat',
    src: 'evilrat.svg',
    width: '50%',  
    height: '60%',
    top: '30%', 
    left: '39%',
    scenes: ['vendingdooropen'],
    action: {
      type: 'message',
      texts: [
        'BEGONE, DEMON!',
        'Oh...sorry to startle you.',
        'Im in the middle of a very important ritual here.',
        'Do you have any fruit bars? For energy, you know?'
      ]
    },
    messageIndex: 0,
  },
   {
    id: 'mousereading',
    src: 'mousereading.svg',
    width: '40%',
    height: '51%',
    top: '36%', 
    left: '45%',
    scenes: ['gatecloseup'],
action: {
      type: 'message',
      texts: [
        'What a wonderful night for reading, isn\'t it?',
        'I just wish I could read...',
        'I always wanted to read a map',
        'But I\'m but a simple mouse. Oh well...'
      ]
    },
    messageIndex: 0,   },
  {
    id: 'angrywizard',
    src: 'angrywizard.svg',
    width: '40%', 
    height: '51%',
    top: '36%',  
    left: '38%',
    scenes: ['holecloseup'],
action: {
      type: 'message',
      texts: [
        'Every hear of KNOCKING?!1!?',
        'Knock knock. Who\'s there? Not you.',
        'Come back with a snack and then we can talk.',
        'I said come back with a snack, not just...come back. What are you, a door-to-door salesman?'
      ]
    },
    messageIndex: 0,   },
    {
    id: 'coffeerat',
    src: 'coffeerat.svg',
    width: '40%',
    height: '51%',
    top: '50%', 
    left: '5%',
    scenes: ['crawlroomup'],
action: {
      type: 'message',
      texts: [
        'How do you take your coffee? Seriously, how? TELL ME!!',
        'I need answers!',
        'I like mine how I like my soul.',
        'Bitter as SIN! Hahahaha!'
      ]
    },
    messageIndex: 0,   },
   {
    id: 'kitty',
    src: 'kitty.svg',
    width: '40%',
    height: '51%',
    top: '20%',
    left: '60%',
    scenes: ['spookyhallupclose'],
action: {
      type: 'message',
      texts: [
        '-- . --- .-- / -- . --- .--',
        '.-- .... --- / --. --- . ... / - .... . .-. . ..--..',
        '.. / -.-. .- -. / ... . . / -.-- --- ..-',
        '-... .- -. .- -. .- ...'
      ]
    },
    messageIndex: 0,   },
];

function updateSceneCharacters(sceneName) {
  const container = document.getElementById('characters');
  container.innerHTML = ''; // clear previous characters

  characters.forEach(char => {
    if (char.scenes.includes(sceneName)) {
      const charDiv = document.createElement('div');
      charDiv.id = char.id;
      console.log('Rendering character:', char.id, 'in scene:', sceneName);
      charDiv.className = 'character-hotspot';
      charDiv.style.position = 'absolute';
      charDiv.style.top = char.top;
      charDiv.style.left = char.left;
      charDiv.style.width = char.width;
      charDiv.style.height = char.height;
      charDiv.style.cursor = 'pointer';
      charDiv.style.zIndex = 50;

      const img = document.createElement('img');
      img.src = char.src;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';

      charDiv.appendChild(img);
      
      container.appendChild(charDiv);

      // ===== Add click handler for messages =====
      if (char.action) {
        charDiv.addEventListener('click', e => {
          e.stopPropagation();

          if (char.action.type === 'message') {
  // Remove any existing tooltip
  const existingTip = document.getElementById('message-tooltip');
  if (existingTip) existingTip.remove();

  // Get the current message from the array
  const messages = char.action.texts;
  const currentText = messages[char.messageIndex];

  // Move to the next message (loop back to 0 when we reach the end)
  char.messageIndex = (char.messageIndex + 1) % messages.length;

  // Create tooltip
  const tooltip = document.createElement('div');
  tooltip.id = 'message-tooltip';
  tooltip.innerText = currentText;
  tooltip.style.position = 'absolute';
  tooltip.style.background = 'rgba(0,0,0,0.8)';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '8px 12px';
  tooltip.style.borderRadius = '8px';
  tooltip.style.maxWidth = '200px';
  tooltip.style.textAlign = 'center';
  tooltip.style.fontFamily = 'Courier Prime, monospace';
  tooltip.style.fontSize = '20px';
  tooltip.style.zIndex = 100;

  // Position tooltip above the character
  const rect = charDiv.getBoundingClientRect();
  tooltip.style.left = rect.left + rect.width / 2 + 'px';
  tooltip.style.top = rect.top - 40 + 'px';
  tooltip.style.transform = 'translateX(-50%)';

  document.body.appendChild(tooltip);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    tooltip.remove();
  }, 3000);
}

else if (char.action.type === 'link') {
            window.open(char.action.url, char.action.target || '_self');
          }
        });
      }
      // ==========================================

    }
  });
}






