// Card IDs
// 1.   thumbnailImage
// 2.   channelProfileImg
// 3.   contentTitle
// 4.   channelName
// 5.   blueBatch
// 6.   views

//----- onclick() ------
//all()
//music()
//drawing()
//comedy()

const LoadAllCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`); //careful it's `` not ''
    const data = await res.json();  //await and convert to json
    const allCategory = data.data;
    // console.log(data);      //obj
    // console.log(allCategory);    //array lenghth 4 for 4 category
    // console.log(allCategory[2]);    //all

    all(allCategory)
}

const loadDataByCategoryId = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();  //await and convert to json
    const categoryData = data.data;
    console.log(loadDataByCategoryId);      //obj
    
    test(categoryData);
    dynamicDataTest(categoryData)
}
//test  
function test(data) {
    
    console.log(data);    
    
    data.forEach(data =>{
        
        // console.log(`${data.title}`);
        
        //1. Get the parent div for the cards.
        const cards = document.getElementById('cardContainer');
        
        //2. Create a new div for the card.
        const card = document.createElement('div');
        
        //3. Set the innerHTML of the card.
        card.innerHTML = `
        <div id="thumbnailImage" class="mt-8"><img class="w-full h-40" src="${data.thumbnail}" alt=""></div>            
        <div class="flex items-start gap-2">
                <div id="channelProfileImg" class="rounded-full ml-2 mt-1"><img class="max-w-sm rounded-full h-8 w-8" src="${data.authors[0].profile_picture}" alt=""></div>
                <div class="contentInfo">
                <div id="contentTitle" class="text-black font-semibold"><p>${data.title}</p></div>
                <div class="flex">
                <p id="channelName" class="text-slate-500 text-base">${data.authors[0].profile_name}</p>
                
                <img class="ml-2 w-4 h-4 sm:w-4 sm:h-4" src="https://img.icons8.com/fluency-systems-filled/40/228BE6/verified-badge.png" alt="verified-badge"/>
                <div class="ml-2">
                <p id="" class="text-slate-500 text-base">${data.authors[0].verified === "" ? "T" : ""}</p>
                </div>
                </div>
                <p id="views" class="text-slate-400 text-sm">${data.others.views} views</p>
                </div>
                </div>`;
                //4. Append the card to the parent div.
                cards.appendChild(card);
            })
        }
        
// This function is called when the "all" button is clicked.
function all(categories) {
    // Get the "all" button element.
    const element = document.getElementById("all");
    // Add an event listener to the button that will be triggered when it is clicked.
    element.addEventListener("click", function() {
        // cards.textContent = '';
        // Iterate over the categories array.
        categories.forEach(categories => {
            const category = categories.category_id;
            // console.log(category);
            
            //if found the caegory all show the card
            if(category === 1000){
                // console.log('id',categories.category_id);
                // console.log('got all');
                loadDataByCategoryId();
                //4. Append the card to the parent div.
                // cards.appendChild(card);
            }
            // console.log('clicked', categories);
        });
        // console.log('clicked', categories);
});
}
LoadAllCategory()