<template>
	<div class="w-100">
		<heading :title="'CONTACT'" />
		<div id="contact" class="container-fluid content">
			<div class="row align-items-center h-100 m-auto contact-cont">
				<div class="col-8 m-auto">
					<div class="content-1">
						<form id="contact-me-form" class="frm modern container-fluid" name="contact-me-form" onsubmit="validateForm()">
							<div class="row">
								<div class="col-md">
									<div class="form-group">
										<label for="message">*Name</label>
										<input 
										id="input-name" 
										v-model="name" 
										type="text" 
										class="form-control" 
										placeholder="Your Name" 
										required
										>
										<div class="invalid-feedback">
											Please enter a name
										</div>
									</div>
								</div>
								<div class="col-md">
									<div class="form-group">
										<label for="inputEmail">*Email address</label>
										<input 
										id="input-email" 
										v-model="email" 
										type="email" 
										class="form-control " 
										aria-describedby="emailHelp" 
										placeholder="Your email" 
										required
										>
										<div class="invalid-feedback">
											Please Enter an Email
										</div>
									</div>
								</div>
							</div>
							
							<div class="form-group row">
								<div class="col-12">
									<label for="message">*Message</label>
									<textarea id="input-message" v-model="message" class="form-control" rows="3" required />
									<div class="invalid-feedback">
										Please enter a message
									</div>
								</div>
							</div>
						</form>
						<div class="text-center">
							<button class="btn modern" @click="validateForm">
								Submit
							</button>
							<div v-if="error" class="error-sending">
								There was an issue sending your email. Try again in a few minutes
							</div>
						</div>
					</div>
				</div>
				
				<socials />
			</div>
		</div>
		<notification v-if="sent" :msg="noti_msg" @closed="sent=false" />
	</div>
</template>
<script>

import pageNav from '@/assets/scripts/pageNav'

import Heading from '@/components/Heading.vue'
import Socials from '@/components/Socials.vue'
import Notification from '@/components/Notification.vue'

export default {
	name: 'Contact',
	components: {Heading, Socials, Notification},
	data(){
		return {
			email: '',
			name: '',
			message: '',
			sent: false,
			noti_msg: 'I\'ll be in touch.',
			error: false,
		}
	},
	
	methods: {
		validateForm() {
			const data = {
				email: this.email,
				name: this.name,
				message: this.message
			}
			
			let isvalid = true;
			this.error = false
			if (data.email === "") {
				this.$el.querySelector('#input-email').classList.add('is-invalid');
				isvalid = false;
			}
			if (data.name === "") {
				this.$el.querySelector('#input-name').classList.add('is-invalid');
				isvalid = false;
			}
			if (data.message === "") {
				this.$el.querySelector('#input-message').classList.add('is-invalid');
				isvalid = false;
			}
			
			if (isvalid) {
				this.$axios.post('/send/email', data)
				.then(res => {
					console.log(res)
					this.sent = true
					this.email = ''
					this.name = ''
					this.message = ''
				})
				.catch(err => {
					console.log(err)
					this.error = true
				})
			}
		}
	},
	mounted(){
		pageNav.cont1Anim();
		pageNav.titlesAnim();
	}
}
</script>

<style lang="scss">
.contact-cont{
	width: 75%;
	@media screen and (max-width: 600px){
		width: 100%;
	}
	.error-sending{
		width: 100%;
		margin-top: .25rem;
		font-size: 80%;
		color: #dc3545;
		margin-top: 1em;
		margin-bottom: 2em;
	}
}
</style>
