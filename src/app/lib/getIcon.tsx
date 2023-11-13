import ArrowLeft from '../../../public/assets/icons/icon _arrow left_.svg';
import ArrowRight from '../../../public/assets/icons/icon _arrow right_.svg';
import Sort from '../../../public/assets/icons/icon _arrows sort_.svg';
import Google from '../../../public/assets/icons/icon _brand google_.svg';
import Instagram from '../../../public/assets/icons/icon _brand instagram_.svg';
import Youtube from '../../../public/assets/icons/icon _brand youtube_.svg';
import Twitter from '../../../public/assets/icons/x-twitter-logo 1.svg';
import ChevronLeft from '../../../public/assets/icons/icon _chevron left_.svg';
import ChevronRight from '../../../public/assets/icons/icon _chevron right_.svg';
import CirculeCheck from '../../../public/assets/icons/icon _circle check_.svg';
import Tv from '../../../public/assets/icons/icon _device tv_.svg';
import EyeClosed from '../../../public/assets/icons/icon _eye closed_.svg';
import Eye from '../../../public/assets/icons/icon _eye_.svg';
import Warning from '../../../public/assets/icons/icon _help triangle_.svg';
import Help from '../../../public/assets/icons/icon _help_.svg';
import Home from '../../../public/assets/icons/icon _home_.svg';
import Menu from '../../../public/assets/icons/icon _menu _.svg';
import Info from '../../../public/assets/icons/icon _info circle_.svg';
import EditPhoto from '../../../public/assets/icons/icon _photo edit_.svg';
import Play from '../../../public/assets/icons/icon _player play_.svg';
import AddPlayList from '../../../public/assets/icons/icon _playlist add_.svg';
import Plus from '../../../public/assets/icons/icon _plus_.svg';
import Search from '../../../public/assets/icons/icon _search_.svg';
import Settings from '../../../public/assets/icons/icon _settings_.svg';
import SortAscending from '../../../public/assets/icons/icon _sort ascending_.svg';
import SortDescending from '../../../public/assets/icons/icon _sort descending_.svg';
import Start from '../../../public/assets/icons/icon _star_.svg';
import Trash from '../../../public/assets/icons/icon _trash_.svg';
import User from '../../../public/assets/icons/icon _user_.svg';
import Close from '../../../public/assets/icons/icon _x letter_.svg';
import FlagChina from '../../../public/assets/flags/China.svg';
import FlagHonkong from '../../../public/assets/flags/HongKong.svg';
import FlagJapan from '../../../public/assets/flags/Japan.svg';
import FlagKorea from '../../../public/assets/flags/South-Korea.svg';
import FlagTaiwan from '../../../public/assets/flags/Taiwan.svg';
import FlagThailand from '../../../public/assets/flags/Thailand.svg';
import FlagVietnam from '../../../public/assets/flags/Vietnam.svg';
import FlagInfonesia from '../../../public/assets/flags/Indonesia.svg';
import FlagPhilippines from '../../../public/assets/flags/Philippines.svg';
import Disney from '../../../public/assets/logos/Disney+-logo.svg';
import Doramasflix from '../../../public/assets/logos/Doramaflix-logo.svg';
import Doramasqueen from '../../../public/assets/logos/Doramasqueen-logo.svg';
import Doramaswow from '../../../public/assets/logos/Doramaswow-logo.svg';
import Hbo from '../../../public/assets/logos/HBO-logo.svg';
import Hitv from '../../../public/assets/logos/HiTV-logo.svg';
import Iqiyi from '../../../public/assets/logos/IQIYI-logo.svg';
import Mangotv from '../../../public/assets/logos/Mango-TV-logo.svg';
import Netflix from '../../../public/assets/logos/Netflix-logo.svg';
import RakutenViki from '../../../public/assets/logos/Rakuten-Viki-logo.svg';
import Wetv from '../../../public/assets/logos/WeTV-logo.svg';
import Youku from '../../../public/assets/logos/Youku-logo.svg';

import { Icon } from './types/icon';

export default function getIcon(icon: Icon) {
    switch (icon) {
        case "arrow-left":
            return <ArrowLeft />

        case "arrow-right":
            return <ArrowRight />

        case "sort":
            return <Sort />

        case "google":
            return <Google />

        case "instagram":
            return <Instagram />

        case "youtube":
            return <Youtube />

        case "twitter":
            return <Twitter />

        case "chevron-left":
            return <ChevronLeft />

        case "chevron-right":
            return <ChevronRight />

        case "circle-check":
            return <CirculeCheck />

        case "tv":
            return <Tv />

        case "eye-closed":
            return <EyeClosed />

        case "eye":
            return <Eye />

        case "warning":
            return <Warning />

        case "help":
            return <Help />

        case "home":
            return <Home />

        case "menu":
            return <Menu />

        case "info":
            return <Info />

        case "edit-photo":
            return <EditPhoto />

        case "play":
            return <Play />

        case "add-playlist":
            return <AddPlayList />

        case "plus":
            return <Plus />

        case "search":
            return <Search />

        case "settings":
            return <Settings />

        case "sort-ascending":
            return <SortAscending />

        case "sort-descending":
            return <SortDescending />

        case "star":
            return <Start />

        case "trash":
            return <Trash />

        case "user":
            return <User />

        case "close":
            return <Close />

        case "flag-china":
            return <FlagChina />

        case "flag-hongkong":
            return <FlagHonkong />

        case "flag-japan":
            return <FlagJapan />

        case "flag-korea":
            return <FlagKorea />

        case "flag-taiwan":
            return <FlagTaiwan />

        case "flag-thailand":
            return <FlagThailand />

        case "flag-vietnam":
            return <FlagVietnam />

        case "flag-indonesia":
            return <FlagInfonesia />

        case "flag-philippines":
            return <FlagPhilippines />

        case "disney":
            return <Disney />

        case "doramasflix":
            return <Doramasflix />

        case "doramasqueen":
            return <Doramasqueen />

        case "doramaswow":
            return <Doramaswow />

        case "hbo":
            return <Hbo />

        case "hitv":
            return <Hitv />

        case "iqiyi":
            return <Iqiyi />

        case "mangotv":
            return <Mangotv />

        case "netflix":
            return <Netflix />

        case "rakuten-viki":
            return <RakutenViki />

        case "wetv":
            return <Wetv />

        case "youku":
            return <Youku />

        default:
            return <p>😊</p>
    }
}