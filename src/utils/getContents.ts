import http from 'http'
import https from 'https'
import followRedirects from 'follow-redirects'
import charsetConverter from './charsetConverter'

export default function getContents(url: string, redirectFlg?: boolean): Promise<string> {
  let httpRequest: any

  if (redirectFlg) {
    httpRequest = url.startsWith('https://') ? followRedirects.https : followRedirects.http
  } else {
    httpRequest = url.startsWith('https://') ? https : http
  }
  return new Promise(async function(resolve, reject) {
    httpRequest
      .get(url, function(res:any) {
        let chunks: Uint8Array[] = []
        res.on('data', function(data: Uint8Array) {
          chunks.push(data)
        })
        res.on('end', function() {
          let html = charsetConverter(Buffer.concat(chunks))
          resolve(html)
        })
      })
      .on('error', reject)
  })
}
