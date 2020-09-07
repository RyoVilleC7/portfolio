const initialState = {
    mouseEnter: false, //マウスが画面内に入った時true
    mouseLeave: true, //マウスが画面外に出た時true
    mouseHover: false　//マウスが特定の要素にホバーした時true
}

export default function mouseReducer (state = initialState, action){
    switch (action.type) {
        case 'MOUSE_ENTER_TYPE':
            return {
                ...state,
                mouseEnter: true,
                mouseLeave: false
            }
        case 'MOUSE_LEAVE_TYPE':
            return {
                ...state,
                mouseEnter: false,
                mouseLeave: true
            }
        case 'MOUSE_HOVER_ENTER_TYPE':
            return {
                ...state,
                mouseHover: true
            }
        case 'MOUSE_HOVER_LEAVE_TYPE':
            return {
                ...state,
                mouseHover: false
            }
        default:
            return state;
    };
};