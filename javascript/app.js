let allProducts = []
let filter = "all"
function addItem(){
    let itemInputValue = document.getElementById("itemInput").value
    let p = new Product(itemInputValue)
    allProducts.push(p)
    renderList()

}

function Product(name){
    this.name = name
    this.purchased = false
}

function renderList(){
    const listSection = document.getElementById('listSection')
    let filteredList = allProducts
    if(filter === 'purchased'){
        filteredList = allProducts.filter((p) => p.purchased)
    }else if(filter ===  'pending'){
        filteredList = allProducts.filter((p) => !p.purchased)        
    }
    if(filteredList.length === 0){
        listSection.innerHTML = `
        <div class="empty-state" >
            <p>موردی یافت نشد</p>
        </div>
        `
        return
    }

    const itemsHTML = filteredList.map((item, index) => `
    <div class="list-item">
        <div class="item-content">
            <div class="item-number">${index+1}</div>
            <div class="item-name">${item.name}</div>

        </div>

        <div class="item-actions">
            <button class="btn-success btn-small">
                    ${item.purchased ? 'بازگشت' : 'خریداری شد'}
            </button>


            <button class="btn-danger btn-small">
            حذف
            </button>
        </div>
    </div>
    `).join("")
    listSection.innerHTML = itemsHTML
}