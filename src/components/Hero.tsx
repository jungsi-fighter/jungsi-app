import { motion } from 'framer-motion';

export default function Hero() {
  const rollingImagesA = [
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/bg9TFV/btsLOq7j1E9/9haRzcSWw4voteltkDVYlK/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/nRaf5/btsLO0ttFJP/VkAjFlFKhw1bptpncDFXtK/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/opQjM/btsLOrkQV06/wTKNuC6sqNRSQ7rfxJzkZK/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/uu6H0/btsLOEdaO5J/g8RUxjeUKoKudKlKAyhyi0/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/ox8mm/btsLOaKo893/dGEXL47hvdJ9aDcuD56xj1/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/xnG9C/btsLN7mAWvt/KPx8UBsnPE3Vkbfh8fdrvK/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/CVI1f/btsLQIdN4xt/3dVpXBH2h7P9nTow3RGV21/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/1dwiP/btsLN3R25vH/TR4QyuNl5MTlYDnOlnDfM1/img.png'
  ];
  const rollingImagesB = [
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/zYBnJ/btsLOKdo9IR/GmJhggIpQ9HO3ka6Q83KRK/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/dZebjJ/btsLPsXjqFM/vPN9BlsimQSwUcnIGA71K1/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/s04Eu/btsLO7MHScG/1pbStGxqzPEvZS8ESs2xak/img.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/cT2jHF/btsLSfDHOwa/14axyj9DQx0BaRg8Vsz0K1/img.webp',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/dV1eVO/btsLRketQwN/CVYBJ1T74cNVDdyDQAk2mk/img.webp',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/kXlg6/btsLRQxcddV/AmWpHdkFeKyUZ3lYc6s3OK/img.webp',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/da8did/btsLSfjqyyh/r4zVYniIhjbVM3MacBcDN0/img.webp',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/bkLKMl/btsLRO0tcXv/cCXtNdnWK3REKFJpTvpDo0/img.webp'
  ];
  const allMobileImages = [...rollingImagesA, ...rollingImagesB];

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Spark GIF Overlay */}
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjlxd3A4cDlvMzUxbTh6aDd3Z2R5ZWlvcWJuZzU5b3Y4ZHR2dW04dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q4voi8znbYANE5GtYI/giphy.gif"
        alt="Sparks"
        className="absolute inset-0 w-full h-full object-cover z-80 opacity-40"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content container */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:h-screen h-auto px-4 pt-20 lg:pt-0 z-30"> 
      
        {/* Text block */}
        <div className="w-full lg:w-1/2 text-white space-y-6">
          <p className="text-lg">
            입시생의 <span className="bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-300 to-white animate-flicker">마지막 합격 프로젝트</span>
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            입시전문가가 관리하는<br />
            <span className="bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-300 animate-flicker">정시파이터</span>
          </h1>
          <div className="flex space-x-4 pt-4">
            <img src="/logo1.png" alt="Logo1" className="h-12" />
            <img src="/logo2.png" alt="Logo2" className="h-12" />
          </div>
        </div>

        {/* Mobile horizontal auto-roll banner */}
        <div className="lg:hidden w-full overflow-hidden py-4 mt-8">
          <div className="whitespace-nowrap animate-scroll-x flex items-center space-x-4">
            {allMobileImages.concat(allMobileImages).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`후기${(idx % allMobileImages.length) + 1}`}
                className="inline-block w-64 h-48 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* Desktop vertical roll banner */}
        <div className="hidden lg:flex lg:w-1/2 pl-8 space-x-4">
          <div className="overflow-hidden h-96">
            <div className="animate-scroll flex flex-col space-y-4">
              {rollingImagesA.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`후기${idx + 1}`}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              ))}
            </div>
          </div>
          <div className="overflow-hidden h-96">
            <div className="animate-scroll delay-2s flex flex-col space-y-4">
              {rollingImagesB.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`후기${idx + rollingImagesA.length + 1}`}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
