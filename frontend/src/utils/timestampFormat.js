import moment from 'moment'

const timestampFormat = timestamp => moment(timestamp).format("dddd, MMMM Do YYYY [at] h:mm:ss a")

export default timestampFormat