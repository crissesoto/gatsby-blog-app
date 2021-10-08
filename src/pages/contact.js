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
		<section className="hero is-fullheight">
				<div>
					<div className="container has-text-centered">
						<div className="columns is-8 is-variable ">
							<div className="column is-block has-text-left">
								<h1 className="title is-1">Contact Me</h1>
								<p className="is-size-4">Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.</p>
							</div>
							<div className="column is-block has-text-left">
								<div className="field">
									<label className="label">Name
										<div className="control">
											<input className="input is-medium" type="text" />
										</div>
									</label>
								</div>
								<div className="field">
									<label className="label">Email
										<div className="control">
											<input className="input is-medium" type="text" />
										</div>
									</label>
								</div>
								<div className="field">
									<label className="label">Message
										<div className="control">
											<textarea className="textarea is-medium"></textarea>
										</div>
									</label>
								</div>
								<div className="control">
									<button type="submit" className="button is-fullwidth has-text-weight-medium is-medium is-primary">Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	</Layout>
  )
}