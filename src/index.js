import './less/index.less'

// Your code goes here!
// load event here!!!
window.onload = function (evt){
    console.log(`locked and ${evt.type}ed, ready to go!`);
    const  heading = document.querySelector('h1')
    heading.textContent = 'Seatbelts Everyone!'
    
    //Copy event
    window.addEventListener('copy',()=>{
        navigator.clipboard.readText()
        .then(text => {
            console.log(text);
        })
    })

    //Click event
    document.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })

    //dblclick event
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    //keydown event

    window.addEventListener('keydown', evt => {
        if(evt.key === 'e'){
            document.body.innerHTML = '<h1>EXECUTE ORDER 66</h1>'
        }
    })

    //mouse-move event

    document.body.addEventListener('mousemove', evt => {
        // const { clientX, clientY } = evt
        // console.log(`mouse is at ${clientX} and ${clientY}`)
    })

    //mouse-over event
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }
}


