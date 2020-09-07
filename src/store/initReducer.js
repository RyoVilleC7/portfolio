const initialState = {
    device: '', //デバイスの種類を取得
    browser: '', //ブラウザの種類を取得
    orientation: true, //デバイスの向きを取得
    firstLoad: false,　//初回ロード終了時true
    screenOut: false, //ローディング画面が完全にアウトした時true
    soundSelect: false　//初回サウンド形式を選んだ際にtrue
};

export default function initReducer (state = initialState, action){
    switch (action.type) {
        case 'DEVICE_TYPE':
            return {
                ...state,
                device: action.device
            }
        case 'BROWSER_TYPE':
            return {
                ...state,
                browser: action.browser
            }
        case 'ORIENTATION_TYPE':
            return {
                ...state,
                orientation: action.orientation
            }
        case 'FIRSTLOAD_TYPE':
            return {
                ...state,
                firstLoad: true
            }
        case 'SCREEN_OUT_TYPE':
            return {
                ...state,
                screenOut: true
            }

        case 'SOUND_SELECT_TYPE':
            return {
                ...state,
                soundSelect: true
            };

        default:
            return state;
    };
};