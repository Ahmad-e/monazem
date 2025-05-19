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
        window.open("https://almonazim.com/المنظم.apk", '_blank'); // فتح الرابط الأول
    console.log(1)
        // إضافة تأخير قبل فتح الرابط الثاني
        setTimeout(() => {
           window.open("https://almonazim.com/المنظم_فواتير.apk", '_blank'); // فتح الرابط الثاني
           console.log(2)
        }, 4000);
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
                        <p className='p-2'>
                            {t("Contact_us")}
                        </p>
                        <p>
                        <a href="https://wa.me/963993753015"> + 963993753015 </a>
                        </p>
                        <p>
                        <a href="mailto:support@almonazim.com" > support@almonazim.com </a>
                        </p>
                        
                        
                        <div class="flex justify-center my-10">
                            <div onClick={()=>downloadFiles() } class="border-app flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                                <div class="text-left ml-3">
                                    <p class='text-xs text-gray-900'>Download on </p>
                                    <p class="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div  onClick={()=>warning()} className="border-app flex items-center border border-gray-900 w-auto rounded-lg px-4 py-2 w-44 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
                                <div  class="text-left ml-3">
                                    <p class='text-xs text-gray-900'>Download on </p>
                                    <p class="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-800">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Al Monazim, 2025. </p>
                        <div class="order-1 md:order-2">
                            <span class="px-2">About us</span>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}