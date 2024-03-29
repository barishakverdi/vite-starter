import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    speed: 700,
    slidesPerView: 1,
    loop: false,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
        992: {
            slidesPerView: 2
        }
    }
});
