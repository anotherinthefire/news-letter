import signup from '../assets/illustration-sign-up-desktop.svg'
import check from '../assets/icon-list.svg'


export const Newsletter = () => {
  return (
    <div className="h-fit w-full bg-dslate text-black font-sans absolute">
        <div className="bg-white h-5/6 w-3/5 mx-auto my-blt flex items-center rounded-4xl p-5">
            <div className="w-4/5 h-fullfont-medium mx-auto pl-4">
                <h1 className="font-bold text-5xl 
                pb-5">Stay Updated!</h1>
                <p className='w-11/12'>Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="py-5 w-11/12">
                    <p className='flex pb-2'><img src={check} />&nbsp; &nbsp;Discovery and building what matters</p>
                    <p className='flex pb-2'><img src={check} />&nbsp; &nbsp;Measuring to ensure updates are a success</p>
                    <p className='flex pb-2'><img src={check} />&nbsp; &nbsp;And much more!</p>
                </div>
                
                <div className='my-5 w-11/12'>
                    <label className='font-bold'>Email address</label><br />
                    <input type="text" placeholder='email@company.com' className='bg-transparent font-thin border-black border rounded-md px-3 py-2 w-full'/>
                </div>
                <button className='text-white w-11/12 text-center px-3 py-2 bg-tomato rounded-md'>Subscribe to monthly newsletter</button>
            </div>
            <div className="bg-tomato h-full">
                <img src={signup} className='h-full'/>
            </div>
        </div>
    </div>
  )
}
