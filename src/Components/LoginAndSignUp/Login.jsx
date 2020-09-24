		import React from 'react';
	
		import './LoginAndSignUp.css';
		import FacebookLogin from 'react-facebook-login'
		import GoogleLogin from 'react-google-login'

	

		class Login extends React.Component {
		state={
			isLoggedIn:false,
			userID:'',
			name:'',
			email:'',
			picture: ''

		}
		responseFacebook=response=>{
			console.log('respone');
			this.setState({
				isLoggedIn:true,
				userID:response.userID,
				name:response.email,
				picture:response.picture.data.url
			});
		}
		responseGoogle=(response)=>{
			console.log(response);
			console.log(response.profileObj);
		}
		componentClicked=()=>{
			console.log('click');
		}
		render() {
			let fbContent;
			let GContent;
			if(this.state.isLoggedIn)
			{
				fbContent=(
					<div style={{
						width: '400px',
					margin : 'auto',
						background : '#f4f4f4',
						padding : '20px'
					}}>
						<img src={this.state.picture} alt={this.state.name}  />
					<h4>WELCOME {this.state.name}</h4>
					Email: {this.state.email}
				</div>
				)
			}else{
				fbContent=(
					<FacebookLogin 
					appId="3324548274249406"
					autoLoad={true}
					buttonText="Login"
					fields="name,email,picture"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
					/>
				)
				GContent=(
					<GoogleLogin
					clientId="281002145030-a9abqp8vriqpuukgvuespq1nv3blk0fm.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
					cookiePolicy={'single_host_origin'}
					/>
				)
			}
			return (
			<div>
			<div class="wrapper">
			<div class="header">
				<div class="top">
					<div class="logo">
						<img src="instagram.png" alt="instagram" style={{ width: 175 }} />
					<h2>	<center>Create Your Account</center></h2>
					</div>
					<div class="fb">
							{/* <img src="facebook.png" alt="facebook"/>
							<p>Log in with Facebook</p> */}
							{GContent }
							{fbContent}
						</div>

						<div class="or">
						<div class="line"></div>
						<p>OR</p>
						<div class="line"></div>
					</div>
					<div class="form">
						<div class="input_field">
							<input type="text" placeholder="First Name" class="input"/>
						</div>
						<div class="input_field">
							<input type="text" placeholder="Last Name" class="input"/>
						</div>
						<div class="input_field">
							<input type="text" placeholder="Email Address" class="input"/>
						</div>
						<div class="input_field">
							<input type="password" placeholder="Password" class="input"/>
						</div>
						
							<h5 className="line">By Clicking SignUp,you agree to our Terms of Use and our Privacy Policy</h5>
						
						<div class="btn"><a href="/">Sign Up</a></div>
					</div>
					
					
				</div>
			
			</div>
			
		</div>

			</div>
			);
		}
		}

		export default Login;
