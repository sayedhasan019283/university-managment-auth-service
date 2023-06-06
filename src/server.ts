import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { errorLogger, logger } from './shared/logger'
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database connected successfully`)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to connected database ${error}`)
  }
}
main()
