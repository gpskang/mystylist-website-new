'use client'
import React, { useEffect, useMemo, useState } from 'react';
import FadeUpContainer from '../animation/FadeUpContainer';
const GiveReview = () => {
    const [selected, setSelected] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [ratingError, setRatingError] = useState('');
    const [reviewError, setReviewError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const starLabels = useMemo(() => ["Terrible", "Bad", "Okay", "Good", "Excellent"], []);

    useEffect(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            // mimic fade out
            loader.style.transition = 'opacity 300ms ease';
            loader.style.opacity = '0';
            const timer = setTimeout(() => {
                loader.style.display = 'none';
            }, 320);
            return () => clearTimeout(timer);
        }
    }, []);

    const visibleCount = hover || selected;

    async function handleSubmit(e) {
        e.preventDefault();
        let valid = true;
        if (!selected || selected < 1 || selected > 5) {
            setRatingError('Rating is required');
            valid = false;
        } else {
            setRatingError('');
        }
        if (!review.trim()) {
            setReviewError('Message is required');
            valid = false;
        } else {
            setReviewError('');
        }
        if (!valid) return;
        setIsSubmitting(true);
        try {
            const res = await fetch('https://api.mystylist.in/v1/website/reviews/app-reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating: selected, type: 'user-app', review: review.trim() })
            });
            const data = await res.json().catch(() => ({}));
            if (res.status === 201 && data && data.success) {
                setReview('');
                setSelected(0);
                setHover(0);
                setShowSuccess(true);
                setTimeout(() => {
                    try { window.location.href = '/'; } catch (_) { }
                }, 1500);
            } else if (res.status === 400 && data && data.errors) {
                if (data.errors.rating) setRatingError(data.errors.rating);
                if (data.errors.review) setReviewError(data.errors.review);
                if (!data.errors.rating && !data.errors.review) setReviewError(data.message || 'Something went wrong. Please try again.');
            } else {
                setReviewError((data && data.message) || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setReviewError('Server error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div>
            <div className="main">
                <div className="loader"></div>
                <FadeUpContainer>
                    {/* Review Section Start */}
                    <div className="flex items-center !mb-20 justify-center min-h-screen backgroundcolor py-10">
                        <div className="relative w-full px-4 shadow-md !pb-8 bg-white max-w-sm sm:max-w-md rounded-3xl p-6 sm:p-8 pt-12 animate-fade-in-up flex flex-col items-center">
                            {/* Floating Logo */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-sm flex items-center justify-center w-20 h-20 border-white z-10">
                                <img
                                    src="assets/img/mystylist_color_logo.png"
                                    alt="MyStylist Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>

                            <div className="flex flex-col items-center mb-4 !mt-14">
                                <h1 className="!text-xl !font-bold text-black mb-1 text-center">
                                    Rate MyStylist App
                                </h1>
                                <span className="text-base text-gray-500 text-center">
                                    We value your feedback!
                                </span>
                            </div>

                            <form id="reviewForm" className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                                <div className="text-center mb-6 w-full">
                                    <p className="text-[2.3em] font-bold text-gray-900 mb-4">
                                        How was your experience?
                                    </p>
                                    <div id="starRating" className="flex justify-center gap-3 mb-2">
                                        {[0, 1, 2, 3, 4].map((i) => {
                                            const isActive = i < visibleCount;
                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    className={`transition-transform duration-200 ease-out focus:outline-none ${isActive ? 'animate-bounce' : ''}`}
                                                    onMouseEnter={() => setHover(i + 1)}
                                                    onMouseLeave={() => setHover(0)}
                                                    onClick={() => {
                                                        setSelected(i + 1);
                                                    }}
                                                >
                                                    <svg className="w-12 h-12 sm:w-14 sm:h-14 star-svg" fill={isActive ? '#14b8a6' : 'none'} stroke={isActive ? '#14b8a6' : '#d1d5db'} strokeWidth="2" viewBox="0 0 24 24">
                                                        <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9" />
                                                    </svg>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <div id="starLabel" className="text-base text-gray-500 min-h-[24px] transition-all">
                                        {visibleCount ? starLabels[visibleCount - 1] : ''}
                                    </div>
                                    <div id="ratingError" className={`text-red-500 text-sm mt-1 min-h-[20px] font-medium animate-fade-in ${ratingError ? '' : 'hidden'}`}>
                                        {ratingError}
                                    </div>
                                </div>

                                <textarea
                                    id="reviewComment"
                                    rows="2"
                                    className="w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition p-3 text-base mb-1 resize-none shadow-sm"
                                    placeholder="Leave a comment"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                ></textarea>
                                <div id="reviewError" className={`text-red-500 text-sm mt-1 min-h-[20px] font-medium animate-fade-in ${reviewError ? '' : 'hidden'}`}>
                                    {reviewError}
                                </div>

                                <button
                                    id="confirmOrderBtn"
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 !rounded-xl bg-[#3bd1c5] text-white font-bold text-lg hover:bg-teal-600 transition active:scale-95 mt-4 flex items-center justify-center gap-2"
                                >
                                    <span id="btnText" className={isSubmitting ? 'opacity-50' : ''}>Submit Review</span>
                                    <svg
                                        id="btnSpinner"
                                        className={`w-5 h-5 animate-spin ${isSubmitting ? '' : 'hidden'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8z"
                                        ></path>
                                    </svg>
                                </button>
                            </form>

                            {/* Success Popup */}
                            <div id="successPopup" className={`fixed inset-0 z-50 flex items-center justify-center ${showSuccess ? '' : 'hidden'}`}>
                                <div className="bg-white !p-6 !mb-10 rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center animate-popup-bounce">
                                    <svg
                                        className="w-16 h-16 text-green-400 mb-4 animate-bounce-in"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#d1fae5" />
                                        <path
                                            d="M8 12l2 2l4-4"
                                            stroke="#10b981"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h3>
                                    <p className="text-gray-600 text-center mb-2">
                                        Your review has been submitted.
                                        <br />
                                        We appreciate your feedback.
                                    </p>
                                    <button
                                        onClick={() => setShowSuccess(false)}
                                        className="mt-4 !px-6 !py-2 !rounded-lg !bg-[#3bd1c5] text-white font-semibold shadow hover:bg-teal-600 transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Review Section End */}

                    {/* Are you a stylist Popup */}
                    <div className="modal fade" id="are-you-stylist-popup">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title t-c-1 fs-5">Are you a Stylist?</h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <form className="form-area">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Your Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Business Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Business Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-label">
                                                        Your Message
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Your Message"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <button type="submit" className="btn-green">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Inline styles to match HTML page animations */}
                    <style>{`
                    .backgroundcolor { background-image: linear-gradient(to bottom, #3bd1c5, #66d9e4, #96f1f7, #e5fdff, #f9ffff, #f8fffe, #f9ffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff); }
                    .animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(.22,1,.36,1) both; }
                    @keyframes fadeInUp { 0% { opacity:0; transform: translateY(40px);} 100% { opacity:1; transform: translateY(0);} }
                    .animate-bounce { animation: bounceStar 0.4s cubic-bezier(.34,1.56,.64,1) 1; }
                    @keyframes bounceStar { 0% { transform: scale(1);} 30% { transform: scale(1.3);} 60% { transform: scale(0.9);} 100% { transform: scale(1);} }
                    .animate-fade-in { animation: fadeIn .3s ease-in both; }
                    @keyframes fadeIn { 0% { opacity: 0;} 100% { opacity:1;} }
                    .animate-popup-bounce { animation: popupBounce .6s cubic-bezier(.22,1,.36,1) both; }
                    @keyframes popupBounce { 0% { opacity:0; transform: scale(.7) translateY(40px);} 60% { opacity:1; transform: scale(1.05) translateY(-8px);} 100% { opacity:1; transform: scale(1) translateY(0);} }
                    .animate-bounce-in { animation: bounceIn .7s cubic-bezier(.34,1.56,.64,1) both; }
                    @keyframes bounceIn { 0% { transform: scale(.2); opacity:0;} 60% { transform: scale(1.2); opacity:1;} 100% { transform: scale(1); opacity:1;} }
                `}</style>

                </FadeUpContainer>
            </div>

        </div>
    );
}

export default GiveReview;
