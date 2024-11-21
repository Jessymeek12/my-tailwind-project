import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
            VitualR build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800
             text-transparent bg-clip-text">
                {" "}
                for developers</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Build VR applications that run seamlessly across multiple platforms, including mobileBuild VR applications that run seamlessly across multiple platforms, including mobile
        </p>
        <div className="flex justify-center items-center my-10">
             <a href="#" className="bg-gradient-to-r from-orange-500 to-red-800
              text-transparent bg-clip-text">
                Start for free
             </a>
             <a href="#" className="py-3 px-2 mx-3 border rounded-md">
                Documentation
             </a>
             
        </div>
        <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700
                 shadow-orange-400 mx-2 my-4" src={video1} type="video/mp4">
                    Your brower dose not support this video tag.
                 </video>

                 <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700
                 shadow-orange-400 mx-2 my-4" src={video2} type="video/mp4">
                    Your brower dose not support this video tag.
                 </video>
             </div>
    </div>
  )
}

export default Hero