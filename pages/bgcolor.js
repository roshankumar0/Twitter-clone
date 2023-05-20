// import React from 'react'

// const Bgcolor = () => {
//     const Bgcolors = (e) => {
//         const body = document.querySelector('body')
//         body.style.background = getRandomColor()
//         e.target.style.background = getRandomColor()
//     }
//     function getRandomColor() {
//         let letter = `0987654321ABCDEF`
//         let color = `#`
//         for (let i = 0; i < 6; i++) {
//             color += letter[Math.floor(Math.random() * 16)]
//         }
//         return color
//     }
//     return (
//         <div>
//             <button className='bg-red-900' onClick={Bgcolors}> Bgcolor</button>
//         </div>
//     )
// }

// export default Bgcolor


import React from 'react'

const Bgcolor = () => {
    const color = (e) => {
        const body = document.querySelector('body')
        body.style.background = getColor()
        e.target.style.background = getColor()
    }
    function getColor() {
        let letter = `0987654321ABCDEF`
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)]
        }
        return color
    }
    return (
        <div>
            <button onClick={color}>get random color</button>
        </div>
    )
}

export default Bgcolor
