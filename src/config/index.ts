import dotenv from 'dotenv'
import Path from 'path'
dotenv.config({ path: Path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
}
