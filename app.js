// sab sy phly hum ny aik variable banaya jis me array me value store kari 
const buttoncontent = ['All','BreakFast','Dinner','Lunch','Shakes']


const menuitem = [
    {
        id: 1,
        img: "./images/item-1.jpeg",
        categories: 'BreakFast',
        title: "Buttermilk Pancakes",
        price: "$15.99",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        img: "./images/item-2.jpeg",
        categories: "Lunch",
        title: "Diner Double",
        price: "$13.99",
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id: 3,
        img: "./images/item-3.jpeg",
        categories: "Shakes",
        title: "Godzilla Milkshake",
        price: "$6.99",
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 4,
        img: "./images/item-4.jpeg",
        categories: 'BreakFast',
        title: "Country Delight",
        price: "$20.99",
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        id: 5,
        img: "./images/item-5.jpeg",
        categories: "Lunch",
        title: "Egg Attack",
        price: "$22.99",
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        id: 6,
        img: "./images/item-6.jpeg",
        categories: "Shakes",
        title: "Oreo Dream",
        price: "$18.99",
        description: "Portland chicharrones ethical edison bulb, palo sant craft beer chia heirloom iPhone everyday"
    },
    {
        id: 7,
        img: "./images/item-7.jpeg",
        categories: 'BreakFast',
        title: "Bacon Overflow",
        price: "$8.99",
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        id: 8,
        img: "./images/item-8.jpeg",
        categories: "Lunch",
        title: "American Classic",
        price: "$12.99",
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id: 9,
        img: "./images/item-9.jpeg",
        categories: "Shakes",
        title: "Quarantine Buddy",
        price: "$16.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        id: 10,
        img: "./images/item-10.jpeg",
        categories: "Dinner",
        title: "Steak Dinner",
        price: "$39.99",
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
]

// usky baad phir aik or variable banaya jis me button ko call karwaya document.query selector ky zariy
const buttons = document.querySelector(".button")

// console.log(menucontent)
// usky badd aik khali array banaya jis ko hum buttons ko push karwa sakhy
const btns = []

// usky bad phir aik forEach ka function banaya jis ky parameter me aik value dy di btn ky naam sy
buttoncontent.forEach((btn)=>{
    
    // usky bad aik string ky naam ka variable banaya jis hum ny button ky tag ko call karwaya
    const string = `<button class="merabtn">${btn}</button>`
    
    // usky baad hum ny jo khali array banaya tha usko hum push karway gy string ky variable ky saath 
    btns.push(string)
    
});
// phir akhri me hum buttons ko call karwa kar innerhtml lagya phir khalli array ky variable ko join me karwaya taky string me mily 
buttons.innerHTML = btns.join("")



                                // menu section


const menucontent = document.querySelector('.menu-content')
const menu = [];


const menuarry = menuitem.map((item)=>{
    return    `<div class="col-lg-6 pb-5 menu-item">
                      <div class="col-5 img">
                        <img  src=${item.img} width="100%" height="40%">
                      </div> 
                        <div class="col-12 price">
                            <div class="col-5 d-flex justify-content-between content">
                              <h5 class="foodtitle">${item.title}</h5>
                              <span class="price">${item.price}</span>
                             </div>
                        </div>
                        <div class="col-6 d-flex">
                            <p class="para">${item.description}</p>
                        </div><br>
                    </div>`    
    // menu.push(str)                
});
menucontent.innerHTML = menuarry.join("")


//     for filtration
const filterfuction = (filter)=>{

    if(filter == "All"){
        menucontent.innerHTML = menuarry.join("")
    }else{
        const filterarry = menuitem.filter((item) => item.categories.toLowerCase() === filter.toLowerCase()).map((item)=>{
            return    `<div class="col-lg-6 pb-5 menu-item">
            <div class="col-5 img">
              <img  src=${item.img} width="100%" height="40%">
            </div> 
              <div class="col-12 price">
                  <div class="col-5 d-flex justify-content-between content">
                    <h5 class="foodtitle">${item.title}</h5>
                    <span class="price">${item.price}</span>
                   </div>
              </div>
              <div class="col-6 d-flex">
                  <p class="para">${item.description}</p>
              </div><br>
          </div>` 
        })     
        console.log(filterfuction(filter))       
        menucontent.innerHTML = filterarry.join("")
    }
}

