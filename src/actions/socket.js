import io from 'socket.io-client'

import * as actionTypesServer from'../../common/actionTypesServer';
import * as actionTypesClient from '../../common/actionTypesClient';

const socket = io();

const init = (store) => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys( actionTypesServer )
    .forEach(type => socket.on( actionTypesServer[type], (payload) => {
    	store.dispatch({ type: actionTypesServer[type], payload })
    }))
}

const socketMiddleware = (function(){ 
	return store => next => action => {
		for ( let key in actionTypesClient ){
			if ( action.type === actionTypesClient[ key ] ){
				return socket.emit( action.type, action.payload )
			}
		}
		next( action );
	}
})();

export { socketMiddleware, init }
