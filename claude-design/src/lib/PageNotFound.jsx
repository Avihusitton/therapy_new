import { useLocation } from 'react-router-dom';

export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FDF8F0]">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-7xl font-light text-[#A2673E]">404</h1>
                        <div className="h-0.5 w-16 bg-[#D3C1B1] mx-auto"></div>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-medium text-[#4C4A49]">
                            העמוד לא נמצא
                        </h2>
                        <p className="text-[#6B6867] leading-relaxed">
                            העמוד שניסית להגיע אליו <span className="font-medium">"{pageName}"</span> אינו קיים.
                        </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-6 py-3 text-lg font-light text-white bg-[#A2673E] rounded-lg hover:bg-[#8d5a36] transition-colors duration-200"
                        >
                            חזרה לדף הבית
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}