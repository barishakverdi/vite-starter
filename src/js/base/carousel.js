import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    speed: 700,
    slidesPerView: 2,
    loop: false,
    autoplay: {
      delay: 5000,
    },
});
