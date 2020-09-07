const initialState = {
    soundSwitch: false,　//サウンド再生ボタン
    menuSwitch: false,　//メニュー出現ボタン
    pageTransition: false,　//ページ遷移中のみtrue
    windowSize: {　//画面のサイズを取得
        w:window.innerWidth,
        h:window.innerHeight
    }
};

export default function interactionReducer (state = initialState, action){
    switch (action.type) {
        case 'SOUNDSWITCH_ON_TYPE':
            return {
                ...state,
                soundSwitch: true,
            }
        case 'SOUNDSWITCH_OFF_TYPE':
            return {
                ...state,
                soundSwitch: false
            }
            case 'MENUSWITCH_ON_TYPE':
                return {
                    ...state,
                    menuSwitch: true
                }
            case 'MENUSWITCH_OFF_TYPE':
                return {
                    ...state,
                    menuSwitch: false
                }
            case 'PAGETRANSITION_START_TYPE':
                return {
                    ...state,
                    pageTransition: true
                }
            case 'PAGETRANSITION_END_TYPE':
                return {
                    ...state,
                    pageTransition: false
                }
        case 'WINDOWRESIZE_TYPE':
            return {
                ...state,
                windowSize: {w: action.w, h: action.h}
            }
        default:
            return state;
    };
};