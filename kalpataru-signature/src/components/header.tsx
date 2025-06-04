"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function Header() {
    const [didScroll, setDidScroll] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const delta = 5;
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Toggle Button Click Handler
        const toggleButton = document.getElementById('toggle');
        const handleToggleClick = () => {
            toggleButton?.classList.toggle('active');
            document.querySelector('header')?.classList.toggle('hiddenspace');
            document.getElementById('overlay')?.classList.toggle('open');
            document.querySelectorAll('.modalHeader').forEach(el => el.classList.remove('show-modal'));
            document.body.classList.toggle('hideScrollbar');
            document.documentElement.classList.toggle('hideScrollbarhtml');
        };
        toggleButton?.addEventListener('click', handleToggleClick);

        // Dropdown Menu Click Handler
        const dropdowns = document.querySelectorAll('.dropdownMenu');
        const handleDropdownClick = function(this: Element) {
            this.classList.toggle('openDropdown');
        };
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', handleDropdownClick);
        });

        // Header Menu Links Click Handler
        const menuLinks = document.querySelectorAll('.headerWrapper ul .menuLinks');
        const handleMenuLinkClick = () => {
            document.getElementById('overlay')?.classList.remove('open');
            document.getElementById('toggle')?.classList.remove('active');
        };
        menuLinks.forEach(link => {
            link.addEventListener('click', handleMenuLinkClick);
        });

        // Close Menu Button Click Handler
        const closeButtons = document.querySelectorAll('.closeButtonmenu');
        const handleCloseClick = () => {
            document.getElementById('overlay')?.classList.remove('open');
            document.getElementById('toggle')?.classList.remove('active');
            document.body.classList.remove('hideScrollbar');
            document.documentElement.classList.remove('hideScrollbarhtml');
        };
        closeButtons.forEach(btn => {
            btn.addEventListener('click', handleCloseClick);
        });

        // Scroll Handler
        const handleScroll = () => {
            setDidScroll(true);
        };
        window.addEventListener('scroll', handleScroll);

        // Check scroll changes
        const scrollInterval = setInterval(() => {
            if (didScroll) {
                hasScrolled();
                setDidScroll(false);
            }
        }, 0);

        function hasScrolled() {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const navbarHeight = headerRef.current?.offsetHeight || 0;

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                headerRef.current?.classList.add('nav-up');
                headerRef.current?.classList.remove('nav-down');
            } else {
                // Scroll Up
                if (st + window.innerHeight < document.body.scrollHeight) {
                    headerRef.current?.classList.add('nav-down');
                    headerRef.current?.classList.remove('nav-up');
                }
            }

            setLastScrollTop(st);
        }

        // Add scroll class to header
        const handleScrollClass = () => {
            const header = document.getElementById('main-header');
            const banner = document.querySelector('.homebannerSec');
            
            if (banner && header) {
                if (window.scrollY > banner.clientHeight) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScrollClass);

        // Modal functionality
        const modal = document.querySelector(".modal");
        const triggers = document.querySelectorAll(".trigger");
        const closeButton = document.querySelector(".close-button");
        const closeButtonTwo = document.querySelector(".close-buttonTwo");

        const toggleModal = () => {
            modal?.classList.toggle("show-modal");
            document.body.classList.toggle("body-scroll");
        };

        const windowOnClick = (event: MouseEvent) => {
            if (event.target === modal) {
                toggleModal();
            }
        };

        triggers.forEach(trigger => {
            trigger.addEventListener("click", toggleModal);
        });

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                document.querySelector(".overlay")?.classList.remove("open");
                modal?.classList.remove("show-modal");
                document.querySelector(".button_container")?.classList.remove("active");
                document.body.classList.remove("hideScrollbar");
                document.documentElement.classList.remove("hideScrollbarhtml");
            });
        }

        if (closeButtonTwo) {
            closeButtonTwo.addEventListener("click", () => {
                modal?.classList.remove("show-modal");
                document.querySelector(".button_container")?.classList.remove("active");
            });
        }

        window.addEventListener("click", windowOnClick);

        // Cleanup
        return () => {
            toggleButton?.removeEventListener('click', handleToggleClick);
            dropdowns.forEach(dropdown => {
                dropdown.removeEventListener('click', handleDropdownClick);
            });
            menuLinks.forEach(link => {
                link.removeEventListener('click', handleMenuLinkClick);
            });
            closeButtons.forEach(btn => {
                btn.removeEventListener('click', handleCloseClick);
            });
            window.removeEventListener('scroll', handleScroll);
            clearInterval(scrollInterval);

            window.removeEventListener('scroll', handleScrollClass);
            triggers.forEach(trigger => {
                trigger.removeEventListener("click", toggleModal);
            });
            closeButton?.removeEventListener("click", toggleModal);
            closeButtonTwo?.removeEventListener("click", toggleModal);
            window.removeEventListener("click", windowOnClick);
        };
    }, [didScroll, lastScrollTop]);
    return (
        <header className="nav-down headerNew" id="main-header">
            <div className="headerWrapper">
                <div className="leftMenu">
                    <ul>
                        <li className="menuLinks">
                            <Link href={"/signature-philosophy"}>Philosophy</Link>
                        </li>
                        <li className="menuLinks">
                            <Link href={"/signature-essence"}>Essence</Link>
                        </li>
                    </ul>
                </div>
                <div className="centerLogo">
                    <Link href={"/"}>
                        <Image className="headerLogo" src="/images/headerlogo.svg" alt="logo" width={0} height={0} priority />
                    </Link>
                </div>
                <div className="rightMenu">
                    <ul>
                        <li className="menuLinks">
                            <Link href={"/"}>Residences</Link>
                        </li>
                        <li className="menuLinks">
                            <Link href={"/"}>Experience</Link>
                        </li>
                        <li>
                            <div className="hamburgerDiv" id="hamburgerDiv">
                                <div className="button_container" id="toggle"><span className="top"></span><span
                                        className="bottom"></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay" id="overlay">
                <div className="popupmenuLogo"><a href="index.html"><img src="/images/headerlogo.svg" alt="" title="" /></a></div>
                <button className="closeButtonmenu"><img src="/images/popup-close-icon.svg" alt="" title="" /></button>
                <nav className="overlay-menu">
                    <ul>
                        <li className="menuLinks">
                            <Link href={"/"}>Signature Philosophy</Link>
                        </li>
                        <li className="menuLinks">
                            <Link href={"/"}>Signature Essence</Link>
                        </li>
                        <li className="menuLinks">
                            <Link href={"/"}>Signature Residences</Link>
                        </li>
                        <li className="menuLinks">
                            <Link href={"/"}>Signature Experience</Link>
                        </li>
                        <li className="menuLinks dropdownMenu">
                            <Link href={"/"}>Our Collection<img src="/images/header-mbl-dropdown-arrow.svg" alt="" title="" /></Link>
                            <div className="dropdownMbl">
                                <ul>
                                    <li><Link href={"/"}>Oceana, Prabhadevi</Link></li>
                                    <li><Link href={"/"}>Azuro, Nepean Sea Road</Link></li>
                                    <li><Link href={"/"}>Prive, Altamount Road</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="headerminiLinks">
                        <Link href={"/"}>News & Media</Link>
                        <a className="trigger reqCta ctaBluetext">Request a Private Preview <img src="/images/req-arrow.svg" /></a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
