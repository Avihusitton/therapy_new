import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const sendToWhatsApp = () => {
        const phoneNumber = '972532853235';
        const message = `היי אביהו, אני ${formData.full_name || '[שם]'}.
הטלפון שלי: ${formData.phone || '[טלפון]'}
הגעתי דרך האתר ואשמח לשוחח על טיפול רגשי ולקבוע שיחת היכרות.`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.full_name.trim() || !formData.phone.trim()) {
            alert('אנא מלא את השם ומספר הטלפון');
            return;
        }
        sendToWhatsApp();
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl text-[#4C4A49] mb-4">צור קשר</h3>
                    <p className="text-[#6B6867]">מלא את הפרטים ותועבר ישירות לווטסאפ עם הודעה מוכנה</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <Input
                                value={formData.full_name}
                                onChange={(e) => handleInputChange('full_name', e.target.value)}
                                placeholder="השם שלך"
                                required
                                className="text-right bg-transparent border-0 border-b border-[#D3C1B1] rounded-none focus:border-[#A2673E] px-0"
                            />
                        </div>
                        <div>
                            <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="מספר הטלפון שלך"
                                required
                                className="text-right bg-transparent border-0 border-b border-[#D3C1B1] rounded-none focus:border-[#A2673E] px-0"
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            type="submit"
                            className="bg-[#25D366] hover:bg-[#20c05a] text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <MessageCircle className="w-5 h-5" />
                            שלח הודעה בווטסאפ
                        </Button>
                        
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => window.open('tel:0532853235', '_self')}
                            className="border border-[#A2673E] text-[#A2673E] hover:bg-[#A2673E] hover:text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <Send className="w-5 h-5" />
                            התקשר ישירות
                        </Button>
                    </div>
                </form>
                
                <div className="text-center mt-6 text-sm text-[#8B9F6B]">
                    לחיצה על הכפתור תפתח את ווטסאפ עם הודעה מוכנה הכוללת את הפרטים שלך
                </div>
            </div>
        </div>
    );
}