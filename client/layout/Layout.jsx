import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";


import useStateContext from '../context/ContextProvider';
// components import 
import Menu from '../components/Menu';
import Button from '../components/Button';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
const Layout = ({ children }) => {
    const router = useRouter();
    const location = router.pathname;
    const textClass = "variation-one";


    const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
    const { setActiveMenu, activeMenu, form, openForm, loading, chatShow, setChatShow } = useStateContext();
    const openMenu = () => {
        setActiveMenu(true);
    }
    const [show, setShow] = useState(false);
    const controlNavbar = () => {
        if (window.scrollY > 150) {
            setShow(true);
        } else {
            setShow(false);

        }
    }


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, []);
    useEffect(() => {
        if (window.screen.width > 1280) {
            if (chatShow === "first" && !form) {
                setTimeout(() => {
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("second");
                }, 4000);
            } else if (chatShow === "second" && !form) {
                setTimeout(() => {
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("third");
                }, 20000);
            } else if (chatShow === "third" && !form) {
                setTimeout(() => {
                    if (!form) {
                        document.getElementById("open-chat")?.click();
                    }
                    setChatShow("second");
                }, 20000);
            }
        }
        return () => {
            clearTimeout();
        }
    }, [chatShow, setChatShow, form]);

    const scrollToTop = () => {
        document.getElementById("root").scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div onContextMenu={(e) => e.preventDefault()} id="root" className={`${styles.root} ${activeMenu || form ? "bg-black" : ""} relative transition-all`}>
            <Head>
                <link rel="shortcut icon" href={`${PF}favicon.jpg`} type="image/x-icon"></link>
            </Head>
            <script id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=ab66d382-3888-4e1f-8563-3e91db8f0455"> </script>
            <a id="open-chat" className='hidden' href="javascript:$zopim.livechat.window.show()">click</a>
            <Form classes={textClass} />
            <div onClick={scrollToTop} className={`bg-yellow-300 menu fixed bottom-3 left-5 p-3 transition-all duration-400 rounded-full cursor-pointer hover:bg-yellow-200 ${show ? "translate-x-0" : "-translate-x-36"} w-50`} >
                <img src={`${PF}scroll.webp`} className="w-50" alt="" />
            </div>
            {loading &&
                <Loader />
            }
            <div className={`root ${form ? "opacity-40" : "opacity-100"} transition-all duration-400`}>

                <div className='border-t-5 border-black relative' >
                    <Navbar toShow={show} />
                    {!activeMenu && (
                        <>

                            <>
                                <div onClick={() => router.push("/")} className={`cursor-pointer fixed top-2 left-4 md:left-10 xl:top-1 ${styles.menu} w-50 md:w-70 xl:w-80 2xl:w-100`} >
                                    <img src={`${PF}logo.webp`} className='object-contain w-50 md:w-70 xl:w-80 2xl:w-100 transition-all' alt="" />
                                </div>
                            </>

                            <div className={`fixed md:top-5 2xl:top-8 xl:right-4 top-2 right-2  md:right-12 ${styles.menu}`} >
                                {location.includes("/web-design-services") ?
                                    <Button
                                        customFunc={() => openForm("", "landing-page-v1", "", "Get a Free Quote", true)}
                                        text="Get A Free Quote"
                                        classes={textClass}
                                    />
                                    :
                                    <Button customFunc={openMenu} text="Menu" classes={textClass} />
                                }
                                <div className={`fixed 2xl:top-8 top-4  ${location.includes("/web-design-services") ? "2xl:right-72 right-64" : "right-36  2xl:right-48"}  menu xl:block hidden transition-all duration-300`} >
                                    <a href="tel:647-660-1776">
                                        <Button
                                            text="647-660-1776"
                                            classes={textClass}
                                            call={true}
                                        />
                                    </a>
                                </div>
                            </div>
                        </>)
                    }
                    <Menu classes={textClass} />
                </div>
                {children}
            </div>

        </div>

    )
}

export default Layout