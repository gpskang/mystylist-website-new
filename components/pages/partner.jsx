"use client";
import React, { useEffect, useState } from 'react';
import FadeUpContainer from '../animation/FadeUpContainer';
const PartnerPage = () => {
    const [demoForm, setDemoForm] = useState({ name: '', phone: '', email: '', gender: '', businessName: '', city: '' });
    const [demoLoading, setDemoLoading] = useState(false);
    const [demoSuccess, setDemoSuccess] = useState(false);
    const [demoError, setDemoError] = useState('');

    const [enqForm, setEnqForm] = useState({ name: '', phone: '', email: '', gender: '', businessName: '', city: '' });
    const [enqLoading, setEnqLoading] = useState(false);
    const [enqSuccess, setEnqSuccess] = useState(false);
    const [enqError, setEnqError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            const t = setTimeout(() => {
                const el = document.getElementById('enqName');
                if (el) el.focus();
            }, 200);
            return () => clearTimeout(t);
        }
    }, [isModalOpen]);

    useEffect(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.transition = 'opacity 300ms ease';
            loader.style.opacity = '0';
            const t = setTimeout(() => { loader.style.display = 'none'; }, 320);
            return () => clearTimeout(t);
        }
    }, []);

    async function submitPartner(payload, setLoading, setSuccess, setError) {
        setError('');
        setSuccess(false);
        setLoading(true);
        try {
            const res = await fetch('https://api.mystylist.in/v1/website/partner-campaign?source=partner-landing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json().catch(() => ({}));
            if (res.status === 201 && data && data.success) {
                setSuccess(true);
                try { window.sessionStorage.setItem('partnerFormJustSubmitted', '1'); } catch (_) { }
                setTimeout(() => { try { window.location.href = '/thank-you.html'; } catch (_) { } }, 300);
            } else {
                setError((data && data.message) ? data.message : 'Unable to submit. Please try again.');
            }
        } catch (e) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    function validateBasic(form) {
        if (!form.name.trim()) return 'Please enter your name.';
        if (!form.phone.trim()) return 'Please enter your phone number.';
        if (!form.gender) return 'Please select your gender.';
        return '';
    }

    function handleDemoSubmit(e) {
        e.preventDefault();
        setDemoSuccess(false);
        const err = validateBasic(demoForm);
        if (err) { setDemoError(err); return; }
        setDemoError('');
        submitPartner({
            name: demoForm.name.trim(),
            phone: demoForm.phone.trim(),
            email: demoForm.email.trim(),
            gender: demoForm.gender,
            businessName: demoForm.businessName.trim(),
            city: demoForm.city.trim(),
        }, setDemoLoading, setDemoSuccess, setDemoError);
    }

    function handleEnqSubmit(e) {
        e.preventDefault();
        setEnqSuccess(false);
        const err = validateBasic(enqForm);
        if (err) { setEnqError(err); return; }
        setEnqError('');
        submitPartner({
            name: enqForm.name.trim(),
            phone: enqForm.phone.trim(),
            email: enqForm.email.trim(),
            gender: enqForm.gender,
            businessName: enqForm.businessName.trim(),
            city: enqForm.city.trim(),
        }, setEnqLoading, setEnqSuccess, setEnqError);
    }

    return (
        <div>
            <div className="main">
                <div className="loader"></div>
              
                    {/* Hero */}
                    <section className="hero-wrap section-sm pb-0">
                        <div className="hero-bg"></div>
                        <div className="container">
                            <div className="hero-card text-center  animate-fade-in-up">
                                <div className="d-flex justify-content-center ">
                                    <div className="logo-badge">
                                        <img src="/img/mystylist_color_logo.png" alt="MyStylist Logo" />
                                    </div>
                                </div>
                                <span className="badge-soft mt-2  ">Partner with MyStylist</span>
                                <p className="text-muted mx-auto mt-4 text-justify-last-center" style={{ maxWidth: '760px', fontSize: 'clamp(14px, 1.8vw, 15px)', lineHeight: 1.6 }}>
                                    The MyStylist App is a platform to discover top stylists. Join the MyStylist Partner App to get onboarded and start accepting direct bookings for salon or home visits. It's a Personnel App for every Stylist. Enjoy the app free for the first three months, with the flexibility to log out anytime.
                                </p>
                            </div>
                        </div>
                    </section>
                    <FadeUpContainer>
                    {/* Contact / Demo Request */}
                    <section id="contact" className="section pb-5 pt-0">
                        <div className="container">
                            <div className="row justify-content-center mt-2 g-4">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="feature-card border h-100">
                                        <div className="justify-content-center text-center">
                                            <p className="text-muted font-medium !text-black text-xl ">Leave your details and we'll get in touch with you.</p>
                                        </div>
                                        <form className="row g-3" onSubmit={handleDemoSubmit}>
                                            <div className="col-sm-6">
                                                <input id="contactName" type="text" className="form-control" placeholder="Full Name" required value={demoForm.name} onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="tel" className="form-control" placeholder="Your Phone" required value={demoForm.phone} onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" className="form-control" placeholder="Your Email (optional)" value={demoForm.email} onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="form-select" required value={demoForm.gender} onChange={(e) => setDemoForm({ ...demoForm, gender: e.target.value })}>
                                                    <option value="" disabled>Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="text" className="form-control" placeholder="Salon / Studio" value={demoForm.businessName} onChange={(e) => setDemoForm({ ...demoForm, businessName: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Your City" value={demoForm.city} onChange={(e) => setDemoForm({ ...demoForm, city: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-brand w-100" disabled={demoLoading}>
                                                    <span style={{ opacity: demoLoading ? .7 : 1 }}>Submit</span>
                                                    <svg className="ms-2" width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: demoLoading ? 'inline' : 'none' }}>
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                        {demoSuccess && (
                                            <div className="alert alert-success mt-3" role="alert">Thanks! Our team will contact you shortly.</div>
                                        )}
                                        {!!demoError && (
                                            <div className="alert alert-danger mt-3" role="alert">{demoError}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section !mt-[-20px]">
                        <div className="container">
                            <div className="row justify-content-center mb-4">
                                <div className="col-lg-8 text-center">
                                    <h2 className="fw-bold" style={{ fontSize: "clamp(24px, 3.6vw, 36px)" }}>
                                        Key features of the MyStylist App for the Customers
                                    </h2>
                                    {/* <p className="text-muted">Powerful tools designed for salons, spas and independent stylists.</p> */}
                                </div>
                            </div>

                            <div className="row g-3 g-md-4">
                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-1.svg" width={28} height={28} alt="Bookings" />
                                            <h5 className="m-0">Discover Top Stylists</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Customers can easily choose a stylist based on their specific needs and preferences
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-2.svg" width={28} height={28} alt="Payments" />
                                            <h5 className="m-0">Online Stylist Booking</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Customers can effortlessly book a stylist anytime, 24/7, without needing to make a phone call.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-3.svg" width={28} height={28} alt="Portfolio" />
                                            <h5 className="m-0">Salon and Home Bookings</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            With the MyStylist App, customers can conveniently book either salon or home appointments based on their needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-4.svg" width={28} height={28} alt="Scheduling" />
                                            <h5 className="m-0">Stylist Portfolios and Reviews</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Customers can explore detailed stylist portfolios and read reviews to confidently choose the perfect stylist before booking an appointment.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-5.svg" width={28} height={28} alt="Insights" />
                                            <h5 className="m-0">Appointments Based on Stylist Availability</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Bookings are seamlessly scheduled according to the stylist's availability, ensuring no time conflicts with other customers.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-lg-4">
                                    <div className="feature-card">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <img src="/img/icon-1.svg" width={28} height={28} alt="Support" />
                                            <h5 className="m-0">Customer Support</h5>
                                        </div>
                                        <p className="text-muted mb-0">
                                            The MyStylist App offers dedicated support to both customers and stylists, ensuring a seamless experience and maximum satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section style={{ marginTop: 0 }} className="section pt-3 ">
                        <div className="container">
                            <div className="cta-wrap p-2 pb-4 text-center">
                                <div className="mt-4 d-flex flex-column align-items-center gap-1" style={{ opacity: .95 }}>
                                    <div className="mb-2" style={{ color: '#000000', fontSize: 15 }}>
                                        RoSe Technologies (MyStylist App),<br /> SpaceJam Co Working,<br /> Plot No 1273, 3rd Floor, Sector 82, Mohali 160055
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-phone me-2"></i>
                                        <a className="text-decoration-none" style={{ color: '#fff' }} href="tel:7070656562">Call - 7070656562</a>
                                    </div>
                                    <div>
                                        <i className="fa-solid fa-envelope me-2"></i>
                                        <a className="text-decoration-none" style={{ color: '#fff' }} href="mailto:info@mystylist.in">info@mystylist.in</a>
                                    </div>
                                    <div className="mt-2">
                                        <a className="text-decoration-none" style={{ color: '#fff', fontSize: 14 }} href="/privacyPolicy.html">Privacy Policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Sticky action bar */}
                    <div className="sticky-action-bar d-block">
                        <div className="container px-0">
                            <div className="row g-0 align-items-stretch text-center">
                                <div className="col-4">
                                    <a href="tel:7070656562" className="btn btn-action w-100">
                                        <i className="fa-solid fa-phone me-2"></i>Phone
                                    </a>
                                </div>
                                <div className="col-4 border-start border-end border-light-subtle">
                                    <a href="https://wa.me/917973384836?text=Hi%20MyStylist%20team%2C%20I%27m%20interested%20in%20partnering." target="_blank" rel="noopener" className="btn btn-action w-100">
                                        <i className="fa-brands fa-whatsapp me-2"></i>Whatsapp
                                    </a>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-action w-100" onClick={() => setIsModalOpen(true)}>
                                        <i className="fa-regular fa-paper-plane me-2"></i>Enquire
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Modal */}
                    {isModalOpen && (
                        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} aria-hidden="false">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content relative !z-[10000]">
                                    <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">Contact Us</h5>
                                        <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)} aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body pt-0">
                                        <form className="row g-3" onSubmit={handleEnqSubmit}>
                                            <div className="col-sm-6">
                                                <input id="enqName" type="text" className="form-control" placeholder="Full Name" required value={enqForm.name} onChange={(e) => setEnqForm({ ...enqForm, name: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="tel" className="form-control" placeholder="Your Phone" required value={enqForm.phone} onChange={(e) => setEnqForm({ ...enqForm, phone: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" className="form-control" placeholder="Your Email (optional)" value={enqForm.email} onChange={(e) => setEnqForm({ ...enqForm, email: e.target.value })} />
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="form-select" required value={enqForm.gender} onChange={(e) => setEnqForm({ ...enqForm, gender: e.target.value })}>
                                                    <option value="" disabled>Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Salon / Studio" value={enqForm.businessName} onChange={(e) => setEnqForm({ ...enqForm, businessName: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Your City" value={enqForm.city} onChange={(e) => setEnqForm({ ...enqForm, city: e.target.value })} />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-brand w-100" disabled={enqLoading}>
                                                    <span style={{ opacity: enqLoading ? .7 : 1 }}>Submit</span>
                                                    <svg className="ms-2" width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ display: enqLoading ? 'inline' : 'none' }}>
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                        {enqSuccess && (
                                            <div className="alert alert-success mt-3" role="alert">Thanks! Our team will contact you shortly.</div>
                                        )}
                                        {!!enqError && (
                                            <div className="alert alert-danger mt-3" role="alert">{enqError}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* simple backdrop */}
                            <div className="modal-backdrop fade show" onClick={() => setIsModalOpen(false)}></div>
                        </div>
                    )}

                    {/* Inline styles */}
                    <style>{`
                    :root { --brand:#3bd1c5; --brandDark:#11b7ad; --ink:#0f172a; --muted:#6b7280; }
                    html, body { color: var(--ink); background:#ffffff; }
                    .loader { position: fixed; inset:0; z-index:9999; background:url(/img/loader.gif) no-repeat center #fff; background-size:50px; }
                    .hero-wrap{ position:relative; overflow:hidden; }
                    .hero-bg{ position:absolute; inset:0; z-index:-1; background-image:linear-gradient(to bottom, #3bd1c5, #66d9e4, #96f1f7, #e5fdff, #ffffff); }
                    .hero-card{ max-width:950px; margin-inline:auto; }
                    .logo-badge{ width:84px; height:84px; border-radius:999px; background:#fff; box-shadow:0 8px 28px rgba(0,0,0,.08); display:flex; align-items:center; justify-content:center; border:4px solid #ffffff; }
                    .logo-badge img{ width:100%; height:100%; object-fit:contain; border-radius:999px; }
                    .section{ padding:30px 0; }
                    .section-sm{ padding:40px 0; }
                    .kpi-box{ background:#fff; border-radius:16px; box-shadow:0 6px 24px rgba(0,0,0,.06); padding:20px; }
                    .icon-pill{ width:48px; height:48px; border-radius:12px; background:#e6fffb; display:flex; align-items:center; justify-content:center; color:var(--brandDark); }
                    .feature-card{ background:#fff; border-radius:18px; padding:24px; box-shadow:0 10px 30px rgba(0,0,0,.07); height:100%; transition: transform .25s ease, box-shadow .25s ease; }
                    .feature-card:hover{ transform: translateY(-4px); box-shadow:0 16px 36px rgba(0,0,0,.10); }
                    .feature-card h5{ font-size:18px; font-weight:600; margin-bottom:12px; line-height:1.3; }
                    .feature-card p{ line-height:1.6; margin-bottom:0; color:#6b7280; }
                    .step{ display:flex; gap:16px; align-items:flex-start; }
                    .step-num{ width:40px; height:40px; border-radius:999px; background:var(--brand); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; box-shadow:0 6px 20px rgba(59,209,197,.45); }
                    .cta-wrap{ background:linear-gradient(135deg, #3bd1c5 0%, #2bc1b7 40%, #22a39b 100%); border-radius:24px; color:#fff; box-shadow:0 18px 50px rgba(59,209,197,.35); }
                    .btn-brand{ background:var(--brand); color:#fff; border-radius:12px; padding:12px 18px; font-weight:700; }
                    .btn-brand:hover{ background:var(--brandDark); color:#fff; }
                    .btn-ghost{ border:1.5px solid rgba(255,255,255,.9); color:#fff; border-radius:12px; padding:12px 18px; font-weight:700; }
                    .badge-soft{ background:#eefcfb; color:#0e938c; border-radius:999px; padding:6px 12px; font-weight:700; font-size:.82rem; }
                    .testimonial{ background:#ffffff; border-radius:18px; box-shadow:0 10px 30px rgba(0,0,0,.06); padding:24px; }
                    .quote-mark{ font-size:34px; color:#9ca3af; line-height:0; }
                    .animate-fade-in-up{ animation: fadeInUp .7s cubic-bezier(.22,1,.36,1) both; }
                    @keyframes fadeInUp{ 0%{opacity:0; transform:translateY(24px);} 100%{ opacity:1; transform:translateY(0);} }
                    @media (max-width: 991px){ .hero-card{ padding-inline:8px; } }
                    @media (max-width: 768px){ .hero-card{ padding-inline:16px; } .feature-card{ padding:20px; } .section{ padding:20px 0; } .section-sm{ padding:30px 0; } }
                    @media (max-width: 576px){ .hero-card{ padding-inline:12px; } .feature-card{ padding:16px; } .kpi-box{ padding:16px; } .logo-badge{ width:70px; height:70px; } }
                    .customer-app-screenshots{ padding:20px 0 40px 0; }
                    .customer-app-screenshots .swiper-slide{ display:flex; justify-content:center; align-items:center; }
                    .customer-app-screenshots .swiper-button-next, .customer-app-screenshots .swiper-button-prev{ color:var(--brand); background:rgba(255,255,255,.9); width:40px; height:40px; border-radius:50%; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
                    .customer-app-screenshots .swiper-button-next:after, .customer-app-screenshots .swiper-button-prev:after{ font-size:16px; font-weight:bold; }
                    .customer-app-screenshots .swiper-pagination-bullet{ background:var(--brand); opacity:.3; }
                    .customer-app-screenshots .swiper-pagination-bullet-active{ opacity:1; }
                    @media (max-width: 768px){ .customer-app-screenshots .swiper-button-next, .customer-app-screenshots .swiper-button-prev{ display:none; } }
                    #gender option[value=""]{ color:#6c757d; font-weight:normal; }
                    #gender option:not([value=""]) { color:#212529; font-weight:normal; }
                    #gender:invalid { color:#6c757d; }
                    #gender:valid { color:#212529; }
                    .form-control, .form-select{ border-radius:8px; border:1px solid #e5e7eb; padding:12px 16px; font-size:14px; transition: border-color .2s ease, box-shadow .2s ease; }
                    .form-control:focus, .form-select:focus{ border-color: var(--brand); box-shadow: 0 0 0 3px rgba(59,209,197,.1); }
                    .btn-brand{ padding:14px 24px; font-size:16px; font-weight:600; border-radius:12px; transition: all .2s ease; }
                    .btn-brand:hover{ transform: translateY(-1px); box-shadow:0 8px 20px rgba(59,209,197,.3); }
                    .feature-card .row.g-3{ margin-top:20px; }
                    @media (max-width: 576px){ .form-control, .form-select{ padding:10px 14px; font-size:16px; } .btn-brand{ padding:12px 20px; font-size:16px; } }
                    .text-justify-last-center{ text-align:justify; text-align-last:center; }
                    .sticky-action-bar{ position:fixed; left:0; right:0; bottom:0; z-index:1050; background:#3bd1c5; box-shadow:0 -4px 14px rgba(0,0,0,.12); }
                    .sticky-action-bar .btn-action{ color:#fff; font-weight:700; font-size:.9em; padding:14px 8px; border-radius:0; width:100%; background:transparent; }
                    .sticky-action-bar .btn-action:hover,.sticky-action-bar .btn-action:focus{ color:#e8eefc; background: rgba(255,255,255,.06); }
                    .sticky-sep{ width:1px; background: rgba(255,255,255,.35); }
                    @media (max-width: 768px){ body{ padding-bottom:64px; } }
                `}</style>

                </FadeUpContainer>
            </div>
        </div>
    );
}

export default PartnerPage;


