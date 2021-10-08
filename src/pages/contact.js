import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Contact() {

  return (
    <Layout>
		<Seo 
			title="Contact"
			description="Learn more about me"
		/>
		<section class="hero is-fullheight">
				<div>
					<div class="container has-text-centered">
						<div class="columns is-8 is-variable ">
							<div class="column is-block has-text-left">
								<h1 class="title is-1">Contact Me</h1>
								<p class="is-size-4">Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.</p>
							</div>
							<div class="column is-block has-text-left">
								<div class="field">
									<label class="label">Name
										<div class="control">
											<input class="input is-medium" type="text" />
										</div>
									</label>
								</div>
								<div class="field">
									<label class="label">Email
										<div class="control">
											<input class="input is-medium" type="text" />
										</div>
									</label>
								</div>
								<div class="field">
									<label class="label">Message
										<div class="control">
											<textarea class="textarea is-medium"></textarea>
										</div>
									</label>
								</div>
								<div class="control">
									<button type="submit" class="button is-fullwidth has-text-weight-medium is-medium is-primary">Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	</Layout>
  )
}