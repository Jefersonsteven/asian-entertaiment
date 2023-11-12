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

        default:
            return <p>😊</p>
    }
}