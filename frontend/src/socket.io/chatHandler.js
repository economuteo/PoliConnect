import socket from "./socket";

export const startChat = (userId1, userId2) => {
    socket.emit("startChat", userId1, userId2);
};
