import BookMerlin from '@/components/books/book-merlin'
import ExpertiseSection from '@/components/expertise'
import FormMerlin from '@/components/forms/form-merlin'
import HeaderMerlin from '@/components/headers/header-merlin'
import NavbarMerlin from '@/components/navbars/navbar-merlin'
import PricingMerlin from '@/components/pricings/pricing-merlin'
import Slide from '@/components/slide'
import Image from 'next/image'
import { BluuNextBold, BluuNextTitling, Minecraft } from "@/app/fonts";

export default function Merlin() {
  return (
    <main className="min-h-screen scroll-smooth h-[100vh] overflow-x-hidden	">
      <NavbarMerlin />
      <HeaderMerlin />
      <div className='flex flex-col gap-20 mt-20'>
        {/* <Image className="mx-auto rounded-md" width={960} height={600} alt="BookMerlin" src="/merlin.svg" objectFit="contain" /> */}
        <p className={"text-3xl mx-auto text-center z-20 max-w-[800px] px-10 " + BluuNextTitling.className}>Découvrez <span className='text-primary'>Merlin</span>, notre service d&apos;excellence dédié à la gestion automatisée des avis sur Google My Business. Doté d&apos;une <span className='text-primary'>intelligence artificielle avancée</span>, Merlin s&apos;engage à transformer votre interaction avec les clients en ligne de manière inédite.</p>
        <p className={"text-3xl mx-auto text-center z-20 max-w-[800px] px-10 " + BluuNextTitling.className}>Merlin s&apos;intègre parfaitement à votre compte Google My Business, permettant <span className='text-primary'>une réponse instantanée et authentique à chaque nouveau commentaire</span>. Avec une approche personnalisée, notre service adapte ses réponses pour maintenir la voix distinctive de votre marque, renforçant ainsi votre présence en ligne de manière cohérente.</p>
      </div>
      <div id="more" className='flex flex-col relative bg-color1 mt-56 justify-center items-center px-10'>
        <svg className='absolute top-[-72px]' width="1728" height="72" viewBox="0 0 1728 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1728 72C1151.99 72 575.996 72 0 72C0 66.0348 0 60.0697 0 54.1153C0.4536 54.0937 0.918 54.083 1.3824 54.0614C8.1756 53.8245 14.9364 54.0399 21.6864 54.2445C29.1708 54.4814 36.6336 54.7075 44.1288 54.3306C49.5828 54.0507 54.4752 53.3077 58.698 50.3897C62.0784 48.0424 66.2256 47.3425 70.6644 46.9872C74.9196 46.5565 79.11 45.8028 83.1816 44.7261C88.1604 43.5416 93.096 42.2388 98.0316 40.9359C98.0424 40.9359 98.0532 40.9359 98.064 40.9359C98.3016 41.0113 98.55 41.0974 98.7876 41.1836C100.559 40.6021 102.341 40.0314 104.112 39.4715C105.311 39.8807 106.607 39.8269 107.881 39.7084C113.054 36.0367 118.994 35.2292 124.934 34.4108C126.133 34.4431 127.267 34.6154 128.282 35.0892C133.423 34.5508 138.175 32.9788 142.063 29.1779C143.608 28.1657 145.357 27.4658 147.128 27.4012C151.081 26.3783 154.872 25.0109 157.712 21.5653C158.652 20.6823 160.585 20.4024 162.076 20.3378C163.836 20.2409 165.596 20.1332 167.357 20.0255C168.264 20.0794 169.182 20.1332 170.089 20.1332C177.811 19.724 185.544 19.2933 193.266 19.2718C202.856 19.261 212.436 19.5087 222.026 19.7563C226.433 19.8748 230.85 19.9932 235.256 20.0901C237.276 20.1332 239.296 20.1332 241.315 20.1224C243.886 20.1117 246.326 20.327 248.821 20.6716C252.871 21.07 256.154 19.7348 259.762 17.9259C263.099 15.977 266.879 14.771 270.637 13.5758C272.894 13.4143 275.184 12.8867 277.441 12.3268C283.781 9.90412 290.315 10.0118 296.86 10.1195C299.236 10.1625 301.622 10.2271 303.998 10.1948C306.072 10.1733 308.146 9.96873 310.219 9.75338C312.584 9.60263 314.96 9.44112 317.336 9.35498C323.676 9.06426 330.037 8.77354 336.388 8.74124C343.019 8.6551 349.672 8.83814 356.292 9.10733C364.867 9.68877 373.432 10.3671 381.996 11.0347C382.266 11.0132 382.547 10.9916 382.817 10.9701C385.096 11.0993 387.385 11.2177 389.675 11.3362C392.202 11.53 394.729 11.7454 397.256 11.9607C397.796 11.9176 398.347 11.8638 398.898 11.8315C404.244 12.0684 409.601 12.3053 414.958 12.4775C425.682 13.1559 436.406 13.8127 447.12 14.448C449.723 15.1479 452.412 15.1048 455.015 14.7064C464.065 10.9163 473.634 9.73184 483.354 8.48282C490.936 7.2984 498.571 6.73849 506.239 6.68465C508.453 6.76003 510.656 5.98477 512.881 5.17721C514.188 4.68191 515.506 4.16507 516.856 3.85281C517.309 3.7236 517.774 3.5944 518.238 3.46519C518.573 3.56209 518.929 3.659 519.264 3.61593C522.461 2.86221 525.744 2.20539 528.854 2.65763C536.328 3.58363 543.834 3.15293 551.221 1.69932C564.797 -0.895632 578.34 -0.174212 591.926 1.57012C594.14 1.82853 596.387 1.89314 598.622 1.94698C600.188 1.99005 601.744 2.02235 603.288 2.10849C607.532 2.34537 611.118 3.29291 613.872 6.3724C615.157 7.75063 616.82 8.87045 618.754 9.63493C620.687 10.3994 622.814 10.7871 624.964 10.7547C626.098 10.6901 627.232 10.7332 628.344 10.8732C642.686 13.8342 657.342 14.3295 671.998 14.8141C676.253 14.9541 680.508 15.1048 684.763 15.2986C687.582 15.3955 690.401 15.2232 693.166 14.8033C705.359 12.9836 717.703 11.9607 730.102 11.7346C735.372 11.6808 740.513 11.0885 744.908 8.13826C746.14 7.3307 747.824 6.94307 749.488 6.55544C750.028 6.42623 750.578 6.29703 751.097 6.15705C751.615 6.01707 752.177 5.96324 752.738 5.9094C753.516 5.82326 754.294 5.73712 754.909 5.43563C760.579 2.67916 766.67 2.92681 772.794 3.18523C773.788 3.2283 774.77 3.27137 775.764 3.30368C784.21 3.55133 792.688 3.7236 801.101 3.88512C803.099 3.91742 805.086 3.96049 807.084 4.00356C808.099 3.97126 809.104 3.94972 810.108 3.94972C817.625 4.1543 825.12 4.39119 832.626 4.49886C835.531 4.35888 838.415 3.99279 841.266 3.41135C842.432 3.30367 843.61 3.15293 844.787 2.95911C848.059 2.7007 851.342 2.43151 854.647 2.39921C866.786 1.72086 878.926 1.07481 891.065 0.514906C893.322 0.417999 895.59 0.547208 897.858 0.676417C897.977 0.676417 898.096 0.665649 898.225 0.654882C899.554 0.687184 900.893 0.719486 902.232 0.741021C905.623 0.880998 909.014 1.01021 912.406 1.13942C913.723 1.09635 915.03 1.04251 916.337 0.967139C926.456 1.27939 936.576 1.54858 946.685 1.99005C952.733 2.3346 958.748 2.96988 964.775 3.60516C964.991 3.58363 965.207 3.56209 965.423 3.54056C967.982 3.27137 970.542 2.99142 973.112 2.7007C974.862 2.84067 976.601 2.91605 978.35 2.98065C996.538 4.90802 1014.71 6.88924 1032.88 8.93505C1034.69 9.09656 1036.47 9.66724 1038.24 10.2487C1038.31 10.2164 1038.39 10.1841 1038.45 10.1518C1039.23 10.3348 1040.01 10.5179 1040.8 10.7117C1042.04 10.7978 1043.26 10.9486 1044.49 11.1101C1045.72 11.4439 1046.95 11.7884 1048.22 11.8638C1053.39 12.4883 1058.56 13.0482 1063.75 13.6081C1066.79 13.8773 1069.85 14.1465 1072.89 14.3618C1075.17 14.2003 1077.47 14.2326 1079.78 14.3188C1082.8 14.5772 1085.79 14.8464 1088.72 15.5463C1096.96 17.6351 1105.32 18.1412 1113.71 18.2812C1115.05 18.3027 1116.39 18.3243 1117.72 18.3458C1117.72 18.3458 1117.72 18.3458 1117.74 18.3458C1119.1 18.3243 1120.47 18.3027 1121.82 18.4104C1122.75 18.475 1123.66 18.6365 1124.58 18.7873C1134.26 18.9595 1143.97 19.1318 1153.6 18.3781C1160.14 17.872 1166.65 16.7845 1173.16 15.697C1173.74 15.7939 1174.34 15.8908 1174.93 15.977C1179.69 15.3201 1184.44 14.6203 1189.2 14.0281C1194.04 13.6297 1198.9 13.5543 1203.72 13.8342C1212.13 14.0065 1220.53 14.3618 1228.93 14.9864C1243.33 16.1169 1257.71 17.1398 1272.18 16.3C1275.78 16.0846 1279.29 16.7307 1282.8 17.3875C1285.05 17.5167 1287.26 17.5598 1289.49 17.5382C1296.28 18.4535 1302.89 20.0255 1309.51 21.6083C1312.75 22.3728 1316 23.1481 1319.28 23.8372C1320.97 24.2571 1322.67 24.5909 1324.37 24.9139C1324.92 24.8063 1325.47 24.6986 1326 24.4509C1330.26 25.0755 1334.51 25.7646 1338.61 27.552C1341.59 28.4134 1344.7 28.8656 1347.85 28.8871C1353.46 29.2963 1359.07 29.6624 1364.68 30.0069C1371.25 30.5561 1377.84 31.0729 1384.4 31.7082C1387.1 31.902 1389.77 32.3004 1392.44 32.7311C1395.9 33.151 1399.29 33.4741 1402.65 33.1726C1409.38 33.711 1415.7 35.003 1421.61 38.8686C1422.8 39.4285 1424.17 39.7084 1425.48 39.8269C1427.32 40.4083 1429.19 41.0005 1430.49 42.7664C1430.7 42.9494 1430.94 43.0894 1431.21 43.1863C1431.96 43.3909 1432.68 43.2401 1433.4 43.0248C1437.42 42.1849 1440.95 43.4555 1444.51 44.7476C1446.27 45.3183 1448.04 45.9105 1449.87 46.3089C1451.74 46.7073 1453.65 46.9549 1455.55 47.0626C1458.11 47.181 1460.65 47.2564 1463.18 47.2779C1467.4 47.4395 1471.59 47.5364 1475.76 47.9994C1477.94 48.1824 1480.05 48.7961 1482.19 49.453C1484.18 50.0236 1486.17 50.6266 1488.21 50.9496C1490.63 51.3588 1493.1 51.4449 1495.58 51.5095C1497.67 51.5095 1499.75 51.488 1501.82 51.5526C1506.11 51.9833 1510.4 52.5863 1514.68 53.2216C1515.18 53.2539 1515.72 53.2646 1516.18 53.2C1517.8 52.9524 1519.43 53.1354 1520.62 54.083C1523.97 56.8717 1527.08 56.3872 1530.49 54.589C1534.66 52.6617 1539.01 52.7693 1543.47 53.4262C1553.69 55.655 1564.07 55.795 1574.45 55.9242C1575.09 55.9242 1575.75 55.9457 1576.39 55.9888C1578.19 56.5272 1580.06 56.5702 1581.9 56.3764C1590.07 52.7909 1598.67 51.7464 1607.41 51.3803C1609.34 51.7034 1611.28 51.4772 1613.19 51.0465C1618.7 48.6346 1624.41 48.6992 1630.2 48.7531C1630.3 48.7531 1630.42 48.7531 1630.54 48.7531C1632.25 48.7638 1633.8 48.4301 1635.34 47.9132C1641.7 47.784 1647.14 50.1098 1652.29 53.7599C1655 54.6321 1657.94 55.1059 1660.91 55.1705C1671.3 55.7196 1681.7 56.2688 1692.09 56.5702C1697.2 56.5487 1702.29 56.3118 1707.32 55.8381C1709.05 56.0319 1710.76 55.515 1712.29 54.5783C1715.37 51.8326 1718.92 51.3696 1722.77 51.4449C1723.7 51.4557 1724.64 51.4342 1725.57 51.4019C1726.39 53.0062 1727.2 54.6106 1728 56.2472C1728 61.5017 1728 66.7455 1728 72Z" fill="#E3DFD6" />
        </svg>
        <h2 className={"select-none text-8xl sm:text-9xl mt-auto z-20 text-color2 " + BluuNextTitling.className}>merlin</h2>
        <p className={"select-none text-4xl sm:text-6xl mt-auto z-20 text-color2 " + Minecraft.className}>instructions</p>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center mt-20 sm:mt-40'>
          <div className='relative h-36 w-36 sm:h-56 sm:w-56 flex justify-center items-center'>
            <svg className='absolute h-full w-full' viewBox="0 0 232 233" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M116.999 230.105C121.949 229.527 126.831 228.573 131.644 227.243C136.566 226.911 141.43 226.206 146.235 225.129C150.947 223.677 155.522 221.874 159.959 219.72C164.592 218.043 169.065 216.024 173.38 213.66C178.149 211.94 182.749 209.873 187.179 207.46C190.735 203.89 194.005 200.067 196.99 195.991C200.293 192.327 203.299 188.431 206.009 184.305C209.232 180.576 212.152 176.623 214.768 172.445C217.117 168.116 219.122 163.632 220.784 158.993C222.671 154.461 224.203 149.811 225.381 145.041C226.703 140.315 227.654 135.516 228.232 130.645C228.933 125.789 229.254 120.907 229.197 116C229.269 111.093 228.969 106.207 228.297 101.344C227.69 96.4727 226.714 91.6776 225.37 86.9585C224.459 82.102 223.18 77.3503 221.532 72.7034C219.458 68.2228 217.055 63.9228 214.324 59.8034C212.076 55.4167 209.51 51.2251 206.627 47.2286C203.476 43.4418 200.05 39.915 196.35 36.6485C193.04 32.9989 189.474 29.6276 185.651 26.5344C181.748 23.5208 177.636 20.8252 173.315 18.4476C169.022 16.0627 164.566 14.0175 159.948 12.3119C155.526 10.115 150.965 8.26848 146.268 6.77251C141.585 5.05251 136.801 3.70109 131.915 2.71823C126.936 2.53033 121.964 2.72184 116.999 3.29277C112.063 3.09041 107.142 3.26386 102.235 3.8131C97.3708 4.68033 92.6011 5.91251 87.9253 7.50966C83.0905 8.49974 78.3641 9.85478 73.7461 11.5748C69.2799 13.6634 64.9979 16.0807 60.9003 18.827C56.5208 21.089 52.3437 23.669 48.3689 26.567C44.4736 29.5806 40.8312 32.8724 37.4418 36.4425C33.9946 39.9403 30.8328 43.6839 27.9565 47.6731C24.9357 51.5395 22.2292 55.6155 19.8371 59.901C16.679 63.7963 13.8388 67.9048 11.3166 72.2265C9.35089 76.8228 7.74652 81.5455 6.50349 86.3948C5.80249 91.338 5.48089 96.3137 5.53871 101.322C4.20173 106.149 3.24417 111.042 2.66602 116C3.31644 120.95 4.33904 125.832 5.73383 130.645C6.03013 135.574 6.70223 140.448 7.75013 145.269C9.26055 149.966 11.1251 154.523 13.3437 158.938C14.6807 163.73 16.3754 168.387 18.4279 172.912C20.6827 177.37 23.259 181.634 26.157 185.703C29.438 189.461 32.99 192.955 36.8131 196.186C40.2314 199.792 43.9027 203.113 47.8269 206.148C51.4837 209.595 55.379 212.739 59.5127 215.579C63.9284 217.957 68.4994 219.987 73.2258 221.671C78.0606 222.95 82.9712 223.854 87.9578 224.381C92.5541 226.34 97.2696 227.937 102.104 229.173C107.04 229.859 112.005 230.17 116.999 230.105Z" stroke="#0F0F0F" stroke-width="5" />
            </svg>
            <p className={"select-none text-8xl sm:text-9xl z-20 text-color2 " + BluuNextTitling.className}>1</p>
          </div>
          <p className={"w-full text-3xl mx-auto text-center sm:text-left z-20 max-w-[800px] text-color2 " + BluuNextTitling.className}>Connectez facilement Merlin à votre compte Google My Business pour lui permettre un accès direct aux commentaires de votre entreprise, assurant ainsi des réponses automatisées instantanées.</p>
        </div>
        <div className='flex flex-col sm:flex-row-reverse gap-10 sm:gap-20 justify-center items-center mt-20'>
          <div className='relative h-36 w-36 sm:h-56 sm:w-56 flex justify-center items-center'>
            <svg className='absolute h-full w-full' viewBox="0 0 232 233" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M116.999 230.105C121.949 229.527 126.831 228.573 131.644 227.243C136.566 226.911 141.43 226.206 146.235 225.129C150.947 223.677 155.522 221.874 159.959 219.72C164.592 218.043 169.065 216.024 173.38 213.66C178.149 211.94 182.749 209.873 187.179 207.46C190.735 203.89 194.005 200.067 196.99 195.991C200.293 192.327 203.299 188.431 206.009 184.305C209.232 180.576 212.152 176.623 214.768 172.445C217.117 168.116 219.122 163.632 220.784 158.993C222.671 154.461 224.203 149.811 225.381 145.041C226.703 140.315 227.654 135.516 228.232 130.645C228.933 125.789 229.254 120.907 229.197 116C229.269 111.093 228.969 106.207 228.297 101.344C227.69 96.4727 226.714 91.6776 225.37 86.9585C224.459 82.102 223.18 77.3503 221.532 72.7034C219.458 68.2228 217.055 63.9228 214.324 59.8034C212.076 55.4167 209.51 51.2251 206.627 47.2286C203.476 43.4418 200.05 39.915 196.35 36.6485C193.04 32.9989 189.474 29.6276 185.651 26.5344C181.748 23.5208 177.636 20.8252 173.315 18.4476C169.022 16.0627 164.566 14.0175 159.948 12.3119C155.526 10.115 150.965 8.26848 146.268 6.77251C141.585 5.05251 136.801 3.70109 131.915 2.71823C126.936 2.53033 121.964 2.72184 116.999 3.29277C112.063 3.09041 107.142 3.26386 102.235 3.8131C97.3708 4.68033 92.6011 5.91251 87.9253 7.50966C83.0905 8.49974 78.3641 9.85478 73.7461 11.5748C69.2799 13.6634 64.9979 16.0807 60.9003 18.827C56.5208 21.089 52.3437 23.669 48.3689 26.567C44.4736 29.5806 40.8312 32.8724 37.4418 36.4425C33.9946 39.9403 30.8328 43.6839 27.9565 47.6731C24.9357 51.5395 22.2292 55.6155 19.8371 59.901C16.679 63.7963 13.8388 67.9048 11.3166 72.2265C9.35089 76.8228 7.74652 81.5455 6.50349 86.3948C5.80249 91.338 5.48089 96.3137 5.53871 101.322C4.20173 106.149 3.24417 111.042 2.66602 116C3.31644 120.95 4.33904 125.832 5.73383 130.645C6.03013 135.574 6.70223 140.448 7.75013 145.269C9.26055 149.966 11.1251 154.523 13.3437 158.938C14.6807 163.73 16.3754 168.387 18.4279 172.912C20.6827 177.37 23.259 181.634 26.157 185.703C29.438 189.461 32.99 192.955 36.8131 196.186C40.2314 199.792 43.9027 203.113 47.8269 206.148C51.4837 209.595 55.379 212.739 59.5127 215.579C63.9284 217.957 68.4994 219.987 73.2258 221.671C78.0606 222.95 82.9712 223.854 87.9578 224.381C92.5541 226.34 97.2696 227.937 102.104 229.173C107.04 229.859 112.005 230.17 116.999 230.105Z" stroke="#0F0F0F" stroke-width="5" />
            </svg>
            <p className={"select-none text-8xl sm:text-9xl z-20 text-color2 " + BluuNextTitling.className}>2</p>
          </div>
          <p className={"w-full text-3xl mx-auto text-center sm:text-left z-20 max-w-[800px] text-color2 " + BluuNextTitling.className}>Personnalisez Merlin en fournissant des informations spécifiques à votre entreprise. Cela permet à Merlin d&apos;adapter ses réponses à la voix et à l&apos;identité de votre marque, assurant des interactions authentiques en ligne.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center mt-20'>
          <div className='relative h-36 w-36 sm:h-56 sm:w-56 flex justify-center items-center'>
            <svg className='absolute h-full w-full' viewBox="0 0 232 233" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M116.999 230.105C121.949 229.527 126.831 228.573 131.644 227.243C136.566 226.911 141.43 226.206 146.235 225.129C150.947 223.677 155.522 221.874 159.959 219.72C164.592 218.043 169.065 216.024 173.38 213.66C178.149 211.94 182.749 209.873 187.179 207.46C190.735 203.89 194.005 200.067 196.99 195.991C200.293 192.327 203.299 188.431 206.009 184.305C209.232 180.576 212.152 176.623 214.768 172.445C217.117 168.116 219.122 163.632 220.784 158.993C222.671 154.461 224.203 149.811 225.381 145.041C226.703 140.315 227.654 135.516 228.232 130.645C228.933 125.789 229.254 120.907 229.197 116C229.269 111.093 228.969 106.207 228.297 101.344C227.69 96.4727 226.714 91.6776 225.37 86.9585C224.459 82.102 223.18 77.3503 221.532 72.7034C219.458 68.2228 217.055 63.9228 214.324 59.8034C212.076 55.4167 209.51 51.2251 206.627 47.2286C203.476 43.4418 200.05 39.915 196.35 36.6485C193.04 32.9989 189.474 29.6276 185.651 26.5344C181.748 23.5208 177.636 20.8252 173.315 18.4476C169.022 16.0627 164.566 14.0175 159.948 12.3119C155.526 10.115 150.965 8.26848 146.268 6.77251C141.585 5.05251 136.801 3.70109 131.915 2.71823C126.936 2.53033 121.964 2.72184 116.999 3.29277C112.063 3.09041 107.142 3.26386 102.235 3.8131C97.3708 4.68033 92.6011 5.91251 87.9253 7.50966C83.0905 8.49974 78.3641 9.85478 73.7461 11.5748C69.2799 13.6634 64.9979 16.0807 60.9003 18.827C56.5208 21.089 52.3437 23.669 48.3689 26.567C44.4736 29.5806 40.8312 32.8724 37.4418 36.4425C33.9946 39.9403 30.8328 43.6839 27.9565 47.6731C24.9357 51.5395 22.2292 55.6155 19.8371 59.901C16.679 63.7963 13.8388 67.9048 11.3166 72.2265C9.35089 76.8228 7.74652 81.5455 6.50349 86.3948C5.80249 91.338 5.48089 96.3137 5.53871 101.322C4.20173 106.149 3.24417 111.042 2.66602 116C3.31644 120.95 4.33904 125.832 5.73383 130.645C6.03013 135.574 6.70223 140.448 7.75013 145.269C9.26055 149.966 11.1251 154.523 13.3437 158.938C14.6807 163.73 16.3754 168.387 18.4279 172.912C20.6827 177.37 23.259 181.634 26.157 185.703C29.438 189.461 32.99 192.955 36.8131 196.186C40.2314 199.792 43.9027 203.113 47.8269 206.148C51.4837 209.595 55.379 212.739 59.5127 215.579C63.9284 217.957 68.4994 219.987 73.2258 221.671C78.0606 222.95 82.9712 223.854 87.9578 224.381C92.5541 226.34 97.2696 227.937 102.104 229.173C107.04 229.859 112.005 230.17 116.999 230.105Z" stroke="#0F0F0F" stroke-width="5" />
            </svg>
            <p className={"select-none text-8xl sm:text-9xl z-20 text-color2 " + BluuNextTitling.className}>3</p>
          </div>
          <p className={"w-full text-3xl mx-auto text-center sm:text-left z-20 max-w-[800px] text-color2 " + BluuNextTitling.className}>Passez à l&apos;étape d&apos;entraînement où Merlin analyse les commentaires passés et apprend des interactions antérieures, garantissant des réponses précises et contextuelles qui reflètent votre entreprise.</p>
        </div>
        <div className='flex flex-col sm:flex-row-reverse gap-10 sm:gap-20 justify-center items-center mt-20'>
          <div className='relative h-36 w-36 sm:h-56 sm:w-56 flex justify-center items-center'>
            <svg className='absolute h-full w-full' viewBox="0 0 232 233" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M116.999 230.105C121.949 229.527 126.831 228.573 131.644 227.243C136.566 226.911 141.43 226.206 146.235 225.129C150.947 223.677 155.522 221.874 159.959 219.72C164.592 218.043 169.065 216.024 173.38 213.66C178.149 211.94 182.749 209.873 187.179 207.46C190.735 203.89 194.005 200.067 196.99 195.991C200.293 192.327 203.299 188.431 206.009 184.305C209.232 180.576 212.152 176.623 214.768 172.445C217.117 168.116 219.122 163.632 220.784 158.993C222.671 154.461 224.203 149.811 225.381 145.041C226.703 140.315 227.654 135.516 228.232 130.645C228.933 125.789 229.254 120.907 229.197 116C229.269 111.093 228.969 106.207 228.297 101.344C227.69 96.4727 226.714 91.6776 225.37 86.9585C224.459 82.102 223.18 77.3503 221.532 72.7034C219.458 68.2228 217.055 63.9228 214.324 59.8034C212.076 55.4167 209.51 51.2251 206.627 47.2286C203.476 43.4418 200.05 39.915 196.35 36.6485C193.04 32.9989 189.474 29.6276 185.651 26.5344C181.748 23.5208 177.636 20.8252 173.315 18.4476C169.022 16.0627 164.566 14.0175 159.948 12.3119C155.526 10.115 150.965 8.26848 146.268 6.77251C141.585 5.05251 136.801 3.70109 131.915 2.71823C126.936 2.53033 121.964 2.72184 116.999 3.29277C112.063 3.09041 107.142 3.26386 102.235 3.8131C97.3708 4.68033 92.6011 5.91251 87.9253 7.50966C83.0905 8.49974 78.3641 9.85478 73.7461 11.5748C69.2799 13.6634 64.9979 16.0807 60.9003 18.827C56.5208 21.089 52.3437 23.669 48.3689 26.567C44.4736 29.5806 40.8312 32.8724 37.4418 36.4425C33.9946 39.9403 30.8328 43.6839 27.9565 47.6731C24.9357 51.5395 22.2292 55.6155 19.8371 59.901C16.679 63.7963 13.8388 67.9048 11.3166 72.2265C9.35089 76.8228 7.74652 81.5455 6.50349 86.3948C5.80249 91.338 5.48089 96.3137 5.53871 101.322C4.20173 106.149 3.24417 111.042 2.66602 116C3.31644 120.95 4.33904 125.832 5.73383 130.645C6.03013 135.574 6.70223 140.448 7.75013 145.269C9.26055 149.966 11.1251 154.523 13.3437 158.938C14.6807 163.73 16.3754 168.387 18.4279 172.912C20.6827 177.37 23.259 181.634 26.157 185.703C29.438 189.461 32.99 192.955 36.8131 196.186C40.2314 199.792 43.9027 203.113 47.8269 206.148C51.4837 209.595 55.379 212.739 59.5127 215.579C63.9284 217.957 68.4994 219.987 73.2258 221.671C78.0606 222.95 82.9712 223.854 87.9578 224.381C92.5541 226.34 97.2696 227.937 102.104 229.173C107.04 229.859 112.005 230.17 116.999 230.105Z" stroke="#0F0F0F" stroke-width="5" />
            </svg>
            <p className={"select-none text-8xl sm:text-9xl z-20 text-color2 " + BluuNextTitling.className}>4</p>
          </div>
          <p className={"w-full text-3xl mx-auto text-center sm:text-left z-20 max-w-[800px] text-color2 " + BluuNextTitling.className}>Après l&apos;entraînement, laissez Merlin répondre automatiquement aux nouveaux commentaires, offrant une réactivité immédiate tout en préservant la personnalité distinctive de votre entreprise. Consacrez votre temps à d&apos;autres aspects de votre activité en laissant Merlin gérer vos interactions en ligne.</p>
        </div>
        <a href='https://whop.com/merlin-by-azerty' target='_blank' className='relative flex justify-center items-center p-20 hover:scale-105 transition-all'>
          <svg className='w-full h-full absolute' viewBox="0 0 555 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.81424 3.5831V4.27833L58.3328 1.38673L112.851 5.85085L167.37 0.478074L221.888 6.88624L276.407 5.24804L330.925 0.746783L385.444 0.0136719L439.962 4.02546L494.481 7.76468L545.62 3.5831L544.657 29.2664L554.505 54.9498L548.941 80.6331L551.285 106.316L548.999 136.336L494.481 130.714L439.962 131.794L385.444 128.776L330.925 134.345L276.407 129.983L221.888 133.16L167.37 131.483L112.851 137.112L58.3328 134.426L0.848982 132L5.55043 106.316L5.63602 80.6331L7.62249 54.9498L0.291016 29.2664L3.81424 4.27833" className=' fill-color2 transition-all' />
          </svg>
          <p className={"pointer-events-none text-3xl sm:text-6xl z-20 text-color1 " + BluuNextTitling.className}>Commencer</p>
        </a>
      </div>
    </main>
  )
}
