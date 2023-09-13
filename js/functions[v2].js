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

// if(location.reload() == true){
// }
const LoadAllCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`); //careful it's `` not ''
    const data = await res.json();  //await and convert to json
    const tabCategory = data.data;
    const tabContainer = document.getElementById("tabs");
    tabCategory.forEach(category => {
        const div = document.createElement("div");
        div.innerHTML = `
            <a onclick="loadSingleCategoryData(${category.category_id})" class="tab hover:bg-red-500 hover:text-white">${category.category}</a>
        `;
        tabContainer.appendChild(div);
        // loadSingleCategoryData(category.category_id)
        // console.log(category);
    });
};
const loadSingleCategoryData = async (id) => {
    cardContainer.textContent = '';
    emptyContainer.textContent = '';
    if(id === 1005){
        const emptyContainer = document.getElementById("emptyContainer");
        emptyContainer.textContent = '';
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="justify-center item-center w-1/4 m-auto mt-20">
        <img class=" m-auto" src="../assets/Icon.png" alt="">
        <p class="text-slate-800 text-xl text-center">Oops!! Sorry, There is no content here</p>    
        </div>
        `;
        emptyContainer.appendChild(div); 
    }
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`); //careful it's `` not ''
    const data = await res.json();  //await and convert to json
    // console.log(data)
    const catchEachIndexOfData = data.data.forEach(eachData =>{
        const authors = eachData.authors.forEach(element => {
        const authorProfilePicture = element.profile_picture;
        const authorProfileName = element.profile_name;
        const isVerified = element.verified;
        // const sortView = document.getElementById("sortByView")
        // sortByView(sortView.view)
        //--------------
        const blueBatchURL = "https://img.icons8.com/fluency-systems-filled/40/228BE6/verified-badge.png";
        if(isVerified === true){
        }
        const view = eachData.others.views;
        //-------------
        
        const cardContainer = document.getElementById("cardContainer");
        const div = document.createElement("div");
        div.innerHTML = `
            <div id="thumbnailImage" class="mt-8"><img class="w-full h-40" src="${eachData.thumbnail}" alt=""></div>
            <div class="flex gap-2 items-center">
                <div id="channelProfileImg" class="rounded-full ml-2 mt-1"><img class="max-w-sm rounded-full h-8 w-8" src="${authorProfilePicture}" alt=""></div>
                <div class="contentInfo">
                    <div id="contentTitle" class="text-black font-semibold"><p>${eachData.title}</p></div>
                    <div class="flex items-center">
                        <p id="channelName" class="text-slate-500 text-base">${authorProfileName}</p>                
                        <img class="ml-2 w-4 h-4 sm:w-4 sm:h-4" src="${blueBatchURL}" alt="verified-badge"/>
                    <div class="ml-2">
                        <p id="" class="text-slate-500 text-base">${isVerified}</p>
                    </div>
                </div>
                <p id="views" class="text-slate-400 text-sm">${view} views</p>
                </div>
            </div> `;
        cardContainer.appendChild(div);     
    })})
    // console.log(data);     
    
}
LoadAllCategory()
loadSingleCategoryData(1000)