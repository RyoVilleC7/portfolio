import store from './store';

export const deviceDirection = (arg)=>{
    return {
        type: 'DEVICE_TYPE',
        device: arg
    }
}

export const browserDirection = (arg)=>{
    return {
        type: 'BROWSER_TYPE',
        browser: arg
    }
}

export const orientationDirection = (arg)=>{
    return {
        type: 'ORIENTATION_TYPE',
        orientation: arg
    }
}

export const firstLoad = ()=>{
    return {
        type: 'FIRSTLOAD_TYPE'
    }
}

export const screenOut = ()=>{
    return {
        type: 'SCREEN_OUT_TYPE'
    };
};

export const soundSelect = ()=>{
    return {
        type: 'SOUND_SELECT_TYPE'
    };
};

export const soundSwitch = ()=>{
    const dir = store.getState().interactionReducer.soundSwitch;
    return (
        dir ? {
            type: 'SOUNDSWITCH_OFF_TYPE'
        } : {
            type: 'SOUNDSWITCH_ON_TYPE'
        }
    );
};

export const menuSwitch = ()=>{
    const dir = store.getState().interactionReducer.menuSwitch;
    return (
        dir ? {
            type: 'MENUSWITCH_OFF_TYPE'
        } : {
            type: 'MENUSWITCH_ON_TYPE'
        }
    );
};

export const pageTransition = ()=>{
    const dir = store.getState().interactionReducer.pageTransition;
    return (
        dir ? {
            type: 'PAGETRANSITION_END_TYPE'
        } : {
            type: 'PAGETRANSITION_START_TYPE'
        }
    );
}

export const windowResize = ()=>{
    return {
        type: 'WINDOWRESIZE_TYPE',
        w: window.innerWidth,
        h: window.innerHeight
    }
}

export const mouseEnter = ()=>{
    return {
        type: 'MOUSE_ENTER_TYPE'
    }
}

export const mouseLeave = ()=>{
    return {
        type: 'MOUSE_LEAVE_TYPE'
    }
}

export const mouseHoverIn = ()=>{
    return {
        type: 'MOUSE_HOVER_ENTER_TYPE'
    }
}

export const mouseHoverOut = ()=>{
    return {
        type: 'MOUSE_HOVER_LEAVE_TYPE'
    }
}

function requestFetch (){
    return {
        type: 'REQUEST_FETCH_TYPE'
    }
}

function receiveFetch (payload){
    return {
        type: 'RECIVE_FETCH_TYPE',
        payload
    }
}

export const fetchContents = () =>{
    return (dispatch)=>{
        dispatch(requestFetch());

        setTimeout(() => {
            return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(data => dispatch(receiveFetch(data)))
        }, 1000);
    }
}