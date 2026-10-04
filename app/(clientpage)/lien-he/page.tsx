'use client';

import React, { useState, useEffect } from 'react';
import { fetchRestaurantData } from "@/app/lib/data-fetcher";
import Head from 'next/head';

export default function ContactPage() {
    const [restaurantInfo, setRestaurantInfo] = useState<any>({});

    useEffect(() => {
        fetchRestaurantData().then(data => setRestaurantInfo(data));
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate an API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <Head>
                <title>Liên hệ | Nhà hàng Lán Kiên</title>
                <meta name="description" content="Liên hệ với nhà hàng Lán Kiên để đặt bàn, hỏi đáp về dịch vụ hoặc gửi góp ý. Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn." />
            </Head>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Liên Hệ Với Chúng Tôi</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Chúng tôi luôn sẵn sàng lắng nghe phản hồi và hỗ trợ bạn. Hãy điền thông tin vào mẫu bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Thông Tin Liên Hệ</h2>

                        <div className="space-y-8 flex-grow">
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 text-lg">Địa chỉ</h3>
                                    <p className='text-gray-600 mt-1'>{restaurantInfo?.address || 'Đang cập nhật...'}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 text-lg">Điện thoại</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href={`tel:+${restaurantInfo?.phone1?.replace(/\s+/g, '')}`} className="hover:text-indigo-600 transition-colors block">
                                            {restaurantInfo?.phone1 || 'Đang cập nhật...'}
                                        </a>
                                        {restaurantInfo?.phone2 && (
                                            <a href={`tel:+${restaurantInfo?.phone2?.replace(/\s+/g, '')}`} className="hover:text-indigo-600 transition-colors block mt-1">
                                                {restaurantInfo?.phone2}
                                            </a>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900 text-lg">Email</h3>
                                    <p className="text-gray-600 mt-1">
                                        <a href={`mailto:${restaurantInfo?.email}`} className="hover:text-indigo-600 transition-colors">
                                            {restaurantInfo?.email || 'Đang cập nhật...'}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="mt-10 rounded-xl overflow-hidden h-64 shadow-inner border border-gray-100">
                             <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3685.164492078776!2d104.29036267529945!3d22.53551007951816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMyJzA3LjgiTiAxMDTCsDE3JzM0LjYiRQ!5e0!3m2!1svi!2s!4v1756723428340!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{border:0}}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bản đồ đường đi"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Gửi Tin Nhắn</h2>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg flex items-center">
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                Cảm ơn bạn! Tin nhắn đã được gửi thành công.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                    placeholder="Ví dụ: Nguyễn Văn A"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="0912..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nội dung tin nhắn *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                                    placeholder="Bạn muốn hỏi về điều gì..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full py-4 px-6 rounded-lg text-white font-medium text-lg transition-all duration-200 shadow-md ${
                                    submitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
                                }`}
                            >
                                {submitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Đang gửi...
                                    </span>
                                ) : 'Gửi Tin Nhắn'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
