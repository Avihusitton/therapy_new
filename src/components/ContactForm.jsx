// @ts-nocheck
// [Category B: Functional / Logic]
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: ''
    });
    const [honeypot, setHoneypot] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const isValidPhone = (phone) => {
        const digitsOnly = phone.replace(/\D/g, '');
        // פשוט מוודא שיש מספיק ספרות (בין 9 ל-13 ספרות מתאים לרוב הפורמטים בישראל)
        return digitsOnly.length >= 9 && digitsOnly.length <= 13;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot check
        if (honeypot) {
            console.warn("Spam submission blocked");
            setIsSuccess(true);
            return;
        }

        if (!formData.full_name.trim() || !formData.phone.trim()) {
            alert('אנא מלא את השם ומספר הטלפון');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            alert('אנא הזן מספר טלפון תקין (למשל: 054-1234567)');
            return;
        }

        setIsSubmitting(true);

        try {
            let formattedPhone = formData.phone.trim();
            if (formattedPhone.startsWith('0')) {
                formattedPhone = '972' + formattedPhone.substring(1);
            }
            formattedPhone = formattedPhone.replace(/\D/g, '');

            const messageText = `היי ${formData.full_name}, ראיתי שהשארת פרטים באתר, אשמח לעזור! מתי נוח לך שנדבר?`;
            const whatsappLink = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(messageText)}`;

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    website: honeypot,
                    date: new Date().toLocaleDateString('he-IL'),
                    time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' }),
                    whatsapp_link: whatsappLink,
                    source: 'therapy-new-stage'
                }),
            });

            if (!response.ok) {
                console.error("Webhook error status:", response.status);
                throw new Error(`Webhook request failed with status ${response.status}`);
            }


            if (typeof window !== 'undefined' && typeof gtag === 'function') {
                gtag('event', 'lead_form_submit', {
                    event_category: 'lead',
                    event_label: 'contact_form'
                });
            }
            setIsSuccess(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('אירעה שגיאה בשליחת הטופס. ייתכן שיש בעיית חיבור לשרת. ניתן ליצור קשר ישירות בווטסאפ או בטלפון.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-10 text-center"
                >
                    <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto mb-4" />
                    <h3 className="text-2xl text-[#4C4A49] mb-2">תודה רבה, {formData.full_name}!</h3>
                    <p className="text-[#4A4847]">
                        הפרטים שלך התקבלו בהצלחה. <br />אצור איתך קשר בהקדם.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl text-[#4C4A49] mb-4">צור קשר</h3>
                    <p className="text-[#4A4847]">השאר פרטים ונחזור אליך בהקדם לשיחת היכרות</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Honeypot field - hidden from real users */}
                    <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                        <label htmlFor="website">website</label>
                        <input
                            id="website"
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                        <div>
                            <label htmlFor="full_name" className="sr-only">שם מלא</label>
                            <Input
                                id="full_name"
                                value={formData.full_name}
                                onChange={(e) => handleInputChange('full_name', e.target.value)}
                                placeholder="השם שלך"
                                required
                                autoComplete="name"
                                disabled={isSubmitting}
                                className="text-right bg-transparent border-0 border-b border-[#D3C1B1] rounded-none focus:border-[#A2673E] px-0 disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">מספר טלפון</label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="מספר הטלפון שלך"
                                required
                                autoComplete="tel"
                                disabled={isSubmitting}
                                className="text-right bg-transparent border-0 border-b border-[#D3C1B1] rounded-none focus:border-[#A2673E] px-0 disabled:opacity-50"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "8px" }}>
                            לתשומת לבך — טופס זה מיועד ליצירת קשר ראשוני בלבד.
                            אין לשלוח מידע קליני או רגיש דרך טופס זה.
                        </p>

                        <div className="flex items-start gap-3 text-right">
                            <input
                                type="checkbox"
                                id="marketing-consent"
                                name="marketingConsent"
                                defaultChecked={false}
                                required={false}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#8B9F6B] focus:ring-[#8B9F6B]"
                            />
                            <label htmlFor="marketing-consent" className="text-sm text-[#4A4847] leading-tight select-none cursor-pointer">
                                אני מאשר/ת קבלת עדכונים על סדנאות וקבוצות טיפוליות עתידיות
                                למייל ולנייד
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#8B9F6B] hover:bg-[#7a8c5e] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    שולח...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    שליחת פרטים
                                </>
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                if (typeof gtag === 'function') {
                                    gtag('event', 'click_phone', {
                                        event_category: 'lead',
                                        event_label: 'phone_cta'
                                    });
                                }
                                if (typeof window !== 'undefined') {
                                    window.open('tel:053-285-3235', '_self');
                                }
                            }}
                            disabled={isSubmitting}
                            className="border border-[#A2673E] text-[#A2673E] hover:bg-[#A2673E] hover:text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                        >
                            התקשר ישירות
                        </Button>
                    </div>
                </form>

                <div className="text-center mt-6 text-sm text-[#8B9F6B]">
                    הפרטים שלך נשמרים בדיסקרטיות מלאה
                </div>
            </div>
        </div>
    );
}