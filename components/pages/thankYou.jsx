"use client";
import React, { useEffect } from 'react';
import FadeUpContainer from '../animation/FadeUpContainer';
const ThankYou = () => {
    useEffect(() => {
        try {
            if (window.sessionStorage.getItem('partnerFormJustSubmitted') === '1') {
                window.sessionStorage.removeItem('partnerFormJustSubmitted');
            }
        } catch (_) { }
    }, []);

    return (
        <main className="wrap">
            <FadeUpContainer>
            <div className="card-thanks">
                <div className="logo">
                    <img src="/img/mystylist_color_logo.png" alt="MyStylist" />
                </div>
                <h1 className=" !text-4xl  text-black ">Thank you</h1>
                <p className="muted mb-1">Thank you for submitting your details.</p>
                <p className="muted">Our professional shall get in touch with you within two working hours.</p>
                <a className="btn-brand mt-2" href="/">Back to home</a>
            </div>
            <style>{`
                :root { --brand: #3bd1c5; --ink: #0f172a; }
                html, body { height: 100%; color: var(--ink); }
                .wrap { min-height: 100vh; display:flex; align-items:center; justify-content:center; background: linear-gradient(180deg, #ffffff 0%, #eafeff 100%); padding:24px; }
                .card-thanks { max-width:680px; width:100%; background:#fff; border-radius:18px; box-shadow:0 10px 30px rgba(0,0,0,.06); padding:32px; text-align:center; }
                .title { font-weight:800; margin-bottom:8px; }
                .muted { color:#6b7280; }
                .btn-brand { background: var(--brand); color:#fff; border-radius:12px; padding:12px 18px; font-weight:700; text-decoration:none; display:inline-block; }
                .btn-brand:hover { background:#11b7ad; color:#fff; }
                .logo { width:64px; height:64px; border-radius:999px; background:#fff; display:inline-flex; align-items:center; justify-content:center; box-shadow:0 8px 28px rgba(0,0,0,.08); border:4px solid #ffffff; margin-bottom:8px; }
                .logo img { width:100%; height:100%; object-fit:contain; border-radius:999px; }
            `}</style>
            </FadeUpContainer>
        </main>
    );
}

export default ThankYou;
