export default function isDebug(){
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
}