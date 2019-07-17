// Utility function to convert string to UTF-8
import iconv from 'iconv-lite'
//@ts-ignore
import jschardet from 'jschardet'
/**
 * Convert character code to UTF-8
 * @ param {string} str string
 * @return {string} Character string converted to UTF-8
 */
export default function charsetConverter(buf: Buffer): string {
  let detected = jschardet.detect(buf) // Get character code
  if (detected.encoding !== 'utf8' && detected.encoding !== 'ascii' && detected.encoding !== 'ISO-8859-2') {
    return iconv.decode(buf, detected.encoding)
  } else {
    return buf.toString()
  }
}
