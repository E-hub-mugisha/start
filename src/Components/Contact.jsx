import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, phone, subject, message } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                name,
                email,
                phone,
                subject,
                message
            };

            // Use emailjs to email contact form data
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );

            // Reset contact form fields after submission
            reset();
            // Display success toast
            toastifySuccess();
            // Re-enable form submission
            setDisabled(false);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div class="breadcumb-wrapper" data-bg-src="assets/img/breadcumb/breadcumb-bg.jpg">
                <div class="container">
                    <div class="breadcumb-content">
                        <h1 class="breadcumb-title">Contact Us</h1>
                        <ul class="breadcumb-menu">
                            <li><a href="/">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="space">
                <div class="container pt-6">
                    <h3 class="fs-40 mb-2 mt-n2 text-center">Drop Us a Line</h3>
                    <p class="mb-4 text-center">Uniquely productize backend systems for ethical "outside the</p>
                    <div class="row gy-40 align-items-end">
                        <div class="col-xl-5">
                            <div class="contact-info-wrap">
                                <h2 class="fs-40 border-title">Contact Info</h2>
                                <div class="contact-info">
                                    <h4 class="contact-info_title">Telephone Number:</h4>
                                    <div class="contact-info_icon"><i class="fal fa-phone"></i></div>
                                    <div class="media-body"><span class="contact-info_text"><a href="tel:+250781303538">+250 781 303 538</a></span></div>
                                </div>
                                <div class="contact-info">
                                    <h4 class="contact-info_title">Mail Address:</h4>
                                    <div class="contact-info_icon"><i class="fal fa-envelope"></i></div>
                                    <div class="media-body">
                                        <span class="contact-info_text">
                                            <a href="mailto:info@startozbusiness.com">info@startozbusiness.com</a>
                                        </span>
                                    </div>
                                </div>
                                <div class="contact-info">
                                    <h4 class="contact-info_title">Office Address:</h4>
                                    <div class="contact-info_icon"><i class="fal fa-location-dot"></i></div>
                                    <div class="media-body"><a href='https://goo.gl/maps/1n8qSVQ9p7hihmNv8' class="contact-info_text">KN 78 ST, Norrsken House, Kigali city,<br />Rwanda</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7">
                            <ToastContainer />
                            <form onSubmit={handleSubmit(onSubmit)} noValidate class="quote-form ajax-contact">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <input className="form-control" id="name" name="name" placeholder="Names*" type="text"
                                            {...register('name', {
                                                required: { value: true, message: 'Please enter your name' },
                                                maxLength: { value: 30, message: 'Please use 30 characters or less' }
                                            })} /><i class="fal fa-user"></i>
                                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        <span className="alert-error"></span>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email"
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })} /><i class="fal fa-envelope"></i>
                                        {errors.email && (
                                            <span className='errorMessage'>Please enter a valid email address</span>
                                        )}
                                        <span className="alert-error"></span>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input className="form-control" id="phone" name="phone" placeholder="Phone*" type="text"
                                            {...register('phone', { required: true })} /><i class="fal fa-phone"></i>
                                        {errors.phone && <span className='errorMessage'>Please enter a message</span>}
                                        <span className="alert-error"></span>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <select name="subject" id="subject" class="form-select" {...register('subject', {
                                            required: { value: true, message: 'Please select a subject' },
                                            maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' }
                                        })} >
                                            <option value="" disabled="disabled" selected="selected" hidden>Select Service
                                            </option>
                                            <option value="Web Development">Web Design</option>
                                            <option value="Brand Marketing">Brand and Advertisement</option>
                                            <option value="Digital Marketing">Product design</option>
                                            <option value="trading">General Trading</option>
                                        </select> <i class="fal fa-chevron-down"></i>
                                        {errors.subject && (
                                            <span className='errorMessage'>{errors.subject.message}</span>
                                        )}
                                        <span className="alert-error"></span>
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" id="message" cols="30" rows="3"
                                            class="form-control" placeholder="Your Message" {...register('message', {
                                                required: true
                                            })}></textarea> <i
                                                class="fal fa-comment"></i>
                                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                                    </div>
                                    <div class="form-btn col-12">
                                        <button disabled={disabled} type="submit" id="submit" name="submit" class="as-btn">Send Message</button>
                                    </div>
                                </div>
                                <p class="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                        <div class="col-xl-12 justify-items-center">
                            <div class="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.505720650142!2d30.05839459978884!3d-1.9508877492325434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e0!3m2!1sen!2srw!4v1679234955342!5m2!1sen!2srw" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact