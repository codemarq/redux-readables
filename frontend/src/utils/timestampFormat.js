import moment from 'moment'

const timestampFormat = timestamp => moment(timestamp).format("MM-DD-YYYY HH:mm:ss")

export default timestampFormat