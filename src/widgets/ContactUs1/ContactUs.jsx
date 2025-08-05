import React from 'react'

const ContactUs = () => {
    return (
        <div className='rounded-xl bg-[#f0eee8] w-[90%] flex m-auto'>

            <div className='w-[50%] rounded-xl bg-[#f0eee8]'>

                <svg width="1058" height="375" className="h-wave h-wave--outer-bottom rounded-xl" viewBox="0 0 1058 52" fill="none" aria-hidden="true" >
                    <path d="M87 52.01H0V-329.99C0.418369 -330.678 0.754026 -331.413 1 -332.18C5.42 -354.26 19.64 -368.48 41.81 -373C42.5753 -373.25 43.3099 -373.585 44 -374H1015C1017.52 -373.29 1020 -372.54 1022.56 -371.86C1043.67 -366.21 1058.08 -344.52 1057.98 -326.41C1057.39 -215.11 1057.62 -103.8 1057.58 7.51001V13.11C1049.01 13.11 1041.07 13.24 1033.13 13.11C984.47 12.24 935.86 12.4 887.4 17.75C852.63 21.58 817.99 26.26 784.31 35.9C744.37 47.33 704.37 49.7 664.12 38.58C601.44 21.25 537.39 14.35 472.63 12.96C410.28 11.62 348.04 13.96 286.15 21.88C253.67 26.01 221.28 31.14 189 36.81C160.33 41.81 131.88 48.08 102.76 50.21C97.5 50.59 92.26 51.4 87 52.01Z" fill="#c86e3b"></path>
                    <defs>
                        {/* <clipPath id="clip0_412_229">
                            <rect width="1058" height="52" fill="white"></rect>
                        </clipPath> */}
                    </defs>

                </svg>

                <div className=' w-[90%] m-auto'>
                    <h2 className='text-5xl text text-black'>EVERY SUCCESS AFTER SACRIFICE</h2>
                </div>
            </div>

            <div className='w-[50%] bg-[#f0eee8] rounded-4xl  h-screen'>
                <div className=' w-[90%] m-auto mt-2'>
                    <h2 className='text-5xl text-black mt-9 '>how can i help you?</h2>
                </div>

                <div className="w-[90%] m-auto mt-4 rounded-xl p-2 bg-[#fe00086]">
                    <form className="space-y-7">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>

                        <select
                            name="consultationType"
                            id="consultationType"
                            className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            required
                        >
                            <option value="" disabled selected hidden>
                                    Select Consultation Type
                            </option>
                            <option value="buying">Buying</option>
                            <option value="selling">Selling</option>
                            <option value="rental">Rental</option>
                            <option value="valuation">Property Valuation</option>
                        </select>

                        <div>
                            <textarea
                                placeholder="Message"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                                rows="4"
                            ></textarea>
                        </div>
                    </form>
                </div>

            </div >


        </div >
    )
}

export default ContactUs