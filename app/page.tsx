import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Zap, ArrowRight, Monitor, Diamond } from 'lucide-react'; 

const clientLogos = [
    { name: 'Google', icon: 'Google' }, 
    { name: 'Nike', icon: 'Nike' },
    { name: 'Spotify', icon: 'Spotify' },
    { name: 'Netflix', icon: 'Netflix' },
    { name: 'Tesla', icon: 'Tesla' },
    { name: 'Apple', icon: 'Apple' },
    { name: 'Google', icon: 'Google' }, 
    { name: 'Nike', icon: 'Nike' },
    { name: 'Spotify', icon: 'Spotify' },
    { name: 'Netflix', icon: 'Netflix' },
    { name: 'Tesla', icon: 'Tesla' },
    { name: 'Apple', icon: 'Apple' },
];

export default function Home() {
    return (
        <div className="text-white relative overflow-x-hidden bg-white"> {/* Ana arka planı beyaz yaptık */}
          <header className="min-h-[100vh] flex flex-col justify-center items-center p-6 
                bg-gradient-to-t from-black via-purple-950 to-purple-900">
                <main className="text-center max-w-5xl">
            
                    <h1 className="text-2xl font-semibold tracking-widest mb-2 text-purple-400 opacity-80 uppercase">
                        Infofluencer Platformu
                    </h1>
                    
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-6 leading-tight sm:leading-snug">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
                            Etkiyi Yönetin.
                        </span> 
                        <br />
                        Veriyle Büyüyün.
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto">
                        Dünyanın en sofistike influencer pazarlama analitik platformu ile 
                        markanızın potansiyelini zirveye taşıyın, her kararı veriye dayandırın.
                    </p>

                    <Link href="/login" passHref>
                        <Button 
                            size="lg"
                            className="bg-purple-600 text-white hover:bg-purple-700 text-xl font-bold px-10 py-7 rounded-lg shadow-2xl shadow-purple-500/50 transition transform hover:scale-[1.03]"
                        >
                            Yönetim Paneline Giriş
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </main>
          </header>

          <section className="py-32 px-6 bg-white text-gray-900 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <Diamond className="h-12 w-12 text-purple-700 mx-auto mb-6" />
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
                        Sadece Veri Değil, <span className="text-purple-700">Stratejik Zeka.</span>
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-600">
                        Infofluencer, sıradan ölçüm araçlarının ötesine geçer. 
                        Size özel premium portföyler oluşturur, ROI'nizi maksimize eder ve 
                        marka hikayenizi doğru kitleye ulaştırmanızı garanti eder.
                    </p>
                </div>
          </section>

          <section className="py-12 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-600">
                Infofluencer'a Güvenen Büyük Markalar
              </h4>
            </div>
                
            <div className="flex w-full whitespace-nowrap animate-infinite-scroll">
             {clientLogos.map((logo, index) => (
             <div key={index} 
                 className="flex items-center justify-center w-60 h-20 mx-8 opacity-60 hover:opacity-100 transition duration-300">
                <span className="text-3xl font-extrabold text-gray-400">
                    {logo.name} 
                </span>
             </div>
        ))}
            </div>
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
          </section>

          <section className="py-28 px-6 flex flex-col items-center bg-purple-900 text-white">
            <div className="max-w-5xl w-full text-center mb-16">
                    <h4 className="text-sm font-semibold tracking-widest mb-3 text-purple-400 uppercase">
                        REKABET AVANTAJINIZ
                    </h4>
                    <h3 className="text-4xl md:text-5xl font-bold">Infofluencer Farkı</h3>
            </div>

            <div className="grid gap-10 md:grid-cols-3 text-left max-w-5xl w-full">
                    <FeatureCard 
                        icon={Monitor} 
                        title="Canlı Kampanya Takibi" 
                        description="Harcanan her kuruşun etkisini gerçek zamanlı takip edin. Verilere anında ulaşın." 
                    />
                    <FeatureCard 
                        icon={Award} 
                        title="Eşsiz Influencer Veritabanı" 
                        description="Yapay zeka destekli filtrelerle ideal partnerinizi dakikalar içinde bulun." 
                    />
                    <FeatureCard 
                        icon={Zap} 
                        title="Tahmine Dayalı ROI" 
                        description="Kampanya başlamadan potansiyel yatırım geri dönüşünüzü net bir şekilde görün." 
                    />
            </div>
          </section>

            <footer className="py-8 text-sm text-gray-500 text-center bg-black"> {/* Footer'ı daha siyah yaptık */}
                © {new Date().getFullYear()} Infofluencer. Tüm Hakları Saklıdır.
            </footer>
        </div>
    );
}

// =======================================================
// YARDIMCI BİLEŞEN: FeatureCard (Mor zemine uyumlu)
// =======================================================
interface FeatureCardProps {
    icon: any; 
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    // ✨ GÜNCELLEDİ: Arka planı daha şeffaf yaptık, çerçeveyi ve gölgeyi koruduk.
    <div className="p-8 bg-purple-900/40 rounded-lg border border-purple-700/70 shadow-2xl transition-transform duration-300 hover:shadow-purple-500/30 hover:scale-[1.03]">
        <Icon className="h-10 w-10 text-purple-400 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);