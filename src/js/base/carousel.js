import Swiper, {Navigation, Pagination, Autoplay, Parallax} from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },


    loop: false,
});
