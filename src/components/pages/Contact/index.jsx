import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";

const Contact = () => {
  return (
    <section className="container py-10 lg:py-16">
        <div className="flex flex-wrap items-center gap-y-6 -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div className="p-8 text-[0.875rem] 2xl:text-[1rem] leading-loose text-lx-gray-900 bg-lx-gray-400 rounded-xl">   
                <small className="block font-bold text-[0.875rem] text-primary uppercase">CONTACT US</small>
                <h2>Say Hello!</h2>
                <p>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                <ul className="lg:space-y-4 [&_strong]:block [&_strong]:text-[0.875rem] [&_a:not(:hover)]:text-lx-gray-800">
                  <li><strong>Address</strong> <a href="https://maps.app.goo.gl/EPVY7rUQg7mdixVx9" target="_blank">Sunny Isles Beach, FL 33160, United States
                  </a></li>
                  <li><strong>Phone</strong> <a href="tel:1234567890">+123 456 7890</a></li>
                  <li><strong>Email</strong> <a href="mailto:lugx@contact.com">lugx@contact.com</a></li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
                <div className="mb-5 [&_iframe]:w-full [&_iframe]:h-[325px] [&_iframe]:rounded-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43722.34405005721!2d-80.118781!3d25.952478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1721984553342!5m2!1sen!2sth" width="600" height="325" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* Start Contact Form */}
                <form >
                    <div className="form-body grid grid-cols-1 sm:grid-cols-2 gap-4 [&_label]:sr-only">
                      <div>
                        <label htmlFor="name">Name</label>
                        <Input id="name" name="name" type="text" placeholder="Your Name..." required/>
                      </div>
                      <div>
                        <label htmlFor="surname">Surname</label>
                        <Input id="surname" name="surname" type="text" placeholder="Your Surname..." required/>
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <Input type="email" placeholder="Your E-mail..." required/>
                      </div>
                      <div>
                        <label htmlFor="subject">Subject</label>
                        <Input id="subject" name="subject" type="text" placeholder="Subject.."/>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message">Message</label>
                        <TextArea id="message" name="message" placeholder="Your Message..."/>
                      </div>
                    </div>
                    
                    <div className="form-footer pt-5">
                      <Button variant="primary" type="submit">SEND MESSAGE NOW</Button>
                    </div>
                </form>
                {/* End Contact Form */}
            </div>
        </div>
    </section>
  )
}

export default Contact;