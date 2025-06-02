const { useState, useEffect } = React;

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'ahmad@ajnusa.com',
                    from: formData.email,
                    subject: formData.subject,
                    text: `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
                })
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }

            const result = await response.json();
            console.log('Email response:', result);

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error sending message:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        animateElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return React.createElement('section', {
        id: "contact",
        'data-name': "contact",
        'data-file': "components/Contact.js",
        className: "py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    }, [
        React.createElement('div', {
            key: 'bg-decoration',
            className: "absolute inset-0 pointer-events-none"
        }, [
            React.createElement('div', {
                key: 'bg-circle-1',
                className: "absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl floating-animation"
            }),
            React.createElement('div', {
                key: 'bg-circle-2',
                className: "absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl floating-animation",
                style: { animationDelay: '1s' }
            })
        ]),
        
        React.createElement('div', {
            key: 'main-container',
            className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
        }, [
            React.createElement('div', {
                key: 'header',
                className: "text-center mb-16 fade-in"
            }, [
                React.createElement('h2', {
                    key: 'title',
                    className: "text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight"
                }, "Hubungi Kami"),
                React.createElement('div', {
                    key: 'divider',
                    className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"
                }),
                React.createElement('p', {
                    key: 'subtitle',
                    className: "text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed"
                }, "Siap melayani kebutuhan jaringan satelit dan ISP Anda dengan solusi terbaik")
            ]),
            
            React.createElement('div', {
                key: 'content-layout',
                className: "grid lg:grid-cols-5 gap-12 items-start"
            }, [
                React.createElement('div', {
                    key: 'contact-info-sidebar',
                    className: "lg:col-span-2 slide-in-left"
                }, [
                    React.createElement('div', {
                        key: 'info-card',
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-8"
                    }, [
                        React.createElement('h3', {
                            key: 'info-title',
                            className: "text-2xl font-bold text-gray-800 mb-8 text-center"
                        }, "Informasi Kontak"),
                        
                        React.createElement('div', {
                            key: 'contact-items',
                            className: "space-y-6 mb-8"
                        }, [
                            { 
                                icon: "fas fa-map-marker-alt", 
                                title: "Alamat", 
                                value: "Jakarta, Indonesia", 
                                link: null,
                                color: "from-red-400 to-red-600"
                            },
                            { 
                                icon: "fas fa-phone", 
                                title: "Telepon", 
                                value: "+62 811-845-675", 
                                link: "https://wa.me/62811845675", // Updated to WhatsApp link
                                color: "from-green-400 to-green-600"
                            },
                            { 
                                icon: "fas fa-envelope", 
                                title: "Email", 
                                value: "info@ajnusa.com | sales@ajnusa.com", 
                                link: "mailto:info@ajnusa.com",
                                color: "from-blue-400 to-blue-600"
                            },
                            { 
                                icon: "fas fa-globe", 
                                title: "Website", 
                                value: "www.ajnusa.com", 
                                link: "https://www.ajnusa.com",
                                color: "from-purple-400 to-purple-600"
                            }
                        ].map((item, index) => 
                            React.createElement('div', {
                                key: index,
                                className: "flex items-start group hover:bg-gray-50/50 p-4 rounded-xl transition-all duration-300"
                            }, [
                                React.createElement('div', {
                                    key: 'icon-wrapper',
                                    className: `w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`
                                }, React.createElement('i', {
                                    className: `${item.icon} text-white text-lg`
                                })),
                                React.createElement('div', {
                                    key: 'content',
                                    className: "flex-1 min-w-0"
                                }, [
                                    React.createElement('h4', {
                                        key: 'title',
                                        className: "font-semibold text-gray-800 text-sm mb-1"
                                    }, item.title),
                                    item.link ? 
                                    React.createElement('a', {
                                        key: 'link',
                                        href: item.link,
                                        className: "text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline transition-colors duration-300 break-all"
                                    }, item.value) :
                                    React.createElement('p', {
                                        key: 'text',
                                        className: "text-gray-600 text-sm"
                                    }, item.value)
                                ])
                            ])
                        )),
                        
                        React.createElement('div', {
                            key: 'divider',
                            className: "h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"
                        }),
                        
                        React.createElement('div', {
                            key: 'social-section'
                        }, [
                            React.createElement('h4', {
                                key: 'social-title',
                                className: "text-lg font-semibold text-gray-800 mb-6 text-center"
                            }, "Ikuti Kami"),
                            React.createElement('div', {
                                key: 'social-links',
                                className: "flex justify-center space-x-4"
                            }, [
                                { icon: "fab fa-facebook-f", link: "https://www.facebook.com/profile.php?id=100054324456980", name: "Facebook", color: "from-blue-500 to-blue-700" },
                                { icon: "fab fa-twitter", link: "https://x.com/artacomindo", name: "Twitter", color: "from-sky-400 to-sky-600" },
                                { icon: "fab fa-instagram", link: "https://www.instagram.com/artacomindojejaring/", name: "Instagram", color: "from-pink-400 to-pink-600" }
                            ].map((social, index) =>
                                React.createElement('a', {
                                    key: index,
                                    href: social.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    title: social.name,
                                    className: `w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-110`
                                }, React.createElement('i', {
                                    className: `${social.icon} text-sm`
                                }))
                            ))
                        ])
                    ])
                ]),
                
                React.createElement('div', {
                    key: 'form-section',
                    className: "lg:col-span-3 slide-in-right"
                }, [
                    React.createElement('div', {
                        key: 'form-container',
                        className: "bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8"
                    }, [
                        React.createElement('div', {
                            key: 'form-header',
                            className: "text-center mb-8"
                        }, [
                            React.createElement('h3', {
                                key: 'form-title',
                                className: "text-3xl font-bold text-gray-800 mb-3"
                            }, "Kirim Pesan"),
                            React.createElement('p', {
                                key: 'form-subtitle',
                                className: "text-gray-600"
                            }, "Kami akan merespons dalam 24 jam")
                        ]),
                        
                        submitStatus === 'success' && React.createElement('div', {
                            key: 'success-message',
                            className: "mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-700 rounded-xl fade-in"
                        }, React.createElement('div', {
                            className: "flex items-center"
                        }, [
                            React.createElement('div', {
                                key: 'success-icon',
                                className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                            }, React.createElement('i', {
                                className: "fas fa-check text-white text-xs"
                            })),
                            React.createElement('div', {
                                key: 'success-text'
                            }, [
                                React.createElement('p', {
                                    key: 'success-title',
                                    className: "font-semibold"
                                }, "Pesan Berhasil Dikirim!"),
                                React.createElement('p', {
                                    key: 'success-desc',
                                    className: "text-sm mt-1"
                                }, "Kami akan segera menghubungi Anda.")
                            ])
                        ])),
                        
                        submitStatus === 'error' && React.createElement('div', {
                            key: 'error-message',
                            className: "mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 text-red-700 rounded-xl fade-in"
                        }, React.createElement('div', {
                            className: "flex items-center"
                        }, [
                            React.createElement('div', {
                                key: 'error-icon',
                                className: "w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                            }, React.createElement('i', {
                                className: "fas fa-exclamation text-white text-xs"
                            })),
                            React.createElement('div', {
                                key: 'error-text'
                            }, [
                                React.createElement('p', {
                                    key: 'error-title',
                                    className: "font-semibold"
                                }, "Terjadi Kesalahan"),
                                React.createElement('p', {
                                    key: 'error-desc',
                                    className: "text-sm mt-1"
                                }, "Silakan coba lagi atau hubungi kami langsung.")
                            ])
                        ])),
                        
                        React.createElement('form', {
                            key: 'contact-form',
                            onSubmit: handleSubmit,
                            className: "space-y-6"
                        }, [
                            React.createElement('div', {
                                key: 'row-1',
                                className: "grid sm:grid-cols-2 gap-6"
                            }, [
                                React.createElement('div', {
                                    key: 'name-field',
                                    className: "form-group"
                                }, [
                                    React.createElement('label', {
                                        key: 'name-label',
                                        htmlFor: "name",
                                        className: "block text-sm font-semibold text-gray-700 mb-2"
                                    }, [
                                        "Nama Lengkap ",
                                        React.createElement('span', {
                                            key: 'required',
                                            className: "text-red-500"
                                        }, "*")
                                    ]),
                                    React.createElement('input', {
                                        key: 'name-input',
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleInputChange,
                                        required: true,
                                        className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/70 hover:bg-white focus:bg-white",
                                        placeholder: "Masukkan nama lengkap Anda"
                                    })
                                ]),
                                React.createElement('div', {
                                    key: 'email-field',
                                    className: "form-group"
                                }, [
                                    React.createElement('label', {
                                        key: 'email-label',
                                        htmlFor: "email",
                                        className: "block text-sm font-semibold text-gray-700 mb-2"
                                    }, [
                                        "Email ",
                                        React.createElement('span', {
                                            key: 'required',
                                            className: "text-red-500"
                                        }, "*")
                                    ]),
                                    React.createElement('input', {
                                        key: 'email-input',
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleInputChange,
                                        required: true,
                                        className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/70 hover:bg-white focus:bg-white",
                                        placeholder: "nama@email.com"
                                    })
                                ])
                            ]),
                            
                            React.createElement('div', {
                                key: 'row-2',
                                className: "grid sm:grid-cols-2 gap-6"
                            }, [
                                React.createElement('div', {
                                    key: 'phone-field',
                                    className: "form-group"
                                }, [
                                    React.createElement('label', {
                                        key: 'phone-label',
                                        htmlFor: "phone",
                                        className: "block text-sm font-semibold text-gray-700 mb-2"
                                    }, "Nomor Telepon"),
                                    React.createElement('input', {
                                        key: 'phone-input',
                                        type: "tel",
                                        id: "phone",
                                        name: "phone",
                                        value: formData.phone,
                                        onChange: handleInputChange,
                                        className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/70 hover:bg-white focus:bg-white",
                                        placeholder: "+62 xxx xxxx xxxx"
                                    })
                                ]),
                                React.createElement('div', {
                                    key: 'subject-field',
                                    className: "form-group"
                                }, [
                                    React.createElement('label', {
                                        key: 'subject-label',
                                        htmlFor: "subject",
                                        className: "block text-sm font-semibold text-gray-700 mb-2"
                                    }, [
                                        "Subjek ",
                                        React.createElement('span', {
                                            key: 'required',
                                            className: "text-red-500"
                                        }, "*")
                                    ]),
                                    React.createElement('select', {
                                        key: 'subject-select',
                                        id: "subject",
                                        name: "subject",
                                        value: formData.subject,
                                        onChange: handleInputChange,
                                        required: true,
                                        className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/70 hover:bg-white focus:bg-white appearance-none cursor-pointer"
                                    }, [
                                        React.createElement('option', { key: 'default', value: "" }, "Pilih subjek"),
                                        React.createElement('option', { key: 'konsultasi', value: "konsultasi" }, "Konsultasi Umum"),
                                        React.createElement('option', { key: 'satelit', value: "satelit" }, "Layanan Satelit"),
                                        React.createElement('option', { key: 'isp', value: "isp" }, "Layanan ISP"),
                                        React.createElement('option', { key: 'support', value: "support" }, "Technical Support"),
                                        React.createElement('option', { key: 'partnership', value: "partnership" }, "Kerjasama"),
                                        React.createElement('option', { key: 'other', value: "other" }, "Lainnya")
                                    ])
                                ])
                            ]),
                            
                            React.createElement('div', {
                                key: 'message-field',
                                className: "form-group"
                            }, [
                                React.createElement('label', {
                                    key: 'message-label',
                                    htmlFor: "message",
                                    className: "block text-sm font-semibold text-gray-700 mb-2"
                                }, [
                                    "Pesan ",
                                    React.createElement('span', {
                                        key: 'required',
                                        className: "text-red-500"
                                    }, "*")
                                ]),
                                React.createElement('textarea', {
                                    key: 'message-textarea',
                                    id: "message",
                                    name: "message",
                                    value: formData.message,
                                    onChange: handleInputChange,
                                    required: true,
                                    rows: 5,
                                    className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/70 hover:bg-white focus:bg-white resize-none",
                                    placeholder: "Ceritakan kebutuhan Anda atau pertanyaan yang ingin disampaikan..."
                                })
                            ]),
                            
                            React.createElement('div', {
                                key: 'submit-section',
                                className: "pt-6"
                            }, React.createElement('button', {
                                type: "submit",
                                disabled: isSubmitting,
                                className: `w-full py-4 px-8 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 transform ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed scale-95'
                                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 hover:shadow-2xl hover:scale-105'
                                } text-white relative overflow-hidden`
                            }, React.createElement('div', {
                                key: 'button-content',
                                className: "flex items-center justify-center relative z-10"
                            }, isSubmitting ? [
                                React.createElement('div', {
                                    key: 'loading-spinner',
                                    className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"
                                }),
                                "Mengirim Pesan..."
                            ] : [
                                React.createElement('i', {
                                    key: 'send-icon',
                                    className: "fas fa-paper-plane mr-3"
                                }),
                                "Kirim Pesan"
                            ])))
                        ])
                    ])
                ])
            ]),
            
            React.createElement('div', {
                key: 'why-choose-section',
                className: "mt-20 fade-in"
            }, [
                React.createElement('h3', {
                    key: 'why-title',
                    className: "text-3xl font-bold text-gray-800 mb-12 text-center"
                }, "Mengapa Memilih Kami?"),
                React.createElement('div', {
                    key: 'why-grid',
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                }, [
                    { icon: "fas fa-award", text: "Pengalaman 20+ tahun di bidang satelit", color: "from-yellow-400 to-orange-500" },
                    { icon: "fas fa-globe-asia", text: "Coverage seluruh Indonesia", color: "from-green-400 to-emerald-500" },
                    { icon: "fas fa-headset", text: "Layanan 24/7 support", color: "from-blue-400 to-cyan-500" },
                    { icon: "fas fa-rocket", text: "Teknologi terdepan", color: "from-purple-400 to-pink-500" },
                    { icon: "fas fa-users", text: "Tim profesional berpengalaman", color: "from-indigo-400 to-blue-500" },
                    { icon: "fas fa-shield-alt", text: "Jaminan kualitas layanan", color: "from-red-400 to-pink-500" }
                ].map((item, index) =>
                    React.createElement('div', {
                        key: index,
                        className: "service-card bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center group transition-all duration-300 hover:-translate-y-2"
                    }, [
                        React.createElement('div', {
                            key: 'icon-wrapper',
                            className: `w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`
                        }, React.createElement('i', {
                            className: `${item.icon} text-white text-xl`
                        })),
                        React.createElement('p', {
                            key: 'text',
                            className: "text-gray-700 font-semibold leading-relaxed"
                        }, item.text)
                    ])
                )),
                
                React.createElement('div', {
                    key: 'testimonial',
                    className: "bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto text-center"
                }, [
                    React.createElement('div', {
                        key: 'stars',
                        className: "flex justify-center mb-6 space-x-1"
                    }, Array.from({length: 5}, (_, i) => 
                        React.createElement('i', {
                            key: i,
                            className: "fas fa-star text-yellow-400 text-2xl"
                        })
                    )),
                    React.createElement('p', {
                        key: 'quote',
                        className: "text-gray-700 text-xl font-medium italic mb-4 leading-relaxed"
                    }, '"Solusi jaringan terbaik! Pelayanan cepat dan profesional."'),
                    React.createElement('p', {
                        key: 'author',
                        className: "text-gray-600 font-semibold"
                    }, "— Klien Puas")
                ])
            ])
        ])
    ]);
}

// Export for use in app.js
window.Contact = Contact;