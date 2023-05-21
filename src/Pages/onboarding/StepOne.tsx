import { useState } from "react"

import "../../styles/form.scss"
import ActiveCheck from "../../images/onboarding/active-check.png"
import InactiveCheck from "../../images/onboarding/inactive-check.png"
import SidebarImage from "../../images/onboarding/sidebar-sign-up-image.png"

interface StepOneProps {
	formData: {
		firstName: string
		lastName: string
		orgName: string
		orgType: string
		workEmail: string
		password: string
	}
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	firstNameError: string
}

const StepOne: React.FC<StepOneProps> = ({
	formData,
	handleInputChange,
	firstNameError,
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<>
			<section>
				<div className=''>
					<div className='md:flex'>
						<div className='lg:w-1/4 w-full m-0 bg-purple-50 py-1'>
							<div className='m-0 border-b-2 border-purple-300 m-0'>
								<h1 className='text-purple-800 text-3xl py-10 px-6 tracking-wide'>
									Bizpend
								</h1>
							</div>

							<div className='sidebar-container h-full px-6 mt-4'>
								<div className='active '>
									<div className='sidebar-check-img py-2'>
										<img src={ActiveCheck} />
									</div>
									<div className='sidebar-text'>
										<h5 className='active-text'>Join us today</h5>
										<p>Enter your organization email and password</p>
									</div>
								</div>

								<div>
									<div className='sidebar-check-img py-2'>
										<img src={InactiveCheck} />
									</div>
									<div className='sidebar-text'>
										<h5>Verify your email</h5>
										<p>Enter OTP sent to your email address</p>
									</div>
								</div>
							</div>

							<img
								src={SidebarImage}
								className='aspect-square object-contain lg:absolute lg:inset-y-[28rem] w-[15rem]'
							/>
						</div>

						<div className='lg:w-3/4 w-full p-5'>
							<div className='float-right'>
								<p className='bg-[#EFEFF9] px-2 py-1 text-md rounded-xl'>
									1/2 steps
								</p>
							</div>

							<div className='lg:mt-12'>
								<div className=''>
									<p className='md:text-[2.8rem] text-3xl text-[#31254B] font-bold mt-4'>
										Join us today
									</p>
									<p className='text-md md:text-lg'>
										Begin your journey to easy financial management
									</p>
								</div>

								<div className='w-full max-w-3xl'>
									<div className='flex flex-wrap mb-6'>
										<div className='w-full md:w-1/2 mb-8 md:mb-0'>
											<label className='capitalized text-stone-900 text-lg py-1 px-0'>
												First name*
											</label>
											<input
												className='appearance-none block md:w-[89%] w-full bg-white-100/70 text-gray-700 outline outline-1 outline-offset-0.5 outline-gray-300
												 rounded-md py-3.5 px-3 mb-3 leading-tight focus:outline-black focus:bg-white'
												type='text'
												name='firstName'
												value={formData.firstName}
												onChange={handleInputChange}
												placeholder='John'
												required
											/>
											{firstNameError && <p className='error'>hey there</p>}
										</div>

										<div className='w-full md:w-1/2 mb-6 md:mb-0'>
											<label className='capitalised text-stone-900 text-lg font-base py-1 px-0'>
												Last name*
											</label>
											<input
												type='text'
												name='lastName'
												value={formData.lastName}
												onChange={handleInputChange}
												placeholder='Doe'
												required
												className='appearance-none block w-full w-72 bg-white-100/70 text-gray-700 outline outline-1 outline-offset-0.5 outline-gray-300
												 rounded-md py-3.5 px-3 mb-3 leading-tight focus:outline-black focus:bg-white'
											/>
										</div>

										<div className='w-full md:mb-8 mb-4'>
											<label className='capitalized text-stone-900 text-md font-base py-1 px-0'>
												Organization name*
											</label>
											<input
												type='text'
												name='orgName'
												value={formData.orgName}
												onChange={handleInputChange}
												placeholder='Tesla'
												required
												className='appearance-none block w-full w-72 bg-white-200 text-gray-700 md:text-lg border border-red-500
												 rounded py-3 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
											/>
										</div>

										<div className='w-full md:w-1/2 md:my-2 md:mb-0'>
											<label className='capitalize text-stone-900 text-md pl-2 font-base py-1 px-0'>
												organization type*
											</label>
											<input
												type='text'
												name='orgType'
												value={formData.orgType}
												onChange={handleInputChange}
												placeholder='John'
												required
												className='appearance-none block w-full bg-white-100 text-gray-500 border border-red-500
												 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
											/>
										</div>

										<div className='w-full md:w-1/2 md:my-2 px-2 md:mb-0'>
											<label className='capitalize text-stone-900 md:text-md font-base py-1 px-3'>
												work email*
											</label>
											<input
												type='text'
												name='workEmail'
												value={formData.workEmail}
												onChange={handleInputChange}
												placeholder='Enter your email address'
												required
												className='appearance-none block w-full bg-white-100 text-gray-500 border border-red-500
												 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
											/>
										</div>

										<div className='w-full my-3 md:mb-0'>
											<label className='capitalize text-stone-900 md:text-md font-base py-1 px-0'>
												password*
											</label>
											<input
												className='appearance-none block w-full bg-white-100 text-gray-500 border border-red-500
												 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
												type={showPassword ? "text" : "password"}
												name='password'
												value={formData.password}
												placeholder='Enter Password'
											/>
											<input
												onClick={toggleShowPassword}
												type='button'
												id='showText'
												value={showPassword ? "Hide" : "Show"}
												className='float-right'
											/>
										</div>

										<div className='flex w-full space-x-4 mt-[2%]'>
											<div className='w-4/5 login-option'>
												<p>
													Already have an account?{" "}
													<span className='text-blue-500 font-bold'>
														Log in
													</span>
												</p>
											</div>
											<div className='float-right'>
												<button className='bg-[#4539ff] rounded-md text-white border-none w-32 py-3 -mt-3'>
													Create account
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default StepOne
