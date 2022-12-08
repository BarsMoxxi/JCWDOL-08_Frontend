export default function Login(){
    return(
        <div  className="flex flex-col items-center py-20">
        <h1 className="my-fs-15 my-grey mt-5 font-bold">
            PURWADHIKA® REWARDS
        </h1>
        <p className="my-grey mt-3" style={{maxWidth: '600px', textAlign: 'center'}}>
            Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
        </p>
        <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md">
            <h1 className='mt-5 mb-3 font-bold'>
                Login Account
            </h1>
            <div>
                <input type='text' placeholder='Input you email' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid grey', width: '100%'}} />
            </div>
            <div>
                <input type='text' placeholder='Input you password' className='py-2 px-2 w-100 rounded-md mt-3' style={{border: '1px solid grey', width: '100%'}} />
            </div>
     
            <button className='bg-white text-black border border-black px-3 py-3 mt-3 rounded-full self-end'>
                Login
            </button>
        </div>
    </div>
    )
}