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
}

const StepOne: React.FC<StepOneProps> = ({
	formData,
	handleInputChange,
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<>
			<section>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 bg-purple-50 px-5 py-3'>
							<div className='m-0 p-[40px]'>
								<h1>Bizpend</h1>
							</div>

							<div className='sidebar-container h-full'>
								<div className='active'>
									<div className='sidebar-check-img'>
										<img src={ActiveCheck} />
									</div>
									<div className='sidebar-text'>
										<h5 className='active-text'>Join us today</h5>
										<p>Enter your organization email and password</p>
									</div>
								</div>

								<div>
									<div className='sidebar-check-img'>
										<img src={InactiveCheck} />
									</div>
									<div className='sidebar-text'>
										<h5>Verify your email</h5>
										<p>Enter OTP sent to your email address</p>
									</div>
								</div>
							</div>

							<img src={SidebarImage} />
						</div>

						<div className='col-lg-9 sidebar-main'>
							<div className='float-right'>
								<p className='bg-[#EFEFF9] px-2 py-1 text-md rounded-xl'>
									1/2 steps
								</p>
							</div>

							<div className='mt-2'>
								<div className=''>
									<p className='text-[2.5rem] text-[#31254B] font-bold -mb-1'>
										Join us today
									</p>
									<p className='text-lg'>
										Begin your journey to easy financial management
									</p>
								</div>

								<div className='container form-container'>
									<div className='row'>
										<div className='col-lg-6'>
											<label>first name*</label>
											<input
												type='text'
												name='firstName'
												value={formData.firstName}
												onChange={handleInputChange}
												placeholder='John'
												required
											/>
											
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

										<div className='w-full md:mb-8 md:mb-0'>
											<label className='capitalized text-stone-900 text-lg font-base py-1 px-0'>
												Organization name{" "}
											</label>
											<input
												type='text'
												name='orgName'
												value={formData.orgName}
												onChange={handleInputChange}
												placeholder='Enter the name of your organization'
												required
												className='appearance-none block w-full w-72 bg-white-200 text-gray-700 text-lg border border-red-500
												 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
											/>
										</div>

										<div className='w-full md:w-1/2 my-3 md:mb-0'>
											<label className='capitalize text-stone-900 text-md font-base py-1 px-0'>
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

										<div className='w-full md:w-1/2 md:my-3 md:mb-0'>
											<label className='capitalize text-stone-900 md:text-md font-base py-1 px-0'>
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

										<div className='w-full px-3 my-3 md:mb-0'>
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
											/>
										</div>

										<div className='col-lg-12 sidebar-main-footer'>
											<div className='col-lg-6 login-option'>
												<p>
													Already have an account?<span>log in</span>
												</p>
											</div>
											<div className='col-lg-6 button-next'>
												<button>create account</button>
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
