import Button from "./Button";


function Hero(){
    return(
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 text-2xl" >
            <p>IT'S TIME TO GET</p>
            <div className="flex flex-col gap-4" >
            <h1 className="uppercase font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl " >Quick<span className="text-blue-600" >Fit</span> </h1>
            </div>
            {/* md:text-base */}
            <p className='  font-light text-xl'>I hereby acknowledgement that I may become <span className='text-blue-500 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-500 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func = {() =>{
                window.location.href = '#generate'
            }} text = {'Accept and begin'} />
        </div>
    )
}

export default Hero;