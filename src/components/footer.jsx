import LOGO from '../images/logoDark.png'
import { useTranslation } from 'react-i18next';
import { Button, message, Space } from 'antd';

export default function App(){
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();

    const warning = () => {
        
        messageApi.open({
          type: 'warning',
          content: t("err_IOS"),
        });
      };


      const downloadFiles = () => {
        window.open("https://play.google.com/store/apps/details?id=com.almonazim", '_blank'); // فتح الرابط الأول
    };

    const phoneNumber = '+963993753015';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        alert('تم نسخ الرقم إلى الحافظة!');
      })
      .catch(err => {
        console.error('فشل النسخ: ', err);
      });
  };

    return(
        <div>
            {contextHolder}
            <div class=" footer_bg">
                <div class="max-w-2xl mx-auto text-black py-10">
                    <div class="text-center">
                        <h3 class="text-3xl mb-3 flex justify-center"> 
                            <img src={LOGO} className=' logo_img_footer' />
                        </h3>
                        
                        
                        <div className='text-2xl pt-2'>
                        {t("download_app_now")}
                        </div>
                        <div class=" my-10 mobile_fotter">
                            <div onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.almonazim", '_blank') } class="border-app flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                                <div class="text-left ml-3">
                                    <p class='text-xs text-gray-900'>Download on </p>
                                    <p class="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div onClick={()=>window.open("https://apps.apple.com/iq/app/almonazim-%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85/id6751020021", '_blank') } className="border-app flex items-center border border-gray-900 w-auto rounded-lg px-4 py-2 w-44 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
                                <div  class="text-left ml-3">
                                    <p class='text-xs text-gray-900'>Download on </p>
                                    <p class="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                            <div  onClick={()=>window.open("https://almonazim.com/المنظم.exe", '_blank')} className="border-app flex items-center border border-gray-900 w-auto rounded-lg px-4 py-2 w-44 mx-2">
                                <img src="https://img.icons8.com/color/48/windows-10.png" alt="windows-10" class="w-7 md:w-8" />
                                <div  class="text-left ml-3">
                                    <p class='text-xs text-gray-900'>Download for </p>
                                    <p class="text-sm md:text-base"> windows </p>
                                </div>
                            </div>
                        </div>

                        <p className='p-2'>
                            {t("Contact_us")}
                        </p>
                        <p>
                        <a href={"tel:"+phoneNumber}> {phoneNumber}</a>
                        </p>
                        <p>
                        <a href="mailto:support@almonazim.com" > support@almonazim.com </a>
                        </p>

                        <div>
                        <div class="shareArticle flex justify-center mt-3">
                            
                            <div class="shareSocial">
                                <ul class="socialList">
                                    <li>
                                        <a className='social_link' href="https://www.facebook.com/profile.php?id=61575955096794&mibextid=ZbWKwL">
                                            <svg  width="20" height="20"  class="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='social_link' href="https://www.instagram.com/almonazim?igsh=MWhlOGM3cGg4NjdjOA==">
                                            <svg  width="20" height="20"  class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                            </svg>  
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a className='social_link' href="https://www.youtube.com/@%D8%A7%D9%84%D9%85%D9%86%D8%B8%D9%85-%D8%B21%D8%AC1%D8%AA">
                                            <svg  width="20" height="20" class="bi bi-youtube" viewBox="0 0 16 16">
                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                                            </svg>    
                                        </a>
                                    </li>
                                    <li>
                                        <a  className='social_link'  href="https://wa.me/963993753015" >
                                            <svg  width="20" height="20" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                         
                    </div>
                    <div id="Contact_us" class="mt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-800">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Al Monazim, 2025. </p>
                        <div class="order-1 md:order-2">
                            <a href='plans' class="px-2 ">Prices</a>
                            <span class="px-2 border-l">Contact us</span>
                            <a href="/privacy-policy" class="px-2 border-l">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}