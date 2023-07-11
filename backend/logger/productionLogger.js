const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp}  ${level}: ${message}`;
  });

const productionLogger = () =>{
    return  createLogger({
        level: 'debug',
        format:  combine(
            timestamp({format:"HH:mm:ss"}),
            myFormat
          ),
        // defaultMeta: { service: 'user-service' },
        transports: [
          new transports.Console()
        ],
      });

}


module.exports = productionLogger;