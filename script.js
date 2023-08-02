const todasReceitas = [
    {
        id: 1,
        name: "bolo de morango",
        ingredients: ["morangos", "trigo",],
        instructions: ["junta tudo e mexe",],
        tips: ["cuida pra n mexer por horas",],
        image: "url",
    },
    
]


const chefs = document.querySelectorAll('.chef')
const chefsDesc = document.querySelectorAll('.chef-text')

chefs.forEach((chef) => {
    chef.addEventListener('click', () => {
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