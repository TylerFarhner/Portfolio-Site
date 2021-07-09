// // import CarouselComponent from '../components/Carousel/Carousel'

// export default function DashboardPage(props) {
//     return (
//         <div className="DashboardPage">
//             <main className="Page">
//                 <h1 className="tylerFarhner">Tyler Farhner</h1>
//                 <div className="externalLinks">
//                 <a className="BoxLink" href="https://www.linkedin.com/in/tyfarhner/" target="_blank" rel="noreferrer">LinkedIn</a>
//                 <a className="BoxLink" href="https://github.com/TylerFarhner" target="_blank" rel="noreferrer">GitHub</a>
//                 <a className="BoxLink" href="https://drive.google.com/file/d/1YyTn1zfCO8nJpKVF0v9YN6Oc7YmOFk1f/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
//                 </div>
//                 {/* <CarouselComponent /> */}
//             </main>
//         </div>
//     )
// }


// import CarouselComponent from '../components/Carousel/Carousel'

//  -------- V1 CODE ^^^^  -----------


// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ---------- REVAMP Jun 22 2021 to include;
// -------------------- Cameras
// -------------------- Coding
// -------------------- Clothing

// import {  Link } from 'react-router-dom'

export default function DashboardPage(props) {
    return (
        <div className="DashboardPage">
            <main className="Page">
                <h1 className="tylerFarhner">Tyler Farhner</h1>
                <div className="externalLinks">
                {/* <Link className="BoxLink" link to="Coding" rel="noreferrer">Coding</Link> */}
                <a className="BoxLink" href="https://github.com/TylerFarhner" rel="noreferrer">Coding</a>
                {/* <Link className="BoxLink" link to="Clothing" rel="noreferrer">Clothing</Link> */}
                <a className="BoxLink" href="https://www.instagram.com/otbprd/" rel="noreferrer">Clothing</a>
                <a className="BoxLink" href="https://www.raincityshooters.com" rel="noreferrer">Cameras</a>
                </div>
                {/* <CarouselComponent /> */}
            </main>
        </div>
    )
}
