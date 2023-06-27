// api 文件夹下 各个请求模块js ，都统一到index.js再向外导出
import { recommendMusic } from "./Home";
import { recommendNew } from "./Home";
import { searchKey } from "./Search";
import { searchList } from "./Search";
import { getSongById } from "./Play";
import { getLyricById } from "./Play";
export const recommendMusicApi = recommendMusic;//请求推荐歌单的方法导出
export const recommendNewApi = recommendNew;
export const searchKeyApi = searchKey;
export const searchListApi = searchList;
export const playSongApi = getSongById;
export const playSongLyricsApi = getLyricById;