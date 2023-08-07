const chefs = document.querySelectorAll('.chef')
const chefsDesc = document.querySelectorAll('.chef-desc')

chefs.forEach((chef) => {
    chef.addEventListener('click', () => {
        
        chef.scrollIntoView()
        chefsDesc.forEach(desc => {
            
            
            if(desc.id === chef.id){
               desc.classList.toggle('text-ative')
               
            }
            else{
                if(desc.classList.contains('text-ative')){
                    desc.classList.toggle('text-ative')
                }
            }

        })
    })
})