let {Server: SocketIO} = require('socket.io');

class Socket{
    static instance;
    constructor(http){
        if(Socket.instance){
            return Socket.instance;
        }
        Socket.instance = this;
        this.io = new SocketIO(http);
        this.messages = "";
        this.users = [];
    };
    init(){
        try {
            this.io.on('connection', socket =>{
                console.log('¡Usuario Conectado!')
                this.io.sockets.emit('init', this.messages);
                
                socket.on('message', data =>{
                    this.messages.push(data);
                    this.io.sockets.emit('listenServer', data);
                });

                socket.on('addUser', data =>{
                    if(this.users.length){
                        let user_verification = false;
                        this.users = this.users.map(user =>{
                            if(user.email == data.email){
                                user_verification = true;
                                return {
                                    id: socket.id,
                                    ...data,
                                    active:true
                                };
                            };
                        });
                if(!user_verification){
                    this.usuarios.push({
                        id: socket.id,
                        ...data,
                        active:true
                    });
                    };
                }else {
                    this.usuarios.push({
                        id: socket.id,
                        ...data,
                        active:true
                    });
                    };
                    // this.messages.push(data);
                    this.io.sockets.emit('loadUsers', this.usuarios);
                });
            });

            socket.on('disconnect', data =>{
                console.log('Se desconectó', socket.id);
                this.users = this.users.map(user =>{
                    if(user.id == socklet.id){
                        delete user.active;
                        return {
                            ...user,
                            active:false
                };
                    }else {
                        return user;
                }
            });
            this.io.sockets.emit('loadUsers', this.usuarios);
            });

        } catch (error) {
            console.log(error);
        };
    };
};

module.exports = Socket;