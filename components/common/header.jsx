"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    useEffect(() => {
        const header = document.getElementById("header");
        if (!header) return;
        let sticky = header.offsetTop;
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.pageYOffset > sticky) {
                        header.classList.add("sticky");
                    } else {
                        header.classList.remove("sticky");
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const onResize = () => {
            sticky = header.offsetTop;
            onScroll();
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        // initialize on mount
        onResize();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <header className="header" id="header">
            <div className="container">
                <div
                    className="header-inner"
                >
                    <div
                        className="header-flex-row justify-content-between"
                        style={{ position: "relative", gap: "12px" }}
                    >
                        {/* Logo */}
                        <div className="">
                            <Link href="/">
                                <Image
                                    src="/assets/img/logo.png"
                                    alt="Logo"
                                    title=""
                                    width={160}
                                    height={50}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <ul className="nav centered-nav">
                            <li className="active">
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/faqs">FAQS</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/privacyPolicy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/termCondition">Terms & Conditions</Link>
                            </li>
                        </ul>

                        {/* Stylist CTA */}
                        <a
                            className="btn-white are-you-stylist-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/partner"
                        >
                            Are you a Stylist?
                        </a>

                        {/* Mobile Nav Toggle */}
                        <button
                            className="mobile-nav-toggle"
                            id="mobileNavToggle"
                            aria-label="Open navigation"
                            onClick={() => setIsMobileNavOpen(true)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    {/* Mobile Nav Drawer */}
                    <nav
                        className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}
                        id="mobileNav"
                    >
                        <button
                            className="close-mobile-nav"
                            id="closeMobileNav"
                            aria-label="Close navigation"
                            onClick={() => setIsMobileNavOpen(false)}
                        >
                            &times;
                        </button>
                        <ul>
                            <li className="active">
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/faqs">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/privacyPolicy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/termCondition">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Nav Overlay */}
                    {isMobileNavOpen && (
                        <div
                            className="mobile-nav-overlay"
                            id="mobileNavOverlay"
                            onClick={() => setIsMobileNavOpen(false)}
                        ></div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
