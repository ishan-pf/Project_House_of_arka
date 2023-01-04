import axios from 'axios';

const base_url = "http://localhost:4000/"

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTliMTY2ZTI5ODk5NWEwZWRiYzQ5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODY4MDgwNywiZXhwIjoxNjM4OTQwMDA3fQ.rhw8_99DYwxyP2eFUXD1DAvUn8QxrgYAZdfllOFKQwc"



export const publicReq = axios.create({
    baseURL: base_url,
})

export const UserReq = axios.create({
    baseURL: base_url,
    headers: { token : `Bearer ${Token}`}
});