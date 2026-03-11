'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface NavLink {
    label: string;
    type: 'reference' | 'external' | 'dropdown';
    link?: string;
    slug?: string;
    url?: string;
    children?: { label: string; slug: string }[];
    isButton?: boolean;
    buttonStyle?: 'rounded' | 'square';
}

interface HeaderSettings {
    backgroundColor?: string;
    stickyBackgroundColor?: string;
    isTransparent?: boolean;
    textColor?: string;
    stickyTextColor?: string;
    whatsappIcon?: string;
}

const Navbar = ({ menuItems, settings, styling, headerSettings }: {
    menuItems?: NavLink[],
    settings?: any,
    styling?: any,
    headerSettings?: HeaderSettings
}) => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const isStudio = pathname?.startsWith('/studio')

    useEffect(() => {
        if (isStudio) return
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isStudio])

    if (isStudio) return null

    const getLinkHref = (item: NavLink) => {
        if (item.type === 'reference') return `/${item.slug}`
        if (item.type === 'external') return item.url || '#'
        return '#'
    }

    const renderLogo = () => {
        const logoMain = settings?.logoMain
        const logoSticky = settings?.logoSticky
        const logoMobile = settings?.logoMobile
        const logoRetina = settings?.logoRetina

        // Logo Seçimi
        const currentLogo = scrolled ? (logoSticky || logoMain) : logoMain

        if (!currentLogo) {
            return (
                <span className="text-2xl font-bold tracking-tighter text-white">
                    Tyt<span className="text-primary">Art</span>
                </span>
            )
        }

        const logoUrl = urlFor(currentLogo).url()

        return (
            <div className="flex items-center">
                {/* Masaüstü Logo */}
                <div className={`relative h-10 md:h-12 w-48 ${logoMobile ? 'hidden md:block' : 'block'}`}>
                    <Image
                        src={logoUrl}
                        alt={settings?.title || "TytArt"}
                        fill
                        sizes="(max-width: 768px) 150px, 200px"
                        className="object-contain transition-all duration-300"
                        priority
                    />
                </div>
                {/* Mobil Logo (Eğer varsa) */}
                {logoMobile && (
                    <div className="relative h-8 w-32 md:hidden">
                        <Image
                            src={urlFor(scrolled ? (logoSticky || logoMobile) : logoMobile).url()}
                            alt={settings?.title || "TytArt"}
                            fill
                            sizes="150px"
                            className="object-contain"
                            priority
                        />
                    </div>
                )}
            </div>
        )
    }

    const navStyle = {
        fontSize: styling?.fontSize ? `${styling.fontSize}px` : '14px',
        color: scrolled
            ? (headerSettings?.stickyTextColor || headerSettings?.textColor || '#ffffff')
            : (headerSettings?.textColor || '#ffffff')
    }

    // Header Arka Plan Mantığı
    const getHeaderBg = () => {
        if (scrolled) {
            return headerSettings?.stickyBackgroundColor || 'rgba(0,0,0,0.9)'
        }
        if (headerSettings?.isTransparent) {
            return 'transparent'
        }
        return headerSettings?.backgroundColor || 'rgba(10,10,10,0.8)'
    }

    const WhatsAppIcon = () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M19.057 4.298c-1.883-1.886-4.384-2.923-7.04-2.924-5.485.001-9.95 4.465-9.952 9.951a9.919 9.919 0 001.334 4.965l-1.419 5.178 5.305-1.39a9.92 9.92 0 004.726 1.201h.004c5.484 0 9.948-4.466 9.951-9.953a9.922 9.922 0 00-2.909-7.052zm-7.042 15.201c-1.684.001-3.328-.452-4.757-1.31l-.341-.202-3.537.928.944-3.447-.221-.351a8.27 8.27 0 01-1.267-4.364c.002-4.562 3.714-8.273 8.278-8.274a8.22 8.22 0 015.852 2.428 8.22 8.22 0 012.424 5.856c-.002 4.563-3.715 8.274-8.275 8.276zm4.54-6.202c-.249-.125-1.472-.725-1.7-.807-.229-.082-.395-.124-.56.124-.166.248-.642.808-.787.974-.145.166-.29.186-.54.061-.249-.125-1.05-.387-1.999-1.233-.739-.659-1.237-1.474-1.383-1.722-.145-.248-.015-.382.11-.506.113-.112.249-.29.374-.435.125-.145.166-.248.249-.413.082-.166.042-.311-.02-.435-.062-.125-.56-1.349-.769-1.847-.203-.491-.41-.424-.56-.431l-.478-.008c-.165 0-.435.062-.663.311-.228.248-.871.85-.871 2.071 0 1.221.892 2.401 1.017 2.567.124.166 1.755 2.68 4.251 3.757.594.256 1.058.409 1.419.524.594.188 1.135.162 1.562.098.477-.07 1.472-.601 1.68-1.182.207-.581.207-1.076.145-1.182-.062-.107-.228-.166-.477-.291z" />
        </svg>
    )

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        >
            <div
                className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 rounded-2xl px-8 py-5 shadow-2xl ${scrolled ? 'py-4' : 'bg-transparent'}`}
                style={{
                    backgroundColor: getHeaderBg(),
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}
            >
                <Link href="/" className="flex items-center">
                    {renderLogo()}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 uppercase tracking-widest font-medium" style={navStyle}>
                    {menuItems?.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {item.type === 'dropdown' ? (
                                <button className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                                    <span>{item.label}</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={getLinkHref(item)}
                                    className={`hover:text-primary transition-colors ${item.isButton ? 'hidden' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            )}

                            {/* Dropdown Content */}
                            <AnimatePresence>
                                {item.type === 'dropdown' && activeDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-4 w-60 glass rounded-2xl p-6 shadow-2xl border border-white/10"
                                    >
                                        <div className="flex flex-col space-y-4">
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={`/${child.slug}`}
                                                    className="text-xs text-zinc-400 hover:text-primary transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    {/* WhatsApp Button */}
                    {settings?.whatsapp && (
                        <a
                            href={`https://wa.me/${settings.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 flex items-center justify-center w-11 h-11 rounded-full shadow-lg hover:scale-110 ${!headerSettings?.whatsappIcon ? 'bg-[#25D366] text-white' : 'bg-white/10 text-white'}`}
                        >
                            {headerSettings?.whatsappIcon ? (
                                <Image src={headerSettings.whatsappIcon} alt="WhatsApp" width={28} height={28} className="w-7 h-7 object-contain" />
                            ) : (
                                <WhatsAppIcon />
                            )}
                        </a>
                    )}

                    {/* Dynamic CTA Button */}
                    {menuItems?.filter(i => i.isButton).map(btn => (
                        <Link
                            key={btn.label}
                            href={getLinkHref(btn)}
                            className={`hidden sm:block bg-primary text-secondary px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 ${btn.buttonStyle === 'rounded' ? 'rounded-full' : 'rounded-lg'}`}
                            style={{ fontSize: '12px' }}
                        >
                            {btn.label}
                        </Link>
                    ))}

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 glass rounded-3xl overflow-hidden border border-white/10"
                    >
                        <div className="p-10 flex flex-col space-y-8 text-center">
                            {menuItems?.map((item) => (
                                <div key={item.label} className="flex flex-col space-y-4">
                                    <Link
                                        href={getLinkHref(item)}
                                        onClick={() => !item.children && setIsOpen(false)}
                                        className="text-sm font-medium uppercase tracking-widest text-white hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children?.map(child => (
                                        <Link
                                            key={child.label}
                                            href={`/${child.slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className="text-xs text-zinc-500"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                            {settings?.whatsapp && (
                                <a
                                    href={`https://wa.me/${settings.whatsapp}`}
                                    target="_blank"
                                    className="bg-green-600/20 text-green-400 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2"
                                >
                                    {headerSettings?.whatsappIcon ? (
                                        <Image src={headerSettings.whatsappIcon} alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain" />
                                    ) : (
                                        <WhatsAppIcon />
                                    )}
                                    <span>WhatsApp</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
